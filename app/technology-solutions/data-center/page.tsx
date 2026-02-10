"use client"

import { motion } from "framer-motion"
import { Server, Database, Cpu, Zap, Shield, Cloud, HardDrive, Network } from "lucide-react"
import Link from "next/link"

export default function DataCenterServices() {
  const services = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Colocation",
      desc: "Secure rack space for your servers and equipment",
      features: ["24/7 Access", "Power Backup", "Cooling Systems", "Physical Security"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Services",
      desc: "Scalable cloud infrastructure solutions",
      features: ["Public Cloud", "Private Cloud", "Hybrid Solutions", "Cloud Migration"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Managed Hosting",
      desc: "Fully managed server hosting solutions",
      features: ["Server Management", "Security Updates", "Monitoring", "Backup Services"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Disaster Recovery",
      desc: "Business continuity and data protection",
      features: ["Data Backup", "Recovery Planning", "DR Testing", "Failover Solutions"]
    }
  ]

  const features = [
    {
      title: "Tier 3 Infrastructure",
      desc: "99.982% uptime with redundant systems",
      icon: "🏢"
    },
    {
      title: "Power Redundancy",
      desc: "Multiple power sources with UPS and generators",
      icon: "⚡"
    },
    {
      title: "Cooling Systems",
      desc: "Advanced precision cooling for optimal temperatures",
      icon: "❄️"
    },
    {
      title: "24/7 Security",
      desc: "Biometric access and CCTV surveillance",
      icon: "👮"
    }
  ]

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] pt-20 pb-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/background/datacenter-bg.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-blue-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-500/30">
              <div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-100">Infrastructure</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Data Center
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Enterprise-grade data center solutions with Tier 3 infrastructure, 
              providing reliability and security for your business in Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "99.982%", label: "Uptime SLA" },
                { number: "Tier 3", label: "Infrastructure" },
                { number: "24/7", label: "Support" },
                { number: "100+", label: "Clients" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-blue-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Data Center <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data center services for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.desc}</p>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Infrastructure <span className="text-blue-600">Features</span>
              </h2>
              
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Technical Specifications</div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5" />
                    <span>Power Capacity</span>
                  </div>
                  <span className="font-bold">2N Redundant</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Cpu className="h-5 w-5" />
                    <span>Cooling</span>
                  </div>
                  <span className="font-bold">Precision A/C</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <HardDrive className="h-5 w-5" />
                    <span>Connectivity</span>
                  </div>
                  <span className="font-bold">Multi-carrier</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Network className="h-5 w-5" />
                    <span>Network Uptime</span>
                  </div>
                  <span className="font-bold">99.99%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Host Your <span className="text-yellow-300">Infrastructure</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Move your IT infrastructure to our secure, reliable data center 
              and focus on growing your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Contact-us"
                className="px-12 py-5 bg-white text-blue-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Schedule Tour
              </Link>
              <Link
                href="tel:+92-311-128-4373"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call Data Center Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}