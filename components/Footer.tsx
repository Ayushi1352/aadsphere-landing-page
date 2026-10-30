import Image from "next/image";
import { site, type AdSphereFooterData, type SectionProps } from "@/data";
import Icon from "@/components/Icon";

// The footer shows the contact section's details
const { brand } = site.navbar;
const contactInfo = site.contactSection.info;

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

const columnTitle = "font-display font-bold text-white";

export default async function Footer({ data: footer = site.footer }: SectionProps<AdSphereFooterData>) {
  const copyright = footer.copyright.replace("{year}", String(await currentYear()));

  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr] lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src={footer.logo.src} alt={brand.name} width={footer.logo.width} height={footer.logo.height} sizes="200px" className="h-auto w-40" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{footer.tagline}</p>
            <div className="mt-5 flex gap-2.5">
              {footer.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center rounded-full bg-white/8 text-white transition-colors duration-300 hover:bg-brand"
                >
                  <Icon name={social.platform} className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={footer.quickLinksTitle}>
            <h2 className={columnTitle}>{footer.quickLinksTitle}</h2>
            <ul className="mt-3.5 grid grid-cols-2 justify-items-start gap-x-2.5 gap-y-1.5 text-sm sm:grid-cols-1">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="-mx-2 inline-block rounded-md px-2 py-0.5 transition-colors hover:bg-brand hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={columnTitle}>{footer.contactTitle}</h2>
            <ul className="mt-4 grid gap-3.5 text-sm">
              {contactInfo.map((item) => {
                const external = item.href.startsWith("http");
                return (
                  <li key={item.title} className="flex min-w-0 items-start gap-3">
                    <Icon name={item.icon} className="mt-0.5 size-4 shrink-0 text-white" />
                    {item.href ? (
                      <a
                        href={item.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="-mx-2 -my-0.5 min-w-0 break-words rounded-md px-2 py-0.5 transition-colors hover:bg-brand hover:text-white"
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

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
