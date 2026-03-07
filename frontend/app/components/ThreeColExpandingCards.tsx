'use client'

import { useRef, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

interface Cta {
  label: string
  href: string
}

interface ExpandedCard {
  name?: string
  tagline?: string
  description?: string
  bgImage?: string
  icon?: string
  cta?: Cta
}

interface CollapsedCard {
  name?: string
  bgImage?: string | { asset?: { _ref: string } }
  icon?: string | { asset?: { _ref: string } }
  cta?: Cta
}

export interface CardItem {
  id: string
  expanded: ExpandedCard
  collapsed: CollapsedCard
}

import type { ExtractPageBuilderType } from '@/sanity/lib/types'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { getImageUrl } from '@/sanity/lib/utils'

type ThreeColExpandingCardsProps = {
  block: ExtractPageBuilderType<'threeColExpandingCards'>
  index: number
  pageId: string
  pageType: string
}

// group-hover classes work here because the outer card wrapper (in the parent) carries the `group` class.
function CollapsedCardInner({ card }: { card: CollapsedCard }) {
  const bgUrl = getImageUrl(card.bgImage as SanityImageSource | string | undefined)
  const iconUrl = getImageUrl(card.icon as SanityImageSource | string | undefined)
  const hasBg = !!bgUrl
  const textColor = hasBg ? 'text-white' : 'text-dark-blue'

  return (
    <div
      className={`absolute inset-0 rounded-2xl overflow-hidden isolate border-2 border-dark-blue ${!hasBg ? 'bg-white' : ''}`}
    >
      {hasBg && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bgUrl}
            alt={card.name ?? ''}
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <div className="absolute inset-0 bg-black/45 group-hover:bg-black/65 transition-all duration-300 z-20" />
        </>
      )}

      {iconUrl && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pb-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconUrl} alt="" className="w-[65%] max-h-[200px] object-contain" />
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 z-30 p-4">
        {card.name && (
          <p className={`font-bold text-sm lg:text-xl ${textColor}`}>{card.name}</p>
        )}
        {card.cta && (
          <a
            href={card.cta.href}
            className={`inline-block mt-2 px-4 py-1.5 rounded-md font-semibold text-sm ${hasBg ? 'bg-white text-dark-blue' : 'bg-dark-blue text-white'}`}
          >
            {card.cta.label}
          </a>
        )}
      </div>
    </div>
  )
}

