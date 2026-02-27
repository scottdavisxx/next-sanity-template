import Image from 'next/image'

export default function TwoColInfoWithImage() {
  return (
    <section className="bg-white px-6 py-12 md:px-16 md:py-14 lg:px-[83px] lg:py-[43px]">

      <h2 className="font-bold text-4xl md:text-6xl lg:text-[70px] text-black leading-tight">
        Middle School At OR Dallas
        <br className="hidden lg:block" />
        {' '}6–8th Grades
      </h2>

      <div className="flex flex-col lg:flex-row items-start mt-8 lg:mt-10 gap-10 lg:gap-12">

        <div className="flex-1 flex flex-col">
          <p className="text-sm md:text-base lg:text-[20px] text-black leading-relaxed">
            Middle school is where students learn to think more deeply, manage more
            responsibility, and develop confidence in who they are. OR Dallas provides
            structure, high expectations, and strong relationships so students grow
            academically, socially, and spiritually during these important years.
          </p>

          <div className="lg:hidden mt-6 rounded-[26px] border-2 border-black overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: '443 / 527' }}>
              <Image
                src="/staff/kara-tobaben.png"
                alt="Dr. Kara Tobaben, Head of School"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="border-2 border-black rounded-[12px] p-8 lg:p-[55px] mt-6 lg:mt-8">
            <h3 className="font-bold text-3xl md:text-4xl lg:text-[48px] text-dark-blue leading-tight">
              Meet Kara Tobaben
            </h3>
            <p className="font-medium italic text-xl md:text-2xl lg:text-[32px] text-black mt-3">
              Head of School
            </p>
            <div className="mt-4 space-y-4 text-sm md:text-base lg:text-[18px] text-black leading-relaxed">
              <p>
                Dr. Kara Tobaben serves as Head of School at Our Redeemer Lutheran School.
                A lifelong Lutheran and experienced educator, she brings more than 25 years
                of leadership and classroom experience across Lutheran elementary, middle,
                and high school settings.
              </p>
              <p>
                Dr. Tobaben holds a Doctorate in Organizational Leadership with a focus on
                differentiated learning and has completed leadership development through
                LCMS FACT, Van Lunen Ascending Leaders, and Principal 360.
              </p>
              <p>
                Committed to shaping hearts and strengthening minds, she ensures every
                student is known, supported, and challenged to reach their God-given
                potential through a partnership between church, school, and family.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:w-[38%] flex-shrink-0 relative">

          <div
            className="absolute bg-white border-2 border-black rounded-[26px] z-0"
            style={{ top: '72px', left: '-2px', right: 0, bottom: '-72px' }}
          />

          <div className="absolute -top-6 right-0 w-[70%] aspect-square z-10 pointer-events-none">
            <img
              src="/staff/orls-L-circle.svg"
              alt=""
              aria-hidden="true"
              className="w-full h-full"
            />
          </div>

          <div className="relative z-20 rounded-[26px] overflow-hidden mt-[54px]">
            <div className="relative w-full" style={{ aspectRatio: '443 / 527' }}>
              <Image
                src="/staff/kara-tobaben.png"
                alt="Dr. Kara Tobaben, Head of School"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
