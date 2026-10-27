import { Building2, Database, Wifi, Landmark, Headphones, MapPin, Satellite, ShieldCheck, Zap, Clock } from "lucide-react"
import {
  Accent,
  CTASection,
  DarkPanel,
  FeatureGrid,
  PageHero,
  PanelChips,
  PointList,
  Section,
  SectionHeader,
  Split,
} from "@/app/components/premium"

const services = [
  {
    icon: <Building2 />,
    title: "Enterprise Internet Services",
    desc: "High-speed dedicated internet connections with 99.9% uptime SLA, fiber optic networks, and enterprise-grade security.",
    features: ["Dedicated Bandwidth", "24/7 Monitoring", "SLA Guarantee", "Enterprise Security"],
    href: "/connectivity-solutions/enterprise-solutions"
  },
  {
    icon: <Database />,
    title: "Data Solutions",
    desc: "Secure and scalable data connectivity solutions including MPLS, VPN, and SD-WAN for seamless business operations.",
    features: ["MPLS Networks", "VPN Solutions", "SD-WAN", "Data Security"],
    href: "/connectivity-solutions/data-solutions"
  },
  {
    icon: <Wifi />,
    title: "Wireless Services",
    desc: "Wireless broadband and point-to-point solutions for remote locations and last-mile connectivity challenges.",
    features: ["Wireless Broadband", "Point-to-Point", "5G Ready", "Rural Connectivity"],
    href: "/connectivity-solutions/wireless-connectivity"
  },
  {
    icon: <Landmark />,
    title: "Banking Enterprise Services",
    desc: "Secure and reliable connectivity solutions specifically designed for financial institutions and banking operations.",
    features: ["Secure Networks", "Banking Compliance", "Redundant Links", "Low Latency"],
    href: "/connectivity-solutions/banking-enterprise"
  },
  {
    icon: <Headphones />,
    title: "Call Center Services",
    desc: "Dedicated connectivity solutions with QoS for voice and data traffic optimization in call center environments.",
    features: ["QoS Enabled", "Voice Optimized", "Redundant Paths", "24/7 Support"],
    href: "/connectivity-solutions/call-service"
  },
  {
    icon: <MapPin />,
    title: "Coverage Areas & Cities",
    desc: "Extensive network coverage across major cities with local support and multiple POP locations.",
    features: ["Major Cities", "Multiple POPs", "Local Support", "Growing Network"],
    href: "/connectivity-solutions/coverage-area"
  },
  {
    icon: <Satellite />,
    title: "Satellite Service",
    desc: "Satellite-based connectivity solutions for remote locations, maritime, and areas without terrestrial connectivity.",
    features: ["Remote Access", "Maritime Solutions", "Global Coverage", "VSAT Technology"],
    href: "/connectivity-solutions/satellite-service"
  }
]

const clients = ["HBL", "Jazz", "K-Electric", "UBL", "PTCL", "Bank Alfalah"]

const stats = [
  { number: "99.9%", label: "Network Uptime" },
  { number: "24/7", label: "Support Available" },
  { number: "50+", label: "Cities Coverage" },
  { number: "1000+", label: "Enterprise Clients" }
]

export default function ConnectivityServices() {
  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Enterprise Connectivity Solutions"
        title="Powering Digital"
        accent="Transformation"
        subtitle="Sharptel provides enterprise-grade connectivity solutions with unmatched reliability, security, and performance for businesses across Pakistan."
        image="/background/b2.jpg"
        actions={{
          primary: { label: "Get Enterprise Quote", href: "/Contact-us" },
          secondary: { label: "Explore Services", href: "#services" },
        }}
        stats={stats}
      />

      <Section id="services">
        <SectionHeader
          eyebrow="Connectivity"
          title={<>Our <Accent>connectivity</Accent> solutions</>}
          lead="Comprehensive connectivity services designed to meet the demands of modern enterprises."
        />
        <FeatureGrid columns={3} items={services} />
      </Section>

      <Section tone="muted">
        <Split
          left={
            <>
              <SectionHeader align="left" eyebrow="Why Sharptel" title={<>Why <Accent>choose</Accent> Sharptel?</>} className="!mb-8" />
              <PointList
                items={[
                  { icon: <ShieldCheck />, title: "Enterprise Security", desc: "Multi-layered security with DDoS protection, firewalls, and 24/7 threat monitoring." },
                  { icon: <Zap />, title: "High Performance", desc: "Low latency networks with dedicated bandwidth and optimal routing." },
                  { icon: <Clock />, title: "24/7 Support", desc: "Round-the-clock technical support with dedicated account managers." },
                ]}
              />
            </>
          }
          right={
            <DarkPanel
              title="Trusted By Industry Leaders"
              subtitle="We serve leading enterprises across banking, telecom, manufacturing, and government sectors."
              footer={
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-semibold text-white" style={{ letterSpacing: "-0.04em" }}>15+ Years</span>
                  <span className="text-sm uppercase tracking-[0.15em] text-gray-400">Industry Experience</span>
                </div>
              }
            >
              <PanelChips items={clients} />
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Ready to transform your business <Accent>connectivity?</Accent></>}
        text="Get in touch with our experts for a free network assessment and customized solution proposal."
        primary={{ label: "Request Free Consultation", href: "/Contact-us" }}
        secondary={{ label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
