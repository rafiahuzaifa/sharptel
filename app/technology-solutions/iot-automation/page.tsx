"use client"

import { motion } from "framer-motion"
import { Cpu, Settings, Home, Factory, Zap, CheckCircle, Smartphone, Globe } from "lucide-react"
import Link from "next/link"

export default function IOTAutomation() {
  const solutions = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Smart Home",
      desc: "Automated home systems for comfort and efficiency",
      features: ["Lighting Control", "Climate Control", "Security Systems", "Energy Management"]
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Industrial IoT",
      desc: "Automation solutions for manufacturing and industry",
      features: ["Machine Monitoring", "Predictive Maintenance", "Process Automation", "Quality Control"]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Smart Cities",
      desc: "IoT solutions for urban infrastructure",
      features: ["Traffic Management", "Waste Management", "Public Safety", "Environmental Monitoring"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Automation",
      desc: "Intelligent energy management systems",
      features: ["Smart Grids", "Renewable Integration", "Load Management", "Energy Analytics"]
    }
  ]

  const technologies = [
    {
      tech: "Sensors & Devices",
      desc: "Hardware for data collection and control",
      icon: "📡"
    },
    {
      tech: "Connectivity",
      desc: "Wireless protocols for IoT communication",
      icon: "📶"
    },
    {
      tech: "Cloud Platform",
      desc: "Data processing and storage solutions",
      icon: "☁️"
    },
    {
      tech: "Applications",
      desc: "User interfaces and control systems",
      icon: "📱"
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
              backgroundImage: "url('/background/iot-automation.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-800/60 to-amber-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-amber-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-amber-500/30">
              <div className="h-3 w-3 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-amber-100">Smart Solutions</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              IoT &
              <span className="block bg-gradient-to-r from-amber-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Automation
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Smart IoT and automation solutions transforming homes, 
              industries, and cities across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "1000+", label: "Devices Deployed" },
                { number: "40%", label: "Energy Savings" },
                { number: "24/7", label: "Monitoring" },
                { number: "Real-time", label: "Analytics" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-amber-100">{stat.label}</div>
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
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-amber-600 rounded-full"></div>
              <span className="text-sm font-semibold">IoT Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Smart <span className="text-amber-600">Automation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IoT solutions for various applications
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
                    <div className="h-16 w-16 bg-gradient-to-br from-amber-600 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                            <div className="h-2 w-2 rounded-full bg-amber-500"></div>
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

      {/* TECHNOLOGIES SECTION */}
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
                IoT <span className="text-amber-600">Technology</span> Stack
              </h2>
              
              <div className="grid gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center">
                        <span className="text-2xl">{tech.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.tech}</h3>
                      <p className="text-gray-600">{tech.desc}</p>
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
              className="bg-gradient-to-br from-amber-600 to-orange-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Protocols & Standards</div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Cpu className="h-5 w-5" />
                    <span>Wireless Protocols</span>
                  </div>
                  <span className="font-bold">Wi-Fi, LoRa, Zigbee</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5" />
                    <span>Cloud Platforms</span>
                  </div>
                  <span className="font-bold">AWS, Azure, Google</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5" />
                    <span>Mobile Apps</span>
                  </div>
                  <span className="font-bold">iOS & Android</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5" />
                    <span>Integration</span>
                  </div>
                  <span className="font-bold">APIs & Webhooks</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-amber-700 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Automate Your <span className="text-yellow-300">World</span>
            </h2>
            
            <p className="text-xl text-amber-100 mb-12 max-w-3xl mx-auto">
              Transform your home, business, or city with our smart IoT 
              and automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Contact-us"
                className="px-12 py-5 bg-white text-amber-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get IoT Consultation
              </Link>
              <Link
                href="tel:+92-311-128-4373"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call IoT Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}