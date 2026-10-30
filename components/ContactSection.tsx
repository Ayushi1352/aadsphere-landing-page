import { site, type AdSphereContactData, type SectionProps } from "@/data";
import EnquiryForm from "@/components/EnquiryForm";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";

/** Contact details on the left, the quote request form in a card on the right (the website's Contact Us and Get a Quote pages in one) */
export default function ContactSection({ data: contact = site.contactSection, className = "" }: SectionProps<AdSphereContactData>) {
  return (
    <section className={`bg-page py-(--section-gap) ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
        <div className="flex min-w-0 flex-col">
          <SectionHeading label={contact.label} title={contact.title} description={contact.description} />

          {/* the four cards share the height left beside the form, so both columns start and end level */}
          <ul data-reveal className="mt-5 grid flex-1 auto-rows-fr grid-cols-2 gap-3 lg:gap-4">
            {contact.info.map((item) => {
              const external = item.href.startsWith("http");
              const card = "flex h-full flex-col rounded-xl border border-line p-3 sm:p-4 lg:p-5";
              const body = (
                <>
                  <Icon name={item.icon} className="size-6 shrink-0 text-brand" />
                  <span className="mt-3 min-w-0">
                    <span className="block font-display text-sm font-bold text-ink transition-colors group-hover:text-brand">{item.title}</span>
                    {item.lines.map((line) => (
                      <span key={line} className="block break-words text-sm leading-snug text-slate transition-colors group-hover:text-brand">
                        {line}
                      </span>
                    ))}
                  </span>
                </>
              );
              return (
                <li key={item.title}>
                  {/* working hours have no link, so they show as plain text */}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className={`group ${card} transition-colors hover:border-brand`}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className={card}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* from tablet up the message box takes up any spare height, so both sides end level */}
        <div data-reveal className="flex min-w-0 flex-col rounded-2xl bg-cloud p-5 sm:p-7">
          <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">{contact.form.title}</h3>
          <p className="mt-1 text-sm text-slate">{contact.form.description}</p>
          <EnquiryForm data={site.enquiryFormSection} />
        </div>
      </div>
    </section>
  );
}
