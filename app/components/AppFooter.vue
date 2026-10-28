<script setup lang="ts">
import { navLinks, services, site } from '~/data/site'

const l = useL()
const year = new Date().getFullYear()
const socialNames: Record<string, string> = { linkedin: 'LinkedIn', instagram: 'Instagram', x: 'X', behance: 'Behance' }
</script>

<template>
  <footer class="relative mt-32 bg-paper-2">
    <div class="container-x pb-10 pt-16">
      <div class="grid gap-12 md:grid-cols-12">
        <div class="md:col-span-5">
          <AppLogo />
          <p class="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">{{ l(site.description) }}</p>
          <ul class="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li v-for="(href, name) in site.socials" :key="name">
              <a :href="href" target="_blank" rel="noopener" class="link-rule text-ink" dir="ltr">{{ socialNames[name] ?? name }}</a>
            </li>
          </ul>
        </div>

        <nav class="md:col-span-2" :aria-label="$t('footer.nav')">
          <h3 class="font-sans text-sm font-semibold text-ink">{{ $t('footer.company') }}</h3>
          <ul class="mt-4 space-y-2.5 text-[0.95rem] text-ink-soft">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLinkLocale :to="link.to" class="hover:text-primary hover:underline">{{ $t(`nav.${link.key}`) }}</NuxtLinkLocale>
            </li>
            <li><NuxtLinkLocale to="/contact" class="hover:text-primary hover:underline">{{ $t('nav.contact') }}</NuxtLinkLocale></li>
          </ul>
        </nav>

        <div class="md:col-span-2">
          <h3 class="font-sans text-sm font-semibold text-ink">{{ $t('footer.services') }}</h3>
          <ul class="mt-4 space-y-2.5 text-[0.95rem] text-ink-soft">
            <li v-for="s in services" :key="s.slug">
              <NuxtLinkLocale :to="`/services/${s.slug}`" class="hover:text-primary hover:underline">{{ l(s.title) }}</NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <address class="not-italic md:col-span-3">
          <h3 class="font-sans text-sm font-semibold text-ink">{{ $t('footer.touch') }}</h3>
          <ul class="mt-4 space-y-2.5 text-[0.95rem] text-ink-soft">
            <li><a :href="`mailto:${site.email}`" class="link-rule text-ink">{{ site.email }}</a></li>
            <li><a :href="`tel:${site.phone.replace(/\s/g, '')}`" class="link-rule text-ink" dir="ltr">{{ site.phone }}</a></li>
            <li>{{ l(site.address) }}</li>
          </ul>
        </address>
      </div>

    

      <div class="border-t pt-2  mt-6 flex flex-col justify-center gap-2 text-xs text-ink-soft sm:flex-row">
        <p>© {{ year }} {{ l(site.name) }}. {{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>
