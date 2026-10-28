<template>
  <NuxtLinkLocale to="/" class="flex items-center gap-3" :aria-label="$t('common.home')">
    <LogoMark :size="36" />
    <!-- The wordmark is always Latin, so keep it LTR with its letter-spacing. The X carries the logo's gradient. -->
    <span class="leading-none text-ink" dir="ltr">
      <span class="block font-['Roboto'] text-[1.45rem] font-light tracking-[0.14em]">LI<span class="logo-x font-bold">X</span>SOS</span>
      <span class="mt-1 block font-['Roboto'] text-[0.5rem] font-medium tracking-[0.5em] text-ink-soft">TECHNOLOGIES</span>
    </span>
  </NuxtLinkLocale>
</template>

<style scoped>
/* The brand asset itself: the X is printed in the logo gradient, nowhere else on the site */
.logo-x {
  background: linear-gradient(100deg, #22d3ee, #3b82f6 50%, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
