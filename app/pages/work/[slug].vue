<script setup lang="ts">
import { projects } from '~/data/projects'
import { site } from '~/data/site'

const route = useRoute()
const { t } = useI18n()
const l = useL()

const index = projects.findIndex((p) => p.slug === route.params.slug)
const project = projects[index]

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

const next = projects[(index + 1) % projects.length]!
const hostname = project.url ? new URL(project.url).hostname.replace(/^www\./, '') : ''

usePageSeo({
  title: () => t('seo.project.title', { title: l(project.title), category: t(`categories.${project.category}`) }),
  description: () => l(project.summary),
  type: 'article',
  image: project.image,
})

useHead(() => ({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: l(project.title),
        description: l(project.description),
        dateCreated: String(project.year),
        creator: { '@type': 'Organization', name: site.name.en, url: site.url },
        about: l(project.client),
        url: `${site.url}${route.path}`,
        ...(project.url && { sameAs: project.url }),
        ...(project.image && { image: `${site.url}${project.image}` }),
      }),
    },
  ],
}))
</script>

<template>
  <article v-if="project">
    <PageHero :title="l(project.title)" :text="l(project.summary)">
      <dl class="mt-12 grid max-w-3xl grid-cols-2 border-t border-rule-strong md:grid-cols-4">
        <div class="border-b border-rule py-4 pe-4">
          <dt class="text-sm text-ink-soft">{{ $t('project.client') }}</dt>
          <dd class="mt-1 font-semibold">{{ l(project.client) }}</dd>
        </div>
        <div class="border-b border-rule py-4 pe-4">
          <dt class="text-sm text-ink-soft">{{ $t('project.service') }}</dt>
          <dd class="mt-1 font-semibold">{{ $t(`categories.${project.category}`) }}</dd>
        </div>
        <div v-if="project.market" class="border-b border-rule py-4 pe-4">
          <dt class="text-sm text-ink-soft">{{ $t('project.market') }}</dt>
          <dd class="mt-1 font-semibold">{{ l(project.market) }}</dd>
        </div>
        <div v-if="project.year" class="border-b border-rule py-4 pe-4">
          <dt class="text-sm text-ink-soft">{{ $t('project.year') }}</dt>
          <dd class="serial mt-1 text-sm!" dir="ltr">{{ project.year }}</dd>
        </div>
      </dl>
      <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="btn mt-10">
        {{ $t('project.visit') }}
        <svg viewBox="0 0 24 24" class="h-4 w-4 rtl:-scale-x-100" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
      </a>
    </PageHero>

    <!-- Cover: the real screenshot, mounted like a plate with its serial -->
    <section class="container-x">
      <figure class="note bg-paper-3 p-3 sm:p-5">
        <div class="overflow-hidden border border-rule bg-paper-2" :class="project.image ? 'aspect-[16/10]' : 'aspect-[16/8]'">
          <img v-if="project.image" :src="project.image" :alt="l(project.title)" width="1280" height="800" class="h-full w-full object-cover object-top">
          <div v-else class="grid h-full place-items-center">
            <span class="font-display text-4xl text-ink-soft md:text-6xl">{{ l(project.client) }}</span>
          </div>
        </div>
        <figcaption class="mt-3 flex items-center justify-between gap-4 px-1 text-sm text-ink-soft">
          <span v-if="hostname" dir="ltr">{{ hostname }}</span>
          <span class="serial ms-auto" dir="ltr">LX-{{ String(index + 1).padStart(3, '0') }}</span>
        </figcaption>
      </figure>
    </section>

    <!-- Results -->
    <section v-if="project.results?.length" class="container-x mt-20">
      <dl class="grid border-t border-rule-strong md:grid-cols-3">
        <div v-for="r in project.results" :key="r.value" class="border-b border-rule py-7 md:border-e md:px-7 md:first:ps-0 md:last:border-e-0">
          <dd class="font-display text-[3rem] leading-none text-primary" dir="ltr">{{ r.value }}</dd>
          <dt class="mt-3 text-ink-soft">{{ l(r.label) }}</dt>
        </div>
      </dl>
    </section>

    <!-- Story: challenge/solution when we have it, otherwise an overview + highlights -->
    <section v-if="project.challenge && project.solution" class="container-x mt-24 grid gap-14 md:grid-cols-2">
      <div>
        <h2 class="text-[2.2rem] leading-tight">{{ $t('project.challenge') }}</h2>
        <p class="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft">{{ l(project.challenge) }}</p>
      </div>
      <div>
        <h2 class="text-[2.2rem] leading-tight">{{ $t('project.solution') }}</h2>
        <p class="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft">{{ l(project.solution) }}</p>
      </div>
    </section>
    <section v-else class="container-x mt-24 grid gap-14 md:grid-cols-2">
      <div>
        <h2 class="text-[2.2rem] leading-tight">{{ $t('project.about') }}</h2>
        <p class="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft">{{ l(project.description) }}</p>
      </div>
      <div v-if="project.highlights">
        <h2 class="text-[2.2rem] leading-tight">{{ $t('project.highlights') }}</h2>
        <ul class="mt-5 border-t border-rule-strong">
          <li v-for="h in l(project.highlights)" :key="h" class="flex items-center gap-3 border-b border-rule py-3.5 text-lg">
            <svg viewBox="0 0 16 16" class="h-3.5 w-3.5 shrink-0 text-primary" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-8" /></svg>
            {{ h }}
          </li>
        </ul>
      </div>
    </section>

    <section v-if="project.stack.length" class="container-x mt-16 flex flex-wrap items-baseline gap-x-6 gap-y-2">
      <h2 class="font-sans text-sm font-semibold text-ink-soft">{{ $t('project.stack') }}</h2>
      <ul class="flex flex-wrap gap-x-5 gap-y-1 font-display text-[1.3rem]">
        <li v-for="s in project.stack" :key="s" dir="ltr">{{ s }}</li>
      </ul>
    </section>

    <NextLink :to="`/work/${next.slug}`" :label="$t('project.next')" :title="l(next.title)" />

    <CtaBanner />
  </article>
</template>
