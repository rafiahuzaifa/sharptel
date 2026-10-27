'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check, Shield, Server, Wifi, Cpu, Phone, Users, Zap } from 'lucide-react'
import {
  Accent,
  CTASection,
  FeatureGrid,
  PageHero,
  Reveal,
  Section,
  SectionHeader,
  TagCloud,
} from '@/app/components/premium'

const solutions = [
  {
    name: "Cyber Security",
    slug: "cyber-security",
    image: "/background/cyber-security.webp",
    icon: Shield,
    description: "Comprehensive protection against cyber threats with advanced firewall and threat detection systems.",
    features: ["Advanced Firewall", "Threat Intelligence", "24/7 Monitoring"]
  },
  {
    name: "Data Center & Colocation",
    slug: "data-center",
    image: "/background/data-center.webp",
    icon: Server,
    description: "Secure and reliable data center services with maximum uptime and professional support.",
    features: ["Tier III Design", "Redundant Power", "Carrier Neutral"]
  },
  {
    name: "Wi-Fi & Hotspot",
    slug: "wi-fi-hotspot",
    image: "/background/wifi-hotspot.webp",
    icon: Wifi,
    description: "High-performance wireless networks with secure access and centralized management.",
    features: ["Enterprise Wi-Fi", "Guest Management", "Mesh Networking"]
  },
  {
    name: "IoT & Automation",
    slug: "iot-automation",
    image: "/background/iot-automation.webp",
    icon: Cpu,
    description: "Intelligent automation solutions for smart buildings and industrial applications.",
    features: ["Smart Sensors", "Energy Management", "Remote Monitoring"]
  },
  {
    name: "Voice Over IP (VoIP)",
    slug: "voip-solutions",
    image: "/background/voip.webp",
    icon: Phone,
    description: "Reliable voice communication systems with advanced features for modern businesses.",
    features: ["HD Voice Quality", "Call Center Features", "Unified Comms"]
  },
]

export default function ClientSolutionsPage() {
  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Technology Solutions"
        title="Our Technology"
        accent="Solutions"
        subtitle="Enterprise-grade technology solutions designed to drive business growth and ensure operational excellence across Pakistan."
        image="/background/connectivity.webp"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/pages/solutions' }]}
        actions={{
          primary: { label: 'Request Consultation', href: '/Contact-us' },
          secondary: { label: 'Call +92-311-128-4373', href: 'tel:+92-311-128-4373' },
        }}
        stats={[
          { number: '18+', label: 'Years Experience' },
          { number: '500+', label: 'Projects Completed' },
          { number: '99.9%', label: 'Client Satisfaction' },
          { number: '24/7', label: 'Support' },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Solutions"
          title={<>Comprehensive <Accent>technology</Accent> solutions</>}
          lead="We provide end-to-end technology solutions that empower businesses to innovate, secure their operations, and achieve sustainable growth in today's digital landscape."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {solutions.map((s, i) => {
            const Icon = s.icon
            const wide = i < 2
            return (
              <Reveal key={s.slug} delay={(i % 3) * 0.06} className={wide ? 'lg:col-span-3' : 'lg:col-span-2'}>
                <Link
                  href={`/pages/solutions/${s.slug}`}
                  className="group relative block h-[440px] overflow-hidden rounded-3xl bg-gray-900"
                >
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    sizes={wide ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 100vw, 33vw'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors group-hover:border-red-500 group-hover:bg-red-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:border-red-500 group-hover:bg-red-600">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h3 className="mb-2 text-2xl font-semibold text-white" style={{ letterSpacing: '-0.02em' }}>{s.name}</h3>
                    <p className="mb-5 max-w-md text-sm leading-relaxed text-gray-300">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <span key={f} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-gray-200 backdrop-blur-md">
                          <Check className="h-3 w-3 text-red-400" strokeWidth={3} />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Why Sharptel"
          title={<>Why choose Sharptel <Accent>solutions?</Accent></>}
          lead="Need a tailored solution for your specific business requirements? Our experts can design a custom solution for you."
        />
        <FeatureGrid
          dark
          columns={3}
          items={[
            { icon: <Users />, title: 'Expert Team', desc: 'Certified professionals with 18+ years of industry experience.' },
            { icon: <Zap />, title: '24/7 Support', desc: 'Round-the-clock technical support and monitoring services.' },
            { icon: <Shield />, title: 'SLA Guarantee', desc: '99.9% uptime guarantee with comprehensive service level agreements.' },
          ]}
        />
      </Section>

      <Section>
        <SectionHeader
          align="center"
          eyebrow="Partners"
          title={<>Technology <Accent>partners</Accent></>}
          lead="We partner with industry-leading technology providers to deliver best-in-class solutions."
        />
        <div className="flex justify-center">
          <TagCloud items={['Cisco', 'Fortinet', 'VMware', 'HPE', 'Dell', 'Avaya']} />
        </div>
      </Section>

      <CTASection
        title={<>Ready to transform your <Accent>business?</Accent></>}
        text="Connect with our solutions experts to discuss how we can help you achieve your business goals."
        primary={{ label: 'Schedule a Demo', href: '/Contact-us' }}
        secondary={{ label: 'Call +92-311-128-4373', href: 'tel:+92-311-128-4373' }}
      />
    </div>
  )
}
