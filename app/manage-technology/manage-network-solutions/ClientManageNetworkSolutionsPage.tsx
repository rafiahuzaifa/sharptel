"use client"

import { Network, Wifi, Server, Shield, Activity, Globe, Zap, Eye, ShieldCheck, Wallet } from "lucide-react"
import { Accent, BenefitsPanel, CTASection, FeatureGrid, PageHero, Section, SectionHeader } from "@/app/components/premium"

export default function ClientManageNetworkSolutionsPage() {
  const services = [
    {
      icon: <Network />,
      title: "Network Monitoring",
      desc: "24/7 network performance monitoring",
      features: ["Performance Metrics", "Traffic Analysis", "Alert Management", "Capacity Planning"]
    },
    {
      icon: <Wifi />,
      title: "Wireless Management",
      desc: "Enterprise wireless network management",
      features: ["Access Point Management", "Security Configuration", "Performance Optimization", "Guest Networks"]
    },
    {
      icon: <Server />,
      title: "Infrastructure Management",
      desc: "Network hardware and configuration management",
      features: ["Router Management", "Switch Configuration", "Firewall Rules", "VPN Setup"]
    },
    {
      icon: <Shield />,
      title: "Network Security",
      desc: "Proactive network security management",
      features: ["Threat Detection", "Vulnerability Management", "Access Control", "Compliance"]
    }
  ]

  const features = [
    { icon: <Eye />, title: "Proactive Monitoring", desc: "Identify issues before they affect users" },
    { icon: <Zap />, title: "Performance Optimization", desc: "Continuously optimize network performance" },
    { icon: <ShieldCheck />, title: "Security Management", desc: "Comprehensive security configuration" },
    { icon: <Wallet />, title: "Cost Reduction", desc: "Reduce network downtime and maintenance costs" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Network Management"
        title="Managed"
        accent="Network Services"
        subtitle="Proactive network management services ensuring optimal performance, security, and reliability for businesses across Pakistan."
        image="/background/network-services-bg.webp"
        actions={{
          primary: { label: "Get Network Assessment", href: "/Contact-us" },
          secondary: { label: "Call Network Manager", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "99.99%", label: "Network Uptime" },
          { number: "24/7", label: "Monitoring" },
          { number: "100+", label: "Networks Managed" },
          { number: "30 Min", label: "Response Time" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Network Services"
          title={<>Comprehensive <Accent>network management</Accent></>}
          lead="End-to-end network management services."
        />
        <FeatureGrid items={services} />
      </Section>

      <BenefitsPanel
        eyebrow="Why Us"
        title={<>Service <Accent>benefits</Accent></>}
        items={features}
        panelTitle="Monitoring Metrics"
        panelSubtitle="What we measure, and what we guarantee."
        rows={[
          { icon: <Activity />, label: "Network Uptime", value: "99.99%" },
          { icon: <Zap />, label: "Response Time", value: "30 Minutes" },
          { icon: <Globe />, label: "Performance SLA", value: "95%+" },
          { icon: <Shield />, label: "Security Compliance", value: "100%" },
        ]}
      />

      <CTASection
        title={<>Optimize your <Accent>network</Accent></>}
        text="Let our experts manage your network infrastructure while you focus on core business operations."
        primary={{ label: "Get Network Assessment", href: "/Contact-us" }}
        secondary={{ label: "Call Network Manager", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
