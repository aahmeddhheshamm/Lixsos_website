<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({ title: () => `${props.error.statusCode}: ${t('error.title')}`, robots: 'noindex' })

// The error page renders outside app.vue, so set lang/dir here too
const i18nHead = useLocaleHead({ seo: false })
useHead(() => ({ htmlAttrs: { lang: i18nHead.value.htmlAttrs?.lang, dir: i18nHead.value.htmlAttrs?.dir } }))
</script>

<template>
  <NuxtLayout>
    <section class="grid min-h-[88vh] place-items-center pt-24">
      <div class="container-x grid items-center gap-12 md:grid-cols-12">
        <div class="relative mx-auto aspect-square w-full max-w-xs text-ink md:col-span-5" aria-hidden="true">
          <Guilloche :inks="['#8b5cf6', '#3b82f6']" :seed="1" />
          <span class="absolute inset-0 grid place-items-center font-display text-[4.5rem] leading-none text-primary" dir="ltr">{{ error.statusCode }}</span>
        </div>
        <div class="md:col-span-7">
          <h1 class="h-page">
            {{ error.statusCode === 404 ? $t('error.lost') : $t('error.wrong') }}
          </h1>
          <p class="mt-6 max-w-md text-lg text-ink-soft">{{ $t('error.text') }}</p>
          <button class="btn mt-10" @click="clearError({ redirect: localePath('/') })">{{ $t('error.back') }}</button>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
