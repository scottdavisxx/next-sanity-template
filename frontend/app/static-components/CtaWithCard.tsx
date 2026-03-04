import Image from "next/image";
import Cta, { CtaProps } from "./ui/Cta";
import OrlsIcon from "./icons/orls-icon";

export interface CtaWithCardProps {
  title: string;
  blurb: string;
  cta?: CtaProps;
  image: string;
  altText: string;
  bgImage?: string;
  icon?: boolean;
}

export default function CtaWithCard({ title, blurb, cta, image, altText, bgImage, icon }: CtaWithCardProps) {
  return (
    <div className="bg-white py-4
    md:py-16">
      <div className="container flex items-center justify-center py-8 px-2 relative">
        {/* Card */}
        <div className="border-2 border-dark-blue rounded-4xl absolute left-8 bg-white z-10 hidden md:block">
          <Image
            src={image}
            alt={altText}
            width={415} height={537}
            className="p-6 relative z-10" />
          {/* Yellow BG */}
          {image === '/church.png' && (
            <div className="bg-yellow h-9/12 w-[calc(100%-3rem)] absolute bottom-6 left-6"></div>
          )}
        </div>
        {/* Content */}
        <div className=" border-2 border-dark-blue rounded-4xl w-full relative overflow-hidden
      md:my-12">
          {/* BG Image */}
          {bgImage && (
            <Image src={bgImage} alt="CTA Card" width={1000} height={1000} className="absolute top-0 left-0 w-full h-full object-cover rounded-4xl opacity-10" />
          )}
          {/* Icon */}
          {icon && (
            <div className="absolute top-4 right-4 w-3/4
          md:top-0 md:right-0">
              <OrlsIcon color="whisper-blue" width={419} height={419} />
            </div>
          )}
          <div className="flex flex-col gap-4 py-8 relative z-10 px-4 items-center
        md:pl-120 md:pr-20 md:py-8 md:items-start">
            <h2 className="text-4xl font-bold text-dark-blue leading-tight
          md:text-7xl">{title}</h2>
            <p className="text-lg whitespace-pre-line">{blurb}</p>
            {cta && (
              <Cta className="md:mb-6 md:mt-4" {...cta} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}