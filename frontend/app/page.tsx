import CtaCardWithImage from './components/CtaCardWithImage'
import CtaWithCard from './components/CtaWithCard'
import FeaturedEvents from './components/FeaturedEvents'
import HeroBanner from './components/HeroBanner'
import Navigation from './components/Navigation'
import StatisticsTwoCol from './components/StatisticsTwoCol'
import Subnav from './components/Subnav'
import TextWithLogo from './components/TextWithLogo'
import ThreeColCards from './components/ThreeColCards'
import ThreeColCircleImage from './components/ThreeColCircleImage'

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

const ctaWithCardContent = {
  title: "Our Lutheran Identity",
  blurb: `As a school of The Lutheran Church Missouri Synod, Our Redeemer is rooted in Scripture and centered on Jesus Christ. We pair a high-quality, individualized education with daily faith formation, so students grow in wisdom, character, and strong academics from Preschool through 8th grade. 
  
  OR Dallas is also accredited through National Lutheran School Accreditation (NLSA), reflecting our commitment to educational quality and continuous improvement.`,
  ctaText: "Meet Our Pastors",
  ctaLink: "#",
  bgImage: "/bg-pattern.png",
  image: "/church.png",
  altText: "Church",
  cta: {
    buttonText: "Meet Our Pastors",
    href: "#",
    dark: true,
  }
}


export default async function Page() {

  return (
    <>
      {/* @ts-ignore */}
      <Navigation block={tempNavigationContent} />
      {/* @ts-ignore */}
      <HeroBanner block={tempHeroContent} />
      <Subnav />
      <TextWithLogo {...tempTextWithLogoContent} />
      <ThreeColCards />
      <StatisticsTwoCol />
      <FeaturedEvents />
      <CtaWithCard {...ctaWithCardContent} />
      <ThreeColCircleImage />
    </>
  )
}