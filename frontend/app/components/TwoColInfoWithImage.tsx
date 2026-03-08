import Image from '@/app/components/SanityImage'
import NextImage from 'next/image'
import { PortableText, type PortableTextBlock } from 'next-sanity'
import type { TwoColInfoWithImage } from '@/sanity.types'

type TwoColInfoWithImageProps = {
  block: TwoColInfoWithImage
  index: number
  pageId: string
  pageType: string
}

export default function TwoColInfoWithImage({ block }: TwoColInfoWithImageProps) {
  const title = block?.title
  const blurb = block?.blurb
  const image = block?.imageAndAltText?.image
  const altText = block?.imageAndAltText?.altText || ''
  const card = block?.card
  const hasImage = !!image?.asset?._ref
  const isDark = block?.bgColor === 'dark-blue'

  return (
    <section className={`px-6 py-12 md:px-16 md:py-14 lg:px-[83px] lg:py-[43px] ${isDark ? 'bg-dark-blue' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className={`font-bold text-4xl md:text-6xl lg:text-[70px] leading-tight lg:max-w-[57%] ${isDark ? 'text-white' : 'text-black'}`}>
            {title}
          </h2>
        )}
        {Array.isArray(blurb) ? (
          <div className={`text-sm md:text-base lg:text-[20px] leading-relaxed prose max-w-none mt-4 lg:mt-6 lg:max-w-[57%] ${isDark ? 'text-white prose-invert' : 'text-black'}`}>
            <PortableText value={blurb as PortableTextBlock[]} />
          </div>
        ) : blurb ? (
          <p className={`text-sm md:text-base lg:text-[20px] leading-relaxed mt-4 lg:mt-6 lg:max-w-[57%] ${isDark ? 'text-white' : 'text-black'}`}>{blurb}</p>
        ) : null}
        {hasImage && (
          <div className={`lg:hidden mt-6 rounded-[26px] overflow-hidden ${block?.variant === 'with-borders' ? `border-2 ${isDark ? 'border-white' : 'border-black'}` : 'border-none'}`}>
            <div className="relative w-full" style={{ aspectRatio: '443 / 527' }}>
              <Image
                id={image!.asset!._ref}
                alt={altText}
                width={443}
                height={527}
                mode="cover"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        )}
        <div className="relative mt-6 lg:mt-8 lg:pb-10">
          {card && (
            <div className={`rounded-2xl lg:py-8 ${block?.variant === 'with-borders' ? `border-2 ${isDark ? 'border-white' : 'border-black'}` : ''}`}>
              <div className={hasImage ? 'lg:pr-[43%]' : ''}>
                <h3 className={`font-bold text-3xl md:text-4xl lg:text-[48px] leading-tight ${isDark ? 'text-white' : 'text-dark-blue'}`}>
                  {card.cardTitle}
                </h3>
                {card.cardSubtitle && (
                  <p className={`font-medium italic text-xl md:text-2xl lg:text-[32px] mt-3 ${isDark ? 'text-white' : 'text-black'}`}>
                    {card.cardSubtitle}
                  </p>
                )}
                {Array.isArray(card.bio) && card.bio.length > 0 && (
                  <div className={`mt-4 space-y-4 text-sm md:text-base lg:text-[18px] leading-relaxed prose max-w-none ${isDark ? 'text-white prose-invert' : 'text-black'}`}>
                    <PortableText value={card.bio as PortableTextBlock[]} />
                  </div>
                )}
              </div>
            </div>
          )}

          {hasImage && (
            <div
              className={"hidden lg:block absolute bottom-0 right-0 w-[40%] rounded-[26px]"}
              style={{ aspectRatio: '443 / 527' }}
            >
              <div className={`absolute bottom-0 left-0 right-0 z-0 h-5/6 rounded-[26px] ${block?.variant === 'with-borders' ? `border-2 ${isDark ? 'border-white' : 'border-black'}` : ''}`} />
              <div className={`absolute  aspect-square z-10 pointer-events-none 
                ${block?.variant !== 'with-borders' ? 'top-14 right-0 w-[58%]' : '-top-14 -right-14 w-[66%]'}`}>
                <div className={`relative w-full h-full`}>
                  <NextImage
                    src="/staff/orls-L-circle.svg"
                    alt=""
                    aria-hidden
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className={`absolute inset-0 z-20 rounded-[26px] overflow-hidden ${block?.variant === 'with-borders' ? `border-2 ${isDark ? 'border-white' : 'border-black'}` : ''}`}>
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <Image
                    id={image!.asset!._ref}
                    alt={altText}
                    mode="cover"
                    className={`${block?.variant !== 'with-borders' ? 'h-9/12 w-auto' : 'h-full object-cover object-top w-full '}`}
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
