// Sync the theme state with the class the inline head script already applied.
// Done once hydration (including the async layout/pages) is complete, so the server-rendered
// markup (always dark) hydrates cleanly and Vue then patches the toggle icon reactively.
export default defineNuxtPlugin(() => {
  onNuxtReady(() => {
    const { theme } = useTheme()
    theme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  })
})
