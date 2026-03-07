import Image from 'next/image'
import { PortableText, PortableTextBlock } from 'next-sanity'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type NumberedListProps = {
  block: ExtractPageBuilderType<'numberedList'>
  index: number
  pageId: string
  pageType: string
}

export default function NumberedList({ block }: NumberedListProps) {
  const title = block?.title
  const items = block?.items ?? []
  return (
    <div className="bg-white relative overflow-hidden py-6 md:py-12 lg:py-16">
      <div className="container">
        <div className="absolute bottom-0 right-0 pointer-events-none select-none">
          <Image
            src="/church.png"
            alt=""
            width={830}
            height={1074}
            className="block"
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.03) 0%, #FFF 49.04%)' }}
        />
        <div className="relative">
          {title && <h2 className="font-bold text-4xl md:text-6xl lg:text-8xl text-black text-center mb-12 lg:mb-16">{title}</h2>}
          <div>
            {items.map((item, index) => (
              <div key={index}>
                {index > 0 && <hr className="border-t border-black/15" />}
                <div className="flex flex-row items-start gap-6 lg:gap-10 py-10 lg:py-12">
                  <div className="w-16 lg:w-24 flex-shrink-0 text-center">
                    {item.number !== undefined && (
                      <span className="font-bold text-4xl lg:text-8xl text-medium-blue">
                        {item.number}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg md:text-2xl lg:text-4xl text-black">
                      {item.heading}
                    </p>
                    <div className="mt-2 text-base md:text-xl lg:text-2xl text-black leading-snug prose max-w-none">
                      {Array.isArray(item.body) ? <PortableText value={item.body as PortableTextBlock[]} /> : item.body}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
