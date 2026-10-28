<script setup lang="ts">
// Closing link to the next item in a series (service, project).
defineProps<{ to: string; label: string; title: string }>()
</script>

<template>
  <section class="container-x mt-28">
    <NuxtLinkLocale :to="to" class="group block border-y border-rule-strong py-10 md:py-14">
      <span class="text-sm font-semibold text-ink-soft">{{ label }}</span>
      <span class="mt-3 flex items-center justify-between gap-6">
        <span class="font-display text-[2.4rem] leading-none transition-colors group-hover:text-primary md:text-[4.5rem]">{{ title }}</span>
        <svg viewBox="0 0 24 24" class="h-8 w-8 shrink-0 text-ink-soft transition-transform duration-300 group-hover:translate-x-2 group-hover:text-primary rtl:-scale-x-100 rtl:group-hover:-translate-x-2 md:h-12 md:w-12" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">
          <path d="M3 12h17M14 6l6 6-6 6" />
        </svg>
      </span>
    </NuxtLinkLocale>
  </section>
</template>
