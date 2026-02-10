"use client"

import { motion } from "framer-motion"
import { Network, Wifi, Server, Shield, CheckCircle, Activity, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function ManagedNetworkServices() {
  const services = [
    {
      icon: <Network className="h-8 w-8" />,
      title: "Network Monitoring",
      desc: "24/7 network performance monitoring",
      features: ["Performance Metrics", "Traffic Analysis", "Alert Management", "Capacity Planning"]
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Wireless Management",
      desc: "Enterprise wireless network management",
      features: ["Access Point Management", "Security Configuration", "Performance Optimization", "Guest Networks"]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Infrastructure Management",
      desc: "Network hardware and configuration management",
      features: ["Router Management", "Switch Configuration", "Firewall Rules", "VPN Setup"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Network Security",
      desc: "Proactive network security management",
      features: ["Threat Detection", "Vulnerability Management", "Access Control", "Compliance"]
    }
  ]

  const features = [
    {
      feature: "Proactive Monitoring",
      desc: "Identify issues before they affect users",
      icon: "👁️"
    },
    {
      feature: "Performance Optimization",
      desc: "Continuously optimize network performance",
      icon: "⚡"
    },
    {
      feature: "Security Management",
      desc: "Comprehensive security configuration",
      icon: "🛡️"
    },
    {
      feature: "Cost Reduction",
      desc: "Reduce network downtime and maintenance costs",
      icon: "💰"
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
              backgroundImage: "url('/background/network-services-bg.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/60 to-purple-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-purple-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-purple-500/30">
              <div className="h-3 w-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-purple-100">Network Management</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Managed
              <span className="block bg-gradient-to-r from-purple-500 via-violet-400 to-pink-500 bg-clip-text text-transparent">
                Network Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Proactive network management services ensuring optimal performance, 
              security, and reliability for businesses across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "99.99%", label: "Network Uptime" },
                { number: "24/7", label: "Monitoring" },
                { number: "100+", label: "Networks Managed" },
                { number: "30 Min", label: "Response Time" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-purple-100">{stat.label}</div>
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
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-semibold">Network Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-purple-600">Network Management</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end network management services
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
                    <div className="h-16 w-16 bg-gradient-to-br from-purple-600 to-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
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
                Service <span className="text-purple-600">Benefits</span>
              </h2>
              
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.feature}</h3>
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
              className="bg-gradient-to-br from-purple-600 to-violet-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Monitoring Metrics</div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5" />
                    <span>Network Uptime</span>
                  </div>
                  <span className="font-bold">99.99%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5" />
                    <span>Response Time</span>
                  </div>
                  <span className="font-bold">30 Minutes</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5" />
                    <span>Performance SLA</span>
                  </div>
                  <span className="font-bold">95%+</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5" />
                    <span>Security Compliance</span>
                  </div>
                  <span className="font-bold">100%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-purple-700 to-violet-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Optimize Your <span className="text-yellow-300">Network</span>
            </h2>
            
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
              Let our experts manage your network infrastructure while you 
              focus on core business operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Contact-us"
                className="px-12 py-5 bg-white text-purple-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Network Assessment
              </Link>
              <Link
                href="tel:+92-311-128-4373"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call Network Manager
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}