<script setup lang="ts">
import { navLinks, services, site } from '~/data/site'

const l = useL()
const year = new Date().getFullYear()
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
              class="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xs uppercase text-slate-300 transition hover:-translate-y-1 hover:border-brand-cyan hover:text-white"
              :aria-label="name"
              dir="ltr"
            >
              {{ String(name).slice(0, 2) }}
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

      <p
        class="pointer-events-none mt-20 select-none text-center font-['Space_Grotesk'] text-[18vw] font-bold leading-none tracking-tighter text-white/[0.03] md:text-[14rem]"
        aria-hidden="true"
        dir="ltr"
      >
        LIXSOS
      </p>

      <div class="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted sm:flex-row">
        <p>© {{ year }} {{ l(site.name) }}. {{ $t('footer.rights') }}</p>
        <p>{{ $t('footer.crafted') }}</p>
      </div>
    </div>
  </footer>
</template>
