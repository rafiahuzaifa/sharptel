"use client"

import { Activity, AlertCircle, Server, Shield } from "lucide-react"
import { Accent, CTASection, FeatureGrid, PageHero, Section, SectionHeader, Steps } from "@/app/components/premium"

export default function ClientNetworkAssesmentPage() {
  const assessments = [
    {
      icon: <Activity />,
      title: "Network Performance",
      desc: "Analyze network speed, latency, and bandwidth utilization",
      features: ["Speed Testing", "Latency Analysis", "Bandwidth Usage", "Traffic Patterns"]
    },
    {
      icon: <Shield />,
      title: "Security Audit",
      desc: "Identify security vulnerabilities and risks",
      features: ["Vulnerability Scan", "Access Control Review", "Firewall Analysis", "Compliance Check"]
    },
    {
      icon: <Server />,
      title: "Infrastructure Review",
      desc: "Evaluate network hardware and configuration",
      features: ["Device Inventory", "Configuration Audit", "Capacity Planning", "Lifecycle Management"]
    },
    {
      icon: <AlertCircle />,
      title: "Health Check",
      desc: "Comprehensive network health assessment",
      features: ["Uptime Analysis", "Error Rates", "Performance Metrics", "Recommendations"]
    }
  ]

  const process = [
    { title: "Discovery", desc: "Map your network infrastructure and devices" },
    { title: "Analysis", desc: "Monitor performance and identify issues" },
    { title: "Testing", desc: "Conduct security and performance tests" },
    { title: "Reporting", desc: "Provide detailed assessment report" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Network Analysis"
        title="Network"
        accent="Assessment"
        subtitle="Professional network assessment services to optimize performance, enhance security, and ensure reliability for businesses in Pakistan."
        image="/background/network-assessment.webp"
        actions={{
          primary: { label: "Schedule Assessment", href: "/Contact-us" },
          secondary: { label: "Call Network Expert", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "500+", label: "Networks Assessed" },
          { number: "40%", label: "Performance Gain" },
          { number: "24/7", label: "Monitoring" },
          { number: "Detailed", label: "Reports" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Assessment Types"
          title={<>Comprehensive <Accent>analysis</Accent></>}
          lead="Detailed network assessment services for optimal performance."
        />
        <FeatureGrid items={assessments} />
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="How It Works"
          title={<>Assessment <Accent>process</Accent></>}
          lead="Our systematic approach to network assessment."
        />
        <Steps items={process} />
      </Section>

      <CTASection
        title={<>Optimize your <Accent>network</Accent></>}
        text="Get a professional network assessment to identify issues, improve performance, and enhance security."
        primary={{ label: "Schedule Assessment", href: "/Contact-us" }}
        secondary={{ label: "Call Network Expert", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
