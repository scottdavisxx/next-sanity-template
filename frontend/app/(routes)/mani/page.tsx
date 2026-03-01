import { ReactNode } from "react";
import TwoColInfo from "@/app/components/TwoColInfo";
import ThreeColExpandingCards from "@/app/components/ThreeColExpandingCards";
import OneColInfo from "@/app/components/OneColInfo";
import FilteredThreeColCards from "@/app/components/FilteredThreeColCards";
import NumberedList from "@/app/components/NumberedList";
import ThreeColEventCards from "@/app/components/ThreeColEventCards";
import TwoColInfoWithCard from "@/app/components/TwoColInfoWithCard";

// ─── Variant 1: Icon cards (white bg, SVG foreground icon, no photo) ───────────

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

// ─── Variant 2: All-photo cards (bgImage on expanded + collapsed, dark overlay) ─

const photoItems = [
  {
    id: 'story-1',
    expanded: {
      name: 'Student Life',
      tagline: 'A place to belong',
      description: 'Students at ORLS find community, friendship, and purpose through shared faith and academic excellence.',
      bgImage: '/fpo-event-1.jpg',
    },
    collapsed: {
      name: 'Athletics',
      bgImage: '/fpo-event-2.jpg',
    },
  },
  {
    id: 'story-2',
    expanded: {
      name: 'Athletics',
      tagline: 'Compete with character',
      description: 'ORLS athletics develops sportsmanship, discipline, and team spirit in every student-athlete.',
      bgImage: '/fpo-event-2.jpg',
    },
    collapsed: {
      name: 'Community',
      bgImage: '/fpo-event-3.jpg',
    },
  },
  {
    id: 'story-3',
    expanded: {
      name: 'Community',
      tagline: 'Together we grow',
      description: 'Family and school unite to create a community where every child is known, loved, and challenged.',
      bgImage: '/fpo-event-3.jpg',
    },
    collapsed: {
      name: 'Student Life',
      bgImage: '/fpo-event-1.jpg',
    },
  },
]

// ─── Variant 3: CTA cards (white bg expanded + CTA button, photo collapsed) ────

const admissionsItems = [
  {
    id: 'step-1',
    expanded: {
      name: 'Step One: Experience ORLS',
      description: 'A guided campus visit allows you to see classrooms in action, meet members of our team, and ask thoughtful questions about life at ORLS.',
      cta: { label: 'Schedule a Visit', href: '#' },
    },
    collapsed: {
      name: 'Step Two: Submit an Application',
      bgImage: '/fpo-event-2.jpg',
    },
  },
  {
    id: 'step-2',
    expanded: {
      name: 'Step Two: Submit an Application',
      description: 'Complete our application form and submit the required documents. Our team reviews every application with care and intention.',
      cta: { label: 'Apply Now', href: '#' },
    },
    collapsed: {
      name: 'Step Three: Family Conversation',
      bgImage: '/fpo-event-3.jpg',
    },
  },
  {
    id: 'step-3',
    expanded: {
      name: 'Step Three: Family Conversation',
      description: 'Meet with our admissions team to discuss your family\'s goals and how ORLS can support your child\'s journey.',
      cta: { label: 'Learn More', href: '#' },
    },
    collapsed: {
      name: 'Step One: Experience ORLS',
      bgImage: '/fpo-event-1.jpg',
    },
  },
]

// ─── NumberedList data ────────────────────────────────────────────────────────

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

export default function ManiPage() {
  return (
    <>
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
      <TwoColInfoWithCard 
        bg="dark-blue" photoSide="left" 
        heading="Meet Carol Blackwood"
        subtitle="Director of Student Life and Family"
        bio={[
          "Carol Blackwood serves Our Redeemer as part of Student & Family Life, helping strengthen the relationships that make ORLS feel like a close-knit, faith-filled community.",
          "Her love for school culture began early, helping her mom in the front office at her elementary school, where she learned how powerful a warm welcome can be for students and families.",
          "Carol will be overseeing the ORLS House system, building connection, belonging, and school spirit across campus. Guided by Ephesians 4:32, she strives to lead with kindness, compassion, and grace in every interaction.",
        ]}
        photo={{ src: '/staff/carol-blackwood.png', alt: 'Carol Blackwood, Director of Student Life and Family' }}
      />
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
      {/* Variant 1 — Icon cards: white bg, SVG foreground icon */}
      <ThreeColExpandingCards
        heading="Our Four Houses"
        subtitle="Each House is named for a faithful Lutheran leader whose life reflects learning, conviction, and service."
        footnote="*Siblings are placed in the same House, and students remain in their House throughout their ORLS journey."
        arrowLabel="Scroll for next steps"
        sectionBgImage="/beyond-classroom/section-bg.png"
        items={housesItems}
      />
      {/* Variant 2 — All-photo cards: bgImage on every card, dark overlay */}
      <ThreeColExpandingCards
        heading="Family Life at OR Dallas"
        subtitle="Upcoming Events"
        arrowLabel="Scroll for next steps"
        items={photoItems}
      />

      {/* Variant 3 — CTA cards: white bg + CTA on expanded, photo on collapsed */}
      <ThreeColExpandingCards
        heading="The Admissions Process"
        subtitle="At Our Redeemer Lutheran School, admissions is a partnership. We take time to understand your child and your family."
        arrowLabel="Scroll for next steps"
        sectionBgImage="/beyond-classroom/section-bg.png"
        items={admissionsItems}
      />
      <NumberedList title="How Houses Work" items={howHousesWorkItems} />
      <FilteredThreeColCards />
      <TwoColInfo />
      <OneColInfo variant="text" />
      <OneColInfo variant="image" />
    </>
  )
}
