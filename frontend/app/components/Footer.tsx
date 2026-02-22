import Image from "next/image"

export default function Footer() {
  return (
    <footer className="flex items-center justify-between gap-6 bg-dark-blue text-white py-4 px-24">
      <Image src="/logo-2.png" alt="Logo" width={424} height={239} />
      <div>
        <h3>Contact Us</h3>
      </div>
      <div>
        <h3>Address</h3>
      </div>
      <div>
        <h3>Helpful Links</h3>
      </div>
    </footer>
  )
}