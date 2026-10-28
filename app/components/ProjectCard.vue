<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{ project: Project; index?: number }>()
const l = useL()
</script>

<template>
  <NuxtLinkLocale :to="`/work/${project.slug}`" class="sheet-cell group block p-5 transition-colors duration-300 hover:bg-paper-3 sm:p-6">
    <div class="relative aspect-[16/10] overflow-hidden border border-rule bg-paper-2">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="l(project.title)"
        loading="lazy"
        decoding="async"
        width="1280"
        height="800"
        class="h-full w-full object-cover object-top transition-transform duration-700 ease-[var(--ease-print)] group-hover:scale-[1.025]"
      >
      <div v-else class="grid h-full place-items-center p-6 text-center">
        <span class="font-display text-3xl text-ink-soft">{{ l(project.client) }}</span>
      </div>
    </div>
    <div class="mt-5 flex items-start justify-between gap-4">
      <div class="min-w-0">
        <h3 class="mt-2 text-[1.6rem] leading-tight">{{ l(project.title) }}</h3>
        <p class="mt-2 line-clamp-2 text-[0.95rem] leading-relaxed text-ink-soft">{{ l(project.summary) }}</p>
      </div>
      <svg viewBox="0 0 24 24" class="mt-7 h-5 w-5 shrink-0 text-ink-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary rtl:-scale-x-100 rtl:group-hover:-translate-x-1" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <path d="M4 12h15M13 6l6 6-6 6" />
      </svg>
    </div>
    <p class="mt-4 text-sm text-ink-soft">
      {{ $t(`categories.${project.category}`) }}<template v-if="project.market"> · {{ l(project.market) }}</template>
    </p>
  </NuxtLinkLocale>
</template>
