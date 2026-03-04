// This section takes the place of the"Three Col Cards" in the wires

import OrlsIcon from "./icons/orls-icon";

interface TextWithLogoProps {
  title: string;
  blurb: string;
}
export default function TextWithLogo({ title, blurb }: TextWithLogoProps) {

  return (
    <div className="container">
      <div className="flex flex-col gap-4 text-black py-6 relative
      md:overflow-visible md:py-16 md:px-0">
        <h2 className="text-4xl font-bold
        md:text-6xl md:leading-20 md:w-3/5">{title}</h2>
        <p className="md:w-3/5">{blurb}</p>
        <div className="absolute -right-48 -top-1/5 -z-10">
          <OrlsIcon width={513} height={513} color="light-blue" />
        </div>
      </div>
    </div>
  )
}