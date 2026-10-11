<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({ title: () => `${props.error.statusCode} — ${t('error.title')}`, robots: 'noindex' })
</script>

<template>
  <NuxtLayout>
    <section class="relative grid min-h-[90vh] place-items-center overflow-hidden pt-24 text-center">
      <div class="absolute inset-0 opacity-50"><NetworkCanvas /></div>
      <div class="container-x relative">
        <LogoMark :size="100" animated class="mx-auto" />
        <p class="mt-8 font-display text-[8rem] font-bold leading-none text-gradient md:text-[12rem]" dir="ltr">{{ error.statusCode }}</p>
        <h1 class="text-3xl font-semibold md:text-5xl">
          {{ error.statusCode === 404 ? $t('error.lost') : $t('error.wrong') }}
        </h1>
        <p class="mx-auto mt-4 max-w-md text-muted">{{ $t('error.text') }}</p>
        <button class="btn-primary mt-10" @click="clearError({ redirect: localePath('/') })">{{ $t('error.back') }}</button>
      </div>
    </section>
  </NuxtLayout>
</template>
