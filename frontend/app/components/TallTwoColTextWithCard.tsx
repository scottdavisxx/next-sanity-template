import Image from '@/app/components/SanityImage'
import Cta from './ui/Cta'
import OrlsIcon from './icons/orls-icon'
import { PortableText, type PortableTextBlock } from 'next-sanity'
import type { TallTwoColTextWithCard as TallTwoColTextWithCardType } from '@/sanity.types'

type TallTwoColTextWithCardProps = {
  block?: TallTwoColTextWithCardType
  index?: number
  pageId?: string
  pageType?: string
}

export default function TallTwoColTextWithCard({ block }: TallTwoColTextWithCardProps) {
  if (!block) return null

  const ctaCardImage = block.ctaCardImage
  const cardImageRef = (ctaCardImage?.image as { asset?: { _ref?: string } } | undefined)?.asset?._ref
  const cardAltText = ctaCardImage?.altText || ''

  return (
    <div className="py-4 lg:py-16">
      <div className="container flex flex-col gap-6 relative">
        {/* Top section */}
        {block.title && (
          <h2 className="text-5xl font-bold md:text-6xl lg:text-7xl">{block.title}</h2>
        )}
        {block.subtitle && (
          <p className="text-2xl lg:w-9/12">{block.subtitle}</p>
        )}

        {/* Content columns */}
        <div className="flex flex-col gap-5 lg:flex-row lg:w-8/12 lg:gap-16">
          <div className="flex flex-col gap-4">
            {block.leftColumnTitle && (
              <h3 className="text-3xl font-bold text-medium-blue">{block.leftColumnTitle}</h3>
            )}
            {block.leftColumnSubtitle && (
              <p className="text-lg">{block.leftColumnSubtitle}</p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {block.rightColumnTitle && (
              <h3 className="text-3xl font-bold text-medium-blue">{block.rightColumnTitle}</h3>
            )}
            {block.rightColumnSubtitle && (
              <p className="text-lg">{block.rightColumnSubtitle}</p>
            )}
          </div>
        </div>

        {/* CTA card */}
        <div className="flex flex-col items-start border rounded-2xl overflow-hidden px-4 py-6 lg:px-12 lg:py-16">
          <div className="flex flex-col gap-4 relative lg:w-8/12">
            <OrlsIcon
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
              color="whisper-blue"
              width={319}
              height={319}
            />
            {block.ctaCardTitle && (
              <h2 className="text-4xl font-bold lg:text-6xl">{block.ctaCardTitle}</h2>
            )}
            {Array.isArray(block.ctaCardBlurb) ? (
              <div className="text-lg text-balance prose max-w-none">
                <PortableText value={block.ctaCardBlurb as PortableTextBlock[]} />
              </div>
            ) : (
              block.ctaCardBlurb && (
                <p className="text-lg text-balance">{String(block.ctaCardBlurb)}</p>
              )
            )}
            {block.ctaCardCtas && block.ctaCardCtas.length > 0 && (
              <div className="flex flex-col gap-4 lg:flex-row">
                {block.ctaCardCtas.map((cta) => (
                  <Cta
                    key={cta._key}
                    href={cta.href}
                    buttonText={cta.buttonText}
                    buttonColor={cta.buttonColor}
                    font="small"
                    newTab={cta.newTab}
                    className="w-full justify-center"
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Image card (positioned bottom-right on large screens) */}
        {cardImageRef && (
          <div className="hidden absolute -bottom-6 right-0 h-fit w-fit border rounded-2xl p-4 bg-white z-10 lg:block">
            <Image
              id={cardImageRef}
              alt={cardAltText}
              width={333}
              height={633}
            />
          </div>
        )}
      </div>
    </div>
  )
}
