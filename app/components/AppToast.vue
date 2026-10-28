<script setup lang="ts">
const { toasts, dismiss } = useToast()
</script>

<template>
  <div class="pointer-events-none fixed inset-x-4 bottom-4 z-[70] flex flex-col items-center gap-2 sm:inset-x-auto sm:end-6 sm:bottom-6 sm:items-end" aria-live="polite">
    <TransitionGroup name="toast">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="toast pointer-events-auto flex w-full max-w-sm items-start gap-3 bg-paper-3 px-5 py-4 text-sm text-ink"
        :class="t.type === 'error' ? 'is-error' : 'is-success'"
        :role="t.type === 'error' ? 'alert' : 'status'"
      >
        <p class="flex-1">{{ t.message }}</p>
        <button type="button" class="text-ink-soft hover:text-ink" :aria-label="$t('contact.close')" @click="dismiss(t.id)">✕</button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast {
  border: 1px solid var(--color-rule-strong);
  border-inline-start-width: 4px;
  border-radius: 2px;
  box-shadow: 0 10px 30px rgb(0 0 0 / 0.18);
}
.toast.is-success {
  border-inline-start-color: var(--color-primary);
}
.toast.is-error {
  border-inline-start-color: var(--color-accent);
}
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s var(--ease-print), transform 0.3s var(--ease-print);
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
