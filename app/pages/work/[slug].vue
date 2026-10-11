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
const bg = `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`

usePageSeo({
  title: () => t('seo.project.title', { title: l(project.title), category: t(`categories.${project.category}`) }),
  description: () => l(project.summary),
  type: 'article',
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
      }),
    },
  ],
}))
</script>

<template>
  <article v-if="project">
    <PageHero :eyebrow="`${$t(`categories.${project.category}`)} · ${project.year}`" :title="l(project.title)" :text="l(project.description)">
      <dl class="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">{{ $t('project.client') }}</dt>
          <dd class="mt-1 text-white">{{ l(project.client) }}</dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">{{ $t('project.service') }}</dt>
          <dd class="mt-1 text-white">{{ $t(`categories.${project.category}`) }}</dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-widest text-muted">{{ $t('project.year') }}</dt>
          <dd class="mt-1 text-white">{{ project.year }}</dd>
        </div>
      </dl>
    </PageHero>

    <!-- Cover -->
    <section class="container-x">
      <div class="relative aspect-[16/8] overflow-hidden rounded-[2rem] border border-white/10" data-reveal="scale">
        <div class="absolute inset-0" :style="{ background: bg }" data-parallax="0.08" />
        <div class="grid-bg absolute inset-0" />
        <div class="absolute inset-x-[8%] bottom-0 top-[12%] rounded-t-3xl border border-white/20 bg-ink-950/75 p-6 backdrop-blur md:p-10">
          <div class="flex items-center gap-2">
            <span class="h-3 w-3 rounded-full bg-white/30" />
            <span class="h-3 w-3 rounded-full bg-white/20" />
            <span class="h-3 w-3 rounded-full bg-white/10" />
          </div>
          <div class="mt-8 font-display text-2xl font-semibold text-white md:text-4xl">{{ l(project.title) }}</div>
          <div class="mt-3 h-2 w-1/2 rounded bg-white/10" />
          <div class="mt-8 grid grid-cols-3 gap-4">
            <div v-for="n in 3" :key="n" class="h-20 rounded-xl bg-white/5 md:h-32" />
          </div>
        </div>
      </div>
    </section>

    <!-- Results -->
    <section class="container-x mt-20">
      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="(r, i) in project.results"
          :key="r.value"
          class="rounded-3xl border border-white/10 bg-ink-900/50 p-8"
          data-reveal
          :data-reveal-delay="i * 0.1"
        >
          <div class="font-display text-5xl font-semibold text-gradient" dir="ltr">{{ r.value }}</div>
          <div class="mt-2 text-sm uppercase tracking-widest text-muted">{{ l(r.label) }}</div>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="container-x mt-24 grid gap-16 md:grid-cols-2">
      <div data-reveal="left">
        <h2 class="text-3xl font-semibold md:text-4xl">{{ $t('project.challenge') }}</h2>
        <p class="mt-5 text-lg leading-relaxed text-muted">{{ l(project.challenge) }}</p>
      </div>
      <div data-reveal="right">
        <h2 class="text-3xl font-semibold md:text-4xl">{{ $t('project.solution') }}</h2>
        <p class="mt-5 text-lg leading-relaxed text-muted">{{ l(project.solution) }}</p>
      </div>
    </section>

    <section class="container-x mt-20" data-reveal>
      <h2 class="text-sm uppercase tracking-widest text-muted">{{ $t('project.stack') }}</h2>
      <ul class="mt-5 flex flex-wrap gap-3">
        <li v-for="s in project.stack" :key="s" class="glass rounded-full px-5 py-2 text-sm text-white" dir="ltr">{{ s }}</li>
      </ul>
    </section>

    <!-- Next project -->
    <section class="container-x mt-32">
      <NuxtLinkLocale
        :to="`/work/${next.slug}`"
        class="group block overflow-hidden rounded-[2rem] border border-white/10 p-10 transition hover:border-white/30 md:p-16"
        data-reveal
      >
        <span class="text-sm uppercase tracking-[0.3em] text-muted">{{ $t('project.next') }}</span>
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
