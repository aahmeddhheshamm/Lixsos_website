<script setup lang="ts">
const { toasts, dismiss } = useToast()
</script>

<template>
  <div class="pointer-events-none fixed inset-x-4 bottom-4 z-[70] flex flex-col items-center gap-2 sm:inset-x-auto sm:end-6 sm:bottom-6 sm:items-end" aria-live="polite">
    <TransitionGroup name="toast">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="glass pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl px-5 py-4 text-sm text-white shadow-2xl"
        :role="t.type === 'error' ? 'alert' : 'status'"
      >
        <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full" :class="t.type === 'error' ? 'bg-brand-violet' : 'bg-brand-cyan'" aria-hidden="true" />
        <p class="flex-1">{{ t.message }}</p>
        <button type="button" class="text-muted transition hover:text-white" :aria-label="$t('contact.close')" @click="dismiss(t.id)">✕</button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
