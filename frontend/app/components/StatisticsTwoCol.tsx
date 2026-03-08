import Image from '@/app/components/SanityImage'
import type { StatisticsTwoCol } from '@/sanity.types'

type StatisticsTwoColProps = {
  block: StatisticsTwoCol
  index: number
  pageId: string
  pageType: string
}

function StatRow({
  stat,
}: {
  stat: NonNullable<StatisticsTwoCol['stats']>[number]
}) {
  const imageRef = stat?.imageAndAltText?.image?.asset?._ref
  const altText = stat?.imageAndAltText?.altText ?? ''

  return (
    <div className="flex gap-4">
      {imageRef ? (
        <div className="shrink-0 w-12 h-12 md:w-16 md:h-16">
          <Image
            id={imageRef}
            alt={altText}
            width={64}
            height={64}
            mode="contain"
            className="w-full h-full object-contain"
          />
        </div>
      ) : null}
      <div className="flex flex-col max-w-40">
        <span className="text-3xl md:text-5xl">{stat.number}</span>
        <span className="text-xl md:text-2xl">{stat.label}</span>
      </div>
    </div>
  )
}

export default function StatisticsTwoCol({ block }: StatisticsTwoColProps) {
  const title = block?.title
  const stats = block?.stats ?? []
  const [stat1, stat2, stat3, stat4] = stats

  return (
    <div className="bg-dark-blue py-4">
      <div className="container flex flex-col items-center justify-between gap-4 bg-dark-blue text-white py-8 px-6 font-bold
    md:flex-row md:px-20 md:py-16">
        <h2 className="text-4xl font-bold mb-8 md:w-1/3 md:mb-0 md:text-7xl">{title}</h2>
        <div className="flex gap-6 md:gap-24">
          <div className="flex flex-col gap-20">
            {stat1 && <StatRow stat={stat1} />}
            {stat2 && <StatRow stat={stat2} />}
          </div>
          <div className="bg-white w-px hidden md:block" />
          <div className="flex flex-col gap-20">
            {stat3 && <StatRow stat={stat3} />}
            {stat4 && <StatRow stat={stat4} />}
          </div>
        </div>
      </div>
    </div>
  )
}