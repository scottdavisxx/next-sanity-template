import Link from "next/link";

interface CtaProps {
  href: string;
  buttonText: string;
  newTab?: boolean;
  className?: string;
}

export default function Cta({ href, buttonText, newTab, className }: CtaProps) {
  return (
    <Link
      target={newTab ? "_blank" : "_self"}
      href={href}
      className={`flex gap-4 items-center text-dark-blue hover:text-white w-fit uppercase font-bold z-10 transition-all duration-300 text-2xl px-24 py-4 bg-white hover:bg-dark-blue rounded-sm ${className}`}>
      {buttonText}
    </Link>
  );
}