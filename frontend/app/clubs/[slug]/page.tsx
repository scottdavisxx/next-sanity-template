import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { type PortableTextBlock } from 'next-sanity'

import PortableText from '@/app/components/PortableText'
import Image from '@/app/components/SanityImage'
import { sanityFetch } from '@/sanity/lib/live'
import { clubPagesSlugs, clubQuery } from '@/sanity/lib/queries'
import { resolveOpenGraphImage } from '@/sanity/lib/utils'

type Props = {
  params: Promise<{ slug: string }>
}

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: clubPagesSlugs,
    // Use the published perspective in generateStaticParams
    perspective: 'published',
    stega: false,
  })
  return data
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params
  const { data: club } = await sanityFetch({
    query: clubQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  })
  const previousImages = (await parent).openGraph?.images || []
  const ogImage = resolveOpenGraphImage(club?.ogImage)

  return {
    title: club?.metaTitle || club?.name,
    description: club?.metaDescription,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
      description: club?.ogDescription,
    },
    robots: club?.robots,
  } satisfies Metadata
}

export default async function ClubPage(props: Props) {
  const params = await props.params
  const [{ data: club }] = await Promise.all([sanityFetch({ query: clubQuery, params })])

  if (!club?._id) {
    return notFound()
  }

  return (
    <>
      <div className="flex flex-col relative z-0 justify-end h-[650px]">
        <div className="absolute h-full w-full bg-black/30"></div>
        {club?.bannerImage && (
          <Image
            id={club.bannerImage.asset?._ref || ''}
            alt={club.bannerImage.alt || ''}
            className="absolute w-full h-full object-cover object-center top-0 -z-10"
            width={1024}
            height={538}
            mode="cover"
            hotspot={club.bannerImage.hotspot}
            crop={club.bannerImage.crop}
          />
        )}
        <div className="container mb-24 flex flex-col gap-4 z-10">
          {club.eyebrow && <p className="text-white text-xl uppercase tracking-wide">{club.eyebrow}</p>}
          <h1 className="text-4xl text-white 4xl md:text-7xl">{club.name}</h1>
          {club.desc && <p className="text-white text-2xl">{club.desc}</p>}
        </div>
      </div>

      <div className="container py-2 px-4 md:py-12">
        {club.blurb && (
          <PortableText className="w-full max-w-none text-xl" value={club.blurb as PortableTextBlock[]} />
        )}

        {(club.clubType || club.enrichmentType) && (
          <div className="mt-8 flex flex-col gap-4">
            {club.clubType && club.clubType.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-2">Club Type</h2>
                <div className="flex flex-wrap gap-2">
                  {club.clubType.map((type: any) => (
                    <span key={type._id} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                      {type.prefLabel}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {club.enrichmentType && club.enrichmentType.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-2">Enrichment Type</h2>
                <div className="flex flex-wrap gap-2">
                  {club.enrichmentType.map((type: any) => (
                    <span key={type._id} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                      {type.prefLabel}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}
