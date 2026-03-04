'use client'

import { useState } from 'react'

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
  bgImage?: string
  icon?: string
  cta?: Cta
}

export interface CardItem {
  id: string
  expanded: ExpandedCard
  collapsed: CollapsedCard
}

interface Props {
  heading: string
  subtitle?: string
  footnote?: string
  arrowLabel?: string
  sectionBgImage?: string
  items: CardItem[]
}

// group-hover classes work here because the outer card wrapper (in the parent) carries the `group` class.
function CollapsedCardInner({ card }: { card: CollapsedCard }) {
  const hasBg = !!card.bgImage
  const textColor = hasBg ? 'text-white' : 'text-dark-blue'

  return (
    <div className={`absolute inset-0 rounded-2xl overflow-hidden isolate border-2 border-dark-blue ${!hasBg ? 'bg-white' : ''}`}>
      {hasBg && (
        <>
          <img src={card.bgImage} alt={card.name ?? ''} className="absolute inset-0 w-full h-full object-cover z-10" />
          <div className="absolute inset-0 bg-black/45 group-hover:bg-black/65 transition-all duration-300 z-20" />
        </>
      )}

      {card.icon && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pb-14">
          <img src={card.icon} alt="" className="w-[65%] max-h-[200px] object-contain" />
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

export default function ThreeColExpandingCards({
  heading,
  subtitle,
  footnote,
  arrowLabel,
  sectionBgImage,
  items,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setActiveIndex((i) => (i + 1) % items.length)

  const active = items[activeIndex]
  const collapsed1 = items[(activeIndex + 1) % items.length]
  const collapsed2 = items[(activeIndex + 2) % items.length]

  const exp = active.expanded
  const hasBg = !!exp.bgImage
  const hasIcon = !!exp.icon
  const hasText = !!(exp.name || exp.tagline || exp.description || exp.cta)
  const textColor = hasBg ? 'text-white' : 'text-black'
  const accentColor = hasBg ? 'text-white/80' : 'text-medium-blue'
  const ctaStyle = hasBg ? 'bg-white text-dark-blue' : 'bg-dark-blue text-white'

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-9">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {sectionBgImage && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            <img
              alt=""
              aria-hidden="true"
              src={sectionBgImage}
              className="absolute h-full max-w-none top-0 object-cover"
              style={{ left: '-4.83%', width: '109.8%' }}
            />
          </div>
        )}

        <h2 className="relative font-bold text-4xl md:text-5xl lg:text-7xl text-black">{heading}</h2>
        {subtitle && (
          <p className="relative text-base md:text-lg lg:text-2xl text-black mt-3">{subtitle}</p>
        )}

        {/* Desktop layout */}
        <div className="relative hidden md:flex gap-14 mt-8 h-[500px]">

          {/* Expanded card */}
          <div style={{ flex: '3 3 0%' }} className="relative h-full overflow-visible group isolate">
            <div className={`absolute inset-0 rounded-2xl overflow-hidden isolate border-2 border-dark-blue ${!hasBg ? 'bg-white' : ''}`}>
              {hasBg && (
                <>
                  <img src={exp.bgImage} alt={exp.name ?? ''} className="absolute inset-0 w-full h-full object-cover z-10" />
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/65 transition-all duration-300 z-20" />
                </>
              )}

              {hasText && (
                <div className={`absolute inset-0 z-30 flex flex-col p-8 ${hasBg ? 'justify-end' : 'justify-start'}`}>
                  <div className={hasIcon ? 'max-w-[55%]' : ''}>
                    {exp.name && (
                      <p className={`font-bold text-xl lg:text-3xl ${textColor}`}>{exp.name}</p>
                    )}
                    {exp.tagline && (
                      <p className={`font-medium italic text-base lg:text-2xl mt-1 ${accentColor}`}>{exp.tagline}</p>
                    )}
                    {exp.description && (
                      <p className={`text-sm lg:text-2xl mt-4 leading-snug ${textColor}`}>{exp.description}</p>
                    )}
                    {exp.cta && (
                      <a href={exp.cta.href} className={`inline-block mt-5 px-6 py-2.5 rounded-md font-semibold text-sm lg:text-base ${ctaStyle}`}>
                        {exp.cta.label}
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Icon — always shown at z-40 (above overlay + text) when present */}
              {hasIcon && (
                <img
                  src={exp.icon}
                  alt={exp.name ?? ''}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-[200px] lg:w-[240px] h-[280px] lg:h-[318px] object-contain z-40"
                />
              )}
            </div>

            {/* Hover offset border — behind card via -z-10 in isolated stacking context */}
            <div className="absolute top-0 left-0 w-full h-full border-2 border-dark-blue rounded-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300 pointer-events-none -z-10" />
          </div>

          {/* Collapsed card — offset +1 */}
          <div
            style={{ flex: '1 1 0%' }}
            className="relative h-full overflow-visible group cursor-pointer isolate"
            onClick={() => setActiveIndex((activeIndex + 1) % items.length)}
          >
            <CollapsedCardInner card={collapsed1.collapsed} />
            <div className="absolute top-0 left-0 w-full h-full border-2 border-dark-blue rounded-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300 pointer-events-none -z-10" />
          </div>

          {/* Collapsed card — offset +2 */}
          <div
            style={{ flex: '1 1 0%' }}
            className="relative h-full overflow-visible group cursor-pointer isolate"
            onClick={() => setActiveIndex((activeIndex + 2) % items.length)}
          >
            <CollapsedCardInner card={collapsed2.collapsed} />
            <div className="absolute top-0 left-0 w-full h-full border-2 border-dark-blue rounded-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300 pointer-events-none -z-10" />
          </div>
        </div>

        {/* Desktop arrows */}
        <div className="relative hidden md:flex flex-col gap-1 mt-8">
          <div className="flex items-center gap-2">
            <button onClick={prev} aria-label="Previous" className="size-9 flex items-center justify-center cursor-pointer">
              <img src="/houses/arrow-right.svg" alt="" className="size-full rotate-180" />
            </button>
            <button onClick={next} aria-label="Next" className="size-9 flex items-center justify-center cursor-pointer">
              <img src="/houses/arrow-right.svg" alt="" className="size-full" />
            </button>
          </div>
          {arrowLabel && (
            <p className="font-semibold text-medium-blue text-xs lg:text-sm">{arrowLabel}</p>
          )}
        </div>

        {/* Mobile layout — single full-width card, icon below text in flow */}
        <div className="relative flex md:hidden mt-8">
          <div className="relative w-full h-[420px] overflow-visible group isolate">
            <div className={`absolute inset-0 rounded-2xl overflow-hidden isolate border-2 border-dark-blue ${!hasBg ? 'bg-white' : ''}`}>
              {hasBg && (
                <>
                  <img src={exp.bgImage} alt={exp.name ?? ''} className="absolute inset-0 w-full h-full object-cover z-10" />
                  <div className="absolute inset-0 bg-black/45 z-20" />
                </>
              )}
              <div className={`absolute inset-0 z-30 flex flex-col p-6 ${hasBg ? 'justify-end' : 'justify-start'}`}>
                {exp.name && (
                  <p className={`font-bold text-2xl ${textColor}`}>{exp.name}</p>
                )}
                {exp.tagline && (
                  <p className={`font-medium italic text-base mt-1 ${accentColor}`}>{exp.tagline}</p>
                )}
                {exp.description && (
                  <p className={`text-sm mt-4 leading-snug ${textColor}`}>{exp.description}</p>
                )}
                {!hasBg && exp.icon && (
                  <div className="mt-auto flex items-center justify-center">
                    <img src={exp.icon} alt={exp.name ?? ''} className="h-[150px] object-contain" />
                  </div>
                )}
                {exp.cta && (
                  <a href={exp.cta.href} className={`inline-block mt-4 px-6 py-2.5 rounded-md font-semibold text-sm ${ctaStyle}`}>
                    {exp.cta.label}
                  </a>
                )}
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full border-2 border-dark-blue rounded-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300 pointer-events-none -z-10" />
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="relative flex md:hidden flex-col gap-1 mt-8">
          <div className="flex items-center gap-2">
            <button onClick={prev} className="size-9 flex items-center justify-center cursor-pointer">
              <img src="/houses/arrow-right.svg" alt="Previous" className="size-full rotate-180" />
            </button>
            <button onClick={next} className="size-9 flex items-center justify-center cursor-pointer">
              <img src="/houses/arrow-right.svg" alt="Next" className="size-full" />
            </button>
          </div>
          {arrowLabel && (
            <p className="font-semibold text-medium-blue text-xs">{arrowLabel}</p>
          )}
        </div>

        {footnote && (
          <p className="relative font-semibold italic text-dark-blue text-sm lg:text-2xl mt-6">{footnote}</p>
        )}
      </div>
    </section>
  )
}
