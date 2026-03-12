"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import OrlsLogo, { LogoColor } from "./icons/orls-logo";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const SCROLL_THRESHOLD = 250;

type NavigationSubItem = {
  href: string;
  label: string;
};

type NavigationItem = {
  href: string;
  label: string;
  subnav?: NavigationSubItem[];
};

export type NavigationProps = {
  navigationItems: NavigationItem[];
};

export default function Navigation({ navigationItems }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`lg:pr-6 py-4 w-screen flex uppercase fixed top-0 left-0 right-0 z-50 font-bold transition-colors duration-600 bg-dark-blue text-white
        lg:py-6 lg:justify-between lg:items-center
        ${scrolled ? "lg:bg-dark-blue" : "lg:bg-transparent"}`}
    >
      <div className={`flex flex-col justify-between w-full items-start container
      lg:flex-row lg:items-center lg:gap-0 ${isOpen ? "gap-6" : ""}`}>
        <Link href="/" onClick={() => setIsOpen(false)}>
          <OrlsLogo
            color={LogoColor.light}
            className="w-9/12 xl:w-auto"
          />
        </Link>
        <div className={`flex flex-col justify-between gap-10 
        lg:flex-row lg:items-center lg:pl-0 lg:text-center
        ${isOpen ? "h-full" : "h-0 overflow-hidden hidden lg:flex lg:h-auto lg:overflow-visible"}`}>
          {navigationItems.map((item) => (
            <div
              key={item.href}
              className={`relative group ${item.href === "/" ? "lg:hidden" : ""}`}
            >
              <Link
                href={item.href}
                className={`hover:text-white ${pathname === item.href ? "text-yellow lg:text-white underline" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
              {item.subnav && item.subnav.length > 0 && (
                <div className="flex flex-col pl-4 pt-1 lg:pl-0 lg:pt-1 lg:absolute lg:left-0 lg:top-full lg:hidden lg:group-hover:flex lg:min-w-[180px] lg:bg-dark-blue">
                  {item.subnav.map((subitem) => (
                    <Link
                      key={`${subitem.href}-${subitem.label}`}
                      href={subitem.href}
                      className="text-white whitespace-nowrap py-1 lg:py-2 hover:bg-white hover:text-dark-blue"
                      onClick={() => setIsOpen(false)}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div >
      </div >
      {isOpen && <XMarkIcon onClick={handleToggle} className="w-8 h-8 absolute right-5 top-5 lg:hidden" />}
      {!isOpen && <Bars3Icon onClick={handleToggle} className="w-8 h-8 absolute right-5 top-5 lg:hidden" />}
    </nav>
  );
}
