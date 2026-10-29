<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useI18n()
const l = useL()

usePageSeo({
  title: () => t('seo.contact.title'),
  description: () => t('seo.contact.description'),
})

const toast = useToast()

const interests = computed(() => t('contact.interests').split(','))

const form = reactive({ name: '', email: '', company: '', interests: [] as string[], message: '' })
const sent = ref(false)
const sending = ref(false)

const toggle = (i: string) => {
  const idx = form.interests.indexOf(i)
  idx === -1 ? form.interests.push(i) : form.interests.splice(idx, 1)
}

// The site is static (GitHub Pages), so submissions go through FormSubmit, which emails them to site.email
const submit = async () => {
  sending.value = true
  try {
    const raw = await $fetch<{ success: string | boolean } | string>(`https://formsubmit.co/ajax/${site.email}`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: {
        name: form.name,
        email: form.email,
        company: form.company || '-',
        interests: form.interests.join(', ') || '-',
        message: form.message,
        _subject: `New project enquiry from ${form.name}`,
        _replyto: form.email,
        _template: 'table',
        _captcha: 'false',
      },
    })
    // FormSubmit doesn't always send a JSON content type, so the body can arrive as a string
    const res = typeof raw === 'string' ? JSON.parse(raw) : raw
    if (String(res.success) !== 'true') throw new Error('FormSubmit rejected the submission')
    sent.value = true
    toast.show(t('contact.thanksText'))
  } catch {
    toast.show(t('contact.error'), 'error')
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div>
    <PageHero :eyebrow="$t('contact.eyebrow')" :title="$t('contact.title')" :text="$t('contact.text')">
      <template #title>{{ $t('contact.title') }} <span class="text-gradient">{{ $t('contact.hi') }}</span></template>
    </PageHero>

    <section class="container-x grid gap-12 lg:grid-cols-12">
      <div class="space-y-6 lg:col-span-4" data-reveal="left">
        <a :href="`mailto:${site.email}`" class="glass group block rounded-3xl p-7 transition hover:border-primary">
          <span class="text-xs uppercase tracking-widest text-muted">{{ $t('contact.email') }}</span>
          <span class="mt-2 block font-display text-2xl text-white transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1">{{ site.email }}</span>
        </a>
        <a :href="`tel:${site.phone.replace(/\s/g, '')}`" class="glass group block rounded-3xl p-7 transition hover:border-primary">
          <span class="text-xs uppercase tracking-widest text-muted">{{ $t('contact.phone') }}</span>
          <span class="mt-2 block font-display text-2xl text-white transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1"><bdi dir="ltr">{{ site.phone }}</bdi></span>
        </a>
        <div class="glass rounded-3xl p-7">
          <span class="text-xs uppercase tracking-widest text-muted">{{ $t('contact.office') }}</span>
          <span class="mt-2 block font-display text-2xl text-white">{{ l(site.address) }}</span>
          <span class="mt-1 block text-sm text-muted">{{ $t('contact.hours') }}</span>
        </div>
      </div>

      <div class="lg:col-span-8" data-reveal="right">
        <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900/60 p-8 md:p-12">

          <div v-if="sent" class="swap-in relative py-16 text-center">
            <LogoMark :size="90" animated class="mx-auto" />
            <h2 class="mt-8 text-4xl font-semibold">{{ $t('contact.thanks', { name: form.name.split(' ')[0] || $t('contact.friend') }) }}</h2>
            <p class="mt-3 text-muted">{{ $t('contact.thanksText') }}</p>
          </div>

          <form v-else class="relative space-y-8" @submit.prevent="submit">
            <div class="grid gap-6 md:grid-cols-2">
              <label class="field">
                <span>{{ $t('contact.name') }}</span>
                <input v-model="form.name" required autocomplete="name" :placeholder="$t('contact.namePh')">
              </label>
              <label class="field">
                <span>{{ $t('contact.emailLabel') }}</span>
                <input v-model="form.email" type="email" required autocomplete="email" dir="ltr" :placeholder="$t('contact.emailPh')">
              </label>
              <label class="field md:col-span-2">
                <span>{{ $t('contact.company') }}</span>
                <input v-model="form.company" autocomplete="organization" :placeholder="$t('contact.companyPh')">
              </label>
            </div>

            <fieldset>
              <legend class="mb-3 text-sm text-muted">{{ $t('contact.interested') }}</legend>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="i in interests"
                  :key="i"
                  type="button"
                  class="rounded-full border px-4 py-2 text-sm transition cursor-pointer"
                  :class="form.interests.includes(i) ? 'border-transparent bg-gradient-brand text-snow' : 'border-white/15 text-slate-300 hover:border-primary'"
                  :aria-pressed="form.interests.includes(i)"
                  @click="toggle(i)"
                >
                  {{ i }}
                </button>
              </div>
            </fieldset>

            <label class="field">
              <span>{{ $t('contact.details') }}</span>
              <textarea v-model="form.message" required rows="5" :placeholder="$t('contact.detailsPh')" />
            </label>

            <button type="submit" class="btn-primary w-full md:w-auto" :disabled="sending">
              {{ sending ? $t('contact.sending') : `${$t('contact.send')} ${$t('common.arrow')}` }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.field {
  @apply block;
}
.field span {
  @apply mb-2 block text-sm text-muted;
}
.field input,
.field textarea {
  @apply w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-primary focus:bg-white/[0.05] focus:ring-primary;
}
[dir='rtl'] .field input[dir='ltr'] {
  text-align: right;
}
.swap-in {
  animation: swap-in 0.5s ease both;
}
@keyframes swap-in {
  from { opacity: 0; transform: scale(0.97); }
}
</style>
