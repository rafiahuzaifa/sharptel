"use client"

import { motion } from "framer-motion"
import { Rocket, Figma, Code, Zap, Users, CheckCircle, TestTube, Smartphone } from "lucide-react"
import Link from "next/link"

export default function PrototypeDevelopment() {
  const prototypes = [
    {
      type: "Wireframe Prototypes",
      desc: "Basic layout and structure visualization",
      features: ["Low Fidelity", "Quick Iterations", "Layout Planning"],
      icon: "📐"
    },
    {
      type: "Interactive Prototypes",
      desc: "Clickable prototypes with user flows",
      features: ["User Testing", "Flow Validation", "Interactive Elements"],
      icon: "🎮"
    },
    {
      type: "High-Fidelity Prototypes",
      desc: "Pixel-perfect designs with animations",
      features: ["Visual Design", "Animations", "Device Testing"],
      icon: "🎨"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Concept Ideation",
      desc: "Brainstorming and requirement gathering"
    },
    {
      step: "2",
      title: "Wireframing",
      desc: "Creating basic structure and layout"
    },
    {
      step: "3",
      title: "Interactive Prototype",
      desc: "Adding interactions and user flows"
    },
    {
      step: "4",
      title: "User Testing",
      desc: "Testing and gathering feedback"
    },
    {
      step: "5",
      title: "Refinement",
      desc: "Iterating based on feedback"
    },
    {
      step: "6",
      title: "Handoff",
      desc: "Ready for development"
    }
  ]

  const tools = [
    {
      name: "Figma",
      desc: "Collaborative interface design tool",
      icon: "🎯"
    },
    {
      name: "Adobe XD",
      desc: "UX/UI design and prototyping",
      icon: "✏️"
    },
    {
      name: "InVision",
      desc: "Digital product design platform",
      icon: "✨"
    },
    {
      name: "Sketch",
      desc: "Vector-based design tool",
      icon: "📱"
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
              backgroundImage: "url('/background/prototype-bg.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-pink-800/60 to-pink-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600/20 to-pink-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-pink-500/30">
              <div className="h-3 w-3 bg-pink-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-pink-100">Rapid Prototyping</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Prototype
              <span className="block bg-gradient-to-r from-pink-500 via-rose-400 to-red-500 bg-clip-text text-transparent">
                Development
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Transform your ideas into interactive prototypes. Test, validate, 
              and refine your concepts before full-scale development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "7-14 Days", label: "Prototype Delivery" },
                { number: "50+", label: "Prototypes Delivered" },
                { number: "90%", label: "Success Rate" },
                { number: "Iterative", label: "Approach" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-pink-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROTOTYPE TYPES SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-pink-600 rounded-full"></div>
              <span className="text-sm font-semibold">Prototype Types</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From <span className="text-pink-600">Concept</span> to Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different levels of prototyping for various stages of your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {prototypes.map((prototype, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="text-5xl mb-6">{prototype.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{prototype.type}</h3>
                  <p className="text-gray-600 mb-6">{prototype.desc}</p>
                  
                  <div className="space-y-3">
                    {prototype.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-pink-500"></div>
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

      {/* PROCESS SECTION */}
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
              Our <span className="text-pink-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured approach to prototype development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full relative">
                  <div className="absolute -top-4 -left-4 h-12 w-12 bg-pink-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
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
              Industry <span className="text-pink-600">Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading tools for prototype development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 text-center">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.name}</h3>
                  <p className="text-gray-600">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-pink-700 to-rose-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Test Your <span className="text-yellow-300">Idea</span> First
            </h2>
            
            <p className="text-xl text-pink-100 mb-12 max-w-3xl mx-auto">
              Validate your concept with a prototype before investing in full development. 
              Save time and resources with our rapid prototyping services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-5 bg-white text-pink-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Start Prototyping
              </Link>
              <Link
                href="/portfolio"
                className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                View Prototypes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}