"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Database, Server, Globe } from "lucide-react"
import Link from "next/link"

export default function CyberSecuritySolutions() {
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Network Security",
      desc: "Protect your network infrastructure from cyber threats",
      features: ["Firewall Management", "Intrusion Detection", "VPN Solutions", "Network Monitoring"]
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Data Protection",
      desc: "Secure your sensitive business data",
      features: ["Encryption Services", "Data Backup", "Access Control", "DLP Solutions"]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Security Monitoring",
      desc: "24/7 security operations center",
      features: ["SIEM Solutions", "Threat Intelligence", "Incident Response", "Log Management"]
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Vulnerability Assessment",
      desc: "Identify and fix security weaknesses",
      features: ["Penetration Testing", "Security Audits", "Risk Assessment", "Compliance Testing"]
    }
  ]

  const threats = [
    {
      title: "Malware Protection",
      desc: "Advanced protection against viruses and ransomware",
      icon: "🛡️"
    },
    {
      title: "Phishing Prevention",
      desc: "Protect against email and social engineering attacks",
      icon: "🎣"
    },
    {
      title: "DDoS Mitigation",
      desc: "Defend against distributed denial-of-service attacks",
      icon: "🌊"
    },
    {
      title: "Endpoint Security",
      desc: "Secure all devices connected to your network",
      icon: "💻"
    }
  ]

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/background/cyber-bg.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/60 to-red-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-red-500/30">
              <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-red-100">Security Solutions</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Cyber
              <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Security
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Comprehensive cybersecurity solutions to protect your business from 
              digital threats and ensure data protection across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "24/7", label: "Monitoring" },
                { number: "99.99%", label: "Uptime" },
                { number: "50+", label: "Protected Clients" },
                { number: "Zero", label: "Major Breaches" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-red-100">{stat.label}</div>
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
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-red-600 rounded-full"></div>
              <span className="text-sm font-semibold">Security Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete <span className="text-red-600">Protection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end cybersecurity solutions for businesses of all sizes
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
                    <div className="h-16 w-16 bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                            <div className="h-2 w-2 rounded-full bg-red-500"></div>
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

      {/* THREATS SECTION */}
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
                Threat <span className="text-red-600">Protection</span>
              </h2>
              
              <div className="grid gap-6">
                {threats.map((threat, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center">
                        <span className="text-2xl">{threat.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{threat.title}</h3>
                      <p className="text-gray-600">{threat.desc}</p>
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
              className="bg-gradient-to-br from-red-600 to-orange-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Security Layers</div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5" />
                    <span>Perimeter Security</span>
                  </div>
                  <span className="font-bold">Firewall & IDS</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5" />
                    <span>Data Security</span>
                  </div>
                  <span className="font-bold">Encryption & Backup</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Server className="h-5 w-5" />
                    <span>Endpoint Security</span>
                  </div>
                  <span className="font-bold">Anti-virus & EDR</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5" />
                    <span>Monitoring</span>
                  </div>
                  <span className="font-bold">24/7 SOC</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-red-700 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Secure Your <span className="text-yellow-300">Business</span>
            </h2>
            
            <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto">
              Don't wait for a security breach. Protect your business with 
              our comprehensive cybersecurity solutions today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Contact-us"
                className="px-12 py-5 bg-white text-red-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Security Audit
              </Link>
              <Link
                href="tel:+92-311-128-4373"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call Security Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}