<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '~/data/projects'
import { processSteps, services, site, stats, testimonials } from '~/data/site'
import { erpModules } from '~/data/erp'

const { t, locale } = useI18n()
const l = useL()

usePageSeo({
  title: () => t('seo.home.title'),
  description: () => l(site.description),
})

const featured = projects.filter((p) => p.featured)
const headline = computed(() => t('home.headline').split(' '))

// Rotating word in the hero
const words = computed(() => t('home.words').split(','))
const wordIndex = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

// Pinned horizontal scroll for featured work (desktop only)
const track = ref<HTMLElement | null>(null)
const pin = ref<HTMLElement | null>(null)
let mm: gsap.MatchMedia | undefined

const setupHorizontal = () => {
  mm?.revert()
  mm = gsap.matchMedia()
  mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
    if (!track.value || !pin.value) return
    // In RTL the row starts on the right and travels the other way
    const dir = document.documentElement.dir === 'rtl' ? 1 : -1
    const distance = () => track.value!.scrollWidth - window.innerWidth + 80
    gsap.to(track.value, {
      x: () => dir * distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: pin.value,
        start: 'top top',
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })
  })
}

onMounted(() => {
  timer = setInterval(() => (wordIndex.value = (wordIndex.value + 1) % words.value.length), 2200)
  gsap.registerPlugin(ScrollTrigger)
  setupHorizontal()
})

// Switching language swaps `dir` on <html>; rebuild the horizontal scroll for the new direction
watch(locale, () => nextTick(setupHorizontal))

