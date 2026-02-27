import Image from 'next/image'

export default function TwoColInfoWithCard() {
  return (
    <section className="bg-white px-6 py-12 md:px-16 md:py-14 lg:px-[85px] lg:py-[57px]">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">

        {/* Left column — photo card with depth effect (desktop only) */}
        <div className="hidden lg:block lg:w-[40%] flex-shrink-0">
          <div className="relative pb-[62px]">

            {/* Depth shadow card — same horizontal position as photo, offset 62px down */}
            <div className="absolute inset-x-0 top-[62px] bottom-0 bg-white border-2 border-black rounded-[26px] z-0" />

            {/* Decorative circle — upper left, behind everything */}
            <div className="absolute -top-8 left-0 w-[66%] aspect-square z-10 pointer-events-none">
              <img
                src="/staff/orls-L-circle.svg"
                alt=""
                aria-hidden="true"
                className="w-full h-full"
              />
            </div>

            {/* Photo card — front layer */}
            <div className="relative z-20 rounded-[26px] overflow-hidden">
              <div className="relative w-full" style={{ aspectRatio: '443 / 571' }}>
                <Image
                  src="/staff/linsie-branch.png"
                  alt="Linsie Branch, Director of Student Life and Family"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Right column — heading, subtitle, bio card */}
        <div className="flex-1 flex flex-col">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-[64px] text-dark-blue leading-tight">
            Meet Linsie Branch
          </h2>
          <p className="font-medium italic text-xl md:text-2xl lg:text-[32px] text-black mt-2 lg:mt-3">
            Director of Student Life and Family
          </p>

          {/* Photo — mobile only, between subtitle and bio card */}
          <div className="lg:hidden mt-6 rounded-[26px] border-2 border-black overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: '443 / 571' }}>
              <Image
                src="/staff/linsie-branch.png"
                alt="Linsie Branch, Director of Student Life and Family"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Bio card — mt-10 on desktop matches the Figma gap below the subtitle */}
          <div className="border-2 border-black rounded-[12px] p-6 lg:p-8 mt-6 lg:mt-10">
            <p className="text-sm md:text-base lg:text-[20px] text-black leading-relaxed">
              Linsie Branch serves Our Redeemer as part of Student &amp; Family Life, helping
              strengthen the relationships that make ORLS feel like a close-knit, faith-filled
              community.
            </p>
            <p className="text-sm md:text-base lg:text-[20px] text-black leading-relaxed mt-4">
              Her love for school culture began early, helping her mom in the front office at her
              elementary school, where she learned how powerful a warm welcome can be for students
              and families.
            </p>
            <p className="text-sm md:text-base lg:text-[20px] text-black leading-relaxed mt-4">
              Linsie will be overseeing the ORLS House system, building connection, belonging, and
              school spirit across campus. Guided by Ephesians 4:32, she strives to lead with
              kindness, compassion, and grace in every interaction.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
