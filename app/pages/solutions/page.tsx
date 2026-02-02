'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Server, 
  Wifi, 
  Cpu, 
  Phone, 
  ChevronRight, 
  Zap, 
  Lock, 
  Database, 
  Radio, 
  Globe,
  CheckCircle,
  Users,
  BarChart3,
  Headphones
} from 'lucide-react'

const solutions = [
  { 
    name: "Cyber Security", 
    slug: "cyber-security", 
    image: "/images/solutions/cyber-security.jpg",
    icon: Shield,
    description: "Comprehensive protection against cyber threats with advanced firewall and threat detection systems.",
    features: ["Advanced Firewall", "Threat Intelligence", "24/7 Monitoring"],
    color: "bg-gradient-to-br from-red-700 to-red-800"
  },
  { 
    name: "Data Center & Colocation", 
    slug: "data-center", 
    image: "/images/solutions/data-center.jpg",
    icon: Server,
    description: "Secure and reliable data center services with maximum uptime and professional support.",
    features: ["Tier III Design", "Redundant Power", "Carrier Neutral"],
    color: "bg-gradient-to-br from-red-700 to-red-800"
  },
  { 
    name: "Wi-Fi & Hotspot", 
    slug: "wi-fi-hotspot", 
    image: "/images/solutions/wi-fi-hotspot.jpg",
    icon: Wifi,
    description: "High-performance wireless networks with secure access and centralized management.",
    features: ["Enterprise Wi-Fi", "Guest Management", "Mesh Networking"],
    color: "bg-gradient-to-br from-red-700 to-red-800"
  },
  { 
    name: "IoT & Automation", 
    slug: "iot-automation", 
    image: "/images/solutions/iot-automation.jpg",
    icon: Cpu,
    description: "Intelligent automation solutions for smart buildings and industrial applications.",
    features: ["Smart Sensors", "Energy Management", "Remote Monitoring"],
    color: "bg-gradient-to-br from-red-700 to-red-800"
  },
  { 
    name: "Voice Over IP (VoIP)", 
    slug: "voip-solutions", 
    image: "/images/solutions/voip-solutions.jpg",
    icon: Phone,
    description: "Reliable voice communication systems with advanced features for modern businesses.",
    features: ["HD Voice Quality", "Call Center Features", "Unified Comms"],
    color: "bg-gradient-to-br from-red-700 to-red-800"
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Red Theme */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px'
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Breadcrumb */}
              <nav className="mb-8 flex justify-center">
                <ol className="flex items-center space-x-2 text-sm">
                  <li>
                    <Link href="/" className="text-white/80 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="text-white/60">/</li>
                  <li className="text-white font-semibold">Solutions</li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Our Technology Solutions
              </h1>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Enterprise-grade technology solutions designed to drive business growth and ensure operational excellence across Pakistan.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">18+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-white/80">Projects Completed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-white/80">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container mx-auto px-4 py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Technology Solutions
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We provide end-to-end technology solutions that empower businesses to innovate, 
                secure their operations, and achieve sustainable growth in today's digital landscape.
              </p>
            </motion.div>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link href={`/pages/solutions/${solution.slug}`}>
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <div className={`absolute inset-0 ${solution.color} opacity-10`} />
                        <div className="relative h-full w-full bg-gradient-to-br from-red-700 to-red-800 flex items-center justify-center">
                          <Icon className="h-20 w-20 text-white opacity-80" />
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <Icon className="h-6 w-6 text-red-600" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                          {solution.name}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 mb-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-red-600 font-semibold group-hover:text-red-700 transition-colors flex items-center gap-2">
                            Learn More
                            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                          <div className="text-sm text-gray-500">
                            Enterprise Solution
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-red-50 to-white border border-red-100 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Choose Sharptel Solutions?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <Users className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Expert Team</h4>
                        <p className="text-gray-600">
                          Certified professionals with 18+ years of industry experience.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <Zap className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">24/7 Support</h4>
                        <p className="text-gray-600">
                          Round-the-clock technical support and monitoring services.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">SLA Guarantee</h4>
                        <p className="text-gray-600">
                          99.9% uptime guarantee with comprehensive service level agreements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Get Custom Solution
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Need a tailored solution for your specific business requirements? 
                    Our experts can design a custom solution for you.
                  </p>
                  <div className="space-y-4">
                    <Link
                      href="/contact-us"
                      className="block w-full py-3 bg-red-600 text-white text-center font-bold rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Request Consultation
                    </Link>
                    <a
                      href="tel:+925111174747"
                      className="block w-full py-3 border-2 border-red-600 text-red-600 text-center font-bold rounded-lg hover:bg-red-50 transition-colors"
                    >
                      Call: +92 51 111 747 747
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technology Partners */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Technology Partners
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We partner with industry-leading technology providers to deliver best-in-class solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Cisco", logo: "C" },
                { name: "Fortinet", logo: "F" },
                { name: "VMware", logo: "V" },
                { name: "HPE", logo: "HPE" },
                { name: "Dell", logo: "Dell" },
                { name: "Avaya", logo: "A" },
              ].map((partner, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center hover:border-red-300 hover:shadow-md transition-all"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 mb-2">{partner.logo}</div>
                    <div className="text-sm text-gray-600">{partner.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-8 md:p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Connect with our solutions experts to discuss how we can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="px-8 py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Schedule a Demo
                </Link>
                <Link
                  href="/contact-us"
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Download Brochure
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}