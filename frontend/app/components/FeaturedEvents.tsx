import Link from "next/link";
import Cta from "./ui/Cta";
import Image from "next/image";
import FakeCta from "./ui/FakeCta";

export default function FeaturedEvents() {
  return (
    <div className="bg-white py-4
    md:py-16">
      <div className="container flex flex-col gap-4 bg-white text-black">
        <h2 className="text-2xl 
      md:text-8xl">Family Life at ORLS:</h2>
        <h3 className="text-xl font-bold text-medium-blue
      md:text-7xl">Upcoming Events</h3>
        <div className="flex flex-col gap-8
      md:flex-row">
          {/* Large Card */}
          <Link href="#" className="flex flex-col justify-end rounded-2xl text-white relative overflow-visible h-[500px] group
        md:w-2/3">
            <Image src="/fpo-event-1.jpg" alt="Event Image" width={765} height={506} className="absolute top-0 left-0 object-cover h-full w-full rounded-2xl z-10" />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/44 group-hover:bg-black/64 transition-all duration-300 rounded-2xl z-20" />
            <div className="flex flex-col gap-4 p-8 z-30 group
          md:w-3/5">
              <span className="z-10 text-5xl font-bold">Event Name</span>
              <span className="z-10 text-xl">Degreed, certified teachers deliver rigorous, individualized instruction so every student is known, challenged, and supported to grow.</span>
              <FakeCta buttonText="View Calendar" className="" />
            </div>
            {/* Offset Border */}
            <div className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300" />
          </Link>
          {/* Temp fix to make this look ok on mobile - Scott */}
          <div className="justify-between text-white w-1/3 gap-4 hidden 
        md:flex">
            {/* Small Card 1 */}
            <Link href="#" className="flex rounded-2xl items-end relative w-1/2 group overflow-visible">
              <Image src="/fpo-event-2.jpg" alt="Event Image" width={765} height={506}
                className="absolute top-0 left-0 object-cover h-full w-full rounded-2xl z-10" />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/44 group-hover:bg-black/64 transition-all duration-300 rounded-2xl z-20" />
              {/* Offset Border */}
              <div className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300" />
              <span className="text-xl font-bold p-4 z-30">Event Name</span>
            </Link>
            {/* Small Card 2 */}
            <Link href="#" className="flex rounded-2xl items-end relative w-1/2 group overflow-visible">
              <Image src="/fpo-event-3.jpg" alt="Event Image" width={765} height={506}
                className="absolute top-0 left-0 object-cover h-full w-full rounded-2xl z-10" />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/44 group-hover:bg-black/64 transition-all duration-300 rounded-2xl z-20" />
              {/* Offset Border */}
              <div className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300" />
              <span className="text-xl font-bold p-4 z-30">Event Name</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}