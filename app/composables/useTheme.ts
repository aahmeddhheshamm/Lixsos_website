import { THEME_STORAGE_KEY, type Theme } from '~/data/theme'

/**
 * Light/dark theme. Dark is the default; the visitor's choice is saved in localStorage
 * and applied before first paint by the inline script in nuxt.config.ts.
 */
export function useTheme() {
  const theme = useState<Theme>('theme', () => 'dark')

  const apply = (value: Theme) => {
    theme.value = value
    document.documentElement.classList.toggle('light', value === 'light')
    try {
      localStorage.setItem(THEME_STORAGE_KEY, value)
    } catch {}
  }

  /** Switch theme with a circular reveal from `origin` where the View Transitions API is supported. */
  const setTheme = (value: Theme, origin?: { x: number; y: number }) => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduced) return apply(value)

    const transition = document.startViewTransition(async () => {
      apply(value)
      await nextTick()
    })
    const x = origin?.x ?? window.innerWidth / 2
    const y = origin?.y ?? 0
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
  }

  const toggleTheme = (event?: MouseEvent) =>
    setTheme(theme.value === 'dark' ? 'light' : 'dark', event ? { x: event.clientX, y: event.clientY } : undefined)

  return { theme, setTheme, toggleTheme }
}
