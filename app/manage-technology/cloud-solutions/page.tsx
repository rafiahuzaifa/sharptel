"use client"

import { motion } from "framer-motion"
import { Cloud, Phone, MessageSquare, Video, CheckCircle, Globe, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function CloudCommunications() {
  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Infrastructure",
      desc: "Managed cloud hosting and infrastructure",
      features: ["Public Cloud", "Private Cloud", "Hybrid Solutions", "Cloud Migration"]
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "VoIP Services",
      desc: "Business VoIP communication solutions",
      features: ["IP Phones", "Softphones", "Call Routing", "Auto Attendant"]
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Unified Communications",
      desc: "Integrated communication platform",
      features: ["Instant Messaging", "Video Calls", "File Sharing", "Team Collaboration"]
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Conferencing",
      desc: "Enterprise video conferencing solutions",
      features: ["HD Video", "Screen Sharing", "Recording", "Virtual Meetings"]
    }
  ]

  const benefits = [
    {
      benefit: "Cost Savings",
      desc: "Reduce infrastructure and communication costs",
      icon: "💰"
    },
    {
      benefit: "Scalability",
      desc: "Easily scale up or down as needed",
      icon: "📈"
    },
    {
      benefit: "Mobility",
      desc: "Access from anywhere, on any device",
      icon: "📱"
    },
    {
      benefit: "Reliability",
      desc: "99.9% uptime with redundancy",
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
              backgroundImage: "url('/background/cloud-comms-bg.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 via-sky-800/60 to-sky-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600/20 to-sky-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-sky-500/30">
              <div className="h-3 w-3 bg-sky-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-sky-100">Digital Solutions</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Cloud &
              <span className="block bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Communications
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Integrated cloud and communication solutions to enhance 
              productivity and collaboration for businesses in Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "99.9%", label: "Uptime" },
                { number: "50%", label: "Cost Savings" },
                { number: "24/7", label: "Support" },
                { number: "500+", label: "Clients" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-sky-100">{stat.label}</div>
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
            <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-sky-600 rounded-full"></div>
              <span className="text-sm font-semibold">Cloud & Comms</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Integrated <span className="text-sky-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete cloud and communication services
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
                    <div className="h-16 w-16 bg-gradient-to-br from-sky-600 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                            <div className="h-2 w-2 rounded-full bg-sky-500"></div>
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
                Business <span className="text-sky-600">Advantages</span>
              </h2>
              
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-sky-50 flex items-center justify-center">
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
              className="bg-gradient-to-br from-sky-600 to-blue-500 rounded-3xl p-8 text-white"
            >
              <div className="text-4xl font-bold mb-6">Service Features</div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5" />
                    <span>Global Connectivity</span>
                  </div>
                  <span className="font-bold">99.9% Uptime</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5" />
                    <span>Security</span>
                  </div>
                  <span className="font-bold">Enterprise Grade</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5" />
                    <span>User Capacity</span>
                  </div>
                  <span className="font-bold">Unlimited</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Cloud className="h-5 w-5" />
                    <span>Storage</span>
                  </div>
                  <span className="font-bold">Scalable</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-sky-700 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Transform Your <span className="text-yellow-300">Communication</span>
            </h2>
            
            <p className="text-xl text-sky-100 mb-12 max-w-3xl mx-auto">
              Move to the cloud and enhance your business communications 
              with our integrated solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-sky-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                href="tel:+922134567890"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Call Solutions Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}