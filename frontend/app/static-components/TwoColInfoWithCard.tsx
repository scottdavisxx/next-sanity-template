import Image from 'next/image'

type Props = {
  bg?: 'white' | 'dark-blue'
  photoSide?: 'left' | 'right'
  heading: string
  subtitle?: string
  bio: string[]
  photo: { src: string; alt: string }
}

export default function TwoColInfoWithCard({
  bg = 'white',
  photoSide = 'right',
  heading,
  subtitle,
  bio,
  photo,
}: Props) {
  const isDark = bg === 'dark-blue'
  const photoOnRight = photoSide === 'right'
  const borderColor = isDark ? 'border-white' : 'border-black'

  return (
    <section className={`${isDark ? 'bg-dark-blue' : 'bg-white'} px-6 py-12 md:px-16 md:py-14 lg:px-[85px] lg:py-[57px]`}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        <h2 className={`font-bold text-3xl md:text-5xl lg:text-[64px] leading-tight ${isDark ? 'text-white' : 'text-dark-blue'} ${photoOnRight ? 'lg:max-w-[57%]' : 'lg:ml-[43%]'}`}>
          {heading}
        </h2>

        {subtitle && (
          <p className={`font-medium italic text-xl md:text-2xl lg:text-[32px] mt-2 lg:mt-3 ${isDark ? 'text-white' : 'text-black'} ${photoOnRight ? 'lg:max-w-[57%]' : 'lg:ml-[43%]'}`}>
            {subtitle}
          </p>
        )}

        {/* Mobile photo — between subtitle and bio card, no absolute positioning */}
        <div className={`lg:hidden mt-6 rounded-[26px] border-2 ${borderColor} overflow-hidden`}>
          <div className="relative w-full" style={{ aspectRatio: '443 / 571' }}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Row: full-width bio card + absolutely positioned photo card */}
        {/* pb-10 (40px) extends row below bio card bottom — photo card bottom anchors here */}
        <div className="relative mt-6 lg:mt-8 lg:pb-10">

          {/* Bio card — full section content width */}
          <div className={`border-2 ${borderColor} rounded-[12px] p-6 lg:p-8`}>
            {/* Text constrained away from the photo side */}
            <div className={photoOnRight ? 'lg:pr-[43%]' : 'lg:pl-[43%]'}>
              {bio.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-sm md:text-base lg:text-[20px] leading-relaxed ${isDark ? 'text-white' : 'text-black'} ${i > 0 ? 'mt-4' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Photo card — desktop only, absolutely positioned */}
          {/* aspect-ratio drives height; bottom-0 anchors photo bottom 40px below bio card bottom */}
          <div
            className={`hidden lg:block absolute bottom-0 w-[40%] rounded-[26px] ${photoOnRight ? 'right-0' : 'left-0'} ${isDark ? 'bg-dark-blue' : 'bg-white'}`}
            style={{ aspectRatio: '443 / 571' }}
          >
            {/* Circular border */}
            <div className={`absolute bottom-0 left-0 right-0 z-0 h-5/6 rounded-[26px] border-2 ${borderColor}`}></div>
            {/* Decorative circle — overflows above, positioned on same side as photo */}
            <div className={`absolute -top-14 w-[66%] aspect-square z-10 pointer-events-none ${photoOnRight ? '-right-14' : '-left-14'}`}>
              <img
                src="/staff/orls-L-circle.svg"
                alt=""
                aria-hidden="true"
                className="w-full h-full"
              />
            </div>

            {/* Photo — fills outer wrapper, bordered and rounded */}
            <div className="absolute inset-0 z-20 rounded-[26px] overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
