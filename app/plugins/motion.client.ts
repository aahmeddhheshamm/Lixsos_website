import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

/**
 * Smooth scrolling (Lenis) + scroll-triggered reveals (GSAP).
 *
 * Any element with `data-reveal` fades/slides in when it enters the viewport.
 * Optional attributes:
 *   data-reveal="left" | "right" | "scale"   direction of the entrance
 *   data-reveal-delay="0.2"                   extra delay in seconds
 * Elements with `data-parallax="0.2"` drift vertically while scrolling.
 *
 * Elements are picked up by a MutationObserver as soon as they enter the DOM,
 * so this works regardless of page-transition timing.
 */
export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isRtl = () => document.documentElement.dir === 'rtl'

  let lenis: Lenis | null = null
  if (!reduced) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis?.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
  }

  const offsets = (dir: string): gsap.TweenVars => {
    const side = isRtl() ? -1 : 1
    if (dir === 'left') return { x: -60 * side, y: 0 }
    if (dir === 'right') return { x: 60 * side, y: 0 }
    if (dir === 'scale') return { scale: 0.9, y: 0 }
    return { y: 40 }
  }

  const tracked = new Map<HTMLElement, gsap.core.Tween>()

  const reveal = (el: HTMLElement) => {
    if (reduced) {
      el.removeAttribute('data-reveal')
      return
    }
    const tween = gsap.fromTo(
      el,
      { opacity: 0, ...offsets(el.dataset.reveal || 'up') },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        delay: Number(el.dataset.revealDelay || 0),
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        // Hand transform back to CSS so hover/tilt effects work after the reveal
        onComplete: () => {
          el.removeAttribute('data-reveal')
          gsap.set(el, { clearProps: 'transform,opacity' })
        },
      },
    )
    tracked.set(el, tween)
  }

  const parallax = (el: HTMLElement) => {
    const speed = Number(el.dataset.parallax || 0.2)
    const tween = gsap.to(el, {
      yPercent: -100 * speed,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    })
    tracked.set(el, tween)
  }

  const scan = () => {
    // Drop animations whose elements were removed (e.g. previous page)
    for (const [el, tween] of tracked) {
      if (!el.isConnected) {
        tween.scrollTrigger?.kill()
        tween.kill()
        tracked.delete(el)
      }
    }

    let added = false
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      if (!tracked.has(el)) {
        reveal(el)
        added = true
      }
    })
    if (!reduced) {
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        if (!tracked.has(el)) {
          parallax(el)
          added = true
        }
      })
    }
    if (added) ScrollTrigger.refresh()
  }

  let pending: ReturnType<typeof setTimeout> | undefined
  const schedule = () => {
    clearTimeout(pending)
    pending = setTimeout(scan, 30)
  }

  // Wait until hydration (including async pages) is complete before touching the DOM
  onNuxtReady(() => {
    scan()
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true })
  })

  nuxtApp.hook('page:finish', () => lenis?.scrollTo(0, { immediate: true }))
  nuxtApp.hook('page:transition:finish', () => {
    lenis?.scrollTo(0, { immediate: true })
    schedule()
    ScrollTrigger.refresh()
  })

  return { provide: { gsap, lenis } }
})
