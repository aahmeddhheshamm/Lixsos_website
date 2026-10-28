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
    <PageHero :title="$t('work.title')" :text="$t('work.text')">
      <template #title>{{ $t('work.title') }} <span class="hi">{{ $t('work.hi') }}</span></template>
    </PageHero>

    <section class="container-x">
      <div class="flex flex-wrap gap-x-6 gap-y-2 border-b border-rule pb-4" role="group" :aria-label="$t('work.filter')">
        <button
          v-for="c in projectCategories"
          :key="c"
          type="button"
          class="filter py-1.5 text-[0.95rem]"
          :class="active === c ? 'is-active font-semibold text-ink' : 'text-ink-soft hover:text-primary'"
          :aria-pressed="active === c"
          @click="active = c"
        >
          {{ $t(`categories.${c}`) }}
        </button>
      </div>

      <TransitionGroup tag="div" name="grid" class="sheet relative mt-10 grid sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="p in filtered" :key="p.slug" :project="p" :index="projects.indexOf(p)" />
      </TransitionGroup>
    </section>

    <CtaBanner :title="$t('work.next')" />
  </div>
</template>

<style scoped>
/* Same line language as the nav: hover = one rule, selected = double rule */
.filter {
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 0.45em;
}
.filter:hover {
  text-decoration-color: var(--color-rule-strong);
}
.filter.is-active {
  text-decoration-style: double;
  text-decoration-color: var(--color-primary);
}
.grid-enter-active {
  transition: opacity 0.4s var(--ease-print);
}
.grid-enter-from {
  opacity: 0;
}
</style>
