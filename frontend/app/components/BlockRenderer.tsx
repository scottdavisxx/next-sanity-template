import React from 'react'
import Hero from '@/app/components/HeroBanner'
import Subnav from '@/app/components/Subnav'
import TitleAndSubtitle from '@/app/components/TitleAndSubtitle'
import TextWithLogo from '@/app/components/TextWithLogo'
import ImageWithText from '@/app/components/ImageWithText'
import TwoColInfo from '@/app/components/TwoColInfo'
import TwoColInfoWithImage from '@/app/components/TwoColInfoWithImage'
import TwoColInfoWithCard from '@/app/components/TwoColInfoWithCard'
import TwoColBulletsWithCTAs from '@/app/components/TwoColBulletsWithCTAs'
import ThreeColToggle from '@/app/components/ThreeColToggle'
import ThreeColExpandingCards from '@/app/components/ThreeColExpandingCards'
import ThreeColEventCards from '@/app/components/ThreeColEventCards'
import ThreeColCtas from '@/app/components/ThreeColCtas'
import ThreeColWithIcons from '@/app/components/ThreeColWithIcons'
import ThreeColCircleImage from '@/app/components/ThreeColCircleImage'
import ThreeColCards from '@/app/components/ThreeColCards'
import ClubCards from '@/app/components/ClubCards'
import StatisticsTwoCol from '@/app/components/StatisticsTwoCol'
import FourColStatistics from '@/app/components/FourColStatistics'
import OneColInfo from '@/app/components/OneColInfo'
import NumberedList from '@/app/components/NumberedList'
import Leadership from '@/app/components/Leadership'
import IntroBlade from '@/app/components/IntroBlade'
import CtaWithMediaCard from '@/app/components/CtaWithMediaCard'
import CtaWithCard from '@/app/components/CtaWithCard'
import TwoCtasWithImage from '@/app/components/TwoCtasWithImage'
import TallTwoColTextWithCard from '@/app/components/TallTwoColTextWithCard'
import CardGrid from '@/app/components/CardGrid'
import Calendar from '@/app/components/Calendar'
import FeaturedEventsBlock from '@/app/components/FeaturedEventsBlock'
import { dataAttr } from '@/sanity/lib/utils'
import { PageBuilderSection } from '@/sanity/lib/types'

type BlockProps = {
  index: number
  block: PageBuilderSection
  pageId: string
  pageType: string
}

type BlocksType = {
  [key: string]: React.FC<BlockProps>
}

const Blocks = {
  heroBanner: Hero,
  subnav: Subnav,
  titleAndSubtitle: TitleAndSubtitle,
  textWithLogo: TextWithLogo,
  imageWithText: ImageWithText,
  twoColInfo: TwoColInfo,
  twoColInfoWithImage: TwoColInfoWithImage,
  twoColInfoWithCard: TwoColInfoWithCard,
  twoColBulletsWithCTAs: TwoColBulletsWithCTAs,
  threeColToggle: ThreeColToggle,
  threeColExpandingCards: ThreeColExpandingCards,
  threeColEventCards: ThreeColEventCards,
  threeColCtas: ThreeColCtas,
  threeColWithIcons: ThreeColWithIcons,
  threeColCircleImage: ThreeColCircleImage,
  threeColCards: ThreeColCards,
  clubCards: ClubCards,
  statisticsTwoCol: StatisticsTwoCol,
  fourColStatistics: FourColStatistics,
  oneColInfo: OneColInfo,
  numberedList: NumberedList,
  leadership: Leadership,
  introBlade: IntroBlade,
  ctaWithMediaCard: CtaWithMediaCard,
  ctaWithCard: CtaWithCard,
  twoCtasWithImage: TwoCtasWithImage,
  tallTwoColTextWithCard: TallTwoColTextWithCard,
  cardGrid: CardGrid,
  calendar: Calendar,
  featuredEvents: FeaturedEventsBlock,
} as BlocksType

/**
 * Used by the <PageBuilder>, this component renders a the component that matches the block type.
 */
export default function BlockRenderer({ block, index, pageId, pageType }: BlockProps) {
  // Block does exist
  if (typeof Blocks[block._type] !== 'undefined') {
    return (
      <div
        key={block._key}
        data-sanity={dataAttr({
          id: pageId,
          type: pageType,
          path: `pageBuilder[_key=="${block._key}"]`,
        }).toString()}
      >
        {React.createElement(Blocks[block._type], {
          key: block._key,
          block,
          index,
          pageId,
          pageType,
        })}
      </div>
    )
  }
  // Block doesn't exist yet
  return React.createElement(
    () => (
      <div className="w-full bg-gray-100 text-center text-gray-500 p-20 rounded">
        A &ldquo;{block._type}&rdquo; block hasn&apos;t been created
      </div>
    ),
    { key: block._key },
  )
}
