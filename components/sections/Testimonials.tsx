import type { TestimonialsData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";

export const Testimonials = ({ data }: { data?: TestimonialsData }) => {
  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-main)] py-[var(--section-gap)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading align="center" label={data.label} title={data.title} description={data.description} />
        <div data-reveal className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <p className="flex gap-0.5 text-[var(--color-primary)]" role="img" aria-label={data.ratingLabel}>
            {Array.from({ length: data.badge.stars }, (_, n) => (
              <Icon key={n} name="MdStar" className="size-4" />
            ))}
          </p>
          <p className="font-display text-sm font-bold text-[var(--color-heading)]">{data.badge.text}</p>
        </div>

        <div data-reveal className="mt-6 lg:mt-8">
          <TestimonialSlider data={data} />
        </div>
      </div>
    </section>
  );
};
