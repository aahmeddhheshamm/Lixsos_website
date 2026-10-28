<script setup lang="ts">
import { values } from '~/data/site'

const { t } = useI18n()
const l = useL()

usePageSeo({
  title: () => t('seo.about.title'),
  description: () => t('seo.about.description'),
})
</script>

<template>
  <div>
    <PageHero :title="$t('about.title')" :text="$t('about.text')">
      <template #title>{{ $t('about.title') }} <span class="hi">{{ $t('about.hi') }}</span></template>
    </PageHero>

    <section class="container-x grid items-center gap-14 lg:grid-cols-12">
      <div class="relative mx-auto aspect-square w-full max-w-md text-ink lg:col-span-5" aria-hidden="true">
        <Guilloche :inks="['#22d3ee', '#3b82f6', '#8b5cf6']" :seed="2" />
        <div class="absolute inset-0 grid place-items-center">
          <span class="grid h-[24%] w-[24%] place-items-center rounded-full bg-paper text-primary shadow-[0_0_0_1px_var(--color-rule-strong)]">
            <LogoMark :size="56" class="h-1/2 w-1/2" />
          </span>
        </div>
      </div>
      <div class="lg:col-span-6 lg:col-start-7">
        <SectionHeading title="">
          <template #title>{{ $t('about.storyTitle') }} <span class="hi">{{ $t('about.storyHi') }}</span></template>
        </SectionHeading>
        <p class="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">{{ $t('about.storyText') }}</p>
      </div>
    </section>

    <!-- Values -->
    <section class="container-x mt-28 md:mt-36">
      <SectionHeading :title="$t('about.valuesTitle')" />
      <dl class="mt-12 grid border-t border-rule-strong md:grid-cols-2">
        <div v-for="v in values" :key="v.title.en" class="border-b border-rule py-8 md:pe-12 md:[&:nth-child(even)]:border-s md:[&:nth-child(even)]:ps-12">
          <dt class="font-display text-[1.9rem] leading-tight">{{ l(v.title) }}</dt>
          <dd class="mt-3 max-w-prose leading-relaxed text-ink-soft">{{ l(v.text) }}</dd>
        </div>
      </dl>
    </section>

    <CtaBanner :title="$t('about.cta')" />
  </div>
</template>
