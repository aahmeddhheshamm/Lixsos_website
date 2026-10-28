<script setup lang="ts">
// LIXSOS ERP preview, drawn as a ledger sheet. All figures are sample data and labelled as such.
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
  <figure class="ledger bg-paper-3 text-ink">
    <div class="flex items-center justify-between border-b border-rule-strong px-5 py-3">
      <span class="flex items-center gap-2 text-primary">
        <LogoMark :size="18" />
        <span class="text-xs font-semibold tracking-[0.2em] text-ink" dir="ltr">LIXSOS ERP</span>
      </span>
      <span class="text-xs text-ink-soft">{{ $t('erp.dash.sample') }}</span>
    </div>

    <div class="grid grid-cols-3 border-b border-rule">
      <div v-for="k in kpis" :key="k.key" class="border-e border-rule p-4 last:border-e-0">
        <div class="text-xs text-ink-soft">{{ $t(`erp.dash.${k.key}`) }}</div>
        <div class="mt-1 font-display text-xl tabular-nums sm:text-2xl" dir="ltr">{{ k.value }}</div>
        <div class="mt-0.5 font-mono text-[0.7rem] tabular-nums" dir="ltr" :class="k.delta.startsWith('+') ? 'text-primary' : 'text-accent'">{{ k.delta }}</div>
      </div>
    </div>

    <div class="border-b border-rule p-4">
      <div class="flex items-center justify-between text-xs text-ink-soft">
        <span>{{ $t('erp.dash.sales') }}</span><span class="font-mono" dir="ltr">2026</span>
      </div>
      <!-- Bars drawn as engraved hatching, not filled blocks -->
      <div class="mt-4 flex h-28 items-end gap-1.5" dir="ltr">
        <span v-for="(b, i) in bars" :key="i" class="bar flex-1" :style="{ height: `${b}%`, }" />
      </div>
    </div>

    <table class="w-full text-[0.8rem]">
      <tbody>
        <tr v-for="r in rows" :key="r.id" class="border-b border-rule last:border-0">
          <td class="py-2.5 ps-5 font-mono text-[0.7rem] text-ink-soft" dir="ltr">{{ r.id }}</td>
          <td class="truncate py-2.5">{{ r.client }}</td>
          <td class="py-2.5 text-end tabular-nums"><bdi dir="ltr">{{ r.amount }}</bdi></td>
          <td class="py-2.5 pe-5 text-end">
            <span class="text-[0.75rem] font-semibold" :class="r.status === 'paid' ? 'text-primary' : 'text-accent'">{{ $t(`erp.dash.${r.status}`) }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </figure>
</template>

<style scoped>
.ledger {
  border: 1px solid var(--color-rule-strong);
  box-shadow: inset 0 0 0 4px var(--color-paper-3), inset 0 0 0 5px var(--color-rule);
}
.bar {
  background: repeating-linear-gradient(135deg, var(--color-primary) 0 1px, transparent 1px 4px);
  border-top: 2px solid var(--color-primary);
}
</style>
