import Link from "next/link";

export default function ThreeColCtas() {
  return (
    <div className="bg-white">
      <div className="flex items-stretch w-full text-center">
        <Link href="#" className="flex flex-col gap-2 items-center justify-center w-1/3 border border-black py-16 px-12">
          <h3 className="text-medium-blue text-3xl">Inquire</h3>
          <p className="text-xl">Request more information about OR Dallas</p>
        </Link>
        <Link href="#" className="flex flex-col gap-2 items-center justify-center w-1/3 border border-black py-16 px-12">
          <h3 className="text-medium-blue text-3xl">Explore</h3>
          <p className="text-xl">Attend a visit day, come to the open house, or take a campus tour</p>
        </Link>
        <Link href="#" className="flex flex-col gap-2 items-center justify-center w-1/3 border border-black py-16 px-12">
          <h3 className="text-medium-blue text-3xl">Apply</h3>
          <p className="text-xl">Begin or complete an application to attend OR Dallas</p>
        </Link>
      </div>
    </div>
  )
}