import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex items-center justify-between gap-6 bg-dark-blue text-white py-4 px-24">
      <Image src="/logo-2.png" alt="Logo" width={424} height={239} />
      <div className="flex justify-between gap-8 w-8/12 ">
        <div>
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <p>Phone: <a href="tel:217-368-1465">217-368-1465</a></p>
          <p>Email: <a href="mailto:info@ordallas.org">info@ordallas.org</a></p>
          <p>Office Hours: Monday - Friday 7:30 AM - 4:30 PM</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Address</h3>
          <p>Our Redeemer Lutheran School</p>
          <p>7611 Park Lane</p>
          <p>Dallas, TX 75225</p>
          <p>Proudly serving North Dallas since 1961</p>
        </div>
        <div className="flex flex-col text-nowrap">
          <h3 className="text-2xl font-bold">Helpful Links</h3>
          <Link href="/admissions" className="underline">Admissions</Link>
          <Link href="#" className="underline">Calendar</Link>
          <Link href="#" className="underline">Schedule a Visit</Link>
          <Link href="#" className="underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}