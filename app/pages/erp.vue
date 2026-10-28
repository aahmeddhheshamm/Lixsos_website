<script setup lang="ts">
import { erpFeatures, erpModules, erpPlans } from '~/data/erp'
import { site } from '~/data/site'

const { t } = useI18n()
const l = useL()

usePageSeo({
  title: () => t('seo.erp.title'),
  description: () => t('seo.erp.description'),
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'LIXSOS ERP',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        inLanguage: ['en', 'ar'],
        publisher: { '@type': 'Organization', name: site.name.en, url: site.url },
        offers: { '@type': 'Offer', price: '49', priceCurrency: 'USD' },
      }),
    },
  ],
})
</script>

<template>
  <div>
    <!-- The navy note: the ERP section printed on the logo's navy -->
    <section class="bg-navy pb-20 pt-32 text-snow md:pt-40">
      <div class="container-x grid items-end gap-14 lg:grid-cols-12">
        <div class="lg:col-span-6">
          <h1 class="h-page text-snow">{{ $t('erp.title') }}<br>{{ $t('erp.hi') }}</h1>
          <p class="mt-8 max-w-xl text-lg leading-relaxed text-snow/80 md:text-xl">{{ $t('erp.text') }}</p>
          <div class="mt-10 flex flex-wrap gap-3">
            <NuxtLinkLocale to="/contact" class="btn-snow">{{ $t('erp.demo') }}</NuxtLinkLocale>
            <a href="#pricing" class="btn-snow-line">{{ $t('erp.pricing') }}</a>
          </div>
        </div>
        <div class="lg:col-span-6">
          <ErpDashboard />
        </div>
      </div>
    </section>

    <!-- Modules -->
    <section class="container-x mt-24 md:mt-32">
      <SectionHeading title="" :text="$t('erp.modulesText')">
        <template #title>{{ $t('erp.modulesTitle') }} <span class="hi">{{ $t('erp.modulesHi') }}</span></template>
      </SectionHeading>
      <dl class="mt-12 grid border-t border-rule-strong sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="m in erpModules" :key="m.name.en" class="border-b border-rule py-7 sm:pe-8">
          <dt class="font-display text-[1.5rem] leading-tight">{{ l(m.name) }}</dt>
          <dd class="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{{ l(m.text) }}</dd>
        </div>
      </dl>
    </section>

    <!-- Why -->
    <section class="container-x mt-24 grid gap-14 md:mt-32 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <SectionHeading title="">
          <template #title>{{ $t('erp.whyTitle') }} <span class="hi">{{ $t('erp.whyHi') }}</span> {{ $t('erp.whyAfter') }}</template>
        </SectionHeading>
        <p class="mt-6 text-lg leading-relaxed text-ink-soft">{{ $t('erp.whyText') }}</p>
      </div>
      <ul class="border-t border-rule-strong lg:col-span-6 lg:col-start-7">
        <li v-for="f in erpFeatures" :key="f.title.en" class="grid gap-1 border-b border-rule py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
          <h3 class="font-sans text-[1.05rem] font-semibold">{{ l(f.title) }}</h3>
          <p class="text-ink-soft">{{ l(f.text) }}</p>
        </li>
      </ul>
    </section>

    <!-- Pricing: three notes, the recommended one printed on navy -->
    <section id="pricing" class="container-x mt-24 scroll-mt-24 md:mt-32">
      <SectionHeading title="" :text="$t('erp.pricingText')">
        <template #title>{{ $t('erp.pricingTitle') }} <span class="hi">{{ $t('erp.pricingHi') }}</span></template>
      </SectionHeading>
      <div class="mt-12 grid gap-5 lg:grid-cols-3">
        <div
          v-for="plan in erpPlans"
          :key="plan.name.en"
          class="note flex flex-col p-7 md:p-9"
          :class="plan.highlighted ? 'plan-hi bg-navy text-snow' : 'bg-paper-3'"
        >
          <div class="flex items-start justify-between gap-4">
            <h3 class="text-[1.9rem] leading-tight" :class="plan.highlighted ? 'text-snow' : ''">{{ l(plan.name) }}</h3>
            <span v-if="plan.highlighted" class="mt-2 shrink-0 border border-snow/50 px-2 py-0.5 text-xs font-semibold">{{ $t('erp.popular') }}</span>
          </div>
          <p class="mt-2 text-[0.95rem]" :class="plan.highlighted ? 'text-snow/75' : 'text-ink-soft'">{{ l(plan.text) }}</p>
          <div class="mt-8 flex items-end gap-2 border-b pb-6" :class="plan.highlighted ? 'border-snow/30' : 'border-rule'">
            <span class="font-display text-[3.2rem] leading-none" dir="ltr">{{ plan.custom ? $t('erp.custom') : plan.price }}</span>
            <span v-if="plan.perUser" class="pb-1 text-sm" :class="plan.highlighted ? 'text-snow/75' : 'text-ink-soft'">{{ $t('erp.perUser') }}</span>
          </div>
          <ul class="mt-6 flex-1 space-y-3">
            <li v-for="f in l(plan.features)" :key="f" class="flex items-start gap-3 text-[0.95rem]">
              <svg viewBox="0 0 16 16" class="mt-1 h-3.5 w-3.5 shrink-0" :class="plan.highlighted ? '' : 'text-primary'" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-8" /></svg>
              {{ f }}
            </li>
          </ul>
          <NuxtLinkLocale to="/contact" class="mt-9 w-full" :class="plan.highlighted ? 'btn-snow justify-center' : 'btn-line'">
            {{ plan.custom ? $t('erp.contactSales') : $t('erp.trial') }}
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <CtaBanner :title="$t('erp.ctaTitle')" :text="$t('erp.ctaText')" />
  </div>
</template>

<style scoped>
.plan-hi {
  border-color: var(--color-navy);
  box-shadow: inset 0 0 0 5px var(--color-navy), inset 0 0 0 6px rgb(245 246 251 / 0.3);
}
</style>
