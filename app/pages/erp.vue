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
    <PageHero :eyebrow="$t('erp.eyebrow')" title="LIXSOS ERP" :text="$t('erp.text')">
      <template #title>{{ $t('erp.title') }}<br><span class="text-gradient">{{ $t('erp.hi') }}</span></template>
      <div class="hero-cta mt-10 flex flex-wrap gap-4">
        <NuxtLinkLocale to="/contact" class="btn-primary">{{ $t('erp.demo') }} {{ $t('common.arrow') }}</NuxtLinkLocale>
        <a href="#pricing" class="btn-ghost">{{ $t('erp.pricing') }}</a>
      </div>
    </PageHero>

    <section class="container-x">
      <div class="mx-auto max-w-5xl" data-reveal="scale">
        <ErpDashboard />
      </div>
    </section>

    <!-- Modules -->
    <section class="container-x mt-32">
      <SectionHeading :eyebrow="$t('erp.modulesEyebrow')" title="" center :text="$t('erp.modulesText')">
        <template #title>{{ $t('erp.modulesTitle') }} <span class="text-gradient">{{ $t('erp.modulesHi') }}</span></template>
      </SectionHeading>
      <div class="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <TiltCard v-for="(m, i) in erpModules" :key="m.name.en" class="rounded-3xl" data-reveal :data-reveal-delay="(i % 4) * 0.08">
          <div class="h-full rounded-3xl border border-white/10 bg-ink-900/50 p-7 transition-colors hover:border-brand-violet/50">
            <span class="font-display text-sm text-primary">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="mt-4 text-xl font-semibold">{{ l(m.name) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">{{ l(m.text) }}</p>
          </div>
        </TiltCard>
      </div>
    </section>

    <!-- Features -->
    <section class="container-x mt-32 grid items-center gap-16 lg:grid-cols-2">
      <div>
        <SectionHeading :eyebrow="$t('erp.whyEyebrow')" title="">
          <template #title>{{ $t('erp.whyTitle') }} <span class="text-gradient">{{ $t('erp.whyHi') }}</span> {{ $t('erp.whyAfter') }}</template>
        </SectionHeading>
        <p class="mt-6 text-lg text-muted" data-reveal>{{ $t('erp.whyText') }}</p>
      </div>
      <div class="grid gap-4 sm:grid-cols-2">
        <div
          v-for="(f, i) in erpFeatures"
          :key="f.title.en"
          class="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          data-reveal
          :data-reveal-delay="i * 0.06"
        >
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-primary text-slate-100">✦</span>
          <h3 class="mt-4 text-lg font-semibold">{{ l(f.title) }}</h3>
          <p class="mt-1 text-sm text-muted">{{ l(f.text) }}</p>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="container-x mt-32 scroll-mt-28">
      <SectionHeading :eyebrow="$t('erp.pricingEyebrow')" title="" center :text="$t('erp.pricingText')">
        <template #title>{{ $t('erp.pricingTitle') }} <span class="text-gradient">{{ $t('erp.pricingHi') }}</span></template>
      </SectionHeading>
      <div class="mt-16 grid gap-6 lg:grid-cols-3">
        <div
          v-for="(plan, i) in erpPlans"
          :key="plan.name.en"
          class="relative rounded-[2rem] p-px"
          :class="plan.highlighted ? 'bg-gradient-brand lg:-translate-y-4' : 'bg-white/10'"
          data-reveal
          :data-reveal-delay="i * 0.1"
        >
          <div class="h-full rounded-[calc(2rem-1px)] bg-ink-900 p-8">
            <span v-if="plan.highlighted" class="absolute end-6 top-6 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-snow">{{ $t('erp.popular') }}</span>
            <h3 class="text-2xl font-semibold">{{ l(plan.name) }}</h3>
            <p class="mt-2 text-sm text-muted">{{ l(plan.text) }}</p>
            <div class="mt-8 flex items-end gap-1">
              <span class="font-display text-5xl font-semibold text-white">{{ plan.custom ? $t('erp.custom') : plan.price }}</span>
              <span v-if="plan.perUser" class="pb-2 text-sm text-muted">{{ $t('erp.perUser') }}</span>
            </div>
            <ul class="mt-8 space-y-3">
              <li v-for="f in l(plan.features)" :key="f" class="flex items-center gap-3 text-sm text-slate-200">
                <span class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-[0.65rem] text-slate-100">✓</span>
                {{ f }}
              </li>
            </ul>
            <NuxtLinkLocale to="/contact" class="mt-10 w-full" :class="plan.highlighted ? 'btn-primary' : 'btn-ghost'">
              {{ plan.custom ? $t('erp.contactSales') : $t('erp.trial') }}
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner :title="$t('erp.ctaTitle')" :text="$t('erp.ctaText')" />
  </div>
</template>

<style scoped>
.hero-cta {
  animation: fade-up 1s 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
}
</style>
