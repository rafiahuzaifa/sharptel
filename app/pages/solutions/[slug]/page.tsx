'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
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
  TagCloud,
} from '@/app/components/premium'
import { Shield, Server, Wifi, Cpu, Phone, ArrowLeft, CheckCircle, Users, Building, Zap, Clock, ShieldCheck, Target, BarChart3, Headphones, FileText, Globe, Lock, Database, Radio } from 'lucide-react'

interface Solution {
  title: string
  keypoints: string[]
  description: string
  image: string
  benefits: string[]
  useCases: string[]
  technologies: string[]
  icon: React.ComponentType<any>
  industries: string[]
  features: { title: string; description: string; icon: React.ComponentType<any> }[]
  stats: { label: string; value: string; icon: React.ComponentType<any> }[]
}

// Icon mapping
const icons: Record<string, React.ComponentType<any>> = {
  "cyber-security": Shield,
  "data-center": Server,
  "wi-fi-hotspot": Wifi,
  "iot-automation": Cpu,
  "voip-solutions": Phone
}

// Feature icons for each solution
const featureIcons = {
  "cyber-security": [ShieldCheck, Lock, Globe],
  "data-center": [Database, Server, Radio],
  "wi-fi-hotspot": [Wifi, Globe, Radio],
  "iot-automation": [Cpu, BarChart3, Target],
  "voip-solutions": [Phone, Headphones, FileText]
}

