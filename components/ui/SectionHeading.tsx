import type { HeadingPart } from "@/types/templates.types";

/** Small uppercase label above a heading */
export const SectionLabel = ({ text, className = "" }: { text: string; className?: string }) => (
  <p className={`font-display text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] lg:text-sm ${className}`}>{text}</p>
);

/** Heading text with its highlighted words in maroon */
export const HeadingText = ({ parts }: { parts: HeadingPart[] }) =>
  parts.map((part) => (
    <span key={part.text} className={part.highlight ? "text-[var(--color-primary)]" : ""}>
      {part.text}
    </span>
  ));

type SectionHeadingProps = {
  label: string;
  title: HeadingPart[];
  description?: string;
  align?: "left" | "center";
  descriptionClassName?: string;
  className?: string;
};

/** Section intro used across the page: label, bold title with a highlight, optional text */
export const SectionHeading = ({ label, title, description, align = "left", descriptionClassName = "", className = "" }: SectionHeadingProps) => {
  const center = align === "center";

  return (
    <div data-reveal className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}>
      <SectionLabel text={label} />
      <h2 className="mt-2.5 text-balance font-display text-[1.75rem] font-bold leading-[1.18] tracking-[-0.02em] text-[var(--color-heading)] sm:text-[2.25rem] lg:text-[2.5rem]">
        <HeadingText parts={title} />
      </h2>
      {description && <p className={`mt-3 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-[1rem] ${descriptionClassName}`}>{description}</p>}
    </div>
  );
};
