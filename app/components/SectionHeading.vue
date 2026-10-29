<script setup lang="ts">
withDefaults(defineProps<{ eyebrow?: string; title: string; text?: string; center?: boolean }>(), {
  center: false,
})
</script>

<template>
  <div :class="center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
    <h2 class="mt-5 text-4xl font-semibold leading-[1.05] md:text-6xl" data-reveal data-reveal-delay="0.1">
      <slot name="title">{{ title }}</slot>
    </h2>
    <p v-if="text" class="mt-5 text-lg leading-relaxed text-muted" data-reveal data-reveal-delay="0.2">
      {{ text }}
    </p>
  </div>
</template>
