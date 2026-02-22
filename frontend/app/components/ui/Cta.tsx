import Link from "next/link";

export interface CtaProps {
  href: string;
  buttonText: string;
  newTab?: boolean;
  className?: string;
  dark?: boolean
}

export default function Cta({ href, buttonText, newTab, className, dark }: CtaProps) {
  return (
    <Link
      target={newTab ? "_blank" : "_self"}
      href={href}
      className={`flex gap-4 items-center w-fit uppercase font-bold z-10 transition-all duration-300 text-2xl px-12 py-2 rounded-sm 
      ${dark ? "text-white bg-dark-blue hover:bg-white hover:text-dark-blue" : "text-dark-blue bg-white hover:bg-dark-blue hover:text-white"} ${className}`}>
      {buttonText}
    </Link>
  );
}