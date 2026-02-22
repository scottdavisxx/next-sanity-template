import CtaWithCard from "@/app/components/CtaWithCard";
import HeroBanner from "@/app/components/HeroBanner";
import Navigation from "@/app/components/Navigation";
import Subnav from "@/app/components/Subnav";

const tempNavigationContent = {
  "_key": "9cb3816cfaf4",
  "_type": "navigation",
  "color": "dark-blue"
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

const ctaWithCardContent = {
  title: "Shaping Students Since 1961",
  blurb: `Founded in 1961 as a ministry of Our Redeemer Lutheran Church, OR Dallas began with one kindergarten class and one teacher.
  
  In the decades since, we’ve grown grade by grade, building a Christ-centered school community that has served North Dallas families for more than 65 years.
  
  Today, we are proud to be part of The Lutheran Church Missouri Synod (LCMS), which operates the largest Protestant parochial school system in America.`,
  image: "/about-card.png",
  altText: "About Card",
  icon: true,
}

export default function AboutPage() {
  return (
    <>
      {/* @ts-ignore */}
      <Navigation block={tempNavigationContent} />
      {/* @ts-ignore */}
      <HeroBanner block={tempHeroContent} />
      <Subnav />
      <CtaWithCard {...ctaWithCardContent} />
    </>
  )
}