<script setup lang="ts">
import { services, site } from '~/data/site'

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
  <article v-if="service" class="">
    <PageHero :title="l(service.title)" :text="l(service.text)">
      <div class="mt-10 flex flex-wrap items-center gap-3">
        <NuxtLinkLocale to="/contact" class="btn">{{ $t('service.start') }}</NuxtLinkLocale>
        <NuxtLinkLocale v-if="service.more" :to="service.more" class="btn-line">{{ $t('service.more') }}</NuxtLinkLocale>
        <NuxtLinkLocale v-else to="/services" class="btn-line">{{ $t('service.all') }}</NuxtLinkLocale>
      </div>
    </PageHero>

    <!-- Core expertise, printed as a strip -->
    <section class="container-x">
      <div class="flex flex-col gap-4 border-y border-rule-strong py-6 md:flex-row md:items-baseline md:gap-10">
        <h2 class="shrink-0 font-sans text-sm font-semibold text-ink-soft">{{ $t('service.included') }}</h2>
        <ul class="flex flex-wrap gap-x-8 gap-y-2 font-display text-[1.35rem] text-primary">
          <li v-for="p in l(service.points)" :key="p">{{ p }}</li>
        </ul>
      </div>
    </section>

    <!-- Features -->
    <section class="container-x mt-24 md:mt-32">
      <SectionHeading title="">
        <template #title>{{ $t('service.featuresTitle') }} <span class="text-primary">{{ l(service.title) }}</span></template>
      </SectionHeading>
      <dl class="mt-12 grid border-t border-rule-strong md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(f, i) in service.features"
          :key="f.title.en"
          class="border-b border-rule py-8 md:pe-10"
        >
          <dt class="font-display text-[1.6rem] leading-tight">{{ l(f.title) }}</dt>
          <dd class="mt-3 leading-relaxed text-ink-soft">{{ l(f.text) }}</dd>
        </div>
      </dl>
    </section>

    <!-- Grouped offerings -->
    <section v-if="service.groups?.length" class="container-x mt-24 md:mt-32">
      <SectionHeading title="">
        <template #title>{{ $t('service.groupsTitle') }} <span class="hi">{{ $t('service.groupsHi') }}</span></template>
      </SectionHeading>
      <div class="mt-12 grid gap-px border border-rule-strong bg-rule-strong lg:grid-cols-3">
        <div v-for="g in service.groups" :key="g.title.en" class="bg-paper p-7 md:p-9">
          <h3 class="text-[1.75rem] leading-tight">{{ l(g.title) }}</h3>
          <ul class="mt-6">
            <li v-for="item in g.items" :key="item.title.en" class="border-t border-rule py-4">
              <p class="font-semibold">{{ l(item.title) }}</p>
              <p v-if="item.text" class="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">{{ l(item.text) }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="container-x mt-24 md:mt-32">
      <SectionHeading title="">
        <template #title>{{ $t('services.processTitle') }} <span class="hi">{{ $t('services.processHi') }}</span></template>
      </SectionHeading>
      <ProcessStations class="mt-12" />
    </section>

    <NextLink :to="`/services/${next.slug}`" :label="$t('service.next')" :title="l(next.title)" />

    <CtaBanner />
  </article>
</template>
