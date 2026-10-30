import { site, type AdSphereTestimonialsData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function TestimonialsSection({ data = site.testimonialsSection, className = "" }: SectionProps<AdSphereTestimonialsData>) {
  return (
    <section className={`bg-page py-(--section-gap) ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading align="center" label={data.label} title={data.title} description={data.description} />
        <div data-reveal className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <p className="flex gap-0.5 text-brand" role="img" aria-label={data.ratingLabel}>
            {Array.from({ length: data.badge.stars }, (_, n) => (
              <Icon key={n} name="star" className="size-4" />
            ))}
          </p>
          <p className="font-display text-sm font-bold text-ink">{data.badge.text}</p>
        </div>

        <div data-reveal className="mt-6 lg:mt-8">
          <TestimonialSlider data={data} />
        </div>
      </div>
    </section>
  );
}
