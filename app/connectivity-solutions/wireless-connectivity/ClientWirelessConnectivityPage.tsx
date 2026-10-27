"use client"

import { TowerControl, Radio, Satellite, Cloud, Wifi, MapPin, Signal } from "lucide-react"
import {
  Accent,
  CTASection,
  DarkPanel,
  FeatureGrid,
  PageHero,
  PointList,
  Section,
  SectionHeader,
  Split,
} from "@/app/components/premium"

export default function ClientWirelessConnectivityPage() {
  const services = [
    {
      icon: <TowerControl />,
      title: "Wireless Broadband",
      desc: "High-speed wireless internet for businesses and residential areas",
      features: ["Up to 100 Mbps", "Point-to-Multipoint", "Urban & Semi-Urban"]
    },
    {
      icon: <Radio />,
      title: "Point-to-Point Links",
      desc: "Dedicated wireless connections between two locations",
      features: ["Up to 1 Gbps", "Low Latency", "Building-to-Building"]
    },
    {
      icon: <Satellite />,
      title: "Rural Connectivity",
      desc: "Wireless solutions for remote and underserved areas",
      features: ["Long Range", "Cost Effective", "Easy Deployment"]
    },
    {
      icon: <Cloud />,
      title: "Last Mile Connectivity",
      desc: "Wireless solutions for final connectivity to end-users",
      features: ["Quick Installation", "Scalable", "Reliable"]
    }
  ]

  const coverage = [
    { city: "Karachi", type: "Full Coverage", active: true },
    { city: "Lahore", type: "Full Coverage", active: true },
    { city: "Islamabad", type: "Full Coverage", active: true },
    { city: "Faisalabad", type: "Partial Coverage", active: false },
    { city: "Rawalpindi", type: "Full Coverage", active: true },
    { city: "Multan", type: "Partial Coverage", active: false }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Wireless Connectivity"
        title="Wireless"
        accent="Connectivity Solutions"
        subtitle="Reliable wireless connectivity solutions for businesses, residential areas, and hard-to-reach locations across Pakistan."
        image="/background/wireless-bg.jpg"
        actions={{
          primary: { label: "Request Site Survey", href: "/Contact-us" },
          secondary: { label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "50+", label: "Cities Covered" },
          { number: "100 Mbps", label: "Maximum Speed" },
          { number: "99.5%", label: "Uptime" },
          { number: "24/7", label: "Support" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Our Wireless Services"
          title={<>Wireless <Accent>solutions</Accent></>}
          lead="Comprehensive wireless connectivity options for every need."
        />
        <FeatureGrid items={services} />
      </Section>

      <Section tone="muted">
        <Split
          left={
            <>
              <SectionHeader
                align="left"
                eyebrow="Coverage"
                title={<>Coverage <Accent>areas</Accent></>}
                lead="Sharptel provides wireless connectivity across major cities in Pakistan, with continuous expansion to cover more areas. Our wireless network is designed to provide reliable internet access even in challenging terrains."
                className="!mb-8"
              />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {coverage.map((c) => (
                  <div key={c.city} className="premium-card flex items-center justify-between p-5">
                    <div>
                      <div className="font-semibold text-gray-900">{c.city}</div>
                      <div className="text-sm text-gray-500">{c.type}</div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                        c.active ? "bg-red-50 text-red-700" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${c.active ? "bg-red-600" : "bg-gray-400"}`} />
                      {c.active ? "Active" : "Expanding"}
                    </span>
                  </div>
                ))}
              </div>
            </>
          }
          right={
            <DarkPanel title="Why Wireless?" subtitle="Fast to deploy, built to reach further.">
              <div className="[&_h3]:text-white [&_li]:border-white/10 [&_p]:text-gray-400 [&_ul]:border-white/10 [&_ul]:divide-white/10">
                <PointList
                  items={[
                    { icon: <Wifi />, title: "Quick Deployment", desc: "Installation within days, not weeks" },
                    { icon: <MapPin />, title: "Remote Access", desc: "Connect locations without fiber infrastructure" },
                    { icon: <Signal />, title: "Cost Effective", desc: "Lower installation costs compared to fiber" },
                  ]}
                />
              </div>
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Need wireless <Accent>connectivity?</Accent></>}
        text="Contact our wireless experts for a free site survey and connectivity assessment."
        primary={{ label: "Request Site Survey", href: "/Contact-us" }}
        secondary={{ label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
