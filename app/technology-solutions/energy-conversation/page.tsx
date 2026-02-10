"use client"

import { motion } from "framer-motion"
import { Battery, Sun, Leaf, Zap, TrendingDown, CheckCircle, Lightbulb, Building } from "lucide-react"
import Link from "next/link"

export default function EnergyConservationSolutions() {
  const solutions = [
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Solar Energy",
      desc: "Solar power solutions for homes and businesses",
      features: ["Solar Panels", "Inverters", "Battery Storage", "Grid-tie Systems"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Audits",
      desc: "Comprehensive energy consumption analysis",
      features: ["Consumption Analysis", "Efficiency Recommendations", "ROI Calculation", "Implementation Plan"]
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Energy Storage",
      desc: "Battery storage solutions for energy management",
      features: ["Lithium Batteries", "UPS Systems", "Load Management", "Backup Power"]
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Efficient Lighting",
      desc: "Energy-efficient lighting solutions",
      features: ["LED Lighting", "Smart Controls", "Motion Sensors", "Daylight Harvesting"]
    }
  ]

  const benefits = [
    {
      benefit: "Cost Savings",
      desc: "Reduce electricity bills by up to 60%",
      icon: "💰"
    },
    {
      benefit: "Carbon Footprint",
      desc: "Lower environmental impact",
      icon: "🌱"
    },
    {
      benefit: "Energy Independence",
      desc: "Reduce reliance on grid power",
      icon: "⚡"
    },
    {
      benefit: "Government Incentives",
      desc: "Benefit from green energy subsidies",
      icon: "🏛️"
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
              backgroundImage: "url('/background/energy-bg.webp')",
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
              <span className="text-sm font-semibold text-teal-100">Green Energy</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Energy
              <span className="block bg-gradient-to-r from-teal-500 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Conservation
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Smart energy conservation solutions to reduce costs, 
              increase efficiency, and promote sustainability across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "60%", label: "Cost Savings" },
                { number: "100+", label: "Projects" },
                { number: "5 Years", label: "Payback Period" },
                { number: "24/7", label: "Monitoring" },
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
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-teal-600 rounded-full"></div>
              <span className="text-sm font-semibold">Energy Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sustainable <span className="text-teal-600">Energy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy conservation and renewable energy solutions
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
                    <div className="h-16 w-16 bg-gradient-to-br from-teal-600 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                            <div className="h-2 w-2 rounded-full bg-teal-500"></div>
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
                Key <span className="text-teal-600">Benefits</span>
              </h2>
              
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-teal-50 flex items-center justify-center">
                        <span className="text-2xl">{benefit.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.benefit}</h3>
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
              className="bg-gradient-to-br from-teal-600 to-emerald-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Savings Calculator</div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingDown className="h-5 w-5" />
                    <span>Monthly Bill</span>
                  </div>
                  <span className="font-bold">PKR 50,000</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sun className="h-5 w-5" />
                    <span>Solar Savings</span>
                  </div>
                  <span className="font-bold">60-70%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="h-5 w-5" />
                    <span>Efficiency Savings</span>
                  </div>
                  <span className="font-bold">20-30%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5" />
                    <span>ROI Period</span>
                  </div>
                  <span className="font-bold">3-5 Years</span>
                </div>
              </div>
            </motion.div>
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
              Save Energy, <span className="text-yellow-300">Save Money</span>
            </h2>
            
            <p className="text-xl text-teal-100 mb-12 max-w-3xl mx-auto">
              Reduce your energy costs and carbon footprint with our 
              professional energy conservation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Contact-us"
                className="px-12 py-5 bg-white text-teal-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Energy Audit
              </Link>
              <Link
                href="tel:+92-311-128-4373"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call Energy Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}