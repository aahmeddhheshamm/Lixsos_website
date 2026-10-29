import { expect, test, type Page } from '@playwright/test'
import { TEMPLATE_PAGES } from './helpers'

const VIEWPORTS = [
  { name: 'small phone', width: 320, height: 640 },
  { name: 'phone', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'laptop', width: 1024, height: 768 },
  { name: 'desktop', width: 1440, height: 900 },
]
const DESKTOP_NAV = 1024 // lg breakpoint: links in the bar above it, hamburger menu below

// Scroll through the page so scroll-triggered reveals run and lazy content appears
async function scrollThrough(page: Page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 60))
    }
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(400)
}

// Elements sticking out past the right/left edge, for a readable failure message
const overflowing = (page: Page) =>
  page.evaluate(() => {
    const vw = document.documentElement.clientWidth
    const clipped = (el: Element) => {
      // body/html are skipped: body has overflow-x hidden, which would hide every culprit
      for (let p = el.parentElement; p && p !== document.body && p !== document.documentElement; p = p.parentElement) {
        const o = getComputedStyle(p)
        if (/(hidden|clip|auto|scroll)/.test(o.overflowX)) return true
      }
      return false
    }
    return [...document.querySelectorAll('body *')]
      .filter((el) => {
        const r = el.getBoundingClientRect()
        return r.width > 0 && (r.right > vw + 1 || r.left < -1) && !clipped(el)
      })
      .slice(0, 5)
      .map((el) => `<${el.tagName.toLowerCase()} class="${(el.getAttribute('class') ?? '').slice(0, 60)}">`)
  })

for (const vp of VIEWPORTS) {
  test.describe(`${vp.name} (${vp.width}px)`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } })

    for (const path of TEMPLATE_PAGES) {
      test(`${path} has no horizontal scroll`, async ({ page }) => {
        await page.goto(path)
        await scrollThrough(page)
        // Reveal animations slide content in from the side, so the page is briefly wider while they run.
        // Poll until it settles: overflow that lasts still fails.
        const extra = () => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
        await expect.poll(extra, { timeout: 4000 }).toBeLessThanOrEqual(0).catch(async (e) => {
          throw new Error(`page is ${await extra()}px wider than the screen; overflowing: ${(await overflowing(page)).join(', ')}\n${e}`)
        })
      })
    }

    test('header fits and navigation is reachable', async ({ page }) => {
      for (const path of ['/', '/ar/']) {
        await page.goto(path)
        const nav = page.locator('header nav')
        const fits = await nav.evaluate((el) => el.scrollWidth <= el.clientWidth)
        expect(fits, `${path}: header content wider than the bar`).toBe(true)

        const desktopLinks = nav.locator('ul a')
        const menuButton = nav.locator('button[aria-controls="mobile-menu"]')

        if (vp.width >= DESKTOP_NAV) {
          await expect(desktopLinks.first()).toBeVisible()
          await expect(menuButton).toBeHidden()
        } else {
          await expect(desktopLinks.first()).toBeHidden()
          await expect(menuButton).toBeVisible()
          const box = await menuButton.boundingBox()
          expect(box!.width, 'menu button tap target').toBeGreaterThanOrEqual(40)
          expect(box!.height, 'menu button tap target').toBeGreaterThanOrEqual(40)

          await menuButton.click()
          const menu = page.locator('#mobile-menu')
          await expect(menu).toBeVisible()
          await expect(menuButton).toHaveAttribute('aria-expanded', 'true')
          for (const link of await menu.locator('a').all()) {
            await expect(link).toBeVisible()
            const r = await link.boundingBox()
            expect(r!.x, 'menu link inside the screen').toBeGreaterThanOrEqual(0)
            expect(r!.x + r!.width, 'menu link inside the screen').toBeLessThanOrEqual(vp.width + 1)
          }
          await page.keyboard.press('Escape')
          await expect(menu).toBeHidden()
        }
      }
    })
  })
}
