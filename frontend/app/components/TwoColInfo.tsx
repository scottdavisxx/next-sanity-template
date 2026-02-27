export default function TwoColInfo() {
  return (
    <section className="relative overflow-hidden bg-dark-blue px-6 py-10 md:px-16 md:py-14 lg:px-[119px] lg:py-[47px]">
      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
        <img
          src="/early-education/tuition-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute w-[126%] h-[133%] -left-[12%] -top-[7%] object-cover max-w-none"
        />
      </div>

      {/* Header row */}
      <div className="relative flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
        <div className="lg:w-[30%] flex-shrink-0">
          <h2 className="font-bold text-4xl md:text-5xl lg:text-[70px] text-white leading-tight">
            Tuition And Fees
          </h2>
        </div>
        <div className="lg:w-[70%] lg:pb-3">
          <p className="text-base md:text-lg lg:text-2xl font-semibold italic text-white leading-relaxed">
            2026–2027 Tuition is billed in 10 monthly payments July through May. No tuition is due in January.
          </p>
        </div>
      </div>

      {/* Tuition grid */}
      <div className="relative mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-20">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-base md:text-lg lg:text-2xl font-bold text-white">Middle School Tuition</p>
            <p className="text-base md:text-lg lg:text-2xl font-bold text-yellow">6th though 8th Grade</p>
            <p className="text-sm md:text-base lg:text-xl text-white mt-1">$1,590 per month</p>
          </div>

          <div>
            <p className="text-base md:text-lg lg:text-2xl font-bold text-white">Elementary School Tuition</p>
            <p className="text-base md:text-lg lg:text-2xl font-bold text-yellow">Kindergarten through 5th Grade</p>
            <p className="text-sm md:text-base lg:text-xl text-white mt-1">$1,590 per month</p>
          </div>

          <div>
            <p className="text-base md:text-lg lg:text-2xl font-bold text-white">Early Childhood Tuition</p>
            <p className="text-base md:text-lg lg:text-2xl font-bold text-yellow">KinderBridge</p>
            <p className="text-sm md:text-base lg:text-xl text-white mt-1">
              5 Day Tuition | $1,590 Full Day | $1,190 Half Day
            </p>
          </div>

          <div>
            <p className="text-base md:text-lg lg:text-2xl font-bold text-white">Early Childhood Tuition</p>
            <p className="text-base md:text-lg lg:text-2xl font-bold text-yellow">PK4</p>
            <p className="text-sm md:text-base lg:text-xl text-white mt-1">
              5 Day Tuition | $1,410 Full Day | $1,060 Half Day
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-base md:text-lg lg:text-2xl font-bold text-white">Early Childhood Tuition</p>
            <p className="text-base md:text-lg lg:text-2xl font-bold text-yellow">PK3</p>
            <div className="flex flex-col gap-1 mt-1">
              <p className="text-sm md:text-base lg:text-xl text-white">
                5 Day Tuition | $1,410 Full Day | $1,060 Half Day
              </p>
              <p className="text-sm md:text-base lg:text-xl text-white">
                3 Day (MWF) Tuition | $960 Full Day | $720 Half Day
              </p>
              <p className="text-sm md:text-base lg:text-xl text-white">
                2 Day (T/Th) Tuition | $710 Full Day | $530 Half Day
              </p>
            </div>
          </div>

          <div>
            <p className="text-base md:text-lg lg:text-2xl font-bold text-white">Early Childhood Tuition</p>
            <p className="text-base md:text-lg lg:text-2xl font-bold text-yellow">PK1 and PK2</p>
            <div className="flex flex-col gap-1 mt-1">
              <p className="text-sm md:text-base lg:text-xl text-white">
                5 Day Tuition | $1,580 Full Day | $1,070 Half Day
              </p>
              <p className="text-sm md:text-base lg:text-xl text-white">
                3 Day (MWF) Tuition | $1,190 Full Day | $800 Half Day
              </p>
              <p className="text-sm md:text-base lg:text-xl text-white">
                2 Day (T/Th) Tuition | $790 Full Day | $590 Half Day
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
