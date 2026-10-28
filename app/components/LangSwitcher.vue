<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const target = computed(() => (locale.value === 'ar' ? 'en' : 'ar'))

// Tell the hero note to play its "turn over" animation on the other face
const flip = () => {
  try {
    sessionStorage.setItem('lixsos-flip', '1')
  } catch {}
}
</script>

<template>
  <NuxtLink
    :to="switchLocalePath(target)"
    :hreflang="target"
    :lang="target"
    :aria-label="$t('nav.switchLabel')"
    class="inline-flex h-10 items-center px-2 text-[0.95rem] font-semibold text-ink underline decoration-rule-strong underline-offset-[0.3em] hover:text-primary hover:decoration-double hover:decoration-current"
    @click="flip"
  >
    <span :class="target === 'ar' ? 'font-[Amiri] text-lg' : 'font-[Public_Sans]'">{{ $t('nav.switchTo') }}</span>
  </NuxtLink>
</template>
