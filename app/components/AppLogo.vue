<template>
  <NuxtLinkLocale to="/" class="group flex min-w-0 items-center gap-2 sm:gap-3" :aria-label="$t('common.home')">
    <LogoMark :size="40" class="h-9 w-9 shrink-0 transition-transform duration-500 group-hover:rotate-[20deg] sm:h-10 sm:w-10" />
    <!-- The wordmark is always Latin, so keep it LTR with its letter-spacing -->
    <span class="leading-none" dir="ltr">
      <span class="block font-['Space_Grotesk'] text-lg font-light tracking-[0.18em] text-white sm:text-xl">
        LI<span class="text-primary font-bold">X</span>SOS
      </span>
      <span class="mt-1 block font-['Inter'] text-[0.55rem] tracking-[0.5em] text-muted">TECHNOLOGIES</span>
    </span>
  </NuxtLinkLocale>
</template>
