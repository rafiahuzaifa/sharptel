// app/services/internet-data-center/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Server, 
  Shield, 
  Zap, 
  Database, 
  Users, 
  CheckCircle, 
  ChevronLeft,
  ArrowRight,
  HardDrive,
  Cloud,
  Cpu,
  ShieldCheck,
  Battery,
  Thermometer,
  Headphones,
  FileText,
  Lock
} from 'lucide-react'

export default function InternetDataCenterPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px'
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-white/80 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-white/60">/</li>
                <li>
                  <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li className="text-white/60">/</li>
                <li className="text-white font-semibold">Internet Data Center</li>
              </ol>
            </nav>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                  <Server className="h-4 w-4" />
                  <span className="text-sm font-medium">Tier III Infrastructure</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Internet Data Center (IDC) Services
                </h1>
                
                <p className="text-xl text-white/90 max-w-3xl">
                  Secure, reliable, and scalable data center solutions with 99.99% uptime guarantee 
                  for your critical business applications and infrastructure.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">99.99%</div>
                  <div className="text-sm text-white/80">Uptime SLA</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">N+1</div>
                  <div className="text-sm text-white/80">Redundancy</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">Tier III</div>
                  <div className="text-sm text-white/80">Design</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Database className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Service Overview</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Sharptel Internet Data Center (IDC) provides enterprise-grade data center 
                    services with maximum reliability, security, and scalability. Our Tier III 
                    designed facilities ensure your critical business applications run seamlessly 
                    with 99.99% uptime guarantee.
                  </p>
                  <p>
                    Our data centers feature redundant power systems, advanced cooling, 
                    multi-layer security, and carrier-neutral connectivity. Whether you need 
                    colocation, dedicated servers, or managed hosting, we provide the 
                    infrastructure and expertise to support your business growth.
                  </p>
                </div>
              </motion.div>

              {/* Infrastructure Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <HardDrive className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Infrastructure Features</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Battery,
                      title: "Redundant Power",
                      description: "N+1 UPS systems with generator backup"
                    },
                    {
                      icon: Thermometer,
                      title: "Climate Control",
                      description: "Precision cooling with N+1 redundancy"
                    },
                    {
                      icon: ShieldCheck,
                      title: "Physical Security",
                      description: "Biometric access, CCTV, 24/7 guards"
                    },
                    {
                      icon: Cloud,
                      title: "Network Redundancy",
                      description: "Multiple ISPs with BGP routing"
                    },
                    {
                      icon: Lock,
                      title: "Fire Protection",
                      description: "VESDA fire detection and suppression"
                    },
                    {
                      icon: Cpu,
                      title: "Monitoring",
                      description: "24/7 infrastructure monitoring"
                    }
                  ].map((feature, index) => {
                    const FeatureIcon = feature.icon
                    return (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <FeatureIcon className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Service Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Server className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Service Options</h2>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: "Colocation Services",
                      features: [
                        "Rack space rental (1U to full rack)",
                        "Power and cooling included",
                        "Remote hands support",
                        "Bandwidth options"
                      ]
                    },
                    {
                      title: "Dedicated Servers",
                      features: [
                        "Enterprise-grade hardware",
                        "Custom configurations",
                        "Managed and unmanaged options",
                        "24/7 hardware support"
                      ]
                    },
                    {
                      title: "Managed Hosting",
                      features: [
                        "Full server management",
                        "Security updates and patches",
                        "Backup and recovery",
                        "Performance monitoring"
                      ]
                    },
                    {
                      title: "Cloud Services",
                      features: [
                        "Virtual private servers",
                        "Storage solutions",
                        "Disaster recovery",
                        "Hybrid cloud options"
                      ]
                    }
                  ].map((option, index) => (
                    <div key={index} className="p-6 border border-gray-200 rounded-xl hover:border-red-300 transition-colors">
                      <h3 className="font-bold text-gray-900 mb-4">{option.title}</h3>
                      <div className="space-y-2">
                        {option.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-6 text-white"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Server className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Quick Overview</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-white/90">Design Standard</span>
                    <span className="font-semibold">Tier III</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-white/90">Uptime SLA</span>
                    <span className="font-semibold">99.99%</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-white/90">Power Density</span>
                    <span className="font-semibold">Up to 10kW/rack</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-white/90">Support Level</span>
                    <span className="font-semibold">24/7 Premium</span>
                  </div>
                </div>
                <Link
                  href="/contact-us"
                  className="block w-full text-center py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request Data Center Tour
                </Link>
              </motion.div>

              {/* Compliance & Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Compliance</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "ISO 27001:2013 Certified",
                    "PCI DSS Compliant",
                    "Uptime Institute Tier III",
                    "Local Regulatory Compliance",
                    "GDPR Ready Infrastructure",
                    "Business Continuity Certified"
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <ShieldCheck className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Ideal For */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Users className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Ideal For</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Web Hosting Companies",
                    "E-commerce Platforms",
                    "Financial Institutions",
                    "Healthcare Providers",
                    "Government Agencies",
                    "Enterprise Applications",
                    "Disaster Recovery",
                    "Cloud Service Providers"
                  ].map((industry, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{industry}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Documentation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <FileText className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Resources</h3>
                </div>
                <div className="space-y-3">
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Data Center Specifications</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Pricing Calculator</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Compliance Documents</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">
                Secure Your Digital Infrastructure
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Trust your critical business applications with our enterprise-grade data center 
                solutions. Get a free consultation and data center tour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="px-8 py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Schedule Data Center Tour
                </Link>
                <a
                  href="tel:+925111174747"
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Call: +92 51 111 747 747
                </a>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/pages/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                <ChevronLeft className="h-5 w-5" />
                Back to All Services
              </Link>
              <div className="text-sm text-gray-600">
                Need custom data center solutions? <Link href="/contact-us" className="text-red-600 font-medium hover:text-red-700">Contact our experts</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}