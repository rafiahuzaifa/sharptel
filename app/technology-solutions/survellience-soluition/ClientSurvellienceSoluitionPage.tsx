"use client"

import { Camera, Eye, AlertCircle, Lock, Building2, Home, Factory, ShoppingBag } from "lucide-react"
import { Accent, CTASection, FeatureGrid, PageHero, Section, SectionHeader } from "@/app/components/premium"

export default function ClientSurvellienceSoluitionPage() {
  const solutions = [
    {
      icon: <Camera />,
      title: "CCTV Systems",
      desc: "Advanced surveillance camera systems",
      features: ["HD & 4K Cameras", "Night Vision", "Motion Detection", "Remote Viewing"]
    },
    {
      icon: <Lock />,
      title: "Access Control",
      desc: "Secure access management systems",
      features: ["Biometric Readers", "RFID Cards", "Time & Attendance", "Visitor Management"]
    },
    {
      icon: <AlertCircle />,
      title: "Alarm Systems",
      desc: "Intruder detection and alert systems",
      features: ["Motion Sensors", "Door Contacts", "Siren Alarms", "Mobile Alerts"]
    },
    {
      icon: <Eye />,
      title: "Video Analytics",
      desc: "AI-powered video analysis",
      features: ["Face Recognition", "License Plate", "Crowd Detection", "Heat Mapping"]
    }
  ]

  const applications = [
    { icon: <Building2 />, title: "Commercial", desc: "Security for offices and businesses" },
    { icon: <Home />, title: "Residential", desc: "Home security and monitoring" },
    { icon: <Factory />, title: "Industrial", desc: "Factory and warehouse security" },
    { icon: <ShoppingBag />, title: "Retail", desc: "Store surveillance and loss prevention" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Security Solutions"
        title="Surveillance &"
        accent="Security"
        subtitle="Complete surveillance and security solutions to protect your property, assets, and people across Pakistan."
        image="/background/surveillance-security.jpg"
        actions={{
          primary: { label: "Get Security Quote", href: "/Contact-us" },
          secondary: { label: "Call Security Expert", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "24/7", label: "Monitoring" },
          { number: "1000+", label: "Installations" },
          { number: "HD & 4K", label: "Camera Quality" },
          { number: "Mobile", label: "Access" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Security Systems"
          title={<>Complete <Accent>security</Accent></>}
          lead="Integrated security solutions for comprehensive protection."
        />
        <FeatureGrid items={solutions} />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Applications"
          title={<>Industry <Accent>applications</Accent></>}
          lead="Security solutions tailored for various sectors."
        />
        <FeatureGrid dark columns={4} items={applications} />
      </Section>

      <CTASection
        title={<>Secure your <Accent>property</Accent></>}
        text="Protect what matters most with our professional surveillance and security solutions."
        primary={{ label: "Get Security Quote", href: "/Contact-us" }}
        secondary={{ label: "Call Security Expert", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
