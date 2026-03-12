'use client'

import { useEffect, useState } from 'react'
import ClubsView from '@/app/components/ClubsView'
import type { PageBuilderSection } from '@/sanity/lib/types'
import { projectId, dataset, apiVersion } from '@/sanity/lib/api'

type BlockProps = {
  index: number
  block: PageBuilderSection
  pageId: string
  pageType: string
}

type ClubsViewBlockType = {
  taxonomyType: 'DQhM7Q' | 'tntDws'
  heading?: string
  subheading?: string
}

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
  clubType?: Array<{ _id: string; prefLabel?: string }>
  enrichmentType?: Array<{ _id: string; prefLabel?: string }>
}

export default function ClubsViewBlock({ block }: BlockProps) {
  const clubsViewBlock = block as unknown as ClubsViewBlockType
  const [clubs, setClubs] = useState<Club[]>([])
  const [loading, setLoading] = useState(true)

  console.log('Block data:', block)

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        // Determine which field to query based on taxonomy type
        const taxonomyField = clubsViewBlock.taxonomyType === 'DQhM7Q' ? 'clubType' : 'enrichmentType'

        // GROQ query to fetch clubs filtered by taxonomy
        const query = `*[_type == "club" && defined(${taxonomyField}) && count(${taxonomyField}) > 0] {
          _id,
          name,
          eyebrow,
          desc,
          imageAndAltText,
          clubType[]-> {
            _id,
            prefLabel
          },
          enrichmentType[]-> {
            _id,
            prefLabel
          }
        }`

        // Direct fetch to Sanity API (Option 3)
        const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`

        const response = await fetch(url)
        const { result } = await response.json()

        console.log('Clubs fetched via direct API:', result)
        console.log('Taxonomy Type:', clubsViewBlock.taxonomyType)
        console.log('Taxonomy Field:', taxonomyField)
        console.log('Number of clubs:', result.length)

        setClubs(result)
      } catch (error) {
        console.error('Error fetching clubs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchClubs()
  }, [clubsViewBlock.taxonomyType])

  if (loading) {
    return <div>Loading clubs...</div>
  }

  return (
    <ClubsView
      clubs={clubs}
      taxonomyType={clubsViewBlock.taxonomyType}
      heading={clubsViewBlock.heading}
      subheading={clubsViewBlock.subheading}
    />
  )
}
