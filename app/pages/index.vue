<script setup lang="ts">
import { projects } from '~/data/projects'
import { services, site } from '~/data/site'
import { erpModules } from '~/data/erp'

const { t, locale } = useI18n()
const l = useL()

usePageSeo({
  title: () => t('seo.home.title'),
  description: () => l(site.description),
})

const featured = projects.filter((p) => p.featured)
const projectIndex = (slug: string) => projects.findIndex((p) => p.slug === slug)

// The four denominations printed along the bottom edge of the hero note
const denominations = ['web-development', 'mobile-apps', 'digital-marketing', 'lixsos-erp']
  .map((slug) => services.find((s) => s.slug === slug)!)
  .filter(Boolean)
// The logo's spectrum, outer ring to inner
const rosetteInks = ['#22d3ee', '#3b82f6', '#8b5cf6', '#22d3ee']
const active = ref<number | null>(null)
// Printed twice on the note, top and bottom, like a banknote serial
const serial = `LX ${new Date().getFullYear()} 0001`

// Turning the note over when the visitor switches language
const flipping = ref(false)

onMounted(() => {
  try {
    if (sessionStorage.getItem('lixsos-flip')) {
      sessionStorage.removeItem('lixsos-flip')
      flipping.value = true
    }
  } catch {}
})
</script>

