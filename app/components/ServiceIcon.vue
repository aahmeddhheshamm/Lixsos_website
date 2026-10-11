<script setup lang="ts">
defineProps<{ name: string }>()
const paths: Record<string, string> = {
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
  mobile: 'M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zM11 18h2',
  erp: 'M4 5h16v4H4zM4 11h7v8H4zM13 11h7v3h-7zM13 16h7v3h-7z',
  growth: 'M3 17l6-6 4 4 8-8M15 7h6v6',
  brand: 'M12 3l2.6 5.6L20 9.5l-4 4 1 5.5-5-2.7-5 2.7 1-5.5-4-4 5.4-.9z',
  ai: 'M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M6 6h12v12H6zM10 10h4v4h-4z',
  qa: 'M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3zM9 12l2 2 4-4',
  consult: 'M4 5h11a1 1 0 011 1v7a1 1 0 01-1 1H9l-4 3v-3H4a1 1 0 01-1-1V6a1 1 0 011-1zM19 9h1a1 1 0 011 1v6a1 1 0 01-1 1h-1v3l-4-3h-4',
  maintenance: 'M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z',
}
</script>

<template>
  <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path :d="paths[name] ?? paths.code" />
  </svg>
</template>
