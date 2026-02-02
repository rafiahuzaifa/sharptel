"use client"

import { motion } from "framer-motion"
import { Server, Cpu, HardDrive, Zap, Shield, Globe, Database, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function VirtualPrivateServer() {
  const plans = [
    {
      name: "Basic VPS",
      specs: "2 CPU Cores, 4GB RAM, 80GB SSD",
      price: "PKR 5,999",
      features: ["2 vCPU Cores", "4GB RAM", "80GB SSD", "2TB Bandwidth"]
    },
    {
      name: "Business VPS",
      specs: "4 CPU Cores, 8GB RAM, 160GB SSD",
      price: "PKR 9,999",
      features: ["4 vCPU Cores", "8GB RAM", "160GB SSD", "4TB Bandwidth"]
    },
    {
      name: "Enterprise VPS",
      specs: "8 CPU Cores, 16GB RAM, 320GB SSD",
      price: "PKR 15,999",
      features: ["8 vCPU Cores", "16GB RAM", "320GB SSD", "8TB Bandwidth"]
    }
  ]

  const features = [
    {
      feature: "SSD Storage",
      desc: "High-speed solid state drives",
      icon: "💾"
    },
    {
      feature: "Dedicated Resources",
      desc: "Guaranteed CPU and RAM allocation",
      icon: "⚡"
    },
    {
      feature: "Root Access",
      desc: "Full control over your server",
      icon: "🔑"
    },
    {
      feature: "99.9% Uptime",
      desc: "Service level agreement guarantee",
      icon: "📈"
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
              backgroundImage: "url('/background/vps-bg.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-indigo-800/60 to-indigo-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/20 to-indigo-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-indigo-500/30">
              <div className="h-3 w-3 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-indigo-100">Hosting Solutions</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Virtual
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Private Server
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              High-performance VPS hosting with dedicated resources, 
              root access, and 24/7 support for businesses in Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "99.9%", label: "Uptime SLA" },
                { number: "24/7", label: "Support" },
                { number: "SSD", label: "Storage" },
                { number: "Root", label: "Access" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-indigo-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PLANS SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
              <span className="text-sm font-semibold">VPS Plans</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-indigo-600">Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable VPS hosting plans for every business need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="text-lg text-gray-600 mb-6">{plan.specs}</div>
                  <div className="text-4xl font-bold text-indigo-600 mb-8">{plan.price}<span className="text-lg text-gray-500">/month</span></div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-indigo-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/contact"
                    className="block w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all duration-300 text-center"
                  >
                    Order Now
                  </Link>
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
                VPS <span className="text-indigo-600">Features</span>
              </h2>
              
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center">
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
              className="bg-gradient-to-br from-indigo-600 to-purple-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Technical Specifications</div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Cpu className="h-5 w-5" />
                    <span>CPU</span>
                  </div>
                  <span className="font-bold">Intel Xeon E5</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <HardDrive className="h-5 w-5" />
                    <span>Storage</span>
                  </div>
                  <span className="font-bold">NVMe SSD</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5" />
                    <span>Network</span>
                  </div>
                  <span className="font-bold">1 Gbps Port</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5" />
                    <span>Backup</span>
                  </div>
                  <span className="font-bold">Daily Backups</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-indigo-700 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Launch Your <span className="text-yellow-300">Server</span>
            </h2>
            
            <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto">
              Get started with high-performance VPS hosting in minutes. 
              Scale as your business grows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Started Now
              </Link>
              <Link
                href="tel:+922134567890"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call Hosting Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}