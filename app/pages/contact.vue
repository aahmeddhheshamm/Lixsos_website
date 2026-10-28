<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useI18n()
const l = useL()

usePageSeo({
  title: () => t('seo.contact.title'),
  description: () => t('seo.contact.description'),
})

const interests = computed(() => t('contact.interests').split(','))

const form = reactive({ name: '', email: '', company: '', interests: [] as string[], message: '' })
const sent = ref(false)
const sending = ref(false)
const failed = ref(false)

const toggle = (i: string) => {
  const idx = form.interests.indexOf(i)
  idx === -1 ? form.interests.push(i) : form.interests.splice(idx, 1)
}

// The site is static (GitHub Pages), so submissions go through FormSubmit, which emails them to site.email
const submit = async () => {
  sending.value = true
  failed.value = false
  try {
    const res = await $fetch<{ success: string | boolean }>(`https://formsubmit.co/ajax/${site.email}`, {
      method: 'POST',
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
    if (String(res.success) !== 'true') throw new Error('FormSubmit rejected the submission')
    sent.value = true
  } catch {
    failed.value = true
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div>
    <PageHero :title="$t('contact.title')" :text="$t('contact.text')">
      <template #title>{{ $t('contact.title') }} <span class="hi">{{ $t('contact.hi') }}</span></template>
    </PageHero>

    <section class="container-x grid gap-12 lg:grid-cols-12">
      <dl class="self-start border-t border-rule-strong lg:col-span-4">
        <div class="border-b border-rule py-6">
          <dt class="text-sm text-ink-soft">{{ $t('contact.email') }}</dt>
          <dd class="mt-1"><a :href="`mailto:${site.email}`" class="link-rule font-display text-[1.6rem] font-normal">{{ site.email }}</a></dd>
        </div>
        <div class="border-b border-rule py-6">
          <dt class="text-sm text-ink-soft">{{ $t('contact.phone') }}</dt>
          <dd class="mt-1"><a :href="`tel:${site.phone.replace(/\s/g, '')}`" class="link-rule font-display text-[1.6rem] font-normal"><bdi dir="ltr">{{ site.phone }}</bdi></a></dd>
        </div>
        <div class="border-b border-rule py-6">
          <dt class="text-sm text-ink-soft">{{ $t('contact.office') }}</dt>
          <dd class="mt-1 font-display text-[1.6rem]">{{ l(site.address) }}</dd>
          <dd class="mt-1 text-sm text-ink-soft">{{ $t('contact.hours') }}</dd>
        </div>
      </dl>

      <div class="note bg-paper-3 p-6 sm:p-8 md:p-12 lg:col-span-8">
        <div v-if="sent" class="swap-in py-14 text-center" role="status">
          <LogoMark :size="72" animated class="mx-auto text-primary" />
          <h2 class="mt-8 text-[2.4rem] leading-tight">{{ $t('contact.thanks', { name: form.name.split(' ')[0] || $t('contact.friend') }) }}</h2>
          <p class="mt-3 text-ink-soft">{{ $t('contact.thanksText') }}</p>
        </div>

        <form v-else class="space-y-9" @submit.prevent="submit">
          <div class="grid gap-7 md:grid-cols-2">
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
            <legend class="mb-3 text-sm font-semibold">{{ $t('contact.interested') }}</legend>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="i in interests"
                :key="i"
                type="button"
                class="chip"
                :class="{ 'is-on': form.interests.includes(i) }"
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

          <p v-if="failed" class="text-accent" role="alert">{{ $t('contact.error') }}</p>

          <button type="submit" class="btn w-full md:w-auto" :disabled="sending">
            {{ sending ? $t('contact.sending') : $t('contact.send') }}
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.field {
  display: block;
}
.field span {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.875rem;
  font-weight: 600;
}
/* Fields are ruled lines to write on, like the blanks of a printed form */
.field input,
.field textarea {
  width: 100%;
  border: 0;
  border-bottom: 1px solid var(--color-rule-strong);
  background: transparent;
  padding: 0.6rem 0;
  font-size: 1.05rem;
  color: var(--color-ink);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.field textarea {
  border: 1px solid var(--color-rule-strong);
  padding: 0.75rem 0.9rem;
  resize: vertical;
}
.field input::placeholder,
.field textarea::placeholder {
  color: color-mix(in oklab, var(--color-ink-soft) 80%, transparent);
}
.field input:focus {
  border-bottom-color: var(--color-primary);
  box-shadow: 0 1px 0 var(--color-primary);
}
.field textarea:focus {
  border-color: var(--color-primary);
  box-shadow: inset 0 0 0 1px var(--color-primary);
}
.field input:user-invalid {
  border-bottom-color: var(--color-accent);
}
[dir='rtl'] .field input[dir='ltr'] {
  text-align: right;
}
.chip {
  display: inline-flex;
  min-height: 2.5rem;
  align-items: center;
  border: 1px solid var(--color-rule-strong);
  border-radius: 2px;
  padding: 0 0.9rem;
  font-size: 0.9rem;
  color: var(--color-ink);
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.chip:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
.chip.is-on {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-paper);
}
.swap-in {
  animation: swap-in 0.5s var(--ease-print) both;
}
@keyframes swap-in {
  from { opacity: 0; transform: translateY(8px); }
}
</style>
