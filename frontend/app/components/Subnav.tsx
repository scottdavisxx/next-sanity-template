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
    <div className="bg-white hidden md:block relative z-10">
      <nav className="flex justify-between items-center container">
        {subnavItems.map((item) => (
          <Link
            className={`text-center py-8 w-1/6 text-dark-blue uppercase font-bold hover:bg-dark-blue 
            ${pathName === item.href ? "bg-dark-blue  text-white cursor-default" : "hover:text-white "}`}
            href={item.href}
            key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}