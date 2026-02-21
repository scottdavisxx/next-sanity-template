"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import OrlsLogo, { LogoColor } from "./icons/orls-logo";
import type { Navigation } from "@/sanity.types";

interface NavigationProps {
  block: Navigation;
  color?: LogoColor;
}
export default function Navigation({
  block
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 250);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-11 py-6 flex justify-between items-center uppercase fixed top-0 left-0 right-0 z-50 font-bold transition-colors duration-600 ${scrolled ? "bg-dark-blue" : ""} ${block?.color === LogoColor.light ? "text-white ho" : "text-dark-blue"}`}
    >
      <Link href="/">
        <OrlsLogo color={block?.color && block.color === 'white' ? LogoColor.light : LogoColor.dark} />
      </Link>
      <Link href="/about" className={`${block?.color === LogoColor.light ? "hover:text-dark-blue" : "hover:text-white"}`}>About ORLS</Link>
      <Link href="/admissions" className={`${block?.color === LogoColor.light ? "hover:text-dark-blue" : "hover:text-white"}`}>Admissions</Link>
      <Link href="/academics" className={`${block?.color === LogoColor.light ? "hover:text-dark-blue" : "hover:text-white"}`}>Academics</Link>
      <Link href="/student-life" className={`${block?.color === LogoColor.light ? "hover:text-dark-blue" : "hover:text-white"}`}>Student Life</Link>
      <Link href="/support" className={`${block?.color === LogoColor.light ? "hover:text-dark-blue" : "hover:text-white"}`}>Support ORLS</Link>
      <Link href="/alumni" className={`${block?.color === LogoColor.light ? "hover:text-dark-blue" : "hover:text-white"}`}>Alumni</Link>
    </nav>
  );
}