<template>
  <div>
    <!-- HERO: one note, seen face-on -->
    <section class="pt-[5.5rem] sm:pt-24">
      <div class="container-x">
        <div class="note-wrap" :class="{ 'is-flipping': flipping }">
          <div class="note bg-paper-3 px-5 pb-0  sm:px-8  lg:px-12">

            <div class="grid items-center gap-6 py-7 md:py-14 lg:grid-cols-12 lg:gap-6">
              <div class="lg:col-span-7">
                <h1 class="h-hero">
                  {{ $t('home.headline') }} <span class="hi">{{ $t('home.words').split(',')[0] }}</span>
                </h1>
                <p class="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft sm:mt-7 sm:text-lg md:text-xl">
                  {{ $t('home.intro') }} <strong class="font-semibold text-ink">{{ $t('home.introErp') }}</strong>.
                </p>
                <div class="mt-7 flex flex-wrap gap-3 sm:mt-9">
                  <NuxtLinkLocale to="/contact" class="btn">{{ $t('home.bookCall') }}</NuxtLinkLocale>
                  <NuxtLinkLocale to="/work" class="btn-line">{{ $t('home.seeWork') }}</NuxtLinkLocale>
                </div>
              </div>

              <!-- Rosette with the logo as its watermark -->
              <div class="relative mx-auto aspect-square w-full max-w-[8.5rem] text-ink sm:max-w-[23rem] lg:col-span-5 lg:max-w-[27rem]">
                <Guilloche :inks="rosetteInks" :active="active" />
                <div class="absolute inset-0 grid place-items-center">
                  <LogoMark :size="64" class="h-[18%] w-[18%]" />
                </div>
              </div>
            </div>

            <!-- Bottom edge: the denominations -->
            <ul class="-mx-5 grid grid-cols-2 border-t border-rule-strong sm:-mx-8 lg:-mx-12 lg:grid-cols-4">
              <li
                v-for="(s, i) in denominations"
                :key="s.slug"
                class="border-rule [&:nth-child(odd)]:border-e lg:border-e lg:last:border-e-0 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
               
              >
                <NuxtLinkLocale
                  :to="s.more ?? `/services/${s.slug}`"
                  class="denom group block h-full px-5 py-4 sm:px-8 sm:py-5 lg:px-6"
                  @mouseenter="active = i"
                  @mouseleave="active = null"
                  @focus="active = i"
                  @blur="active = null"
                >
                  <span class="block font-display text-[1.3rem] leading-tight transition-colors group-hover:text-primary sm:text-[1.45rem]">{{ l(s.title) }}</span>
                  <span class="mt-1.5 line-clamp-2 hidden text-sm leading-snug text-ink-soft sm:block">{{ l(s.text) }}</span>
                </NuxtLinkLocale>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES: the full ledger of denominations -->
    <section class="container-x mt-28 md:mt-36">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading title="">
          <template #title>{{ $t('home.servicesTitle') }} <span class="hi">{{ $t('home.servicesHi') }}</span></template>
        </SectionHeading>
        <NuxtLinkLocale to="/services" class="link-rule shrink-0 pb-2 text-ink">{{ $t('home.allServices') }}</NuxtLinkLocale>
      </div>

      <ul class="mt-12 border-t border-rule-strong">
        <li v-for="s in services" :key="s.slug" class="border-b border-rule">
          <NuxtLinkLocale :to="`/services/${s.slug}`" class="ledger-row group grid items-baseline gap-x-8 gap-y-2 py-6 md:grid-cols-12 md:py-7">
            <h3 class="text-[1.65rem] leading-tight transition-colors group-hover:text-primary md:col-span-4 md:text-[2rem]">{{ l(s.title) }}</h3>
            <p class="text-ink-soft md:col-span-6">{{ l(s.text) }}</p>
            <svg viewBox="0 0 24 24" class="hidden h-5 w-5 justify-self-end text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-primary rtl:-scale-x-100 rtl:group-hover:-translate-x-1 md:col-span-1 md:block" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </NuxtLinkLocale>
        </li>
      </ul>
    </section>

    <!-- WORK: an uncut sheet of real projects -->
    <section class="mt-28 md:mt-36">
      <div class="container-x flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading title="">
          <template #title>{{ $t('home.workTitle') }} <span class="hi">{{ $t('home.workHi') }}</span></template>
        </SectionHeading>
        <NuxtLinkLocale to="/work" class="link-rule shrink-0 pb-2 text-ink">{{ $t('home.viewAll') }}</NuxtLinkLocale>
      </div>
      <div class="container-x mt-12">
        <div class="sheet grid sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard v-for="p in featured" :key="p.slug" :project="p" :index="projectIndex(p.slug)" />
        </div>
      </div>
    </section>

    <!-- ERP: the navy note -->
    <section class="mt-28 bg-navy text-snow md:mt-36">
      <div class="container-x grid items-center gap-14 py-20 md:py-24 lg:grid-cols-12">
        <div class="lg:col-span-6">
          <h2 class="h-section text-snow">{{ $t('home.erpTitle') }} {{ $t('home.erpHi') }}</h2>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-snow/80">{{ $t('home.erpText') }}</p>
          <ul class="mt-9 grid grid-cols-1 border-t border-snow/25 sm:grid-cols-2">
            <li v-for="m in erpModules.slice(0, 6)" :key="m.name.en" class="flex items-center gap-3 border-b border-snow/25 py-3 text-[0.95rem] sm:[&:nth-child(odd)]:pe-6">
              <svg viewBox="0 0 16 16" class="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-8" /></svg>
              {{ l(m.name) }}
            </li>
          </ul>
          <div class="mt-10 flex flex-wrap gap-3">
            <NuxtLinkLocale to="/erp" class="btn-snow">{{ $t('home.erpDiscover') }}</NuxtLinkLocale>
            <NuxtLinkLocale to="/contact" class="btn-snow-line">{{ $t('home.erpDemo') }}</NuxtLinkLocale>
          </div>
        </div>
        <div class="lg:col-span-6">
          <ErpDashboard />
        </div>
      </div>
    </section>

    <!-- PROCESS: fixed stations, in order -->
    <section class="container-x mt-28 md:mt-36">
      <SectionHeading title="">
        <template #title>{{ $t('home.processTitle') }} <span class="hi">{{ $t('home.processHi') }}</span></template>
      </SectionHeading>
      <ProcessStations class="mt-12" />
    </section>

    <CtaBanner />
  </div>
</template>

<style scoped>

/* Language switch: the note turns over to its other face */
.note-wrap {
  perspective: 1800px;
}
.note-wrap.is-flipping > .note {
  animation: turn-over 0.9s var(--ease-print) both;
  transform-origin: center;
}
@keyframes turn-over {
  from { transform: rotateY(-88deg); opacity: 0.4; }
  to { transform: none; opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .note-wrap.is-flipping > .note {
    animation: none;
  }
}
</style>
