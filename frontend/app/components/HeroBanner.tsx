import Image from "@/app/components/SanityImage";
import type { HeroBanner } from '@/sanity.types'
import CtaWithIcon from "./ui/CtaWithIcon";
import HeroCtaWithIcon from "./ui/HeroCtaWithIcon";

type HeroBannerProps = {
  block: HeroBanner
  index: number
  pageId: string
  pageType: string
}

export default function HeroBanner({ block }: HeroBannerProps) {
  const image = block?.imageAndAltText?.image;
  const altText = block?.imageAndAltText?.altText || "Hero Banner";

  return (
    <div className="flex flex-col relative h-[650px] justify-end z-0">
      {image?.asset?._ref && (
        <Image
          id={image.asset._ref}
          alt={altText}
          width={1000}
          height={1000}
          crop={image.crop}
          className="absolute w-full h-full object-cover top-0 -z-10"
        />
      )}
      <div className="flex flex-col gap-8 ml-4 mb-16
      md:ml-16">
        <h1 className="text-6xl font-bold relative text-white
        md:text-7xl">
          {block?.titleOne && block.titleOne}
          {block?.titleTwo && <><br />{block.titleTwo}</>}
        </h1>
        {block?.cta && (
          <HeroCtaWithIcon
            href={block.cta.href || "#"}
            buttonText={block.cta.buttonText || "Learn More"}
            newTab={block.cta.newTab}
          />
        )}
      </div>
    </div>
  )
}