import type { PortfolioData } from "@/types/templates.types";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Heading beside the projects on desktop, so all six fit on one screen */
export const Portfolio = ({ data }: { data?: PortfolioData }) => {
  if (!data) return null;

  return (
    <section className="bg-[var(--color-bg-alt)] py-[var(--section-gap)]">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[24rem_1fr] lg:gap-14 lg:px-8">
        <SectionHeading label={data.label} title={data.title} description={data.description} />
        <PortfolioGrid data={data} />
      </div>
    </section>
  );
};
