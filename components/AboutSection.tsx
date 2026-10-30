import Image from "next/image";
import { site, type AdSphereAboutData, type SectionProps } from "@/data";
import CountUp from "@/components/CountUp";
import SectionHeading from "@/components/SectionHeading";

/** The website's About Us page: one photo beside the company story and the four key figures */
export default function AboutSection({ data: about = site.aboutSection, className = "" }: SectionProps<AdSphereAboutData>) {
  const { images, stats } = about;

  return (
    <section className={`bg-page py-(--section-gap) ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16 lg:px-8">
        <div data-reveal className="relative h-44 overflow-hidden rounded-2xl sm:h-72 lg:h-[33rem]">
          <Image quality={90} src={images.primary.src} alt={images.primary.alt} fill sizes="(min-width: 1024px) 560px, 92vw" className="object-cover" />
        </div>

        <div>
          <SectionHeading label={about.tagline.join(" / ")} title={about.title} description={about.description} />
          {/* the longer story is left out on phones, so the section still fits on one screen */}
          <div data-reveal className="mt-3 space-y-3 text-sm leading-relaxed text-slate max-sm:hidden sm:text-base">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl data-reveal className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-5 sm:grid-cols-4 lg:mt-6 lg:pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-brand lg:text-4xl">
                  <CountUp value={stat.value} />
                </dd>
                <dd aria-hidden="true" className="mt-0.5 text-sm leading-snug text-slate">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
