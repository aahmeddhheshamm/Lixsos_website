import tailwindcss from '@tailwindcss/vite'
import { projects } from './app/data/projects'
import { services, site } from './app/data/site'
import { THEME_STORAGE_KEY } from './app/data/theme'

// GitHub Pages serves every page as /path/ (it redirects /path → /path/), so all URLs use a trailing slash
const projectRoutes = projects.flatMap((p) => [`/work/${p.slug}/`, `/ar/work/${p.slug}/`])
const serviceRoutes = services.flatMap((s) => [`/services/${s.slug}/`, `/ar/services/${s.slug}/`])

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: true },

  experimental: {
    defaults: {
      nuxtLink: { trailingSlash: 'append' },
    },
  },

  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/fonts'],

  // Fonts are downloaded at build time and served from the site itself (no third-party font requests)
  fonts: {
    defaults: { weights: [400, 500, 600, 700], subsets: ['latin', 'latin-ext', 'arabic'] },
    families: [
      { name: 'Roboto', provider: 'google', weights: [300, 400, 500, 600, 700] },
      { name: 'Roboto Mono', provider: 'google', weights: [400, 500] },
      { name: 'Amiri', provider: 'google', weights: [400, 700] },
      { name: 'Noto Sans Arabic', provider: 'google' },
    ],
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    baseUrl: site.url,
    defaultLocale: 'en',
    // English at /, Arabic at /ar
    strategy: 'prefix_except_default',
    trailingSlash: true,
    locales: [
      { code: 'en', language: 'en-US', name: 'English', dir: 'ltr', file: 'en.json' },
      { code: 'ar', language: 'ar-EG', name: 'العربية', dir: 'rtl', file: 'ar.json' },
    ],
    // The URL alone decides the language (no auto-redirects): better for SEO and avoids
    // bouncing visitors whose browser lists Arabic as a secondary language.
    detectBrowserLanguage: false,
  },

  site: {
    url: site.url,
    name: site.name.en,
    trailingSlash: true,
  },

  sitemap: {
    // Dynamic case-study and service pages; the i18n integration adds hreflang alternates
    urls: [...projects.map((p) => `/work/${p.slug}/`), ...services.map((s) => `/services/${s.slug}/`)],
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'color-scheme', content: 'light dark' }],
      script: [
        // Runs before first paint: apply dark unless the visitor chose light so there is no flash of the wrong theme.
        {
          innerHTML: `(function(){var d=document.documentElement,t=null;try{t=localStorage.getItem('${THEME_STORAGE_KEY}')}catch(e){}if(t!=='light')d.classList.add('dark')})()`,
          tagPosition: 'head',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/ar/', '/sitemap.xml', ...projectRoutes, ...serviceRoutes],
    },
  },
})
