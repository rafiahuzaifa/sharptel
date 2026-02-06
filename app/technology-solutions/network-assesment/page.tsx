"use client"

import { motion } from "framer-motion"
import { Network, Activity, AlertCircle, CheckCircle, BarChart, Wifi, Server, Shield } from "lucide-react"
import Link from "next/link"

export default function NetworkAssessment() {
  const assessments = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Network Performance",
      desc: "Analyze network speed, latency, and bandwidth utilization",
      features: ["Speed Testing", "Latency Analysis", "Bandwidth Usage", "Traffic Patterns"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Audit",
      desc: "Identify security vulnerabilities and risks",
      features: ["Vulnerability Scan", "Access Control Review", "Firewall Analysis", "Compliance Check"]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Infrastructure Review",
      desc: "Evaluate network hardware and configuration",
      features: ["Device Inventory", "Configuration Audit", "Capacity Planning", "Lifecycle Management"]
    },
    {
      icon: <AlertCircle className="h-8 w-8" />,
      title: "Health Check",
      desc: "Comprehensive network health assessment",
      features: ["Uptime Analysis", "Error Rates", "Performance Metrics", "Recommendations"]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      desc: "Map your network infrastructure and devices"
    },
    {
      step: "02",
      title: "Analysis",
      desc: "Monitor performance and identify issues"
    },
    {
      step: "03",
      title: "Testing",
      desc: "Conduct security and performance tests"
    },
    {
      step: "04",
      title: "Reporting",
      desc: "Provide detailed assessment report"
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
              backgroundImage: "url('/background/network-assessment.webp')",
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
              <span className="text-sm font-semibold text-purple-100">Network Analysis</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Network
              <span className="block bg-gradient-to-r from-purple-500 via-violet-400 to-pink-500 bg-clip-text text-transparent">
                Assessment
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Professional network assessment services to optimize performance, 
              enhance security, and ensure reliability for businesses in Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "500+", label: "Networks Assessed" },
                { number: "40%", label: "Performance Gain" },
                { number: "24/7", label: "Monitoring" },
                { number: "Detailed", label: "Reports" },
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

      {/* ASSESSMENTS SECTION */}
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
              <span className="text-sm font-semibold">Assessment Types</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-purple-600">Analysis</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed network assessment services for optimal performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {assessments.map((assessment, index) => (
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
                        {assessment.icon}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{assessment.title}</h3>
                      <p className="text-gray-600 mb-4">{assessment.desc}</p>
                      
                      <div className="space-y-2">
                        {assessment.features.map((feature, idx) => (
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

      {/* PROCESS SECTION */}
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
              Assessment <span className="text-purple-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to network assessment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full relative">
                  <div className="absolute -top-4 -left-4 h-12 w-12 bg-purple-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
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
              Get a professional network assessment to identify issues, 
              improve performance, and enhance security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Contact-us"
                className="px-12 py-5 bg-white text-purple-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Schedule Assessment
              </Link>
              <Link
                href="tel:+92-311-128-4373"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call Network Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}