export default function ThreeColExpandingCards({ block }: ThreeColExpandingCardsProps) {
  const heading = block?.heading ?? ''
  const subtitle = block?.subtitle
  const footnote = block?.footnote
  const arrowLabel = block?.arrowLabel
  const sectionBgImage = block?.sectionBgImage
  const items = block?.items ?? []
  const swiperRef = useRef<SwiperType | null>(null)

  const prev = useCallback(() => swiperRef.current?.slidePrev(), [])
  const next = useCallback(() => swiperRef.current?.slideNext(), [])

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-9">
      <div className="container">
        {sectionBgImage ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              aria-hidden="true"
              src={getImageUrl(sectionBgImage as SanityImageSource | string | undefined)}
              className="absolute h-full max-w-none top-0 object-cover"
              style={{ left: '-4.83%', width: '109.8%' }}
            />
          </div>
        ) : null}

        <h2 className="relative font-bold text-4xl md:text-5xl lg:text-7xl text-black">
          {heading}
        </h2>
        {subtitle && (
          <p className="relative text-base md:text-lg lg:text-2xl text-black mt-3">{subtitle}</p>
        )}

        <div className="three-col-expanding-swiper relative mt-8 h-[420px] md:h-[500px]">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            slidesPerView="auto"
            spaceBetween={16}
            centeredSlides={false}
            breakpoints={{
              768: {
                spaceBetween: 24,
              },
              1024: {
                spaceBetween: 32,
              },
            }}
            className="!overflow-visible h-full"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="!h-full">
                {({ isActive }) => {
                  if (isActive && item.expanded) {
                    const exp = item.expanded
                    const expBgUrl = getImageUrl(
                      exp?.bgImage as SanityImageSource | string | undefined
                    )
                    const expIconUrl = getImageUrl(
                      exp?.icon as SanityImageSource | string | undefined
                    )
                    const hasBg = !!expBgUrl
                    const hasIcon = !!expIconUrl
                    const hasText = !!(
                      exp?.name ||
                      exp?.tagline ||
                      exp?.description ||
                      exp?.cta
                    )
                    const textColor = hasBg ? 'text-white' : 'text-black'
                    const accentColor = hasBg ? 'text-white/80' : 'text-medium-blue'
                    const ctaStyle = hasBg ? 'bg-white text-dark-blue' : 'bg-dark-blue text-white'

                    return (
                      <div className="relative h-full w-full min-w-[280px] md:min-w-[360px] md:max-w-[520px] md:w-[55%] overflow-visible group isolate shrink-0">
                        <div
                          className={`absolute inset-0 rounded-2xl overflow-hidden isolate border-2 border-dark-blue ${!hasBg ? 'bg-white' : ''}`}
                        >
                          {hasBg && (
                            <>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={expBgUrl}
                                alt={exp?.name ?? ''}
                                className="absolute inset-0 w-full h-full object-cover z-10"
                              />
                              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/65 transition-all duration-300 z-20" />
                            </>
                          )}

                          {hasText && (
                            <div
                              className={`absolute inset-0 z-30 flex flex-col p-6 md:p-8 ${hasBg ? 'justify-end' : 'justify-start'}`}
                            >
                              <div className={hasIcon ? 'max-w-[55%]' : ''}>
                                {exp?.name && (
                                  <p
                                    className={`font-bold text-2xl md:text-xl lg:text-3xl ${textColor}`}
                                  >
                                    {exp.name}
                                  </p>
                                )}
                                {exp?.tagline && (
                                  <p
                                    className={`font-medium italic text-base lg:text-2xl mt-1 ${accentColor}`}
                                  >
                                    {exp.tagline}
                                  </p>
                                )}
                                {exp?.description && (
                                  <p
                                    className={`text-sm lg:text-2xl mt-4 leading-snug ${textColor}`}
                                  >
                                    {exp.description}
                                  </p>
                                )}
                                {exp?.cta?.href && (
                                  <a
                                    href={exp.cta.href}
                                    className={`inline-block mt-5 px-6 py-2.5 rounded-md font-semibold text-sm lg:text-base ${ctaStyle}`}
                                  >
                                    {exp.cta.label}
                                  </a>
                                )}
                              </div>
                            </div>
                          )}

                          {hasIcon && expIconUrl && (
                            <>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={expIconUrl}
                                alt={exp?.name ?? ''}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-[200px] lg:w-[240px] h-[280px] lg:h-[318px] object-contain z-40 hidden md:block"
                              />
                              {/* Mobile: icon below text */}
                              <div className="absolute inset-0 z-30 flex items-end justify-center pb-4 md:hidden">
                                {!hasBg && (
                                  <img
                                    src={expIconUrl}
                                    alt={exp?.name ?? ''}
                                    className="h-[150px] object-contain"
                                  />
                                )}
                              </div>
                            </>
                          )}
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full border-2 border-dark-blue rounded-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300 pointer-events-none -z-10" />
                      </div>
                    )
                  }

                  return (
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => swiperRef.current?.slideTo(index)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          swiperRef.current?.slideTo(index)
                        }
                      }}
                      className="relative h-full w-[160px] md:w-[200px] lg:w-[220px] shrink-0 overflow-visible group cursor-pointer isolate"
                    >
                      {item.collapsed && (
                        <CollapsedCardInner card={item.collapsed as CollapsedCard} />
                      )}
                      <div className="absolute top-0 left-0 w-full h-full border-2 border-dark-blue rounded-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300 pointer-events-none -z-10" />
                    </div>
                  )
                }}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative flex flex-col gap-1 mt-8">
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="size-9 flex items-center justify-center cursor-pointer"
            >
              <img src="/houses/arrow-right.svg" alt="" className="size-full rotate-180" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="size-9 flex items-center justify-center cursor-pointer"
            >
              <img src="/houses/arrow-right.svg" alt="" className="size-full" />
            </button>
          </div>
          {arrowLabel && (
            <p className="font-semibold text-medium-blue text-xs lg:text-sm">{arrowLabel}</p>
          )}
        </div>

        {footnote && (
          <p className="relative font-semibold italic text-dark-blue text-sm lg:text-2xl mt-6">
            {footnote}
          </p>
        )}
      </div>
    </section>
  )
}
