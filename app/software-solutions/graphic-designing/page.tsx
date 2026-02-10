"use client"

import { motion } from "framer-motion"
import { Palette, Brush, Image, Layout, Type, Layers, CheckCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export default function GraphicDesignServices() {
  const services = [
    {
      title: "Logo & Branding",
      desc: "Memorable logos and complete brand identity systems",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
      icon: "🎨"
    },
    {
      title: "Print Design",
      desc: "Professional designs for physical media",
      features: ["Business Cards", "Brochures", "Flyers", "Packaging"],
      icon: "📄"
    },
    {
      title: "Digital Graphics",
      desc: "Graphics for digital platforms and social media",
      features: ["Social Media Posts", "Banners", "Email Templates", "Web Graphics"],
      icon: "💻"
    }
  ]

  const designTypes = [
    {
      category: "Corporate Identity",
      items: ["Logo Design", "Business Cards", "Letterheads", "Brand Guidelines"]
    },
    {
      category: "Marketing Materials",
      items: ["Brochures", "Flyers", "Posters", "Roll-up Banners"]
    },
    {
      category: "Digital Design",
      items: ["Social Media Graphics", "Email Templates", "Web Banners", "UI Elements"]
    }
  ]

  const process = [
    {
      step: "Brief",
      title: "Client Brief",
      desc: "Understanding your requirements and goals"
    },
    {
      step: "Research",
      title: "Market Research",
      desc: "Analyzing competitors and industry trends"
    },
    {
      step: "Concepts",
      title: "Concept Development",
      desc: "Creating initial design concepts"
    },
    {
      step: "Refine",
      title: "Refinement",
      desc: "Iterating based on feedback"
    },
    {
      step: "Deliver",
      title: "Final Delivery",
      desc: "Providing all source files and formats"
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
              backgroundImage: "url('/background/design-bg.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/60 to-teal-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-teal-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-teal-500/30">
              <div className="h-3 w-3 bg-teal-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-teal-100">Visual Design</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Graphic
              <span className="block bg-gradient-to-r from-teal-500 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Design Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Professional graphic design services that elevate your brand and 
              communicate your message effectively across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "500+", label: "Design Projects" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "3-7 Days", label: "Turnaround Time" },
                { number: "Unlimited", label: "Revisions" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-teal-100">{stat.label}</div>
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
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-teal-600 rounded-full"></div>
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Creative <span className="text-teal-600">Design</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive graphic design services for all your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-500" />
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

      {/* DESIGN TYPES SECTION */}
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
              Design <span className="text-teal-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wide range of design services for every business need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {designTypes.map((designType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{designType.category}</h3>
                  
                  <div className="space-y-4">
                    {designType.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
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
              Design <span className="text-teal-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures quality and consistency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 h-full relative text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-12 w-12 bg-teal-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-teal-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Elevate Your <span className="text-yellow-300">Brand</span>
            </h2>
            
            <p className="text-xl text-teal-100 mb-12 max-w-3xl mx-auto">
              Make a lasting impression with professional graphic design that 
              communicates your brand's story and values.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-teal-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Start Design Project
              </Link>
              <Link
                href="/portfolio"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                View Design Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}