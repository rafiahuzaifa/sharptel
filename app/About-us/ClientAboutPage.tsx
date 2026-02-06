"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Target, Award, Shield, Clock, Globe, Building, Phone, Mail } from "lucide-react"

export default function ClientAboutPage() {
  const leaders = [
    {
      name: "Wasim Ullah Khan",
      title: "HoD Technical Operations",
      image: "/images/leadership/wasim-ullah-khan.jpg",
      desc: "Responsible for managing network operations and service delivery with focus on excellence.",
      experience: "15+ Years",
      department: "Technical"
    },
    {
      name: "Farrukh Hussain",
      title: "HoD Commercial",
      image: "/images/leadership/farrukh-hussain.jpg",
      desc: "Drives commercial strategy, partnerships and business growth across all verticals.",
      experience: "12+ Years",
      department: "Business"
    },
    {
      name: "Ashraf Khan",
      title: "HoD Finance",
      image: "/images/leadership/ashraf-khan.jpg",
      desc: "Guides financial planning and operational budgets ensuring sustainability.",
      experience: "18+ Years",
      department: "Finance"
    },
    {
      name: "Shamim Sharafat",
      title: "HoD Credit & Collection",
      image: "/images/leadership/shamim-sharafat.jpg",
      desc: "Oversees credit workflows, client invoicing and receivables management.",
      experience: "10+ Years",
      department: "Operations"
    },
  ]

  const partners = [
    { name: "Cisco", logo: "/background/cisco.webp", category: "Networking" },
    { name: "Microsoft", logo: "/background/microsoft.webp", category: "Software" },
    { name: "Fortinet", logo: "/background/fortinet.webp", category: "Security" },
    { name: "VMware", logo: "/background/vmware.webp", category: "Virtualization" },
    { name: "HPE", logo: "/background/hpe.webp", category: "Hardware" },
    { name: "Juniper", logo: "/background/juniper.webp", category: "Networking" },
    { name: "Dell", logo: "/background/dell.webp", category: "Hardware" },
    { name: "Oracle", logo: "/background/oracle.webp", category: "Database" },
  ]

  const values = [
    { 
      title: "Innovation", 
      icon: <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
        <span className="text-2xl">🚀</span>
      </div>, 
      desc: "Adopting cutting-edge technologies for next-gen solutions.",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Integrity", 
      icon: <div className="h-12 w-12 bg-gradient-to-br from-emerald-500 to-green-400 rounded-xl flex items-center justify-center">
        <span className="text-2xl">🤝</span>
      </div>, 
      desc: "Operating with transparency and ethical principles.",
      color: "from-emerald-500 to-green-500"
    },
    { 
      title: "Excellence", 
      icon: <div className="h-12 w-12 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-xl flex items-center justify-center">
        <span className="text-2xl">⭐</span>
      </div>, 
      desc: "Delivering superior quality in every engagement.",
      color: "from-amber-500 to-yellow-500"
    },
    { 
      title: "Customer Focus", 
      icon: <div className="h-12 w-12 bg-gradient-to-br from-red-500 to-pink-400 rounded-xl flex items-center justify-center">
        <span className="text-2xl">👥</span>
      </div>, 
      desc: "Prioritizing client goals in every solution.",
      color: "from-red-500 to-pink-500"
    },
    { 
      title: "Reliability", 
      icon: <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-violet-400 rounded-xl flex items-center justify-center">
        <span className="text-2xl">⚡</span>
      </div>, 
      desc: "High uptime, stable networks, trusted services.",
      color: "from-purple-500 to-violet-500"
    },
    { 
      title: "Teamwork", 
      icon: <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-blue-400 rounded-xl flex items-center justify-center">
        <span className="text-2xl">👨‍💼</span>
      </div>, 
      desc: "Collaborating to drive success together.",
      color: "from-indigo-500 to-blue-500"
    },
  ]

  const milestones = [
    { year: "2005", title: "Founded", desc: "Started operations in Karachi" },
    { year: "2010", title: "Enterprise Expansion", desc: "Expanded to corporate clients" },
    { year: "2015", title: "National Coverage", desc: "Covered major cities nationwide" },
    { year: "2020", title: "Digital Transformation", desc: "Launched digital solutions" },
    { year: "2024", title: "Market Leader", desc: "Leading ICT provider" },
  ]

  return (
    <div className="bg-white text-gray-800">

      {/* PREMIUM HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background/connectivity.webp"
            alt="Sharptel About Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        {/* Animated Tech Pattern */}
        <div className="absolute inset-0 z-10 opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-cover"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-red-500/30">
              <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-red-100">Trusted Since 2005</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight"
            >
              Shaping The
              <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Digital Future
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            >
              Leading Pakistan's ICT revolution with innovative solutions, 
              enterprise-grade services, and trusted partnerships since 2005.
            </motion.p>

            {/* Stats Banner */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { number: "19+", label: "Years Experience", icon: <Clock className="h-5 w-5 text-red-400" /> },
                { number: "5000+", label: "Clients Served", icon: <Users className="h-5 w-5 text-red-400" /> },
                { number: "50+", label: "Cities Coverage", icon: <MapPin className="h-5 w-5 text-red-400" /> },
                { number: "99.9%", label: "Uptime SLA", icon: <Shield className="h-5 w-5 text-red-400" /> },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    {stat.icon}
                    <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                  </div>
                  <div className="text-sm font-medium text-red-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="h-10 w-10 rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
          </div>
        </motion.div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-red-500/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
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
                <span className="text-sm font-semibold">Our Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Pioneering ICT Solutions
                <span className="block text-red-600">Since 2005</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2005, Sharptel Communication Solutions began with a vision to transform enterprise 
                  connectivity in Pakistan. From our humble beginnings in Karachi, we have grown into a nationwide 
                  leader serving government organizations, multinational corporations, financial institutions, and SMEs.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our commitment to innovation, quality, and customer satisfaction has driven our evolution from a 
                  traditional telecom provider to a comprehensive ICT solutions partner. Today, we empower businesses 
                  with cutting-edge technology solutions that drive growth and digital transformation.
                </p>
              </div>

              {/* Milestones Timeline */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-8">Our Milestones</h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-red-400 to-red-300"></div>
                  <div className="space-y-8">
                    {milestones.map((milestone, idx) => (
                      <div key={idx} className="relative pl-12">
                        <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center">
                          <div className="h-2 w-2 bg-white rounded-full"></div>
                        </div>
                        <div className="text-2xl font-bold text-red-600">{milestone.year}</div>
                        <h4 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h4>
                        <p className="text-gray-600 mt-2">{milestone.desc}</p>
                      </div>
                    ))}
                  </div>
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
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/background/about.webp"
                  alt="Sharptel Headquarters"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-2xl p-6 max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-gradient-to-r from-red-600 to-red-500 rounded-xl flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">HQ Office</div>
                    <div className="text-sm text-gray-600">Karachi, Pakistan</div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Our state-of-the-art headquarters serves as the innovation hub for all our operations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
              <span className="text-sm font-semibold">Leadership Team</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-red-600">Visionaries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in every aspect of our operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {leader.experience}
                    </div>
                    
                    {/* Department Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {leader.department}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-red-600 font-semibold mb-4">{leader.title}</p>
                    <p className="text-gray-600">{leader.desc}</p>
                    
                    {/* Social Links */}
                    <div className="flex gap-3 mt-6">
                      <button className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition">
                        <span className="text-lg">👔</span>
                      </button>
                      <button className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition">
                        <span className="text-lg">💼</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-300 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Our Principles</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core Values That <span className="text-red-400">Define Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The foundation of our success and the guiding principles for everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-red-500/30 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="mb-6">
                    {v.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{v.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{v.desc}</p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className={`h-1 w-16 bg-gradient-to-r ${v.color} rounded-full`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & PARTNERS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Quality Assurance */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-2 mb-6">
                <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                <span className="text-sm font-semibold">Quality Commitment</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-8">
                Uncompromising <span className="text-red-600">Quality</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Sharptel, we adhere to international quality standards across all our solutions. 
                  From network design and implementation to ongoing support, quality assurance is 
                  integrated into every project lifecycle to ensure excellence and reliability.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {[
                    { label: "ISO 9001 Certified", value: "Quality Management" },
                    { label: "99.9% Uptime", value: "Network Reliability" },
                    { label: "24/7 Monitoring", value: "Proactive Support" },
                    { label: "SLAs", value: "Service Guarantee" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-6">
                      <div className="text-2xl font-bold text-red-600 mb-2">{item.label}</div>
                      <div className="text-gray-600">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Technology Partners */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 mb-6">
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-semibold">Strategic Partnerships</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-8">
                Global <span className="text-blue-600">Technology Partners</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-10">
                We partner with world-leading technology providers to deliver cutting-edge solutions 
                and ensure access to the latest innovations for our clients.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {partners.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-16 mb-4">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{p.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{p.category}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP & LOCATION SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
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
              <span className="text-sm font-semibold">Find Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-red-600">Presence</span> Across Pakistan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving clients nationwide with multiple offices and extensive network coverage.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {/* Interactive Map Visualization */}
                <div className="relative w-full h-full">
                  {/* Pakistan Map Outline */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-700">
                      <svg className="w-full h-full" viewBox="0 0 800 600">
                        {/* Pakistan Map */}
                        <path 
                          d="M200,200 L300,250 L400,220 L500,280 L600,230 L650,300 L550,400 L450,450 L350,400 L250,350 L200,300 Z" 
                          fill="rgba(220, 38, 38, 0.1)" 
                          stroke="rgb(220, 38, 38)" 
                          strokeWidth="2"
                        />
                        
                        {/* City Markers */}
                        <circle cx="300" cy="250" r="12" fill="rgb(220, 38, 38)" className="animate-pulse">
                          <title>Karachi HQ</title>
                        </circle>
                        <circle cx="400" cy="220" r="10" fill="rgb(239, 68, 68)" className="animate-pulse">
                          <title>Lahore</title>
                        </circle>
                        <circle cx="500" cy="280" r="10" fill="rgb(239, 68, 68)" className="animate-pulse">
                          <title>Islamabad</title>
                        </circle>
                        <circle cx="600" cy="230" r="8" fill="rgb(248, 113, 113)" className="animate-pulse">
                          <title>Faisalabad</title>
                        </circle>
                        <circle cx="550" cy="400" r="8" fill="rgb(248, 113, 113)" className="animate-pulse">
                          <title>Peshawar</title>
                        </circle>
                        <circle cx="450" cy="450" r="8" fill="rgb(248, 113, 113)" className="animate-pulse">
                          <title>Quetta</title>
                        </circle>
                        
                        {/* Network Lines */}
                        <path 
                          d="M300,250 L400,220 L500,280 L600,230 L550,400 L450,450 L350,400 L250,350" 
                          stroke="rgba(220, 38, 38, 0.3)" 
                          strokeWidth="1" 
                          strokeDasharray="5,5"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* City Labels */}
                  <div className="absolute top-1/4 left-1/4">
                    <div className="bg-white rounded-lg px-3 py-2 shadow-lg">
                      <div className="font-bold text-gray-900">Karachi</div>
                      <div className="text-xs text-gray-600">Headquarters</div>
                    </div>
                  </div>
                  <div className="absolute top-1/3 left-1/2">
                    <div className="bg-white rounded-lg px-3 py-2 shadow-lg">
                      <div className="font-bold text-gray-900">Lahore</div>
                    </div>
                  </div>
                  <div className="absolute top-2/5 right-1/3">
                    <div className="bg-white rounded-lg px-3 py-2 shadow-lg">
                      <div className="font-bold text-gray-900">Islamabad</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Legend */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-600"></div>
                    <span className="text-sm font-medium">Headquarters</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium">Regional Offices</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <span className="text-sm font-medium">Service Centers</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-6">Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">Address</div>
                      <div className="text-red-100">Plot # ABC, Street # 123, Block 4, Clifton, Karachi, Pakistan</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">Contact</div>
                      <div className="text-red-100">+92-311-1123104 / +92-311-1123105</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">Email</div>
                      <div className="text-red-100">info@sharptel.pk</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Offices */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Regional Offices</h3>
                <div className="space-y-4">
                  {[
                    { city: "Lahore", phone: "+92-311-1123104 / +92-311-1123105", address: "Main Boulevard, Gulberg" },
                    { city: "Islamabad", phone: "+92-311-1123104 / +92-311-1123105", address: "Blue Area, Sector F-7" },
                    { city: "Faisalabad", phone: "+92-311-1123104 / +92-311-1123105", address: "Jinnah Road, Civic Centre" },
                  ].map((office, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-red-50 transition">
                      <div>
                        <div className="font-bold text-gray-900">{office.city}</div>
                        <div className="text-sm text-gray-600">{office.address}</div>
                      </div>
                      <div className="text-red-600 font-semibold">{office.phone}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Partner With <span className="text-yellow-300">Pakistan's ICT Leader?</span>
            </h2>
            
            <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto">
              Join 5000+ satisfied clients who trust Sharptel for their technology needs. 
              Let's build your digital future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact-us"
                className="px-10 py-4 bg-white text-red-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get In Touch
              </Link>
              <Link
                href="/services"
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Explore Services
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-red-500/30">
              <div className="text-red-200">
                <div className="flex flex-wrap gap-8 justify-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                    19+ Years Experience
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                    24/7 Technical Support
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                    Nationwide Coverage
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}