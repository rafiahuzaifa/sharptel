// app/services/call-center-solution/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Headphones, 
  Users, 
  CheckCircle, 
  ChevronLeft,
  ArrowRight,
  BarChart3,
  MessageSquare,
  Zap,
  Shield,
  Clock,
  FileText,
  Settings,
  Mic,
  Cloud,
  Globe,
  Database,
  Server
} from 'lucide-react'

export default function CallCenterSolutionPage() {
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
                <li className="text-white font-semibold">Call Center Solution</li>
              </ol>
            </nav>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-medium">Customer Engagement</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Call Center Solutions
                </h1>
                
                <p className="text-xl text-white/90 max-w-3xl">
                  Complete call center setup with advanced features, analytics, and 
                  integration capabilities for superior customer service and sales operations.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm text-white/80">System Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">&lt; 10sec</div>
                  <div className="text-sm text-white/80">Answer Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Operations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-white/80">Integrations</div>
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
                    <Headphones className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Service Overview</h2>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Sharptel provides complete call center solutions that transform your 
                    customer service and sales operations. Our solutions are designed to 
                    improve efficiency, enhance customer experience, and provide valuable 
                    insights through advanced analytics.
                  </p>
                  <p>
                    From inbound customer support to outbound telemarketing, our call center 
                    solutions are scalable, feature-rich, and integrate seamlessly with your 
                    existing business systems. We offer both on-premise and cloud-based 
                    solutions to meet your specific requirements.
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
                      icon: MessageSquare,
                      title: "Interactive Voice Response (IVR)",
                      description: "Multi-level IVR with custom greetings and routing"
                    },
                    {
                      icon: Users,
                      title: "Automatic Call Distribution",
                      description: "Intelligent call routing based on skills and availability"
                    },
                    {
                      icon: BarChart3,
                      title: "Real-time Analytics",
                      description: "Live dashboards and performance metrics"
                    },
                    {
                      icon: Cloud,
                      title: "Call Recording",
                      description: "Automated call recording and storage"
                    },
                    {
                      icon: Database,
                      title: "CRM Integration",
                      description: "Seamless integration with popular CRM systems"
                    },
                    {
                      icon: Shield,
                      title: "Security & Compliance",
                      description: "PCI-DSS compliance and data security"
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
                      title: "Inbound Call Center",
                      features: [
                        "Customer support and helpdesk",
                        "Order processing",
                        "Technical support",
                        "Complaint management"
                      ]
                    },
                    {
                      title: "Outbound Call Center",
                      features: [
                        "Telemarketing and sales",
                        "Customer surveys",
                        "Appointment scheduling",
                        "Collections"
                      ]
                    },
                    {
                      title: "Blended Operations",
                      features: [
                        "Mixed inbound and outbound",
                        "Agent flexibility",
                        "Dynamic call allocation",
                        "Skill-based routing"
                      ]
                    },
                    {
                      title: "Omnichannel Contact Center",
                      features: [
                        "Voice, email, chat, social media",
                        "Unified agent desktop",
                        "Customer journey tracking",
                        "Channel integration"
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
                  <Phone className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Quick Overview</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-white/90">Max Agents</span>
                    <span className="font-semibold">Unlimited</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-white/90">Answer Time</span>
                    <span className="font-semibold">&lt; 10 seconds</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-white/90">Deployment</span>
                    <span className="font-semibold">On-premise/Cloud</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-white/90">Support</span>
                    <span className="font-semibold">24/7 Technical</span>
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
                    "Customer Support Centers",
                    "Sales & Telemarketing",
                    "Help Desk Operations",
                    "Banking & Finance",
                    "Healthcare Services",
                    "E-commerce Support",
                    "Travel & Hospitality",
                    "Utility Companies"
                  ].map((industry, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{industry}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Integrations */}
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
                  <h3 className="text-xl font-bold text-gray-900">Integrations</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Salesforce CRM",
                    "Zoho CRM",
                    "Microsoft Dynamics",
                    "HubSpot",
                    "Zendesk",
                    "Freshdesk",
                    "ERP Systems",
                    "Custom APIs"
                  ].map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{integration}</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Resources */}
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
                    <span className="text-gray-700">Solution Brochure</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Case Studies</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">Pricing Calculator</span>
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
                Transform Your Customer Service
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Enhance your customer engagement with our advanced call center solutions. 
                Get a free consultation and demo.
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
                Need custom call center solutions? <Link href="/contact-us" className="text-red-600 font-medium hover:text-red-700">Contact our experts</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}