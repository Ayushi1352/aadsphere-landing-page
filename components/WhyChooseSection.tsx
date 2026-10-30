import { site, type AdSphereWhyChooseData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { swipeItem, swipeRow } from "@/components/swipe";

/** Six reasons as plain white cards */
export default function WhyChooseSection({ data = site.whyChooseSection, className = "" }: SectionProps<AdSphereWhyChooseData>) {
  return (
    <section className={`bg-cloud py-(--section-gap) ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading align="center" label={data.label} title={data.title} description={data.description} />

        <ul data-reveal className={`mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:mt-10 lg:gap-5 ${swipeRow}`}>
          {data.items.map((item) => (
            <li key={item.title} className={`rounded-xl border border-line bg-page p-5 transition-colors hover:border-brand lg:p-6 ${swipeItem}`}>
              <Icon name={item.icon} className="size-8 text-brand" />
              <h3 className="mt-3 font-display text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