onBeforeUnmount(() => {
  clearInterval(timer)
  mm?.revert()
})
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative flex min-h-[100svh] items-center overflow-hidden pt-12">
   
      <!-- <div class="grid-bg absolute inset-0" /> -->
      <div class="container-x relative grid items-center gap-16 lg:grid-cols-12">
        <div class="lg:col-span-7">
      
          <h1 class="mt-8 text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl">
            <span class="sr-only">{{ $t('home.headline') }} {{ words[0] }}</span>
            <span aria-hidden="true">
              <span v-for="(w, i) in headline" :key="`${locale}-${w}`" class="inline-block overflow-hidden pb-2 align-bottom">
                <span class="hero-word inline-block" :style="{ '--i': i + 1 }">{{ w }}&nbsp;</span>
              </span>
              <span class="relative inline-block min-w-[5ch] overflow-hidden pb-2 align-bottom">
                <span :key="words[wordIndex]" class="word-in text-gradient inline-block">{{ words[wordIndex] }}</span>
              </span>
            </span>
          </h1>

          <p class="hero-word mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl" style="--i: 7">
            {{ $t('home.intro') }} <strong class="whitespace-nowrap text-white">{{ $t('home.introErp') }}</strong>.
          </p>

          <div class="hero-word mt-10 flex flex-wrap gap-4" style="--i: 8">
            <NuxtLinkLocale to="/work" class="btn-primary">{{ $t('home.seeWork') }} {{ $t('common.arrow') }}</NuxtLinkLocale>
            <NuxtLinkLocale to="/contact" class="btn-ghost">{{ $t('home.bookCall') }}</NuxtLinkLocale>
          </div>
        </div>

        <!-- Logo orb -->
        <div class="relative hidden lg:col-span-5 lg:block">
          <div class="relative mx-auto aspect-square w-full max-w-md">
            <div class="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/15" />
            <div class="absolute inset-10 animate-spin-slow rounded-full border border-brand-cyan/20 [animation-direction:reverse]" />
            <div class="absolute inset-24 rounded-full bg-gradient-brand opacity-30 blur-2xl" />
            <div class="absolute inset-0 grid place-items-center">
              <span class="absolute h-40 w-40 animate-pulse-ring rounded-full border border-brand-cyan/50" />
              <span class="absolute h-40 w-40 animate-pulse-ring rounded-full border border-brand-violet/50 [animation-delay:1.2s]" />
              <div class=" grid h-44 w-44 animate-float place-items-center rounded-[2.5rem]">
                <LogoMark :size="120" animated />
              </div>
            </div>
        
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted md:flex">
        {{ $t('home.scroll') }}
        <span class="relative h-10 w-6 rounded-full border border-white/20">
          <span class="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 animate-bounce rounded-full bg-primary" />
        </span>
      </div>
    </section>

    <!-- CLIENTS -->
    <!-- <section class="mt-10" aria-labelledby="clients-title">
      <p id="clients-title" class="container-x mb-8 text-center text-sm uppercase tracking-[0.3em] text-muted" data-reveal>
        {{ $t('home.trusted') }}
      </p>
      <ClientMarquee />
    </section> -->

    <!-- STATS -->
    <!-- <section class="container-x mt-32">
      <div class="grid grid-cols-2 gap-10 rounded-[2rem] border border-white/10 bg-ink-900/40 p-10 md:grid-cols-4 md:p-14">
        <StatCounter v-for="(s, i) in stats" :key="s.value" v-bind="s" data-reveal :data-reveal-delay="i * 0.1" />
      </div>
    </section> -->

    <!-- SERVICES -->
    <section class="container-x mt-32">
      <div class="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading :eyebrow="$t('home.servicesEyebrow')" title="">
          <template #title>{{ $t('home.servicesTitle') }} <span class="text-gradient">{{ $t('home.servicesHi') }}</span></template>
        </SectionHeading>
        <NuxtLinkLocale to="/services" class="btn-ghost shrink-0" data-reveal>{{ $t('home.allServices') }} {{ $t('common.arrow') }}</NuxtLinkLocale>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLinkLocale v-for="(s, i) in services" :key="s.slug" :to="`/services/${s.slug}`" class="block" data-reveal :data-reveal-delay="(i % 3) * 0.1">
          <TiltCard class="h-full rounded-3xl">
            <article class="h-full rounded-3xl border border-white/10 bg-ink-900/50 p-8 transition-colors duration-300 hover:border-brand-cyan/40">
              <div class="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-snow shadow-lg shadow-brand-cyan/20 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                <ServiceIcon :name="s.icon" />
              </div>
              <h3 class="mt-8 text-2xl font-semibold">{{ l(s.title) }}</h3>
              <p class="mt-3 leading-relaxed text-muted">{{ l(s.text) }}</p>
              <ul class="mt-6 flex flex-wrap gap-2">
                <li v-for="p in l(s.points)" :key="p" class="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{{ p }}</li>
              </ul>
            </article>
          </TiltCard>
        </NuxtLinkLocale>
      </div>
    </section>

    <!-- FEATURED WORK: horizontal pinned scroll -->
    <section ref="pin" class="mt-32 overflow-hidden lg:flex lg:h-screen lg:flex-col lg:justify-center">
      <div class="container-x flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading :eyebrow="$t('home.workEyebrow')" title="">
          <template #title>{{ $t('home.workTitle') }} <span class="text-gradient">{{ $t('home.workHi') }}</span></template>
        </SectionHeading>
        <NuxtLinkLocale to="/work" class="btn-ghost shrink-0">{{ $t('home.viewAll') }} {{ $t('common.arrow') }}</NuxtLinkLocale>
      </div>
      <div ref="track" class="mt-14 flex flex-col gap-8 px-5 sm:px-8 lg:w-max lg:flex-row lg:ps-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <div v-for="p in featured" :key="p.slug" class="lg:w-[34rem]" data-reveal>
          <ProjectCard :project="p" />
        </div>
      </div>
    </section>

    <!-- ERP TEASER -->
    <section class="container-x mt-32">
      <div class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-900/60 p-8 md:p-16">
        <div class="absolute -end-32 -top-32 h-96 w-96 rounded-full bg-brand-violet/30 blur-[120px]" />
        <div class="relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading :eyebrow="$t('home.erpEyebrow')" title="">
              <template #title>{{ $t('home.erpTitle') }} <span class="text-gradient">{{ $t('home.erpHi') }}</span></template>
            </SectionHeading>
            <p class="mt-6 text-lg text-muted" data-reveal>{{ $t('home.erpText') }}</p>
            <ul class="mt-8 grid grid-cols-2 gap-3">
              <li v-for="(m, i) in erpModules.slice(0, 6)" :key="m.name.en" class="flex items-center gap-2 text-sm text-slate-300" data-reveal :data-reveal-delay="i * 0.05">
                <span class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-cyan/15 text-[0.65rem] text-brand-cyan">✓</span>
                {{ l(m.name) }}
              </li>
            </ul>
            <div class="mt-10 flex flex-wrap gap-4" data-reveal>
              <NuxtLinkLocale to="/erp" class="btn-primary">{{ $t('home.erpDiscover') }} {{ $t('common.arrow') }}</NuxtLinkLocale>
              <NuxtLinkLocale to="/contact" class="btn-ghost">{{ $t('home.erpDemo') }}</NuxtLinkLocale>
            </div>
          </div>
          <div data-reveal="right">
            <ErpDashboard />
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="container-x mt-32">
      <SectionHeading :eyebrow="$t('home.processEyebrow')" title="" center>
        <template #title>{{ $t('home.processTitle') }} <span class="text-gradient">{{ $t('home.processHi') }}</span></template>
      </SectionHeading>
      <ol class="relative mt-16 grid gap-6 md:grid-cols-4">
        <div class="absolute left-0 right-0 top-8 hidden h-px bg-linear-to-r from-transparent via-white/20 to-transparent md:block" />
        <li v-for="(step, i) in processSteps" :key="step.title.en" class="relative" data-reveal :data-reveal-delay="i * 0.15">
          <div class="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-ink-900 font-display text-xl font-semibold text-gradient">
            0{{ i + 1 }}
          </div>
          <h3 class="mt-6 text-2xl font-semibold">{{ l(step.title) }}</h3>
          <p class="mt-2 text-muted">{{ l(step.text) }}</p>
        </li>
      </ol>
    </section>

    <!-- TESTIMONIALS -->
    <section class="container-x mt-32">
      <SectionHeading :eyebrow="$t('home.testimonialsEyebrow')" title="">
        <template #title>{{ $t('home.testimonialsTitle') }} <span class="text-gradient">{{ $t('home.testimonialsHi') }}</span> {{ $t('home.testimonialsAfter') }}</template>
      </SectionHeading>
      <div class="mt-14 grid gap-6 md:grid-cols-2">
        <figure
          v-for="(item, i) in testimonials"
          :key="item.name.en"
          class="relative rounded-3xl border border-white/10 bg-ink-900/50 p-8 transition duration-500 hover:-translate-y-1 hover:border-brand-violet/40"
          data-reveal
          :data-reveal-delay="(i % 2) * 0.12"
        >
          <span class="absolute end-8 top-4 font-display text-8xl leading-none text-white/5" aria-hidden="true">“</span>
          <blockquote class="relative text-lg leading-relaxed text-slate-200">“{{ l(item.quote) }}”</blockquote>
          <figcaption class="mt-6 flex items-center gap-3">
            <span class="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand font-semibold text-snow" dir="ltr">
              {{ item.name.en.split(' ').map((n) => n[0]).join('').slice(0, 2) }}
            </span>
            <span>
              <span class="block font-semibold text-white">{{ l(item.name) }}</span>
              <span class="block text-sm text-muted">{{ l(item.role) }}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<style scoped>
.hero-word {
  animation: rise 1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  animation-delay: calc(var(--i) * 0.08s + 0.15s);
}
@keyframes rise {
  from { transform: translateY(110%); opacity: 0; }
  to { transform: none; opacity: 1; }
}
.word-in {
  animation: word-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
@keyframes word-in {
  from { transform: translateY(100%); opacity: 0; filter: blur(6px); }
  to { transform: none; opacity: 1; filter: none; }
}
</style>
