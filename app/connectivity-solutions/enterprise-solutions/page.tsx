"use client"

import { motion } from "framer-motion"
import { CheckCircle, Wifi, Shield, Clock, Zap, Globe, Headphones, BarChart } from "lucide-react"
import Link from "next/link"

export default function EnterpriseInternetServices() {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "High-Speed Connectivity",
      desc: "Dedicated fiber optic connections with speeds up to 10 Gbps"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      desc: "Advanced firewall, DDoS protection, and threat monitoring"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "99.9% Uptime SLA",
      desc: "Guaranteed network reliability with service level agreements"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Support",
      desc: "Round-the-clock technical support and monitoring"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Bandwidth Management",
      desc: "Flexible bandwidth options with QoS and traffic shaping"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-City Connectivity",
      desc: "Seamless connectivity across multiple office locations"
    }
  ]

  const pricingPlans = [
    {
      name: "Business Basic",
      speed: "100 Mbps",
      price: "Rs 25,000",
      features: ["99.5% Uptime", "8x5 Support", "Basic Security", "1 Static IP", "100GB Data"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Enterprise Pro",
      speed: "1 Gbps",
      price: "Rs 75,000",
      features: ["99.9% Uptime", "24/7 Support", "Advanced Security", "5 Static IPs", "Unlimited Data", "SLA Included"],
      color: "from-red-600 to-red-500",
      popular: true
    },
    {
      name: "Enterprise Premium",
      speed: "10 Gbps",
      price: "Contact Sales",
      features: ["99.99% Uptime", "Dedicated Support", "Premium Security", "10+ Static IPs", "Custom SLA", "Network Optimization"],
      color: "from-purple-600 to-violet-500"
    }
  ]

  const useCases = [
    {
      title: "Corporate Offices",
      desc: "Reliable internet for day-to-day business operations and cloud applications"
    },
    {
      title: "Financial Institutions",
      desc: "Secure and compliant connectivity for banking and financial transactions"
    },
    {
      title: "Call Centers",
      desc: "Stable connections for uninterrupted customer service operations"
    },
    {
      title: "Manufacturing Units",
      desc: "High-bandwidth connectivity for production monitoring and automation"
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
              backgroundImage: "url('/background/enterprise-internet-bg.webp')",
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
              <span className="text-sm font-semibold text-red-100">Enterprise Connectivity</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Enterprise
              <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Internet Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Dedicated high-speed internet solutions designed for enterprise reliability, 
              security, and performance across Pakistan.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "99.9%", label: "Uptime SLA" },
                { number: "10 Gbps", label: "Maximum Speed" },
                { number: "24/7", label: "Support" },
                { number: "1000+", label: "Enterprise Clients" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-red-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-2 mb-6">
                <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                <span className="text-sm font-semibold">Overview</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Reliable Internet for
                <span className="text-red-600 block">Modern Enterprises</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sharptel's Enterprise Internet Services provide dedicated, high-speed connectivity 
                  solutions designed specifically for businesses that demand reliability, security, 
                  and optimal performance. Our fiber optic network infrastructure ensures minimal 
                  latency and maximum uptime for your critical business operations.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  With multiple Tier-1 upstream providers and redundant network paths, we guarantee 
                  uninterrupted connectivity even during peak hours. Our solutions are scalable, 
                  allowing your bandwidth to grow with your business needs.
                </p>

                <div className="space-y-4">
                  {[
                    "Dedicated bandwidth with no sharing",
                    "Advanced DDoS protection and security",
                    "24/7 network monitoring and alerts",
                    "Priority technical support",
                    "Flexible bandwidth scaling",
                    "Comprehensive SLA coverage"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700 font-medium">{item}</span>
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
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <div className="text-4xl font-bold mb-6">Network Infrastructure</div>
                <p className="text-red-100 text-lg mb-8">
                  Our state-of-the-art network ensures optimal performance for your business
                </p>
                
                <div className="space-y-6">
                  {[
                    { label: "Fiber Optic Network", value: "100%" },
                    { label: "Network Uptime", value: "99.9%" },
                    { label: "Peak Hour Performance", value: "98%" },
                    { label: "Average Latency", value: "< 10ms" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-red-200">{item.label}</span>
                      <span className="text-2xl font-bold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 shadow-2xl">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-white/90">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
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
              Key <span className="text-red-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for reliable enterprise-grade internet connectivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                  <div className="h-16 w-16 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      {/* USE CASES SECTION */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ideal For <span className="text-red-400">These</span> Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serving diverse industries with reliable internet solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-red-500/30 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="text-5xl font-bold text-gray-600 mb-2">0{index + 1}</div>
                  <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6"></div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready for Enterprise-Grade
                <span className="text-red-600 block">Internet?</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Contact our experts for a free network assessment and customized solution proposal
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/Contact-us"
                  className="px-12 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  Request Free Assessment
                </Link>
                <Link
                  href="tel:+92-311-128-4373"
                  className="px-12 py-5 border-2 border-red-600 text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all duration-300 text-lg"
                >
                  Call: +92-311-128-4373
                </Link>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-gray-500">
                  <div className="flex flex-wrap gap-8 justify-center text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      Free Initial Assessment
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      No Setup Fees
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      30-Day Money Back Guarantee
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}