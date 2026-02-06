import HeroSection from "@/app/components/Hero";
import WhatWeOffer from "@/app/components/ServiceCard";
import PartnersSection from "@/app/components/PartnersCarousel";
import CapabilitiesSection from "@/app/components/Capabilities";
import AboutSection from "@/app/components/AboutSection";

import TestimonialsSection from "@/app/components/Testimonials";
import IndustryVerticals from "@/app/components/IndustryVerticals";
import ContactSection from "@/app/components/ContactCards";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeOffer />
      <PartnersSection />
      <CapabilitiesSection />
      <AboutSection />
     
      <TestimonialsSection />
      <IndustryVerticals />
      <ContactSection />
    </>
  );
}