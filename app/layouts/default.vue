<template>
  <div class="relative min-h-screen">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2">{{ $t('nav.skip') }}</a>
    <AppHeader />
    <main id="main" class="relative">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
