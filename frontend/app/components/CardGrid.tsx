'use client'

import { useState } from 'react'
import Image from '@/app/components/SanityImage'
import Cta from './ui/Cta'
import type { CardGrid } from '@/sanity.types'

type CardGridProps = {
  block: CardGrid
  index: number
  pageId: string
  pageType: string
}

export default function CardGrid({ block }: CardGridProps) {
  const heading = block?.heading ?? ''
  const subtitle = block?.subtitle ?? ''
  const cards = block?.cards ?? []
  const [activeIndex, setActiveIndex] = useState(0)
  const darkOverlay = block?.darkOverlay ?? false

  const prev = () => setActiveIndex((i) => (i - 1 + cards.length) % cards.length)
  const next = () => setActiveIndex((i) => (i + 1) % cards.length)

  return (
    <div className={`${block?.removePaddingTop ? 'pt-0' : 'pt-12 md:pt-16'} pb-12 md:pb-16`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* If there's only a heading it's centered */}
        {heading && !subtitle && (
          <h2 className="text-3xl md:text-7xl font-bold text-center mb-8 md:mb-12">
            {heading}
          </h2>
        )}
        {/* If there's a heading and a subtitle it's left aligned and flexed */}
        {heading && subtitle && (
          <div className='flex flex-col text-black
          md:flex-row md:items-end'>
            <h2 className="text-3xl md:text-7xl font-bold text-center mb-8 
            md:mb-12 md:text-left md:w-1/3 md:mr-12">
              {heading}
            </h2>
            <p className="text:xl md:text-3xl md:mb-12 w-7/12">
              {subtitle}
            </p>
          </div>
        )}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`relative overflow-visible rounded-3xl group min-h-[500px] w-full ${card.fullWidth ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
            >
              {card.imageAndAltText?.image?.asset?._ref && (
                <Image
                  id={card.imageAndAltText.image.asset._ref}
                  alt={card.imageAndAltText.altText || card.title || ''}
                  width={800}
                  height={600}
                  mode="cover"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10"
                />
              )}

              <div className={`absolute inset-0 transition-all duration-300 rounded-3xl z-20
                ${darkOverlay ? 'bg-black/30 group-hover:bg-black/64' : ''}`} />

              <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col p-8 text-white">
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-xl mb-6 leading-relaxed">
                  {card.description}
                </p>

                {card.cta?.href && (
                  <Cta
                    href={card.cta.href}
                    buttonText={card.cta.buttonText || 'Learn More'}
                    buttonColor="brand-white"
                    font="small"
                    newTab={card.cta.newTab}
                    className="md:text-base" />
                )}
              </div>

              <div className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-3xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="md:hidden relative">
          <div className="relative overflow-visible rounded-3xl min-h-[500px] w-full">
            {cards[activeIndex]?.imageAndAltText?.image?.asset?._ref && (
              <Image
                id={cards[activeIndex]?.imageAndAltText?.image?.asset?._ref ?? ''}
                alt={cards[activeIndex]?.imageAndAltText?.altText || cards[activeIndex]?.title || ''}
                width={800}
                height={600}
                mode="cover"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10"
              />
            )}

            <div className={`absolute inset-0 rounded-3xl z-20 ${darkOverlay ? 'bg-black/44' : ''}`} />

            <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">{cards[activeIndex]?.title}</h3>
              <p className="text-xl mb-6 leading-relaxed">
                {cards[activeIndex]?.description}
              </p>

              {cards[activeIndex]?.cta?.href && (
                <Cta
                  href={cards[activeIndex]?.cta?.href ?? ''}
                  buttonText={cards[activeIndex]?.cta?.buttonText || 'Learn More'}
                  buttonColor="brand-white"
                  font="small"
                  newTab={cards[activeIndex]?.cta?.newTab}
                />
              )}

              <div className="flex gap-3 mt-4">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="size-[44px] flex items-center justify-center bg-white rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="size-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="size-[44px] flex items-center justify-center bg-white rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="size-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Offset Border */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-full border-2 border-black rounded-3xl translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
