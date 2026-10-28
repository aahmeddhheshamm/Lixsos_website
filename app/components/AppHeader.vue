<script setup lang="ts">
import { navLinks } from '~/data/site'

const open = ref(false)
const scrolled = ref(false)
const route = useRoute()
const localePath = useLocalePath()

const isActive = (to: string) => {
  const target = localePath(to)
  return to === '/' ? route.path === target || route.path === `${target}/` : route.path.startsWith(target)
}

watch(() => route.fullPath, () => (open.value = false))

const onScroll = () => (scrolled.value = window.scrollY > 8)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-paper transition-shadow duration-300" :class="scrolled ? 'shadow-[0_1px_0_var(--color-rule-strong),0_8px_24px_-18px_rgb(0_0_0/0.35)]' : 'shadow-[0_1px_0_var(--color-rule)]'">
    <div class="container-x">
      <nav class="flex h-[4.25rem] items-center justify-between gap-6" :aria-label="$t('nav.main')">
        <AppLogo />

        <ul class="hidden items-center gap-7 lg:flex">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLinkLocale
              :to="link.to"
              class="nav-link py-2 text-[0.95rem] font-medium"
              :class="isActive(link.to) ? 'is-active text-ink' : 'text-ink-soft hover:text-primary'"
              :aria-current="isActive(link.to) ? 'page' : undefined"
            >
              {{ $t(`nav.${link.key}`) }}
            </NuxtLinkLocale>
          </li>
        </ul>

        <div class="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <LangSwitcher class="hidden sm:inline-flex" />
          <NuxtLinkLocale to="/contact" class="btn hidden min-h-10! px-5! sm:inline-flex">{{ $t('nav.letsTalk') }}</NuxtLinkLocale>
          <button
            class="relative grid h-10 w-10 place-items-center lg:hidden"
            :aria-expanded="open"
            aria-controls="mobile-menu"
            :aria-label="$t('nav.toggleMenu')"
            @click="open = !open"
          >
            <span class="absolute h-px w-6 bg-ink transition-transform duration-300" :class="open ? 'rotate-45' : '-translate-y-[5px]'" />
            <span class="absolute h-px w-6 bg-ink transition-transform duration-300" :class="open ? '-rotate-45' : 'translate-y-[5px]'" />
          </button>
        </div>
      </nav>
    </div>

    <div v-if="open" id="mobile-menu" class="menu-in border-t border-rule bg-paper lg:hidden">
      <div class="container-x py-4">
        <NuxtLinkLocale
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="flex items-baseline justify-between border-b border-rule py-4 font-display text-[1.75rem]"
          :class="isActive(link.to) ? 'text-primary' : 'text-ink'"
        >
          {{ $t(`nav.${link.key}`) }}
        </NuxtLinkLocale>
        <div class="mt-5 flex items-center gap-3">
          <LangSwitcher />
          <NuxtLinkLocale to="/contact" class="btn flex-1">{{ $t('nav.letsTalk') }}</NuxtLinkLocale>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Hover draws one rule under the link; the current page gets the double rule */
.nav-link {
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 0.45em;
  transition: text-decoration-color 0.2s ease, color 0.2s ease;
}
.nav-link:hover {
  text-decoration-color: var(--color-rule-strong);
}
.nav-link.is-active {
  text-decoration-style: double;
  text-decoration-color: var(--color-primary);
}
.menu-in {
  animation: menu-in 0.25s var(--ease-print) both;
}
@keyframes menu-in {
  from { opacity: 0; transform: translateY(-6px); }
}
</style>
