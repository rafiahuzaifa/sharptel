"use client"

import { Cloud, Phone, MessageSquare, Video, Globe, Shield, Users, Wallet, TrendingUp, Smartphone, ShieldCheck } from "lucide-react"
import { Accent, BenefitsPanel, CTASection, FeatureGrid, PageHero, Section, SectionHeader } from "@/app/components/premium"

export default function ClientCloudSolutionsPage() {
  const services = [
    {
      icon: <Cloud />,
      title: "Cloud Infrastructure",
      desc: "Managed cloud hosting and infrastructure",
      features: ["Public Cloud", "Private Cloud", "Hybrid Solutions", "Cloud Migration"]
    },
    {
      icon: <Phone />,
      title: "VoIP Services",
      desc: "Business VoIP communication solutions",
      features: ["IP Phones", "Softphones", "Call Routing", "Auto Attendant"]
    },
    {
      icon: <MessageSquare />,
      title: "Unified Communications",
      desc: "Integrated communication platform",
      features: ["Instant Messaging", "Video Calls", "File Sharing", "Team Collaboration"]
    },
    {
      icon: <Video />,
      title: "Video Conferencing",
      desc: "Enterprise video conferencing solutions",
      features: ["HD Video", "Screen Sharing", "Recording", "Virtual Meetings"]
    }
  ]

  const benefits = [
    { icon: <Wallet />, title: "Cost Savings", desc: "Reduce infrastructure and communication costs" },
    { icon: <TrendingUp />, title: "Scalability", desc: "Easily scale up or down as needed" },
    { icon: <Smartphone />, title: "Mobility", desc: "Access from anywhere, on any device" },
    { icon: <ShieldCheck />, title: "Reliability", desc: "99.9% uptime with redundancy" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Digital Solutions"
        title="Cloud &"
        accent="Communications"
        subtitle="Integrated cloud and communication solutions to enhance productivity and collaboration for businesses in Pakistan."
        image="/background/cloud-comms-bg.webp"
        actions={{
          primary: { label: "Get Free Consultation", href: "/Contact-us" },
          secondary: { label: "Call Solutions Expert", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "99.9%", label: "Uptime" },
          { number: "50%", label: "Cost Savings" },
          { number: "24/7", label: "Support" },
          { number: "500+", label: "Clients" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Cloud & Comms"
          title={<>Integrated <Accent>solutions</Accent></>}
          lead="Complete cloud and communication services."
        />
        <FeatureGrid items={services} />
      </Section>

      <BenefitsPanel
        eyebrow="Why Cloud"
        title={<>Business <Accent>advantages</Accent></>}
        items={benefits}
        panelTitle="Service Features"
        panelSubtitle="Enterprise-grade, elastic and always on."
        rows={[
          { icon: <Globe />, label: "Global Connectivity", value: "99.9% Uptime" },
          { icon: <Shield />, label: "Security", value: "Enterprise Grade" },
          { icon: <Users />, label: "User Capacity", value: "Unlimited" },
          { icon: <Cloud />, label: "Storage", value: "Scalable" },
        ]}
      />

      <CTASection
        title={<>Transform your <Accent>communication</Accent></>}
        text="Move to the cloud and enhance your business communications with our integrated solutions."
        primary={{ label: "Get Free Consultation", href: "/Contact-us" }}
        secondary={{ label: "Call Solutions Expert", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
