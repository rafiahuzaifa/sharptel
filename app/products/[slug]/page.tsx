'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Check } from 'lucide-react'
import { Accent, CTASection, DarkPanel, PageHero, Reveal, Section } from '@/app/components/premium'

const productDetails: Record<string, { title: string, description: string, features: string[], image: string }> = {
  'wi-fi-solutions': {
    title: 'Wi-Fi Solutions',
    description: 'Enterprise-grade Wi-Fi solutions including Access Points, Mesh Wi-Fi, and Guest Portals. Ensuring seamless connectivity for offices and enterprises across Pakistan.',
    features: ['Enterprise Access Points', 'Mesh Wi-Fi Systems', 'Outdoor Wi-Fi', 'Guest Wi-Fi Portal'],
    image: '/background/wifi-hotspot.webp'
  },
  'network-solutions': {
    title: 'Network Solutions',
    description: 'Switches, routers, firewalls, and SD-WAN controllers to build secure and scalable networks for organizations.',
    features: ['Switches & Routers', 'Firewalls', 'Load Balancers', 'SD-WAN Controllers'],
    image: '/background/network-services-bg.webp'
  },
  'video-conferencing': {
    title: 'Video Conferencing',
    description: 'Professional video conferencing equipment for seamless virtual collaboration, including cameras, room kits, and control systems.',
    features: ['Conference Cameras', 'Touch Panels', 'Control Systems', 'Room Kits'],
    image: '/background/network-conference.webp'
  },
  'audio-solutions': {
    title: 'Audio Solutions',
    description: 'High-quality audio systems including ceiling speakers, mixers, amplifiers and wireless microphones.',
    features: ['Ceiling Speakers', 'Sound Systems', 'Mixers & Amplifiers', 'Wireless Mics'],
    image: '/background/cloud-comms-bg.webp'
  },
  'surveillance-systems': {
    title: 'Surveillance Systems',
    description: 'IP cameras, NVR systems, and video analytics to monitor and secure your premises efficiently.',
    features: ['IP Cameras', 'NVR Systems', 'Video Analytics', 'Accessories'],
    image: '/background/surveillance-security.jpg'
  },
  'voip-solutions': {
    title: 'VOIP Solutions',
    description: 'IP phones, PBX systems, gateways, and call center phones for enterprise communication.',
    features: ['IP Phones', 'PBX Systems', 'Gateways', 'Call Center Phones'],
    image: '/background/voip.webp'
  },
  'network-security': {
    title: 'Network Security',
    description: 'UTM Firewalls, VPN solutions, Email Security, and Web Filtering to secure your network infrastructure.',
    features: ['UTM Firewalls', 'VPN Solutions', 'Email Security', 'Web Filtering'],
    image: '/background/cyber-security.webp'
  },
  'access-control': {
    title: 'Access Control',
    description: 'Biometric systems, card readers, turnstiles, and visitor management solutions for physical security.',
    features: ['Biometric Systems', 'Card Readers', 'Turnstiles', 'Visitor Management'],
    image: '/background/security-services-bg.webp'
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const product = productDetails[params.slug as string]

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="section-title">Product not <span className="accent">found</span></h1>
        <Link href="/pages/products" className="btn-primary">Back to Products</Link>
      </div>
    )
  }

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        compact
        eyebrow="Products"
        title={product.title}
        subtitle={product.description}
        image={product.image}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/pages/products' },
          { label: product.title, href: '#' },
        ]}
        actions={{ primary: { label: 'Request a Quote', href: '/Contact-us' } }}
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="section-title mb-6">
              What&apos;s in the <Accent>range</Accent>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">{product.description}</p>
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-3 border-b border-gray-100 py-4 font-medium text-gray-800">
                  <Check className="h-4 w-4 text-red-600" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/pages/products" className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-red-600">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Products
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <DarkPanel title="Supply, install & support" subtitle="Every product comes with Sharptel engineering behind it.">
              <ul className="space-y-3 text-gray-300">
                {['Genuine products from authorized channels', 'Site survey and solution design', 'Professional installation', 'Warranty and 24/7 support'].map((x) => (
                  <li key={x} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-red-500" strokeWidth={2.5} />
                    {x}
                  </li>
                ))}
              </ul>
            </DarkPanel>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title={<>Get a quote for <Accent>{product.title}</Accent></>}
        text="Tell us about your site and requirements, and our team will get back to you with options."
        primary={{ label: 'Request a Quote', href: '/Contact-us' }}
        secondary={{ label: 'Call +92-311-128-4373', href: 'tel:+92-311-128-4373' }}
      />
    </div>
  )
}
