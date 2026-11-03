import type { FaqData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Questions as native <details> (one open at a time via `name`), so the answers work and are findable without JavaScript */
export const Faq = ({ data: faq }: { data?: FaqData }) => {
  if (!faq) return null;

  return (
    <section className="bg-[var(--color-bg-alt)] py-[var(--section-gap)]">
      <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading label={faq.label} title={faq.title} description={faq.description} descriptionClassName="max-sm:hidden" />
          {/* left out on phones and tablets, where the eight questions already fill the screen */}
          <div data-reveal className="mt-6 border-t border-[var(--color-border)] pt-6 max-lg:hidden">
            <h3 className="font-display text-lg font-bold text-[var(--color-heading)]">{faq.help.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{faq.help.text}</p>
            <a
              href={faq.help.button.href}
              className="mt-4 inline-flex rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary)] px-6 py-3 font-display text-sm font-bold text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-primary)]"
            >
              {faq.help.button.label}
            </a>
          </div>
        </div>

        <div data-reveal className="grid content-start gap-1.5 sm:gap-2">
          {faq.items.map((item, index) => (
            <details key={item.question} name="faq" open={index === 0} className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-main)]">
              <summary className="flex list-none items-center justify-between gap-3 px-3.5 py-2 font-display text-sm font-bold leading-snug text-[var(--color-heading)] transition-colors group-open:text-[var(--color-primary)] sm:py-2.5 sm:text-[1rem] lg:px-5 [&::-webkit-details-marker]:hidden">
                {item.question}
                <Icon name="FiPlus" className="size-4 shrink-0 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="px-3.5 pb-2.5 pr-10 text-[0.8125rem] leading-snug text-[var(--color-text-muted)] sm:text-sm sm:leading-relaxed lg:px-5 lg:pr-14">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
