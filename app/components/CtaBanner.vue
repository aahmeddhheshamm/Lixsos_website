<script setup lang="ts">
import { site } from '~/data/site'

defineProps<{ title?: string; text?: string }>()
</script>

<template>
  <section class="container-x mt-32">
    <div class="note grid gap-10 bg-paper-3 p-8 md:grid-cols-12 md:p-14">
      <div class="md:col-span-7">
        <h2 class="h-section">{{ title || $t('cta.title') }}</h2>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{{ text || $t('cta.text') }}</p>
      </div>
      <div class="flex flex-col justify-end gap-6 md:col-span-5">
        <div class="flex flex-wrap gap-3">
          <NuxtLinkLocale to="/contact" class="btn">{{ $t('cta.start') }}</NuxtLinkLocale>
          <NuxtLinkLocale to="/erp" class="btn-line">{{ $t('cta.erp') }}</NuxtLinkLocale>
        </div>
        <dl class="grid gap-3 border-t border-rule pt-5 text-[0.95rem]">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <dt class="text-ink-soft">{{ $t('contact.email') }}</dt>
            <dd><a :href="`mailto:${site.email}`" class="link-rule text-ink">{{ site.email }}</a></dd>
          </div>
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <dt class="text-ink-soft">{{ $t('contact.phone') }}</dt>
            <dd><a :href="`tel:${site.phone.replace(/\s/g, '')}`" class="link-rule text-ink" dir="ltr">{{ site.phone }}</a></dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
