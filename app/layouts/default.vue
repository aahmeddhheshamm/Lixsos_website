<template>
  <div class="noise relative min-h-screen">
    <AppHeader />
    <main class="relative z-10">
      <slot />
    </main>
    <AppFooter />
    <AppToast />
  </div>
</template>
