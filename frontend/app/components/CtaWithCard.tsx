import Image from '@/app/components/SanityImage'
import Cta from './ui/Cta'
import OrlsIcon from './icons/orls-icon'
import { PortableText, type PortableTextBlock } from 'next-sanity'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type CtaWithCardProps = {
  block: ExtractPageBuilderType<'ctaWithCard'>
  index: number
  pageId: string
  pageType: string
}

export default function CtaWithCard({ block }: CtaWithCardProps) {
  const title = block?.title
  const blurb = block?.blurb
  const cta = block?.cta
  const image = block?.imageAndAltText?.image
  const altText = block?.imageAndAltText?.altText || ''
  const bgImage = block?.bgImage
  const icon = block?.icon
  const hasSanityImage = (image as { asset?: { _ref?: string } } | undefined)?.asset?._ref
  const hasBgImage = (bgImage as { asset?: { _ref?: string } } | undefined)?.asset?._ref
  return (
    <div className="bg-white py-4
    md:py-16">
      <div className="container flex items-center justify-center py-8 px-2 relative">
        {hasSanityImage && (
          <div className="border-2 border-dark-blue rounded-4xl absolute left-0 bg-white z-10 hidden md:block">
            <Image id={(image as { asset: { _ref: string } }).asset._ref} alt={altText} width={415} height={537} className="p-6 relative z-10" />
          </div>
        )}
        {/* Content */}
        <div className=" border-2 border-dark-blue rounded-4xl w-full relative overflow-hidden
      md:my-12">
          {hasBgImage && (
            <Image id={(bgImage as { asset: { _ref: string } }).asset._ref} alt="" width={1920} height={1080} mode="cover" className="absolute top-0 left-0 w-full h-full object-cover rounded-4xl opacity-10" />
          )}
          {/* Icon */}
          {icon && (
            <div className="absolute top-1/2 -translate-y-1/2 right-4
          md:right-12">
              <OrlsIcon color="whisper-blue" width={419} height={419} />
            </div>
          )}
          <div className="flex flex-col gap-4 py-8 relative z-10 px-4 items-center
        md:pl-120 md:pr-20 md:py-8 md:items-start">
            <h2 className="text-4xl font-bold text-dark-blue leading-tight
          md:text-7xl">{title}</h2>
            {Array.isArray(blurb) ? (
              <div className="text-lg prose max-w-none">
                <PortableText value={blurb as PortableTextBlock[]} />
              </div>
            ) : (
              <p className="text-lg whitespace-pre-line">{blurb}</p>
            )}
            {cta?.href && cta?.buttonText && (
              <Cta className="md:mb-6 md:mt-4" href={cta.href} buttonText={cta.buttonText} newTab={cta.newTab} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}