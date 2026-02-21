import CtaCardWithImage from './components/CtaCardWithImage'
import FeaturedEvents from './components/FeaturedEvents'
import HeroBanner from './components/HeroBanner'
import Navigation from './components/Navigation'
import StatisticsTwoCol from './components/StatisticsTwoCol'
import Subnav from './components/Subnav'
import TextWithLogo from './components/TextWithLogo'
import ThreeColCards from './components/ThreeColCards'

const tempNavigationContent = {
  "_key": "9cb3816cfaf4",
  "_type": "navigation",
  "color": "white"
}

const tempHeroContent = {
  "_key": "48df50bb7cf9",
  "_type": "heroBanner",
  "cta": {
    "buttonText": "Schedule A Visit",
    "href": "#",
    "newTab": true
  },
  "imageAndAltText": {
    "altText": "Kids at School",
    "image": {
      "_type": "image",
      "asset": {
        "_ref": "image-47cc3c814eba1e8eac1b6d50dc63b52ec521a575-871x581-png",
        "_type": "reference"
      }
    }
  },
  "titleOne": "Test Title One .",
  "titleTwo": "Test Title Two"
}

const tempTextWithLogoContent = {
  title: "Where Faith and Excellence Grow Together",
  blurb: "Since 1961, Our Redeemer Lutheran School of Dallas has served Preschool-8th grade students with a high-quality, individualized education that builds strong academics, strong character, and deep faith. OR Dallas graduates are prepared to thrive in rigorous high school environments and lead with purpose and integrity."
}


export default async function Page() {

  return (
    <>
      <Navigation block={tempNavigationContent} />
      <HeroBanner block={tempHeroContent} />
      <Subnav />
      <TextWithLogo {...tempTextWithLogoContent} />
      <ThreeColCards />
      <StatisticsTwoCol />
      <FeaturedEvents />
    </>
  )
}