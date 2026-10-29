import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { expect, test } from '@playwright/test'
import * as projectData from '../app/data/projects'
import * as siteData from '../app/data/site'
import { flatMessages, localeOf, sitemapPaths, TEMPLATE_PAGES } from './helpers'

const en = flatMessages('en')
const ar = flatMessages('ar')
const ARABIC = /[؀-ۿ]/
const placeholders = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort()
// Headings are split into title / highlighted word / `…After` so the word can be coloured;
// word order means the trailing part is legitimately empty in some languages
const mayBeEmpty = (key: string) => /After$/.test(key)
// Brand and tech names stay in Latin script in Arabic ("LIXSOS ERP", "Nuxt / Vue / React"),
// so only flag text with no Arabic that reads as an English sentence
const ENGLISH_WORDS = /\b(the|and|or|to|of|for|with|your|our|we|you|in|on|is|are|a|an|from|that|this)\b/i
const isEnglishSentence = (s: string) => s.trim().split(/\s+/).length > 1 && !ARABIC.test(s) && ENGLISH_WORDS.test(s)

test.describe('locale files', () => {
  test('en and ar have exactly the same keys', () => {
    const missingInAr = Object.keys(en).filter((k) => !(k in ar))
    const missingInEn = Object.keys(ar).filter((k) => !(k in en))
    expect(missingInAr, 'keys in en.json but not ar.json').toEqual([])
    expect(missingInEn, 'keys in ar.json but not en.json').toEqual([])
  })

  test('no empty translations', () => {
    const empty = [...Object.entries(en).map(([k, v]) => ['en', k, v]), ...Object.entries(ar).map(([k, v]) => ['ar', k, v])]
      .filter(([, k, v]) => !v.trim() && !mayBeEmpty(k))
      .map(([l, k]) => `${l}: ${k}`)
    expect(empty).toEqual([])
  })

  test('placeholders like {name} match between languages', () => {
    const mismatched = Object.keys(en)
      .filter((k) => k in ar && placeholders(en[k]).join() !== placeholders(ar[k]).join())
      .map((k) => `${k}: en {${placeholders(en[k])}} vs ar {${placeholders(ar[k])}}`)
    expect(mismatched).toEqual([])
  })

  test('Arabic text is actually translated', () => {
    // A sentence (two or more words) in ar.json should contain Arabic script, not leftover English
    const untranslated = Object.entries(ar)
      .filter(([, v]) => isEnglishSentence(v))
      .map(([k, v]) => `${k}: "${v}"`)
    expect(untranslated).toEqual([])
  })
})

test('every translation key used in the code exists', () => {
  const files: string[] = []
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name)
      if (statSync(full).isDirectory()) walk(full)
      else if (/\.(vue|ts)$/.test(name)) files.push(full)
    }
  }
  walk(join(import.meta.dirname, '..', 'app'))

  const missing: string[] = []
  for (const file of files) {
    const src = readFileSync(file, 'utf8')
    for (const m of src.matchAll(/\$?\bt\(\s*(['"`])([^'"`]+)\1/g)) {
      const key = m[2]
      const rel = file.split('/app/')[1]
      if (key.includes('${')) {
        // Dynamic key such as `nav.${link.key}`: at least the static prefix must exist
        const prefix = key.split('${')[0]
        if (!Object.keys(en).some((k) => k.startsWith(prefix))) missing.push(`${rel}: ${key}`)
      } else if (!(key in en)) {
        missing.push(`${rel}: ${key}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('bilingual data (services, projects, site) has both en and ar', () => {
  const problems: string[] = []
  const walk = (value: unknown, path: string) => {
    if (Array.isArray(value)) return value.forEach((v, i) => walk(v, `${path}[${i}]`))
    if (!value || typeof value !== 'object') return
    const obj = value as Record<string, unknown>
    if ('en' in obj || 'ar' in obj) {
      // A bilingual value is either { en: string, ar: string } or { en: string[], ar: string[] }
      if (Array.isArray(obj.en) || Array.isArray(obj.ar)) {
        const enList = Array.isArray(obj.en) ? obj.en : []
        const arList = Array.isArray(obj.ar) ? obj.ar : []
        if (enList.length !== arList.length) problems.push(`${path}: ${enList.length} en items vs ${arList.length} ar items`)
        arList.forEach((v, i) => {
          if (typeof v !== 'string' || !v.trim()) problems.push(`${path}.ar[${i}] is empty`)
          else if (isEnglishSentence(v)) problems.push(`${path}.ar[${i}] is not Arabic: "${v}"`)
        })
        enList.forEach((v, i) => (typeof v !== 'string' || !v.trim()) && problems.push(`${path}.en[${i}] is empty`))
        return
      }
      if (typeof obj.en !== 'string' || !obj.en.trim()) problems.push(`${path}.en is missing`)
      if (typeof obj.ar !== 'string' || !obj.ar.trim()) problems.push(`${path}.ar is missing`)
      else if (isEnglishSentence(obj.ar)) problems.push(`${path}.ar is not Arabic: "${obj.ar}"`)
      return
    }
    for (const [k, v] of Object.entries(obj)) walk(v, `${path}.${k}`)
  }
  for (const [name, value] of Object.entries({ ...siteData, ...projectData })) walk(value, name)
  expect(problems).toEqual([])
})

test.describe('rendered pages', () => {
  // Raw keys such as "contact.title" on a page mean a missing translation
  const keys = Object.keys(en).filter((k) => k.includes('.'))

  for (const path of sitemapPaths()) {
    test(`${path} is fully translated`, async ({ page }) => {
      const locale = localeOf(path)
      await page.goto(path)

      const html = page.locator('html')
      await expect(html).toHaveAttribute('lang', locale === 'ar' ? /^ar/ : /^en/)
      await expect(html).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr')

      const text = await page.locator('body').innerText()
      const leaked = keys.filter((k) => text.includes(k))
      expect(leaked, 'translation keys shown as text').toEqual([])

      const h1 = await page.locator('h1').first().innerText()
      if (locale === 'ar') expect(h1, 'Arabic page heading').toMatch(ARABIC)
      else expect(h1, 'English page heading').not.toMatch(ARABIC)
    })
  }

  for (const path of TEMPLATE_PAGES) {
    test(`${path} language switcher opens the same page in the other language`, async ({ page }) => {
      await page.goto(path)
      const locale = localeOf(path)
      const expected = locale === 'ar' ? path.replace(/^\/ar\//, '/') : path === '/' ? '/ar/' : `/ar${path}`
      const href = await page.locator('a[hreflang]').first().getAttribute('href')
      expect(href).toBe(expected)
    })
  }
})