// Detailed content for each solution
const solutionContent: Record<string, Solution> = {
  "cyber-security": {
    title: "Cyber Security Solutions",
    keypoints: ["UTM Firewalls", "Network Security", "Email Security", "Web Filtering"],
    description: "Complete enterprise cybersecurity protection with advanced threat detection and prevention systems to safeguard your business assets.",
    image: "/images/solutions/cyber-security.jpg",
    benefits: [
      "Protection against cyber threats",
      "Compliance with regulations",
      "Real-time threat monitoring",
      "Business continuity assurance"
    ],
    useCases: [
      "Banking & Financial Security",
      "Enterprise Network Protection",
      "Government Security",
      "Data Privacy Compliance"
    ],
    technologies: ["Cisco Firepower", "Fortinet UTM", "Palo Alto", "Sophos"],
    icon: Shield,
    industries: ["Banking", "Government", "Healthcare", "Corporate"],
    features: [
      {
        title: "Advanced Firewall",
        description: "Next-generation firewall with intrusion prevention",
        icon: ShieldCheck
      },
      {
        title: "Data Encryption",
        description: "End-to-end encryption for sensitive data",
        icon: Lock
      },
      {
        title: "Threat Intelligence",
        description: "Real-time threat detection and response",
        icon: Globe
      }
    ],
    stats: [
      {
        label: "Threat Detection",
        value: "99.9%",
        icon: ShieldCheck
      },
      {
        label: "Response Time",
        value: "< 2min",
        icon: Clock
      },
      {
        label: "Uptime",
        value: "99.99%",
        icon: Zap
      }
    ]
  },
  "data-center": {
    title: "Data Center & Colocation",
    keypoints: ["Server Hosting", "Storage Solutions", "Backup & Recovery", "High Availability"],
    description: "Reliable and secure data center services with maximum uptime and professional support for your critical infrastructure.",
    image: "/images/solutions/data-center.jpg",
    benefits: [
      "High availability infrastructure",
      "Secure data storage",
      "Disaster recovery",
      "Scalable solutions"
    ],
    useCases: [
      "Enterprise Server Hosting",
      "Disaster Recovery",
      "Cloud Infrastructure",
      "Managed Services"
    ],
    technologies: ["VMware", "Cisco UCS", "HPE", "Dell EMC"],
    icon: Server,
    industries: ["IT Services", "Finance", "Healthcare", "Education"],
    features: [
      {
        title: "Tier III Design",
        description: "Redundant power and cooling systems",
        icon: Database
      },
      {
        title: "24/7 Monitoring",
        description: "Round-the-clock infrastructure monitoring",
        icon: Server
      },
      {
        title: "Carrier Neutral",
        description: "Multiple ISP connectivity options",
        icon: Radio
      }
    ],
    stats: [
      {
        label: "Uptime SLA",
        value: "99.99%",
        icon: Zap
      },
      {
        label: "Power Redundancy",
        value: "N+1",
        icon: Server
      },
      {
        label: "Security Levels",
        value: "3-Tier",
        icon: Shield
      }
    ]
  },
  "wi-fi-hotspot": {
    title: "Wi-Fi & Hotspot Solutions",
    keypoints: ["Enterprise Wi-Fi", "Mesh Networks", "Guest Management", "Central Control"],
    description: "High-performance wireless networks for businesses with secure access and centralized management capabilities.",
    image: "/images/solutions/wi-fi-hotspot.jpg",
    benefits: [
      "Seamless connectivity",
      "Secure access control",
      "Central management",
      "Scalable deployment"
    ],
    useCases: [
      "Corporate Offices",
      "Shopping Malls",
      "Hotels",
      "Educational Campuses"
    ],
    technologies: ["Cisco Meraki", "Aruba", "Ruckus", "Ubiquiti"],
    icon: Wifi,
    industries: ["Hospitality", "Retail", "Education", "Corporate"],
    features: [
      {
        title: "High Density",
        description: "Support for multiple concurrent users",
        icon: Wifi
      },
      {
        title: "Guest Portal",
        description: "Customizable guest access portal",
        icon: Globe
      },
      {
        title: "Mesh Networking",
        description: "Seamless coverage across large areas",
        icon: Radio
      }
    ],
    stats: [
      {
        label: "Max Speed",
        value: "1.7Gbps",
        icon: Zap
      },
      {
        label: "User Capacity",
        value: "500+",
        icon: Users
      },
      {
        label: "Coverage",
        value: "10K sq.ft",
        icon: Target
      }
    ]
  },
  "iot-automation": {
    title: "IoT & Automation",
    keypoints: ["Smart Sensors", "Building Automation", "Remote Monitoring", "Energy Management"],
    description: "Intelligent automation solutions for smart buildings and industrial applications with real-time monitoring capabilities.",
    image: "/images/solutions/iot-automation.jpg",
    benefits: [
      "Energy efficiency",
      "Remote monitoring",
      "Predictive maintenance",
      "Process automation"
    ],
    useCases: [
      "Smart Buildings",
      "Industrial Automation",
      "Energy Management",
      "Asset Tracking"
    ],
    technologies: ["Siemens", "Schneider", "Honeywell", "IoT Sensors"],
    icon: Cpu,
    industries: ["Manufacturing", "Real Estate", "Healthcare", "Agriculture"],
    features: [
      {
        title: "Smart Sensors",
        description: "Real-time environmental monitoring",
        icon: Cpu
      },
      {
        title: "Energy Analytics",
        description: "Detailed energy consumption reports",
        icon: BarChart3
      },
      {
        title: "Predictive Alerts",
        description: "Early warning for maintenance needs",
        icon: Target
      }
    ],
    stats: [
      {
        label: "Energy Saving",
        value: "Up to 40%",
        icon: Zap
      },
      {
        label: "ROI Period",
        value: "< 2 Years",
        icon: BarChart3
      },
      {
        label: "Monitoring",
        value: "24/7",
        icon: Clock
      }
    ]
  },
  "voip-solutions": {
    title: "Voice Over IP (VoIP)",
    keypoints: ["IP Phones", "PBX Systems", "Call Center", "Unified Comms"],
    description: "Reliable voice communication systems with advanced features for modern business requirements.",
    image: "/images/solutions/voip-solutions.jpg",
    benefits: [
      "Cost effective",
      "Scalable systems",
      "Unified communications",
      "High quality audio"
    ],
    useCases: [
      "Corporate Telephony",
      "Call Centers",
      "Remote Workforce",
      "Multi-site Business"
    ],
    technologies: ["Cisco", "Avaya", "3CX", "Grandstream"],
    icon: Phone,
    industries: ["Call Centers", "Healthcare", "Education", "Corporate"],
    features: [
      {
        title: "Crystal Clear Audio",
        description: "HD voice quality for clear conversations",
        icon: Phone
      },
      {
        title: "Call Center Features",
        description: "IVR, ACD, and call analytics",
        icon: Headphones
      },
      {
        title: "Call Recording",
        description: "Secure call recording and storage",
        icon: FileText
      }
    ],
    stats: [
      {
        label: "Cost Saving",
        value: "Up to 50%",
        icon: BarChart3
      },
      {
        label: "Call Quality",
        value: "HD Voice",
        icon: Phone
      },
      {
        label: "Uptime",
        value: "99.999%",
        icon: Zap
      }
    ]
  }
}

