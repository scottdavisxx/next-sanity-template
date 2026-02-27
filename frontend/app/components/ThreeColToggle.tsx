'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Card {
  title: string
  description: string
  imageAndAltText: {
    image: {
      asset?: {
        _ref: string
      }
      crop?: {
        top: number
        bottom: number
        left: number
        right: number
      }
    }
    altText: string
  }
}

interface ThreeColToggleProps {
  block: {
    _key: string
    _type: string
    cards: Card[]
  }
}

export default function ThreeColToggle({ block }: ThreeColToggleProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const { cards } = block

  const prev = () => setActiveIndex((i) => (i - 1 + cards.length) % cards.length)
  const next = () => setActiveIndex((i) => (i + 1) % cards.length)

  return (
    <section className="relative px-6 py-12 md:px-16 md:py-16 lg:px-[86px] lg:py-[37px]">
      <div className=" relative max-w-[1400px] mx-auto max-[769px]:hidden min-[769px]:flex flex-row gap-4 lg:gap-6 items-stretch">
        {cards.map((card, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={index}
              style={{
                flex: isActive ? '7 7 0%' : '2.5 2.5 0%',
                transition: 'all 0.3s ease-in-out'
              }}
              className="relative"
            >
              {isActive && (
                <div
                  className="absolute border-2 shadow-lg rounded-[20px] top-[15px] left-[15px] right-[-15px] bottom-[-15px]"
                  style={{ borderColor: '#242D65' }}
                />
              )}

              <div
                className={`relative overflow-hidden bg-white rounded-[20px] flex flex-col justify-end min-h-[500px] ${
                  isActive
                    ? ' p-8 lg:p-10'
                    : 'border-0 p-6 lg:p-8 cursor-pointer group hover:scale-[1.02] transition-transform duration-300'
                }`}
                onClick={() => !isActive && setActiveIndex(index)}
              >
              {card.imageAndAltText.image?.asset?._ref && (
                <Image
                  src={`/${card.imageAndAltText.image.asset._ref}`}
                  alt={card.imageAndAltText.altText}
                  fill
                  className="object-cover"
                />
              )}
              <div className={`absolute inset-0 ${
                isActive
                  ? 'bg-black/20'
                  : 'bg-black/30 group-hover:bg-black/20 transition-colors'
              }`} />

              {isActive ? (
                <>
                  <div className="relative z-10 max-w-[60%]">
                    <h3 className="font-bold text-3xl lg:text-[48px] text-white leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-white text-base lg:text-[20px] mt-3 lg:mt-4 leading-snug">
                      {card.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 flex flex-row items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prev()
                      }}
                      aria-label="Previous"
                      className="size-[44px] lg:size-[52px] flex items-center justify-center bg-white rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                      <svg
                        className="size-6 text-[#242d65]"
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
                      onClick={(e) => {
                        e.stopPropagation()
                        next()
                      }}
                      aria-label="Next"
                      className="size-[44px] lg:size-[52px] flex items-center justify-center bg-white rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                      <svg
                        className="size-6 text-[#242d65]"
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
                </>
              ) : (
                <h4 className="relative z-10 font-bold text-2xl lg:text-[32px] text-white leading-tight">
                  {card.title}
                </h4>
              )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="relative flex min-[769px]:hidden">
        <div className="w-full overflow-hidden bg-white border-4 border-[#242d65] rounded-[20px] flex flex-col justify-end p-6 min-h-[400px]">
          {cards[activeIndex].imageAndAltText.image?.asset?._ref && (
            <Image
              src={`/${cards[activeIndex].imageAndAltText.image.asset._ref}`}
              alt={cards[activeIndex].imageAndAltText.altText}
              fill
              className="object-cover rounded-[20px]"
            />
          )}
          <div className="absolute inset-0 bg-black/20 rounded-[20px] " />

          <div className="relative z-10">
            <h3 className="font-bold text-2xl text-white leading-tight">
              {cards[activeIndex].title}
            </h3>
            <p className="text-white text-sm mt-2 leading-snug">
              {cards[activeIndex].description}
            </p>
          </div>

          <div className="relative z-10 mt-6 flex flex-row items-center gap-3">
            <button
              onClick={prev}
              className="size-[44px] flex items-center justify-center bg-white rounded-full cursor-pointer"
            >
              <svg
                className="size-5 text-[#242d65]"
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
              className="size-[44px] flex items-center justify-center bg-white rounded-full cursor-pointer"
            >
              <svg
                className="size-5 text-[#242d65]"
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
      </div>
    </section>
  )
}
