import { THEME_STORAGE_KEY, type Theme } from '~/data/theme'

/**
 * Light/dark theme. Dark is the default; the visitor's choice is saved in localStorage
 * and applied before first paint by the inline script in nuxt.config.ts.
 */
export function useTheme() {
  const theme = useState<Theme>('theme', () => 'dark')

  const apply = (value: Theme) => {
    theme.value = value
    document.documentElement.classList.toggle('dark', value === 'dark')
    try {
      localStorage.setItem(THEME_STORAGE_KEY, value)
    } catch {}
  }

  /** Switch theme with a short cross-fade where the View Transitions API is supported. */
  const setTheme = (value: Theme) => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduced) return apply(value)
    document.startViewTransition(async () => {
      apply(value)
      await nextTick()
    })
  }

  const toggleTheme = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')

  return { theme, setTheme, toggleTheme }
}
