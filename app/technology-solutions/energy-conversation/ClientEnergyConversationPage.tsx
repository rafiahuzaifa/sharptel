"use client"

import { Battery, Sun, Leaf, Zap, TrendingDown, Lightbulb, Building, Wallet, Sprout, Landmark } from "lucide-react"
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

export default function ClientEnergyConversationPage() {
  const solutions = [
    {
      icon: <Sun />,
      title: "Solar Energy",
      desc: "Solar power solutions for homes and businesses",
      features: ["Solar Panels", "Inverters", "Battery Storage", "Grid-tie Systems"]
    },
    {
      icon: <Zap />,
      title: "Energy Audits",
      desc: "Comprehensive energy consumption analysis",
      features: ["Consumption Analysis", "Efficiency Recommendations", "ROI Calculation", "Implementation Plan"]
    },
    {
      icon: <Battery />,
      title: "Energy Storage",
      desc: "Battery storage solutions for energy management",
      features: ["Lithium Batteries", "UPS Systems", "Load Management", "Backup Power"]
    },
    {
      icon: <Leaf />,
      title: "Efficient Lighting",
      desc: "Energy-efficient lighting solutions",
      features: ["LED Lighting", "Smart Controls", "Motion Sensors", "Daylight Harvesting"]
    }
  ]

  const benefits = [
    { icon: <Wallet />, title: "Cost Savings", desc: "Reduce electricity bills by up to 60%" },
    { icon: <Sprout />, title: "Carbon Footprint", desc: "Lower environmental impact" },
    { icon: <Zap />, title: "Energy Independence", desc: "Reduce reliance on grid power" },
    { icon: <Landmark />, title: "Government Incentives", desc: "Benefit from green energy subsidies" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Green Energy"
        title="Energy"
        accent="Conservation"
        subtitle="Smart energy conservation solutions to reduce costs, increase efficiency, and promote sustainability across Pakistan."
        image="/background/energy-bg.webp"
        actions={{
          primary: { label: "Get Energy Audit", href: "/Contact-us" },
          secondary: { label: "Call Energy Expert", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "60%", label: "Cost Savings" },
          { number: "100+", label: "Projects" },
          { number: "5 Years", label: "Payback Period" },
          { number: "24/7", label: "Monitoring" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Energy Solutions"
          title={<>Sustainable <Accent>energy</Accent></>}
          lead="Comprehensive energy conservation and renewable energy solutions."
        />
        <FeatureGrid items={solutions} />
      </Section>

      <Section tone="muted">
        <Split
          left={
            <>
              <SectionHeader align="left" eyebrow="Why It Pays" title={<>Key <Accent>benefits</Accent></>} className="!mb-8" />
              <PointList items={benefits} />
            </>
          }
          right={
            <DarkPanel title="Savings Calculator" subtitle="A typical commercial site, before and after.">
              <PanelRows
                rows={[
                  { icon: <TrendingDown />, label: "Monthly Bill", value: "PKR 50,000" },
                  { icon: <Sun />, label: "Solar Savings", value: "60-70%" },
                  { icon: <Lightbulb />, label: "Efficiency Savings", value: "20-30%" },
                  { icon: <Building />, label: "ROI Period", value: "3-5 Years" },
                ]}
              />
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Save energy, <Accent>save money</Accent></>}
        text="Reduce your energy costs and carbon footprint with our professional energy conservation solutions."
        primary={{ label: "Get Energy Audit", href: "/Contact-us" }}
        secondary={{ label: "Call Energy Expert", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
