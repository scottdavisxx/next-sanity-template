import Image from "next/image";

export default function ThreeColWithIcons() {
  return (
    <div className="bg-dark-blue py-4 md:py-16 text-white">
      <div className="container flex flex-col gap-4 items-center justify-between">
        <h2 className="text-4xl font-bold md:text-7xl">Individualized Support</h2>
        <p className="text-xl md:text-2xl">We support the whole student with resources designed to strengthen learning and well-being.</p>
        {/* Columns */}
        <div className="flex">
          {/* Column 1 */}
          <div className="flex flex-col gap-8 py-6">
            <div className="flex items-center">
              <Image src="/threeColTemp.png" alt="Icon 1" width={100} height={100} />
              <p className="text-4.5xl font-bold">On-Site Tutoring</p>
            </div>
            <div className="flex">
              <Image src="/threeColTemp.png" alt="Icon 1" width={100} height={100} />
              <p className="text-4.5xl font-bold">On-Site Tutoring</p>
            </div>
          </div>
          <div className="bg-white h-full w-px"></div>
          {/* Column 2 */}
          <div className="flex flex-col gap-8 py-6">
            <div className="flex items-center">
              <Image src="/threeColTemp.png" alt="Icon 1" width={100} height={100} />
              <p className="text-4.5xl font-bold">On-Site Tutoring</p>
            </div>
            <div className="flex">
              <Image src="/threeColTemp.png" alt="Icon 1" width={100} height={100} />
              <p className="text-4.5xl font-bold">On-Site Tutoring</p>
            </div>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-8 py-6">
            <div className="flex items-center">
              <Image src="/threeColTemp.png" alt="Icon 1" width={100} height={100} />
              <p className="text-4.5xl font-bold">On-Site Tutoring</p>
            </div>
            <div className="flex">
              <Image src="/threeColTemp.png" alt="Icon 1" width={100} height={100} />
              <p className="text-4.5xl font-bold">On-Site Tutoring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}