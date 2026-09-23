import HeroSection from "@/app/components/Hero";
import WhatWeOffer from "@/app/components/ServiceCard";
import PartnersSection from "@/app/components/PartnersCarousel";
import CapabilitiesSection from "@/app/components/Capabilities";
import AboutSection from "@/app/components/AboutSection";

import TestimonialsSection from "@/app/components/Testimonials";
import IndustryVerticals from "@/app/components/IndustryVerticals";
import ContactSection from "@/app/components/ContactCards";
import { getSiteContent } from "@/lib/content";

export const revalidate = 0;

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <HeroSection hero={content.hero} />
      <WhatWeOffer services={content.services} />
      <PartnersSection />
      <CapabilitiesSection capabilities={content.capabilities} />
      <AboutSection about={content.about} />

      <TestimonialsSection testimonials={content.testimonials} />
      <IndustryVerticals industries={content.industries} />
      <ContactSection contact={content.contact} />
    </>
  );
}