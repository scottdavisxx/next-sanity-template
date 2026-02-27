import Image from 'next/image'
import OrlsIcon from '@/app/components/icons/orls-icon'

interface OneColInfoProps {
  variant: 'text' | 'image'
}

const content = {
  text: {
    title: '26–27 Enrollment Commitment',
  },
  image: {
    title: 'School Choice',
  },
}

export default function OneColInfo({ variant }: OneColInfoProps) {
  const { title } = content[variant]

  return (
    <section className="w-full bg-white px-6 py-10 md:px-16 md:py-14 lg:px-24 lg:py-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
        {/* Title row */}
        <div className="flex items-center justify-center gap-3">
          {/* Mobile icon */}
          <span className="block lg:hidden">
            <OrlsIcon color="dark-blue" width={40} height={40} />
          </span>
          {/* Desktop icon */}
          <span className="hidden lg:block">
            <OrlsIcon color="dark-blue" width={56} height={56} />
          </span>
          <h2 className="font-bold text-3xl md:text-5xl lg:text-[60px] text-dark-blue leading-tight">
            {title}
          </h2>
        </div>

        {/* Body content */}
        {variant === 'text' && (
          <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Because ORLS uses Continuous Enrollment Contracts, your original contract keeps your
              child enrolled through graduation. No forms needed to hold your spot! Simply allow
              the system to process your Comprehensive Fee payment in January. If your plans have
              changed (moving outside the Dallas area or attending another school), please email{' '}
              <a href="mailto:admissions@ordallas.org" className="underline">
                admissions@ordallas.org
              </a>{' '}
              as soon as possible, as many grades are expected to have waitlists.
            </p>

            <p className="font-bold text-lg md:text-2xl">Important Dates</p>

            <p className="text-base md:text-lg">
              <strong>February 27, 2026:</strong> Comprehensive Fee becomes non-refundable
            </p>
            <p className="text-base md:text-lg">
              <strong>March 31, 2026:</strong> Families are financially committed to 2026–27 tuition
            </p>
          </div>
        )}

        {variant === 'image' && (
          <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
            <div className="max-w-sm mx-auto w-full">
              <Image
                src="/early-education/teacher-rachel.png"
                alt="Rachel Schultz, Early Childhood Education Director"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <p className="font-bold text-lg md:text-2xl">
              Our Redeemer Lutheran School (ORLS) is proud to be an eligible private school provider in the Texas Education Freedom Account (TEFA) program!.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
