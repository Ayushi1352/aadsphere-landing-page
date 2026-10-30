import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CtaSection from "@/components/CtaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import { site } from "@/data";

/*
  One landing page with a section for each page of the AdSphere website (no blog, no How It Works). Get a Quote
  is merged into the contact section.
  The ids match the header and footer links in site.json ("#about" → id="about"); scroll-mt-18 keeps
  each section clear of the fixed header when a link scrolls to it.
*/
export default function HomePage() {
  return (
    <>
      <div id="home">
        <HeroSection data={site.hero} />
      </div>
      <div id="about" className="scroll-mt-18">
        <AboutSection data={site.aboutSection} />
        <WhyChooseSection data={site.whyChooseSection} />
      </div>
      <div id="services" className="scroll-mt-18">
        <ServicesSection data={site.servicesSection} />
      </div>
      <div id="portfolio" className="scroll-mt-18">
        <PortfolioSection data={site.portfolioSection} />
        <CtaSection data={site.ctaSection} />
      </div>
      <div id="testimonials" className="scroll-mt-18">
        <TestimonialsSection data={site.testimonialsSection} />
      </div>
      <div id="faqs" className="scroll-mt-18">
        <FaqSection data={site.faqSection} />
      </div>
      <div id="contact" className="scroll-mt-18">
        <ContactSection data={site.contactSection} />
      </div>
    </>
  );
}
