import OrlsIcon from './icons/orls-icon'
import type { PageBuilderSection } from '@/sanity/lib/types'
import { PortableText, type PortableTextBlock } from 'next-sanity'

type TextWithLogoProps = {
  block: Extract<PageBuilderSection, { _type: 'textWithLogo' }>
  index: number
  pageId: string
  pageType: string
}

export default function TextWithLogo({ block }: TextWithLogoProps) {
  const title = block?.title
  const blurb = block?.blurb

  return (
    <div className="container">
      <div className="flex flex-col gap-4 text-black py-6 relative
      md:overflow-visible md:py-16 md:px-0">
        <h2 className="text-4xl font-bold md:text-6xl md:leading-20 md:w-3/5">{title}</h2>
        <div className="md:w-3/5 prose prose-lg max-w-none">
          {Array.isArray(blurb) ? <PortableText value={blurb as PortableTextBlock[]} /> : blurb && <p>{blurb}</p>}
        </div>
        <div className="absolute -right-48 -top-1/5 -z-10">
          <OrlsIcon width={513} height={513} color="light-blue" />
        </div>
      </div>
    </div>
  )
}