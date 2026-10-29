<script setup lang="ts">
import { navLinks, services, site } from '~/data/site'

const l = useL()
const year = new Date().getFullYear()

// 24×24 brand glyphs (Simple Icons), keyed like site.socials
const socialIcons: Record<string, string> = {
  x: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z',
  facebook: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  snapchat: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z',
}
</script>

<template>
  <footer class="relative mt-32 overflow-hidden border-t border-white/10">
    <div class="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-violet/20 blur-[120px]" />

    <div class="container-x relative py-16">
      <div class="grid gap-12 md:grid-cols-12">
        <div class="md:col-span-5">
          <AppLogo />
          <p class="mt-6 max-w-sm text-sm leading-relaxed text-muted">{{ l(site.description) }}</p>
          <div class="mt-6 flex gap-3">
            <a
              v-for="(href, name) in site.socials"
              :key="name"
              :href="href"
              target="_blank"
              rel="noopener"
              class="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:-translate-y-1 hover:border-brand-cyan hover:text-white"
              :aria-label="name"
            >
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true"><path :d="socialIcons[name]" /></svg>
            </a>
          </div>
        </div>

        <nav class="md:col-span-2" :aria-label="$t('footer.nav')">
          <h3 class="text-sm font-semibold uppercase tracking-widest text-white">{{ $t('footer.company') }}</h3>
          <ul class="mt-4 space-y-3 text-sm text-muted">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLinkLocale :to="link.to" class="hover:text-white">{{ $t(`nav.${link.key}`) }}</NuxtLinkLocale>
            </li>
            <li><NuxtLinkLocale to="/contact" class="hover:text-white">{{ $t('nav.contact') }}</NuxtLinkLocale></li>
          </ul>
        </nav>

        <div class="md:col-span-2">
          <h3 class="text-sm font-semibold uppercase tracking-widest text-white">{{ $t('footer.services') }}</h3>
          <ul class="mt-4 space-y-3 text-sm text-muted">
            <li v-for="s in services" :key="s.slug">
              <NuxtLinkLocale :to="`/services/${s.slug}`" class="hover:text-white">{{ l(s.title) }}</NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <address class="not-italic md:col-span-3">
          <h3 class="text-sm font-semibold uppercase tracking-widest text-white">{{ $t('footer.touch') }}</h3>
          <ul class="mt-4 space-y-3 text-sm text-muted">
            <li><a :href="`mailto:${site.email}`" class="hover:text-white">{{ site.email }}</a></li>
            <li><a :href="`tel:${site.phone.replace(/\s/g, '')}`" class="hover:text-white" dir="ltr">{{ site.phone }}</a></li>
            <li>{{ l(site.address) }}</li>
          </ul>
        </address>
      </div>

      <div class="mt-8 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 text-xs text-muted sm:flex-row">
        <p>© {{ year }} {{ l(site.name) }}. {{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>
