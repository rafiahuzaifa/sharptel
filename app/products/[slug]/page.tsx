'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const productDetails: Record<string, { title: string, description: string, features: string[], image: string }> = {
  'wi-fi-solutions': {
    title: 'Wi-Fi Solutions',
    description: 'Enterprise-grade Wi-Fi solutions including Access Points, Mesh Wi-Fi, and Guest Portals. Ensuring seamless connectivity for offices and enterprises across Pakistan.',
    features: ['Enterprise Access Points', 'Mesh Wi-Fi Systems', 'Outdoor Wi-Fi', 'Guest Wi-Fi Portal'],
    image: '/images/products/wi-fi-solutions.jpg'
  },
  'network-solutions': {
    title: 'Network Solutions',
    description: 'Switches, routers, firewalls, and SD-WAN controllers to build secure and scalable networks for organizations.',
    features: ['Switches & Routers', 'Firewalls', 'Load Balancers', 'SD-WAN Controllers'],
    image: '/images/products/network-solutions.jpg'
  },
  'video-conferencing': {
    title: 'Video Conferencing',
    description: 'Professional video conferencing equipment for seamless virtual collaboration, including cameras, room kits, and control systems.',
    features: ['Conference Cameras', 'Touch Panels', 'Control Systems', 'Room Kits'],
    image: '/images/products/video-conferencing.jpg'
  },
  'audio-solutions': {
    title: 'Audio Solutions',
    description: 'High-quality audio systems including ceiling speakers, mixers, amplifiers and wireless microphones.',
    features: ['Ceiling Speakers', 'Sound Systems', 'Mixers & Amplifiers', 'Wireless Mics'],
    image: '/images/products/audio-solutions.jpg'
  },
  'surveillance-systems': {
    title: 'Surveillance Systems',
    description: 'IP cameras, NVR systems, and video analytics to monitor and secure your premises efficiently.',
    features: ['IP Cameras', 'NVR Systems', 'Video Analytics', 'Accessories'],
    image: '/images/products/surveillance-systems.jpg'
  },
  'voip-solutions': {
    title: 'VOIP Solutions',
    description: 'IP phones, PBX systems, gateways, and call center phones for enterprise communication.',
    features: ['IP Phones', 'PBX Systems', 'Gateways', 'Call Center Phones'],
    image: '/images/products/voip-solutions.jpg'
  },
  'network-security': {
    title: 'Network Security',
    description: 'UTM Firewalls, VPN solutions, Email Security, and Web Filtering to secure your network infrastructure.',
    features: ['UTM Firewalls', 'VPN Solutions', 'Email Security', 'Web Filtering'],
    image: '/images/products/network-security.jpg'
  },
  'access-control': {
    title: 'Access Control',
    description: 'Biometric systems, card readers, turnstiles, and visitor management solutions for physical security.',
    features: ['Biometric Systems', 'Card Readers', 'Turnstiles', 'Visitor Management'],
    image: '/images/products/access-control.jpg'
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const product = productDetails[params.slug as string]

  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">{product.title}</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h2>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <Link
            href="/pages/products"
            className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700"
          >
            ← Back to Products
          </Link>
        </div>
        <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-2xl" />
        </div>
      </section>
    </div>
  )
}
