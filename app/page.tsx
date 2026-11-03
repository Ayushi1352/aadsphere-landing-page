import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutUs } from "@/components/sections/AboutUs";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Cta } from "@/components/sections/Cta";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

const templateData: AdvertisingTemplateData = rawData;
const sectionData = templateData.categories.Advertising.sections;
const commonData = templateData.common;

/*
  One landing page with a section for each page of the AdSphere website (no blog, no How It Works). Get a Quote
  is merged into the contact section.
  The ids match the header and footer links in templates.json ("#about" → id="about"); scroll-mt keeps
  each section clear of the fixed header when a link scrolls to it.
*/
export default function Home() {
  return (
    <main>
      <div id="home">
        <HeroSection data={sectionData.Hero?.variants?.AdvertisingHero1} />
      </div>
      <div id="about" className="scroll-mt-[4.5rem]">
        <AboutUs data={sectionData.AboutUs?.variants?.AdvertisingAboutUs1} />
        <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.AdvertisingWhyChooseUs1} />
      </div>
      <div id="services" className="scroll-mt-[4.5rem]">
        <Services data={sectionData.Services?.variants?.AdvertisingServices1} />
      </div>
      <div id="portfolio" className="scroll-mt-[4.5rem]">
        <Portfolio data={sectionData.Portfolio?.variants?.AdvertisingPortfolio1} />
        <Cta data={sectionData.Cta?.variants?.AdvertisingCta1} />
      </div>
      <div id="testimonials" className="scroll-mt-[4.5rem]">
        <Testimonials data={sectionData.Testimonials?.variants?.AdvertisingTestimonials1} />
      </div>
      <div id="faqs" className="scroll-mt-[4.5rem]">
        <Faq data={sectionData.Faq?.variants?.AdvertisingFaq1} />
      </div>
      <div id="contact" className="scroll-mt-[4.5rem]">
        <Contact
          data={sectionData.Contact?.variants?.AdvertisingContact1}
          form={sectionData.EnquiryForm?.variants?.AdvertisingEnquiryForm1}
          company={commonData.company}
        />
      </div>
    </main>
  );
}
