import AbacusIcon from "./icons/abacus-icon"
import CalendarIcon from "./icons/calendar-icon"
import ChildIcon from "./icons/child-icon"
import ColumnIcon from "./icons/column-icon"

export default function StatisticsTwoCol() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 bg-dark-blue text-white py-8 px-6 font-bold
    md:flex-row md:px-20 md:py-16">
      <h2 className="text-4xl font-bold mb-8
      md:w-1/3 md:mb-0 md:text-7xl">Our Impact, Measured.</h2>
      <div className="flex gap-6
      md:gap-24">
        <div className="flex flex-col gap-20">
          <div className="flex gap-4">
            <AbacusIcon />
            <div className="flex flex-col max-w-40">
              <span className="text-3xl md:text-5xl">43</span>
              <span className="text-xl md:text-2xl">Enrichment Options</span>
            </div>
          </div>
          <div className="flex gap-4">
            <CalendarIcon />
            <div className="flex flex-col max-w-40">
              <span className="text-3xl md:text-5xl">64</span>
              <span className="text-xl md:text-2xl">Years Serving in Dallas</span>
            </div>
          </div>
        </div>
        {/* Horizontal Line */}
        <div className="bg-white w-px hidden md:block"></div>
        <div className="flex flex-col gap-20">
          <div className="flex gap-4">
            <ChildIcon />
            <div className="flex flex-col max-w-40">
              <span className="text-3xl md:text-5xl">230</span>
              <span className="text-xl md:text-2xl">Total Students</span>
            </div>
          </div>
          <div className="flex gap-4">
            <ColumnIcon />
            <div className="flex flex-col max-w-40">
              <span className="text-3xl md:text-5xl">55</span>
              <span className="text-xl md:text-2xl">Teachers & Faculty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}