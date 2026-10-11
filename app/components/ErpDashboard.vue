<script setup lang="ts">
// Mock ERP dashboard UI with animated bars and a live-looking chart line.
const bars = [42, 65, 50, 78, 60, 90, 72, 96, 84, 70, 88, 100]
const kpis = [
  { key: 'revenue', value: '$1.24M', delta: '+18%' },
  { key: 'orders', value: '8,412', delta: '+9%' },
  { key: 'stock', value: '$386k', delta: '-3%' },
]
const rows = [
  { id: 'INV-2041', client: 'Orbit Retail', amount: '$12,400', status: 'paid' },
  { id: 'INV-2042', client: 'MediCore', amount: '$8,950', status: 'pending' },
  { id: 'INV-2043', client: 'Atlas Logistics', amount: '$21,300', status: 'paid' },
]
</script>

<template>
  <div class="relative">
    <div class="absolute -inset-4 rounded-[2rem] bg-gradient-brand opacity-20 blur-2xl" />
    <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-950/90 shadow-2xl">
      <div class="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div class="flex items-center gap-2">
          <LogoMark :size="20" />
          <span class="text-xs font-semibold tracking-widest text-white">LIXSOS ERP</span>
        </div>
        <div class="flex gap-1.5">
          <span class="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span class="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span class="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
        </div>
      </div>
      <div class="grid grid-cols-[3.5rem_1fr]">
        <aside class="flex flex-col items-center gap-4 border-e border-white/10 py-5">
          <span v-for="n in 6" :key="n" class="h-7 w-7 rounded-lg" :class="n === 1 ? 'bg-gradient-brand' : 'bg-white/5'" />
        </aside>
        <div class="space-y-4 p-5">
          <div class="grid grid-cols-3 gap-3">
            <div v-for="k in kpis" :key="k.key" class="rounded-xl border border-white/5 bg-white/[0.03] p-3">
              <div class="text-[0.65rem] text-muted">{{ $t(`erp.dash.${k.key}`) }}</div>
              <div class="mt-1 font-display text-base font-semibold text-white" dir="ltr">{{ k.value }}</div>
              <div class="text-[0.65rem]" dir="ltr" :class="k.delta.startsWith('+') ? 'text-emerald-400 light:text-emerald-600' : 'text-rose-400 light:text-rose-600'">{{ k.delta }}</div>
            </div>
          </div>
          <div class="rounded-xl border border-white/5 bg-white/[0.03] p-4">
            <div class="flex items-center justify-between text-[0.65rem] text-muted">
              <span>{{ $t('erp.dash.sales') }}</span><span>2026</span>
            </div>
            <div class="mt-4 flex h-28 items-end gap-1.5">
              <span
                v-for="(b, i) in bars"
                :key="i"
                class="bar flex-1 rounded-t bg-linear-to-t from-brand-blue to-brand-cyan"
                :style="{ height: `${b}%`, animationDelay: `${i * 0.06}s` }"
              />
            </div>
          </div>
          <div class="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-[0.7rem]">
            <div v-for="r in rows" :key="r.id" class="grid grid-cols-[4.5rem_1fr_4.5rem_4.5rem] items-center gap-2 border-b border-white/5 py-2 last:border-0">
              <span class="text-muted">{{ r.id }}</span>
              <span class="truncate text-slate-200">{{ r.client }}</span>
              <span class="text-end text-white"><bdi dir="ltr">{{ r.amount }}</bdi></span>
              <span class="justify-self-end rounded-full px-2 py-0.5" :class="r.status === 'paid' ? 'bg-emerald-400/10 text-emerald-300 light:text-emerald-700' : 'bg-amber-400/10 text-amber-300 light:text-amber-700'">{{ $t(`erp.dash.${r.status}`) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bar {
  transform-origin: bottom;
  animation: grow 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) both, breathe 3s ease-in-out infinite 1.2s;
}
@keyframes grow {
  from { transform: scaleY(0); }
}
@keyframes breathe {
  50% { transform: scaleY(0.85); }
}
</style>
