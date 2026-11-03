import Image from "next/image";
import type { HeroData } from "@/types/templates.types";

/** Simple banner: one full-width photo with the heading, a short line and one button */
export const HeroSection = ({ data: hero }: { data?: HeroData }) => {
  if (!hero) return null;

  return (
    <section className="relative isolate flex min-h-[34rem] items-center overflow-hidden bg-[var(--color-bg-dark)] pt-[4.5rem] sm:min-h-[38rem] lg:min-h-[42rem]">
      <Image src={hero.image.src} alt="" fill preload quality={90} sizes="100vw" className="-z-20 object-cover" />
      {/* dark fade keeps the text readable without editing the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[var(--color-hero-overlay)] lg:bg-transparent lg:bg-gradient-to-r lg:from-[var(--color-bg-dark)] lg:from-20% lg:via-[var(--color-hero-overlay-mid)] lg:via-50% lg:to-[var(--color-hero-overlay-end)]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl transition-[opacity,transform] duration-700 ease-out [@starting-style]:translate-y-5 [@starting-style]:opacity-0">
          <h1 className="font-display text-[2.75rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-[var(--color-white)] sm:text-[3.75rem] lg:text-[4.5rem]">
            {hero.headingLines.map((line) => line.text).join(" ")}
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-[var(--color-white-85)] sm:text-[1.125rem] lg:text-[1.25rem]">{hero.description}</p>
          {/* the one call-to-action scrolls down to the contact section */}
          <a
            href={hero.button.href}
            className="mt-8 inline-flex rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary)] px-7 py-3.5 font-display font-bold text-[var(--color-white)] transition-colors hover:border-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-primary)] lg:px-8 lg:py-4"
          >
            {hero.button.label}
          </a>
        </div>
      </div>
    </section>
  );
};
