<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; text?: string }>()
</script>

<template>
  <section class="relative overflow-hidden pb-16 pt-40 md:pt-48">
    <div class="container-x relative">
      <h1 class="hero-in mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] md:text-8xl" style="--d: 0.1s">
        <slot name="title">{{ title }}</slot>
      </h1>
      <p v-if="text" class="hero-in mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl" style="--d: 0.2s">
        {{ text }}
      </p>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.hero-in {
  animation: hero-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  animation-delay: var(--d);
}
@keyframes hero-in {
  from { opacity: 0; transform: translateY(30px); filter: blur(8px); }
  to { opacity: 1; transform: none; filter: none; }
}
</style>
