"use client"

import { motion } from "framer-motion"
import { CheckCircle, Shield, Lock, CreditCard, Building, Cpu, Database, Globe } from "lucide-react"
import Link from "next/link"

export default function BankingEnterpriseServices() {
  const solutions = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Network Infrastructure",
      desc: "Dedicated secure networks with multiple layers of protection for banking operations",
      features: ["Encrypted Connections", "DDoS Protection", "Intrusion Prevention"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Center Connectivity",
      desc: "High-speed, low-latency connections between bank branches and data centers",
      features: ["Redundant Links", "99.99% Uptime", "Disaster Recovery"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Branch Connectivity",
      desc: "Reliable connectivity solutions for connecting all bank branches nationwide",
      features: ["MPLS Networks", "SD-WAN", "VPN Solutions"]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "ATM Network Connectivity",
      desc: "Secure and reliable connectivity for ATM networks across Pakistan",
      features: ["24/7 Monitoring", "Transaction Security", "Remote Management"]
    }
  ]

  const features = [
    {
      title: "Banking Grade Security",
      desc: "Compliance with State Bank of Pakistan regulations and international banking standards",
      icon: "🛡️"
    },
    {
      title: "24/7 Monitoring",
      desc: "Round-the-clock network monitoring and immediate incident response",
      icon: "👁️"
    },
    {
      title: "Disaster Recovery",
      desc: "Built-in redundancy and failover mechanisms for business continuity",
      icon: "⚡"
    },
    {
      title: "Compliance Ready",
      desc: "Solutions designed to meet all regulatory compliance requirements",
      icon: "📋"
    }
  ]

  const clients = [
    "HBL", "UBL", "MCB", "Bank Alfalah", "Standard Chartered", "Faysal Bank"
  ]

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/background/banking-bg.jpg')",
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-emerald-500/30">
              <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-emerald-100">Banking Solutions</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Banking
              <span className="block bg-gradient-to-r from-emerald-500 via-green-400 to-teal-500 bg-clip-text text-transparent">
                Enterprise Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Secure, reliable, and compliant connectivity solutions designed specifically 
              for Pakistan's banking and financial sector.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "99.99%", label: "Uptime SLA" },
                { number: "256-bit", label: "Encryption" },
                { number: "24/7", label: "Monitoring" },
                { number: "50+", label: "Bank Clients" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-emerald-100">{stat.label}</div>
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
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-emerald-600 rounded-full"></div>
              <span className="text-sm font-semibold">Our Banking Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tailored for <span className="text-emerald-600">Financial Institutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive connectivity solutions meeting the stringent requirements 
              of banking and financial services
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
                    <div className="h-16 w-16 bg-gradient-to-br from-emerald-600 to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
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
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why <span className="text-emerald-600">Banks</span> Choose Us
              </h2>
              
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center">
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
              className="bg-gradient-to-br from-emerald-600 to-green-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Our Banking Clients</div>
              <p className="text-emerald-100 text-lg mb-8">
                Trusted by leading financial institutions across Pakistan
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {clients.map((client, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="font-bold text-lg">{client}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-emerald-400/30">
                <div className="flex items-center gap-4">
                  <Building className="h-8 w-8" />
                  <div>
                    <div className="font-bold">SBP Compliant</div>
                    <div className="text-emerald-100 text-sm">All solutions meet State Bank requirements</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Regulatory <span className="text-emerald-600">Compliance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions are designed to meet all banking regulatory requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "SBP Regulations",
                desc: "Compliant with State Bank of Pakistan's cybersecurity framework",
                items: ["PRISM Compliance", "Cybersecurity Guidelines", "Data Protection"]
              },
              {
                title: "International Standards",
                desc: "Adherence to global banking and security standards",
                items: ["ISO 27001", "PCI DSS", "SWIFT Security"]
              },
              {
                title: "Audit Readiness",
                desc: "Comprehensive documentation and audit trails",
                items: ["Regular Audits", "Compliance Reports", "Security Logs"]
              }
            ].map((compliance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{compliance.title}</h3>
                <p className="text-gray-600 mb-6">{compliance.desc}</p>
                
                <div className="space-y-3">
                  {compliance.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Secure Your <span className="text-yellow-300">Banking Operations</span>
            </h2>
            
            <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto">
              Schedule a consultation with our banking solutions specialists to discuss 
              your specific requirements and compliance needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-emerald-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                href="tel:+922134567890"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call Banking Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}