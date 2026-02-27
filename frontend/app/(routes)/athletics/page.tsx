import { ReactNode } from 'react'
import OneColInfo from "@/app/components/OneColInfo";
import TwoColInfo from "@/app/components/TwoColInfo";
import FilteredThreeColCards from "@/app/components/FilteredThreeColCards";
import NumberedList from "@/app/components/NumberedList"
import ThreeColExpandingCards from "@/app/components/ThreeColExpandingCards";
import TwoColInfoWithCard from "@/app/components/TwoColInfoWithCard";
import TwoColInfoWithImage from "@/app/components/TwoColInfoWithImage";
import ThreeColEventCards from "@/app/components/ThreeColEventCards";

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
      <ThreeColExpandingCards />
      <TwoColInfoWithCard />
      <TwoColInfoWithImage />
      <ThreeColEventCards />
    </>
  )
}
