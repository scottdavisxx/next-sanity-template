import HeroBanner from "@/app/components/HeroBanner";
import Subnav from "@/app/components/Subnav";
import Intro from "@/app/components/IntroBlade";
import ImageWithText from "@/app/components/ImageWithText";
import TwoColBulletsWithCTAs from "@/app/components/TwoColBulletsWithCTAs";
import ThreeColCardsTall from "@/app/components/ThreeColCardsTall";
import ThreeColToggle from "@/app/components/ThreeColToggle";
import CardGrid from "@/app/components/CardGrid";

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
      link: '/',
      font: "small"
    },
    {
      buttonText: 'Inquire',
      link: '/',
      font: "small"
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
  cta1: { href: "/home-program", buttonText: "OR Dallas Home Program", font: "small" },
  cta2: { href: "/volunteer", buttonText: "Family Volunteer Hours", font: "small" }
}

const threeColToggleBlock = {
  _key: "threeColToggle",
  _type: "threeColToggle",
  cards: [
    {
      title: "Academic Excellence",
      description: "Degreed, certified teachers deliver rigorous, individualized instruction so every student is known, challenged, and supported to grow.",
      imageAndAltText: {
        image: {
          asset: {
            _ref: "academic.png"
          }
        },
        altText: "Academic Excellence"
      }
    },
    {
      title: "Faith Formation",
      description: "Students grow in their understanding of God's love and are encouraged to live out their faith with confidence and integrity.",
      imageAndAltText: {
        image: {
          asset: {
            _ref: "faith.png"
          }
        },
        altText: "Faith Formation"
      }
    },
    {
      title: "Purpose & Belonging",
      description: "Through our house system and community culture, students build meaningful relationships and discover their unique purpose.",
      imageAndAltText: {
        image: {
          asset: {
            _ref: "purpose.png"
          }
        },
        altText: "Purpose & Belonging"
      }
    }
  ]
}

const cardGridProps = {
  heading: "Courses and Pathways",
  cards: [
    {
      title: 'Math',
      description: 'On-level and honors options in grades 6 through 8. Grade 8 honors includes Algebra I.',
      image: '/early_education.png',
      altText: 'Students working on math',
      href: '/academics/math',
    },
    {
      title: 'English Language Arts',
      description: 'On-level and honors options focused on reading, writing, and discussion.',
      image: '/early_education.png',
      altText: 'Teacher working with students',
      href: '/academics/english',
    },
    {
      title: 'Science',
      description: 'Discovery-focused science supported by hands-on learning and SMART Lab integration.',
      image: '/early_education.png',
      altText: 'Student doing science experiment',
      href: '/academics/science',
    },
    {
      title: 'Social Studies',
      description: 'World history, Texas history, and U.S. history aligned with TEKS.',
      image: '/early_education.png',
      altText: 'Students in social studies class',
      href: '/academics/social-studies',
    },
    {
      title: 'World Languages',
      description: 'Spanish and Latin offered, with additional options evaluated.',
      image: '/early_education.png',
      altText: 'Language learning classroom',
      href: '/academics/languages',
      fullWidth: true,
    },
    {
      title: 'Fine Arts',
      description: 'Choir, band, theater, and visual art with performances and showcases.',
      image: '/early_education.png',
      altText: 'Students in fine arts class',
      href: '/academics/fine-arts',
    },
    {
      title: 'Health Education',
      description: 'PE and athletics, plus health options in grades 7 and 8.',
      image: '/early_education.png',
      altText: 'Students in PE class',
      href: '/academics/health',
    },
    {
      title: 'Religion',
      description: 'Theology rooted in biblical truth, designed for each grade’s spiritual development.',
      image: '/early_education.png',
      altText: 'Religion class',
      href: '/academics/religion',
    },
  ]
}

export default function AcademicsPage() {
  return (
    <>
      {/* @ts-ignore */}
      {/* <Navigation block={tempNavigationContent} /> */}
      {/* @ts-ignore */}
      <HeroBanner block={tempHeroContent} />
      <Subnav />
      <Intro {...intro} />
      <ImageWithText {...imageWithText} />
      <ThreeColToggle block={threeColToggleBlock} />
      <TwoColBulletsWithCTAs {...twoColBulletsWithCTAsProps} />
      {/* @ts-ignore */}
      <ThreeColCardsTall />
      <CardGrid {...cardGridProps} />
    </>
  )
}