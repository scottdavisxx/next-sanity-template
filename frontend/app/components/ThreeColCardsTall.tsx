import Image from "next/image"
import Cta from "./ui/Cta"

export default function ThreeColCardsTall() {
  const cards = [
    {
      title: "Early Education PK1 to KinderBridge",
      description: "A loving, structured start where children build confidence, curiosity, and readiness through hands-on learning and Christ-centered care.",
      image: "/early_education.png",
      altText: "Early Education",
      href: "/early-education",
      buttonText: "Explore Early Education"
    },
    {
      title: "Elementary Kindergarten to 5th Grade",
      description: "Strong academic foundations and character formation in a joyful, purpose-filled community.",
      image: "/elementary.png",
      altText: "Elementary School",
      href: "/elementary-school",
      buttonText: "Explore Elementary School"
    },
    {
      title: "Middle School 6th Grade to 8th Grade",
      description: "Rigor, independence, and leadership development through departmentalized teaching and meaningful middle school experiences.",
      image: "/middle-school.png",
      altText: "Middle School",
      href: "/middle-school",
      buttonText: "Explore Middle School"
    }
  ]

  return (
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="max-w-[85rem] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-12 gap-12">
          <h2 className="text-[4.375rem] min-md:max-lg:text-[4rem] max-md:[3.5rem] max-sm:text-[3rem] font-bold text-black leading-tight ">
            Explore<br />Each Stage
          </h2>
          <p className="text-[2rem] text-gray-700 max-w-3xl">
            Each division pathway is designed for what students need most at that age, with a consistent standard of excellence and care.
          </p>
        </div>

        <div className="grid max-[769px]:grid-cols-1 max-[769px]:justify-items-center max-[1200px]:grid-cols-2 grid-cols-3 gap-6 ">
          {cards.map((card) => (
            <div key={card.title} className="relative w-[398px]  max-sm:w-[300px] max-sm:h-[550px] max-[769px]:w-[400px] max-[1200px]:w-[95%] max-[1299px]:w-[340px] min-h-[508px] pb-8">
              <div className="absolute border-2 shadow-lg w-[398px] max-sm:hidden max-[769px]:w-[400px] max-[1200px]:w-[95%] max-[1299px]:w-[340px] h-[508px] rounded-3xl top-[30px] left-[25px]" style={{ borderColor: '#242D65' }}></div>

              <div className="relative rounded-3xl group w-[398px] max-sm:w-[300px] max-sm:h-[550px] max-[769px]:w-[400px] max-[1200px]:w-[95%] max-[1299px]:w-[340px] h-[508px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.altText}
                  fill
                  className="object-cover rounded-3xl"
                />

                <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col p-8 text-white">
                  <h3 className="text-[2rem] font-semibold mb-2">{card.title}</h3>
                  <p className="text-xl mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  <Cta
                    href={card.href}
                    buttonText={card.buttonText}
                    buttonColor="brand-white"
                    font="small"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
