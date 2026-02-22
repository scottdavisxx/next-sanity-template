interface FakeCtaProps {
  buttonText: string;
  className?: string;
}

export default function FakeCta({ buttonText, className }: FakeCtaProps) {
  return (
    <div
      className={`flex gap-4 items-center text-dark-blue group-hover:text-white w-fit uppercase font-bold z-10 transition-all duration-300 text-2xl px-24 py-4 bg-white group-hover:bg-dark-blue rounded-sm ${className}`}>
      {buttonText}
    </div>
  );
}