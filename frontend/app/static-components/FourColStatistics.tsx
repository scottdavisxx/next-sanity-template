export default function FourColStatistics() {
  return (
    <div className="bg-dark-blue">
      <div className="text-white container">
        <div className="flex flex-col justify-between bg-dark-blue py-8 items-center
      md:flex-row md:py-20">
          <div className="flex flex-col justify-between text-center
        md:w-8/12 md:flex-row">
            <div className="flex flex-col gap-1 py-4 px-3 border-white
          md:border-r">
              <span className="text-4xl font-bold
            md:text-5xl">1,850</span>
              <span className="text-2xl">Schools Nationwide</span>
            </div>
            <div className="flex flex-col gap-1 py-4 px-3 border-white
          md:border-r">
              <span className="text-4xl font-bold
            md:text-5xl">90</span>
              <span className="text-2xl">Countries on 5 Continents</span>
            </div>
            <div className="flex flex-col gap-1 py-4 px-3 border-white
          md:border-r">
              <span className="text-4xl font-bold
            md:text-5xl">162,000</span>
              <span className="text-2xl">Students Nationwide</span>
            </div>
            <div className="flex flex-col gap-1 py-4 px-3">
              <span className="text-4xl font-bold
            md:text-5xl">39%</span>
              <span className="text-2xl">Lutheran Students</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 order-first
        md:order-last md:w-1/4">
            <h3 className="text-4xl font-bold
          md:text-5xl">Did you know?</h3>
            <p className="text-2xl"> LCMS schools include 1,600+ early childhood centers and 800+ elementary schools nationwide.</p>
          </div>
        </div>
      </div>
    </div>
  )
}