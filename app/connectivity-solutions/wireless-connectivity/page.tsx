"use client"

import { motion } from "framer-motion"
import { CheckCircle, Wifi, MapPin, TowerControl, Radio, Satellite, Signal, Cloud } from "lucide-react"
import Link from "next/link"

export default function WirelessServices() {
  const services = [
    {
      icon: <TowerControl className="h-8 w-8" />,
      title: "Wireless Broadband",
      desc: "High-speed wireless internet for businesses and residential areas",
      features: ["Up to 100 Mbps", "Point-to-Multipoint", "Urban & Semi-Urban"]
    },
    {
      icon: <Radio className="h-8 w-8" />,
      title: "Point-to-Point Links",
      desc: "Dedicated wireless connections between two locations",
      features: ["Up to 1 Gbps", "Low Latency", "Building-to-Building"]
    },
    {
      icon: <Satellite className="h-8 w-8" />,
      title: "Rural Connectivity",
      desc: "Wireless solutions for remote and underserved areas",
      features: ["Long Range", "Cost Effective", "Easy Deployment"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Last Mile Connectivity",
      desc: "Wireless solutions for final connectivity to end-users",
      features: ["Quick Installation", "Scalable", "Reliable"]
    }
  ]

  const coverage = [
    {
      city: "Karachi",
      type: "Full Coverage",
      status: "Active",
      color: "bg-green-500"
    },
    {
      city: "Lahore",
      type: "Full Coverage",
      status: "Active",
      color: "bg-green-500"
    },
    {
      city: "Islamabad",
      type: "Full Coverage",
      status: "Active",
      color: "bg-green-500"
    },
    {
      city: "Faisalabad",
      type: "Partial Coverage",
      status: "Expanding",
      color: "bg-yellow-500"
    },
    {
      city: "Rawalpindi",
      type: "Full Coverage",
      status: "Active",
      color: "bg-green-500"
    },
    {
      city: "Multan",
      type: "Partial Coverage",
      status: "Expanding",
      color: "bg-yellow-500"
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
              backgroundImage: "url('/background/wireless-bg.jpg')",
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-purple-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-purple-500/30">
              <div className="h-3 w-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-purple-100">Wireless Connectivity</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Wireless
              <span className="block bg-gradient-to-r from-purple-500 via-pink-400 to-rose-500 bg-clip-text text-transparent">
                Connectivity Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Reliable wireless connectivity solutions for businesses, 
              residential areas, and hard-to-reach locations across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "50+", label: "Cities Covered" },
                { number: "100 Mbps", label: "Maximum Speed" },
                { number: "99.5%", label: "Uptime" },
                { number: "24/7", label: "Support" },
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
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-semibold">Our Wireless Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Wireless <span className="text-purple-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive wireless connectivity options for every need
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
                    <div className="h-16 w-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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

      {/* COVERAGE SECTION */}
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
                Coverage <span className="text-purple-600">Areas</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Sharptel provides wireless connectivity across major cities in Pakistan, 
                with continuous expansion to cover more areas. Our wireless network is 
                designed to provide reliable internet access even in challenging terrains.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {coverage.map((city, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-gray-900">{city.city}</div>
                      <div className={`h-3 w-3 rounded-full ${city.color}`}></div>
                    </div>
                    <div className="text-sm text-gray-600">{city.type}</div>
                    <div className="text-xs text-gray-500">{city.status}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl p-8 text-white">
                <div className="text-4xl font-bold mb-6">Why Wireless?</div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Wifi className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xl font-bold mb-2">Quick Deployment</div>
                      <div className="text-purple-100">Installation within days, not weeks</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xl font-bold mb-2">Remote Access</div>
                      <div className="text-purple-100">Connect locations without fiber infrastructure</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Signal className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xl font-bold mb-2">Cost Effective</div>
                      <div className="text-purple-100">Lower installation costs compared to fiber</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Need Wireless <span className="text-purple-600">Connectivity?</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Contact our wireless experts for a free site survey and connectivity assessment
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/Contact-us"
                  className="px-12 py-5 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  Request Site Survey
                </Link>
                <Link
                  href="tel:+92-311-128-4373"
                  className="px-12 py-5 border-2 border-purple-600 text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300 text-lg"
                >
                  Call: +92-311-128-4373
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}