'use client'

import { useState } from 'react'
import Image from "next/image"
import Cta from "./ui/Cta"

interface Card {
  title: string
  description: string
  image: string
  altText: string
  href: string
  fullWidth?: boolean
}

interface CardGridProps {
  heading?: string
  cards: Card[]
}

export default function CardGrid({ heading = "Courses and Pathways", cards }: CardGridProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i - 1 + cards.length) % cards.length)
  const next = () => setActiveIndex((i) => (i + 1) % cards.length)

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            {heading}
          </h2>
        )}

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative overflow-visible rounded-3xl group min-h-[500px] w-full ${
                card.fullWidth ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <Image
                src={card.image}
                alt={card.altText}
                fill
                className="object-cover rounded-3xl z-10"
              />

              <div className="absolute inset-0 bg-black/44 group-hover:bg-black/64 transition-all duration-300 rounded-3xl z-20" />

              <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col p-8 text-white">
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-xl mb-6 leading-relaxed">
                  {card.description}
                </p>

                <Cta
                  href={card.href}
                  buttonText="Learn More"
                  buttonColor="brand-white"
                  font="small"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-3xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="md:hidden relative">
          <div className="relative overflow-visible rounded-3xl min-h-[500px] w-full">
            <Image
              src={cards[activeIndex].image}
              alt={cards[activeIndex].altText}
              fill
              className="object-cover rounded-3xl z-10"
            />

            <div className="absolute inset-0 bg-black/44 rounded-3xl z-20" />

            <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">{cards[activeIndex].title}</h3>
              <p className="text-xl mb-6 leading-relaxed">
                {cards[activeIndex].description}
              </p>

              <Cta
                href={cards[activeIndex].href}
                buttonText="Learn More"
                buttonColor="brand-white"
                font="small"
              />

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
