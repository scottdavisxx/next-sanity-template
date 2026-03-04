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
    <div className="bg-white py-4
    md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-center py-8 relative container">
        {/* Content */}
        <div className="py-2 border-2 border-dark-blue rounded-t-4xl md:rounded-l-4xl md:rounded-tr-none w-full md:w-[40%] border-b-0 
      md:border-b-2 md:border-r-0 md:py-8">
          <div className="flex flex-col pl-4 pr-4 py-4 md:pl-8 md:pr-0 items-start z-10
        md:py-8">
            <h2 className="text-2xl font-bold text-medium-blue leading-tight w-full md:w-3/4">{title}</h2>
            <p className="text-lg whitespace-pre-line w-full md:w-3/4">{blurb}</p>
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
        <div className="border-2 border-dark-blue rounded-b-4xl bg-white z-10 w-full overflow-hidden border-t-0
      md:border-t-2 md:rounded-4xl md:w-[60%]">
          <Image
            src={image}
            alt={altText}
            width={698} height={533}
            className="relative z-10 rounded-b-4xl md:rounded-4xl w-full object-cover" />
        </div>
      </div>
    </div>
  )
}