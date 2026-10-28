<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
const isDark = computed(() => theme.value === 'dark')
</script>

<template>
  <button
    type="button"
    class="grid h-10 w-10 shrink-0 place-items-center text-ink-soft transition-colors hover:text-primary"
    :aria-label="isDark ? $t('nav.themeLight') : $t('nav.themeDark')"
    :title="isDark ? $t('nav.themeLight') : $t('nav.themeDark')"
    @click="toggleTheme"
  >
    <!-- A half-filled disc: the filled side shows which theme you will switch to -->
    <svg viewBox="0 0 24 24" class="h-5 w-5 transition-transform duration-500" :class="isDark ? 'rotate-180' : ''" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.4" />
      <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="0.6" />
      <path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" />
    </svg>
  </button>
</template>
