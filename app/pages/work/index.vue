<script setup lang="ts">
import { projectCategories, projects } from '~/data/projects'

const { t } = useI18n()

usePageSeo({
  title: () => t('seo.work.title'),
  description: () => t('seo.work.description'),
})

const active = ref<(typeof projectCategories)[number]>('all')
const filtered = computed(() =>
  active.value === 'all' ? projects : projects.filter((p) => p.category === active.value),
)
</script>

<template>
  <div>
    <PageHero :eyebrow="$t('work.eyebrow')" :title="$t('work.title')" :text="$t('work.text')">
      <template #title>{{ $t('work.title') }} <span class="text-gradient">{{ $t('work.hi') }}</span></template>
    </PageHero>

    <section class="container-x">
      <div class="flex flex-wrap gap-2" role="tablist" :aria-label="$t('work.filter')">
        <button
          v-for="c in projectCategories"
          :key="c"
          role="tab"
          :aria-selected="active === c"
          class="relative rounded-full border px-5 py-2 text-sm transition-all duration-300"
          :class="active === c ? 'border-transparent bg-white text-ink-950' : 'border-white/15 text-slate-300 hover:border-white/40 hover:text-white'"
          @click="active = c"
        >
          {{ $t(`categories.${c}`) }}
        </button>
      </div>

      <TransitionGroup tag="div" name="grid" class="relative mt-12 grid gap-8 md:grid-cols-2">
        <ProjectCard v-for="p in filtered" :key="p.slug" :project="p" large />
      </TransitionGroup>
    </section>

    <CtaBanner :title="$t('work.next')" />
  </div>
</template>

<style scoped>
.grid-move,
.grid-enter-active,
.grid-leave-active {
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: scale(0.92) translateY(20px);
}
.grid-leave-active {
  position: absolute;
  width: calc(50% - 1rem);
}
@media (max-width: 767px) {
  .grid-leave-active { width: 100%; }
}
</style>
