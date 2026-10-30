import Image from "next/image";
import { site, type AdSphereHeroData, type SectionProps } from "@/data";

/** Simple banner: one full-width photo with the heading, a short line and one button */
export default function HeroSection({ data: hero = site.hero, className = "" }: SectionProps<AdSphereHeroData>) {
  return (
    <section className={`relative isolate flex min-h-[34rem] items-center overflow-hidden bg-ink pt-18 sm:min-h-[38rem] lg:min-h-[42rem] ${className}`}>
      <Image src={hero.image.src} alt="" fill preload quality={90} sizes="100vw" className="-z-20 object-cover" />
      {/* dark fade keeps the text readable without editing the photo */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/80 lg:bg-transparent lg:bg-linear-to-r lg:from-ink lg:from-20% lg:via-ink/85 lg:via-50% lg:to-ink/20" />

      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl transition-[opacity,translate] duration-700 ease-out starting:translate-y-5 starting:opacity-0">
          <h1 className="font-display text-[2.75rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl">
            {hero.headingLines.map((line) => line.text).join(" ")}
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-white/85 sm:text-lg lg:text-xl">{hero.description}</p>
          {/* the one call-to-action scrolls down to the contact section */}
          <a
            href={hero.button.href}
            className="mt-8 inline-flex rounded-lg border border-brand bg-brand px-7 py-3.5 font-display font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-brand lg:px-8 lg:py-4"
          >
            {hero.button.label}
          </a>
        </div>
      </div>
    </section>
  );
}
