import { site } from '~/data/site'

interface PageSeo {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  image?: string
  type?: 'website' | 'article'
}

/**
 * Title, description, Open Graph and Twitter tags for a page.
 * Canonical, og:url, og:locale and hreflang alternates come from `useLocaleHead` in app.vue.
 */
export function usePageSeo({ title, description, image = '/logo.png', type = 'website' }: PageSeo) {
  const l = useL()
  const ogImage = image.startsWith('http') ? image : `${site.url}${image}`
  const fullTitle = () => `${toValue(title)} · ${site.shortName}`

  useSeoMeta({
    title,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogType: type,
    ogSiteName: () => l(site.name),
    ogImage,
    ogImageAlt: () => l(site.name),
    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterImage: ogImage,
  })
}
