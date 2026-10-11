/** A value translated into every site language. */
export type L<T = string> = { en: T; ar: T }

export type Locale = keyof L
