export interface ThemeFonts {
  primary: string;
  heading: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  lang: string;
}

export interface GlobalUIData {
  mainNav: string;
  mobileNav: string;
  openMenu: string;
  closeMenu: string;
  backToTop: string;
}

export interface LinkData {
  label: string;
  href: string;
}

export interface ImageData {
  src: string;
  alt: string;
}

export interface SizedImageData extends ImageData {
  width: number;
  height: number;
}

/** A heading split into parts; highlighted parts show in the brand colour. */
export interface HeadingPart {
  text: string;
  highlight: boolean;
}

export interface ContactInfoItem {
  icon: string;
  title: string;
  lines: string[];
  href: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface CompanyData {
  contactInfo: ContactInfoItem[];
  socialLinks: SocialLink[];
}

export interface FooterData {
  logo: SizedImageData;
  tagline: string;
  menuTitle: string;
  contactTitle: string;
  copyright: string;
}

export interface CommonData {
  theme: ThemeData;
  metadata: SiteMetadataData;
  globalUI: GlobalUIData;
  company: CompanyData;
  Footer?: FooterData;
}

export interface HeaderData {
  brand: {
    name: string;
    logo: SizedImageData;
  };
  navigation: LinkData[];
  cta: LinkData;
}

export interface HeroData {
  headingLines: { text: string; indent: boolean }[];
  description: string;
  button: LinkData;
  image: ImageData;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutUsData {
  tagline: string[];
  title: HeadingPart[];
  description: string;
  paragraphs: string[];
  images: {
    primary: ImageData;
  };
  stats: StatItem[];
}

export interface WhyChooseItem {
  title: string;
  text: string;
  icon: string;
}

export interface WhyChooseUsData {
  label: string;
  title: HeadingPart[];
  description: string;
  items: WhyChooseItem[];
}

export interface ServiceCard {
  category: string;
  title: string;
  image: string;
}

export interface ServicesData {
  label: string;
  title: HeadingPart[];
  description: string;
  cardButton: string;
  cardLink: string;
  cards: ServiceCard[];
}

export interface PortfolioProject {
  title: string;
  tags: string[];
  image: string;
  alt: string;
}

export interface PortfolioData {
  label: string;
  title: HeadingPart[];
  description: string;
  projects: PortfolioProject[];
  openLabel: string;
  viewerLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export interface CtaData {
  label: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  button: LinkData;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  image: string;
  alt: string;
}

export interface TestimonialsData {
  label: string;
  title: HeadingPart[];
  description: string;
  badge: {
    stars: number;
    text: string;
  };
  ratingLabel: string;
  items: TestimonialItem[];
  showLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  label: string;
  title: HeadingPart[];
  description: string;
  items: FaqItem[];
  help: {
    title: string;
    text: string;
    button: LinkData;
  };
}

export interface ContactData {
  label: string;
  title: HeadingPart[];
  description: string;
  form: {
    label: string;
    title: string;
    description: string;
  };
}

export interface EnquiryFormData {
  fields: {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    budget: string;
    timeline: string;
    details: string;
  };
  serviceOptions: string[];
  budgetOptions: string[];
  timelineOptions: string[];
  button: string;
  sending: string;
  successTitle: string;
  success: string;
  closeLabel: string;
}

type Section<Variant extends string, Data> = {
  variants?: { [Name in Variant]?: Data };
};

export interface AdvertisingSections {
  Header?: Section<"AdvertisingHeader1", HeaderData>;
  Hero?: Section<"AdvertisingHero1", HeroData>;
  AboutUs?: Section<"AdvertisingAboutUs1", AboutUsData>;
  WhyChooseUs?: Section<"AdvertisingWhyChooseUs1", WhyChooseUsData>;
  Services?: Section<"AdvertisingServices1", ServicesData>;
  Portfolio?: Section<"AdvertisingPortfolio1", PortfolioData>;
  Cta?: Section<"AdvertisingCta1", CtaData>;
  Testimonials?: Section<"AdvertisingTestimonials1", TestimonialsData>;
  Faq?: Section<"AdvertisingFaq1", FaqData>;
  Contact?: Section<"AdvertisingContact1", ContactData>;
  EnquiryForm?: Section<"AdvertisingEnquiryForm1", EnquiryFormData>;
}

export interface TemplateComponentEntry {
  key: string;
  component: string;
}

export interface TemplateComponents {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<string, { components: TemplateComponentEntry[] }>;
}

export interface AdvertisingCategory {
  sections: AdvertisingSections;
  templateComponents: TemplateComponents;
}

export interface AdvertisingTemplateData {
  common: CommonData;
  categories: {
    Advertising: AdvertisingCategory;
  };
}
