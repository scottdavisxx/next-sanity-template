'use client'

import { useRef, useCallback, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import Image from '@/app/components/SanityImage'
import Link from 'next/link'
import NextImage from 'next/image'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

import 'swiper/css'

type ThreeColEventCardsProps = {
  block: ExtractPageBuilderType<'threeColEventCards'>
  index: number
  pageId: string
  pageType: string
}

function SliderCard({
  title,
  imageAndAltText,
  subtitle,
  body,
  cta,
}: {
  title?: string
  imageAndAltText?: { image?: { asset?: { _ref: string } }; altText?: string }
  subtitle?: string
  body?: string
  cta?: { label?: string; href?: string }
}) {
  const image = imageAndAltText?.image
  const hasSanityImage = image?.asset?._ref

  return (
    <div className="relative overflow-hidden rounded-xl h-48 md:h-64 lg:h-72">
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
      </div>

      <div className="absolute right-0 top-0 h-full w-1/2 bg-white border-2 border-dark-blue rounded-xl z-10 flex flex-col overflow-hidden px-3 py-6">
        <div className="my-auto">
          <p className="font-bold text-lg lg:text-2xl text-black">{title}</p>
          {subtitle && (
            <p className="text-medium-blue text-sm font-medium mt-1">{subtitle}</p>
          )}
          {body && (
            <p className="text-sm text-gray mt-2 leading-snug">{body}</p>
          )}
        </div>
        {cta && cta.href && (
          <div className="mt-auto">
            <Link
              href={cta.href}
              className="block w-full bg-dark-blue text-white text-sm font-medium rounded py-2 text-center"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

const SliderButton = ({
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
    className="shrink-0 size-9 flex items-center justify-center cursor-pointer transition-opacity disabled:opacity-40"
  >
    <span className="relative block size-full">
      <NextImage
        src="/houses/arrow-right.svg"
        alt=""
        aria-hidden
        fill
        className={`object-contain ${direction === 'prev' ? 'rotate-180' : ''}`}
      />
    </span>
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
    <div className="relative overflow-hidden bg-white py-12 md:py-14 lg:py-9">
      {bgTexture && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="relative size-full">
            <NextImage
            alt="background texture"
            aria-hidden
            src="/beyond-classroom/section-bg.png"
            fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="container">
        {heading && (
          <h2 className="text-4xl md:text-5xl lg:text-7xl text-center font-bold mb-8 md:mb-10 lg:mb-12">
            {heading}
          </h2>
        )}

        <div className="relative flex items-center gap-3 md:gap-4">
          {showNav && (
            <SliderButton direction="prev" onClick={prev} disabled={!canPrev} />
          )}

          <div className="flex-1 overflow-hidden">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
                updateNav(swiper)
              }}
              onSlideChange={updateNav}
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1280: {
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
                    subtitle={card.subtitle}
                    body={card.body}
                    cta={card.cta}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {showNav && (
            <SliderButton direction="next" onClick={next} disabled={!canNext} />
          )}
        </div>
      </div>
    </div>
  )
}
