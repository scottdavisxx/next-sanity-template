import Image from 'next/image'

interface EventCard {
  title: string
  href: string
  image: string
}

const cards: EventCard[] = [
  { title: 'Character & Leadership', href: '#', image: '/beyond-classroom/card-placeholder.png' },
  { title: 'Athletics',              href: '#', image: '/beyond-classroom/card-placeholder.png' },
  { title: 'Clubs',                  href: '#', image: '/beyond-classroom/card-placeholder.png' },
  { title: 'Traditions',             href: '#', image: '/beyond-classroom/card-placeholder.png' },
  { title: 'School Trips',           href: '#', image: '/beyond-classroom/card-placeholder.png' },
  { title: 'Family Partnership',     href: '#', image: '/beyond-classroom/card-placeholder.png' },
]

function EventCard({ title, href, image }: EventCard) {
  return (
    <div className="relative overflow-hidden rounded-[12px]" style={{ height: '274px' }}>
      <div className="absolute inset-0 border-2 border-[#242d65] rounded-[12px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute right-0 top-0 h-full w-[47%] bg-white border-2 border-[#242d65] rounded-[12px] z-10 flex flex-col">
        <p className="font-bold text-lg lg:text-[24px] text-black leading-tight mt-[59px] mx-6">
          {title}
        </p>
        <div className="mt-auto mx-6 mb-[30px]">
          <a
            href={href}
            className="block w-full bg-[#242d65] text-white text-[15px] font-medium rounded-[5px] py-2 text-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ThreeColEventCards() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-12 md:px-16 md:py-14 lg:px-[76px] lg:py-[37px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
        <img
          alt=""
          aria-hidden="true"
          src="/beyond-classroom/section-bg.png"
          className="absolute h-full max-w-none top-0 object-cover"
          style={{ left: '-4.83%', width: '109.8%' }}
        />
      </div>

      <h2 className="relative font-bold text-4xl md:text-5xl lg:text-[70px] text-black text-center mb-10 lg:mb-[37px]">
        Beyond The Classroom
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-x-[29px] lg:gap-y-[34px]">
        {cards.map((card) => (
          <EventCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}
