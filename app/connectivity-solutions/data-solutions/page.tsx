"use client"

import { motion } from "framer-motion"
import { CheckCircle, Database, Shield, Cpu, Cloud, Wifi, Globe, Lock } from "lucide-react"
import Link from "next/link"

export default function DataSolutions() {
  const solutions = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "MPLS Network",
      desc: "Multi-Protocol Label Switching for secure, reliable data transfer",
      features: ["Quality of Service", "Traffic Engineering", "Any-to-Any Connectivity"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "VPN Solutions",
      desc: "Site-to-Site and Remote Access VPN for secure connectivity",
      features: ["IPSec VPN", "SSL VPN", "Client-to-Site VPN"]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "SD-WAN",
      desc: "Software-Defined Wide Area Network for intelligent routing",
      features: ["Application Awareness", "Dynamic Path Selection", "Cloud Optimization"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Connectivity",
      desc: "Leased Lines and Point-to-Point data connections",
      features: ["Dedicated Bandwidth", "Low Latency", "High Availability"]
    }
  ]

  const benefits = [
    {
      title: "Enhanced Security",
      desc: "End-to-end encryption and secure data transmission",
      icon: "🛡️"
    },
    {
      title: "Cost Efficiency",
      desc: "Reduce bandwidth costs with intelligent traffic management",
      icon: "💰"
    },
    {
      title: "Scalability",
      desc: "Easily scale your network as your business grows",
      icon: "📈"
    },
    {
      title: "Reliability",
      desc: "Multiple redundancy options for uninterrupted connectivity",
      icon: "⚡"
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
              backgroundImage: "url('/background/data-solutions-bg.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
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
              <span className="text-sm font-semibold text-blue-100">Secure Data Connectivity</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Data
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Connectivity Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Secure and reliable data connectivity solutions for seamless business operations 
              across multiple locations in Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "99.99%", label: "Network Availability" },
                { number: "< 5ms", label: "Average Latency" },
                { number: "256-bit", label: "Encryption" },
                { number: "50+", label: "Cities Connected" },
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

      {/* SOLUTIONS OVERVIEW */}
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
              <span className="text-sm font-semibold">Our Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-blue-600">Data</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end data connectivity solutions for modern enterprises
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
                    <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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

      {/* BENEFITS SECTION */}
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
              Key <span className="text-blue-600">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why choose Sharptel for your data connectivity needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Perfect For <span className="text-blue-600">These</span> Scenarios
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                      <div className="text-white text-xl font-bold">1</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Branch Connectivity</h3>
                    <p className="text-gray-600">Connect multiple office locations securely with MPLS or SD-WAN solutions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl flex items-center justify-center">
                      <div className="text-white text-xl font-bold">2</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Data Center Connectivity</h3>
                    <p className="text-gray-600">High-speed, low-latency connections between data centers and offices.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-violet-400 rounded-xl flex items-center justify-center">
                      <div className="text-white text-xl font-bold">3</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Remote Workforce</h3>
                    <p className="text-gray-600">Secure VPN access for remote employees working from home or traveling.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-amber-400 rounded-xl flex items-center justify-center">
                      <div className="text-white text-xl font-bold">4</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Connectivity</h3>
                    <p className="text-gray-600">Direct and secure connections to cloud service providers like AWS and Azure.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white">
                <div className="text-4xl font-bold mb-6">Why Choose Us?</div>
                <p className="text-blue-100 text-lg mb-8">
                  Pakistan's leading provider of enterprise data connectivity solutions
                </p>
                
                <div className="space-y-4">
                  {[
                    "15+ years of industry experience",
                    "Nationwide network coverage",
                    "24/7 technical support",
                    "SLAs with financial guarantees",
                    "Expert consultation services",
                    "Customized solutions"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Secure Your Business <span className="text-yellow-300">Data</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Get in touch with our data connectivity experts for a free consultation 
              and network assessment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Contact-us"
                className="px-12 py-5 bg-white text-blue-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Request Consultation
              </Link>
              <Link
                href="tel:+92-311-128-4373"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call Expert: +92-311-128-4373
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}