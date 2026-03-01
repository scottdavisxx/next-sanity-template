import Image from "next/image";
import CtaWithIcon from "./ui/CtaWithIcon";

const block = {
  cta: {
    buttonText: "Learn About Our Next Phase",
    href: "#",
    newTab: true,
  }
}

export interface CtaWithMediaCardProps {
  title: string;
  blurb: string;
  image: string;
  altText: string;
}

export default function CtaWithMediaCard({ title, blurb, image, altText }: CtaWithMediaCardProps) {
  return (
    <div className="flex items-center justify-center py-16 px-24 relative">
      {/* Content */}
      <div className="py-8 border-2 border-dark-blue rounded-l-4xl w-[40%] border-r-0">
        <div className="flex flex-col pl-8 py-8 items-start z-10">
          <h2 className="text-2xl font-bold text-medium-blue leading-tight w-3/4">{title}</h2>
          <p className="text-lg whitespace-pre-line w-3/4">{blurb}</p>
          {block.cta && (
            <div className="flex items-center gap-1 mt-4">
              <CtaWithIcon
                href={block.cta.href || "#"}
                buttonText={block.cta.buttonText || "Learn More"}
                newTab={block.cta.newTab}
              />
            </div>
          )}
        </div>
      </div>
      {/* Card */}
      <div className="border-2 border-dark-blue rounded-4xl bg-white z-10 w-fit">
        <Image
          src={image}
          alt={altText}
          width={698} height={533}
          className="relative z-10 rounded-4xl" />
      </div>
    </div>
  )
}