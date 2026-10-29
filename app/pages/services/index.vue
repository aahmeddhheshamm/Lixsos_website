<script setup lang="ts">
import { processSteps, services, site } from '~/data/site'

const { t } = useI18n()
const l = useL()

usePageSeo({
  title: () => t('seo.services.title'),
  description: () => t('seo.services.description'),
})

useHead(() => ({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: services.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: { '@type': 'Service', name: l(s.title), description: l(s.text), url: `${site.url}/services/${s.slug}/`, provider: { '@type': 'Organization', name: site.name.en } },
        })),
      }),
    },
  ],
}))
</script>

<template>
  <div>
    <PageHero :title="$t('services.title')" :text="$t('services.text')">
      <template #title>{{ $t('services.title') }} <span class="text-gradient">{{ $t('services.hi') }}</span> {{ $t('services.after') }}</template>
    </PageHero>

    <section class="container-x space-y-6">
      <NuxtLinkLocale
        v-for="(s, i) in services"
        :key="s.slug"
        :to="`/services/${s.slug}`"
        class="group relative grid items-center gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900/40 p-8 transition-colors duration-500 hover:border-brand-cyan/40 md:grid-cols-12 md:p-12"
        data-reveal
      >
        <div class="pointer-events-none absolute inset-0 bg-gradient-brand opacity-0 transition-opacity duration-700 group-hover:opacity-[0.07]" />
        <span class="font-display text-6xl font-semibold text-white/10 transition-colors duration-500 group-hover:text-white/30 md:col-span-2">
          0{{ i + 1 }}
        </span>
        <div class="md:col-span-5">
          <div class="flex items-center gap-4">
            <span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-snow transition-transform duration-500 group-hover:rotate-12">
              <ServiceIcon :name="s.icon" />
            </span>
            <h2 class="text-3xl font-semibold md:text-4xl">{{ l(s.title) }}</h2>
          </div>
          <p class="mt-5 text-lg leading-relaxed text-muted">{{ l(s.text) }}</p>
        </div>
        <ul class="space-y-3 md:col-span-4 md:col-start-9">
          <li v-for="p in l(s.points)" :key="p" class="flex items-center gap-3 border-b border-white/10 pb-3 text-slate-200">
            <span class="h-1.5 w-1.5 rounded-full bg-brand-cyan" /> {{ p }}
          </li>
          <li class="pt-2 text-sm font-medium text-brand-cyan">{{ $t('services.learnMore') }} {{ $t('common.arrow') }}</li>
        </ul>
      </NuxtLinkLocale>
    </section>

    <section class="container-x mt-32">
      <SectionHeading :eyebrow="$t('services.processEyebrow')" title="" center>
        <template #title>{{ $t('services.processTitle') }} <span class="text-gradient">{{ $t('services.processHi') }}</span></template>
      </SectionHeading>
      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(step, i) in processSteps"
          :key="step.title.en"
          class="rounded-3xl border border-white/10 bg-ink-900/50 p-8"
          data-reveal
          :data-reveal-delay="i * 0.12"
        >
          <span class="text-gradient font-display text-4xl font-semibold">0{{ i + 1 }}</span>
          <h3 class="mt-6 text-2xl font-semibold">{{ l(step.title) }}</h3>
          <p class="mt-2 text-muted">{{ l(step.text) }}</p>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
