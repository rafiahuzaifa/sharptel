"use client"

import { Cpu, HardDrive, Shield, Globe, Zap, KeyRound, TrendingUp } from "lucide-react"
import {
  Accent,
  CTASection,
  DarkPanel,
  PageHero,
  PanelRows,
  PointList,
  PricingCards,
  Section,
  SectionHeader,
  Split,
} from "@/app/components/premium"

export default function ClientVirtualSolutionPage() {
  const plans = [
    {
      name: "Basic VPS",
      specs: "2 CPU Cores, 4GB RAM, 80GB SSD",
      price: "PKR 5,999",
      features: ["2 vCPU Cores", "4GB RAM", "80GB SSD", "2TB Bandwidth"]
    },
    {
      name: "Business VPS",
      specs: "4 CPU Cores, 8GB RAM, 160GB SSD",
      price: "PKR 9,999",
      features: ["4 vCPU Cores", "8GB RAM", "160GB SSD", "4TB Bandwidth"]
    },
    {
      name: "Enterprise VPS",
      specs: "8 CPU Cores, 16GB RAM, 320GB SSD",
      price: "PKR 15,999",
      features: ["8 vCPU Cores", "16GB RAM", "320GB SSD", "8TB Bandwidth"]
    }
  ]

  const features = [
    { icon: <HardDrive />, title: "SSD Storage", desc: "High-speed solid state drives" },
    { icon: <Zap />, title: "Dedicated Resources", desc: "Guaranteed CPU and RAM allocation" },
    { icon: <KeyRound />, title: "Root Access", desc: "Full control over your server" },
    { icon: <TrendingUp />, title: "99.9% Uptime", desc: "Service level agreement guarantee" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Hosting Solutions"
        title="Virtual"
        accent="Private Server"
        subtitle="High-performance VPS hosting with dedicated resources, root access, and 24/7 support for businesses in Pakistan."
        image="/background/vps-hosting.webp"
        actions={{
          primary: { label: "Get Started Now", href: "/Contact-us" },
          secondary: { label: "Call Hosting Expert", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "99.9%", label: "Uptime SLA" },
          { number: "24/7", label: "Support" },
          { number: "SSD", label: "Storage" },
          { number: "Root", label: "Access" },
        ]}
      />

      <Section>
        <SectionHeader
          align="center"
          eyebrow="VPS Plans"
          title={<>Choose your <Accent>plan</Accent></>}
          lead="Scalable VPS hosting plans for every business need."
        />
        <PricingCards plans={plans} />
      </Section>

      <Section tone="muted">
        <Split
          left={
            <>
              <SectionHeader align="left" eyebrow="Included" title={<>VPS <Accent>features</Accent></>} className="!mb-8" />
              <PointList items={features} />
            </>
          }
          right={
            <DarkPanel title="Technical Specifications" subtitle="Enterprise hardware on every plan.">
              <PanelRows
                rows={[
                  { icon: <Cpu />, label: "CPU", value: "Intel Xeon E5" },
                  { icon: <HardDrive />, label: "Storage", value: "NVMe SSD" },
                  { icon: <Globe />, label: "Network", value: "1 Gbps Port" },
                  { icon: <Shield />, label: "Backup", value: "Daily Backups" },
                ]}
              />
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Launch your <Accent>server</Accent></>}
        text="Get started with high-performance VPS hosting in minutes. Scale as your business grows."
        primary={{ label: "Get Started Now", href: "/Contact-us" }}
        secondary={{ label: "Call Hosting Expert", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
