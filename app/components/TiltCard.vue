<script setup lang="ts">
// 3D tilt + spotlight that follows the pointer.
const props = withDefaults(defineProps<{ max?: number }>(), { max: 8 })
const el = ref<HTMLElement | null>(null)

const onMove = (e: PointerEvent) => {
  const node = el.value
  if (!node || e.pointerType !== 'mouse') return
  const r = node.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width
  const py = (e.clientY - r.top) / r.height
  node.style.setProperty('--rx', `${(0.5 - py) * props.max}deg`)
  node.style.setProperty('--ry', `${(px - 0.5) * props.max}deg`)
  node.style.setProperty('--mx', `${px * 100}%`)
  node.style.setProperty('--my', `${py * 100}%`)
}
const onLeave = () => {
  el.value?.style.setProperty('--rx', '0deg')
  el.value?.style.setProperty('--ry', '0deg')
}
</script>

<template>
  <div ref="el" class="tilt group relative" @pointermove="onMove" @pointerleave="onLeave">
    <slot />
    <div class="spot pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </div>
</template>

<style scoped>
.tilt {
  transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
  transition: transform 0.25s ease-out;
  transform-style: preserve-3d;
}
.spot {
  background: radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgb(43 127 255 / 0.12), transparent 50%);
}
</style>
