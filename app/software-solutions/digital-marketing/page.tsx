"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, Mail, Search, Share2, BarChart, CheckCircle, Globe } from "lucide-react"
import Link from "next/link"

export default function DigitalMarketingSolutions() {
  const services = [
    {
      title: "SEO Services",
      desc: "Improve your website's visibility in search engines",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
      icon: "🔍"
    },
    {
      title: "Social Media Marketing",
      desc: "Engage your audience across social platforms",
      features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics"],
      icon: "📱"
    },
    {
      title: "Email Marketing",
      desc: "Nurture leads and engage customers through email",
      features: ["Campaign Strategy", "Template Design", "Automation", "Performance Tracking"],
      icon: "✉️"
    }
  ]

  const strategies = [
    {
      title: "Content Marketing",
      desc: "Create valuable content to attract and retain customers",
      icon: "📝"
    },
    {
      title: "PPC Advertising",
      desc: "Targeted advertising for immediate results",
      icon: "🎯"
    },
    {
      title: "Analytics & Reporting",
      desc: "Data-driven insights to optimize campaigns",
      icon: "📊"
    },
    {
      title: "Conversion Optimization",
      desc: "Improve website conversion rates",
      icon: "📈"
    }
  ]

  const metrics = [
    {
      metric: "Increase in",
      value: "Website Traffic",
      percentage: "200%"
    },
    {
      metric: "Improvement in",
      value: "Search Rankings",
      percentage: "300%"
    },
    {
      metric: "Growth in",
      value: "Social Engagement",
      percentage: "150%"
    },
    {
      metric: "Boost in",
      value: "Lead Generation",
      percentage: "250%"
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
              backgroundImage: "url('/background/marketing-bg.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-indigo-800/60 to-indigo-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/20 to-indigo-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-indigo-500/30">
              <div className="h-3 w-3 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-indigo-100">Digital Growth</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Digital Marketing
              <span className="block bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Data-driven digital marketing strategies to grow your business 
              and increase online visibility across Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "300%", label: "ROI Average" },
                { number: "500+", label: "Campaigns" },
                { number: "24/7", label: "Monitoring" },
                { number: "Data-Driven", label: "Strategies" },
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
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
              <span className="text-sm font-semibold">Core Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Marketing <span className="text-indigo-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-indigo-500" />
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

      {/* STRATEGIES SECTION */}
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
              Advanced <span className="text-indigo-600">Strategies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge marketing strategies for maximum impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="text-4xl mb-4">{strategy.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
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
              Proven <span className="text-indigo-600">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data-driven approach delivers measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="text-5xl font-bold text-indigo-600 mb-2">{metric.percentage}</div>
                  <div className="text-sm text-gray-500 mb-2">{metric.metric}</div>
                  <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-indigo-700 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Grow Your <span className="text-yellow-300">Business</span> Online
            </h2>
            
            <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto">
              Let us help you reach more customers and increase sales with 
              data-driven digital marketing strategies tailored for Pakistan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Marketing Audit
              </Link>
              <Link
                href="/case-studies"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}