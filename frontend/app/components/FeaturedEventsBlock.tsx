'use client'

import FeaturedEvents, { FeaturedEvent } from '@/app/components/FeaturedEvents'
import type { PageBuilderSection } from '@/sanity/lib/types'

type BlockProps = {
  index: number
  block: PageBuilderSection
  pageId: string
  pageType: string
}

export default function FeaturedEventsBlock({ block }: BlockProps) {
  const events = (block as { events?: FeaturedEvent[] }).events || []
  return <FeaturedEvents events={events} />
}

