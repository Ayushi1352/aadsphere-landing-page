"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { site, type AdSpherePortfolioData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";
import { swipeItem, swipeRow } from "@/components/swipe";

function ViewerButton({ label, className, onClick, children }: { label: string; className: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`absolute grid size-11 place-items-center rounded-full bg-ink/70 text-white transition-colors hover:bg-brand ${className}`}
    >
      {children}
    </button>
  );
}

/** Project photos with their names below; each one opens in a full-screen viewer */
export default function PortfolioGrid({ data = site.portfolioSection }: SectionProps<AdSpherePortfolioData>) {
  const { projects } = data;
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const show = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const step = (delta: number) => setIndex((i) => (i === null ? i : (i + delta + projects.length) % projects.length));
  const project = index === null ? null : projects[index];

  return (
    <>
      <div data-reveal className={`grid min-w-0 gap-x-4 gap-y-5 sm:grid-cols-3 ${swipeRow}`}>
        {projects.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => show(i)}
            aria-label={data.openLabel.replace("{title}", item.title)}
            className={`group cursor-zoom-in text-left ${swipeItem}`}
          >
            <span className="relative block aspect-square overflow-hidden rounded-xl lg:aspect-[1/0.9]">
              <Image quality={90} src={item.image} alt="" fill sizes="(min-width: 640px) 300px, 76vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </span>
            <span className="mt-2 block font-display text-sm font-bold text-ink transition-colors group-hover:text-brand lg:text-base">{item.title}</span>
            <span className="block text-xs text-slate">{item.tags.join(" / ")}</span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        aria-label={data.viewerLabel}
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        className="m-auto h-[min(85dvh,56rem)] w-[calc(100%-2rem)] max-w-3xl bg-transparent p-0 backdrop:bg-black/85"
      >
        {project && index !== null && (
          <figure className="relative flex h-full flex-col">
            <div className="relative min-h-0 flex-1">
              <Image quality={90} src={project.image} alt={project.alt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-contain" />
            </div>
            <figcaption className="pt-4 text-center font-display text-lg font-bold text-white">
              {project.title}
              <span className="ml-3 font-sans text-xs font-normal text-white/60">
                {index + 1} / {projects.length}
              </span>
            </figcaption>
            <ViewerButton label={data.closeLabel} className="right-2 top-2" onClick={() => dialog.current?.close()}>
              <Icon name="x" className="size-5" />
            </ViewerButton>
            <ViewerButton label={data.previousLabel} className="left-2 top-1/2 -translate-y-1/2" onClick={() => step(-1)}>
              <Icon name="chevron-left" className="size-5" />
            </ViewerButton>
            <ViewerButton label={data.nextLabel} className="right-2 top-1/2 -translate-y-1/2" onClick={() => step(1)}>
              <Icon name="chevron-right" className="size-5" />
            </ViewerButton>
          </figure>
        )}
      </dialog>
    </>
  );
}
