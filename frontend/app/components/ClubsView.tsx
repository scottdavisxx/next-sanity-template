'use client'

type Club = {
  _id: string
  name: string
  eyebrow?: string
  desc?: string
  imageAndAltText?: {
    image?: {
      asset?: {
        _ref: string
      }
    }
    altText?: string
  }
  clubType?: Array<{ _id: string }>
  enrichmentType?: Array<{ _id: string }>
}

type ClubsViewProps = {
  clubs: Club[]
  taxonomyType: 'DQhM7Q' | 'tntDws'
  heading?: string
  subheading?: string
}

export default function ClubsView({ clubs, taxonomyType, heading, subheading }: ClubsViewProps) {
  return (
    <div>
      {heading && <h2>{heading}</h2>}
      {subheading && <h3>{subheading}</h3>}
      <p>Clubs loaded: {clubs.length}</p>
      <p>Taxonomy Type: {taxonomyType === 'DQhM7Q' ? 'Club Type' : 'Enrichment Type'}</p>
    </div>
  )
}
