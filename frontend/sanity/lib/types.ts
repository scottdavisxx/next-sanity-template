import type { ReactNode } from 'react'
import {GetPageQueryResult} from '@/sanity.types'
import type {PortableTextBlock} from 'next-sanity'
import type {ImageAndAltText} from '@/sanity.types'

type QueryPageBuilderSection = NonNullable<NonNullable<GetPageQueryResult>['pageBuilder']>[number]

// Block types for page builder components (extends query result until typegen includes new schema)
export type TitleAndSubtitleBlock = {_type: 'titleAndSubtitle'; _key: string; titleOne?: string; titleTwo?: string}
export type TextWithLogoBlock = {_type: 'textWithLogo'; _key: string; title?: string; blurb?: PortableTextBlock[]}
export type ImageWithTextBlock = {_type: 'imageWithText'; _key: string; title?: string; blurb?: PortableTextBlock[]; imageAndAltText?: ImageAndAltText; imageSrc?: string}
export type TwoColInfoBlock = {_type: 'twoColInfo'; _key: string; title?: string; headerBlurb?: string; items?: Array<{title?: string; subtitle?: string; detail?: string}>}
export type TwoColInfoWithImageBlock = {_type: 'twoColInfoWithImage'; _key: string; title?: string; blurb?: PortableTextBlock[]; imageAndAltText?: ImageAndAltText; card?: {cardTitle?: string; cardSubtitle?: string; bio?: PortableTextBlock[]}}
export type TwoColInfoWithCardBlock = {_type: 'twoColInfoWithCard'; _key: string; heading?: string; subtitle?: string; bio?: PortableTextBlock[]; imageAndAltText?: ImageAndAltText; imageSrc?: string; bg?: string; photoSide?: string}
export type TwoColBulletsWithCTAsBlock = {_type: 'twoColBulletsWithCTAs'; _key: string; title?: string; leftBullets?: Array<{text?: string}>; rightBullets?: Array<{text?: string}>; cta?: {href?: string; buttonText?: string; newTab?: boolean}; cta2?: {href?: string; buttonText?: string; newTab?: boolean}; showIcon?: boolean}
export type ThreeColToggleBlock = {_type: 'threeColToggle'; _key: string; cards?: Array<{title?: string; description?: string; imageAndAltText?: ImageAndAltText}>}
export type ThreeColExpandingCardsBlock = {_type: 'threeColExpandingCards'; _key: string; heading?: string; subtitle?: string; footnote?: string; arrowLabel?: string; sectionBgImage?: unknown; items?: Array<{expanded?: {name?: string; tagline?: string; description?: string; bgImage?: unknown; icon?: unknown; cta?: {label?: string; href?: string}}; collapsed?: {name?: string; bgImage?: unknown; icon?: unknown; cta?: {label?: string; href?: string}}}>}
export type ThreeColEventCardsBlock = {_type: 'threeColEventCards'; _key: string; heading?: string; bgTexture?: boolean; cards?: Array<{title?: string; imageAndAltText?: ImageAndAltText; imageSrc?: string; subtitle?: string; body?: string; cta?: {label?: string; href?: string}}>}
export type ThreeColCtasBlock = {_type: 'threeColCtas'; _key: string; cards?: Array<{title?: string; description?: string; href?: string}>}
export type ThreeColCircleImageBlock = {_type: 'threeColCircleImage'; _key: string; title?: string; columns?: Array<{name?: string; blurb?: string; imageAndAltText?: ImageAndAltText}>}
export type ThreeColCardsBlock = {_type: 'threeColCards'; _key: string; cards?: Array<{title?: string; imageAndAltText?: ImageAndAltText; href?: string}>}
export type ThreeColCardsTallBlock = {_type: 'threeColCardsTall'; _key: string; title?: string; subtitle?: string; cards?: Array<{title?: string; description?: string; imageAndAltText?: ImageAndAltText; cta?: {href?: string; buttonText?: string; newTab?: boolean}}>}
export type StatisticsTwoColBlock = {_type: 'statisticsTwoCol'; _key: string; title?: string; stats?: Array<{number?: string; label?: string}>}
export type FourColStatisticsBlock = {_type: 'fourColStatistics'; _key: string; sideTitle?: string; sideBlurb?: string; stats?: Array<{number?: string; label?: string}>}
export type OneColInfoBlock = {_type: 'oneColInfo'; _key: string; variant?: string; title?: string; bodyContent?: PortableTextBlock[]; imageAndAltText?: ImageAndAltText; imageBlurb?: string}
export type NumberedListBlock = {_type: 'numberedList'; _key: string; title?: string; items?: Array<{number?: number; heading?: string; body?: PortableTextBlock[] | ReactNode}>}
export type LeadershipBlock = {_type: 'leadership'; _key: string; title?: string; people?: Array<{imageAndAltText?: ImageAndAltText; name?: string; role?: string}>}
export type IntroBladeBlock = {_type: 'introBlade'; _key: string; titles?: Array<{title?: string}>; blurb?: string; ctas?: Array<{buttonText?: string; link?: string}>; bgImage?: string | {asset?: {_ref: string}}}
export type CtaWithMediaCardBlock = {_type: 'ctaWithMediaCard'; _key: string; title?: string; blurb?: PortableTextBlock[]; imageAndAltText?: ImageAndAltText; cta?: {href?: string; buttonText?: string; newTab?: boolean}; video?: string}
export type CtaWithCardBlock = {_type: 'ctaWithCard'; _key: string; title?: string; blurb?: PortableTextBlock[]; imageAndAltText?: ImageAndAltText; imageSrc?: string; cta?: {href?: string; buttonText?: string; newTab?: boolean}; bgImage?: {asset?: {_ref: string}} | string; icon?: boolean}
export type CardGridBlock = {_type: 'cardGrid'; _key: string; heading?: string; cards?: Array<{title?: string; description?: string; imageAndAltText?: ImageAndAltText; href?: string; fullWidth?: boolean}>}
export type CalendarBlock = {_type: 'calendar'; _key: string; title?: string; iframeUrl?: string}

export type PageBuilderSection =
  | QueryPageBuilderSection
  | TitleAndSubtitleBlock
  | TextWithLogoBlock
  | ImageWithTextBlock
  | TwoColInfoBlock
  | TwoColInfoWithImageBlock
  | TwoColInfoWithCardBlock
  | TwoColBulletsWithCTAsBlock
  | ThreeColToggleBlock
  | ThreeColExpandingCardsBlock
  | ThreeColEventCardsBlock
  | ThreeColCtasBlock
  | ThreeColCircleImageBlock
  | ThreeColCardsBlock
  | ThreeColCardsTallBlock
  | StatisticsTwoColBlock
  | FourColStatisticsBlock
  | OneColInfoBlock
  | NumberedListBlock
  | LeadershipBlock
  | IntroBladeBlock
  | CtaWithMediaCardBlock
  | CtaWithCardBlock
  | CardGridBlock
  | CalendarBlock

export type ExtractPageBuilderType<T extends PageBuilderSection['_type']> = Extract<
  PageBuilderSection,
  {_type: T}
>

// Represents a Link after GROQ dereferencing (page/event become slug strings)
export type DereferencedLink = {
  _type: 'link'
  linkType?: 'href' | 'page' | 'event'
  href?: string
  page?: string | null
  event?: string | null
  openInNewTab?: boolean
}
