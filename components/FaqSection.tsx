import { site, type AdSphereFaqData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";

/** Questions as native <details> (one open at a time via `name`), so the answers work and are findable without JavaScript */
export default function FaqSection({ data: faq = site.faqSection, className = "" }: SectionProps<AdSphereFaqData>) {
  return (
    <section className={`bg-cloud py-(--section-gap) ${className}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading label={faq.label} title={faq.title} description={faq.description} descriptionClassName="max-sm:hidden" />
          {/* left out on phones and tablets, where the eight questions already fill the screen */}
          <div data-reveal className="mt-6 border-t border-line pt-6 max-lg:hidden">
            <h3 className="font-display text-lg font-bold text-ink">{faq.help.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate">{faq.help.text}</p>
            <a href={faq.help.button.href} className="mt-4 inline-flex rounded-lg border border-brand bg-brand px-6 py-3 font-display text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand">
              {faq.help.button.label}
            </a>
          </div>
        </div>

        <div data-reveal className="grid content-start gap-1.5 sm:gap-2">
          {faq.items.map((item, index) => (
            <details key={item.question} name="faq" open={index === 0} className="group rounded-xl border border-line bg-page">
              <summary className="flex list-none items-center justify-between gap-3 px-3.5 py-2 font-display text-sm font-bold leading-snug text-ink transition-colors group-open:text-brand sm:py-2.5 sm:text-base lg:px-5 [&::-webkit-details-marker]:hidden">
                {item.question}
                <Icon name="plus" className="size-4 shrink-0 text-brand transition-[rotate] duration-300 group-open:rotate-45" />
              </summary>
              <p className="px-3.5 pb-2.5 pr-10 text-[0.8125rem] leading-snug text-slate sm:text-sm sm:leading-relaxed lg:px-5 lg:pr-14">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
