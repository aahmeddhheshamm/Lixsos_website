<script setup lang="ts">
withDefaults(defineProps<{ title: string; text?: string; center?: boolean }>(), {
  center: false,
})
</script>

<template>
  <div :class="center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
    <h2 class="h-section">
      <slot name="title">{{ title }}</slot>
    </h2>
    <p v-if="text" class="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft" :class="center ? 'mx-auto' : ''">
      {{ text }}
    </p>
  </div>
</template>
