"use client"

import { Shield, Lock, Eye, AlertTriangle, Database, Server, Bug, Fish, Waves, Laptop } from "lucide-react"
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

export default function ClientCyberSecurityPage() {
  const services = [
    {
      icon: <Shield />,
      title: "Network Security",
      desc: "Protect your network infrastructure from cyber threats",
      features: ["Firewall Management", "Intrusion Detection", "VPN Solutions", "Network Monitoring"]
    },
    {
      icon: <Lock />,
      title: "Data Protection",
      desc: "Secure your sensitive business data",
      features: ["Encryption Services", "Data Backup", "Access Control", "DLP Solutions"]
    },
    {
      icon: <Eye />,
      title: "Security Monitoring",
      desc: "24/7 security operations center",
      features: ["SIEM Solutions", "Threat Intelligence", "Incident Response", "Log Management"]
    },
    {
      icon: <AlertTriangle />,
      title: "Vulnerability Assessment",
      desc: "Identify and fix security weaknesses",
      features: ["Penetration Testing", "Security Audits", "Risk Assessment", "Compliance Testing"]
    }
  ]

  const threats = [
    { icon: <Bug />, title: "Malware Protection", desc: "Advanced protection against viruses and ransomware" },
    { icon: <Fish />, title: "Phishing Prevention", desc: "Protect against email and social engineering attacks" },
    { icon: <Waves />, title: "DDoS Mitigation", desc: "Defend against distributed denial-of-service attacks" },
    { icon: <Laptop />, title: "Endpoint Security", desc: "Secure all devices connected to your network" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Security Solutions"
        title="Cyber"
        accent="Security"
        subtitle="Comprehensive cybersecurity solutions to protect your business from digital threats and ensure data protection across Pakistan."
        image="/background/cyber-bg.webp"
        actions={{
          primary: { label: "Get Security Audit", href: "/Contact-us" },
          secondary: { label: "Call Security Expert", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "24/7", label: "Monitoring" },
          { number: "99.99%", label: "Uptime" },
          { number: "50+", label: "Protected Clients" },
          { number: "Zero", label: "Major Breaches" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Security Services"
          title={<>Complete <Accent>protection</Accent></>}
          lead="End-to-end cybersecurity solutions for businesses of all sizes."
        />
        <FeatureGrid items={services} />
      </Section>

      <Section tone="muted">
        <Split
          left={
            <>
              <SectionHeader align="left" eyebrow="Threat Defense" title={<>Threat <Accent>protection</Accent></>} className="!mb-8" />
              <PointList items={threats} />
            </>
          }
          right={
            <DarkPanel title="Security Layers" subtitle="Defense in depth, from perimeter to endpoint.">
              <PanelRows
                rows={[
                  { icon: <Shield />, label: "Perimeter Security", value: "Firewall & IDS" },
                  { icon: <Database />, label: "Data Security", value: "Encryption & Backup" },
                  { icon: <Server />, label: "Endpoint Security", value: "Anti-virus & EDR" },
                  { icon: <Eye />, label: "Monitoring", value: "24/7 SOC" },
                ]}
              />
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Secure your <Accent>business</Accent></>}
        text="Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions today."
        primary={{ label: "Get Security Audit", href: "/Contact-us" }}
        secondary={{ label: "Call Security Expert", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
