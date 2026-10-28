<script setup lang="ts">
import { processSteps } from '~/data/site'

// The process as fixed stations in order, numbered like serial blocks.
const l = useL()
</script>

<template>
  <ol class="grid border-t border-rule-strong md:grid-cols-4">
    <li
      v-for="(step, i) in processSteps"
      :key="step.title.en"
      class="station relative border-b border-rule py-8 md:border-b-0 md:border-e md:px-7 md:first:ps-0 md:last:border-e-0"
    >
      <h3 class="mt-4 text-[1.75rem] leading-tight">{{ l(step.title) }}</h3>
      <p class="mt-3 leading-relaxed text-ink-soft">{{ l(step.text) }}</p>
    </li>
  </ol>
</template>

<style scoped>
/* A red tick on the top rule marks where each station begins */
.station::before {
  content: '';
  position: absolute;
  top: -1px;
  inset-inline-start: 0;
  width: 1px;
  height: 14px;
  background: var(--color-primary);
}
</style>
