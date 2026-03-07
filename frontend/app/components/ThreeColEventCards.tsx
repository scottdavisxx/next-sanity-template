'use client'

import { useRef, useCallback, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import Image from '@/app/components/SanityImage'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type ThreeColEventCardsProps = {
  block: ExtractPageBuilderType<'threeColEventCards'>
  index: number
  pageId: string
  pageType: string
}

function SliderCard({
  title,
  imageAndAltText,
  imageSrc,
  subtitle,
  body,
  cta,
}: {
  title?: string
  imageAndAltText?: { image?: { asset?: { _ref: string } }; altText?: string }
  imageSrc?: string
  subtitle?: string
  body?: string
  cta?: { label?: string; href?: string }
}) {
  const image = imageAndAltText?.image
  const hasSanityImage = image?.asset?._ref
  return (
    <div className="relative overflow-hidden rounded-xl" style={{ height: '274px' }}>
      <div className="absolute inset-0 border-2 border-dark-blue rounded-xl overflow-hidden">
        {hasSanityImage && (
          <Image
            id={image!.asset!._ref}
            alt={imageAndAltText?.altText || title || ''}
            width={400}
            height={274}
            mode="cover"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {!hasSanityImage && imageSrc && (
          <img
            src={imageSrc}
            alt={imageAndAltText?.altText || title || ''}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      <div className="absolute right-0 top-0 h-full w-[47%] bg-white border-2 border-dark-blue rounded-xl z-10 flex flex-col overflow-hidden px-6 pt-15 pb-7.5">
        <div>
          <p className="font-bold text-lg lg:text-2xl text-black leading-tight">{title}</p>
          {subtitle && (
            <p className="text-medium-blue text-sm font-medium mt-1">{subtitle}</p>
          )}
          {body && (
            <p className="text-sm text-gray mt-2 leading-snug">{body}</p>
          )}
        </div>
        {cta && (
          <div className="mt-auto">
            <a
              href={cta.href}
              className="block w-full bg-dark-blue text-white text-sm font-medium rounded py-2 text-center"
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

const PrevNextButton = ({
  direction,
  onClick,
  disabled,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
  disabled: boolean
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === 'prev' ? 'Previous' : 'Next'}
    disabled={disabled}
    className="shrink-0 w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center transition-opacity disabled:opacity-40 hover:opacity-80"
  >
    {direction === 'prev' ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18l6-6-6-6" />
      </svg>
    )}
  </button>
)

export default function ThreeColEventCards({ block }: ThreeColEventCardsProps) {
  const heading = block?.heading
  const bgTexture = block?.bgTexture ?? false
  const cards = block?.cards ?? []
  const swiperRef = useRef<SwiperType | null>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const prev = useCallback(() => swiperRef.current?.slidePrev(), [])
  const next = useCallback(() => swiperRef.current?.slideNext(), [])

  const updateNav = useCallback((swiper: SwiperType) => {
    setCanPrev(!swiper.isBeginning)
    setCanNext(!swiper.isEnd)
  }, [])

  const showNav = cards.length > 1

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-14 lg:py-9">
      {bgTexture && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <img
            alt=""
            aria-hidden="true"
            src="/beyond-classroom/section-bg.png"
            className="absolute h-full max-w-none top-0 object-cover"
            style={{ left: '-4.83%', width: '109.8%' }}
          />
        </div>
      )}

      <div className="container">
        {heading && (
          <h2 className="relative font-bold text-4xl md:text-5xl lg:text-7xl text-black text-center mb-10 lg:mb-9 px-6 md:px-16 lg:px-19">
            {heading}
          </h2>
        )}

        {/* Carousel: nav buttons outside the Swiper container on all breakpoints */}
        <div className="relative flex items-center gap-3 md:gap-4">
          {showNav && (
            <PrevNextButton direction="prev" onClick={prev} disabled={!canPrev} />
          )}

          <div className="min-w-0 flex-1 overflow-hidden">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
                updateNav(swiper)
              }}
              onSlideChange={updateNav}
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              className="!overflow-hidden"
            >
              {cards.map((card, i) => (
                <SwiperSlide key={i}>
                  <SliderCard
                    title={card.title}
                    imageAndAltText={card.imageAndAltText}
                    imageSrc={'imageSrc' in card ? card.imageSrc : undefined}
                    subtitle={card.subtitle}
                    body={card.body}
                    cta={card.cta}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {showNav && (
            <PrevNextButton direction="next" onClick={next} disabled={!canNext} />
          )}
        </div>
      </div>
    </section>
  )
}
