import Image from "next/image";
import type { AboutUsData } from "@/types/templates.types";
import { CountUp } from "@/components/ui/CountUp";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** The website's About Us page: one photo beside the company story and the four key figures */
export const AboutUs = ({ data: about }: { data?: AboutUsData }) => {
  if (!about) return null;
  const { images, stats } = about;

  return (
    <section className="bg-[var(--color-bg-main)] py-[var(--section-gap)]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16 lg:px-8">
        <div data-reveal className="relative h-44 overflow-hidden rounded-2xl sm:h-72 lg:h-[33rem]">
          <Image quality={90} src={images.primary.src} alt={images.primary.alt} fill sizes="(min-width: 1024px) 560px, 92vw" className="object-cover" />
        </div>

        <div>
          <SectionHeading label={about.tagline.join(" / ")} title={about.title} description={about.description} />
          {/* the longer story is left out on phones, so the section still fits on one screen */}
          <div data-reveal className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--color-text-muted)] max-sm:hidden sm:text-[1rem]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl data-reveal className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[var(--color-border)] pt-5 sm:grid-cols-4 lg:mt-6 lg:pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-[var(--color-primary)] lg:text-4xl">
                  <CountUp value={stat.value} />
                </dd>
                <dd aria-hidden="true" className="mt-0.5 text-sm leading-snug text-[var(--color-text-muted)]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
