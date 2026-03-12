'use client'

import { useState, useMemo } from 'react'
import Image from '@/app/components/SanityImage'

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

type ClubsViewProps = {
  clubs: Club[]
  taxonomyType: 'DQhM7Q' | 'tntDws'
  heading?: string
  subheading?: string
}

export default function ClubsView({ clubs, taxonomyType, heading, subheading }: ClubsViewProps) {
  const taxonomyField = taxonomyType === 'DQhM7Q' ? 'clubType' : 'enrichmentType'

  const categories = useMemo(() => {
    const categorySet = new Set<string>()
    clubs.forEach((club) => {
      const taxonomies = club[taxonomyField]
      if (taxonomies && taxonomies.length > 0) {
        taxonomies.forEach((taxonomy) => {
          if (taxonomy.prefLabel) {
            categorySet.add(taxonomy.prefLabel)
          }
        })
      }
    })
    return Array.from(categorySet).sort()
  }, [clubs, taxonomyField])

  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || '')

  const filteredClubs = useMemo(() => {
    return clubs.filter((club) => {
      const taxonomies = club[taxonomyField]
      if (!taxonomies || taxonomies.length === 0) return false
      return taxonomies.some((taxonomy) => taxonomy.prefLabel === activeCategory)
    })
  }, [clubs, activeCategory, taxonomyField])

  return (
    <section className="bg-dark-blue px-6 py-10 md:px-16 md:py-14 lg:px-24 lg:py-12">
      <div className="container">
        {heading && (
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center">
            {heading}
          </h2>
        )}
        {subheading && (
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white text-center mt-4">
            {subheading}
          </h3>
        )}

        <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-2 mt-8 lg:mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={
                cat === activeCategory
                  ? 'text-gold font-bold text-base lg:text-xl cursor-pointer'
                  : 'text-sky-blue font-bold text-base lg:text-xl cursor-pointer'
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 lg:gap-8">
          {filteredClubs.length > 0 ? (
            filteredClubs.map((club,index) => (
              <div
                key={club._id + "_" + index}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-white rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                <div className="flex flex-col items-center text-center gap-3 px-6 pt-7 pb-6">
                  <p className="font-bold text-lg md:text-xl lg:text-2xl text-black">{club.name}</p>
                  {club.eyebrow && (
                    <div className="bg-sky-blue rounded-2xl px-4 h-9 flex items-center justify-center">
                      <span className="font-bold italic text-white text-sm lg:text-xl">{club.eyebrow}</span>
                    </div>
                  )}
                  {club.desc && (
                    <p className="text-sm md:text-base lg:text-xl text-black leading-snug">{club.desc}</p>
                  )}
                </div>
                <div className="relative flex-1 min-h-[200px] max-h-[200px] md:min-h-[240px] md:max-h-[240px] lg:min-h-[291px] lg:max-h-[291px] border-2 border-sky-blue rounded-3xl mx-0 overflow-hidden">
                  {club.imageAndAltText?.image ? (
                    <Image
                      id={club.imageAndAltText.image.asset?._ref || ''}
                      alt={club.imageAndAltText.altText || club.name}
                      mode="cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="w-full text-white text-center text-lg mt-8">
              No clubs in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
