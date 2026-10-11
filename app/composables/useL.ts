import type { L, Locale } from '~/data/types'

/** Returns a picker that resolves a bilingual `L` value for the current locale. */
export function useL() {
  const { locale } = useI18n()
  return <T>(value: L<T>): T => value[locale.value as Locale] ?? value.en
}
