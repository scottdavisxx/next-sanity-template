import Image from 'next/image'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type TwoColInfoProps = {
  block: ExtractPageBuilderType<'twoColInfo'>
  index: number
  pageId: string
  pageType: string
}

export default function TwoColInfo({ block }: TwoColInfoProps) {
  const title = block?.title
  const headerBlurb = block?.headerBlurb
  const items = block?.items ?? []
  const leftItems = items.slice(0, Math.ceil(items.length / 2))
  const rightItems = items.slice(Math.ceil(items.length / 2))

  return (
    <section className="relative overflow-hidden bg-dark-blue py-10 md:py-14 lg:py-12">
      <div className="container">
        {/* Background texture */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <Image
            src="/early-education/tuition-bg.png"
            alt=""
            aria-hidden="true"
            fill
            objectFit="cover"
            className="absolute w-[126%] h-[133%] -left-[12%] -top-[7%] object-cover max-w-none"
          />
        </div>

        {/* Header row */}
        <div className="relative flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
          <div className="lg:w-[30%] flex-shrink-0">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-tight">
              {title}
            </h2>
          </div>
          <div className="lg:w-[70%] lg:pb-3">
            <p className="text-base md:text-lg lg:text-2xl font-semibold italic text-white leading-relaxed">
              {headerBlurb}
            </p>
          </div>
        </div>

        {/* Tuition grid */}
        <div className="relative mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-20">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {leftItems.map((item, i) => (
              <div key={i}>
                <p className="text-base md:text-lg lg:text-2xl font-bold text-white">{item.title}</p>
                {item.subtitle && (
                  <p className="text-base md:text-lg lg:text-2xl font-bold text-yellow">{item.subtitle}</p>
                )}
                {item.detail && (
                  <p className="text-sm md:text-base lg:text-xl text-white mt-1">{item.detail}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8">
            {rightItems.map((item, i) => (
              <div key={i}>
                <p className="text-base md:text-lg lg:text-2xl font-bold text-white">{item.title}</p>
                {item.subtitle && (
                  <p className="text-base md:text-lg lg:text-2xl font-bold text-yellow">{item.subtitle}</p>
                )}
                {item.detail && (
                  <p className="text-sm md:text-base lg:text-xl text-white mt-1 whitespace-pre-line">
                    {item.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
