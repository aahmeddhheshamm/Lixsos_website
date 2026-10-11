<script setup lang="ts">
// Animated "circuit network" background inspired by the LIXSOS logo:
// drifting nodes connected by gradient lines, reacting to the pointer.
const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let cleanup = () => {}

onMounted(() => {
  const c = canvas.value
  if (!c) return
  const ctx = c.getContext('2d')
  if (!ctx) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  let w = 0, h = 0
  const mouse = { x: -9999, y: -9999 }
  type P = { x: number; y: number; vx: number; vy: number; r: number }
  let pts: P[] = []

  const resize = () => {
    w = c.clientWidth
    h = c.clientHeight
    c.width = w * dpr
    c.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const count = Math.min(90, Math.floor((w * h) / 16000))
    pts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
    }))
  }

  const draw = () => {
    ctx.clearRect(0, 0, w, h)
    const max = 140
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i]!
      if (!reduced) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        const dx = p.x - mouse.x, dy = p.y - mouse.y
        const d = Math.hypot(dx, dy)
        if (d < 120) {
          p.x += (dx / d) * 1.2
          p.y += (dy / d) * 1.2
        }
      }
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j]!
        const d = Math.hypot(p.x - q.x, p.y - q.y)
        if (d < max) {
          const g = ctx.createLinearGradient(p.x, p.y, q.x, q.y)
          const a = (1 - d / max) * 0.45
          g.addColorStop(0, `rgba(34,211,238,${a})`)
          g.addColorStop(1, `rgba(139,92,246,${a})`)
          ctx.strokeStyle = g
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(q.x, q.y)
          ctx.stroke()
        }
      }
      ctx.fillStyle = i % 2 ? 'rgba(139,92,246,0.9)' : 'rgba(34,211,238,0.9)'
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    }
    if (!reduced) raf = requestAnimationFrame(draw)
  }

  const onMove = (e: PointerEvent) => {
    const r = c.getBoundingClientRect()
    mouse.x = e.clientX - r.left
    mouse.y = e.clientY - r.top
  }

  resize()
  draw()
  window.addEventListener('resize', resize)
  window.addEventListener('pointermove', onMove, { passive: true })
  cleanup = () => {
    window.removeEventListener('resize', resize)
    window.removeEventListener('pointermove', onMove)
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  cleanup()
})
</script>

<template>
  <canvas ref="canvas" class="h-full w-full" aria-hidden="true" />
</template>
