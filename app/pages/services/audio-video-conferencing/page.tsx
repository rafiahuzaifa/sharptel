// app/services/audio-video-conferencing/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Video, 
  Mic, 
  Users, 
  CheckCircle, 
  ChevronLeft,
  ArrowRight,
  Share2,
  Monitor,
  Headphones,
  FileText,
  Zap,
  Shield,
  Clock,
  MessageSquare,
  Calendar,
  Globe,
  Settings,
  Phone,
  Cloud
} from 'lucide-react'

export default function AudioVideoConferencingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px'
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm">
                <li><Link href="/" className="text-white/80 hover:text-white">Home</Link></li>
                <li className="text-white/60">/</li>
                <li><Link href="/services" className="text-white/80 hover:text-white">Services</Link></li>
                <li className="text-white/60">/</li>
                <li className="text-white font-semibold">Audio Video Conferencing</li>
              </ol>
            </nav>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                  <Video className="h-4 w-4" />
                  <span className="text-sm font-medium">Unified Communications</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Audio Video Conferencing Solutions
                </h1>
                
                <p className="text-xl text-white/90 max-w-3xl">
                  Professional conferencing solutions enabling seamless communication, 
                  collaboration, and productivity across locations with HD quality.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">HD 1080p</div>
                  <div className="text-sm text-white/80">Video Quality</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-white/80">Participants</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm text-white/80">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Video className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Service Overview</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Sharptel provides comprehensive audio-video conferencing solutions that 
                    enable businesses to connect, collaborate, and communicate effectively 
                    across multiple locations. Our solutions offer crystal-clear audio and 
                    high-definition video quality for productive virtual meetings.
                  </p>
                  <p>
                    From small team meetings to large-scale webinars and virtual events, 
                    our conferencing solutions are scalable, secure, and easy to use. 
                    We support hybrid work environments with seamless integration across 
                    devices and platforms.
                  </p>
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Zap className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Monitor,
                      title: "HD Video Conferencing",
                      description: "1080p HD video quality with noise cancellation"
                    },
                    {
                      icon: Mic,
                      title: "Crystal Clear Audio",
                      description: "Advanced audio processing for clear conversations"
                    },
                    {
                      icon: Share2,
                      title: "Screen Sharing",
                      description: "Real-time screen and application sharing"
                    },
                    {
                      icon: MessageSquare,
                      title: "Chat & Collaboration",
                      description: "Integrated chat, file sharing, and whiteboarding"
                    },
                    {
                      icon: Calendar,
                      title: "Meeting Scheduling",
                      description: "Calendar integration and automated scheduling"
                    },
                    {
                      icon: Shield,
                      title: "Enterprise Security",
                      description: "End-to-end encryption and secure access controls"
                    }
                  ].map((feature, index) => {
                    const FeatureIcon = feature.icon
                    return (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <FeatureIcon className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Settings className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Solution Options</h2>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: "Boardroom Solutions",
                      features: [
                        "Large conference room setups",
                        "Professional audio systems",
                        "Multiple camera angles",
                        "Wireless presentation"
                      ]
                    },
                    {
                      title: "Huddle Rooms",
                      features: [
                        "Small meeting room solutions",
                        "All-in-one video bars",
                        "Wireless connectivity",
                        "Touch screen controls"
                      ]
                    },
                    {
                      title: "Remote Work Solutions",
                      features: [
                        "Personal video devices",
                        "Noise-cancelling headsets",
                        "Webcam and microphone kits",
                        "Home office setups"
                      ]
                    },
                    {
                      title: "Webinar & Events",
                      features: [
                        "Large audience support",
                        "Moderator controls",
                        "Polling and Q&A",
                        "Recording and streaming"
                      ]
                    }
                  ].map((option, index) => (
                    <div key={index} className="p-6 border border-gray-200 rounded-xl hover:border-red-300 transition-colors">
                      <h3 className="font-bold text-gray-900 mb-4">{option.title}</h3>
                      <div className="space-y-2">
                        {option.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-6 text-white"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Video className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Quick Overview</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-white/90">Max Participants</span>
                    <span className="font-semibold">500+</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-white/90">Video Quality</span>
                    <span className="font-semibold">HD 1080p</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-white/90">Platform Support</span>
                    <span className="font-semibold">All Devices</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-white/90">Setup Time</span>
                    <span className="font-semibold">1-3 Days</span>
                  </div>
                </div>
                <Link
                  href="/contact-us"
                  className="block w-full text-center py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request Demo
                </Link>
              </motion.div>

              {/* Ideal For */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Users className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Ideal For</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Corporate Board Meetings",
                    "Remote Team Collaboration",
                    "Client Presentations",
                    "Training & Workshops",
                    "Webinars & Virtual Events",
                    "Healthcare Consultations",
                    "Educational Institutions",
                    "Government Meetings"
                  ].map((industry, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{industry}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Brands */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Globe className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Supported Platforms</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Cisco Webex",
                    "Microsoft Teams",
                    "Zoom Meetings",
                    "Google Meet",
                    "Poly Studio",
                    "Logitech",
                    "Avaya Spaces",
                    "Custom Solutions"
                  ].map((brand, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{brand}</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Documentation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <FileText className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Resources</h3>
                </div>
                <div className="space-y-3">
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Solution Catalog</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Pricing Packages</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">User Guides</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">
                Enhance Your Communication
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Transform your meetings with professional audio-video conferencing solutions. 
                Get a free demo and consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="px-8 py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Request Free Demo
                </Link>
                <a
                  href="tel:+925111174747"
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Call: +92 51 111 747 747
                </a>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/pages/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                <ChevronLeft className="h-5 w-5" />
                Back to All Services
              </Link>
              <div className="text-sm text-gray-600">
                Need custom conferencing solutions? <Link href="/contact-us" className="text-red-600 font-medium hover:text-red-700">Contact our experts</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}