<script setup lang="ts">
// The LIXSOS "X" circuit icon, drawn to match the brand artwork (1000×1000 grid).
withDefaults(defineProps<{ size?: number; animated?: boolean }>(), { size: 40, animated: false })
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
    <g stroke="#0065ff" stroke-width="38">
      <!-- Arms stop at the circle rings, which are hollow -->
      <g stroke-linecap="round">
        <path class="trace" d="M432.8 432.8 L265 265" />
        <path class="trace" d="M567.2 432.8 L703.2 296.8" />
        <path class="trace" d="M432.8 567.2 L296.8 701.2" />
        <path class="trace" d="M567.2 567.2 L735 733" />
      </g>
      <!-- Square elbows -->
      <g stroke-linejoin="miter" stroke-linecap="butt">
        <path class="trace" d="M265 265 V163 H345" />
        <path class="trace" d="M735 733 V835 H655" />
      </g>
      <!-- Hub -->
      <circle class="hub" cx="500" cy="500" r="90" stroke-width="36" />
      <!-- End nodes -->
      <g>
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
/* White in dark mode, muted navy in light mode (see --logo-core in main.css) */
.core {
  fill: #0065ff;
  transition: fill 0.4s ease;
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
  animation: pop 0.6s cubic-bezier(0.3, 1.5, 0.5, 1) both;
}
.logo-animated .core {
  animation: pop 0.5s cubic-bezier(0.3, 1.5, 0.5, 1) both 0.3s;
}
.logo-animated .node {
  animation: pop 0.5s cubic-bezier(0.3, 1.5, 0.5, 1) both 1.1s;
}
@keyframes draw {
  to { stroke-dashoffset: 0; }
}
@keyframes pop {
  from { opacity: 0; transform: scale(0); }
  to { opacity: 1; transform: scale(1); }
}
</style>
