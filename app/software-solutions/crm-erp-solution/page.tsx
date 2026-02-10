"use client"

import { motion } from "framer-motion"
import { Settings, Users, BarChart, Shield, Database, Zap, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function CRMerpCustomization() {
  const solutions = [
    {
      title: "Sales Automation",
      desc: "Automate sales processes and lead management",
      features: ["Lead Tracking", "Sales Pipeline", "Deal Management", "Forecasting"]
    },
    {
      title: "Customer Service",
      desc: "Enhance customer support and service management",
      features: ["Ticket System", "Knowledge Base", "Live Chat", "Customer Portal"]
    },
    {
      title: "Inventory Management",
      desc: "Streamline inventory and supply chain operations",
      features: ["Stock Tracking", "Order Management", "Supplier Management", "Warehouse Control"]
    }
  ]

  const platforms = [
    {
      name: "Salesforce",
      desc: "Custom Salesforce development and integration",
      icon: "☁️"
    },
    {
      name: "Microsoft Dynamics",
      desc: "Dynamics 365 customization and implementation",
      icon: "🔷"
    },
    {
      name: "Odoo",
      desc: "Open-source ERP customization and development",
      icon: "📦"
    },
    {
      name: "Custom CRM/ERP",
      desc: "Bespoke solutions built from scratch",
      icon: "⚡"
    }
  ]

  const benefits = [
    {
      title: "Increased Efficiency",
      desc: "Automate routine tasks and streamline operations",
      icon: "📈"
    },
    {
      title: "Better Insights",
      desc: "Real-time analytics and business intelligence",
      icon: "📊"
    },
    {
      title: "Improved Collaboration",
      desc: "Seamless communication across departments",
      icon: "🤝"
    },
    {
      title: "Cost Reduction",
      desc: "Optimize resources and reduce operational costs",
      icon: "💰"
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
              backgroundImage: "url('/background/crm-bg.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-orange-800/60 to-orange-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600/20 to-orange-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-500/30">
              <div className="h-3 w-3 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-orange-100">Business Automation</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              CRM/ERP
              <span className="block bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Customization
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Customize and optimize your CRM and ERP systems to streamline business 
              processes and drive growth across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "50+", label: "CRM Implementations" },
                { number: "40%", label: "Efficiency Gain" },
                { number: "24/7", label: "Support" },
                { number: "99%", label: "Client Retention" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-orange-100">{stat.label}</div>
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
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-orange-600 rounded-full"></div>
              <span className="text-sm font-semibold">Business Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Streamline Your <span className="text-orange-600">Operations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom CRM and ERP solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.desc}</p>
                  
                  <div className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
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

      {/* PLATFORMS SECTION */}
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
              Platform <span className="text-orange-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading CRM and ERP platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600">{platform.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Business <span className="text-orange-600">Benefits</span>
              </h2>
              
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center">
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
              className="bg-gradient-to-br from-orange-600 to-amber-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Implementation Process</div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5" />
                    <span>Requirements Analysis</span>
                  </div>
                  <span className="font-bold">1-2 Weeks</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5" />
                    <span>Customization</span>
                  </div>
                  <span className="font-bold">4-8 Weeks</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5" />
                    <span>Training</span>
                  </div>
                  <span className="font-bold">1 Week</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5" />
                    <span>Support & Maintenance</span>
                  </div>
                  <span className="font-bold">Ongoing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-orange-700 to-amber-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Automate Your <span className="text-yellow-300">Business</span>
            </h2>
            
            <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto">
              Transform your business operations with a customized CRM/ERP solution 
              that grows with your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-orange-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Schedule Demo
              </Link>
              <Link
                href="/case-studies"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}