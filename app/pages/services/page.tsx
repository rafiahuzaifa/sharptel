'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Server, 
  Network, 
  Video, 
  Shield, 
  Phone, 
  ChevronRight, 
  Zap, 
  Users, 
  Clock,
  CheckCircle,
  Headphones,
  Cloud,
  Wifi,
  Database,
  Lock,
  BarChart3,
  MessageSquare
} from 'lucide-react'

const services = [
  {
    title: 'Enterprise Internet',
    description: 'High-speed dedicated internet connectivity with SLA guarantees for businesses requiring reliable and secure internet access.',
    features: ['Dedicated Bandwidth', '99.9% Uptime SLA', '24/7 Support', 'Enterprise Security'],
    href: '/pages/services/enterprise-internet',
    icon: Globe,
    color: 'bg-gradient-to-br from-red-700 to-red-800',
    benefits: ['Increased Productivity', 'Better Customer Experience', 'Secure Connectivity', 'Cost Effective'],
    industries: ['Corporate Offices', 'Banks', 'Educational Institutes', 'Healthcare']
  },
  {
    title: 'Internet Data Center (IDC)',
    description: 'Secure and reliable data center services with complete infrastructure for hosting critical business applications.',
    features: ['Tier III Design', 'Redundant Power', 'Physical Security', 'Climate Control'],
    href: '/pages/services/internet-data-center',
    icon: Server,
    color: 'bg-gradient-to-br from-red-700 to-red-800',
    benefits: ['High Availability', 'Data Security', 'Scalability', 'Expert Support'],
    industries: ['IT Companies', 'E-commerce', 'Financial Services', 'Government']
  },
  {
    title: 'Leased Line',
    description: 'Point-to-point dedicated connectivity solutions for mission-critical applications requiring guaranteed bandwidth.',
    features: ['Dedicated Circuit', 'Low Latency', 'High Security', 'Scalable Bandwidth'],
    href: '/pages/services/leased-line',
    icon: Network,
    color: 'bg-gradient-to-br from-red-700 to-red-800',
    benefits: ['Guaranteed Bandwidth', 'Secure Connection', 'Low Latency', '24/7 Monitoring'],
    industries: ['Banks', 'Call Centers', 'Manufacturing', 'Corporate Offices']
  },
  {
    title: 'Audio Video Conferencing',
    description: 'Complete conferencing solutions enabling seamless communication and collaboration across locations.',
    features: ['HD Video Quality', 'Crystal Clear Audio', 'Screen Sharing', 'Recording'],
    href: '/pages/services/audio-video-conferencing',
    icon: Video,
    color: 'bg-gradient-to-br from-red-700 to-red-800',
    benefits: ['Cost Savings', 'Increased Productivity', 'Better Collaboration', 'Flexible Meetings'],
    industries: ['Corporate', 'Education', 'Healthcare', 'Government']
  },
  {
    title: 'Data Security & Business Continuity',
    description: 'Comprehensive security solutions protecting your data and ensuring business continuity during disruptions.',
    features: ['Firewall Protection', 'VPN Solutions', 'Backup Systems', 'DR Planning'],
    href: '/pages/services/data-security',
    icon: Shield,
    color: 'bg-gradient-to-br from-red-700 to-red-800',
    benefits: ['Data Protection', 'Regulatory Compliance', 'Business Continuity', 'Peace of Mind'],
    industries: ['Banks', 'Healthcare', 'Corporate', 'Government']
  },
  {
    title: 'Call Center Solution',
    description: 'Complete call center setup with advanced features, analytics, and integration capabilities.',
    features: ['IVR System', 'CRM Integration', 'Call Recording', 'Real-time Analytics'],
    href: '/pages/services/call-center-solution',
    icon: Phone,
    color: 'bg-gradient-to-br from-red-700 to-red-800',
    benefits: ['Improved Customer Service', 'Increased Efficiency', 'Better Analytics', 'Cost Effective'],
    industries: ['Customer Support', 'Sales Centers', 'Telemarketing', 'Help Desks']
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px'
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Breadcrumb */}
              <nav className="mb-8 flex justify-center">
                <ol className="flex items-center space-x-2 text-sm">
                  <li>
                    <Link href="/" className="text-white/80 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="text-white/60">/</li>
                  <li className="text-white font-semibold">Services</li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Our Professional Services
              </h1>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Comprehensive ICT services designed to empower your business with reliable, secure, 
                and innovative technology solutions.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-white/80">Enterprise Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-white/80">Technical Support</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-white/80">Service Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive ICT Services
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                We deliver end-to-end ICT services that drive business growth, enhance security, 
                and ensure operational excellence across all industries.
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link href={service.href}>
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                      {/* Icon Header */}
                      <div className={`${service.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                        </div>
                        <div className="relative">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <Icon className="h-10 w-10 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <Icon className="h-5 w-5 text-red-600" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-5 h-5 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                                  <CheckCircle className="h-3 w-3 text-red-600" />
                                </div>
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Benefits & Industries */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="text-xs font-semibold text-gray-500 mb-2">BENEFITS</h4>
                            <div className="space-y-1">
                              {service.benefits.slice(0, 2).map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-1">
                                  <Zap className="h-3 w-3 text-red-500" />
                                  <span className="text-xs text-gray-600">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-gray-500 mb-2">INDUSTRIES</h4>
                            <div className="space-y-1">
                              {service.industries.slice(0, 2).map((industry, idx) => (
                                <div key={idx} className="flex items-center gap-1">
                                  <Users className="h-3 w-3 text-red-500" />
                                  <span className="text-xs text-gray-600">{industry}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                          <span className="text-red-600 font-semibold group-hover:text-red-700 transition-colors flex items-center gap-2 text-sm">
                            Explore Service
                            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                          <div className="text-xs text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                            Enterprise Grade
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Service Process */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-red-50 to-white border border-red-100 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Service Delivery Process
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We follow a systematic approach to ensure successful implementation and optimal results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Consultation',
                    description: 'Understand your business requirements and challenges',
                    icon: Headphones
                  },
                  {
                    step: '02',
                    title: 'Planning',
                    description: 'Design customized solution architecture',
                    icon: BarChart3
                  },
                  {
                    step: '03',
                    title: 'Implementation',
                    description: 'Deploy and configure the solution',
                    icon: Cloud
                  },
                  {
                    step: '04',
                    title: 'Support',
                    description: 'Ongoing maintenance and optimization',
                    icon: Shield
                  }
                ].map((process, index) => {
                  const ProcessIcon = process.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="relative inline-block mb-6">
                        <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center relative">
                          <ProcessIcon className="h-8 w-8 text-red-600" />
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {process.step}
                          </div>
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{process.title}</h4>
                      <p className="text-sm text-gray-600">{process.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Sharptel Services?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Expert Team',
                      description: 'Certified professionals with extensive industry experience',
                      icon: Users
                    },
                    {
                      title: '24/7 Support',
                      description: 'Round-the-clock technical support and monitoring',
                      icon: Clock
                    },
                    {
                      title: 'SLA Guarantee',
                      description: 'Service Level Agreements ensuring reliability',
                      icon: Shield
                    },
                    {
                      title: 'Custom Solutions',
                      description: 'Tailored solutions for unique business needs',
                      icon: Database
                    }
                  ].map((item, index) => {
                    const ItemIcon = item.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                          <ItemIcon className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Custom Solution Consultation
                </h3>
                <p className="text-gray-600 mb-6">
                  Our experts can design a tailored solution specifically for your business requirements. 
                  Get a free consultation today.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/contact-us"
                    className="block w-full py-3 bg-red-600 text-white text-center font-bold rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Request Free Consultation
                  </Link>
                  <a
                    href="tel:+925111174747"
                    className="block w-full py-3 border-2 border-red-600 text-red-600 text-center font-bold rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Call: +92 51 111 747 747
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Additional Professional Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Beyond our core offerings, we provide specialized services to meet diverse business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Network Design',
                  description: 'Custom network architecture planning',
                  icon: Network
                },
                {
                  title: 'Wireless Solutions',
                  description: 'Enterprise Wi-Fi and hotspot setups',
                  icon: Wifi
                },
                {
                  title: 'Cloud Services',
                  description: 'Cloud migration and management',
                  icon: Cloud
                },
                {
                  title: 'Consulting',
                  description: 'IT strategy and planning services',
                  icon: MessageSquare
                }
              ].map((service, index) => {
                const ServiceIcon = service.icon
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-300 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                      <ServiceIcon className="h-6 w-6 text-red-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-8 md:p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Connect with our service experts to discuss how we can help you achieve your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="px-8 py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Get Started Today
                </Link>
                <a
                  href="tel:+925111174747"
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Call Now: +92 51 111 747 747
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}