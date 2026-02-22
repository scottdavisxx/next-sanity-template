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
    <div className="flex items-center justify-center py-16 px-24 relative">
      {/* Card */}
      <div className="border-2 border-dark-blue rounded-4xl absolute left-24 bg-white z-10">
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
      <div className=" border-2 border-dark-blue rounded-4xl w-full my-12 relative">
        {/* BG Image */}
        {bgImage && (
          <Image src={bgImage} alt="CTA Card" width={1000} height={1000} className="absolute top-0 left-0 w-full h-full object-cover rounded-4xl" />
        )}
        {/* Icon */}
        {icon && (
          <div className="absolute top-0 right-0">
            <OrlsIcon color="whisper-blue" width={419} height={419} />
          </div>
        )}
        <div className="flex flex-col gap-4 pl-120 pr-20 py-8 relative z-10">
          <h2 className="text-7xl font-bold text-dark-blue leading-tight">{title}</h2>
          <p className="text-lg whitespace-pre-line">{blurb}</p>
          {cta && (
            <Cta {...cta} />
          )}
        </div>
      </div>
    </div>
  )
}