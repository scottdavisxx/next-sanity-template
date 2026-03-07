import Image from '@/app/components/SanityImage'
import NextImage from 'next/image'
import { PortableText, type PortableTextBlock } from 'next-sanity'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type TwoColInfoWithCardProps = {
  block: ExtractPageBuilderType<'twoColInfoWithCard'>
  index: number
  pageId: string
  pageType: string
}

export default function TwoColInfoWithCard({ block }: TwoColInfoWithCardProps) {
  const bg = (block?.bg === 'dark-blue' ? 'dark-blue' : 'white') as 'white' | 'dark-blue'
  const photoSide = (block?.photoSide === 'left' ? 'left' : 'right') as 'left' | 'right'
  const heading = block?.heading ?? ''
  const subtitle = block?.subtitle
  const bio = block?.bio
  const image = block?.imageAndAltText?.image
  const altText = block?.imageAndAltText?.altText || ''
  const hasSanityImage = image?.asset?._ref
  const isDark = bg === 'dark-blue'
  const photoOnRight = photoSide === 'right'
  const borderColor = isDark ? 'border-white' : 'border-black'

  return (
    <section className={`${isDark ? 'bg-dark-blue' : 'bg-white'} px-6 py-12 md:px-16 md:py-14 lg:px-[85px] lg:py-[57px]`}>
      <div className="container">

        <h2 className={`font-bold text-3xl md:text-5xl lg:text-[64px] leading-tight ${isDark ? 'text-white' : 'text-dark-blue'} ${photoOnRight ? 'lg:max-w-[57%]' : 'lg:ml-[43%]'}`}>
          {heading}
        </h2>

        {subtitle && (
          <p className={`font-medium italic text-xl md:text-2xl lg:text-[32px] mt-2 lg:mt-3 ${isDark ? 'text-white' : 'text-black'} ${photoOnRight ? 'lg:max-w-[57%]' : 'lg:ml-[43%]'}`}>
            {subtitle}
          </p>
        )}

        {/* Mobile photo */}
        {hasSanityImage && (
          <div className={`lg:hidden mt-6 rounded-[26px] border-2 ${borderColor} overflow-hidden`}>
            <div className="relative w-full" style={{ aspectRatio: '443 / 571' }}>
              <Image id={image!.asset!._ref} alt={altText} width={443} height={571} mode="cover" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        )}

        {/* Row: full-width bio card + absolutely positioned photo card */}
        {/* pb-10 (40px) extends row below bio card bottom — photo card bottom anchors here */}
        <div className="relative mt-6 lg:mt-8 lg:pb-10">

          {/* Bio card */}
          <div className={`border-2 ${borderColor} rounded-[12px] p-6 lg:p-8`}>
            <div className={photoOnRight ? 'lg:pr-[43%]' : 'lg:pl-[43%]'}>
              {Array.isArray(bio) && bio.length > 0 ? (
                <div className={`text-sm md:text-base lg:text-[20px] leading-relaxed prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
                  <PortableText value={bio as PortableTextBlock[]} />
                </div>
              ) : null}
            </div>
          </div>

          {/* Photo card — desktop only, absolutely positioned */}
          {/* aspect-ratio drives height; bottom-0 anchors photo bottom 40px below bio card bottom */}
          <div
            className={`hidden lg:block absolute bottom-0 w-[40%] rounded-[26px] ${photoOnRight ? 'right-0' : 'left-0'} ${isDark ? 'bg-dark-blue' : 'bg-white'}`}
            style={{ aspectRatio: '443 / 571' }}
          >
            {/* Circular border */}
            <div className={`absolute bottom-0 left-0 right-0 z-0 h-5/6 rounded-[26px] border-2 ${borderColor}`}></div>
            {/* Decorative circle — overflows above, positioned on same side as photo */}
            <div className={`absolute -top-14 w-[66%] aspect-square z-10 pointer-events-none ${photoOnRight ? '-right-14' : '-left-14'}`}>
              <div className="relative w-full h-full">
                <NextImage
                  src="/staff/orls-L-circle.svg"
                  alt=""
                  aria-hidden
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Photo */}
            {hasSanityImage && (
              <div className="absolute inset-0 z-20 rounded-[26px] overflow-hidden">
                <div className="relative w-full h-full">
                  <Image id={image!.asset!._ref} alt={altText} width={443} height={571} mode="cover" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
