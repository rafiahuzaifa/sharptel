"use client"

import { Ship, Plane, MapPin, Globe, Satellite, Wifi, Cloud, Zap, ShieldCheck, TrendingUp, Fuel, Anchor, Pickaxe } from "lucide-react"
import { Accent, BenefitsPanel, ChecklistCards, CTASection, FeatureGrid, PageHero, Section, SectionHeader } from "@/app/components/premium"

export default function ClientSatelliteServicePage() {
  const solutions = [
    {
      icon: <Ship />,
      title: "Maritime VSAT",
      desc: "Satellite connectivity for ships, vessels, and offshore platforms",
      features: ["Global Coverage", "Voice & Data", "Weather Updates"]
    },
    {
      icon: <Plane />,
      title: "Aeronautical VSAT",
      desc: "In-flight connectivity solutions for aircraft and aviation industry",
      features: ["Airborne Connectivity", "Cabin Services", "Crew Communications"]
    },
    {
      icon: <MapPin />,
      title: "Remote Site Connectivity",
      desc: "Satellite internet for remote locations without terrestrial connectivity",
      features: ["Quick Deployment", "Reliable Service", "Easy Installation"]
    },
    {
      icon: <Globe />,
      title: "Backup Connectivity",
      desc: "Satellite backup for critical business operations",
      features: ["Automatic Failover", "Business Continuity", "Disaster Recovery"]
    }
  ]

  const benefits = [
    { icon: <Globe />, title: "Global Coverage", desc: "Connectivity anywhere on Earth, even in the most remote locations" },
    { icon: <Zap />, title: "Rapid Deployment", desc: "Set up connectivity within hours, not weeks or months" },
    { icon: <ShieldCheck />, title: "High Reliability", desc: "Weather-resistant and reliable connections in all conditions" },
    { icon: <TrendingUp />, title: "Scalable Solutions", desc: "Flexible bandwidth options to match your specific needs" }
  ]

  const useCases = [
    { icon: <Fuel />, title: "Oil & Gas", desc: "Remote rigs, pipelines, and exploration sites", items: ["Offshore Platforms", "Pipeline Monitoring", "Remote Camps"] },
    { icon: <Anchor />, title: "Shipping & Maritime", desc: "Vessels, ports, and maritime operations", items: ["Cargo Ships", "Fishing Vessels", "Port Operations"] },
    { icon: <Pickaxe />, title: "Mining", desc: "Remote mining operations and exploration sites", items: ["Mining Camps", "Equipment Monitoring", "Security Systems"] }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Satellite Connectivity"
        title="Satellite"
        accent="Service"
        subtitle="Global satellite connectivity solutions for maritime, aeronautical, and remote site applications across Pakistan and beyond."
        image="/background/satellite-bg.webp"
        actions={{
          primary: { label: "Get Satellite Quote", href: "/Contact-us" },
          secondary: { label: "Call Satellite Expert", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "Global", label: "Coverage" },
          { number: "99.5%", label: "Availability" },
          { number: "256kbps-50Mbps", label: "Speed Range" },
          { number: "24/7", label: "Support" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Satellite Solutions"
          title={<>Satellite <Accent>connectivity</Accent></>}
          lead="Comprehensive VSAT solutions for diverse applications and industries."
        />
        <FeatureGrid items={solutions} />
      </Section>

      <BenefitsPanel
        eyebrow="Why Satellite"
        title={<>Why <Accent>satellite?</Accent></>}
        items={benefits}
        panelTitle="Technical Specifications"
        panelSubtitle="Flexible terminals for any environment."
        rows={[
          { icon: <Satellite />, label: "Satellite Band", value: "Ku & C Band" },
          { icon: <Wifi />, label: "Speeds", value: "256kbps - 50Mbps" },
          { icon: <Cloud />, label: "Antenna Size", value: "0.75m - 2.4m" },
          { icon: <Globe />, label: "Coverage", value: "Global" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Applications"
          title={<>Ideal for <Accent>these</Accent> applications</>}
          lead="Satellite connectivity solutions for challenging environments."
        />
        <ChecklistCards items={useCases} />
      </Section>

      <CTASection
        title={<>Connect <Accent>anywhere</Accent></>}
        text="Get global satellite connectivity for your remote operations. Contact our satellite experts for a customized solution."
        primary={{ label: "Get Satellite Quote", href: "/Contact-us" }}
        secondary={{ label: "Call Satellite Expert", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
