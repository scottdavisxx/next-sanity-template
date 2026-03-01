import Image from "next/image";

export default function Leadership() {
  return (
    <div className="flex flex-col text-white">
      <div className="flex flex-col gap-8 bg-dark-blue text-center pt-10 pb-16">
        <h2 className="text-4xl font-bold text-white
        md:text-6xl">OR Dallas Leadership Team</h2>
        {/* People container */}
        <div className="flex flex-col gap-8 items-center justify-between px-8 text-2xl font-bold
        md:flex-row md:px-24">
          <div className="flex flex-col gap-2">
            <Image src="/tobaben-2.jpg" alt="Person" width={266} height={333} className="rounded-full" />
            <div className="flex flex-col">
              <span>Dr. Kara Tobaben</span>
              <span>Head of School</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src="/booker-2.jpg" alt="Person" width={266} height={333} className="rounded-full" />
            <div className="flex flex-col">
              <span>Sara Booker</span>
              <span>Director of Finance</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src="/mcguire-2.jpg" alt="Person" width={266} height={333} className="rounded-full" />
            <div className="flex flex-col">
              <span>Pastor Brent McGuire</span>
              <span>Lead Pastor</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Image src="/douthwaite-2.jpg" alt="Person" width={266} height={333} className="rounded-full" />
            <div className="flex flex-col">
              <span>Pastor Adam Douthwaite</span>
              <span>Pastor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}