'use client';

import { useState } from 'react';
import Image from '@/app/components/SanityImage'
import NextImage from 'next/image'
import CtaWithIcon from './ui/CtaWithIcon'
import VideoOverlay from './ui/VideoOverlay'
import { PortableText } from 'next-sanity'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type CtaWithMediaCardProps = {
  block: ExtractPageBuilderType<'ctaWithMediaCard'>
  index: number
  pageId: string
  pageType: string
}

export default function CtaWithMediaCard({ block }: CtaWithMediaCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const title = block?.title
  const blurb = block?.blurb
  const image = block?.imageAndAltText?.image
  const altText = block?.imageAndAltText?.altText || ''
  const cta = block?.cta
  const hasVideo = !!block?.video
  
  return (
    <div className="bg-white py-4
    md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-center py-8 relative container">
        {/* Content */}
        <div className="py-2 border-2 border-dark-blue rounded-t-4xl md:rounded-l-4xl md:rounded-tr-none w-full md:w-[40%] border-b-0 
      md:border-b-2 md:border-r-0 md:py-8">
          <div className="flex flex-col pl-4 pr-4 py-4 md:pl-8 md:pr-0 items-start z-10 md:py-8">
            <h2 className="text-2xl font-bold text-medium-blue leading-tight w-full md:w-3/4">{title}</h2>
            {Array.isArray(blurb) ? (
              <div className="text-lg w-full md:w-3/4 prose max-w-none">
                <PortableText value={blurb} />
              </div>
            ) : (
              <p className="text-lg whitespace-pre-line w-full md:w-3/4">{blurb}</p>
            )}
            {cta?.href && (
              <div className="flex items-center gap-1 mt-4">
                <CtaWithIcon
                  href={cta.href}
                  buttonText={cta.buttonText || 'Learn More'}
                  newTab={cta.newTab}
                />
              </div>
            )}
          </div>
        </div>
        {image?.asset?._ref && (
          <div
            className={`border-2 border-dark-blue rounded-b-4xl bg-white z-10 w-full overflow-hidden border-t-0 md:border-t-2 md:rounded-4xl md:w-[60%] ${hasVideo ? 'relative group cursor-pointer' : ''}`}
            onClick={() => hasVideo && setIsVideoOpen(true)}
          >
            <Image
              id={image.asset._ref}
              alt={altText}
              width={698}
              height={533}
              className="rounded-b-4xl md:rounded-4xl w-full object-cover"
            />
            {hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-b-4xl md:rounded-4xl z-20" style={{ background: 'linear-gradient(rgba(255, 255, 255, 0) -2.95%, rgba(0, 0, 0, 0.6) 91.3%)' }}>
                <div className="w-20 h-20 flex items-center justify-center bg-opacity-90 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <NextImage src="/play.svg" alt="Play video" width={57} height={65} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {hasVideo && block.video && (
        <VideoOverlay
          videoUrl={block.video}
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </div>
  )
}