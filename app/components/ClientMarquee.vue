<script setup lang="ts">
import { clients } from '~/data/site'

const rowA = clients.slice(0, 6)
const rowB = clients.slice(6)
</script>

<template>
  <!-- Always LTR so the seamless -50% loop works in Arabic too -->
  <div dir="ltr" class="relative space-y-6 overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
    <div v-for="(row, i) in [rowA, rowB]" :key="i" class="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]" :style="i ? 'animation-direction: reverse' : ''">
      <div
        v-for="(name, j) in [...row, ...row, ...row, ...row]"
        :key="`${name}-${j}`"
        class="glass flex items-center gap-3 rounded-2xl px-7 py-4 transition hover:border-brand-cyan/50"
        :aria-hidden="j >= row.length"
      >
        <span class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-snow">
          {{ name.charAt(0) }}
        </span>
        <span class="whitespace-nowrap font-display text-lg font-medium text-slate-200">{{ name }}</span>
      </div>
    </div>
  </div>
</template>
