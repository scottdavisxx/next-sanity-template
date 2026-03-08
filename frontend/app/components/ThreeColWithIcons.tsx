import Image from '@/app/components/SanityImage'
import type { ThreeColWithIcons as ThreeColWithIconsType } from '@/sanity.types'

type ThreeColWithIconsProps = {
  block?: ThreeColWithIconsType
  index?: number
  pageId?: string
  pageType?: string
}

type Item = NonNullable<ThreeColWithIconsType['items']>[number]

function IconRow({ item }: { item: Item }) {
  const imageRef = (item?.imageAndAltText?.image as { asset?: { _ref?: string } } | undefined)?.asset?._ref
  const altText = item?.imageAndAltText?.altText ?? ''

  return (
    <div className="flex items-center gap-4">
      {imageRef ? (
        <div className="shrink-0 w-[88px] h-[88px]">
          <Image
            id={imageRef}
            alt={altText}
            width={88}
            height={88}
            mode="contain"
            className="w-full h-full object-contain"
          />
        </div>
      ) : null}
      {item?.title ? (
        <p className="text-3xl font-bold w-fit">{item.title}</p>
      ) : null}
    </div>
  )
}

export default function ThreeColWithIcons({ block }: ThreeColWithIconsProps) {
  if (!block) return null

  const title = block.title
  const subtitle = block.subtitle
  const items = block.items ?? []
  const perColumn = Math.ceil(items.length / 3) || 0
  const col1 = items.slice(0, perColumn)
  const col2 = items.slice(perColumn, perColumn * 2)
  const col3 = items.slice(perColumn * 2, perColumn * 3)

  return (
    <div className="bg-dark-blue py-4 lg:py-12 text-white">
      <div className="container flex flex-col gap-4 items-center justify-between">
        {title ? (
          <h2 className="text-4xl font-bold lg:text-7xl">{title}</h2>
        ) : null}
        {subtitle ? (
          <p className="text-xl text-center lg:text-left lg:text-2xl">{subtitle}</p>
        ) : null}
        <div className="flex flex-col h-full justify-between mt-4 lg:flex-row">
          <div className="flex flex-col justify-between gap-8 py-6 lg:border-r-2 lg:border-white lg:px-6">
            {col1.map((item) => (
              <IconRow key={item._key} item={item} />
            ))}
          </div>
          <div className="flex flex-col justify-between gap-8 py-6 lg:border-r-2 lg:border-white lg:px-6">
            {col2.map((item) => (
              <IconRow key={item._key} item={item} />
            ))}
          </div>
          <div className="flex flex-col justify-between gap-8 py-6 lg:px-6">
            {col3.map((item) => (
              <IconRow key={item._key} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
