import Link from "next/link";
import OrlsLogo, { LogoColor } from "./icons/orls-logo";

interface NavigationProps {
  color?: LogoColor;
}
export default function Navigation({
  color = LogoColor.light,
}: NavigationProps) {
  return (
    <nav
      className={`flex justify-between items-center mt-8 mx-11 uppercase fixed top-0 left-0 right-0 z-50 font-bold ${color === LogoColor.light ? "text-white" : "text-dark-blue"}`}
    >
      <Link href="/">
        <OrlsLogo color={color} />
      </Link>
      <Link href="/admissions">Admissions</Link>
      <Link href="/about">About ORLS</Link>
      <Link href="/academics">Academics</Link>
      <Link href="/student-life">Student Life</Link>
      <Link href="/support">Support ORLS</Link>
      <Link href="/alumni">Alumni</Link>
    </nav>
  );
}
