"use client"

import { motion } from "framer-motion"
import { CheckCircle, Satellite, Globe, Ship, Plane, MapPin, Wifi, Cloud } from "lucide-react"
import Link from "next/link"

export default function SatelliteService() {
  const solutions = [
    {
      icon: <Ship className="h-8 w-8" />,
      title: "Maritime VSAT",
      desc: "Satellite connectivity for ships, vessels, and offshore platforms",
      features: ["Global Coverage", "Voice & Data", "Weather Updates"]
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Aeronautical VSAT",
      desc: "In-flight connectivity solutions for aircraft and aviation industry",
      features: ["Airborne Connectivity", "Cabin Services", "Crew Communications"]
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Remote Site Connectivity",
      desc: "Satellite internet for remote locations without terrestrial connectivity",
      features: ["Quick Deployment", "Reliable Service", "Easy Installation"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Backup Connectivity",
      desc: "Satellite backup for critical business operations",
      features: ["Automatic Failover", "Business Continuity", "Disaster Recovery"]
    }
  ]

  const benefits = [
    {
      title: "Global Coverage",
      desc: "Connectivity anywhere on Earth, even in the most remote locations",
      icon: "🌍"
    },
    {
      title: "Rapid Deployment",
      desc: "Set up connectivity within hours, not weeks or months",
      icon: "⚡"
    },
    {
      title: "High Reliability",
      desc: "Weather-resistant and reliable connections in all conditions",
      icon: "🛡️"
    },
    {
      title: "Scalable Solutions",
      desc: "Flexible bandwidth options to match your specific needs",
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
              backgroundImage: "url('/background/satellite-bg.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600/20 to-violet-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-violet-500/30">
              <div className="h-3 w-3 bg-violet-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-violet-100">Satellite Connectivity</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Satellite
              <span className="block bg-gradient-to-r from-violet-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Service
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Global satellite connectivity solutions for maritime, aeronautical, 
              and remote site applications across Pakistan and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "Global", label: "Coverage" },
                { number: "99.5%", label: "Availability" },
                { number: "256kbps-50Mbps", label: "Speed Range" },
                { number: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-violet-100">{stat.label}</div>
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
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-violet-600 rounded-full"></div>
              <span className="text-sm font-semibold">Satellite Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Satellite <span className="text-violet-600">Connectivity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive VSAT solutions for diverse applications and industries
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
                    <div className="h-16 w-16 bg-gradient-to-br from-violet-600 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                            <div className="h-2 w-2 rounded-full bg-violet-500"></div>
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
                Why <span className="text-violet-600">Satellite?</span>
              </h2>
              
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-violet-50 flex items-center justify-center">
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
              className="bg-gradient-to-br from-violet-600 to-purple-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Technical Specifications</div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Satellite className="h-5 w-5" />
                    <span>Satellite Band</span>
                  </div>
                  <span className="font-bold">Ku & C Band</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Wifi className="h-5 w-5" />
                    <span>Speeds</span>
                  </div>
                  <span className="font-bold">256kbps - 50Mbps</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Cloud className="h-5 w-5" />
                    <span>Antenna Size</span>
                  </div>
                  <span className="font-bold">0.75m - 2.4m</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5" />
                    <span>Coverage</span>
                  </div>
                  <span className="font-bold">Global</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
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
              Ideal for <span className="text-violet-600">These</span> Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Satellite connectivity solutions for challenging environments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Oil & Gas",
                desc: "Remote rigs, pipelines, and exploration sites",
                items: ["Offshore Platforms", "Pipeline Monitoring", "Remote Camps"]
              },
              {
                title: "Shipping & Maritime",
                desc: "Vessels, ports, and maritime operations",
                items: ["Cargo Ships", "Fishing Vessels", "Port Operations"]
              },
              {
                title: "Mining",
                desc: "Remote mining operations and exploration sites",
                items: ["Mining Camps", "Equipment Monitoring", "Security Systems"]
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.desc}</p>
                
                <div className="space-y-3">
                  {useCase.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-violet-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-violet-700 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Connect <span className="text-yellow-300">Anywhere</span>
            </h2>
            
            <p className="text-xl text-violet-100 mb-12 max-w-3xl mx-auto">
              Get global satellite connectivity for your remote operations. 
              Contact our satellite experts for a customized solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Contact-us"
                className="px-12 py-5 bg-white text-violet-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Satellite Quote
              </Link>
              <Link
                href="tel:+92-311-128-4373"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call Satellite Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}