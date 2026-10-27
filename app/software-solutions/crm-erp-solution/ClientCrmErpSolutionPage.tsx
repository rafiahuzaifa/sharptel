"use client"

import {
  Settings, Database, Users, Shield, TrendingUp, Headphones, Package, Cloud, Layers, Boxes, Zap, BarChart3, Handshake, Wallet,
} from "lucide-react"
import { Accent, BenefitsPanel, CTASection, FeatureGrid, PageHero, Section, SectionHeader } from "@/app/components/premium"

export default function ClientCrmErpSolutionPage() {
  const solutions = [
    {
      icon: <TrendingUp />,
      title: "Sales Automation",
      desc: "Automate sales processes and lead management",
      features: ["Lead Tracking", "Sales Pipeline", "Deal Management", "Forecasting"]
    },
    {
      icon: <Headphones />,
      title: "Customer Service",
      desc: "Enhance customer support and service management",
      features: ["Ticket System", "Knowledge Base", "Live Chat", "Customer Portal"]
    },
    {
      icon: <Package />,
      title: "Inventory Management",
      desc: "Streamline inventory and supply chain operations",
      features: ["Stock Tracking", "Order Management", "Supplier Management", "Warehouse Control"]
    }
  ]

  const platforms = [
    { icon: <Cloud />, title: "Salesforce", desc: "Custom Salesforce development and integration" },
    { icon: <Layers />, title: "Microsoft Dynamics", desc: "Dynamics 365 customization and implementation" },
    { icon: <Boxes />, title: "Odoo", desc: "Open-source ERP customization and development" },
    { icon: <Zap />, title: "Custom CRM/ERP", desc: "Bespoke solutions built from scratch" }
  ]

  const benefits = [
    { icon: <TrendingUp />, title: "Increased Efficiency", desc: "Automate routine tasks and streamline operations" },
    { icon: <BarChart3 />, title: "Better Insights", desc: "Real-time analytics and business intelligence" },
    { icon: <Handshake />, title: "Improved Collaboration", desc: "Seamless communication across departments" },
    { icon: <Wallet />, title: "Cost Reduction", desc: "Optimize resources and reduce operational costs" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Business Automation"
        title="CRM/ERP"
        accent="Customization"
        subtitle="Customize and optimize your CRM and ERP systems to streamline business processes and drive growth across Pakistan."
        image="/background/crm-bg.jpg"
        actions={{
          primary: { label: "Schedule Demo", href: "/Contact-us" },
          secondary: { label: "All Software Solutions", href: "/software-solutions" },
        }}
        stats={[
          { number: "50+", label: "CRM Implementations" },
          { number: "40%", label: "Efficiency Gain" },
          { number: "24/7", label: "Support" },
          { number: "99%", label: "Client Retention" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Business Solutions"
          title={<>Streamline your <Accent>operations</Accent></>}
          lead="Custom CRM and ERP solutions tailored to your business needs."
        />
        <FeatureGrid columns={3} items={solutions} />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Platforms"
          title={<>Platform <Accent>expertise</Accent></>}
          lead="We work with leading CRM and ERP platforms."
        />
        <FeatureGrid dark columns={4} items={platforms} />
      </Section>

      <BenefitsPanel
        eyebrow="Outcomes"
        title={<>Business <Accent>benefits</Accent></>}
        items={benefits}
        panelTitle="Implementation Process"
        panelSubtitle="A typical rollout, start to finish."
        rows={[
          { icon: <Settings />, label: "Requirements Analysis", value: "1-2 Weeks" },
          { icon: <Database />, label: "Customization", value: "4-8 Weeks" },
          { icon: <Users />, label: "Training", value: "1 Week" },
          { icon: <Shield />, label: "Support & Maintenance", value: "Ongoing" },
        ]}
      />

      <CTASection
        title={<>Automate your <Accent>business</Accent></>}
        text="Transform your business operations with a customized CRM/ERP solution that grows with your business."
        primary={{ label: "Schedule Demo", href: "/Contact-us" }}
        secondary={{ label: "All Software Solutions", href: "/software-solutions" }}
      />
    </div>
  )
}
