"use client"

import { Search, Share2, Mail, PenLine, Target, BarChart3, TrendingUp } from "lucide-react"
import { Accent, CTASection, FeatureGrid, PageHero, Section, SectionHeader, StatStrip } from "@/app/components/premium"

export default function ClientDigitalMarketingPage() {
  const services = [
    {
      icon: <Search />,
      title: "SEO Services",
      desc: "Improve your website's visibility in search engines",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"]
    },
    {
      icon: <Share2 />,
      title: "Social Media Marketing",
      desc: "Engage your audience across social platforms",
      features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics"]
    },
    {
      icon: <Mail />,
      title: "Email Marketing",
      desc: "Nurture leads and engage customers through email",
      features: ["Campaign Strategy", "Template Design", "Automation", "Performance Tracking"]
    }
  ]

  const strategies = [
    { icon: <PenLine />, title: "Content Marketing", desc: "Create valuable content to attract and retain customers" },
    { icon: <Target />, title: "PPC Advertising", desc: "Targeted advertising for immediate results" },
    { icon: <BarChart3 />, title: "Analytics & Reporting", desc: "Data-driven insights to optimize campaigns" },
    { icon: <TrendingUp />, title: "Conversion Optimization", desc: "Improve website conversion rates" }
  ]

  const metrics = [
    { number: "200%", label: "Increase in Website Traffic" },
    { number: "300%", label: "Improvement in Search Rankings" },
    { number: "150%", label: "Growth in Social Engagement" },
    { number: "250%", label: "Boost in Lead Generation" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Digital Growth"
        title="Digital Marketing"
        accent="Solutions"
        subtitle="Data-driven digital marketing strategies to grow your business and increase online visibility across Pakistan."
        image="/background/marketing-bg.webp"
        actions={{
          primary: { label: "Get Marketing Audit", href: "/Contact-us" },
          secondary: { label: "All Software Solutions", href: "/software-solutions" },
        }}
        stats={[
          { number: "300%", label: "ROI Average" },
          { number: "500+", label: "Campaigns" },
          { number: "24/7", label: "Monitoring" },
          { number: "Data-Driven", label: "Strategies" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Core Services"
          title={<>Marketing <Accent>services</Accent></>}
          lead="Comprehensive digital marketing solutions for businesses of all sizes."
        />
        <FeatureGrid columns={3} items={services} />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Strategies"
          title={<>Advanced <Accent>strategies</Accent></>}
          lead="Cutting-edge marketing strategies for maximum impact."
        />
        <FeatureGrid dark columns={4} items={strategies} />
      </Section>

      <Section>
        <SectionHeader
          align="center"
          eyebrow="Results"
          title={<>Proven <Accent>results</Accent></>}
          lead="Our data-driven approach delivers measurable results."
        />
        <StatStrip items={metrics} />
      </Section>

      <CTASection
        title={<>Grow your <Accent>business</Accent> online</>}
        text="Let us help you reach more customers and increase sales with data-driven digital marketing strategies tailored for Pakistan."
        primary={{ label: "Get Marketing Audit", href: "/Contact-us" }}
        secondary={{ label: "All Software Solutions", href: "/software-solutions" }}
      />
    </div>
  )
}
