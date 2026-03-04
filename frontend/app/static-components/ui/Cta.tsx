import Link from "next/link";

export interface CtaProps {
  href: string;
  buttonText: string;
  newTab?: boolean;
  className?: string;
  buttonColor?: "brand-blue" | "brand-white" | "brand-black";
  dark?: boolean;
  font?: string;
}

const colorConfig = {
  "brand-blue": { bg: "bg-dark-blue", hover: "hover:bg-white hover:text-dark-blue", text: "text-white" },
  "brand-white": { bg: "bg-white", hover: "hover:bg-dark-blue hover:text-white", text: "text-dark-blue" },
  "brand-black": { bg: "bg-black", hover: "hover:bg-white hover:text-black", text: "text-white" },
} as const;

export default function Cta({ href, buttonText, newTab, className, dark, buttonColor, font = "default" }: CtaProps) {

  const color = (buttonColor?.replace(/[\u200B-\u200D\uFEFF]/g, "") || "brand-yellow") as keyof typeof colorConfig;
  const config = colorConfig[color];
  console.log(buttonColor)
  return (
    <Link
      target={newTab ? "_blank" : "_self"}
      href={href}
      className={`flex gap-4 items-center text-center w-fit uppercase font-bold z-10 transition-all duration-300 text-2xl px-12 py-2 rounded-sm 
        ${font == "small" ? "text-xl max-md:text-lg" : "text-2xl"}
       ${buttonColor != undefined ?
          buttonColor ? `${config.bg} ${config.hover} ${config.text}` : null
          :
          dark ? "text-white bg-dark-blue hover:bg-white hover:text-dark-blue" : "text-dark-blue bg-white hover:bg-dark-blue hover:text-white"
        } 
       ${className ? className : ""}`}>
      {buttonText}
    </Link>
  );
}