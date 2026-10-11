<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
const isLight = computed(() => theme.value === 'light')
</script>

<template>
  <button
    type="button"
    class="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-white/15 text-slate-200 transition hover:border-brand-cyan/60 hover:text-white"
    :aria-label="isLight ? $t('nav.themeDark') : $t('nav.themeLight')"
    :title="isLight ? $t('nav.themeDark') : $t('nav.themeLight')"
    @click="toggleTheme"
  >
    <!-- Sun: shown in dark mode (switch to light) -->
    <svg
      viewBox="0 0 24 24"
      class="icon absolute h-[18px] w-[18px]"
      :class="isLight ? 'icon-out' : 'icon-in'"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
    <!-- Moon: shown in light mode (switch to dark) -->
    <svg
      viewBox="0 0 24 24"
      class="icon absolute h-[18px] w-[18px]"
      :class="isLight ? 'icon-in' : 'icon-out'"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  </button>
</template>

<style scoped>
.icon {
  transition: transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 1), opacity 0.3s ease;
}
.icon-in {
  opacity: 1;
  transform: rotate(0) scale(1);
}
.icon-out {
  opacity: 0;
  transform: rotate(-90deg) scale(0.4);
}
</style>
