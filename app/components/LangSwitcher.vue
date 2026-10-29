<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const target = computed(() => (locale.value === 'ar' ? 'en' : 'ar'))
</script>

<template>
  <NuxtLink
    :to="switchLocalePath(target)"
    :hreflang="target"
    :aria-label="$t('nav.switchLabel')"
    class="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-full border border-white/15 px-4 text-sm text-slate-200 transition hover:border-primary hover:text-white"
  >
    <svg viewBox="0 0 24 24" class="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
    </svg>
    <span :class="target === 'ar' ? 'font-[Cairo]' : 'font-[Inter]'">{{ $t('nav.switchTo') }}</span>
  </NuxtLink>
</template>
