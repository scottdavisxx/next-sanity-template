import Image from "next/image"

export default function ThreeColCircleImage() {

  const columnContent = [
    {
      name: "First Last",
      blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/person.png",
      altText: "First Last"
    },
    {
      name: "First Last 1",
      blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/person-2.png",
      altText: "First Last"
    },
    {
      name: "First Last 2",
      blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/person-3.png",
      altText: "First Last"
    },
  ]

  return (
    <div className="flex items-center flex-col gap-12 px-8 py-8
    md:px-24 md:py-16">
      <h2 className="text-4xl font-bold text-center
      md:text-6xl">Trusted by Families Across North Texas</h2>
      <div className="flex flex-col justify-between gap-8
      md:flex-row md:px-8">
        {columnContent.map((column) => (
          <div key={column.name} className="flex flex-col items-center text-center gap-4
          md:w-1/3 md:px-6">
            <Image src={column.image} alt={column.altText} width={238} height={238} className="rounded-full" />
            <h3 className="text-4xl font-bold">{column.name}</h3>
            <p>{column.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  )
}