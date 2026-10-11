# LIXSOS Technologies — Website

Dark-mode, animated portfolio site for LIXSOS (software development, digital marketing & LIXSOS ERP).

**Stack:** Nuxt 4 · @nuxtjs/i18n (English + Arabic/RTL) · Tailwind CSS v4 · GSAP ScrollTrigger · Lenis smooth scroll · @nuxtjs/sitemap · @nuxtjs/robots

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static site in .output/public (fully prerendered, SEO-friendly)
```

## Languages

English is served at `/`, Arabic at `/ar` (right-to-left, Cairo + IBM Plex Sans Arabic fonts).
The URL decides the language (no automatic redirects, which is best for SEO); visitors switch with the header button.

## Light / dark mode

Dark is the default; the sun/moon button in the header switches theme with a circular reveal animation.
The choice is saved in `localStorage` and applied by an inline script before first paint (no flash).

How it works (`app/assets/css/main.css`): `html.light` re-maps the palette tokens, so existing classes flip
automatically — `text-white` becomes the dark ink, `bg-ink-*` become light surfaces, `border-white/10` becomes a dark hairline.

- Use `text-snow` for text that must stay white in both themes (e.g. on the brand gradient).
- Use the `light:` variant for one-off tweaks, e.g. `text-emerald-400 light:text-emerald-600`.

## Where to edit content

There are two places, both bilingual:

**1. Content (dummy data)** — `app/data/`. Every text field is an `{ en, ar }` pair, so both languages of an item sit side by side:

| File | Contents |
| --- | --- |
| `site.ts` | Company info, stats, services, clients, testimonials, team, values, timeline |
| `projects.ts` | Portfolio case studies (each gets `/work/<slug>` and `/ar/work/<slug>`) |
| `erp.ts` | LIXSOS ERP modules, features, pricing |

In components, `const l = useL()` then `l(item.title)` picks the current language.

**2. Interface text** (buttons, headings, SEO titles) — `i18n/locales/en.json` and `i18n/locales/ar.json`, used via `$t('key')`.

Change `site.url` in `app/data/site.ts` to your real domain — it drives canonical URLs, Open Graph tags, sitemap and robots.txt.

## Pages

`/` · `/services` · `/work` · `/work/[slug]` · `/erp` · `/about` · `/contact`

## SEO

- Static prerender of every page (including all case studies)
- Per-page title, description, Open Graph & Twitter tags in each language (`usePageSeo` composable)
- `lang`/`dir`, canonical, `hreflang` alternates and `og:locale` per language (`useLocaleHead` in `app.vue`)
- JSON-LD: Organization, Service list, SoftwareApplication (ERP), CreativeWork (case studies)
- Auto sitemap index with one sitemap per language, and `robots.txt`
- Scroll animations keep content visible without JS (crawler-safe), respect `prefers-reduced-motion`

## Animations

- Add `data-reveal` (optionally `="left" | "right" | "scale"` and `data-reveal-delay="0.2"`) to any element to animate it in on scroll — see `app/plugins/motion.client.ts`.
- `data-parallax="0.2"` for parallax drift.
- Elements are picked up automatically whenever they appear in the DOM (including after page transitions).
- Components: `NetworkCanvas` (interactive circuit background), `TiltCard` (3D tilt + spotlight), `CursorGlow`, `ClientMarquee`, `StatCounter`, animated `LogoMark`.

## TODO before launch

- Connect the contact form in `app/pages/contact.vue` to an API / email service (currently simulated).
- Replace dummy projects, clients, testimonials and team with real ones.
- Add a 1200×630 `public/og-image.png` and pass it to `usePageSeo({ image })`.
