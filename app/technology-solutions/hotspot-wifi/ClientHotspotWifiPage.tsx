"use client"

import { Users, Shield, Radio, Building, Hotel, ShoppingBag, UtensilsCrossed, GraduationCap } from "lucide-react"
import { Accent, CTASection, FeatureGrid, PageHero, Section, SectionHeader } from "@/app/components/premium"

export default function ClientHotspotWifiPage() {
  const solutions = [
    {
      icon: <Building />,
      title: "Enterprise Wi-Fi",
      desc: "High-performance wireless networks for businesses",
      features: ["High Density", "Seamless Roaming", "Central Management", "Analytics"]
    },
    {
      icon: <Users />,
      title: "Public Hotspots",
      desc: "Secure public Wi-Fi solutions for customers",
      features: ["Captive Portal", "Social Login", "Bandwidth Control", "Analytics"]
    },
    {
      icon: <Radio />,
      title: "Outdoor Wi-Fi",
      desc: "Wireless networks for outdoor spaces",
      features: ["Weatherproof", "Long Range", "Mesh Networks", "Solar Powered"]
    },
    {
      icon: <Shield />,
      title: "Secure Wi-Fi",
      desc: "Enterprise-grade security for wireless networks",
      features: ["WPA3 Encryption", "Guest Isolation", "Firewall", "Content Filtering"]
    }
  ]

  const deployments = [
    { icon: <Hotel />, title: "Hotels & Resorts", desc: "Guest Wi-Fi with branding and analytics" },
    { icon: <ShoppingBag />, title: "Shopping Malls", desc: "Public Wi-Fi with captive portals" },
    { icon: <UtensilsCrossed />, title: "Restaurants", desc: "Customer Wi-Fi with marketing integration" },
    { icon: <GraduationCap />, title: "Educational", desc: "Campus-wide wireless networks" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Wireless Solutions"
        title="Hotspot & Wi-Fi"
        accent="Solutions"
        subtitle="Professional Wi-Fi and hotspot solutions for businesses, providing secure and reliable wireless connectivity across Pakistan."
        image="/background/wifi-bg.webp"
        actions={{
          primary: { label: "Get Wi-Fi Quote", href: "/Contact-us" },
          secondary: { label: "Call Wi-Fi Expert", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "1000+", label: "Hotspots Deployed" },
          { number: "99.9%", label: "Uptime" },
          { number: "10,000+", label: "Users Daily" },
          { number: "24/7", label: "Support" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Wi-Fi Solutions"
          title={<>Wireless <Accent>connectivity</Accent></>}
          lead="Comprehensive Wi-Fi solutions for all business needs."
        />
        <FeatureGrid items={solutions} />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Deployments"
          title={<>Industry <Accent>deployments</Accent></>}
          lead="Wi-Fi solutions tailored for various industries."
        />
        <FeatureGrid dark columns={4} items={deployments} />
      </Section>

      <CTASection
        title={<>Connect your <Accent>business</Accent></>}
        text="Provide reliable Wi-Fi to your customers and guests with our professional hotspot solutions."
        primary={{ label: "Get Wi-Fi Quote", href: "/Contact-us" }}
        secondary={{ label: "Call Wi-Fi Expert", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
