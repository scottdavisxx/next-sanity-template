import Image from '@/app/components/SanityImage'
import { PortableText } from 'next-sanity'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type TwoColInfoWithImageProps = {
  block: ExtractPageBuilderType<'twoColInfoWithImage'>
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

  return (
    <section className="bg-white px-6 py-12 md:px-16 md:py-14 lg:px-[83px] lg:py-[43px]">
      <div className="max-w-7xl mx-auto">

        {title && (
          <h2 className="font-bold text-4xl md:text-6xl lg:text-[70px] text-black leading-tight lg:max-w-[57%]">
            {title}
          </h2>
        )}

        {Array.isArray(blurb) ? (
          <div className="text-sm md:text-base lg:text-[20px] text-black leading-relaxed prose max-w-none mt-4 lg:mt-6 lg:max-w-[57%]">
            <PortableText value={blurb} />
          </div>
        ) : blurb ? (
          <p className="text-sm md:text-base lg:text-[20px] text-black leading-relaxed mt-4 lg:mt-6 lg:max-w-[57%]">{blurb}</p>
        ) : null}

        {hasImage && (
          <div className="lg:hidden mt-6 rounded-[26px] border-2 border-black overflow-hidden">
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
            <div className="border-2 border-black rounded-[12px] p-6 lg:p-8">
              <div className={hasImage ? 'lg:pr-[43%]' : ''}>
                <h3 className="font-bold text-3xl md:text-4xl lg:text-[48px] text-dark-blue leading-tight">
                  {card.cardTitle}
                </h3>
                {card.cardSubtitle && (
                  <p className="font-medium italic text-xl md:text-2xl lg:text-[32px] text-black mt-3">
                    {card.cardSubtitle}
                  </p>
                )}
                {Array.isArray(card.bio) && card.bio.length > 0 && (
                  <div className="mt-4 space-y-4 text-sm md:text-base lg:text-[18px] text-black leading-relaxed prose max-w-none">
                    <PortableText value={card.bio} />
                  </div>
                )}
              </div>
            </div>
          )}

          {hasImage && (
            <div
              className="hidden lg:block absolute bottom-0 right-0 w-[40%] rounded-[26px] bg-white"
              style={{ aspectRatio: '443 / 527' }}
            >
              <div className="absolute bottom-0 left-0 right-0 z-0 h-5/6 rounded-[26px] border-2 border-black" />
              <div className="absolute -top-14 -right-14 w-[66%] aspect-square z-10 pointer-events-none">
                <img
                  src="/staff/orls-L-circle.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute inset-0 z-20 rounded-[26px] border-2 border-transparent overflow-hidden">
                <div className="relative w-full h-full">
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
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
