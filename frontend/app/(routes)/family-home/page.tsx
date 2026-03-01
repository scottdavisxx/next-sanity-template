import ThreeColExpandingCards from "@/app/components/ThreeColExpandingCards";
import TwoColInfoWithCard from "@/app/components/TwoColInfoWithCard";

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

export default function TuitionPage() {
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
      <ThreeColExpandingCards {...housesSectionProps} items={housesItems} />
    </>
  )
}
