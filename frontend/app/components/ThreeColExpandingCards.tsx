'use client'

import { useState } from 'react'

interface House {
  name: string
  tagline: string
  description: string
  icon: string
}

const houses: House[] = [
  {
    name: 'Luther House',
    tagline: 'Courage In Truth',
    description: 'Luther House represents bold faith, integrity, and the courage to do what is right.',
    icon: '/houses/luther-icon.svg',
  },
  {
    name: 'Melanchton House',
    tagline: 'TODO: Tagline',
    description: 'TODO: Description for Melanchton House.',
    icon: '/houses/melanchton-icon.svg',
  },
  {
    name: 'Chemnitz House',
    tagline: 'TODO: Tagline',
    description: 'TODO: Description for Chemnitz House.',
    icon: '/houses/chemnitz-icon.svg',
  },
  {
    name: 'Walther House',
    tagline: 'TODO: Tagline',
    description: 'TODO: Description for Walther House.',
    icon: '/houses/walther-icon.svg',
  },
]

export default function ThreeColExpandingCards() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i - 1 + houses.length) % houses.length)
  const next = () => setActiveIndex((i) => (i + 1) % houses.length)

  const activeHouse = houses[activeIndex]
  const card1 = houses[(activeIndex + 1) % 4]
  const card2 = houses[(activeIndex + 2) % 4]

  return (
    <section className="relative overflow-hidden bg-white px-6 py-12 md:px-16 md:py-16 lg:px-[86px] lg:py-[37px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
        <img
          alt=""
          aria-hidden="true"
          src="/beyond-classroom/section-bg.png"
          className="absolute h-full max-w-none top-0 object-cover"
          style={{ left: '-4.83%', width: '109.8%' }}
        />
      </div>
      <h2 className="relative font-bold text-4xl md:text-5xl lg:text-[70px] text-black">Our Four Houses</h2>
      <p className="relative text-base md:text-lg lg:text-[24px] text-black mt-3">
        Each House is named for a faithful Lutheran leader whose life reflects learning, conviction, and service.
      </p>

      {/* Desktop layout */}
      <div className="relative hidden md:flex flex-row gap-4 lg:gap-6 mt-8 items-stretch">
        {/* Expanded active card */}
        <div
          style={{ flex: '7 7 0%', transition: 'flex 0.5s ease-in-out' }}
          className="relative overflow-hidden bg-white border-2 border-[#242d65] rounded-[15px] flex flex-col justify-between p-6 lg:p-8 min-h-[383px]"
        >
          <div className="max-w-[55%]">
            <p className="font-bold text-xl lg:text-[32px] text-black">{activeHouse.name}</p>
            <p className="font-medium italic text-[#355ba5] text-base lg:text-[24px] mt-1">{activeHouse.tagline}</p>
            <p className="text-black text-sm lg:text-[24px] mt-4 leading-snug">{activeHouse.description}</p>
          </div>

          <div className="mt-6 flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <button onClick={prev} aria-label="Previous house" className="size-[37px] flex items-center justify-center cursor-pointer">
                <img src="/houses/arrow-right.svg" alt="" className="size-full rotate-180" />
              </button>
              <button onClick={next} aria-label="Next house" className="size-[37px] flex items-center justify-center cursor-pointer">
                <img src="/houses/arrow-right.svg" alt="" className="size-full" />
              </button>
            </div>
            <p className="font-semibold text-[#355ba5] text-xs lg:text-[14px]">Scroll for next steps</p>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[200px] lg:w-[240px] h-[280px] lg:h-[318px]">
            <img src={activeHouse.icon} alt={activeHouse.name} className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Collapsed card — offset +1 */}
        <div
          style={{ flex: '2 2 0%', transition: 'flex 0.5s ease-in-out' }}
          className="relative group cursor-pointer"
          onClick={() => setActiveIndex((activeIndex + 1) % 4)}
        >
          <div className="absolute inset-0 rounded-[12px] border-2 border-[#242d65] translate-x-3 translate-y-3 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-white border-2 border-[#242d65] rounded-[12px] h-full min-h-[383px] flex flex-col items-center justify-between py-6 px-2 overflow-hidden">
            <div className="flex-1 flex items-center justify-center w-full">
              <img src={card1.icon} alt={card1.name} className="w-[80%] max-h-[250px] object-contain" />
            </div>
            <p className="font-bold text-[14px] lg:text-[20px] text-black text-center mt-3">{card1.name}</p>
          </div>
        </div>

        {/* Collapsed card — offset +2 */}
        <div
          style={{ flex: '2 2 0%', transition: 'flex 0.5s ease-in-out' }}
          className="relative group cursor-pointer"
          onClick={() => setActiveIndex((activeIndex + 2) % 4)}
        >
          <div className="absolute inset-0 rounded-[12px] border-2 border-[#242d65] translate-x-3 translate-y-3 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-white border-2 border-[#242d65] rounded-[12px] h-full min-h-[383px] flex flex-col items-center justify-between py-6 px-2 overflow-hidden">
            <div className="flex-1 flex items-center justify-center w-full">
              <img src={card2.icon} alt={card2.name} className="w-[80%] max-h-[250px] object-contain" />
            </div>
            <p className="font-bold text-[14px] lg:text-[20px] text-black text-center mt-3">{card2.name}</p>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="relative flex md:hidden mt-8">
        <div className="w-full bg-white border-2 border-[#242d65] rounded-[15px] flex flex-col p-6 min-h-[320px]">
          <p className="font-bold text-2xl text-black">{activeHouse.name}</p>
          <p className="font-medium italic text-[#355ba5] text-base mt-1">{activeHouse.tagline}</p>
          <p className="text-black text-sm mt-4 leading-snug">{activeHouse.description}</p>
          <div className="mt-auto pt-6 flex items-center justify-center">
            <img src={activeHouse.icon} alt={activeHouse.name} className="h-[180px] object-contain" />
          </div>
          <div className="flex flex-row items-center gap-3 mt-4">
            <button onClick={prev} className="size-[37px] cursor-pointer">
              <img src="/houses/arrow-right.svg" alt="Previous" className="size-full rotate-180" />
            </button>
            <button onClick={next} className="size-[37px] cursor-pointer">
              <img src="/houses/arrow-right.svg" alt="Next" className="size-full" />
            </button>
            <p className="font-semibold text-[#355ba5] text-xs">Scroll for next steps</p>
          </div>
        </div>
      </div>

      <p className="relative font-semibold italic text-[#242d65] text-sm lg:text-[25px] mt-6">
        *Siblings are placed in the same House, and students remain in their House throughout their ORLS journey.
      </p>
    </section>
  )
}
