<template>
  <NuxtLinkLocale to="/" class="group flex items-center gap-3" :aria-label="$t('common.home')">
    <LogoMark :size="40" class="transition-transform duration-500 group-hover:rotate-[20deg]" />
    <!-- The wordmark is always Latin, so keep it LTR with its letter-spacing -->
    <span class="leading-none" dir="ltr">
      <span class="block font-['Space_Grotesk'] text-xl font-light tracking-[0.18em] text-white">
        LI<span class="text-gradient font-bold">X</span>SOS
      </span>
      <span class="mt-1 block font-['Inter'] text-[0.55rem] tracking-[0.5em] text-muted">TECHNOLOGIES</span>
    </span>
  </NuxtLinkLocale>
</template>
