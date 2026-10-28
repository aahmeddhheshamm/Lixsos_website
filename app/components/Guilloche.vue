<script setup lang="ts">
/**
 * Guilloche rosette, the engraved security pattern of a banknote.
 * Each ring is drawn from phase-shifted copies of r(θ) = R + A·sin(nθ + φ) + B·sin(kθ − φ),
 * so the strokes weave into one another. Each ring prints in its colour from `inks`
 * (the logo's cyan → blue → violet); when `active` is set, that ring stays and the others fade back.
 * Paths are generated on the client (they would weigh ~100KB in the HTML) and draw in once.
 */
const props = withDefaults(
  defineProps<{ inks: string[]; active?: number | null; seed?: number }>(),
  { active: null, seed: 0 },
)

type Ring = { R: number; A: number; n: number; B: number; k: number; copies: number }
const rings = computed<Ring[]>(() => {
  const s = props.seed
  const base: Ring[] = [
    { R: 87, A: 7, n: 18 + s, B: 2.5, k: 6, copies: 7 },
    { R: 69, A: 8, n: 14 + s, B: 3, k: 5, copies: 7 },
    { R: 52, A: 7, n: 11, B: 2.5, k: 4, copies: 6 },
    { R: 37, A: 5, n: 9, B: 1.5, k: 3, copies: 6 },
  ]
  return base.slice(0, Math.max(1, props.inks.length))
})

const curve = (g: Ring, phase: number) => {
  const steps = 420
  let d = ''
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2
    const r = g.R + g.A * Math.sin(g.n * t + phase) + g.B * Math.sin(g.k * t - phase)
    d += `${i ? 'L' : 'M'}${(r * Math.cos(t)).toFixed(2)} ${(r * Math.sin(t)).toFixed(2)}`
  }
  return `${d}Z`
}

const paths = computed(() =>
  rings.value.map((g) =>
    Array.from({ length: g.copies }, (_, j) => curve(g, (j / g.copies) * ((Math.PI * 2) / g.n) * g.n * 0.5)),
  ),
)
</script>

<template>
  <ClientOnly>
    <svg viewBox="-100 -100 200 200" class="guilloche h-full w-full" aria-hidden="true" :class="{ 'has-active': active !== null }">
      <!-- Frame circles, as engraved around the rosette -->
      <circle r="98" fill="none" stroke="currentColor" stroke-width="0.35" opacity="0.5" />
      <circle r="96.5" fill="none" stroke="currentColor" stroke-width="0.2" opacity="0.4" />
      <g
        v-for="(ring, i) in paths"
        :key="i"
        class="ring"
        :class="{ 'is-active': active === i }"
        :style="{ '--ring': inks[i], '--i': i }"
      >
        <path v-for="(d, j) in ring" :key="j" :d="d" pathLength="1" />
      </g>
    </svg>
  </ClientOnly>
</template>

<style scoped>
.ring {
  fill: none;
  stroke: var(--ring);
  stroke-width: 0.32;
  opacity: 0.8;
  transition: opacity 0.35s var(--ease-print);
}
.ring path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: print 2.4s var(--ease-print) forwards;
  animation-delay: calc(var(--i) * 0.18s + 0.1s);
}
.has-active .ring {
  opacity: 0.2;
}
.has-active .ring.is-active {
  opacity: 1;
}
@keyframes print {
  to { stroke-dashoffset: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .ring path {
    animation: none;
    stroke-dashoffset: 0;
  }
}
</style>
