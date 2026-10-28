<script setup lang="ts">
import { processSteps, services, site } from '~/data/site'

const route = useRoute()
const { t } = useI18n()
const l = useL()

const index = services.findIndex((s) => s.slug === route.params.slug)
const service = services[index]

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found', fatal: true })
}

const next = services[(index + 1) % services.length]!

usePageSeo({
  title: () => t('seo.service.title', { title: l(service.title) }),
  description: () => l(service.text),
})

useHead(() => ({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: l(service.title),
        description: l(service.text),
        url: `${site.url}${route.path}`,
        provider: { '@type': 'Organization', name: site.name.en, url: site.url },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: l(service.title),
          itemListElement: service.features.map((f) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: l(f.title), description: l(f.text) },
          })),
        },
      }),
    },
  ],
}))
</script>

<template>
  <article v-if="service">
    <PageHero :eyebrow="$t('service.eyebrow')" :title="l(service.title)" :text="l(service.text)">
      <div class="hero-cta mt-10 flex flex-wrap items-center gap-4">
        <NuxtLinkLocale to="/contact" class="btn-primary">{{ $t('service.start') }} {{ $t('common.arrow') }}</NuxtLinkLocale>
        <NuxtLinkLocale v-if="service.more" :to="service.more" class="btn-ghost">{{ $t('service.more') }}</NuxtLinkLocale>
        <NuxtLinkLocale v-else to="/services" class="btn-ghost">{{ $t('service.all') }}</NuxtLinkLocale>
      </div>
    </PageHero>

    <!-- Core expertise -->
    <section class="container-x">
      <div class="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-ink-900/40 p-8 md:flex-row md:items-center md:p-12" data-reveal>
        <span class="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-snow">
          <ServiceIcon :name="service.icon" />
        </span>
        <div>
          <h2 class="text-sm uppercase tracking-widest text-muted">{{ $t('service.included') }}</h2>
          <ul class="mt-4 flex flex-wrap gap-3">
            <li v-for="p in l(service.points)" :key="p" class="glass rounded-full px-5 py-2 text-sm text-white">{{ p }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="container-x mt-32">
      <SectionHeading :eyebrow="$t('service.featuresEyebrow')" title="">
        <template #title>{{ $t('service.featuresTitle') }} <span class="text-gradient">{{ l(service.title) }}</span></template>
      </SectionHeading>
      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(f, i) in service.features"
          :key="f.title.en"
          class="rounded-3xl border border-white/10 bg-ink-900/50 p-8 transition-colors duration-300 hover:border-brand-cyan/40"
          data-reveal
          :data-reveal-delay="(i % 3) * 0.1"
        >
          <span class="grid h-10 w-10 place-items-center rounded-full bg-brand-cyan/15 text-brand-cyan">✓</span>
          <h3 class="mt-6 text-2xl font-semibold">{{ l(f.title) }}</h3>
          <p class="mt-3 leading-relaxed text-muted">{{ l(f.text) }}</p>
        </div>
      </div>
    </section>

    <!-- Grouped offerings -->
    <section v-if="service.groups?.length" class="container-x mt-32">
      <SectionHeading :eyebrow="$t('service.groupsEyebrow')" title="">
        <template #title>{{ $t('service.groupsTitle') }} <span class="text-gradient">{{ $t('service.groupsHi') }}</span></template>
      </SectionHeading>
      <div class="mt-16 grid gap-6 lg:grid-cols-3">
        <div
          v-for="(g, i) in service.groups"
          :key="g.title.en"
          class="rounded-3xl border border-white/10 bg-ink-900/50 p-8 transition-colors duration-300 hover:border-brand-cyan/40"
          data-reveal
          :data-reveal-delay="i * 0.1"
        >
          <span class="text-gradient font-display text-4xl font-semibold">0{{ i + 1 }}</span>
          <h3 class="mt-6 text-2xl font-semibold">{{ l(g.title) }}</h3>
          <ul class="mt-6 space-y-4">
            <li v-for="item in g.items" :key="item.title.en" class="flex gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
              <span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-cyan/15 text-xs text-brand-cyan">✓</span>
              <div>
                <p class="text-slate-200">{{ l(item.title) }}</p>
                <p v-if="item.text" class="mt-1 text-sm leading-relaxed text-muted">{{ l(item.text) }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Process -->
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

    <!-- Next service -->
    <section class="container-x mt-32">
      <NuxtLinkLocale
        :to="`/services/${next.slug}`"
        class="group block overflow-hidden rounded-[2rem] border border-white/10 p-10 transition hover:border-white/30 md:p-16"
        data-reveal
      >
        <span class="text-sm uppercase tracking-[0.3em] text-muted">{{ $t('service.next') }}</span>
        <div class="mt-4 flex items-center justify-between gap-6">
          <span class="font-display text-4xl font-semibold text-white transition-transform duration-500 group-hover:translate-x-3 rtl:group-hover:-translate-x-3 md:text-7xl">
            {{ l(next.title) }}
          </span>
          <span class="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-2xl text-ink-950 transition-transform duration-500 group-hover:rotate-[-45deg] rtl:group-hover:rotate-45">
            {{ $t('common.arrow') }}
          </span>
        </div>
      </NuxtLinkLocale>
    </section>

    <CtaBanner />
  </article>
</template>

<style scoped>
.hero-cta {
  animation: fade-up 1s 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
}
</style>
