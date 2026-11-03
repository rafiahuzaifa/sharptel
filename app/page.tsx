import HeroSection from "@/app/components/Hero";
import WhatWeOffer from "@/app/components/ServiceCard";
import PartnersSection from "@/app/components/PartnersCarousel";
import CapabilitiesSection from "@/app/components/Capabilities";
import AboutSection from "@/app/components/AboutSection";

import TestimonialsSection from "@/app/components/Testimonials";
import IndustryVerticals from "@/app/components/IndustryVerticals";
import ContactSection from "@/app/components/ContactCards";
import { getSiteContent } from "@/lib/content";
import { Managed } from "@/app/components/cms";


export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <Managed id="hero" label="Hero"><HeroSection hero={content.hero} /></Managed>
      <Managed id="what-we-offer" label="What We Offer"><WhatWeOffer services={content.services} /></Managed>
      <Managed id="partners" label="Partners"><PartnersSection /></Managed>
      <Managed id="capabilities" label="Capabilities"><CapabilitiesSection capabilities={content.capabilities} /></Managed>
      <Managed id="about" label="About"><AboutSection about={content.about} /></Managed>

      <Managed id="testimonials" label="Testimonials"><TestimonialsSection testimonials={content.testimonials} /></Managed>
      <Managed id="industry-verticals" label="Industry Verticals"><IndustryVerticals industries={content.industries} /></Managed>
      <Managed id="contact" label="Contact"><ContactSection contact={content.contact} /></Managed>
    </>
  );
}