import type { Metadata } from 'next'
import Head from 'next/head'
import PageBuilderPage from '@/app/components/PageBuilder'
import { sanityFetch } from '@/sanity/lib/live'
import { getPageQuery, pagesSlugs } from '@/sanity/lib/queries'
import { GetPageQueryResult } from '@/sanity.types'
import { PageOnboarding } from '@/app/components/Onboarding'
import { resolveOpenGraphImage } from '@/sanity/lib/utils'

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: pagesSlugs,
    perspective: 'published',
    stega: false,
  })
  return data
}

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: getPageQuery,
    params: { slug: 'homepage' },
    // Metadata should never contain stega
    stega: false,
  })

  const ogImage = resolveOpenGraphImage(page?.ogImage)

  return {
    title: page?.metaTitle || page?.name,
    description: page?.metaDescription || undefined,
    robots: page?.robots || 'index, follow',
    openGraph: {
      title: page?.metaTitle || page?.name,
      description: page?.ogDescription || page?.metaDescription || undefined,
      images: ogImage ? [ogImage] : undefined,
    },
  } satisfies Metadata
}

export default async function Page() {
  // Always fetch the demo page
  const [{ data: page }] = await Promise.all([
    sanityFetch({
      query: getPageQuery,
      params: { slug: 'homepage' }
    })
  ])

  if (!page?._id) {
    return (
      <div className="py-40 bg-dark-blue">
        <PageOnboarding />
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>{page.heading}</title>
      </Head>
      <PageBuilderPage page={page as GetPageQueryResult} />
    </div>
  )
}