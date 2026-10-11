<script setup lang="ts">
import { site } from '~/data/site'
import { THEME_COLORS } from '~/data/theme'

const l = useL()
const { theme } = useTheme()

// lang/dir on <html>, canonical, hreflang alternates, og:locale
const i18nHead = useLocaleHead()

useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs?.lang, dir: i18nHead.value.htmlAttrs?.dir },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || []), { name: 'theme-color', content: THEME_COLORS[theme.value] }],
  titleTemplate: `%s · ${l(site.name)}`,
  script: [
    // Organization structured data for search engines
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: site.name.en,
        alternateName: site.name.ar,
        url: site.url,
        logo: `${site.url}/icon.png`,
        email: site.email,
        telephone: site.phone,
        address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
        sameAs: Object.values(site.socials),
      }),
    },
  ],
}))
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
