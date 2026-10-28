<script setup lang="ts">
// Inner-page opening: the page title engraved large, a guilloche band beneath it.
defineProps<{ title: string; text?: string }>()
</script>

<template>
  <section class="pb-16 pt-32 md:pb-20 md:pt-40">
    <div class="container-x">
      <h1 class="h-page max-w-5xl">
        <slot name="title">{{ title }}</slot>
      </h1>
      <p v-if="text" class="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
        {{ text }}
      </p>
      <slot />
    </div>
  </section>
</template>

