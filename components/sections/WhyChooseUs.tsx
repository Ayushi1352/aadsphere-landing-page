import type { WhyChooseUsData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { swipeItem, swipeRow } from "@/components/ui/swipe";

/** Six reasons as plain white cards */
export const WhyChooseUs = ({ data }: { data?: WhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-alt)] py-[var(--section-gap)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading align="center" label={data.label} title={data.title} description={data.description} />

        <ul data-reveal className={`mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:mt-10 lg:gap-5 ${swipeRow}`}>
          {data.items.map((item) => (
            <li key={item.title} className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-main)] p-5 transition-colors hover:border-[var(--color-primary)] lg:p-6 ${swipeItem}`}>
              <Icon name={item.icon} className="size-8 text-[var(--color-primary)]" />
              <h3 className="mt-3 font-display text-lg font-bold text-[var(--color-heading)]">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
