import Link from "next/link";

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
    href: "/support",
    label: "Support ORLS"
  },
  {
    href: "/alumni",
    label: "Alumni"
  }
]
export default function Subnav() {
  return (
    <nav className="flex justify-between items-center">
      {subnavItems.map((item) => (
        <Link className="text-center py-8 w-1/6 text-dark-blue uppercase font-bold hover:bg-dark-blue hover:text-white" href={item.href} key={item.href}>{item.label}</Link>
      ))}
    </nav>
  )
}