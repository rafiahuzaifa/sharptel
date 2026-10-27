'use client'

import { Globe, Server, Network, Video, Shield, Phone, Users, Clock, Database, Wifi, Cloud, MessageSquare } from 'lucide-react'
import {
  Accent,
  CTASection,
  FeatureGrid,
  PageHero,
  Reveal,
  Section,
  SectionHeader,
  Steps,
} from '@/app/components/premium'

const services = [
  {
    title: 'Enterprise Internet',
    desc: 'High-speed dedicated internet connectivity with SLA guarantees for businesses requiring reliable and secure internet access.',
    features: ['Dedicated Bandwidth', '99.9% Uptime SLA', '24/7 Support', 'Enterprise Security'],
    href: '/pages/services/enterprise-internet',
    icon: <Globe />,
    industries: ['Corporate Offices', 'Banks', 'Educational Institutes', 'Healthcare']
  },
  {
    title: 'Internet Data Center (IDC)',
    desc: 'Secure and reliable data center services with complete infrastructure for hosting critical business applications.',
    features: ['Tier III Design', 'Redundant Power', 'Physical Security', 'Climate Control'],
    href: '/pages/services/internet-data-center',
    icon: <Server />,
    industries: ['IT Companies', 'E-commerce', 'Financial Services', 'Government']
  },
  {
    title: 'Leased Line',
    desc: 'Point-to-point dedicated connectivity solutions for mission-critical applications requiring guaranteed bandwidth.',
    features: ['Dedicated Circuit', 'Low Latency', 'High Security', 'Scalable Bandwidth'],
    href: '/pages/services/leased-line',
    icon: <Network />,
    industries: ['Banks', 'Call Centers', 'Manufacturing', 'Corporate Offices']
  },
  {
    title: 'Audio Video Conferencing',
    desc: 'Complete conferencing solutions enabling seamless communication and collaboration across locations.',
    features: ['HD Video Quality', 'Crystal Clear Audio', 'Screen Sharing', 'Recording'],
    href: '/pages/services/audio-video-conferencing',
    icon: <Video />,
    industries: ['Corporate', 'Education', 'Healthcare', 'Government']
  },
  {
    title: 'Data Security & Business Continuity',
    desc: 'Comprehensive security solutions protecting your data and ensuring business continuity during disruptions.',
    features: ['Firewall Protection', 'VPN Solutions', 'Backup Systems', 'DR Planning'],
    href: '/pages/services/data-services',
    icon: <Shield />,
    industries: ['Banks', 'Healthcare', 'Corporate', 'Government']
  },
  {
    title: 'Call Center Solution',
    desc: 'Complete call center setup with advanced features, analytics, and integration capabilities.',
    features: ['IVR System', 'CRM Integration', 'Call Recording', 'Real-time Analytics'],
    href: '/pages/services/call-center-solution',
    icon: <Phone />,
    industries: ['Customer Support', 'Sales Centers', 'Telemarketing', 'Help Desks']
  }
]

const process = [
  { title: 'Consultation', desc: 'Understand your business requirements and challenges' },
  { title: 'Planning', desc: 'Design customized solution architecture' },
  { title: 'Implementation', desc: 'Deploy and configure the solution' },
  { title: 'Support', desc: 'Ongoing maintenance and optimization' }
]

const whyUs = [
  { icon: <Users />, title: 'Expert Team', desc: 'Certified professionals with extensive industry experience' },
  { icon: <Clock />, title: '24/7 Support', desc: 'Round-the-clock technical support and monitoring' },
  { icon: <Shield />, title: 'SLA Guarantee', desc: 'Service Level Agreements ensuring reliability' },
  { icon: <Database />, title: 'Custom Solutions', desc: 'Tailored solutions for unique business needs' }
]

const additional = [
  { icon: <Network />, title: 'Network Design', desc: 'Custom network architecture planning' },
  { icon: <Wifi />, title: 'Wireless Solutions', desc: 'Enterprise Wi-Fi and hotspot setups' },
  { icon: <Cloud />, title: 'Cloud Services', desc: 'Cloud migration and management' },
  { icon: <MessageSquare />, title: 'Consulting', desc: 'IT strategy and planning services' }
]

export default function ClientServicesPage() {
  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Professional Services"
        title="Our Professional"
        accent="Services"
        subtitle="Comprehensive ICT services designed to empower your business with reliable, secure, and innovative technology solutions."
        image="/background/network-conference.webp"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/pages/services' }]}
        actions={{
          primary: { label: 'Request Free Consultation', href: '/Contact-us' },
          secondary: { label: 'Call +92-311-128-4373', href: 'tel:+92-311-128-4373' },
        }}
        stats={[
          { number: '500+', label: 'Enterprise Clients' },
          { number: '24/7', label: 'Technical Support' },
          { number: '99.9%', label: 'Service Uptime' },
          { number: '6', label: 'Core Services' },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Core Services"
          title={<>Comprehensive <Accent>ICT services</Accent></>}
          lead="We deliver end-to-end ICT services that drive business growth, enhance security, and ensure operational excellence across all industries."
        />
        <FeatureGrid
          columns={3}
          items={services.map((s) => ({
            ...s,
            meta: (
              <div className="mt-6 flex flex-wrap gap-2">
                {s.industries.slice(0, 3).map((i) => (
                  <span key={i} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                    {i}
                  </span>
                ))}
              </div>
            ),
          }))}
        />
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="How We Deliver"
          title={<>Our service delivery <Accent>process</Accent></>}
          lead="We follow a systematic approach to ensure successful implementation and optimal results."
        />
        <Steps items={process} />
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Why Sharptel"
          title={<>Why choose Sharptel <Accent>services?</Accent></>}
          lead="Our experts can design a tailored solution specifically for your business requirements."
        />
        <FeatureGrid dark columns={4} items={whyUs} />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="More"
          title={<>Additional professional <Accent>services</Accent></>}
          lead="Beyond our core offerings, we provide specialized services to meet diverse business needs."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {additional.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="premium-card group flex h-full items-start gap-4 p-6">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white [&_svg]:h-5 [&_svg]:w-5">
                  {a.icon}
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">{a.title}</h3>
                  <p className="text-sm text-gray-600">{a.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title={<>Ready to transform your <Accent>business?</Accent></>}
        text="Connect with our service experts to discuss how we can help you achieve your business objectives."
        primary={{ label: 'Get Started Today', href: '/Contact-us' }}
        secondary={{ label: 'Call +92-311-128-4373', href: 'tel:+92-311-128-4373' }}
      />
    </div>
  )
}
