"use client"

import { Shield, Building, Cpu, Database, Globe, Eye, Zap, ClipboardCheck, Landmark, Award, FileSearch } from "lucide-react"
import {
  Accent,
  ChecklistCards,
  CTASection,
  DarkPanel,
  FeatureGrid,
  PageHero,
  PanelChips,
  PointList,
  Section,
  SectionHeader,
  Split,
} from "@/app/components/premium"

export default function ClientBankingEnterprisePage() {
  const solutions = [
    {
      icon: <Shield />,
      title: "Secure Network Infrastructure",
      desc: "Dedicated secure networks with multiple layers of protection for banking operations",
      features: ["Encrypted Connections", "DDoS Protection", "Intrusion Prevention"]
    },
    {
      icon: <Database />,
      title: "Data Center Connectivity",
      desc: "High-speed, low-latency connections between bank branches and data centers",
      features: ["Redundant Links", "99.99% Uptime", "Disaster Recovery"]
    },
    {
      icon: <Globe />,
      title: "Branch Connectivity",
      desc: "Reliable connectivity solutions for connecting all bank branches nationwide",
      features: ["MPLS Networks", "SD-WAN", "VPN Solutions"]
    },
    {
      icon: <Cpu />,
      title: "ATM Network Connectivity",
      desc: "Secure and reliable connectivity for ATM networks across Pakistan",
      features: ["24/7 Monitoring", "Transaction Security", "Remote Management"]
    }
  ]

  const features = [
    { icon: <Shield />, title: "Banking Grade Security", desc: "Compliance with State Bank of Pakistan regulations and international banking standards" },
    { icon: <Eye />, title: "24/7 Monitoring", desc: "Round-the-clock network monitoring and immediate incident response" },
    { icon: <Zap />, title: "Disaster Recovery", desc: "Built-in redundancy and failover mechanisms for business continuity" },
    { icon: <ClipboardCheck />, title: "Compliance Ready", desc: "Solutions designed to meet all regulatory compliance requirements" }
  ]

  const clients = ["HBL", "UBL", "MCB", "Bank Alfalah", "Standard Chartered", "Faysal Bank"]

  const compliance = [
    {
      icon: <Landmark />,
      title: "SBP Regulations",
      desc: "Compliant with State Bank of Pakistan's cybersecurity framework",
      items: ["PRISM Compliance", "Cybersecurity Guidelines", "Data Protection"]
    },
    {
      icon: <Award />,
      title: "International Standards",
      desc: "Adherence to global banking and security standards",
      items: ["ISO 27001", "PCI DSS", "SWIFT Security"]
    },
    {
      icon: <FileSearch />,
      title: "Audit Readiness",
      desc: "Comprehensive documentation and audit trails",
      items: ["Regular Audits", "Compliance Reports", "Security Logs"]
    }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Banking Solutions"
        title="Banking"
        accent="Enterprise Services"
        subtitle="Secure, reliable, and compliant connectivity solutions designed specifically for Pakistan's banking and financial sector."
        image="/background/banking-enterprise.jpeg"
        actions={{
          primary: { label: "Schedule Consultation", href: "/Contact-us" },
          secondary: { label: "Call Banking Expert", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "99.99%", label: "Uptime SLA" },
          { number: "256-bit", label: "Encryption" },
          { number: "24/7", label: "Monitoring" },
          { number: "50+", label: "Bank Clients" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Our Banking Solutions"
          title={<>Tailored for <Accent>financial institutions</Accent></>}
          lead="Comprehensive connectivity solutions meeting the stringent requirements of banking and financial services."
        />
        <FeatureGrid items={solutions} />
      </Section>

      <Section tone="muted">
        <Split
          left={
            <>
              <SectionHeader align="left" eyebrow="Why Us" title={<>Why <Accent>banks</Accent> choose us</>} className="!mb-8" />
              <PointList items={features} />
            </>
          }
          right={
            <DarkPanel
              title="Our Banking Clients"
              subtitle="Trusted by leading financial institutions across Pakistan."
              footer={
                <div className="flex items-center gap-4">
                  <Building className="h-7 w-7 text-red-500" />
                  <div>
                    <div className="font-semibold text-white">SBP Compliant</div>
                    <div className="text-sm text-gray-400">All solutions meet State Bank requirements</div>
                  </div>
                </div>
              }
            >
              <PanelChips items={clients} />
            </DarkPanel>
          }
        />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Compliance"
          title={<>Regulatory <Accent>compliance</Accent></>}
          lead="Our solutions are designed to meet all banking regulatory requirements."
        />
        <ChecklistCards items={compliance} />
      </Section>

      <CTASection
        title={<>Secure your <Accent>banking operations</Accent></>}
        text="Schedule a consultation with our banking solutions specialists to discuss your specific requirements and compliance needs."
        primary={{ label: "Schedule Consultation", href: "/Contact-us" }}
        secondary={{ label: "Call Banking Expert", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
