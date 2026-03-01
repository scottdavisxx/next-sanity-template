export default function FourColStatistics() {
  return (
    <div className="text-white bg-white">
      <div className="flex justify-between bg-dark-blue px-16 py-20 items-center">
        <div className="flex w-8/12 justify-between text-center">
          <div className="flex flex-col gap-1 py-4 px-3 border-r border-white">
            <span className="text-5xl font-bold">1,850</span>
            <span className="text-2xl">Schools Nationwide</span>
          </div>
          <div className="flex flex-col gap-1 py-4 px-3 border-r border-white">
            <span className="text-5xl font-bold">90</span>
            <span className="text-2xl">Countries on 5 Continents</span>
          </div>
          <div className="flex flex-col gap-1 py-4 px-3 border-r border-white">
            <span className="text-5xl font-bold">162,000</span>
            <span className="text-2xl">Students Nationwide</span>
          </div>
          <div className="flex flex-col gap-1 py-4 px-3">
            <span className="text-5xl font-bold">39%</span>
            <span className="text-2xl">Lutheran Students</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/4">
          <h3 className="text-5xl font-bold">Did you know?</h3>
          <p className="text-2xl"> LCMS schools include 1,600+ early childhood centers and 800+ elementary schools nationwide.</p>
        </div>
      </div>
    </div>
  )
}