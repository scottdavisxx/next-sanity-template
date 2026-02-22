'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const subnavItems = [
  {
    href: "/admissions",
    label: "Admissions"
  },
  {
    href: "/about",
    label: "About ORLS"
  },
  {
    href: "/academics",
    label: "Academics"
  },
  {
    href: "/student-life",
    label: "Student Life"
  },
  {
    href: "/support-orls",
    label: "Support ORLS"
  },
  {
    href: "/alumni",
    label: "Alumni"
  }
]

export default function Subnav() {

  const pathName = usePathname()

  return (
    <nav className="flex justify-between items-center">
      {subnavItems.map((item) => (
        <Link
          className={`text-center py-8 w-1/6 text-dark-blue uppercase font-bold hover:bg-dark-blue 
            ${pathName === item.href ? "underline text-lg font-bold hover:bg-white hover:text-dark-blue cursor-default" : "hover:text-white "}`}
          href={item.href}
          key={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  )
}