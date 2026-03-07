import Image from '@/app/components/SanityImage'
import Cta from './ui/Cta'
import type { ClubCards } from '@/sanity.types'

type ClubCardsProps = {
  block: ClubCards
  index: number
  pageId: string
  pageType: string
}

export default function ClubCards({ block }: ClubCardsProps) {
  const title = block?.title
  const subtitle = block?.subtitle
  const cards = block?.cards ?? []

  return (
    <div className="bg-white py-6 md:py-12 lg:py-16">
      <div className="container">
        <div className="flex flex-col mb-12 gap-4 md:gap-6 lg:gap-9 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-tight text-center">
            {title}
          </h2>
          <p className="text-xl text-gray-700">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 ">
          {cards.map((card, i) => (
            <div key={i} className="relative border-2 border-dark-blue rounded-3xl h-96 pb-8">
              <div className="absolute top-0 left-0 border-2 border-dark-blue rounded-3xl w-full h-full"></div>

              <div className="bg-white relative rounded-3xl group w-full h-full overflow-hidden">
                <div className="flex flex-col p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                  {card.cta?.href && (
                    <Cta
                      href={card.cta.href}
                      buttonText={card.cta.buttonText || 'Learn More'}
                      newTab={card.cta.newTab}
                      buttonColor="brand-white"
                      font="small"
                    />
                  )}
                  <p className="text-lg mb-6 leading-relaxed">{card.description}</p>
                </div>
                {card.imageAndAltText?.image?.asset?._ref && (
                  <Image
                    id={card.imageAndAltText.image.asset._ref}
                    alt={card.imageAndAltText.altText || card.title || ''}
                    width={800}
                    height={600}
                    mode="cover"
                    className="w-full object-cover rounded-3xl"
                  />
                )}

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
