"use client"

import { Phone, Headphones, Cloud, Wifi, Target, Wrench, TrendingUp, Wallet, Check } from "lucide-react"
import {
  Accent,
  CTASection,
  DarkPanel,
  FeatureGrid,
  PageHero,
  PanelMetric,
  PointList,
  Section,
  SectionHeader,
  Split,
} from "@/app/components/premium"

export default function ClientCallServicePage() {
  const solutions = [
    {
      icon: <Phone />,
      title: "Voice Connectivity",
      desc: "Dedicated voice circuits with QoS for crystal clear call quality",
      features: ["SIP Trunking", "PRI Lines", "Call Routing"]
    },
    {
      icon: <Headphones />,
      title: "Contact Center Solutions",
      desc: "Complete contact center infrastructure with advanced features",
      features: ["IVR Systems", "ACD Queues", "Call Recording"]
    },
    {
      icon: <Cloud />,
      title: "Cloud Contact Center",
      desc: "Cloud-based contact center solutions for scalability and flexibility",
      features: ["Remote Agents", "Omnichannel", "Analytics Dashboard"]
    },
    {
      icon: <Wifi />,
      title: "Redundant Connectivity",
      desc: "Multiple redundant connections for uninterrupted call center operations",
      features: ["Failover Links", "Load Balancing", "Disaster Recovery"]
    }
  ]

  const benefits = [
    { icon: <Target />, title: "99.9% Voice Quality", desc: "Guaranteed voice quality with minimal latency and packet loss" },
    { icon: <Wrench />, title: "24/7 Support", desc: "Round-the-clock technical support for mission-critical operations" },
    { icon: <TrendingUp />, title: "Scalable Solutions", desc: "Easily scale up or down based on call volume and business needs" },
    { icon: <Wallet />, title: "Cost Optimization", desc: "Reduce operational costs with efficient connectivity solutions" }
  ]

  const performance = [
    "Dedicated voice circuits with QoS",
    "Redundant connectivity for failover",
    "24/7 network monitoring",
    "Real-time performance dashboards",
    "Proactive issue resolution",
    "Regular performance reporting"
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Contact Center Solutions"
        title="Call Center"
        accent="Services"
        subtitle="Reliable voice and data connectivity solutions for call centers and customer service operations across Pakistan."
        image="/background/callcenter-bg.webp"
        actions={{
          primary: { label: "Request Assessment", href: "/Contact-us" },
          secondary: { label: "Call Now", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "99.9%", label: "Uptime SLA" },
          { number: "< 50ms", label: "Voice Latency" },
          { number: "500+", label: "Seats Supported" },
          { number: "24/7", label: "Support" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Our Call Center Solutions"
          title={<>Call center <Accent>connectivity</Accent></>}
          lead="Comprehensive solutions designed specifically for call center operations."
        />
        <FeatureGrid items={solutions} />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Benefits"
          title={<>Key <Accent>benefits</Accent></>}
          lead="Why call centers across Pakistan trust Sharptel for their connectivity needs."
        />
        <FeatureGrid dark columns={4} items={benefits} />
      </Section>

      <Section>
        <Split
          reverse
          left={
            <>
              <SectionHeader
                align="left"
                eyebrow="Performance"
                title={<>Designed for <Accent>performance</Accent></>}
                lead="Our call center solutions are engineered to handle high call volumes while maintaining exceptional voice quality. With dedicated bandwidth and QoS prioritization, we ensure that voice traffic always takes priority over data traffic."
                className="!mb-8"
              />
              <PointList items={performance.map((title) => ({ icon: <Check />, title }))} />
            </>
          }
          right={
            <DarkPanel title="Call Center Capacity" subtitle="Engineered headroom for peak hours.">
              <PanelMetric
                items={[
                  { number: "500+", label: "Concurrent Calls" },
                  { number: "99.9%", label: "Voice Quality" },
                  { number: "< 2s", label: "Call Setup Time" },
                  { number: "< 10ms", label: "Jitter" },
                ]}
              />
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Optimize your <Accent>call center</Accent></>}
        text="Contact our call center specialists for a free consultation and network assessment to improve your customer service operations."
        primary={{ label: "Request Assessment", href: "/Contact-us" }}
        secondary={{ label: "Call Now", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
