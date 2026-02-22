/** Colors from globals.css @theme - use the theme key without the "text-" prefix */
export type OrlsIconColor =
  | "dark-blue"
  | "medium-blue"
  | "light-blue"
  | "gray"
  | "yellow"
  | "whisper-blue"
  | "white";

export interface OrlsIconProps {
  /** Theme color from globals.css. Maps to text-{color} class. */
  color?: OrlsIconColor;
  width?: number;
  height?: number;
  /** Additional Tailwind classes (e.g. for custom colors) */
  className?: string;
}

const colorToCssVar: Record<OrlsIconColor, string> = {
  "dark-blue": "var(--color-dark-blue)",
  "medium-blue": "var(--color-medium-blue)",
  "light-blue": "var(--color-light-blue)",
  gray: "var(--color-gray)",
  yellow: "var(--color-yellow)",
  "whisper-blue": "var(--color-whisper-blue)",
  white: "var(--color-white, #fff)",
};

export default function OrlsIcon({
  color = "white",
  width = 56,
  height = 56,
  className,
}: OrlsIconProps) {
  const fillColor = colorToCssVar[color];

  return (
    <span className={className} style={{ display: "inline-block", width, height }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 56 56"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M28 0C12.5386 0 0 12.5386 0 28C0 43.4614 12.5386 56 28 56C43.4614 56 56 43.4614 56 28C56 12.5386 43.4614 0 28 0ZM45.1674 33.0703H44.3204V32.271C44.3204 31.3762 44.0818 30.7081 43.6046 30.2667C43.2467 29.9565 42.3639 29.8014 40.9442 29.8014H29.8253V40.9203C29.8253 42.34 29.9804 43.2348 30.2906 43.5807C30.7201 44.0579 31.3882 44.2966 32.2948 44.2966H33.0942V45.1436H22.9536V44.2966H23.7767C24.755 44.2966 25.447 43.9983 25.8645 43.4137C26.115 43.0439 26.2463 42.2207 26.2463 40.9203V29.8014H15.1035C13.6839 29.8014 12.7891 29.9565 12.4431 30.2667C11.9659 30.6962 11.7273 31.3643 11.7273 32.271V33.0703H10.8803V22.9297H11.7273V23.7529C11.7273 24.7311 12.0256 25.4231 12.6101 25.8406C12.98 26.0912 13.8032 26.2105 15.1035 26.2105H26.2463V15.0677C26.2463 13.7674 26.127 12.9323 25.8645 12.5744C25.4589 11.9778 24.755 11.6915 23.7767 11.6915H22.9536V10.8445H33.0942V11.6915H32.2948C31.4001 11.6915 30.732 11.9301 30.2906 12.4073C29.9804 12.7652 29.8253 13.6481 29.8253 15.0677V26.2105H40.9442C42.2446 26.2105 43.0797 26.0912 43.4376 25.8406C44.0341 25.435 44.3204 24.7311 44.3204 23.7529V22.9297H45.1674V33.0703Z" />
      </svg>
    </span>
  );
}