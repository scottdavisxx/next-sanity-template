import Image from "next/image";

export default function Leadership() {
  return (
    <div className="flex flex-col">
      <div className="bg-dark-blue text-center pt-8 pb-60">
        <h2 className="text-6xl font-bold text-white">OR Dallas Leadership Team</h2>
      </div>
      <div className="flex items-center justify-between px-24 -mt-28">
        <div className="flex flex-col gap 2">
          <Image src="/tobaben.jpg" alt="Person" width={266} height={333} />
          <div className="flex flex-col">
            <span>Dr. Kara Tobaben</span>
            <span>Head of School</span>
          </div>
        </div>
        <div className="flex flex-col gap 2">
          <Image src="/booker.jpg" alt="Person" width={266} height={333} />
          <div className="flex flex-col">
            <span>Sara Booker</span>
            <span>Director of Finance</span>
          </div>
        </div>
        <div className="flex flex-col gap 2">
          <Image src="/mcquire.jpg" alt="Person" width={266} height={333} />
          <div className="flex flex-col">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="flex flex-col gap 2">
          <Image src="/douthwaite.jpg" alt="Person" width={266} height={333} />
          <div className="flex flex-col">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}