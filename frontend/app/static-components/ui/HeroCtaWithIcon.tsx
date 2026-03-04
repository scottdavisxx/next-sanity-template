import Link from "next/link";
import OrlsIcon from "../icons/orls-icon";

interface HeroCtaWithIconProps {
  href: string;
  buttonText: string;
  newTab?: boolean;
}

export default function HeroCtaWithIcon({ href, buttonText, newTab }: HeroCtaWithIconProps) {
  return (
    <Link target={newTab ? "_blank" : "_self"} href={href} className="flex gap-4 items-center text-dark-blue hover:text-white w-fit uppercase font-bold z-10 transition-all duration-300 group">
      <span className="text-2xl px-6 py-4 bg-white hover:bg-dark-blue transition-all duration-300 rounded-sm
      md:px-24">{buttonText}</span>
      <OrlsIcon useCurrentColor className="text-white group-hover:text-yellow transition-colors duration-300" />
    </Link>
  );
}