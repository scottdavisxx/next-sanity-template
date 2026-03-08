import Image from "next/image";
import Cta from "./ui/Cta";

export default function TwoCtasWithImage() {
  return (
    <div className="bg-white py-16">
      <div className="container flex items-center justify-end border border-black rounded-2xl overflow-visible relative">
        {/* BG Image */}
        <div className="absolute bottom-0 top-0 left-0 w-full opacity-10">
          <Image
            src="/early-education/bg-pattern-academics.png"
            alt=""
            width={1305}
            height={551}
            className="object-cover w-full h-full"
          />
        </div>
        <Image
          src="/twoCtasWithImageTemp.png"
          alt="Two Ctas With Image"
          width={439}
          height={633}
          className="absolute bottom-0 hidden md:block md:left-16"
        />
        {/* Content */}
        <div className="flex flex-col justify-between gap-6 z-10 py-4
        md:w-[60%] md:px-10 md:py-12">
          <h2 className="text-4xl  font-bold leading-tight text-balance
          md:text-7xl">Start Your Admissions Journey</h2>
          <p className="text-xl">Choosing a school is a big decision and it is personal. At Our Redeemer, strong academics, strong character, and deep faith in a joyful community are partnered with families to form students who think well, live faithfully, and lead with integrity.</p>
          {/* CTAs */}
          <div className="flex flex-col gap-8 text-center text-balance 
          md:flex-row md:mt-4">
            <div className="flex flex-col gap-2 items-center">
              <p>Request more information about ORLS and what to expect next.</p>
              <Cta
                href="#"
                buttonText="Request Information"
                buttonColor="brand-blue"
                font="small"
                className="w-full justify-center md:w-auto "
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p>Attend a visit day, come to Open House, or take a campus tour.</p>
              <Cta
                href="#"
                buttonText="Schedule Visit"
                buttonColor="brand-blue"
                font="small"
                className="w-full justify-center md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}