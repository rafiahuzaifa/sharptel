"use client"

import { Cloud, Globe, Cpu, Database, ShieldCheck, Wallet, TrendingUp, Zap, Building2, Server, Laptop, CloudCog, Check } from "lucide-react"
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

export default function ClientDataSolutionsPage() {
  const solutions = [
    {
      icon: <Cloud />,
      title: "MPLS Network",
      desc: "Multi-Protocol Label Switching for secure, reliable data transfer",
      features: ["Quality of Service", "Traffic Engineering", "Any-to-Any Connectivity"]
    },
    {
      icon: <Globe />,
      title: "VPN Solutions",
      desc: "Site-to-Site and Remote Access VPN for secure connectivity",
      features: ["IPSec VPN", "SSL VPN", "Client-to-Site VPN"]
    },
    {
      icon: <Cpu />,
      title: "SD-WAN",
      desc: "Software-Defined Wide Area Network for intelligent routing",
      features: ["Application Awareness", "Dynamic Path Selection", "Cloud Optimization"]
    },
    {
      icon: <Database />,
      title: "Data Connectivity",
      desc: "Leased Lines and Point-to-Point data connections",
      features: ["Dedicated Bandwidth", "Low Latency", "High Availability"]
    }
  ]

  const benefits = [
    { icon: <ShieldCheck />, title: "Enhanced Security", desc: "End-to-end encryption and secure data transmission" },
    { icon: <Wallet />, title: "Cost Efficiency", desc: "Reduce bandwidth costs with intelligent traffic management" },
    { icon: <TrendingUp />, title: "Scalability", desc: "Easily scale your network as your business grows" },
    { icon: <Zap />, title: "Reliability", desc: "Multiple redundancy options for uninterrupted connectivity" }
  ]

  const useCases = [
    { icon: <Building2 />, title: "Multi-Branch Connectivity", desc: "Connect multiple office locations securely with MPLS or SD-WAN solutions." },
    { icon: <Server />, title: "Data Center Connectivity", desc: "High-speed, low-latency connections between data centers and offices." },
    { icon: <Laptop />, title: "Remote Workforce", desc: "Secure VPN access for remote employees working from home or traveling." },
    { icon: <CloudCog />, title: "Cloud Connectivity", desc: "Direct and secure connections to cloud service providers like AWS and Azure." }
  ]

  const whyUs = [
    "15+ years of industry experience",
    "Nationwide network coverage",
    "24/7 technical support",
    "SLAs with financial guarantees",
    "Expert consultation services",
    "Customized solutions"
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Secure Data Connectivity"
        title="Data"
        accent="Connectivity Solutions"
        subtitle="Secure and reliable data connectivity solutions for seamless business operations across multiple locations in Pakistan."
        image="/background/data-solutions-bg.webp"
        actions={{
          primary: { label: "Request Consultation", href: "/Contact-us" },
          secondary: { label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "99.99%", label: "Network Availability" },
          { number: "< 5ms", label: "Average Latency" },
          { number: "256-bit", label: "Encryption" },
          { number: "50+", label: "Cities Connected" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Our Solutions"
          title={<>Comprehensive <Accent>data</Accent> solutions</>}
          lead="End-to-end data connectivity solutions for modern enterprises."
        />
        <FeatureGrid items={solutions} />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Benefits"
          title={<>Key <Accent>benefits</Accent></>}
          lead="Why choose Sharptel for your data connectivity needs."
        />
        <FeatureGrid dark columns={4} items={benefits} />
      </Section>

      <Section>
        <Split
          left={
            <>
              <SectionHeader align="left" eyebrow="Use Cases" title={<>Perfect for <Accent>these</Accent> scenarios</>} className="!mb-8" />
              <PointList items={useCases} />
            </>
          }
          right={
            <DarkPanel title="Why Choose Us?" subtitle="Pakistan's leading provider of enterprise data connectivity solutions.">
              <PanelRows rows={whyUs.map((label) => ({ icon: <Check />, label }))} />
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Secure your business <Accent>data</Accent></>}
        text="Get in touch with our data connectivity experts for a free consultation and network assessment."
        primary={{ label: "Request Consultation", href: "/Contact-us" }}
        secondary={{ label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
