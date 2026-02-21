import Image from "next/image"
import Link from "next/link"

export default function ThreeColCards() {

  const cards = [
    {
      title: "Academic Excellence",
      image: "/three-col-card-1.png",
      altText: "Academic Excellence",
      href: "/academic-excellence",
      linkText: "Learn More"
    },
    {
      title: "Purpose & Belonging",
      image: "/three-col-card-2.png",
      altText: "Purpose & Belonging",
      href: "/academic-excellence",
      linkText: "Learn More"
    },
    {
      title: "Faith Formation",
      image: "/three-col-card-3.png",
      altText: "Academic Excellence",
      href: "/academic-excellence",
      linkText: "Learn More"
    }
  ]


  return (
    <div className="flex px-6 py-8 gap-2 justify-between h-[478px]">
      {cards.map((card) => (
        <div key={card.title} className="flex flex-col gap-2 border border-gray rounded-xl relative w-1/3 items-center justify-center text-black text-4xl font-bold">
          <Image
            src={card.image}
            alt={card.altText}
            width={446}
            height={478}
            className="absolute top-0 left-0 h-full w-full object-cover rounded-xl"
          />
          <h3 className="z-2">{card.title}</h3>
          <Link href={card.href} className="z-2">{card.linkText}</Link>
        </div>
      ))}
    </div>
  )
}