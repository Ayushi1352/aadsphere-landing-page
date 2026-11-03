import Image from "next/image";
import type { CompanyData, FooterData, LinkData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
const currentYear = async () => {
  "use cache";
  return new Date().getFullYear();
};

const columnTitle = "font-display font-bold text-[var(--color-white)]";

type FooterProps = {
  data?: FooterData;
  company: CompanyData;
  /** the header menu, shown again as the footer's quick links */
  links?: LinkData[];
};

export const Footer = async ({ data: footer, company, links = [] }: FooterProps) => {
  if (!footer) return null;
  const copyright = footer.copyright.replace("{year}", String(await currentYear()));

  return (
    <footer className="bg-[var(--color-bg-dark)] text-[var(--color-white-70)]">
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr] lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src={footer.logo.src} alt={footer.logo.alt} width={footer.logo.width} height={footer.logo.height} sizes="200px" className="h-auto w-40" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{footer.tagline}</p>
            <div className="mt-5 flex gap-2.5">
              {company.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center rounded-full bg-[var(--color-white-8)] text-[var(--color-white)] transition-colors duration-300 hover:bg-[var(--color-primary)]"
                >
                  <Icon name={social.icon} className="size-[1.125rem]" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={footer.menuTitle}>
            <h2 className={columnTitle}>{footer.menuTitle}</h2>
            <ul className="mt-3.5 grid grid-cols-2 justify-items-start gap-x-2.5 gap-y-1.5 text-sm sm:grid-cols-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="-mx-2 inline-block rounded-md px-2 py-0.5 transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={columnTitle}>{footer.contactTitle}</h2>
            <ul className="mt-4 grid gap-3.5 text-sm">
              {company.contactInfo.map((item) => {
                const external = item.href.startsWith("http");
                return (
                  <li key={item.title} className="flex min-w-0 items-start gap-3">
                    <Icon name={item.icon} className="mt-0.5 size-4 shrink-0 text-[var(--color-white)]" />
                    {item.href ? (
                      <a
                        href={item.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="-mx-2 -my-0.5 min-w-0 break-words rounded-md px-2 py-0.5 transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]"
                      >
                        {item.lines[0]}
                      </a>
                    ) : (
                      <span>
                        {item.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-white-10)] pt-5 text-center text-xs">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};
