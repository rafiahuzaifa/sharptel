"use client"

import { Apple, Smartphone, Globe, Palette, Plug, FlaskConical, TrendingUp, ShoppingCart, HeartPulse, GraduationCap } from "lucide-react"
import { Accent, ChecklistCards, CTASection, FeatureGrid, PageHero, Section, SectionHeader } from "@/app/components/premium"

export default function ClientMobileAppDevlopmentPage() {
  const platforms = [
    {
      icon: <Apple />,
      title: "iOS Development",
      desc: "Native iOS apps with Swift and SwiftUI",
      features: ["iPhone Apps", "iPad Apps", "Apple Watch", "App Store Deployment"]
    },
    {
      icon: <Smartphone />,
      title: "Android Development",
      desc: "Native Android apps with Kotlin and Jetpack Compose",
      features: ["Phone & Tablet Apps", "Android TV", "Wear OS", "Play Store Deployment"]
    },
    {
      icon: <Globe />,
      title: "Cross-Platform",
      desc: "Single codebase for multiple platforms",
      features: ["React Native", "Flutter", "Xamarin", "Progressive Web Apps"]
    }
  ]

  const services = [
    { icon: <Palette />, title: "UI/UX Design", desc: "Intuitive and beautiful mobile interfaces" },
    { icon: <Plug />, title: "API Integration", desc: "Seamless integration with backend services" },
    { icon: <FlaskConical />, title: "App Testing", desc: "Quality assurance across all devices" },
    { icon: <TrendingUp />, title: "App Store Optimization", desc: "Maximize visibility and downloads" }
  ]

  const industries = [
    { icon: <ShoppingCart />, title: "E-Commerce", desc: "Mobile shopping experiences", items: ["Product Catalogs", "Payment Gateways", "Order Tracking"] },
    { icon: <HeartPulse />, title: "Healthcare", desc: "Medical and wellness applications", items: ["Appointment Booking", "Telemedicine", "Health Tracking"] },
    { icon: <GraduationCap />, title: "Education", desc: "Learning and training platforms", items: ["E-Learning", "Virtual Classes", "Progress Tracking"] }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Mobile Solutions"
        title="Mobile Apps"
        accent="Development"
        subtitle="Native and cross-platform mobile applications for iOS and Android, delivering exceptional user experiences across Pakistan."
        image="/background/mobile-bg.webp"
        actions={{
          primary: { label: "Start Your Project", href: "/Contact-us" },
          secondary: { label: "All Software Solutions", href: "/software-solutions" },
        }}
        stats={[
          { number: "iOS & Android", label: "Platforms" },
          { number: "100+", label: "Apps Delivered" },
          { number: "4.8/5", label: "App Store Rating" },
          { number: "24/7", label: "Support" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Development Platforms"
          title={<>Cross-platform <Accent>expertise</Accent></>}
          lead="We develop for all major mobile platforms using latest technologies."
        />
        <FeatureGrid columns={3} items={platforms} />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="What We Do"
          title={<>Our <Accent>services</Accent></>}
          lead="End-to-end mobile app development services."
        />
        <FeatureGrid dark columns={4} items={services} />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Industries"
          title={<>Industry <Accent>solutions</Accent></>}
          lead="Custom mobile solutions for diverse industries."
        />
        <ChecklistCards items={industries} />
      </Section>

      <CTASection
        title={<>Launch your <Accent>app</Accent> today</>}
        text="Transform your business with a custom mobile application. Let's build something amazing together."
        primary={{ label: "Start Your Project", href: "/Contact-us" }}
        secondary={{ label: "All Software Solutions", href: "/software-solutions" }}
      />
    </div>
  )
}
