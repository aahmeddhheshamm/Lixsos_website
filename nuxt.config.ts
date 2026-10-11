import tailwindcss from '@tailwindcss/vite'
import { projects } from './app/data/projects'
import { site } from './app/data/site'
import { THEME_STORAGE_KEY } from './app/data/theme'

const projectRoutes = projects.flatMap((p) => [`/work/${p.slug}`, `/ar/work/${p.slug}`])

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger', 'lenis'],
    },
  },

  i18n: {
    baseUrl: site.url,
    defaultLocale: 'en',
    // English at /, Arabic at /ar
    strategy: 'prefix_except_default',
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
  },

  sitemap: {
    // Dynamic case-study pages; the i18n integration adds hreflang alternates
    urls: projects.map((p) => `/work/${p.slug}`),
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'color-scheme', content: 'dark light' }],
      script: [
        // Runs before first paint: mark JS as available (scroll-reveal elements start hidden)
        // and apply the saved light/dark theme so there is no flash of the wrong theme.
        {
          innerHTML: `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='light')d.classList.add('light')}catch(e){}})()`,
          tagPosition: 'head',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&family=Cairo:wght@500;600;700;800&display=swap',
        },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/ar', '/sitemap.xml', ...projectRoutes],
    },
  },
})
