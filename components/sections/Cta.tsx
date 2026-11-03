import type { CtaData } from "@/types/templates.types";

/** Plain maroon band under the portfolio, leading down to the contact section */
export const Cta = ({ data: cta }: { data?: CtaData }) => {
  if (!cta) return null;

  return (
    <section className="bg-[var(--color-primary)] py-9 lg:py-11">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8">
        <div data-reveal>
          <h2 className="font-display text-[1.75rem] font-bold leading-[1.18] tracking-[-0.02em] text-[var(--color-white)] sm:text-[2.25rem]">
            {cta.titleTop} {cta.titleAccent}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-white-85)] sm:text-[1rem]">{cta.description}</p>
        </div>
        <a
          href={cta.button.href}
          className="inline-flex shrink-0 rounded-lg border border-[var(--color-white)] bg-[var(--color-white)] px-7 py-3.5 font-display font-bold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]"
        >
          {cta.button.label}
        </a>
      </div>
    </section>
  );
};
