"use client"

import { motion } from "framer-motion"
import { MapPin, CheckCircle, Wifi, Building, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function CoverageAreasCities() {
  const majorCities = [
    {
      name: "Karachi",
      type: "Full Coverage",
      services: ["Fiber Optic", "Wireless", "Enterprise"],
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Lahore",
      type: "Full Coverage",
      services: ["Fiber Optic", "Wireless", "Enterprise"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Islamabad",
      type: "Full Coverage",
      services: ["Fiber Optic", "Wireless", "Enterprise"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Faisalabad",
      type: "Partial Coverage",
      services: ["Wireless", "Enterprise"],
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Rawalpindi",
      type: "Full Coverage",
      services: ["Fiber Optic", "Wireless"],
      color: "from-yellow-500 to-amber-500"
    },
    {
      name: "Multan",
      type: "Partial Coverage",
      services: ["Wireless", "Enterprise"],
      color: "from-pink-500 to-rose-500"
    }
  ]

  const upcomingCities = [
    "Gujranwala", "Sialkot", "Bahawalpur", "Sargodha", "Quetta", "Peshawar"
  ]

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/background/connectivity.webp')",
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-red-500/30">
              <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-red-100">Nationwide Coverage</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Coverage
              <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Areas & Cities
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Serving businesses across Pakistan with extensive network coverage 
              in major cities and continuous expansion to new areas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "50+", label: "Cities Covered" },
                { number: "1000+", label: "Buildings Connected" },
                { number: "24/7", label: "Local Support" },
                { number: "Expanding", label: "Continuously" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-indigo-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COVERAGE MAP */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-red-600 rounded-full"></div>
              <span className="text-sm font-semibold">Network Coverage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-red-600">Coverage</span> Map
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extensive network coverage across major cities in Pakistan
            </p>
          </motion.div>

          <div className="relative h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden mb-16">
            {/* Interactive Map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Pakistan Map Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 800 600">
                    <path 
                      d="M200,200 L300,250 L400,220 L500,280 L600,230 L650,300 L550,400 L450,450 L350,400 L250,350 L200,300 Z" 
                      fill="rgba(99, 102, 241, 0.1)" 
                      stroke="rgb(99, 102, 241)" 
                      strokeWidth="2"
                    />
                    
                    {/* City Markers */}
                    {[
                      { x: 250, y: 250, name: "Karachi", color: "#ef4444" },
                      { x: 400, y: 200, name: "Lahore", color: "#10b981" },
                      { x: 550, y: 220, name: "Islamabad", color: "#3b82f6" },
                      { x: 450, y: 300, name: "Faisalabad", color: "#8b5cf6" },
                      { x: 350, y: 350, name: "Rawalpindi", color: "#f59e0b" },
                      { x: 300, y: 400, name: "Multan", color: "#ec4899" },
                    ].map((city, idx) => (
                      <g key={idx}>
                        <circle 
                          cx={city.x} 
                          cy={city.y} 
                          r="15" 
                          fill={city.color}
                          className="animate-pulse"
                        />
                        <text 
                          x={city.x} 
                          y={city.y - 25} 
                          textAnchor="middle"
                          fill="white"
                          fontSize="16"
                          fontWeight="bold"
                        >
                          {city.name}
                        </text>
                      </g>
                    ))}
                    
                    {/* Network Lines */}
                    <path 
                      d="M250,250 L400,200 L550,220 L450,300 L350,350 L300,400" 
                      stroke="rgba(99, 102, 241, 0.3)" 
                      strokeWidth="2" 
                      strokeDasharray="5,5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Map Legend */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="font-medium">Full Coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  <span className="font-medium">Partial Coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <span className="font-medium">Expanding Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAJOR CITIES SECTION */}
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
              Major <span className="text-red-600">Cities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed coverage information for major cities across Pakistan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majorCities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden border border-gray-100">
                  {/* City Header */}
                  <div className={`bg-gradient-to-r ${city.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">{city.name}</div>
                        <div className="text-sm opacity-90">{city.type}</div>
                      </div>
                      <MapPin className="h-8 w-8 opacity-90" />
                    </div>
                  </div>
                  
                  {/* Services */}
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-500 mb-2">Available Services</div>
                      <div className="flex flex-wrap gap-2">
                        {city.services.map((service, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Support</span>
                        <span className="font-semibold">24/7 Local</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Uptime</span>
                        <span className="font-semibold">99.9%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Response Time</span>
                        <span className="font-semibold"> 2 Hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING COVERAGE */}
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
                Coming <span className="text-red-600">Soon</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We are continuously expanding our network coverage to serve more cities 
                across Pakistan. Our expansion plan includes bringing high-speed connectivity 
                to additional urban and semi-urban areas.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {upcomingCities.map((city, index) => (
                  <div key={index} className="bg-red-50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                        <div className="text-white font-bold">{index + 1}</div>
                      </div>
                      <div className="font-bold text-gray-900">{city}</div>
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
              className="bg-gradient-to-br from-red-600 to-red-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Coverage Request</div>
              <p className="text-indigo-100 text-lg mb-8">
                Don't see your city? Request coverage expansion for your area
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Building className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl font-bold mb-2">Business District</div>
                    <div className="text-indigo-100">Priority coverage for business areas</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl font-bold mb-2">Residential Areas</div>
                    <div className="text-indigo-100">Expanding to residential communities</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl font-bold mb-2">Industrial Zones</div>
                    <div className="text-indigo-100">Coverage for industrial and manufacturing areas</div>
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
                Check <span className="text-red-600">Coverage</span> in Your Area
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Contact us to check network availability in your specific location 
                and discuss connectivity options for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/Contact-us"
                  className="px-12 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  Check Availability
                </Link>
                <Link
                  href="tel:+92-311-128-4373"
                  className="px-12 py-5 border-2 border-red-600 text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all duration-300 text-lg"
                >
                  Call for Coverage Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}