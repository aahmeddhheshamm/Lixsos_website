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

const onScroll = () => (scrolled.value = window.scrollY > 24)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="scrolled ? 'py-3' : 'py-5'"
  >
    <div class="container-x">
      <nav
        class="flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500"
        :class="scrolled ? 'glass shadow-2xl shadow-black/40' : 'border border-transparent'"
        :aria-label="$t('nav.main')"
      >
        <AppLogo />

        <ul class="hidden items-center gap-1 lg:flex">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLinkLocale
              :to="link.to"
              class="nav-link relative rounded-full px-4 py-2 text-sm transition-colors hover:text-white"
              :class="isActive(link.to) ? 'is-active text-white' : 'text-slate-300'"
            >
              {{ $t(`nav.${link.key}`) }}
            </NuxtLinkLocale>
          </li>
        </ul>

        <div class="flex items-center gap-3">
          <ThemeToggle />
          <LangSwitcher class="hidden sm:inline-flex" />
          <NuxtLinkLocale to="/contact" class="btn-primary hidden py-2.5! sm:inline-flex">{{ $t('nav.letsTalk') }}</NuxtLinkLocale>
          <button
            class="relative grid h-10 w-10 place-items-center rounded-full border border-white/10 lg:hidden"
            :aria-expanded="open"
            :aria-label="$t('nav.toggleMenu')"
            @click="open = !open"
          >
            <span class="absolute h-0.5 w-5 bg-white transition-all duration-300" :class="open ? 'rotate-45' : '-translate-y-1.5'" />
            <span class="absolute h-0.5 w-5 bg-white transition-all duration-300" :class="open ? 'opacity-0' : ''" />
            <span class="absolute h-0.5 w-5 bg-white transition-all duration-300" :class="open ? '-rotate-45' : 'translate-y-1.5'" />
          </button>
        </div>
      </nav>

      <div v-if="open" class="menu-in glass mt-3 rounded-2xl p-4 lg:hidden">
        <NuxtLinkLocale
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block rounded-xl px-4 py-3 font-display text-2xl text-white hover:bg-white/5"
          :class="isActive(link.to) ? 'bg-white/5' : ''"
        >
          {{ $t(`nav.${link.key}`) }}
        </NuxtLinkLocale>
        <div class="mt-3 flex gap-3">
          <LangSwitcher />
          <NuxtLinkLocale to="/contact" class="btn-primary flex-1">{{ $t('nav.letsTalk') }}</NuxtLinkLocale>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 2px;
  height: 2px;
  width: 0;
  border-radius: 2px;
  background: var(--color-primary);
  transition: all 0.35s ease;
  transform: translateX(-50%);
}
.nav-link:hover::after,
.nav-link.is-active::after {
  width: 18px;
}
.menu-in {
  animation: menu-in 0.3s ease both;
}
@keyframes menu-in {
  from { opacity: 0; transform: translateY(-10px) scale(0.98); }
}
</style>
