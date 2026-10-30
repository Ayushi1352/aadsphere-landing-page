import Image from "next/image";
import { site, type AdSphereServicesData, type SectionProps } from "@/data";
import SectionHeading from "@/components/SectionHeading";
import { swipeItem, swipeRow } from "@/components/swipe";

/** Every service as a plain card: photo on top, name below; the whole card links down to the contact section */
export default function ServicesSection({ data: services = site.servicesSection, className = "" }: SectionProps<AdSphereServicesData>) {
  return (
    <section className={`bg-page py-(--section-gap) ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading align="center" label={services.label} title={services.title} description={services.description} />

        <ul data-reveal className={`mt-6 grid gap-3 sm:grid-cols-4 lg:mt-8 lg:gap-5 ${swipeRow}`}>
          {services.cards.map((card) => (
            <li key={card.title} className={swipeItem}>
              <a
                href="#contact"
                aria-label={`${services.cardButton}: ${card.title}`}
                className="group block h-full overflow-hidden rounded-xl border border-line bg-page transition-colors hover:border-brand"
              >
                <span className="relative block aspect-[4/3] overflow-hidden lg:aspect-[5/2]">
                  <Image quality={90} src={card.image} alt="" fill sizes="(min-width: 640px) 300px, 76vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </span>
                <span className="block p-3 lg:px-4">
                  <span className="block text-xs text-slate">{card.category}</span>
                  <span className="mt-0.5 block font-display font-bold leading-snug text-ink transition-colors group-hover:text-brand lg:text-lg">{card.title}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
