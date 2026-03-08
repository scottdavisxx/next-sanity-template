import React from 'react'
import Image from '@/app/components/SanityImage'
import Cta from './ui/Cta'
import { PortableText, type PortableTextBlock } from 'next-sanity'
import type { TwoCtasWithImage as TwoCtasWithImageType } from '@/sanity.types'

type TwoCtasWithImageProps = {
  block?: TwoCtasWithImageType
  index?: number
  pageId?: string
  pageType?: string
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

export default function TwoCtasWithImage({ block }: TwoCtasWithImageProps) {
  if (!block) return null
  const title = block.title
  const emphasizedText = block?.emphasizedText
  const blurb = block?.blurb
  const ctas = block?.ctas
  const image = block?.imageAndAltText?.image
  const altText = block?.imageAndAltText?.altText || ''
  const bgImage = block?.bgImage
  const textColor = block?.textColor || 'black'
  const hasSanityImage = (image as { asset?: { _ref?: string } } | undefined)?.asset?._ref
  const hasBgImage = (bgImage as { asset?: { _ref?: string } } | undefined)?.asset?._ref

  return (
    <div className="bg-white py-4 
    md:pb-16 md:pt-30">
      <div className="container flex items-center justify-end border border-black rounded-2xl overflow-visible relative">
        {/* BG Image */}
        {hasBgImage && (
          <div className="absolute bottom-0 top-0 left-0 w-full opacity-10">
            <Image
              id={(bgImage as { asset: { _ref: string } }).asset._ref}
              alt=""
              width={1305}
              height={551}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        {/* Side image */}
        {hasSanityImage && (
          <Image
            id={(image as { asset: { _ref: string } }).asset._ref}
            alt={altText}
            width={439}
            height={633}
            className="absolute bottom-0 hidden lg:block lg:left-16"
          />
        )}
        {/* Content */}
        <div className="flex flex-col justify-between gap-6 z-10 py-4 lg:w-[60%] md:px-10 md:py-12">
          <h2
            className={`text-4xl font-bold leading-tight text-balance md:text-7xl ${textColor === 'dark-blue'
              ? 'text-dark-blue'
              : textColor === 'medium-blue'
                ? 'text-medium-blue'
                : 'text-black'
              }`}
          >
            {renderTitleWithEmphasis(title, emphasizedText)}
          </h2>
          {Array.isArray(blurb) ? (
            <div className="text-xl prose max-w-none">
              <PortableText value={blurb as PortableTextBlock[]} />
            </div>
          ) : (
            blurb && <p className="text-xl">{blurb}</p>
          )}
          {/* CTAs - description from ctaWithDescription is the <p> above each CTA */}
          <div className="flex flex-col gap-8 text-center text-balance md:flex-row md:mt-4">
            {ctas?.map((cta) => (
              <div key={cta._key} className="flex flex-col gap-2 items-center">
                {cta.description && <p>{cta.description}</p>}
                <Cta
                  href={cta.href}
                  buttonText={cta.buttonText}
                  buttonColor={cta.buttonColor}
                  font="small"
                  newTab={cta.newTab}
                  className="w-full justify-center md:w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
