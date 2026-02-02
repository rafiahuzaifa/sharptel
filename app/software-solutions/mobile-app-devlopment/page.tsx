"use client"

import { motion } from "framer-motion"
import { Smartphone, Code, Shield, Zap, Globe, Users, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function MobileAppsDevelopment() {
  const platforms = [
    {
      name: "iOS Development",
      icon: "🍎",
      desc: "Native iOS apps with Swift and SwiftUI",
      features: ["iPhone Apps", "iPad Apps", "Apple Watch", "App Store Deployment"]
    },
    {
      name: "Android Development",
      icon: "🤖",
      desc: "Native Android apps with Kotlin and Jetpack Compose",
      features: ["Phone & Tablet Apps", "Android TV", "Wear OS", "Play Store Deployment"]
    },
    {
      name: "Cross-Platform",
      icon: "🌐",
      desc: "Single codebase for multiple platforms",
      features: ["React Native", "Flutter", "Xamarin", "Progressive Web Apps"]
    }
  ]

  const services = [
    {
      title: "UI/UX Design",
      desc: "Intuitive and beautiful mobile interfaces",
      icon: "🎨"
    },
    {
      title: "API Integration",
      desc: "Seamless integration with backend services",
      icon: "🔌"
    },
    {
      title: "App Testing",
      desc: "Quality assurance across all devices",
      icon: "🧪"
    },
    {
      title: "App Store Optimization",
      desc: "Maximize visibility and downloads",
      icon: "📈"
    }
  ]

  const industries = [
    {
      title: "E-Commerce",
      desc: "Mobile shopping experiences",
      features: ["Product Catalogs", "Payment Gateways", "Order Tracking"]
    },
    {
      title: "Healthcare",
      desc: "Medical and wellness applications",
      features: ["Appointment Booking", "Telemedicine", "Health Tracking"]
    },
    {
      title: "Education",
      desc: "Learning and training platforms",
      features: ["E-Learning", "Virtual Classes", "Progress Tracking"]
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
              backgroundImage: "url('/background/mobile-bg.jpg')",
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
              <span className="text-sm font-semibold text-blue-100">Mobile Solutions</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Mobile Apps
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                Development
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Native and cross-platform mobile applications for iOS and Android, 
              delivering exceptional user experiences across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "iOS & Android", label: "Platforms" },
                { number: "100+", label: "Apps Delivered" },
                { number: "4.8/5", label: "App Store Rating" },
                { number: "24/7", label: "Support" },
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

      {/* PLATFORMS SECTION */}
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
              <span className="text-sm font-semibold">Development Platforms</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cross-Platform <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We develop for all major mobile platforms using latest technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                  <div className="text-5xl mb-6">{platform.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                  <p className="text-gray-600 mb-6">{platform.desc}</p>
                  
                  <div className="space-y-3">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
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
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end mobile app development services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
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
              Industry <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom mobile solutions for diverse industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.desc}</p>
                
                <div className="space-y-3">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
              Launch Your <span className="text-yellow-300">App</span> Today
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Transform your business with a custom mobile application. 
              Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-blue-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                View Our Apps
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}