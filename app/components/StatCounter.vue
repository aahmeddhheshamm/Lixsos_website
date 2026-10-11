<script setup lang="ts">
// Counts up from 0 when scrolled into view. SSR renders the final value for SEO.
import type { L } from '~/data/types'

const props = defineProps<{ value: number; suffix?: string; label: L }>()
const l = useL()
const display = ref(props.value)
const el = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!el.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  display.value = 0
  const io = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting) return
    io.disconnect()
    const start = performance.now()
    const dur = 1800
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1)
      display.value = Math.round(props.value * (1 - Math.pow(1 - p, 4)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
  io.observe(el.value)
})
</script>

<template>
  <div ref="el" class="text-center md:text-start">
    <div class="font-display text-5xl font-semibold text-white md:text-6xl">
      <span class="text-gradient">{{ display }}{{ suffix }}</span>
    </div>
    <div class="mt-2 text-sm uppercase tracking-widest text-muted">{{ l(label) }}</div>
  </div>
</template>
