import Link from "next/link";
import OrlsIcon from "../icons/orls-icon";

interface CtaWithIconProps {
  href: string;
  buttonText: string;
  newTab?: boolean;
}

export default function CtaWithIcon({ href, buttonText, newTab }: CtaWithIconProps) {
  return (
    <Link target={newTab ? "_blank" : "_self"} href={href} className="flex gap-4 items-center text-white hover:text-white w-fit uppercase font-bold z-10 transition-all duration-300 group">
      <span className="px-6 py-2 bg-dark-blue hover:bg-white hover:text-dark-blue transition-all duration-300 rounded-sm
      md:px-2 md:text-lg">{buttonText}</span>
      <OrlsIcon height={44} width={44} useCurrentColor className="text-dark-blue group-hover:text-yellow transition-colors duration-300" />
    </Link>
  );
}