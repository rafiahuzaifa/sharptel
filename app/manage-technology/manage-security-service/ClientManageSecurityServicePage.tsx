"use client"

import { Shield, Lock, Eye, AlertTriangle, Database, Globe, Users, ShieldCheck, UserCheck, ClipboardCheck, Wallet } from "lucide-react"
import { Accent, BenefitsPanel, CTASection, FeatureGrid, PageHero, Section, SectionHeader } from "@/app/components/premium"

export default function ClientManageSecurityServicePage() {
  const services = [
    {
      icon: <Shield />,
      title: "Security Monitoring",
      desc: "24/7 security operations center",
      features: ["Threat Detection", "Incident Response", "Log Analysis", "Compliance Monitoring"]
    },
    {
      icon: <Lock />,
      title: "Vulnerability Management",
      desc: "Proactive security vulnerability management",
      features: ["Regular Scanning", "Patch Management", "Risk Assessment", "Remediation"]
    },
    {
      icon: <Eye />,
      title: "Threat Intelligence",
      desc: "Advanced threat detection and prevention",
      features: ["Malware Protection", "Phishing Prevention", "DDoS Mitigation", "Zero-day Threats"]
    },
    {
      icon: <Database />,
      title: "Data Protection",
      desc: "Comprehensive data security services",
      features: ["Encryption", "Access Control", "Data Loss Prevention", "Backup Management"]
    }
  ]

  const benefits = [
    { icon: <ShieldCheck />, title: "24/7 Protection", desc: "Round-the-clock security monitoring" },
    { icon: <UserCheck />, title: "Expert Security Team", desc: "Certified security professionals" },
    { icon: <ClipboardCheck />, title: "Compliance Ready", desc: "Meet regulatory requirements" },
    { icon: <Wallet />, title: "Cost Effective", desc: "Predictable security costs" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Security Management"
        title="Managed"
        accent="Security Services"
        subtitle="Comprehensive managed security services providing 24/7 protection against cyber threats for businesses across Pakistan."
        image="/background/security-services-bg.webp"
        actions={{
          primary: { label: "Get Security Assessment", href: "/Contact-us" },
          secondary: { label: "Call Security Manager", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "24/7", label: "SOC Monitoring" },
          { number: "99.99%", label: "Uptime" },
          { number: "15 Min", label: "Response Time" },
          { number: "Zero", label: "Major Breaches" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Security Services"
          title={<>Proactive <Accent>security</Accent></>}
          lead="Complete security management services."
        />
        <FeatureGrid items={services} />
      </Section>

      <BenefitsPanel
        eyebrow="Why Us"
        title={<>Security <Accent>benefits</Accent></>}
        items={benefits}
        panelTitle="Security Coverage"
        panelSubtitle="Always watching, always ready to respond."
        rows={[
          { icon: <Eye />, label: "Monitoring Coverage", value: "24/7" },
          { icon: <AlertTriangle />, label: "Threat Detection", value: "Real-time" },
          { icon: <Globe />, label: "Global Intelligence", value: "Active" },
          { icon: <Users />, label: "Expert Response", value: "15 Minutes" },
        ]}
      />

      <CTASection
        title={<>Secure your <Accent>business</Accent></>}
        text="Don't wait for a security breach. Get 24/7 protection with our managed security services."
        primary={{ label: "Get Security Assessment", href: "/Contact-us" }}
        secondary={{ label: "Call Security Manager", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
