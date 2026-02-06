"use client"

import { motion } from "framer-motion"
import { Server, Settings, Monitor, Zap, CheckCircle, Users, Shield, Headphones } from "lucide-react"
import Link from "next/link"

export default function ManagedITServices() {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Desktop Support",
      desc: "Comprehensive desktop and laptop support services",
      features: ["Hardware Support", "Software Installation", "Troubleshooting", "Remote Assistance"]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Server Management",
      desc: "24/7 server monitoring and management",
      features: ["Server Monitoring", "Performance Tuning", "Patch Management", "Backup Management"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "IT Infrastructure",
      desc: "Complete IT infrastructure management",
      features: ["Network Management", "Storage Solutions", "Virtualization", "Disaster Recovery"]
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Help Desk Support",
      desc: "Professional IT help desk services",
      features: ["24/7 Support", "Ticket Management", "Knowledge Base", "User Training"]
    }
  ]

  const benefits = [
    {
      title: "Cost Predictability",
      desc: "Fixed monthly pricing with no surprises",
      icon: "💰"
    },
    {
      title: "Expert Support",
      desc: "Access to certified IT professionals",
      icon: "👨‍💻"
    },
    {
      title: "Proactive Monitoring",
      desc: "24/7 monitoring to prevent issues",
      icon: "👁️"
    },
    {
      title: "Business Continuity",
      desc: "Minimize downtime and maximize productivity",
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
              backgroundImage: "url('/background/managed-it-bg.webp')",
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
              <span className="text-sm font-semibold text-blue-100">IT Management</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Managed
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                IT Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Comprehensive managed IT services that proactively monitor, 
              maintain, and optimize your IT infrastructure across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "24/7", label: "Monitoring" },
                { number: "99.9%", label: "Uptime SLA" },
                { number: "50+", label: "Clients" },
                { number: "1 Hour", label: "Response Time" },
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
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete <span className="text-blue-600">IT Management</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end managed IT services for businesses of all sizes
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
                    <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
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

      {/* BENEFITS SECTION */}
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
                Business <span className="text-blue-600">Benefits</span>
              </h2>
              
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <span className="text-2xl">{benefit.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.desc}</p>
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
              className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Service Level Agreement</div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5" />
                    <span>Response Time</span>
                  </div>
                  <span className="font-bold">1 Hour</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5" />
                    <span>Uptime Guarantee</span>
                  </div>
                  <span className="font-bold">99.9%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5" />
                    <span>Support Hours</span>
                  </div>
                  <span className="font-bold">24/7/365</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Headphones className="h-5 w-5" />
                    <span>Resolution Time</span>
                  </div>
                  <span className="font-bold">4 Hours</span>
                </div>
              </div>
            </motion.div>
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
              Focus on <span className="text-yellow-300">Business</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Let us handle your IT while you focus on growing your business. 
              Get reliable, predictable IT support today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Contact-us"
                className="px-12 py-5 bg-white text-blue-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get IT Assessment
              </Link>
              <Link
                href="tel:+92-311-128-4373"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call IT Manager
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}