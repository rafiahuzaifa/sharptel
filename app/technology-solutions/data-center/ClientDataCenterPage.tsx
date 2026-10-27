"use client"

import { Server, Database, Cpu, Zap, Shield, Cloud, HardDrive, Network, Building2, Snowflake, ShieldCheck } from "lucide-react"
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

export default function ClientDataCenterPage() {
  const services = [
    {
      icon: <Server />,
      title: "Colocation",
      desc: "Secure rack space for your servers and equipment",
      features: ["24/7 Access", "Power Backup", "Cooling Systems", "Physical Security"]
    },
    {
      icon: <Cloud />,
      title: "Cloud Services",
      desc: "Scalable cloud infrastructure solutions",
      features: ["Public Cloud", "Private Cloud", "Hybrid Solutions", "Cloud Migration"]
    },
    {
      icon: <Database />,
      title: "Managed Hosting",
      desc: "Fully managed server hosting solutions",
      features: ["Server Management", "Security Updates", "Monitoring", "Backup Services"]
    },
    {
      icon: <Shield />,
      title: "Disaster Recovery",
      desc: "Business continuity and data protection",
      features: ["Data Backup", "Recovery Planning", "DR Testing", "Failover Solutions"]
    }
  ]

  const features = [
    { icon: <Building2 />, title: "Tier 3 Infrastructure", desc: "99.982% uptime with redundant systems" },
    { icon: <Zap />, title: "Power Redundancy", desc: "Multiple power sources with UPS and generators" },
    { icon: <Snowflake />, title: "Cooling Systems", desc: "Advanced precision cooling for optimal temperatures" },
    { icon: <ShieldCheck />, title: "24/7 Security", desc: "Biometric access and CCTV surveillance" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Infrastructure"
        title="Data Center"
        accent="Services"
        subtitle="Enterprise-grade data center solutions with Tier 3 infrastructure, providing reliability and security for your business in Pakistan."
        image="/background/datacenter-bg.webp"
        actions={{
          primary: { label: "Schedule Tour", href: "/Contact-us" },
          secondary: { label: "Call Data Center Expert", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "99.982%", label: "Uptime SLA" },
          { number: "Tier 3", label: "Infrastructure" },
          { number: "24/7", label: "Support" },
          { number: "100+", label: "Clients" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Our Services"
          title={<>Data center <Accent>solutions</Accent></>}
          lead="Comprehensive data center services for businesses of all sizes."
        />
        <FeatureGrid items={services} />
      </Section>

      <Section tone="muted">
        <Split
          left={
            <>
              <SectionHeader align="left" eyebrow="Facility" title={<>Infrastructure <Accent>features</Accent></>} className="!mb-8" />
              <PointList items={features} />
            </>
          }
          right={
            <DarkPanel title="Technical Specifications" subtitle="Built for always-on enterprise workloads.">
              <PanelRows
                rows={[
                  { icon: <Zap />, label: "Power Capacity", value: "2N Redundant" },
                  { icon: <Cpu />, label: "Cooling", value: "Precision A/C" },
                  { icon: <HardDrive />, label: "Connectivity", value: "Multi-carrier" },
                  { icon: <Network />, label: "Network Uptime", value: "99.99%" },
                ]}
              />
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Host your <Accent>infrastructure</Accent></>}
        text="Move your IT infrastructure to our secure, reliable data center and focus on growing your business."
        primary={{ label: "Schedule Tour", href: "/Contact-us" }}
        secondary={{ label: "Call Data Center Expert", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
