import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { type PortableTextBlock } from 'next-sanity'
import { Suspense } from 'react'

import Avatar from '@/app/components/tbd/Avatar'
// import { MoreEvents } from '@/app/components/Events'
import PortableText from '@/app/components/PortableText'
import Image from '@/app/components/SanityImage'
import { sanityFetch } from '@/sanity/lib/live'
import { eventPagesSlugs, eventQuery } from '@/sanity/lib/queries'
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
    query: eventPagesSlugs,
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
  const { data: event } = await sanityFetch({
    query: eventQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  })
  const previousImages = (await parent).openGraph?.images || []
  const ogImage = resolveOpenGraphImage(event?.coverImage)

  return {
    title: event?.title,
    description: event?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata
}

export default async function EventPage(props: Props) {
  const params = await props.params
  const [{ data: event }] = await Promise.all([sanityFetch({ query: eventQuery, params })])

  if (!event?._id) {
    return notFound()
  }

  return (
    <>
      <div className="flex flex-col relative z-0 justify-end h-[650px]">
        <div className="absolute h-full w-full bg-black/30"></div>
        {event?.coverImage && (
          <Image
            id={event.coverImage.asset?._ref || ''}
            alt={event.coverImage.alt || ''}
            className="absolute w-full h-full object-cover object-center top-0 -z-10"
            width={1024}
            height={538}
            mode="cover"
            hotspot={event.coverImage.hotspot}
            crop={event.coverImage.crop}
          />
        )}
        <div className="container mb-24 flex flex-col gap-4 z-10">
          <h1 className="text-4xl text-white 4xl md:text-7xl">{event.title}</h1>
          <p className="text-white text-2xl">{event.dateText}</p>
          <p className="text-white text-2xl">{event.time}</p>
          <p className="text-white text-2xl">{event.place}</p>
        </div>


      </div>
      <div className="container py-2 px-4
      md:py-12">
        <PortableText className="w-full max-w-none text-xl" value={event.description as PortableTextBlock[]} />
      </div>
    </>
  )
}
