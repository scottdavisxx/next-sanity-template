import Image from '@/app/components/SanityImage'
import OrlsIcon from '@/app/components/icons/orls-icon'
import { PortableText } from 'next-sanity'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type OneColInfoProps = {
  block: ExtractPageBuilderType<'oneColInfo'>
  index: number
  pageId: string
  pageType: string
}

export default function OneColInfo({ block }: OneColInfoProps) {
  const variant = (block?.variant === 'image' ? 'image' : 'text') as 'text' | 'image'
  const title = block?.title

  return (
    <section className="w-full bg-white py-10 md:py-14 lg:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
          {/* Title row */}
          <div className="flex items-center justify-center gap-3">
            {/* Mobile icon */}
            <span className="block lg:hidden">
              <OrlsIcon color="dark-blue" width={40} height={40} />
            </span>
            {/* Desktop icon */}
            <span className="hidden lg:block">
              <OrlsIcon color="dark-blue" width={56} height={56} />
            </span>
            <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-dark-blue leading-tight">
              {title}
            </h2>
          </div>

          {variant === 'text' && block?.bodyContent && (
            <div className="flex flex-col items-center gap-4 w-full max-w-3xl prose max-w-none">
              <PortableText value={block.bodyContent} />
            </div>
          )}

          {variant === 'image' && block?.imageAndAltText?.image?.asset?._ref && (
            <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
              <div className="max-w-sm mx-auto w-full">
                <Image
                  id={block.imageAndAltText.image.asset._ref}
                  alt={block.imageAndAltText.altText || ''}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              {block.imageBlurb && (
                <p className="font-bold text-lg md:text-2xl">{block.imageBlurb}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
