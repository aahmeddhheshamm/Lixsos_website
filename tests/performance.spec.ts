import { readdirSync, readFileSync, statSync } from 'node:fs'
import { extname, join, relative } from 'node:path'
import { gzipSync } from 'node:zlib'
import { expect, test } from '@playwright/test'
import { PUBLIC_DIR, TEMPLATE_PAGES } from './helpers'

/**
 * Budgets. Raise one only on purpose (e.g. a new feature that's worth the weight), never to make a failure go away.
 * Lab numbers are measured on a simulated mid-range phone: 4× slower CPU and a fast-4G connection.
 */
const BUDGET = {
  lcpMs: 2500, // Largest Contentful Paint: Google's "good" threshold
  cls: 0.1, // Cumulative Layout Shift: Google's "good" threshold
  tbtMs: 300, // Total Blocking Time (sum of long-task time over 50 ms)
  pageTransferKb: 600, // everything a page downloads from the site, compressed
  pageJsKb: 250, // JavaScript a page downloads, compressed
  htmlKb: 60, // each prerendered HTML file, gzipped
  cssKb: 40, // all CSS, gzipped
  imageKb: 300, // any single image in public/
}

const kb = (bytes: number) => Math.round(bytes / 1024)
const files = (dir: string): string[] =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name)
    return statSync(full).isDirectory() ? files(full) : [full]
  })
const gz = (file: string) => gzipSync(readFileSync(file)).length

test.describe('build size', () => {
  const all = files(PUBLIC_DIR)

  test('prerendered HTML pages are small', () => {
    const big = all
      .filter((f) => f.endsWith('.html'))
      .map((f) => [relative(PUBLIC_DIR, f), kb(gz(f))] as const)
      .filter(([, size]) => size > BUDGET.htmlKb)
      .map(([f, size]) => `${f}: ${size} KB`)
    expect(big, `HTML over ${BUDGET.htmlKb} KB gzipped`).toEqual([])
  })

  test('CSS is small', () => {
    const total = all.filter((f) => f.endsWith('.css')).reduce((sum, f) => sum + gz(f), 0)
    expect(kb(total), `total CSS gzipped (KB)`).toBeLessThanOrEqual(BUDGET.cssKb)
  })

  test('images are optimised', () => {
    const big = all
      .filter((f) => ['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif'].includes(extname(f).toLowerCase()))
      .map((f) => [relative(PUBLIC_DIR, f), kb(statSync(f).size)] as const)
      .filter(([, size]) => size > BUDGET.imageKb)
      .map(([f, size]) => `${f}: ${size} KB`)
    expect(big, `images over ${BUDGET.imageKb} KB (compress or convert to WebP/AVIF)`).toEqual([])
  })
})

test.describe('page load on a mid-range phone', () => {
  test.use({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true })

  for (const path of TEMPLATE_PAGES) {
    test(path, async ({ page, browserName }) => {
      test.skip(browserName !== 'chromium', 'throttling uses the Chrome DevTools Protocol')

      // Only the site's own files count: third-party requests (Google Fonts) are blocked so results don't depend on the internet
      await page.route(/^https?:\/\/(?!localhost)/, (route) => route.abort())

      const cdp = await page.context().newCDPSession(page)
      await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })
      await cdp.send('Network.enable')
      await cdp.send('Network.emulateNetworkConditions', {
        offline: false,
        latency: 40,
        downloadThroughput: (9 * 1024 * 1024) / 8,
        uploadThroughput: (1.5 * 1024 * 1024) / 8,
      })

      await page.addInitScript(() => {
        const w = window as unknown as { __perf: { lcp: number; cls: number; tbt: number } }
        w.__perf = { lcp: 0, cls: 0, tbt: 0 }
        new PerformanceObserver((l) => {
          for (const e of l.getEntries()) w.__perf.lcp = e.startTime
        }).observe({ type: 'largest-contentful-paint', buffered: true })
        new PerformanceObserver((l) => {
          for (const e of l.getEntries() as (PerformanceEntry & { value: number; hadRecentInput: boolean })[]) {
            if (!e.hadRecentInput) w.__perf.cls += e.value
          }
        }).observe({ type: 'layout-shift', buffered: true })
        new PerformanceObserver((l) => {
          for (const e of l.getEntries()) w.__perf.tbt += Math.max(0, e.duration - 50)
        }).observe({ type: 'longtask', buffered: true })
      })

      await page.goto(path, { waitUntil: 'load' })
      await page.waitForTimeout(1500) // let late shifts and hydration settle

      const result = await page.evaluate(() => {
        const w = window as unknown as { __perf: { lcp: number; cls: number; tbt: number } }
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
        const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const own = resources.filter((r) => r.name.startsWith(location.origin))
        return {
          ...w.__perf,
          transfer: own.reduce((s, r) => s + r.transferSize, 0) + nav.transferSize,
          js: own.filter((r) => r.initiatorType === 'script' || /\.m?js(\?|$)/.test(r.name)).reduce((s, r) => s + r.transferSize, 0),
        }
      })

      test.info().annotations.push({
        type: 'metrics',
        description: `LCP ${Math.round(result.lcp)} ms · CLS ${result.cls.toFixed(3)} · TBT ${Math.round(result.tbt)} ms · ${kb(result.transfer)} KB transferred (${kb(result.js)} KB JS)`,
      })

      expect.soft(Math.round(result.lcp), 'LCP (ms)').toBeLessThanOrEqual(BUDGET.lcpMs)
      expect.soft(Number(result.cls.toFixed(3)), 'CLS').toBeLessThanOrEqual(BUDGET.cls)
      expect.soft(Math.round(result.tbt), 'TBT (ms)').toBeLessThanOrEqual(BUDGET.tbtMs)
      expect.soft(kb(result.transfer), 'transferred (KB)').toBeLessThanOrEqual(BUDGET.pageTransferKb)
      expect.soft(kb(result.js), 'JavaScript transferred (KB)').toBeLessThanOrEqual(BUDGET.pageJsKb)
    })
  }
})
