import Link from "next/link";
import OrlsIcon from "./icons/orls-icon";

interface CtaProps {
  href: string;
  buttonText: string;
  newTab?: boolean;
  showIcon?: boolean;
}

export default function Cta({ href, buttonText, newTab, showIcon = false }: CtaProps) {
  return (
    <Link target={newTab ? "_blank" : "_self"} href={href} className="flex gap-4 items-center text-dark-blue w-fit uppercase font-bold z-10">
      <span className="text-2xl px-24 py-4 bg-white rounded-sm">{buttonText}</span>
      {showIcon && <OrlsIcon />}
    </Link>
  );
}