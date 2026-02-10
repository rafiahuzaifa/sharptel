'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const products = [
  {
    category: 'Wi-Fi Solutions',
    items: [
      'Enterprise Access Points',
      'Mesh Wi-Fi Systems',
      'Outdoor Wi-Fi',
      'Guest Wi-Fi Portal'
    ],
    slug: 'wi-fi-solutions'
  },
  {
    category: 'Network Solutions',
    items: [
      'Switches & Routers',
      'Firewalls',
      'Load Balancers',
      'SD-WAN Controllers'
    ],
    slug: 'network-solutions'
  },
  {
    category: 'Video Conferencing',
    items: [
      'Conference Cameras',
      'Touch Panels',
      'Control Systems',
      'Room Kits'
    ],
    slug: 'video-conferencing'
  },
  {
    category: 'Audio Solutions',
    items: [
      'Ceiling Speakers',
      'Sound Systems',
      'Mixers & Amplifiers',
      'Wireless Mics'
    ],
    slug: 'audio-solutions'
  },
  {
    category: 'Surveillance Systems',
    items: [
      'IP Cameras',
      'NVR Systems',
      'Video Analytics',
      'Accessories'
    ],
    slug: 'surveillance-systems'
  },
  {
    category: 'VOIP Solutions',
    items: [
      'IP Phones',
      'PBX Systems',
      'Gateways',
      'Call Center Phones'
    ],
    slug: 'voip-solutions'
  },
  {
    category: 'Network Security',
    items: [
      'UTM Firewalls',
      'VPN Solutions',
      'Email Security',
      'Web Filtering'
    ],
    slug: 'network-security'
  },
  {
    category: 'Access Control',
    items: [
      'Biometric Systems',
      'Card Readers',
      'Turnstiles',
      'Visitor Management'
    ],
    slug: 'access-control'
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section
        className="relative min-h-[65vh] pt-20 pb-16 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/background/data-flow.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-primary-200 to-primary-600 text-transparent bg-clip-text"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            High-quality hardware and software solutions from leading global brands
          </motion.p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.category}</h3>
              <ul className="space-y-3 mb-6">
                {product.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                View Products
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
