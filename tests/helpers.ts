import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { site } from '../app/data/site'

export const SITE_URL = site.url.replace(/\/$/, '')
export const PUBLIC_DIR = join(import.meta.dirname, '..', '.output', 'public')
export const LOCALES_DIR = join(import.meta.dirname, '..', 'i18n', 'locales')

export type Locale = 'en' | 'ar'
export const localeOf = (path: string): Locale => (path === '/ar/' || path.startsWith('/ar/') ? 'ar' : 'en')

/** Every page path listed in the generated sitemaps, e.g. `/`, `/ar/work/toyz/`. */
export function sitemapPaths(): string[] {
  const dir = join(PUBLIC_DIR, '__sitemap__')
  const paths = readdirSync(dir)
    .filter((f) => f.endsWith('.xml'))
    .flatMap((f) => [...readFileSync(join(dir, f), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname))
  return [...new Set(paths)].sort()
}

/** One page per template, in both languages: enough to cover every layout without loading all 62 pages. */
export const TEMPLATE_PAGES = ['/', '/services/', '/services/web-development/', '/work/', '/work/al-shiaka/', '/erp/', '/about/', '/contact/'].flatMap(
  (p) => [p, p === '/' ? '/ar/' : `/ar${p}`],
)

/** Every prerendered page on disk (folders containing index.html), as URL paths. */
export function prerenderedPaths(): string[] {
  const out: string[] = []
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name)
      if (statSync(full).isDirectory()) walk(full)
      else if (name === 'index.html') out.push(`/${relative(PUBLIC_DIR, dir)}/`.replace(/\/+/g, '/'))
    }
  }
  walk(PUBLIC_DIR)
  return out.sort()
}

/** Locale file flattened to dotted keys, e.g. { 'contact.title': 'Contact us' }. */
export function flatMessages(locale: Locale): Record<string, string> {
  const out: Record<string, string> = {}
  const walk = (obj: Record<string, unknown>, prefix: string) => {
    for (const [k, v] of Object.entries(obj)) {
      const key = prefix ? `${prefix}.${k}` : k
      if (v && typeof v === 'object') walk(v as Record<string, unknown>, key)
      else out[key] = String(v)
    }
  }
  walk(JSON.parse(readFileSync(join(LOCALES_DIR, `${locale}.json`), 'utf8')), '')
  return out
}
