<script setup lang="ts">
// The LIXSOS "X" circuit icon, drawn to match the brand artwork (1000×1000 grid).
// Brand gradient (cyan → blue → violet) by default; `plain` prints it in currentColor, e.g. as a watermark.
withDefaults(defineProps<{ size?: number; animated?: boolean; plain?: boolean }>(), { size: 40, animated: false, plain: false })
const id = useId()
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="190 90 620 820"
    fill="none"
    aria-hidden="true"
    :class="{ 'logo-animated': animated }"
  >
    <defs v-if="!plain">
      <linearGradient :id="`lg-${id}`" gradientUnits="userSpaceOnUse" x1="250" y1="400" x2="750" y2="600">
        <stop offset="0" stop-color="#22d3ee" />
        <stop offset="0.5" stop-color="#3b82f6" />
        <stop offset="1" stop-color="#8b5cf6" />
      </linearGradient>
    </defs>
    <g :stroke="plain ? 'currentColor' : `url(#lg-${id})`" stroke-width="38">
      <!-- Arms -->
      <g stroke-linecap="round">
        <path class="trace" d="M500 500 L265 265" />
        <path class="trace" d="M500 500 L735 265" />
        <path class="trace" d="M500 500 L265 733" />
        <path class="trace" d="M500 500 L735 733" />
      </g>
      <!-- Square elbows -->
      <g stroke-linejoin="miter" stroke-linecap="butt">
        <path class="trace" d="M265 265 V163 H345" />
        <path class="trace" d="M735 733 V835 H655" />
      </g>
      <!-- Hub -->
      <circle class="hub" cx="500" cy="500" r="90" stroke-width="36" style="fill: var(--color-paper)" />
      <!-- End nodes -->
      <g style="fill: var(--color-paper)">
        <circle class="node" cx="380" cy="163" r="35" stroke-width="30" />
        <circle class="node" cx="735" cy="265" r="38" stroke-width="32" />
        <circle class="node" cx="265" cy="733" r="38" stroke-width="32" />
        <circle class="node" cx="620" cy="835" r="35" stroke-width="30" />
      </g>
    </g>
    <circle class="core" cx="500" cy="500" r="27" />
  </svg>
</template>

<style scoped>
.core {
  fill: var(--color-ink);
}
.logo-animated .trace {
  stroke-dasharray: 340;
  stroke-dashoffset: 340;
  animation: draw 1.2s ease forwards 0.2s;
}
.logo-animated .hub,
.logo-animated .core,
.logo-animated .node {
  transform-box: fill-box;
  transform-origin: center;
}
.logo-animated .hub {
  animation: pop 0.6s var(--ease-print) both;
}
.logo-animated .core {
  animation: pop 0.5s var(--ease-print) both 0.3s;
}
.logo-animated .node {
  animation: pop 0.5s var(--ease-print) both 1.1s;
}
@keyframes draw {
  to { stroke-dashoffset: 0; }
}
@keyframes pop {
  from { opacity: 0; transform: scale(0); }
  to { opacity: 1; transform: scale(1); }
}
</style>
