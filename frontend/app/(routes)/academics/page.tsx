import HeroBanner from "@/app/components/HeroBanner";
import Navigation from "@/app/components/Navigation";
import Subnav from "@/app/components/Subnav";
import Intro from "@/app/components/IntroBlade";
import ImageWithText from "@/app/components/ImageWithText";
import TwoColBulletsWithCTAs from "@/app/components/TwoColBulletsWithCTAs";

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

const intro = {
    titles: [
        {
            title: "EARLY EDUCATION",
        },
        {
            title: "ELEMENTARY SCHOOL",

        },
        {
            title: "MIDDLE SCHOOL",
        }
    ],
    blurb: 'Our Redeemer Lutheran School of Dallas serves Preschool through 8th grade with a high-quality, individualized education that develops strong academics, strong character, and confident learners prepared for what’s next.',
    ctas: [
        {
            buttonText: 'Schedule A tour',
            link: '/'
        },
        {
            buttonText: 'Inquire',
            link: '/'
        }
    ],
    bgImage: "/bg-pattern.png",

}

const imageWithText = {
    imageSrc: "/children-studying.png",
    imageAlt: "Children studying together",
    title: "The OR Dallas Difference",
    blurb: "OR Dallas is a Christ-centered school where students are known personally and challenged thoughtfully. We combine strong instruction, purposeful formation, and a culture of belonging to help students grow with clarity, confidence, and integrity."
}

const twoColBulletsWithCTAsProps = {
    title: "The OR Dallas Family Experience",
    leftBullets: [
        { text: "High expectations paired with individualized instruction" },
        { text: "A strong foundation in reading, writing, math, and critical thinking" },
        { text: "Character formation reinforced through our \"Wildcat Wills\" culture" }
    ],
    rightBullets: [
        { text: "Enrichment and experiences that develop the whole child" },
        { text: "Partnership with parents through clear communication and shared goals" },
        { text: "Purposeful preparation for rigorous high school environments" }
    ],
    cta1: { href: "/home-program", buttonText: "OR Dallas Home Program" , font: "small"},
    cta2: { href: "/volunteer", buttonText: "Family Volunteer Hours" , font: "small" }
}




export default function AcademicsPage() {
  return (
    <>
      {/* @ts-ignore */}
      <Navigation block={tempNavigationContent} />
      {/* @ts-ignore */}
      <HeroBanner block={tempHeroContent} />
      <Subnav />
      <Intro {...intro} />
      <ImageWithText {...imageWithText}/>
      <TwoColBulletsWithCTAs {...twoColBulletsWithCTAsProps} />
    </>
  )
}