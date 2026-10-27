"use client"

import { Cpu, Settings, Home, Factory, Zap, Smartphone, Globe, Radio, Wifi, Cloud, AppWindow } from "lucide-react"
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

export default function ClientIotAutomationPage() {
  const solutions = [
    {
      icon: <Home />,
      title: "Smart Home",
      desc: "Automated home systems for comfort and efficiency",
      features: ["Lighting Control", "Climate Control", "Security Systems", "Energy Management"]
    },
    {
      icon: <Factory />,
      title: "Industrial IoT",
      desc: "Automation solutions for manufacturing and industry",
      features: ["Machine Monitoring", "Predictive Maintenance", "Process Automation", "Quality Control"]
    },
    {
      icon: <Cpu />,
      title: "Smart Cities",
      desc: "IoT solutions for urban infrastructure",
      features: ["Traffic Management", "Waste Management", "Public Safety", "Environmental Monitoring"]
    },
    {
      icon: <Zap />,
      title: "Energy Automation",
      desc: "Intelligent energy management systems",
      features: ["Smart Grids", "Renewable Integration", "Load Management", "Energy Analytics"]
    }
  ]

  const technologies = [
    { icon: <Radio />, title: "Sensors & Devices", desc: "Hardware for data collection and control" },
    { icon: <Wifi />, title: "Connectivity", desc: "Wireless protocols for IoT communication" },
    { icon: <Cloud />, title: "Cloud Platform", desc: "Data processing and storage solutions" },
    { icon: <AppWindow />, title: "Applications", desc: "User interfaces and control systems" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Smart Solutions"
        title="IoT &"
        accent="Automation"
        subtitle="Smart IoT and automation solutions transforming homes, industries, and cities across Pakistan."
        image="/background/iot-automation.webp"
        actions={{
          primary: { label: "Get IoT Consultation", href: "/Contact-us" },
          secondary: { label: "Call IoT Expert", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "1000+", label: "Devices Deployed" },
          { number: "40%", label: "Energy Savings" },
          { number: "24/7", label: "Monitoring" },
          { number: "Real-time", label: "Analytics" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="IoT Solutions"
          title={<>Smart <Accent>automation</Accent></>}
          lead="Comprehensive IoT solutions for various applications."
        />
        <FeatureGrid items={solutions} />
      </Section>

      <Section tone="muted">
        <Split
          left={
            <>
              <SectionHeader align="left" eyebrow="Technology" title={<>IoT <Accent>technology</Accent> stack</>} className="!mb-8" />
              <PointList items={technologies} />
            </>
          }
          right={
            <DarkPanel title="Protocols & Standards" subtitle="Open, interoperable and cloud-ready.">
              <PanelRows
                rows={[
                  { icon: <Cpu />, label: "Wireless Protocols", value: "Wi-Fi, LoRa, Zigbee" },
                  { icon: <Globe />, label: "Cloud Platforms", value: "AWS, Azure, Google" },
                  { icon: <Smartphone />, label: "Mobile Apps", value: "iOS & Android" },
                  { icon: <Settings />, label: "Integration", value: "APIs & Webhooks" },
                ]}
              />
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Automate your <Accent>world</Accent></>}
        text="Transform your home, business, or city with our smart IoT and automation solutions."
        primary={{ label: "Get IoT Consultation", href: "/Contact-us" }}
        secondary={{ label: "Call IoT Expert", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
