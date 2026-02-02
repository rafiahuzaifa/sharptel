"use client"

import { motion } from "framer-motion"
import { Code, Globe, Shield, Zap, Users, CheckCircle, Layout, Database } from "lucide-react"
import Link from "next/link"

export default function CustomWebDevelopment() {
  const technologies = [
    {
      category: "Frontend",
      tech: ["React.js", "Next.js", "Vue.js", "Angular"],
      icon: "🎨"
    },
    {
      category: "Backend",
      tech: ["Node.js", "Python/Django", "PHP/Laravel", ".NET Core"],
      icon: "⚙️"
    },
    {
      category: "Database",
      tech: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
      icon: "🗄️"
    }
  ]

  const services = [
    {
      title: "E-Commerce Websites",
      desc: "Custom online stores with payment integration",
      features: ["Shopping Cart", "Payment Gateways", "Inventory Management"]
    },
    {
      title: "Web Applications",
      desc: "Complex web applications for business automation",
      features: ["User Management", "Real-time Updates", "API Integration"]
    },
    {
      title: "CMS Development",
      desc: "Custom content management systems",
      features: ["Easy Content Editing", "Multi-user Access", "SEO Friendly"]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      desc: "Understanding requirements and creating project roadmap"
    },
    {
      step: "02",
      title: "UI/UX Design",
      desc: "Creating intuitive and beautiful user interfaces"
    },
    {
      step: "03",
      title: "Development",
      desc: "Writing clean, scalable, and maintainable code"
    },
    {
      step: "04",
      title: "Testing & Launch",
      desc: "Quality assurance and deployment to production"
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
              backgroundImage: "url('/background/web-bg.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/60 to-emerald-900/40"></div>
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
              <span className="text-sm font-semibold text-emerald-100">Web Solutions</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Custom Web
              <span className="block bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Development
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Bespoke web applications and websites tailored to your business needs, 
              built with modern technologies and best practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "300+", label: "Projects Completed" },
                { number: "99.9%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support" },
                { number: "SEO", label: "Optimized" },
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

      {/* TECHNOLOGIES SECTION */}
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
              <span className="text-sm font-semibold">Technologies We Use</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Modern <span className="text-emerald-600">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build fast, scalable, and secure web applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                  <div className="text-5xl mb-6">{tech.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{tech.category}</h3>
                  
                  <div className="space-y-4">
                    {tech.tech.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-lg font-medium text-gray-800">{item}</span>
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
              Our <span className="text-emerald-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development services for businesses of all sizes
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
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
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
              Development <span className="text-emerald-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures quality and timely delivery
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
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 h-full relative">
                  <div className="absolute -top-4 -left-4 h-12 w-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
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
      <section className="py-24 bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Build Your <span className="text-yellow-300">Digital Presence</span>
            </h2>
            
            <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto">
              Transform your business with a custom web solution that drives growth and engages customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-emerald-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}