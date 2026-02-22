import Image from "next/image"
import Link from "next/link"

export default function ThreeColCards() {

  const cards = [
    {
      title: "Academic Excellence",
      image: "/three-col-card-1.png",
      altText: "Academic Excellence",
      href: "/academic-excellence",
    },
    {
      title: "Purpose & Belonging",
      image: "/three-col-card-2.png",
      altText: "Purpose & Belonging",
      href: "/academic-excellence",
    },
    {
      title: "Faith Formation",
      image: "/three-col-card-3.png",
      altText: "Academic Excellence",
      href: "/academic-excellence",
    }
  ]


  return (
    <div className="flex px-6 py-8 gap-2 justify-between h-[478px]">
      {cards.map((card) => (
        <Link href={card.href} key={card.title} className="group flex flex-col gap-2 border border-gray rounded-xl relative w-1/3 items-center justify-center text-black text-4xl font-bold hover:-translate-y-2 transition-all duration-300">
          <Image
            src={card.image}
            alt={card.altText}
            width={446}
            height={478}
            className="absolute top-0 left-0 h-full w-full object-cover rounded-xl"
          />
          {/* Image overlay */}
          <div className="absolute top-0 left-0 h-full w-full bg-white/45 rounded-xl group-hover:bg-white/75 transition-all duration-300"></div>
          <h3 className="z-2">{card.title}</h3>
          <span className="z-2 group-hover:translate-x-2 transition-all duration-300">→ Learn More</span>
        </Link>
      ))}
    </div>
  )
}