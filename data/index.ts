import siteData from "./site.json";

// ── Root Schema Types ──
export type AdSphereSchema = typeof siteData.AdSphere;
export type AdSphereSections = AdSphereSchema["sections"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type AdSphereHeaderData = AdSphereSections["Header"]["variants"]["AdSphereHeader1"];
export type AdSphereHeroData = AdSphereSections["Hero"]["variants"]["AdSphereHero1"];
export type AdSphereAboutData = AdSphereSections["About"]["variants"]["AdSphereAbout1"];
export type AdSphereWhyChooseData = AdSphereSections["WhyChoose"]["variants"]["AdSphereWhyChoose1"];
export type AdSphereServicesData = AdSphereSections["Services"]["variants"]["AdSphereServices1"];
export type AdSpherePortfolioData = AdSphereSections["Portfolio"]["variants"]["AdSpherePortfolio1"];
export type AdSphereCtaData = AdSphereSections["Cta"]["variants"]["AdSphereCta1"];
export type AdSphereTestimonialsData = AdSphereSections["Testimonials"]["variants"]["AdSphereTestimonials1"];
export type AdSphereFaqData = AdSphereSections["Faq"]["variants"]["AdSphereFaq1"];
export type AdSphereContactData = AdSphereSections["Contact"]["variants"]["AdSphereContact1"];
export type AdSphereEnquiryFormData = AdSphereSections["EnquiryForm"]["variants"]["AdSphereEnquiryForm1"];
export type AdSphereFooterData = AdSphereSections["Footer"]["variants"]["AdSphereFooter1"];

// ── Item-level types inferred from site.json ──
export type HeadingPart = { text: string; highlight: boolean };

// ── Site Map for the single-page AdSphere landing page ──
const sec = siteData.AdSphere.sections;

const site = {
  theme: siteData.AdSphere.theme,
  navbar: sec.Header.variants.AdSphereHeader1,
  hero: sec.Hero.variants.AdSphereHero1,
  aboutSection: sec.About.variants.AdSphereAbout1,
  whyChooseSection: sec.WhyChoose.variants.AdSphereWhyChoose1,
  servicesSection: sec.Services.variants.AdSphereServices1,
  portfolioSection: sec.Portfolio.variants.AdSpherePortfolio1,
  ctaSection: sec.Cta.variants.AdSphereCta1,
  testimonialsSection: sec.Testimonials.variants.AdSphereTestimonials1,
  faqSection: sec.Faq.variants.AdSphereFaq1,
  contactSection: sec.Contact.variants.AdSphereContact1,
  enquiryFormSection: sec.EnquiryForm.variants.AdSphereEnquiryForm1,
  footer: sec.Footer.variants.AdSphereFooter1,
};

export { site };
export default siteData;
