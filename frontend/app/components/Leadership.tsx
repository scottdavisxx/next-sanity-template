import Image from '@/app/components/SanityImage'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type LeadershipProps = {
  block: ExtractPageBuilderType<'leadership'>
  index: number
  pageId: string
  pageType: string
}

export default function Leadership({ block }: LeadershipProps) {
  const title = block?.title
  const people = block?.people ?? []

  return (
    <div className="bg-dark-blue">
      <div className="flex flex-col text-white bg-dark-blue container">
        <div className="flex flex-col gap-8 text-center pt-10 pb-16">
          <h2 className="text-4xl font-bold text-white md:text-6xl">{title}</h2>
          <div className="flex flex-col gap-8 items-center justify-between text-2xl font-bold md:flex-row">
            {people.map((person, i) => (
              <div key={i} className="flex flex-col gap-2 items-center">
                {person.imageAndAltText?.image?.asset?._ref ? (
                  <div className="w-60 h-60 min-w-60 min-h-60 max-w-60 max-h-60 rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      id={person.imageAndAltText.image.asset._ref}
                      alt={person.imageAndAltText.altText || person.name || ''}
                      width={240}
                      height={240}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                ) : null}
                <div className="flex flex-col items-center mt-2">
                  <span className="font-bold">{person.name}</span>
                  <span className="text-sm">{person.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}