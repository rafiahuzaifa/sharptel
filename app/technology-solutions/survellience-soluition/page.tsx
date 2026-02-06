"use client"

import { motion } from "framer-motion"
import { Camera, Shield, Eye, AlertCircle, CheckCircle, Video, Smartphone, Lock } from "lucide-react"
import Link from "next/link"

export default function SurveillanceSecurity() {
  const solutions = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "CCTV Systems",
      desc: "Advanced surveillance camera systems",
      features: ["HD & 4K Cameras", "Night Vision", "Motion Detection", "Remote Viewing"]
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Access Control",
      desc: "Secure access management systems",
      features: ["Biometric Readers", "RFID Cards", "Time & Attendance", "Visitor Management"]
    },
    {
      icon: <AlertCircle className="h-8 w-8" />,
      title: "Alarm Systems",
      desc: "Intruder detection and alert systems",
      features: ["Motion Sensors", "Door Contacts", "Siren Alarms", "Mobile Alerts"]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Video Analytics",
      desc: "AI-powered video analysis",
      features: ["Face Recognition", "License Plate", "Crowd Detection", "Heat Mapping"]
    }
  ]

  const applications = [
    {
      application: "Commercial",
      desc: "Security for offices and businesses",
      icon: "🏢"
    },
    {
      application: "Residential",
      desc: "Home security and monitoring",
      icon: "🏠"
    },
    {
      application: "Industrial",
      desc: "Factory and warehouse security",
      icon: "🏭"
    },
    {
      application: "Retail",
      desc: "Store surveillance and loss prevention",
      icon: "🛍️"
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
              backgroundImage: "url('/background/surveillance-security.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-gray-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-600/20 to-gray-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-gray-500/30">
              <div className="h-3 w-3 bg-gray-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-100">Security Solutions</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Surveillance &
              <span className="block bg-gradient-to-r from-gray-500 via-slate-400 to-blue-500 bg-clip-text text-transparent">
                Security
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Complete surveillance and security solutions to protect your 
              property, assets, and people across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "24/7", label: "Monitoring" },
                { number: "1000+", label: "Installations" },
                { number: "HD & 4K", label: "Camera Quality" },
                { number: "Mobile", label: "Access" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-gray-100">{stat.label}</div>
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
            <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
              <span className="text-sm font-semibold">Security Systems</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete <span className="text-gray-600">Security</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated security solutions for comprehensive protection
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
                    <div className="h-16 w-16 bg-gradient-to-br from-gray-600 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                            <div className="h-2 w-2 rounded-full bg-gray-500"></div>
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

      {/* APPLICATIONS SECTION */}
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
              Industry <span className="text-gray-600">Applications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Security solutions tailored for various sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 text-center h-full">
                  <div className="text-4xl mb-4">{app.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{app.application}</h3>
                  <p className="text-gray-600">{app.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-gray-700 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Secure Your <span className="text-yellow-300">Property</span>
            </h2>
            
            <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto">
              Protect what matters most with our professional surveillance 
              and security solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Contact-us"
                className="px-12 py-5 bg-white text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Security Quote
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