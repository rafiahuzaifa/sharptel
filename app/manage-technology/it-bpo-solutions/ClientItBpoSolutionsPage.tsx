"use client"

import { Headphones, MessageSquare, Phone, Database, ShoppingCart, HeartPulse, Landmark, PhoneCall } from "lucide-react"
import { Accent, CTASection, FeatureGrid, PageHero, Section, SectionHeader } from "@/app/components/premium"

export default function ClientItBpoSolutionsPage() {
  const services = [
    {
      icon: <Headphones />,
      title: "Technical Support",
      desc: "24/7 technical support services",
      features: ["Help Desk", "Remote Support", "Ticket Management", "Knowledge Base"]
    },
    {
      icon: <MessageSquare />,
      title: "Customer Service",
      desc: "Professional customer support services",
      features: ["Inbound Support", "Outbound Calls", "Email Support", "Live Chat"]
    },
    {
      icon: <Phone />,
      title: "Telemarketing",
      desc: "Sales and marketing call center services",
      features: ["Lead Generation", "Appointment Setting", "Market Research", "Customer Surveys"]
    },
    {
      icon: <Database />,
      title: "Back Office Support",
      desc: "Administrative and data processing services",
      features: ["Data Entry", "Document Processing", "Order Processing", "Inventory Management"]
    }
  ]

  const industries = [
    { icon: <ShoppingCart />, title: "E-commerce", desc: "Customer support and order management" },
    { icon: <HeartPulse />, title: "Healthcare", desc: "Medical billing and patient support" },
    { icon: <Landmark />, title: "Banking", desc: "Customer service and support" },
    { icon: <PhoneCall />, title: "Telecom", desc: "Technical support and customer care" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Business Process"
        title="IT & BPO"
        accent="Services"
        subtitle="Professional IT and Business Process Outsourcing services to enhance efficiency and reduce costs for businesses in Pakistan."
        image="/background/bpo-bg.webp"
        actions={{
          primary: { label: "Get BPO Quote", href: "/Contact-us" },
          secondary: { label: "Call BPO Manager", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "24/7", label: "Support" },
          { number: "50+", label: "Agents" },
          { number: "95%", label: "Satisfaction" },
          { number: "40%", label: "Cost Saving" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="BPO Services"
          title={<>Complete <Accent>outsourcing</Accent></>}
          lead="Comprehensive BPO services for businesses."
        />
        <FeatureGrid items={services} />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Industries"
          title={<>Industry <Accent>expertise</Accent></>}
          lead="BPO services tailored for various industries."
        />
        <FeatureGrid dark columns={4} items={industries} />
      </Section>

      <CTASection
        title={<>Outsource your <Accent>operations</Accent></>}
        text="Focus on your core business while we handle your support and back-office operations."
        primary={{ label: "Get BPO Quote", href: "/Contact-us" }}
        secondary={{ label: "Call BPO Manager", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
