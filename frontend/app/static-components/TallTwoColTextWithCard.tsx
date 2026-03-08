import Image from "next/image";
import Cta from "./ui/Cta";
import OrlsIcon from "../components/icons/orls-icon";

export default function TallTwoColTextWithCard() {
  return (
    <div className=" py-4 
    lg:py-16">
      <div className="container flex flex-col gap-6 relative">
        <h2 className="text-5xl font-bold
        md:text-6xl lg:text-7xl">Enrollment</h2>
        <p className="text-2xl  lg:w-9/12">At ORLS, every decision is guided by long-term vision, strong partnerships with families, and a commitment to forming students well.</p>
        {/* Content Columns */}
        <div className="flex flex-col gap-5
        lg:flex-row lg:w-8/12 lg:gap-16">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-medium-blue">Enrollment Timeline</h3>
            <p className="text-lg">Our primary enrollment season runs from January through April, during which we shape each incoming class with care and intention.</p>
            <p className="text-lg">Applications submitted outside this window are considered selectively, based on availability and alignment with the values, expectations, and academic environment of our school.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-medium-blue">Continuous Enrollment</h3>
            <p className="text-lg">OR Dallas follows a continuous enrollment model that provides stability for families and allows the school to thoughtfully plan for each academic year.</p>
            <p className="text-lg">Once enrolled, students remain enrolled year to year unless families notify the school within the designated withdrawal window. This approach supports consistent community.</p>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-col items-start border rounded-2xl overflow-hidden px-4 py-6
        lg:px-12 lg:py-16">
          <div className="flex flex-col gap-4 relative
          lg:w-8/12">
            {/* ORLS Logo */}
            <OrlsIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" color="whisper-blue" width={319} height={319} />
            <h2 className="text-4xl font-bold
          lg:text-6xl">Meet With Admissions
            </h2>
            <p className="text-lg
            lg:w-[62%]">The best way to understand ORLS is to see it in action. Visit our campus, meet our team, and discover a community where your child can lean, grow, and thrive.</p>
            <div className="flex flex-col gap-4
          lg:flex-row">
              <Cta
                href="#"
                buttonColor="brand-blue"
                font="small"
                buttonText="Meet With Admissions"
                className="w-full justify-center"
              />
              <Cta
                href="#"
                buttonColor="brand-blue"
                font="small"
                buttonText="Inquire"
                className="w-full justify-center"
              />
            </div>
          </div>
        </div>
        {/* Image Card */}
        <div className="hidden absolute -bottom-6 right-0 h-fit w-fit border rounded-2xl p-4 bg-white z-10
        lg:block">
          <Image src="/tall-school.png" alt="Enrollment Card" width={333} height={633} />
        </div>
      </div>
    </div>
  )
}