import { ReactNode } from 'react'
import OneColInfo from "@/app/components/OneColInfo";
import TwoColInfo from "@/app/components/TwoColInfo";
import FilteredThreeColCards from "@/app/components/FilteredThreeColCards";
import NumberedList from "@/app/components/NumberedList"
import ThreeColExpandingCards from "@/app/components/ThreeColExpandingCards";
import TwoColInfoWithCard from "@/app/components/TwoColInfoWithCard";
import TwoColInfoWithImage from "@/app/components/TwoColInfoWithImage";
import ThreeColEventCards from "@/app/components/ThreeColEventCards";
import Calendar from "@/app/components/Calendar";

const howHousesWorkItems: { number?: number; heading: string; body: ReactNode }[] = [
  {
    number: 1,
    heading: 'Commitment',
    body: (
      <p>
        Houses meet throughout the year for community-building events, service projects, and school traditions.
      </p>
    ),
  },
  {
    number: 2,
    heading: 'Points',
    body: (
      <p>
        Points are earned through participation, service, and leadership. The focus is unity, growth, and forming students who lead with integrity.
      </p>
    ),
  },
  {
    number: 3,
    heading: 'What Houses Do',
    body: (
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>House kick-off and welcome moments</li>
        <li>Service projects that families can do together</li>
        <li>Spirit events that build identity and fun</li>
        <li>Cross-grade mentorship and leadership opportunities</li>
        <li>Celebrations that recognize participation and character</li>
      </ul>
    ),
  },
  {
    number: 4,
    heading: 'House Hours',
    body: (
      <>
        <p>
          ORLS families strengthen our community through House Hours. These hours create a shared investment in student life, service, and school traditions.
        </p>
        <p className="mt-4">
          Each family completes 25 per child House Hours per school year. With a max of 50 hours.
        </p>
      </>
    ),
  },
]

const housesItems = [
  {
    id: 'luther',
    expanded: {
      name: 'Luther House',
      tagline: 'Courage In Truth',
      description: 'Luther House represents bold faith, integrity, and the courage to do what is right.',
      icon: '/houses/luther-icon.svg',
    },
    collapsed: {
      name: 'Luther House',
      icon: '/houses/luther-icon.svg',
    },
  },
  {
    id: 'melanchton',
    expanded: {
      name: 'Melanchton House',
      tagline: 'TODO: Tagline',
      description: 'TODO: Description for Melanchton House.',
      icon: '/houses/melanchton-icon.svg',
    },
    collapsed: {
      name: 'Melanchton House',
      icon: '/houses/melanchton-icon.svg',
    },
  },
  {
    id: 'chemnitz',
    expanded: {
      name: 'Chemnitz House',
      tagline: 'TODO: Tagline',
      description: 'TODO: Description for Chemnitz House.',
      icon: '/houses/chemnitz-icon.svg',
    },
    collapsed: {
      name: 'Chemnitz House',
      icon: '/houses/chemnitz-icon.svg',
    },
  },
  {
    id: 'walther',
    expanded: {
      name: 'Walther House',
      tagline: 'TODO: Tagline',
      description: 'TODO: Description for Walther House.',
      icon: '/houses/walther-icon.svg',
    },
    collapsed: {
      name: 'Walther House',
      icon: '/houses/walther-icon.svg',
    },
  },
]

const housesSectionProps = {
  heading: 'Our Four Houses',
  subtitle: 'Each House is named for a faithful Lutheran leader whose life reflects learning, conviction, and service.',
  footnote: '*Siblings are placed in the same House, and students remain in their House throughout their ORLS journey.',
  arrowLabel: 'Scroll for next steps',
  sectionBgImage: '/beyond-classroom/section-bg.png',
}

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
  "titleOne": "Tuition &",
  "titleTwo": "Enrollment"
}

export default function TuitionPage() {
  return (
    <>
      <OneColInfo variant="text" />
      <OneColInfo variant="image" />
      <TwoColInfo />
      <FilteredThreeColCards />
      <NumberedList title="How Houses Work" items={howHousesWorkItems} />
      <ThreeColExpandingCards {...housesSectionProps} items={housesItems} />
      <TwoColInfoWithCard
        bg="white"
        photoSide="right"
        heading="Meet Linsie Branch"
        subtitle="Director of Student Life and Family"
        bio={[
          "Linsie Branch serves Our Redeemer as part of Student & Family Life, helping strengthen the relationships that make ORLS feel like a close-knit, faith-filled community.",
          "Her love for school culture began early, helping her mom in the front office at her elementary school, where she learned how powerful a warm welcome can be for students and families.",
          "Linsie will be overseeing the ORLS House system, building connection, belonging, and school spirit across campus. Guided by Ephesians 4:32, she strives to lead with kindness, compassion, and grace in every interaction.",
        ]}
        photo={{ src: '/staff/linsie-branch.png', alt: 'Linsie Branch, Director of Student Life and Family' }}
      />
      <Calendar title="Athletic Calendar" />
      <TwoColInfoWithImage />
      <ThreeColEventCards
        heading="Beyond The Classroom"
        bgTexture
        cards={[
          { title: 'Character & Leadership', image: '/beyond-classroom/card-placeholder.png', cta: { label: 'Learn More', href: '#' } },
          { title: 'Athletics',              image: '/beyond-classroom/card-placeholder.png', cta: { label: 'Learn More', href: '#' } },
          { title: 'Clubs',                  image: '/beyond-classroom/card-placeholder.png', cta: { label: 'Learn More', href: '#' } },
          { title: 'Traditions',             image: '/beyond-classroom/card-placeholder.png', cta: { label: 'Learn More', href: '#' } },
          { title: 'School Trips',           image: '/beyond-classroom/card-placeholder.png', cta: { label: 'Learn More', href: '#' } },
          { title: 'Family Partnership',     image: '/beyond-classroom/card-placeholder.png', cta: { label: 'Learn More', href: '#' } },
        ]}
      />
    </>
  )
}
