import type { HeadingPart } from "@/data";

/** Small uppercase label above a heading */
export function SectionLabel({ text, className = "" }: { text: string; className?: string }) {
  return <p className={`font-display text-xs font-bold uppercase tracking-[0.18em] text-brand lg:text-sm ${className}`}>{text}</p>;
}

/** Heading text with its highlighted words in maroon */
export function HeadingText({ parts }: { parts: HeadingPart[] }) {
  return parts.map((part) => (
    <span key={part.text} className={part.highlight ? "text-brand" : ""}>
      {part.text}
    </span>
  ));
}

/** Section intro used across the page: label, bold title with a highlight, optional text */
export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  descriptionClassName = "",
  className = "",
}: {
  label: string;
  title: HeadingPart[];
  description?: string;
  align?: "left" | "center";
  descriptionClassName?: string;
  className?: string;
}) {
  const center = align === "center";

  return (
    <div data-reveal className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}>
      <SectionLabel text={label} />
      <h2 className="mt-2.5 text-balance font-display text-[1.75rem] font-bold leading-[1.18] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[2.5rem]">
        <HeadingText parts={title} />
      </h2>
      {description && <p className={`mt-3 text-sm leading-relaxed text-slate sm:text-base ${descriptionClassName}`}>{description}</p>}
    </div>
  );
}
