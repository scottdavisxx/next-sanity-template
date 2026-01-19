import NewCta from "./NewCta";
import Image from "@/app/components/SanityImage";
import { HeroBanner } from '@/sanity.types'

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
    <div className="flex flex-col relative h-[950px] justify-end">
      {image?.asset?._ref && (
        <Image
          id={image.asset._ref}
          alt={altText}
          width={1000}
          height={1000}
          crop={image.crop}
          mode="cover"
          className="absolute w-full h-full object-cover top-0 -z-10"
        />
      )}
      <div className="flex flex-col gap-8 ml-16 mb-16">
        <h1 className="text-7xl font-bold relative">
          {block?.titleOne && block.titleOne}
          {block?.titleTwo && <><br />{block.titleTwo}</>}
        </h1>
        {block?.cta && (
          <NewCta
            showIcon
            href={block.cta.href || "#"}
            buttonText={block.cta.buttonText || "Learn More"}
            newTab={block.cta.newTab}
          />
        )}
      </div>
    </div>
  )
}