import Image from "next/image";

export default function ThreeColWithIcons() {
  return (
    <div className="bg-dark-blue py-4 lg:py-12 text-white">
      <div className="container flex flex-col gap-4 items-center justify-between">
        <h2 className="text-4xl font-bold lg:text-7xl">Individualized Support</h2>
        <p className="text-xl text-center 
        lg:text-left lg:text-2xl">
          We support the whole student with resources designed to strengthen learning and well-being.
        </p>
        {/* Columns */}
        <div className="flex flex-col h-full justify-between mt-4
        lg:flex-row">
          {/* Column 1 */}
          <div className="flex flex-col justify-between gap-8 py-6
          lg:border-r-2 lg:border-white lg:max-w-1/3 lg:px-4">
            <div className="flex items-center gap-4">
              <Image src="/threeColTemp.png" alt="Icon 1" width={100} height={100} />
              <p className="text-3xl font-bold w-fit">On-Site Tutoring</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/threeColTemp.png" alt="Icon 1" width={100} height={100} />
              <p className="text-3xl font-bold w-fit">Executive Function Coaching</p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col justify-between gap-8 py-6
          lg:border-r-2 lg:border-white lg:max-w-1/3 lg:px-4">
            <div className="flex items-center gap-4">
              <Image src="/threeColTemp.png" alt="Icon 1" width={100} height={100} />
              <p className="text-3xl font-bold w-fit">Personalized Learning Plans</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/threeColTemp.png" alt="Icon 1" width={100} height={100} />
              <p className="text-3xl font-bold w-fit">Academic Guidance & Counseling</p>
            </div>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col justify-between gap-8 py-6
          lg:max-w-1/3 lg:px-4">
            <div className="flex items-center gap-4">
              <Image src="/threeColTemp.png" alt="Icon 1" width={100} height={100} />
              <p className="text-3xl font-bold w-fit">Tiered Intervention Reading & Math</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/threeColTemp.png" alt="Icon 1" width={100} height={100} />
              <p className="text-3xl font-bold w-fit">Social-Emotional Growth Counseling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}