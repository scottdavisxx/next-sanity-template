import Image from '@/app/components/SanityImage'
import NextImage from 'next/image'
import Cta from './ui/Cta'
import type { IntroBlade } from '@/sanity.types'

type IntroBladeProps = {
  block: IntroBlade
  index: number
  pageId: string
  pageType: string
}

export default function IntroBlade({ block }: IntroBladeProps) {
  const titles = block?.titles ?? []
  const blurb = block?.blurb
  const ctas = block?.ctas ?? []
  const bgImage = block?.bgImage
  const title = block?.singleTitle
  return (
    <div className="relative flex flex-col py-8 gap-2  justify-between min-h-[478px]
    md:px-24">
      <div className="container">
        {bgImage && (
          <div className="absolute inset-0 left-0 right-0 w-full h-full overflow-hidden opacity-10">
            <div className="relative size-full">
              {typeof bgImage === 'string' ? (
                <NextImage src={bgImage} alt="" fill className="object-cover opacity-75" />
              ) : (bgImage as { asset?: { _ref?: string } })?.asset?._ref ? (
                <Image id={(bgImage as { asset: { _ref: string } }).asset._ref} alt="" width={1920} height={1080} mode="cover" className="w-full h-full object-cover opacity-75" />
              ) : null}
            </div>
          </div>
        )}
        <div className="relative flex flex-col md:flex-row px-0 py-2 gap-8 md:justify-between items-center z-10
        md:px-6 md:py-8">
          {title && <h2 className="text-4xl font-bold w-full text-center 
          md:text-7xl md:-mb-10">{title}</h2>}
          {titles.map((obj, i) => (
            <h2 key={i} className="text-4xl max-md:text-3xl max-md:w-full font-bold w-full md:w-1/3 text-center">
              {obj.title}
            </h2>
          ))}
        </div>
        <div className="relative flex px-6 max-sm:px-0 py-2 gap-2 justify-between items-center z-10
        md:py-8">
          <p className="text-2xl text-center">{blurb}</p>
        </div>
        <div className="relative flex flex-col md:flex-row px-6 py-4 gap-8 justify-center items-center z-10
        md:py-8">
          {ctas.map((cta, i) => {
            const item = cta as {
              href?: string
              link?: string
              buttonText: string
              newTab?: boolean
              buttonColor?: 'brand-blue' | 'brand-white' | 'brand-black' | 'brand-medium-blue'
            }
            return (
              <Cta
                key={i}
                href={item.href ?? item.link ?? '#'}
                buttonText={item.buttonText || ''}
                newTab={item.newTab}
                buttonColor={item.buttonColor}
                dark
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
