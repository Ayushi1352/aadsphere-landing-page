import { site, type AdSphereCtaData, type SectionProps } from "@/data";

/** Plain maroon band under the portfolio, leading down to the contact section */
export default function CtaSection({ data: cta = site.ctaSection, className = "" }: SectionProps<AdSphereCtaData>) {
  return (
    <section className={`bg-brand py-9 lg:py-11 ${className}`}>
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8">
        <div data-reveal>
          <h2 className="font-display text-[1.75rem] font-bold leading-[1.18] tracking-[-0.02em] text-white sm:text-4xl">
            {cta.titleTop} {cta.titleAccent}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">{cta.description}</p>
        </div>
        <a href={cta.button.href} className="inline-flex shrink-0 rounded-lg border border-white bg-white px-7 py-3.5 font-display font-bold text-brand transition-colors hover:bg-brand hover:text-white">
          {cta.button.label}
        </a>
      </div>
    </section>
  );
}
