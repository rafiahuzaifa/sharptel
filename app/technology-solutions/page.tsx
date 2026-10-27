import { ShieldCheck, Server, Activity, Wifi, Cpu, Zap, Camera, Cloud, Phone } from "lucide-react"
import {
  Accent,
  CTASection,
  FeatureGrid,
  PageHero,
  Reveal,
  Section,
  SectionHeader,
  TagCloud,
} from "@/app/components/premium"

const technologySolutions = [
  {
    icon: <ShieldCheck />,
    title: "Cyber Security Solutions",
    desc: "Comprehensive security solutions including firewall protection, intrusion detection, and threat intelligence.",
    features: ["Next-Gen Firewalls", "SIEM Solutions", "Endpoint Security", "Vulnerability Assessment"],
    href: "/technology-solutions/cyber-security"
  },
  {
    icon: <Server />,
    title: "Data Center & Colocation",
    desc: "Tier-3 data center facilities with redundant power, cooling, and network infrastructure.",
    features: ["Tier-3 Facilities", "Redundant Power", "24/7 Monitoring", "Disaster Recovery"],
    href: "/technology-solutions/data-center"
  },
  {
    icon: <Activity />,
    title: "Network Assessment",
    desc: "Comprehensive network analysis and optimization services for improved performance.",
    features: ["Network Audits", "Performance Optimization", "Security Assessment", "Capacity Planning"],
    href: "/technology-solutions/network-assesment"
  },
  {
    icon: <Wifi />,
    title: "Hotspot/Wi-Fi Solutions",
    desc: "Enterprise-grade Wi-Fi solutions with captive portals and analytics.",
    features: ["Enterprise Wi-Fi", "Captive Portals", "User Analytics", "Mesh Networks"],
    href: "/technology-solutions/hotspot-wifi"
  },
  {
    icon: <Cpu />,
    title: "IoT & Automation",
    desc: "Smart IoT solutions for industrial automation, smart cities, and building management.",
    features: ["Industrial IoT", "Smart Sensors", "Automation Control", "Real-time Monitoring"],
    href: "/technology-solutions/iot-automation"
  },
  {
    icon: <Zap />,
    title: "Energy Conservation",
    desc: "Smart energy management solutions for cost reduction and sustainability.",
    features: ["Energy Monitoring", "Smart Grid Solutions", "Solar Integration", "Energy Analytics"],
    href: "/technology-solutions/energy-conversation"
  },
  {
    icon: <Camera />,
    title: "Surveillance & Security",
    desc: "Advanced CCTV and surveillance systems with AI-powered analytics.",
    features: ["IP CCTV Systems", "Video Analytics", "Access Control", "Central Monitoring"],
    href: "/technology-solutions/survellience-soluition"
  },
  {
    icon: <Cloud />,
    title: "Virtual Private Server",
    desc: "Secure and scalable VPS hosting with dedicated resources and full control.",
    features: ["SSD Storage", "Dedicated Resources", "Root Access", "Backup Solutions"],
    href: "/technology-solutions/virtual-solution"
  },
  {
    icon: <Phone />,
    title: "VOIP Solutions",
    desc: "Cost-effective Voice over IP solutions with enterprise features.",
    features: ["IP PBX Systems", "SIP Trunking", "Call Center Solutions", "Mobile Integration"],
    href: "/technology-solutions/voice-over"
  }
]

const caseStudies = [
  { title: "Banking Sector Security", client: "Major Pakistani Bank", result: "99.9% threat detection rate", desc: "Implemented comprehensive cybersecurity framework" },
  { title: "Smart City IoT", client: "Government Project", result: "40% energy savings", desc: "Deployed IoT sensors for smart city management" },
  { title: "Enterprise Data Center", client: "Telecom Company", result: "Tier-3 certification", desc: "Built redundant data center infrastructure" }
]

const partners = ["Cisco", "Fortinet", "Microsoft", "Dell EMC", "HP Enterprise", "VMware", "Palo Alto", "Hikvision"]

export default function TechnologySolutions() {
  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Future-Ready Technology Solutions"
        title="Advanced Technology"
        accent="Solutions for Tomorrow"
        subtitle="Harness the power of cutting-edge technology with our comprehensive solutions designed to drive innovation, enhance security, and optimize operations."
        image="/background/b4.jpg"
        actions={{
          primary: { label: "Get Technology Assessment", href: "/Contact-us" },
          secondary: { label: "Explore Solutions", href: "#solutions" },
        }}
      />

      <Section id="solutions">
        <SectionHeader
          eyebrow="Solutions"
          title={<>Comprehensive <Accent>technology</Accent> solutions</>}
          lead="End-to-end technology solutions tailored to meet the evolving needs of modern enterprises."
        />
        <FeatureGrid columns={3} items={technologySolutions} />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Case Studies"
          title={<>Success <Accent>stories</Accent></>}
          lead="Real-world implementations delivering measurable results."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {caseStudies.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-red-500/40 hover:bg-white/[0.06]">
                <div className="mb-8 font-mono text-xs tracking-[0.2em] text-red-500">{String(i + 1).padStart(2, "0")}</div>
                <div className="mb-2 text-3xl font-semibold text-white" style={{ letterSpacing: "-0.03em" }}>{s.result}</div>
                <h3 className="mb-3 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mb-8 text-gray-400">{s.desc}</p>
                <div className="border-t border-white/10 pt-5 text-sm">
                  <span className="text-gray-500">Client · </span>
                  <span className="text-gray-200">{s.client}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          align="center"
          eyebrow="Partners"
          title={<>Technology <Accent>partnerships</Accent></>}
          lead="We partner with industry-leading technology providers to deliver best-in-class solutions."
        />
        <div className="mx-auto flex max-w-4xl justify-center">
          <TagCloud items={partners} />
        </div>
      </Section>

      <CTASection
        title={<>Ready to transform your <Accent>technology infrastructure?</Accent></>}
        text="Contact our technology experts for a comprehensive assessment and customized solution proposal. Free initial assessment · Custom solution design · Implementation support."
        primary={{ label: "Schedule Technology Consultation", href: "/Contact-us" }}
        secondary={{ label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
