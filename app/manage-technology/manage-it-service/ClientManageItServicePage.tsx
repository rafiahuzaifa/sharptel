"use client"

import { Server, Settings, Monitor, Zap, Users, Shield, Headphones, Wallet, UserCog, Eye, TrendingUp } from "lucide-react"
import { Accent, BenefitsPanel, CTASection, FeatureGrid, PageHero, Section, SectionHeader } from "@/app/components/premium"

export default function ClientManageItServicePage() {
  const services = [
    {
      icon: <Monitor />,
      title: "Desktop Support",
      desc: "Comprehensive desktop and laptop support services",
      features: ["Hardware Support", "Software Installation", "Troubleshooting", "Remote Assistance"]
    },
    {
      icon: <Server />,
      title: "Server Management",
      desc: "24/7 server monitoring and management",
      features: ["Server Monitoring", "Performance Tuning", "Patch Management", "Backup Management"]
    },
    {
      icon: <Settings />,
      title: "IT Infrastructure",
      desc: "Complete IT infrastructure management",
      features: ["Network Management", "Storage Solutions", "Virtualization", "Disaster Recovery"]
    },
    {
      icon: <Headphones />,
      title: "Help Desk Support",
      desc: "Professional IT help desk services",
      features: ["24/7 Support", "Ticket Management", "Knowledge Base", "User Training"]
    }
  ]

  const benefits = [
    { icon: <Wallet />, title: "Cost Predictability", desc: "Fixed monthly pricing with no surprises" },
    { icon: <UserCog />, title: "Expert Support", desc: "Access to certified IT professionals" },
    { icon: <Eye />, title: "Proactive Monitoring", desc: "24/7 monitoring to prevent issues" },
    { icon: <TrendingUp />, title: "Business Continuity", desc: "Minimize downtime and maximize productivity" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="IT Management"
        title="Managed"
        accent="IT Services"
        subtitle="Comprehensive managed IT services that proactively monitor, maintain, and optimize your IT infrastructure across Pakistan."
        image="/background/managed-it-bg.webp"
        actions={{
          primary: { label: "Get IT Assessment", href: "/Contact-us" },
          secondary: { label: "Call IT Manager", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "24/7", label: "Monitoring" },
          { number: "99.9%", label: "Uptime SLA" },
          { number: "50+", label: "Clients" },
          { number: "1 Hour", label: "Response Time" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Our Services"
          title={<>Complete <Accent>IT management</Accent></>}
          lead="End-to-end managed IT services for businesses of all sizes."
        />
        <FeatureGrid items={services} />
      </Section>

      <BenefitsPanel
        eyebrow="Why Managed IT"
        title={<>Business <Accent>benefits</Accent></>}
        items={benefits}
        panelTitle="Service Level Agreement"
        panelSubtitle="Commitments we put in writing."
        rows={[
          { icon: <Zap />, label: "Response Time", value: "1 Hour" },
          { icon: <Shield />, label: "Uptime Guarantee", value: "99.9%" },
          { icon: <Users />, label: "Support Hours", value: "24/7/365" },
          { icon: <Headphones />, label: "Resolution Time", value: "4 Hours" },
        ]}
      />

      <CTASection
        title={<>Focus on <Accent>business</Accent></>}
        text="Let us handle your IT while you focus on growing your business. Get reliable, predictable IT support today."
        primary={{ label: "Get IT Assessment", href: "/Contact-us" }}
        secondary={{ label: "Call IT Manager", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
