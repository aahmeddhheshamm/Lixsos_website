<script setup lang="ts">
import { services, site } from '~/data/site'

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
      <template #title>{{ $t('services.title') }} <span class="hi">{{ $t('services.hi') }}</span> {{ $t('services.after') }}</template>
    </PageHero>

    <!-- Every service as a denomination row -->
    <section class="container-x">
      <ul class="border-t border-rule-strong">
        <li v-for="s in services" :key="s.slug" class="border-b border-rule">
          <NuxtLinkLocale :to="`/services/${s.slug}`" class="group grid gap-x-10 gap-y-5 py-10 md:grid-cols-12 md:py-12">
            <div class="md:col-span-5">
              <h2 class="mt-5 text-[2.1rem] leading-tight transition-colors group-hover:text-primary md:text-[2.75rem]">{{ l(s.title) }}</h2>
            </div>
            <p class="text-lg leading-relaxed text-ink-soft md:col-span-4 md:pt-9">{{ l(s.text) }}</p>
            <ul class="text-[0.95rem] md:col-span-3 md:pt-9">
              <li v-for="p in l(s.points)" :key="p" class="border-b border-rule py-2 first:pt-0">{{ p }}</li>
              <li class="pt-3 font-semibold text-primary">
                <span class="underline decoration-1 underline-offset-[0.3em] group-hover:decoration-double">{{ $t('services.learnMore') }}</span>
              </li>
            </ul>
          </NuxtLinkLocale>
        </li>
      </ul>
    </section>

    <section class="container-x mt-28 md:mt-36">
      <SectionHeading title="">
        <template #title>{{ $t('services.processTitle') }} <span class="hi">{{ $t('services.processHi') }}</span></template>
      </SectionHeading>
      <ProcessStations class="mt-12" />
    </section>

    <CtaBanner />
  </div>
</template>
