<script setup lang="ts">
defineProps<{ title?: string; text?: string }>()
</script>

<template>
  <section class="container-x mt-32">
    <div class="relative overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-20 text-center md:px-16" data-reveal="scale">
      <div class="absolute inset-0 bg-gradient-brand opacity-20" />
      <div class="absolute -left-20 -top-20 h-72 w-72 animate-float rounded-full bg-brand-cyan/30 blur-3xl" />
      <div class="absolute -bottom-24 -right-10 h-80 w-80 animate-float rounded-full bg-brand-violet/40 blur-3xl [animation-delay:-3s]" />
      <div class="relative">
        <LogoMark :size="56" class="mx-auto animate-spin-slow" />
        <h2 class="mx-auto mt-8 max-w-3xl text-4xl font-semibold md:text-6xl">{{ title || $t('cta.title') }}</h2>
        <p class="mx-auto mt-5 max-w-xl text-lg text-slate-300">{{ text || $t('cta.text') }}</p>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <NuxtLinkLocale to="/contact" class="btn-primary">{{ $t('cta.start') }} {{ $t('common.arrow') }}</NuxtLinkLocale>
          <NuxtLinkLocale to="/erp" class="btn-ghost">{{ $t('cta.erp') }}</NuxtLinkLocale>
        </div>
      </div>
    </div>
  </section>
</template>
