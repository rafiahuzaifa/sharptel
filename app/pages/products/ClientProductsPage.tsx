'use client'

import Link from 'next/link'
import { ArrowRight, Check, Wifi, Network, Video, Speaker, Camera, Phone, ShieldCheck, Fingerprint } from 'lucide-react'
import { Accent, CTASection, PageHero, Reveal, Section, SectionHeader } from '@/app/components/premium'

const products = [
  { category: 'Wi-Fi Solutions', icon: Wifi, items: ['Enterprise Access Points', 'Mesh Wi-Fi Systems', 'Outdoor Wi-Fi', 'Guest Wi-Fi Portal'], slug: 'wi-fi-solutions' },
  { category: 'Network Solutions', icon: Network, items: ['Switches & Routers', 'Firewalls', 'Load Balancers', 'SD-WAN Controllers'], slug: 'network-solutions' },
  { category: 'Video Conferencing', icon: Video, items: ['Conference Cameras', 'Touch Panels', 'Control Systems', 'Room Kits'], slug: 'video-conferencing' },
  { category: 'Audio Solutions', icon: Speaker, items: ['Ceiling Speakers', 'Sound Systems', 'Mixers & Amplifiers', 'Wireless Mics'], slug: 'audio-solutions' },
  { category: 'Surveillance Systems', icon: Camera, items: ['IP Cameras', 'NVR Systems', 'Video Analytics', 'Accessories'], slug: 'surveillance-systems' },
  { category: 'VOIP Solutions', icon: Phone, items: ['IP Phones', 'PBX Systems', 'Gateways', 'Call Center Phones'], slug: 'voip-solutions' },
  { category: 'Network Security', icon: ShieldCheck, items: ['UTM Firewalls', 'VPN Solutions', 'Email Security', 'Web Filtering'], slug: 'network-security' },
  { category: 'Access Control', icon: Fingerprint, items: ['Biometric Systems', 'Card Readers', 'Turnstiles', 'Visitor Management'], slug: 'access-control' }
]

export default function ClientProductsPage() {
  return (
    <div className="bg-white text-gray-800">
      <PageHero
        compact
        eyebrow="Hardware & Software"
        title="Our"
        accent="Products"
        subtitle="High-quality hardware and software solutions from leading global brands."
        image="/background/data-flow.webp"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/pages/products' }]}
      />

      <Section>
        <SectionHeader
          eyebrow="Catalog"
          title={<>Product <Accent>categories</Accent></>}
          lead="Sourced from global brands, configured and supported by our engineers."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.slug} delay={(i % 4) * 0.06}>
                <Link href={`/products/${p.slug}`} className="premium-card group flex h-full flex-col p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-white transition-colors group-hover:bg-red-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs tracking-[0.2em] text-gray-300">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mb-5 text-xl font-semibold text-gray-900" style={{ letterSpacing: '-0.02em' }}>{p.category}</h3>
                  <ul className="mb-8 space-y-2.5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <Check className="h-4 w-4 flex-shrink-0 text-red-600" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-semibold text-gray-900 group-hover:text-red-600">
                    View Products
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <CTASection
        title={<>Need help choosing the right <Accent>hardware?</Accent></>}
        text="Our engineers will recommend, supply and install the right equipment for your environment."
        primary={{ label: 'Request a Quote', href: '/Contact-us' }}
        secondary={{ label: 'Call +92-311-128-4373', href: 'tel:+92-311-128-4373' }}
      />
    </div>
  )
}
