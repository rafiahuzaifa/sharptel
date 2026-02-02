"use client"

import { motion } from "framer-motion"
import { Phone, Video, Users, Headphones, CheckCircle, Globe, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function VoiceOverIPSolutions() {
  const solutions = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "VoIP Phone Systems",
      desc: "Modern business phone systems",
      features: ["IP Phones", "Softphones", "Call Routing", "Auto Attendant"]
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Conferencing",
      desc: "High-quality video communication",
      features: ["HD Video", "Screen Sharing", "Recording", "Virtual Backgrounds"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Call Center Solutions",
      desc: "Customer service and support systems",
      features: ["ACD", "IVR", "Call Monitoring", "Reporting"]
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Unified Communications",
      desc: "Integrated communication platform",
      features: ["Instant Messaging", "Presence", "File Sharing", "Calendar"]
    }
  ]

  const features = [
    {
      feature: "Cost Savings",
      desc: "Reduce phone bills by up to 60%",
      icon: "💰"
    },
    {
      feature: "Scalability",
      desc: "Easily add or remove users",
      icon: "📈"
    },
    {
      feature: "Mobility",
      desc: "Work from anywhere with internet",
      icon: "📱"
    },
    {
      feature: "Reliability",
      desc: "99.99% uptime guarantee",
      icon: "🛡️"
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
              backgroundImage: "url('/background/voip-bg.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 via-cyan-800/60 to-cyan-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600/20 to-cyan-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
              <div className="h-3 w-3 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-cyan-100">Business Communication</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Voice Over IP
              <span className="block bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Modern VoIP communication solutions to enhance business 
              productivity and reduce costs across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "60%", label: "Cost Savings" },
                { number: "99.99%", label: "Uptime" },
                { number: "500+", label: "Clients" },
                { number: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-cyan-100">{stat.label}</div>
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
            <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-cyan-600 rounded-full"></div>
              <span className="text-sm font-semibold">VoIP Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Business <span className="text-cyan-600">Communication</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete VoIP solutions for modern businesses
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
                    <div className="h-16 w-16 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                            <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
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

      {/* FEATURES SECTION */}
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
                Key <span className="text-cyan-600">Benefits</span>
              </h2>
              
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.feature}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
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
              className="bg-gradient-to-br from-cyan-600 to-blue-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Technical Features</div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span>Call Quality</span>
                  </div>
                  <span className="font-bold">HD Voice</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5" />
                    <span>Connectivity</span>
                  </div>
                  <span className="font-bold">SIP & WebRTC</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5" />
                    <span>Security</span>
                  </div>
                  <span className="font-bold">TLS & SRTP</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5" />
                    <span>Integration</span>
                  </div>
                  <span className="font-bold">CRM & ERP</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-cyan-700 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Upgrade Your <span className="text-yellow-300">Communication</span>
            </h2>
            
            <p className="text-xl text-cyan-100 mb-12 max-w-3xl mx-auto">
              Transform your business communication with modern VoIP 
              solutions and start saving today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-cyan-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Free Demo
              </Link>
              <Link
                href="tel:+922134567890"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call VoIP Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}