// Hero imagery from public/background (the original /images/solutions/* files never existed).
const heroImages: Record<string, string> = {
  "cyber-security": "/background/cyber-security.webp",
  "data-center": "/background/data-center.webp",
  "wi-fi-hotspot": "/background/wifi-hotspot.webp",
  "iot-automation": "/background/iot-automation.webp",
  "voip-solutions": "/background/voip.webp",
}

export default function SolutionDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const solution = slug ? solutionContent[slug] : null

  if (!solution) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="section-title">Solution not <span className="accent">found</span></h1>
        <p className="text-gray-600">The solution you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/pages/solutions" className="btn-primary">
          <ArrowLeft className="h-4 w-4" />
          Back to Solutions
        </Link>
      </div>
    )
  }

  const icons = featureIcons[slug as keyof typeof featureIcons] ?? []

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow={solution.keypoints.join(" · ")}
        title={solution.title}
        subtitle={solution.description}
        image={heroImages[slug]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/pages/solutions" },
          { label: solution.title, href: "#" },
        ]}
        actions={{
          primary: { label: "Request Consultation", href: "/Contact-us" },
          secondary: { label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          ...solution.stats.map((s) => ({ number: s.value, label: s.label })),
          { number: "24/7", label: "Support" },
        ].slice(0, 4)}
      />

      <Section>
        <SectionHeader
          eyebrow="Capabilities"
          title={<>Key <Accent>features</Accent></>}
          lead={solution.description}
        />
        <FeatureGrid
          columns={3}
          items={solution.features.map((f, i) => {
            const FIcon = f.icon ?? icons[i]
            return { icon: FIcon ? <FIcon /> : undefined, title: f.title, desc: f.description }
          })}
        />
      </Section>

      <Section tone="muted">
        <Split
          left={
            <>
              <SectionHeader align="left" eyebrow="Outcomes" title={<>Business <Accent>benefits</Accent></>} className="!mb-8" />
              <ul className="mb-14 grid gap-x-8 sm:grid-cols-2">
                {solution.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 border-b border-gray-200/80 py-4 text-gray-800">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    {b}
                  </li>
                ))}
              </ul>
              <SectionHeader align="left" eyebrow="Use Cases" title={<>Where it <Accent>fits</Accent></>} className="!mb-8" />
              <PointList items={solution.useCases.map((u) => ({ title: u }))} />
            </>
          }
          right={
            <DarkPanel
              title="Technologies"
              subtitle="Platforms we design, deploy and support."
              footer={
                <>
                  <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-gray-400">Industries</div>
                  <TagCloud dark items={solution.industries} />
                </>
              }
            >
              <PanelChips items={solution.technologies} />
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Ready to deploy <Accent>{solution.title}?</Accent></>}
        text="Connect with our solutions experts to design the right architecture for your business."
        primary={{ label: "Request Consultation", href: "/Contact-us" }}
        secondary={{ label: "All Solutions", href: "/pages/solutions" }}
      />
    </div>
  )
}
