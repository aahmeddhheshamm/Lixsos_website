<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{ project: Project; large?: boolean }>()
const l = useL()
const bg = computed(
  () => `linear-gradient(135deg, ${props.project.gradient[0]}, ${props.project.gradient[1]})`,
)
</script>

<template>
  <TiltCard :max="5" class="rounded-3xl">
    <NuxtLinkLocale
      :to="`/work/${project.slug}`"
      class="block overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 transition-colors hover:border-white/25"
    >
      <!-- Artwork: generated mock UI so there are no image assets to manage -->
      <div class="relative overflow-hidden" :class="large ? 'aspect-[16/10]' : 'aspect-[4/3]'">
        <div class="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-110" :style="{ background: bg }" />
        <div class="grid-bg absolute inset-0 opacity-60" />
        <div class="absolute inset-x-8 bottom-0 top-10 translate-y-6 rounded-t-2xl border border-white/20 bg-ink-950/70 p-4 shadow-2xl backdrop-blur transition-transform duration-700 group-hover:translate-y-2">
          <div class="flex gap-1.5">
            <span class="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span class="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span class="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div class="mt-4 h-3 w-1/2 rounded bg-white/25" />
          <div class="mt-2 h-2 w-3/4 rounded bg-white/10" />
          <div class="mt-5 grid grid-cols-3 gap-2">
            <div v-for="r in project.results" :key="r.value" class="rounded-lg bg-white/5 p-2">
              <div class="font-display text-sm font-semibold text-white" dir="ltr">{{ r.value }}</div>
              <div class="mt-0.5 truncate text-[0.6rem] text-white/50">{{ l(r.label) }}</div>
            </div>
          </div>
        </div>
        <span class="absolute start-4 top-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-snow backdrop-blur">
          {{ $t(`categories.${project.category}`) }}
        </span>
      </div>

      <div class="flex items-start justify-between gap-4 p-6">
        <div>
          <h3 class="text-xl font-semibold md:text-2xl">{{ l(project.title) }}</h3>
          <p class="mt-2 text-sm text-muted">{{ l(project.summary) }}</p>
        </div>
        <span
          class="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-all duration-300 rtl:-scale-x-100 group-hover:rotate-[-45deg] rtl:group-hover:rotate-45 group-hover:border-transparent group-hover:bg-white group-hover:text-ink-950"
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </NuxtLinkLocale>
  </TiltCard>
</template>
