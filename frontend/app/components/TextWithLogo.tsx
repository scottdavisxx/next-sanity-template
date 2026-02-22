// This section takes the place of the"Three Col Cards" in the wires

import OrlsIcon from "./icons/orls-icon";

interface TextWithLogoProps {
  title: string;
  blurb: string;
}
export default function TextWithLogo({ title, blurb }: TextWithLogoProps) {

  return (
    <div className="bg-white flex flex-col gap-4 text-black py-16 pl-24 relative overflow-hidden">
      <h2 className="text-6xl font-bold w-3/5 leading-20">{title}</h2>
      <p className="w-3/5">{blurb}</p>
      <div className="absolute -right-48 -top-1/5">
        <OrlsIcon width={513} height={513} color="light-blue" />
      </div>
    </div>
  )
}