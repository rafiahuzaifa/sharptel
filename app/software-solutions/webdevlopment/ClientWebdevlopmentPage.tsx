"use client"

import { Palette, Settings, Database, ShoppingCart, AppWindow, FileEdit } from "lucide-react"
import { Accent, ChecklistCards, CTASection, FeatureGrid, PageHero, Section, SectionHeader, Steps } from "@/app/components/premium"

export default function ClientWebdevlopmentPage() {
  const technologies = [
    { icon: <Palette />, title: "Frontend", items: ["React.js", "Next.js", "Vue.js", "Angular"] },
    { icon: <Settings />, title: "Backend", items: ["Node.js", "Python/Django", "PHP/Laravel", ".NET Core"] },
    { icon: <Database />, title: "Database", items: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"] }
  ]

  const services = [
    {
      icon: <ShoppingCart />,
      title: "E-Commerce Websites",
      desc: "Custom online stores with payment integration",
      features: ["Shopping Cart", "Payment Gateways", "Inventory Management"]
    },
    {
      icon: <AppWindow />,
      title: "Web Applications",
      desc: "Complex web applications for business automation",
      features: ["User Management", "Real-time Updates", "API Integration"]
    },
    {
      icon: <FileEdit />,
      title: "CMS Development",
      desc: "Custom content management systems",
      features: ["Easy Content Editing", "Multi-user Access", "SEO Friendly"]
    }
  ]

  const process = [
    { title: "Discovery & Planning", desc: "Understanding requirements and creating project roadmap" },
    { title: "UI/UX Design", desc: "Creating intuitive and beautiful user interfaces" },
    { title: "Development", desc: "Writing clean, scalable, and maintainable code" },
    { title: "Testing & Launch", desc: "Quality assurance and deployment to production" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Web Solutions"
        title="Custom Web"
        accent="Development"
        subtitle="Bespoke web applications and websites tailored to your business needs, built with modern technologies and best practices."
        image="/background/web-bg.webp"
        actions={{
          primary: { label: "Get Free Consultation", href: "/Contact-us" },
          secondary: { label: "All Software Solutions", href: "/software-solutions" },
        }}
        stats={[
          { number: "300+", label: "Projects Completed" },
          { number: "99.9%", label: "Client Satisfaction" },
          { number: "24/7", label: "Support" },
          { number: "SEO", label: "Optimized" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Technologies We Use"
          title={<>Modern <Accent>tech stack</Accent></>}
          lead="We use cutting-edge technologies to build fast, scalable, and secure web applications."
        />
        <ChecklistCards items={technologies} />
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="What We Build"
          title={<>Our <Accent>services</Accent></>}
          lead="Comprehensive web development services for businesses of all sizes."
        />
        <FeatureGrid columns={3} items={services} />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="How We Work"
          title={<>Development <Accent>process</Accent></>}
          lead="Our proven process ensures quality and timely delivery."
        />
        <Steps items={process} />
      </Section>

      <CTASection
        title={<>Build your <Accent>digital presence</Accent></>}
        text="Transform your business with a custom web solution that drives growth and engages customers."
        primary={{ label: "Get Free Consultation", href: "/Contact-us" }}
        secondary={{ label: "All Software Solutions", href: "/software-solutions" }}
      />
    </div>
  )
}
