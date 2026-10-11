<script setup lang="ts">
import { stats, team, timeline, values } from '~/data/site'

const { t } = useI18n()
const l = useL()

usePageSeo({
  title: () => t('seo.about.title'),
  description: () => t('seo.about.description'),
})
</script>

<template>
  <div>
    <PageHero :eyebrow="$t('about.eyebrow')" :title="$t('about.title')" :text="$t('about.text')">
      <template #title>{{ $t('about.title') }} <span class="text-gradient">{{ $t('about.hi') }}</span></template>
    </PageHero>

    <section class="container-x grid items-center gap-16 lg:grid-cols-2">
      <div class="relative aspect-square max-w-lg" data-reveal="left">
        <div class="absolute inset-0 rounded-[3rem] bg-gradient-brand opacity-20 blur-3xl" />
        <div class="glass relative grid h-full place-items-center rounded-[3rem]">
          <LogoMark :size="240" animated class="animate-float" />
        </div>
      </div>
      <div>
        <SectionHeading :eyebrow="$t('about.storyEyebrow')" title="">
          <template #title>{{ $t('about.storyTitle') }} <span class="text-gradient">{{ $t('about.storyHi') }}</span></template>
        </SectionHeading>
        <p class="mt-6 text-lg leading-relaxed text-muted" data-reveal>{{ $t('about.storyText') }}</p>
        <div class="mt-10 grid grid-cols-2 gap-8">
          <StatCounter v-for="s in stats.slice(0, 2)" :key="s.value" v-bind="s" />
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="container-x mt-32">
      <SectionHeading :eyebrow="$t('about.valuesEyebrow')" :title="$t('about.valuesTitle')" />
      <div class="mt-14 grid gap-6 md:grid-cols-2">
        <div
          v-for="(v, i) in values"
          :key="v.title.en"
          class="group rounded-3xl border border-white/10 bg-ink-900/40 p-8 transition duration-500 hover:-translate-y-1 hover:border-brand-cyan/40"
          data-reveal
          :data-reveal-delay="(i % 2) * 0.1"
        >
          <span class="text-gradient font-display text-lg">0{{ i + 1 }}</span>
          <h3 class="mt-3 text-2xl font-semibold">{{ l(v.title) }}</h3>
          <p class="mt-2 text-muted">{{ l(v.text) }}</p>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <!-- <section class="container-x mt-32">
      <SectionHeading :eyebrow="$t('about.journeyEyebrow')" :title="$t('about.journeyTitle')" />
      <ol class="relative mt-14 border-s border-white/10 ps-8 md:ps-12">
        <li v-for="(item, i) in timeline" :key="item.year" class="relative pb-12 last:pb-0" data-reveal :data-reveal-delay="i * 0.05">
          <span class="absolute -start-[2.55rem] top-2 h-4 w-4 rounded-full border-4 border-ink-950 bg-gradient-brand md:-start-[3.55rem]" />
          <span class="font-display text-3xl font-semibold text-gradient">{{ item.year }}</span>
          <p class="mt-2 text-lg text-slate-300">{{ l(item.text) }}</p>
        </li>
      </ol>
    </section> -->

    <!-- Team -->
    <!-- <section class="container-x mt-32">
      <SectionHeading :eyebrow="$t('about.teamEyebrow')" :title="$t('about.teamTitle')" />
      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <TiltCard v-for="(m, i) in team" :key="m.initials" class="rounded-3xl" data-reveal :data-reveal-delay="i * 0.08">
          <div class="overflow-hidden rounded-3xl border border-white/10 bg-ink-900/50">
            <div class="relative grid aspect-[4/5] place-items-center overflow-hidden">
              <div class="absolute inset-0 bg-gradient-brand opacity-30 transition-opacity duration-500 group-hover:opacity-60" />
              <div class="grid-bg absolute inset-0" />
              <span class="relative font-display text-7xl font-semibold text-white/90 transition-transform duration-500 group-hover:scale-110" dir="ltr">{{ m.initials }}</span>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold">{{ l(m.name) }}</h3>
              <p class="text-sm text-muted">{{ l(m.role) }}</p>
            </div>
          </div>
        </TiltCard>
      </div>
    </section> -->

    <CtaBanner :title="$t('about.cta')" />
  </div>
</template>
