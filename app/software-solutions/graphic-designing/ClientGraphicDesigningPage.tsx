"use client"

import { Palette, FileText, Monitor, Building2, Megaphone, MousePointerClick } from "lucide-react"
import { Accent, ChecklistCards, CTASection, FeatureGrid, PageHero, Section, SectionHeader, Steps } from "@/app/components/premium"

export default function ClientGraphicDesigningPage() {
  const services = [
    {
      icon: <Palette />,
      title: "Logo & Branding",
      desc: "Memorable logos and complete brand identity systems",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"]
    },
    {
      icon: <FileText />,
      title: "Print Design",
      desc: "Professional designs for physical media",
      features: ["Business Cards", "Brochures", "Flyers", "Packaging"]
    },
    {
      icon: <Monitor />,
      title: "Digital Graphics",
      desc: "Graphics for digital platforms and social media",
      features: ["Social Media Posts", "Banners", "Email Templates", "Web Graphics"]
    }
  ]

  const designTypes = [
    { icon: <Building2 />, title: "Corporate Identity", items: ["Logo Design", "Business Cards", "Letterheads", "Brand Guidelines"] },
    { icon: <Megaphone />, title: "Marketing Materials", items: ["Brochures", "Flyers", "Posters", "Roll-up Banners"] },
    { icon: <MousePointerClick />, title: "Digital Design", items: ["Social Media Graphics", "Email Templates", "Web Banners", "UI Elements"] }
  ]

  const process = [
    { title: "Client Brief", desc: "Understanding your requirements and goals" },
    { title: "Market Research", desc: "Analyzing competitors and industry trends" },
    { title: "Concept Development", desc: "Creating initial design concepts" },
    { title: "Refinement", desc: "Iterating based on feedback" },
    { title: "Final Delivery", desc: "Providing all source files and formats" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Visual Design"
        title="Graphic"
        accent="Design Services"
        subtitle="Professional graphic design services that elevate your brand and communicate your message effectively across Pakistan."
        image="/background/design-bg.webp"
        actions={{
          primary: { label: "Start Design Project", href: "/Contact-us" },
          secondary: { label: "All Software Solutions", href: "/software-solutions" },
        }}
        stats={[
          { number: "500+", label: "Design Projects" },
          { number: "100%", label: "Client Satisfaction" },
          { number: "3-7 Days", label: "Turnaround Time" },
          { number: "Unlimited", label: "Revisions" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Our Services"
          title={<>Creative <Accent>design</Accent> solutions</>}
          lead="Comprehensive graphic design services for all your needs."
        />
        <FeatureGrid columns={3} items={services} />
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="Portfolio"
          title={<>Design <Accent>portfolio</Accent></>}
          lead="Wide range of design services for every business need."
        />
        <ChecklistCards items={designTypes} />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="How We Work"
          title={<>Design <Accent>process</Accent></>}
          lead="Our systematic approach ensures quality and consistency."
        />
        <Steps items={process} />
      </Section>

      <CTASection
        title={<>Elevate your <Accent>brand</Accent></>}
        text="Make a lasting impression with professional graphic design that communicates your brand's story and values."
        primary={{ label: "Start Design Project", href: "/Contact-us" }}
        secondary={{ label: "All Software Solutions", href: "/software-solutions" }}
      />
    </div>
  )
}
