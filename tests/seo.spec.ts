import { expect, test, type Page } from '@playwright/test'
import { localeOf, prerenderedPaths, SITE_URL, sitemapPaths } from './helpers'

// Check the prerendered HTML (what crawlers get first), so JavaScript is off
test.use({ javaScriptEnabled: false })

const pages = sitemapPaths()
const counterpart = (path: string) => (localeOf(path) === 'ar' ? path.replace(/^\/ar\//, '/') : path === '/' ? '/ar/' : `/ar${path}`)

const meta = (page: Page, selector: string) => page.locator(selector).first().getAttribute('content')
// "https://lixsos.com" and "https://lixsos.com/" are the same URL, so compare normalised forms
const norm = (url: string | null | undefined) => (url ? new URL(url).href : url)

test.describe('every page', () => {
  for (const path of pages) {
    test(path, async ({ page }) => {
      const res = await page.goto(path)
      expect(res?.status(), 'HTTP status').toBe(200)
      const canonical = `${SITE_URL}${path}`
      const locale = localeOf(path)

      // Title and description: present and within what search results display
      const title = await page.title()
      expect(title.length, `title "${title}"`).toBeGreaterThanOrEqual(10)
      expect(title.length, `title "${title}"`).toBeLessThanOrEqual(70)
      const description = (await meta(page, 'meta[name="description"]')) ?? ''
      expect(description.length, `description "${description}"`).toBeGreaterThanOrEqual(50)
      expect(description.length, `description "${description}"`).toBeLessThanOrEqual(170)

      // Indexable, with a canonical pointing at itself
      expect(await meta(page, 'meta[name="robots"]') ?? '').not.toMatch(/noindex/)
      expect(norm(await page.locator('link[rel="canonical"]').getAttribute('href')), 'canonical').toBe(canonical)

      // hreflang alternates for both languages plus x-default, all absolute
      const alternates = Object.fromEntries(
        await page.locator('link[rel="alternate"][hreflang]').evaluateAll((els) => els.map((e) => [e.getAttribute('hreflang'), e.getAttribute('href')])),
      )
      const other = `${SITE_URL}${counterpart(path)}`
      const enHref = locale === 'en' ? canonical : other
      const arHref = locale === 'ar' ? canonical : other
      expect(norm(Object.entries(alternates).find(([k]) => k?.startsWith('en'))?.[1]), 'hreflang en').toBe(enHref)
      expect(norm(Object.entries(alternates).find(([k]) => k?.startsWith('ar'))?.[1]), 'hreflang ar').toBe(arHref)
      expect(norm(alternates['x-default']), 'hreflang x-default').toBe(enHref)

      // Social previews
      expect(await meta(page, 'meta[property="og:title"]'), 'og:title').toBeTruthy()
      expect(await meta(page, 'meta[property="og:description"]'), 'og:description').toBeTruthy()
      expect(await meta(page, 'meta[property="og:image"]'), 'og:image').toMatch(/^https:\/\//)
      expect(norm(await meta(page, 'meta[property="og:url"]')), 'og:url').toBe(canonical)
      expect(await meta(page, 'meta[name="twitter:card"]'), 'twitter:card').toBeTruthy()

      // Content structure
      await expect(page.locator('html')).toHaveAttribute('lang', locale === 'ar' ? /^ar/ : /^en/)
      await expect(page.locator('h1'), 'exactly one h1').toHaveCount(1)
      const noAlt = await page.locator('img:not([alt])').evaluateAll((els) => els.map((e) => e.getAttribute('src')))
      expect(noAlt, 'images without alt').toEqual([])

      // Structured data must be valid JSON
      for (const json of await page.locator('script[type="application/ld+json"]').allTextContents()) {
        expect(() => JSON.parse(json), 'JSON-LD').not.toThrow()
      }
    })
  }
})

test('titles and descriptions are unique', async ({ page }) => {
  const seen = { title: new Map<string, string>(), description: new Map<string, string>() }
  const duplicates: string[] = []
  for (const path of pages) {
    await page.goto(path)
    const values = { title: await page.title(), description: (await meta(page, 'meta[name="description"]')) ?? '' }
    for (const kind of ['title', 'description'] as const) {
      const first = seen[kind].get(values[kind])
      if (first) duplicates.push(`${kind} of ${path} is the same as ${first}`)
      else seen[kind].set(values[kind], path)
    }
  }
  expect(duplicates).toEqual([])
})

test('internal links all resolve', async ({ page, request }) => {
  const links = new Set<string>()
  for (const path of pages) {
    await page.goto(path)
    for (const href of await page.locator('a[href^="/"]').evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''))) {
      links.add(href.split('#')[0])
    }
  }
  const broken: string[] = []
  for (const href of links) {
    const res = await request.get(href, { maxRedirects: 0 })
    if (res.status() !== 200) broken.push(`${href} → ${res.status()}`)
  }
  expect(broken, 'links that 404 or redirect (a redirect usually means a missing trailing slash)').toEqual([])
})

test('robots.txt allows crawling and points at the sitemap', async ({ request }) => {
  const robots = await (await request.get('/robots.txt')).text()
  expect(robots).not.toMatch(/^Disallow:\s*\/\s*$/m)
  const sitemap = robots.match(/^Sitemap:\s*(\S+)/m)?.[1]
  expect(sitemap, 'Sitemap line').toBeTruthy()
  const res = await request.get(new URL(sitemap!).pathname)
  expect(res.status()).toBe(200)
  expect(await res.text()).toContain('<sitemapindex')
})

test('every prerendered page is in the sitemap', () => {
  // Pages that exist but aren't listed are hard for search engines to find
  const listed = new Set(pages)
  const missing = prerenderedPaths().filter((p) => !listed.has(p) && !p.startsWith('/sitemap.xml'))
  expect(missing).toEqual([])
})

test('/sitemap.xml is a real sitemap', async ({ request }) => {
  // Crawlers and Search Console try /sitemap.xml by default
  const res = await request.get('/sitemap.xml')
  expect(res.status()).toBe(200)
  expect(res.headers()['content-type']).toMatch(/xml/)
})

test('unknown pages return a 404 that is not indexed', async ({ page }) => {
  const res = await page.goto('/this-page-does-not-exist/')
  expect(res?.status()).toBe(404)
  expect(await meta(page, 'meta[name="robots"]')).toMatch(/noindex/)
})
