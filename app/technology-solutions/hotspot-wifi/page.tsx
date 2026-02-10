"use client"

import { motion } from "framer-motion"
import { Wifi, Users, Shield, Radio, Smartphone, Building, CheckCircle, Zap } from "lucide-react"
import Link from "next/link"

export default function HotspotWiFiSolutions() {
  const solutions = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Enterprise Wi-Fi",
      desc: "High-performance wireless networks for businesses",
      features: ["High Density", "Seamless Roaming", "Central Management", "Analytics"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Public Hotspots",
      desc: "Secure public Wi-Fi solutions for customers",
      features: ["Captive Portal", "Social Login", "Bandwidth Control", "Analytics"]
    },
    {
      icon: <Radio className="h-8 w-8" />,
      title: "Outdoor Wi-Fi",
      desc: "Wireless networks for outdoor spaces",
      features: ["Weatherproof", "Long Range", "Mesh Networks", "Solar Powered"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Wi-Fi",
      desc: "Enterprise-grade security for wireless networks",
      features: ["WPA3 Encryption", "Guest Isolation", "Firewall", "Content Filtering"]
    }
  ]

  const deployments = [
    {
      venue: "Hotels & Resorts",
      desc: "Guest Wi-Fi with branding and analytics",
      icon: "🏨"
    },
    {
      venue: "Shopping Malls",
      desc: "Public Wi-Fi with captive portals",
      icon: "🛍️"
    },
    {
      venue: "Restaurants",
      desc: "Customer Wi-Fi with marketing integration",
      icon: "🍽️"
    },
    {
      venue: "Educational",
      desc: "Campus-wide wireless networks",
      icon: "🏫"
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
              backgroundImage: "url('/background/wifi-bg.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-green-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-green-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-green-500/30">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-100">Wireless Solutions</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Hotspot & Wi-Fi
              <span className="block bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Professional Wi-Fi and hotspot solutions for businesses, 
              providing secure and reliable wireless connectivity across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "1000+", label: "Hotspots Deployed" },
                { number: "99.9%", label: "Uptime" },
                { number: "10,000+", label: "Users Daily" },
                { number: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-green-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-green-600 rounded-full"></div>
              <span className="text-sm font-semibold">Wi-Fi Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Wireless <span className="text-green-600">Connectivity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Wi-Fi solutions for all business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
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
                    <div className="h-16 w-16 bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {solution.icon}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                      <p className="text-gray-600 mb-4">{solution.desc}</p>
                      
                      <div className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
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

      {/* DEPLOYMENTS SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industry <span className="text-green-600">Deployments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wi-Fi solutions tailored for various industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {deployments.map((deployment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 text-center h-full">
                  <div className="text-4xl mb-4">{deployment.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{deployment.venue}</h3>
                  <p className="text-gray-600">{deployment.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-green-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Connect Your <span className="text-yellow-300">Business</span>
            </h2>
            
            <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
              Provide reliable Wi-Fi to your customers and guests with our 
              professional hotspot solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Contact-us"
                className="px-12 py-5 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Wi-Fi Quote
              </Link>
              <Link
                href="tel:+92-311-128-4373"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call Wi-Fi Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}