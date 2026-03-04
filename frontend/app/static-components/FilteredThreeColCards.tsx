'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Club {
  name: string
  grades: string
  category: string
  description: string
  image: string
}

const CATEGORIES = [
  'STEM & STRATEGY',
  'WRITING & LITERATURE',
  'ARTS',
  'LIFE SKILLS',
  'LEADERSHIP',
  'FAITH BASED',
]

const clubs: Club[] = [
  {
    name: 'SPARK Club',
    grades: 'Grades K–3',
    category: 'STEM & STRATEGY',
    description:
      'Builds a global mindset through geography games, culture, landmarks, currencies, and diplomacy role-play.',
    image: '/clubs/club-placeholder.png',
  },
  {
    name: 'Robotics Club',
    grades: 'Grades 3–5',
    category: 'STEM & STRATEGY',
    description:
      'Collaborative problem-solving through hands-on building, design, and iterative challenges.',
    image: '/clubs/club-placeholder.png',
  },
  {
    name: 'Chess Club',
    grades: 'Grades K–2',
    category: 'STEM & STRATEGY',
    description:
      'Builds strategy, patience, and critical thinking through guided play and instruction.',
    image: '/clubs/club-placeholder.png',
  },
]

export default function FilteredThreeColCards() {
  const [activeCategory, setActiveCategory] = useState<string>('STEM & STRATEGY')
  const filteredClubs = clubs.filter((c) => c.category === activeCategory)

  return (
    <section className="bg-dark-blue px-6 py-10 md:px-16 md:py-14 lg:px-24 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center">
          Student Clubs
        </h2>

        <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-2 mt-8 lg:mt-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={
                cat === activeCategory
                  ? 'text-gold font-bold text-base lg:text-xl'
                  : 'text-sky-blue font-bold text-base lg:text-xl'
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 lg:gap-8">
          {filteredClubs.length > 0 ? (
            filteredClubs.map((club) => (
              <div key={club.name} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-white rounded-3xl overflow-hidden flex flex-col justify-between">
                <div className="flex flex-col items-center text-center gap-3 px-6 pt-7 pb-6">
                  <p className="font-bold text-lg md:text-xl lg:text-2xl text-black">{club.name}</p>
                  <div className="bg-sky-blue rounded-2xl px-4 h-9 flex items-center justify-center">
                    <span className="font-bold italic text-white text-sm lg:text-xl">{club.grades}</span>
                  </div>
                  <p className="text-sm md:text-base lg:text-xl text-black leading-snug">{club.description}</p>
                </div>
                <div className="relative flex-1 min-h-[200px] max-h-[200px] md:min-h-[240px] md:max-h-[240px] lg:min-h-[291px] lg:max-h-[291px] border-2 border-sky-blue rounded-3xl mx-0 overflow-hidden">
                  <Image
                    src={club.image}
                    alt={club.name}
                    fill
                    className="object-cover"
                  />
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
