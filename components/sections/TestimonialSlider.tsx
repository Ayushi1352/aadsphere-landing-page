"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { TestimonialItem, TestimonialsData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

const AUTOPLAY_MS = 6000;

const Quote = ({ item, className }: { item: TestimonialItem; className: string }) => (
  <blockquote className={className}>
    <p className="leading-relaxed text-[var(--color-heading)] sm:text-[1.125rem] lg:text-[1.25rem]">{item.quote}</p>
    <footer className="mt-4 flex items-center gap-3 lg:mt-5">
      {/* on phones the big photo is hidden, so a small one sits beside the name */}
      <span className="relative size-11 shrink-0 overflow-hidden rounded-full sm:hidden">
        <Image quality={90} src={item.image} alt="" fill sizes="44px" className="object-cover" />
      </span>
      <span>
        <span className="block font-display font-bold text-[var(--color-heading)] lg:text-lg">{item.name}</span>
        <span className="text-sm text-[var(--color-text-muted)]">{item.role}</span>
      </span>
    </footer>
  </blockquote>
);

/** One quote and its photo at a time; moves on by itself and waits while the visitor hovers it */
export const TestimonialSlider = ({ data }: { data: TestimonialsData }) => {
  const { items } = data;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const item = items[index];
  const go = (step: number) => setIndex((current) => (current + step + items.length) % items.length);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % items.length), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, items.length]);

  const arrow =
    "grid size-10 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-main)] text-[var(--color-heading)] transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]";

  return (
    <div
      className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl bg-[var(--color-bg-alt)] sm:grid-cols-[14rem_1fr] lg:grid-cols-[20rem_1fr]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden max-sm:hidden">
        {/* all photos stay stacked and cross-fade, so the card is never empty while the next one loads */}
        {items.map((testimonial, n) => (
          <Image
            key={testimonial.name}
            quality={90}
            src={testimonial.image}
            alt={n === index ? testimonial.alt : ""}
            fill
            sizes="(min-width: 1024px) 320px, 224px"
            className={`object-cover transition-opacity duration-500 ${n === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      <div className="flex min-w-0 flex-col justify-center p-5 sm:p-8 lg:px-10 lg:py-9">
        <Icon name="RiDoubleQuotesL" className="size-8 text-[var(--color-primary)]" />
        <div className="mt-3 grid" aria-live="polite">
          {/* every quote takes up the same cell unseen, so the card keeps the height of the longest one and the controls never jump */}
          {items.map((testimonial) => (
            <Quote key={testimonial.name} item={testimonial} className="invisible col-start-1 row-start-1" />
          ))}
          {/* keyed by slide, so each new quote fades in */}
          <Quote key={index} item={item} className="col-start-1 row-start-1 transition-opacity duration-500 [@starting-style]:opacity-0" />
        </div>

        <div className="mt-4 flex items-center gap-2 lg:mt-6">
          <div className="mr-auto flex gap-1.5">
            {items.map((testimonial, n) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={data.showLabel.replace("{name}", testimonial.name)}
                aria-current={n === index}
                onClick={() => setIndex(n)}
                className={`size-2 rounded-full transition-colors ${n === index ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)] hover:bg-[var(--color-text-placeholder)]"}`}
              />
            ))}
          </div>
          <button type="button" aria-label={data.previousLabel} onClick={() => go(-1)} className={arrow}>
            <Icon name="FiChevronLeft" className="size-5" />
          </button>
          <button type="button" aria-label={data.nextLabel} onClick={() => go(1)} className={arrow}>
            <Icon name="FiChevronRight" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
