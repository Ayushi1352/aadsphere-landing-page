"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site, type AdSphereHeaderData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";

/** id of the landing page section a link points to ("#about" → "about") */
const sectionId = (href: string) => href.replace(/^#/, "");

/** Look of the header "Get a Quote" button */
const ctaClass = "inline-flex items-center justify-center rounded-lg border border-brand bg-brand font-display text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand";

/** Keeps track of the section in the middle of the screen, so its link is shown as the current one */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function Navbar({ data = site.navbar }: SectionProps<AdSphereHeaderData>) {
  const { brand, navigation: links, cta, labels } = data;
  const [ids] = useState(() => links.map((link) => sectionId(link.href)));
  // the "Get a Quote" button already leads to the contact section, so its link is left out of both menus
  const menuLinks = links.filter((link) => link.href !== cta.href);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** The logo scrolls back to the top and drops any "#section" from the address bar, without reloading the page */
  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    window.scrollTo({ top: 0 });
    if (window.location.hash) history.pushState(null, "", window.location.pathname + window.location.search);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 mx-auto max-w-[1920px] border-b border-line bg-page">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" onClick={goHome} aria-label={labels.home} className="shrink-0">
          <Image src={brand.logo.src} alt={brand.logo.alt} width={brand.logo.width} height={brand.logo.height} preload sizes="200px" className="h-auto w-34 lg:w-40" />
        </Link>

        <nav aria-label={labels.mainNav} className="hidden items-center gap-8 lg:flex">
          {menuLinks.map((link) => {
            const current = sectionId(link.href) === active;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={current ? "location" : undefined}
                className={`font-display text-sm font-semibold whitespace-nowrap transition-colors hover:text-brand ${current ? "text-brand" : "text-ink"}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href={cta.href} className={`${ctaClass} px-5 py-3 whitespace-nowrap max-sm:hidden`}>
            {cta.label}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? labels.closeMenu : labels.openMenu}
            className="grid size-11 place-items-center rounded-lg border border-line text-ink lg:hidden"
          >
            <Icon name={open ? "x" : "menu"} className="size-6" />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label={labels.mobileNav}
        // when open it fills the screen below the header, so the page behind it does not show through
        className={`overflow-y-auto bg-page transition-[height,opacity] duration-300 lg:hidden ${
          open ? "h-[calc(100dvh-4.5rem)] opacity-100" : "pointer-events-none invisible h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block border-b border-line py-3.5 font-display font-semibold transition-colors hover:text-brand ${sectionId(link.href) === active ? "text-brand" : "text-ink"}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-5 sm:hidden">
            <a href={cta.href} onClick={() => setOpen(false)} className={`${ctaClass} w-full px-7 py-3.5`}>
              {cta.label}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
