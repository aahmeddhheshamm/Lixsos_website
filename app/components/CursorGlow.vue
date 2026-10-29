<script setup lang="ts">
// A soft gradient spotlight that follows the pointer (desktop only).
const el = ref<HTMLElement | null>(null)
let raf = 0
let x = 0, y = 0, cx = 0, cy = 0

const onMove = (e: PointerEvent) => {
  x = e.clientX
  y = e.clientY
}

const loop = () => {
  cx += (x - cx) * 0.12
  cy += (y - cy) * 0.12
  if (el.value) el.value.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  if (!window.matchMedia('(pointer: fine)').matches) return
  window.addEventListener('pointermove', onMove, { passive: true })
  raf = requestAnimationFrame(loop)
})
onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onMove)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div
    ref="el"
    aria-hidden="true"
    class="pointer-events-none fixed left-0 top-0 z-0 hidden h-[600px] w-[600px] rounded-full opacity-40 blur-3xl md:block"
    style="background: radial-gradient(circle, rgb(43 127 255 / 0.18), transparent 70%)"
  />
</template>
