import { site, type AdSpherePortfolioData, type SectionProps } from "@/data";
import PortfolioGrid from "@/components/PortfolioGrid";
import SectionHeading from "@/components/SectionHeading";

/** Heading beside the projects on desktop, so all six fit on one screen */
export default function PortfolioSection({ data = site.portfolioSection, className = "" }: SectionProps<AdSpherePortfolioData>) {
  return (
    <section className={`bg-cloud py-(--section-gap) ${className}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[24rem_1fr] lg:gap-14 lg:px-8">
        <SectionHeading label={data.label} title={data.title} description={data.description} />
        <PortfolioGrid data={data} />
      </div>
    </section>
  );
}
