"use client"

import { Phone, Video, Users, Headphones, Globe, Shield, Zap, Wallet, TrendingUp, Smartphone, ShieldCheck } from "lucide-react"
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

export default function ClientVoiceOverPage() {
  const solutions = [
    {
      icon: <Phone />,
      title: "VoIP Phone Systems",
      desc: "Modern business phone systems",
      features: ["IP Phones", "Softphones", "Call Routing", "Auto Attendant"]
    },
    {
      icon: <Video />,
      title: "Video Conferencing",
      desc: "High-quality video communication",
      features: ["HD Video", "Screen Sharing", "Recording", "Virtual Backgrounds"]
    },
    {
      icon: <Users />,
      title: "Call Center Solutions",
      desc: "Customer service and support systems",
      features: ["ACD", "IVR", "Call Monitoring", "Reporting"]
    },
    {
      icon: <Headphones />,
      title: "Unified Communications",
      desc: "Integrated communication platform",
      features: ["Instant Messaging", "Presence", "File Sharing", "Calendar"]
    }
  ]

  const features = [
    { icon: <Wallet />, title: "Cost Savings", desc: "Reduce phone bills by up to 60%" },
    { icon: <TrendingUp />, title: "Scalability", desc: "Easily add or remove users" },
    { icon: <Smartphone />, title: "Mobility", desc: "Work from anywhere with internet" },
    { icon: <ShieldCheck />, title: "Reliability", desc: "99.99% uptime guarantee" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Business Communication"
        title="Voice Over IP"
        accent="Solutions"
        subtitle="Modern VoIP communication solutions to enhance business productivity and reduce costs across Pakistan."
        image="/background/voip-bg.webp"
        actions={{
          primary: { label: "Get Free Demo", href: "/Contact-us" },
          secondary: { label: "Call VoIP Expert", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "60%", label: "Cost Savings" },
          { number: "99.99%", label: "Uptime" },
          { number: "500+", label: "Clients" },
          { number: "24/7", label: "Support" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="VoIP Solutions"
          title={<>Business <Accent>communication</Accent></>}
          lead="Complete VoIP solutions for modern businesses."
        />
        <FeatureGrid items={solutions} />
      </Section>

      <Section tone="muted">
        <Split
          left={
            <>
              <SectionHeader align="left" eyebrow="Why VoIP" title={<>Key <Accent>benefits</Accent></>} className="!mb-8" />
              <PointList items={features} />
            </>
          }
          right={
            <DarkPanel title="Technical Features" subtitle="Carrier-grade voice, secured end to end.">
              <PanelRows
                rows={[
                  { icon: <Phone />, label: "Call Quality", value: "HD Voice" },
                  { icon: <Globe />, label: "Connectivity", value: "SIP & WebRTC" },
                  { icon: <Shield />, label: "Security", value: "TLS & SRTP" },
                  { icon: <Zap />, label: "Integration", value: "CRM & ERP" },
                ]}
              />
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Upgrade your <Accent>communication</Accent></>}
        text="Transform your business communication with modern VoIP solutions and start saving today."
        primary={{ label: "Get Free Demo", href: "/Contact-us" }}
        secondary={{ label: "Call VoIP Expert", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
