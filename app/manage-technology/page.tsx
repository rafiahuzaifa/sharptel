import { Monitor, Network, Lock, Cloud, Users, ShieldCheck, Clock, BarChart3 } from "lucide-react"
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

const managedServices = [
  {
    icon: <Monitor />,
    title: "Managed IT Services",
    desc: "Comprehensive IT management including help desk, server management, and desktop support.",
    features: ["24/7 Help Desk", "Server Management", "Desktop Support", "IT Infrastructure"],
    href: "/manage-technology/manage-it-service"
  },
  {
    icon: <Network />,
    title: "Managed Network Services",
    desc: "Proactive network monitoring, management, and optimization services.",
    features: ["Network Monitoring", "Performance Optimization", "Configuration Management", "Bandwidth Management"],
    href: "/manage-technology/manage-network-solutions"
  },
  {
    icon: <Lock />,
    title: "Managed Security Services",
    desc: "Round-the-clock security monitoring, threat detection, and incident response.",
    features: ["Security Monitoring", "Threat Detection", "Incident Response", "Compliance Management"],
    href: "/manage-technology/manage-security-service"
  },
  {
    icon: <Cloud />,
    title: "Cloud & Communications",
    desc: "Cloud migration, email management, and unified communication solutions.",
    features: ["Cloud Migration", "Email Services", "Unified Communications", "Cloud Backup"],
    href: "/manage-technology/cloud-solutions"
  },
  {
    icon: <Users />,
    title: "IT & BPO Services",
    desc: "Comprehensive IT and business process outsourcing solutions.",
    features: ["IT Outsourcing", "BPO Solutions", "Process Automation", "Cost Optimization"],
    href: "/manage-technology/it-bpo-solutions"
  }
]

const benefits = [
  { title: "Cost Predictability", desc: "Fixed monthly pricing with no surprise costs" },
  { title: "24/7 Monitoring", desc: "Round-the-clock system monitoring and alerting" },
  { title: "Expert Access", desc: "Access to certified IT professionals" },
  { title: "Proactive Maintenance", desc: "Preventive maintenance to avoid downtime" },
  { title: "Scalability", desc: "Easy scaling as your business grows" },
  { title: "Compliance", desc: "Ensured compliance with industry standards" }
]

const slaFeatures = [
  { number: "99.9%", label: "Network Uptime" },
  { number: "15 min", label: "Response Time" },
  { number: "1 hour", label: "Resolution Time" },
  { number: "24/7", label: "Support Coverage" }
]

export default function ManagedServices() {
  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Comprehensive Managed Services"
        title="Focus on Your Business."
        accent="We Manage Your IT."
        subtitle="Let Sharptel handle your IT infrastructure while you focus on core business activities. Our managed services ensure reliability, security, and optimal performance."
        image="/background/OIP.webp"
        actions={{
          primary: { label: "Get Managed Services Quote", href: "/Contact-us" },
          secondary: { label: "Explore Services", href: "#services" },
        }}
        stats={slaFeatures}
      />

      <Section id="services">
        <SectionHeader
          eyebrow="Managed Services"
          title={<>Our <Accent>managed</Accent> services</>}
          lead="Comprehensive managed services designed to keep your business running smoothly."
        />
        <FeatureGrid columns={3} items={managedServices} />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Benefits"
          title={<>Benefits of <Accent>managed</Accent> services</>}
          lead="Why businesses choose our managed services for their IT operations."
        />
        <FeatureGrid dark columns={3} items={benefits} />
      </Section>

      <Section>
        <Split
          left={
            <>
              <SectionHeader align="left" eyebrow="SLA" title={<>Service level <Accent>agreement</Accent></>} className="!mb-8" />
              <PointList
                items={[
                  { icon: <ShieldCheck />, title: "Guaranteed Uptime", desc: "99.9% uptime SLA with financial penalties for non-compliance." },
                  { icon: <Clock />, title: "Rapid Response", desc: "15-minute response time for critical issues, 24/7 support." },
                  { icon: <BarChart3 />, title: "Proactive Monitoring", desc: "24/7 system monitoring with automated alerts and preventive maintenance." },
                ]}
              />
            </>
          }
          right={
            <DarkPanel title="Managed Services Dashboard" subtitle="Real-time monitoring and reporting through our client portal.">
              <PanelRows
                rows={[
                  { label: "System Health", value: "98%" },
                  { label: "Uptime This Month", value: "99.97%" },
                  { label: "Active Tickets", value: "3" },
                  { label: "Avg Response Time", value: "8 min" },
                ]}
              />
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Focus on growth. <Accent>Let us handle your IT.</Accent></>}
        text="Schedule a free IT assessment and discover how our managed services can transform your business operations. No commitment assessment · Custom service proposal · Flexible contract terms."
        primary={{ label: "Request Free IT Assessment", href: "/Contact-us" }}
        secondary={{ label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
