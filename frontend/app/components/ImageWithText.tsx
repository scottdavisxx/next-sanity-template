import Image from "next/image"

export interface ImageWithTextProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  blurb: string;
  letterWatermark?: string;
}

export default function ImageWithText({
  imageSrc,
  imageAlt,
  title,
  blurb,
}: ImageWithTextProps) {


    console.log(imageSrc)
  return (
    <div className="flex flex-col items-center px-6 py-12 max-w-7xl mx-auto">

      <div className="flex w-full mb-12 justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1100}
            height={556}
          />
      </div>


      <div className="text-center max-w-5xl">
        <h2 className="text-[4.375rem] font-bold mb-6">{title}</h2>
        <p className="text-[1.25rem]">{blurb}</p>
      </div>
    </div>
  )
}
