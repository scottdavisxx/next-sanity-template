import React from 'react'
import Image from '@/app/components/SanityImage'
import Cta from './ui/Cta'
import OrlsIcon from './icons/orls-icon'
import { PortableText, type PortableTextBlock } from 'next-sanity'
import type { CtaWithCard } from '@/sanity.types'

type CtaWithCardProps = {
  block: CtaWithCard
  index: number
  pageId: string
  pageType: string
}

function renderTitleWithEmphasis(title: string | undefined, emphasizedText: string | undefined) {
  if (!title) return null
  if (!emphasizedText?.trim()) return title
  const parts = title.split(emphasizedText)
  if (parts.length === 1) return title
  return parts.reduce<React.ReactNode[]>((acc, part, i) => {
    acc.push(part)
    if (i < parts.length - 1) {
      acc.push(
        <span key={i} className="text-medium-blue font-bold">
          {emphasizedText}
        </span>
      )
    }
    return acc
  }, [])
}

export default function CtaWithCard({ block }: CtaWithCardProps) {
  const title = block?.title
  const emphasizedText = block?.emphasizedText
  const blurb = block?.blurb
  const cta = block?.cta
  const image = block?.imageAndAltText?.image
  const altText = block?.imageAndAltText?.altText || ''
  const bgImage = block?.bgImage
  const icon = block?.icon
  const hasSanityImage = (image as { asset?: { _ref?: string } } | undefined)?.asset?._ref
  const hasBgImage = (bgImage as { asset?: { _ref?: string } } | undefined)?.asset?._ref
  const textColor = block?.textColor || 'black'
  const overlapImage = block?.overlapImage || false
  return (
    <div className={`bg-white py-4
    ${overlapImage ? 'md:py-6' : 'md:py-12'}`}>
      <div className="container flex items-center justify-center px-2 relative">
        {/* Image Container */}
        {hasSanityImage && (
          <div
            className={`border-2 border-dark-blue rounded-4xl absolute left-0 bg-white z-20 hidden md:block ${overlapImage ? 'overflow-visible min-w-[415px] md:min-h-[390px]' : ''}`}
          >
            <div className={`relative w-full h-full ${overlapImage ? 'overflow-visible' : ''}`}>
              <Image
                id={(image as { asset: { _ref: string } }).asset._ref}
                alt={altText}
                width={415}
                height={537}
                className={`scott p-6 z-10 ${overlapImage
                  ? 'absolute -top-16'
                  : 'relative'
                  }`}
              />
            </div>
          </div>
        )}
        {/* Content */}
        <div className=" border-2 border-dark-blue rounded-4xl w-full relative overflow-hidden
      md:my-12">
          {hasBgImage && (
            <Image id={(bgImage as { asset: { _ref: string } }).asset._ref} alt="" width={1920} height={1080} mode="cover" className="absolute top-0 left-0 w-full h-full object-cover rounded-4xl opacity-10" />
          )}
          {/* ORLS Logo */}
          {icon && (
            <div className="absolute top-1/2 -translate-y-1/2
          md:right-12 ">
              <OrlsIcon color="whisper-blue" width={419} height={419} />
            </div>
          )}
          <div className={`flex flex-col gap-4 py-8 relative z-10 px-4 items-center
        md:pl-120 md:pr-20 md:items-start ${overlapImage ? 'md:py-6' : 'md:py-8'}`}>
            <h2 className={`text-4xl font-bold leading-16  
              ${textColor === 'dark-blue' ? 'text-dark-blue' : textColor === 'medium-blue' ? 'text-medium-blue' : 'text-black'}
              ${overlapImage ? 'md:text-6xl' : 'md:text-7xl'}`}>
              {renderTitleWithEmphasis(title, emphasizedText)}
            </h2>
            {Array.isArray(blurb) ? (
              <div className={`text-lg prose max-w-none leading-5 ${overlapImage ? 'md:w-3/4' : ''}`}>
                <PortableText value={blurb as PortableTextBlock[]} />
              </div>
            ) : (
              <p className="text-lg whitespace-pre-line">{blurb}</p>
            )}
            {cta?.href && cta?.buttonText && (
              <Cta className="md:mb-6 md:mt-4" dark href={cta.href} buttonText={cta.buttonText} newTab={cta.newTab} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}