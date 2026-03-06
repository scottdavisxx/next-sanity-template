'use client'

import { useEffect, useRef, useState } from 'react'
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

export default function ThreeColEventCards({ block }: ThreeColEventCardsProps) {
  const heading = block?.heading
  const bgTexture = block?.bgTexture ?? false
  const cards = block?.cards ?? []
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const update = () => {
      setCanPrev(track.scrollLeft > 0)
      setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 1)
    }

    update()
    track.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      track.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scroll = (dir: 'prev' | 'next') => {
    const track = trackRef.current
    if (!track) return
    const firstCard = track.firstElementChild as HTMLElement
    if (!firstCard) return
    const amount = firstCard.offsetWidth + 28
    track.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' })
  }

  const showNav = canPrev || canNext

  const trackClasses = [
    'flex gap-7 overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    cards.length <= 2 ? 'md:justify-center' : '',
    cards.length <= 3 ? 'lg:justify-center' : '',
  ].filter(Boolean).join(' ')

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

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        {heading && (
          <h2 className="relative font-bold text-4xl md:text-5xl lg:text-7xl text-black text-center mb-10 lg:mb-9 px-6 md:px-16 lg:px-19">
            {heading}
          </h2>
        )}

        <div className="relative px-12 md:px-18 lg:px-25">
          {showNav && (
            <button
              onClick={() => scroll('prev')}
              aria-label="Previous"
              disabled={!canPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center transition-opacity disabled:opacity-40 hover:opacity-80"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          <div ref={trackRef} className={trackClasses}>
            {cards.map((card, i) => (
              <div key={i} className="flex-none w-full md:w-[calc((100%-28px)/2)] lg:w-[calc((100%-56px)/3)]">
                <SliderCard
                  title={card.title}
                  imageAndAltText={card.imageAndAltText}
                  imageSrc={card.imageSrc}
                  subtitle={card.subtitle}
                  body={card.body}
                  cta={card.cta}
                />
              </div>
            ))}
          </div>

          {showNav && (
            <button
              onClick={() => scroll('next')}
              aria-label="Next"
              disabled={!canNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center transition-opacity disabled:opacity-40 hover:opacity-80"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
