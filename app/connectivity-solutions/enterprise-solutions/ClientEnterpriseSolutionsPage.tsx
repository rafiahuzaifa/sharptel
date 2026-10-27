"use client"

import { Zap, Shield, Clock, Headphones, BarChart, Globe, Building2, Landmark, PhoneCall, Factory, Check } from "lucide-react"
import {
  Accent,
  CTASection,
  DarkPanel,
  FeatureGrid,
  PageHero,
  PanelRows,
  PointList,
  Section,
  SectionHeader,
  Split,
} from "@/app/components/premium"

export default function ClientEnterpriseSolutionsPage() {
  const features = [
    { icon: <Zap />, title: "High-Speed Connectivity", desc: "Dedicated fiber optic connections with speeds up to 10 Gbps" },
    { icon: <Shield />, title: "Enterprise Security", desc: "Advanced firewall, DDoS protection, and threat monitoring" },
    { icon: <Clock />, title: "99.9% Uptime SLA", desc: "Guaranteed network reliability with service level agreements" },
    { icon: <Headphones />, title: "24/7 Support", desc: "Round-the-clock technical support and monitoring" },
    { icon: <BarChart />, title: "Bandwidth Management", desc: "Flexible bandwidth options with QoS and traffic shaping" },
    { icon: <Globe />, title: "Multi-City Connectivity", desc: "Seamless connectivity across multiple office locations" }
  ]

  const useCases = [
    { icon: <Building2 />, title: "Corporate Offices", desc: "Reliable internet for day-to-day business operations and cloud applications" },
    { icon: <Landmark />, title: "Financial Institutions", desc: "Secure and compliant connectivity for banking and financial transactions" },
    { icon: <PhoneCall />, title: "Call Centers", desc: "Stable connections for uninterrupted customer service operations" },
    { icon: <Factory />, title: "Manufacturing Units", desc: "High-bandwidth connectivity for production monitoring and automation" }
  ]

  const highlights = [
    "Dedicated bandwidth with no sharing",
    "Advanced DDoS protection and security",
    "24/7 network monitoring and alerts",
    "Priority technical support",
    "Flexible bandwidth scaling",
    "Comprehensive SLA coverage"
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Enterprise Connectivity"
        title="Enterprise"
        accent="Internet Services"
        subtitle="Dedicated high-speed internet solutions designed for enterprise reliability, security, and performance across Pakistan."
        image="/background/enterprise-internet-bg.webp"
        actions={{
          primary: { label: "Request Free Assessment", href: "/Contact-us" },
          secondary: { label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "99.9%", label: "Uptime SLA" },
          { number: "10 Gbps", label: "Maximum Speed" },
          { number: "24/7", label: "Support" },
          { number: "1000+", label: "Enterprise Clients" },
        ]}
      />

      <Section>
        <Split
          left={
            <>
              <SectionHeader align="left" eyebrow="Overview" title={<>Reliable internet for <Accent>modern enterprises</Accent></>} className="!mb-8" />
              <div className="mb-8 space-y-5 text-lg leading-relaxed text-gray-600">
                <p>
                  Sharptel&apos;s Enterprise Internet Services provide dedicated, high-speed connectivity solutions designed
                  specifically for businesses that demand reliability, security, and optimal performance. Our fiber optic
                  network infrastructure ensures minimal latency and maximum uptime for your critical business operations.
                </p>
                <p>
                  With multiple Tier-1 upstream providers and redundant network paths, we guarantee uninterrupted
                  connectivity even during peak hours. Our solutions are scalable, allowing your bandwidth to grow with
                  your business needs.
                </p>
              </div>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-gray-100 py-3 text-gray-800">
                    <Check className="h-4 w-4 flex-shrink-0 text-red-600" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          }
          right={
            <DarkPanel
              title="Network Infrastructure"
              subtitle="Our state-of-the-art network ensures optimal performance for your business."
              footer={
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-semibold text-white" style={{ letterSpacing: "-0.04em" }}>15+</span>
                  <span className="text-sm uppercase tracking-[0.15em] text-gray-400">Years Experience</span>
                </div>
              }
            >
              <PanelRows
                rows={[
                  { label: "Fiber Optic Network", value: "100%" },
                  { label: "Network Uptime", value: "99.9%" },
                  { label: "Peak Hour Performance", value: "98%" },
                  { label: "Average Latency", value: "< 10ms" },
                ]}
              />
            </DarkPanel>
          }
        />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Features"
          title={<>Key <Accent>features</Accent></>}
          lead="Everything you need for reliable enterprise-grade internet connectivity."
        />
        <FeatureGrid dark columns={3} items={features} />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Use Cases"
          title={<>Ideal for <Accent>these</Accent> businesses</>}
          lead="Serving diverse industries with reliable internet solutions."
        />
        <div className="max-w-4xl">
          <PointList items={useCases} />
        </div>
      </Section>

      <CTASection
        title={<>Ready for enterprise-grade <Accent>internet?</Accent></>}
        text="Contact our experts for a free network assessment and customized solution proposal. Free initial assessment · No setup fees · 30-day money back guarantee."
        primary={{ label: "Request Free Assessment", href: "/Contact-us" }}
        secondary={{ label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
