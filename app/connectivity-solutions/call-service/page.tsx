"use client"

import { motion } from "framer-motion"
import { CheckCircle, Phone, Headphones, Users, BarChart, Cloud, Zap, Wifi } from "lucide-react"
import Link from "next/link"

export default function CallCenterServices() {
  const solutions = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Voice Connectivity",
      desc: "Dedicated voice circuits with QoS for crystal clear call quality",
      features: ["SIP Trunking", "PRI Lines", "Call Routing"]
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Contact Center Solutions",
      desc: "Complete contact center infrastructure with advanced features",
      features: ["IVR Systems", "ACD Queues", "Call Recording"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Contact Center",
      desc: "Cloud-based contact center solutions for scalability and flexibility",
      features: ["Remote Agents", "Omnichannel", "Analytics Dashboard"]
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Redundant Connectivity",
      desc: "Multiple redundant connections for uninterrupted call center operations",
      features: ["Failover Links", "Load Balancing", "Disaster Recovery"]
    }
  ]

  const benefits = [
    {
      title: "99.9% Voice Quality",
      desc: "Guaranteed voice quality with minimal latency and packet loss",
      icon: "🎯"
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock technical support for mission-critical operations",
      icon: "🛠️"
    },
    {
      title: "Scalable Solutions",
      desc: "Easily scale up or down based on call volume and business needs",
      icon: "📈"
    },
    {
      title: "Cost Optimization",
      desc: "Reduce operational costs with efficient connectivity solutions",
      icon: "💰"
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
              backgroundImage: "url('/background/callcenter-bg.webp')",
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600/20 to-orange-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-500/30">
              <div className="h-3 w-3 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-orange-100">Contact Center Solutions</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Call Center
              <span className="block bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Reliable voice and data connectivity solutions for call centers and 
              customer service operations across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "99.9%", label: "Uptime SLA" },
                { number: "< 50ms", label: "Voice Latency" },
                { number: "500+", label: "Seats Supported" },
                { number: "24/7", label: "Support" },
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
              <span className="text-sm font-semibold">Our Call Center Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Call Center <span className="text-orange-600">Connectivity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for call center operations
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
                    <div className="h-16 w-16 bg-gradient-to-br from-orange-600 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                            <div className="h-2 w-2 rounded-full bg-orange-500"></div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key <span className="text-orange-600">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why call centers across Pakistan trust Sharptel for their connectivity needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACITY SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-600 to-amber-500 rounded-3xl p-8 text-white">
                <div className="text-4xl font-bold mb-6">Call Center Capacity</div>
                
                <div className="space-y-6">
                  {[
                    { label: "Concurrent Calls", value: "500+" },
                    { label: "Voice Quality", value: "99.9%" },
                    { label: "Call Setup Time", value: "< 2s" },
                    { label: "Jitter", value: "< 10ms" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-orange-200">{item.label}</span>
                      <span className="text-2xl font-bold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Designed for <span className="text-orange-600">Performance</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our call center solutions are engineered to handle high call volumes 
                while maintaining exceptional voice quality. With dedicated bandwidth 
                and QoS prioritization, we ensure that voice traffic always takes priority 
                over data traffic.
              </p>
              
              <div className="space-y-4">
                {[
                  "Dedicated voice circuits with QoS",
                  "Redundant connectivity for failover",
                  "24/7 network monitoring",
                  "Real-time performance dashboards",
                  "Proactive issue resolution",
                  "Regular performance reporting"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-amber-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Optimize Your <span className="text-yellow-300">Call Center</span>
            </h2>
            
            <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto">
              Contact our call center specialists for a free consultation and 
              network assessment to improve your customer service operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/Contact-us"
                className="px-12 py-5 bg-white text-orange-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Request Assessment
              </Link>
              <Link
                href="tel:+92-311-128-4373"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}