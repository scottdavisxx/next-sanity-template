import Image from '@/app/components/SanityImage'
import Cta from './ui/Cta'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type IntroBladeProps = {
  block: ExtractPageBuilderType<'introBlade'>
  index: number
  pageId: string
  pageType: string
}

export default function IntroBlade({ block }: IntroBladeProps) {
  const titles = block?.titles ?? []
  const blurb = block?.blurb
  const ctas = block?.ctas ?? []
  const bgImage = block?.bgImage




    return (
        <div className="relative flex flex-col px-24 py-8 gap-2  justify-between min-h-[478px] max-md:px-8">
            {bgImage && (
              <div className="absolute inset-0 left-0 right-0 w-full h-full overflow-hidden opacity-10">
                {typeof bgImage === 'string' ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={bgImage} alt="" className="w-full h-full object-cover opacity-75" />
                ) : (bgImage as {asset?: {_ref?: string}})?.asset?._ref ? (
                  <Image id={(bgImage as {asset: {_ref: string}}).asset._ref} alt="" width={1920} height={1080} mode="cover" className="w-full h-full object-cover opacity-75" />
                ) : null}
              </div>
            )}
            <div className="relative flex flex-col md:flex-row px-6 py-8 gap-8 md:justify-between items-center z-10">
                {titles.map((obj, i) => (
                  <h2 key={i} className="text-4xl max-md:text-3xl max-md:w-[100%] font-bold w-full md:w-1/3 text-center">
                    {obj.title}
                  </h2>
                ))}
            </div>
            <div className="relative flex px-6 max-sm:px-[0] py-8 gap-2 justify-between items-center z-10">
              <p className="text-[2rem] text-center">{blurb}</p>
            </div>
            <div className="relative flex flex-col md:flex-row px-6 py-8 gap-8 justify-center items-center z-10">
              {ctas.map((cta, i) => (
                <Cta key={i} href={cta.link || '#'} buttonText={cta.buttonText || ''} dark buttonColor="brand-black" />
              ))}
            </div>


        </div>
    )
}