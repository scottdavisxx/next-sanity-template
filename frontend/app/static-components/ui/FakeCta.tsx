interface FakeCtaProps {
  buttonText: string;
  className?: string;
}

export default function FakeCta({ buttonText, className }: FakeCtaProps) {
  return (
    <div
      className={`flex gap-4 items-center text-dark-blue group-hover:text-white w-fit uppercase font-bold z-10 transition-all duration-300 text-2xl px-4 py-2 bg-white group-hover:bg-dark-blue rounded-sm 
      ${className} md:px-24 md:py-4`}>
      {buttonText}
    </div>
  );
}