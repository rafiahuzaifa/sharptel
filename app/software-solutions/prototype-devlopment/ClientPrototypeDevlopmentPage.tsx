"use client"

import { Ruler, MousePointerClick, Palette, Figma, PenTool, Sparkles, Gem } from "lucide-react"
import { Accent, CTASection, FeatureGrid, PageHero, Section, SectionHeader, Steps } from "@/app/components/premium"

export default function ClientPrototypeDevlopmentPage() {
  const prototypes = [
    {
      icon: <Ruler />,
      title: "Wireframe Prototypes",
      desc: "Basic layout and structure visualization",
      features: ["Low Fidelity", "Quick Iterations", "Layout Planning"]
    },
    {
      icon: <MousePointerClick />,
      title: "Interactive Prototypes",
      desc: "Clickable prototypes with user flows",
      features: ["User Testing", "Flow Validation", "Interactive Elements"]
    },
    {
      icon: <Palette />,
      title: "High-Fidelity Prototypes",
      desc: "Pixel-perfect designs with animations",
      features: ["Visual Design", "Animations", "Device Testing"]
    }
  ]

  const process = [
    { title: "Concept Ideation", desc: "Brainstorming and requirement gathering" },
    { title: "Wireframing", desc: "Creating basic structure and layout" },
    { title: "Interactive Prototype", desc: "Adding interactions and user flows" },
    { title: "User Testing", desc: "Testing and gathering feedback" },
    { title: "Refinement", desc: "Iterating based on feedback" },
    { title: "Handoff", desc: "Ready for development" }
  ]

  const tools = [
    { icon: <Figma />, title: "Figma", desc: "Collaborative interface design tool" },
    { icon: <PenTool />, title: "Adobe XD", desc: "UX/UI design and prototyping" },
    { icon: <Sparkles />, title: "InVision", desc: "Digital product design platform" },
    { icon: <Gem />, title: "Sketch", desc: "Vector-based design tool" }
  ]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Rapid Prototyping"
        title="Prototype"
        accent="Development"
        subtitle="Transform your ideas into interactive prototypes. Test, validate, and refine your concepts before full-scale development."
        image="/background/prototype-bg.webp"
        actions={{
          primary: { label: "Start Prototyping", href: "/Contact-us" },
          secondary: { label: "All Software Solutions", href: "/software-solutions" },
        }}
        stats={[
          { number: "7-14 Days", label: "Prototype Delivery" },
          { number: "50+", label: "Prototypes Delivered" },
          { number: "90%", label: "Success Rate" },
          { number: "Iterative", label: "Approach" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Prototype Types"
          title={<>From <Accent>concept</Accent> to reality</>}
          lead="Different levels of prototyping for various stages of your project."
        />
        <FeatureGrid columns={3} items={prototypes} />
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="How We Work"
          title={<>Our <Accent>process</Accent></>}
          lead="Structured approach to prototype development."
        />
        <Steps items={process} />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Toolkit"
          title={<>Industry <Accent>tools</Accent></>}
          lead="We use industry-leading tools for prototype development."
        />
        <FeatureGrid dark columns={4} items={tools} />
      </Section>

      <CTASection
        title={<>Test your <Accent>idea</Accent> first</>}
        text="Validate your concept with a prototype before investing in full development. Save time and resources with our rapid prototyping services."
        primary={{ label: "Start Prototyping", href: "/Contact-us" }}
        secondary={{ label: "All Software Solutions", href: "/software-solutions" }}
      />
    </div>
  )
}
