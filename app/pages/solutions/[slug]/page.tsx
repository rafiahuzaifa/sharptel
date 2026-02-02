'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Shield, Server, Wifi, Cpu, Phone, ArrowLeft, CheckCircle, Users, Building, Zap, Clock, ShieldCheck, Target, BarChart3, Headphones, FileText, Globe, Lock, Database, Radio } from 'lucide-react'

interface Solution {
  title: string
  keypoints: string[]
  description: string
  image: string
  benefits: string[]
  useCases: string[]
  technologies: string[]
  icon: React.ComponentType<any>
  industries: string[]
  features: { title: string; description: string; icon: React.ComponentType<any> }[]
  stats: { label: string; value: string; icon: React.ComponentType<any> }[]
}

// Icon mapping
const icons: Record<string, React.ComponentType<any>> = {
  "cyber-security": Shield,
  "data-center": Server,
  "wi-fi-hotspot": Wifi,
  "iot-automation": Cpu,
  "voip-solutions": Phone
}

// Feature icons for each solution
const featureIcons = {
  "cyber-security": [ShieldCheck, Lock, Globe],
  "data-center": [Database, Server, Radio],
  "wi-fi-hotspot": [Wifi, Globe, Radio],
  "iot-automation": [Cpu, BarChart3, Target],
  "voip-solutions": [Phone, Headphones, FileText]
}

// Detailed content for each solution
const solutionContent: Record<string, Solution> = {
  "cyber-security": {
    title: "Cyber Security Solutions",
    keypoints: ["UTM Firewalls", "Network Security", "Email Security", "Web Filtering"],
    description: "Complete enterprise cybersecurity protection with advanced threat detection and prevention systems to safeguard your business assets.",
    image: "/images/solutions/cyber-security.jpg",
    benefits: [
      "Protection against cyber threats",
      "Compliance with regulations",
      "Real-time threat monitoring",
      "Business continuity assurance"
    ],
    useCases: [
      "Banking & Financial Security",
      "Enterprise Network Protection",
      "Government Security",
      "Data Privacy Compliance"
    ],
    technologies: ["Cisco Firepower", "Fortinet UTM", "Palo Alto", "Sophos"],
    icon: Shield,
    industries: ["Banking", "Government", "Healthcare", "Corporate"],
    features: [
      {
        title: "Advanced Firewall",
        description: "Next-generation firewall with intrusion prevention",
        icon: ShieldCheck
      },
      {
        title: "Data Encryption",
        description: "End-to-end encryption for sensitive data",
        icon: Lock
      },
      {
        title: "Threat Intelligence",
        description: "Real-time threat detection and response",
        icon: Globe
      }
    ],
    stats: [
      {
        label: "Threat Detection",
        value: "99.9%",
        icon: ShieldCheck
      },
      {
        label: "Response Time",
        value: "< 2min",
        icon: Clock
      },
      {
        label: "Uptime",
        value: "99.99%",
        icon: Zap
      }
    ]
  },
  "data-center": {
    title: "Data Center & Colocation",
    keypoints: ["Server Hosting", "Storage Solutions", "Backup & Recovery", "High Availability"],
    description: "Reliable and secure data center services with maximum uptime and professional support for your critical infrastructure.",
    image: "/images/solutions/data-center.jpg",
    benefits: [
      "High availability infrastructure",
      "Secure data storage",
      "Disaster recovery",
      "Scalable solutions"
    ],
    useCases: [
      "Enterprise Server Hosting",
      "Disaster Recovery",
      "Cloud Infrastructure",
      "Managed Services"
    ],
    technologies: ["VMware", "Cisco UCS", "HPE", "Dell EMC"],
    icon: Server,
    industries: ["IT Services", "Finance", "Healthcare", "Education"],
    features: [
      {
        title: "Tier III Design",
        description: "Redundant power and cooling systems",
        icon: Database
      },
      {
        title: "24/7 Monitoring",
        description: "Round-the-clock infrastructure monitoring",
        icon: Server
      },
      {
        title: "Carrier Neutral",
        description: "Multiple ISP connectivity options",
        icon: Radio
      }
    ],
    stats: [
      {
        label: "Uptime SLA",
        value: "99.99%",
        icon: Zap
      },
      {
        label: "Power Redundancy",
        value: "N+1",
        icon: Server
      },
      {
        label: "Security Levels",
        value: "3-Tier",
        icon: Shield
      }
    ]
  },
  "wi-fi-hotspot": {
    title: "Wi-Fi & Hotspot Solutions",
    keypoints: ["Enterprise Wi-Fi", "Mesh Networks", "Guest Management", "Central Control"],
    description: "High-performance wireless networks for businesses with secure access and centralized management capabilities.",
    image: "/images/solutions/wi-fi-hotspot.jpg",
    benefits: [
      "Seamless connectivity",
      "Secure access control",
      "Central management",
      "Scalable deployment"
    ],
    useCases: [
      "Corporate Offices",
      "Shopping Malls",
      "Hotels",
      "Educational Campuses"
    ],
    technologies: ["Cisco Meraki", "Aruba", "Ruckus", "Ubiquiti"],
    icon: Wifi,
    industries: ["Hospitality", "Retail", "Education", "Corporate"],
    features: [
      {
        title: "High Density",
        description: "Support for multiple concurrent users",
        icon: Wifi
      },
      {
        title: "Guest Portal",
        description: "Customizable guest access portal",
        icon: Globe
      },
      {
        title: "Mesh Networking",
        description: "Seamless coverage across large areas",
        icon: Radio
      }
    ],
    stats: [
      {
        label: "Max Speed",
        value: "1.7Gbps",
        icon: Zap
      },
      {
        label: "User Capacity",
        value: "500+",
        icon: Users
      },
      {
        label: "Coverage",
        value: "10K sq.ft",
        icon: Target
      }
    ]
  },
  "iot-automation": {
    title: "IoT & Automation",
    keypoints: ["Smart Sensors", "Building Automation", "Remote Monitoring", "Energy Management"],
    description: "Intelligent automation solutions for smart buildings and industrial applications with real-time monitoring capabilities.",
    image: "/images/solutions/iot-automation.jpg",
    benefits: [
      "Energy efficiency",
      "Remote monitoring",
      "Predictive maintenance",
      "Process automation"
    ],
    useCases: [
      "Smart Buildings",
      "Industrial Automation",
      "Energy Management",
      "Asset Tracking"
    ],
    technologies: ["Siemens", "Schneider", "Honeywell", "IoT Sensors"],
    icon: Cpu,
    industries: ["Manufacturing", "Real Estate", "Healthcare", "Agriculture"],
    features: [
      {
        title: "Smart Sensors",
        description: "Real-time environmental monitoring",
        icon: Cpu
      },
      {
        title: "Energy Analytics",
        description: "Detailed energy consumption reports",
        icon: BarChart3
      },
      {
        title: "Predictive Alerts",
        description: "Early warning for maintenance needs",
        icon: Target
      }
    ],
    stats: [
      {
        label: "Energy Saving",
        value: "Up to 40%",
        icon: Zap
      },
      {
        label: "ROI Period",
        value: "< 2 Years",
        icon: BarChart3
      },
      {
        label: "Monitoring",
        value: "24/7",
        icon: Clock
      }
    ]
  },
  "voip-solutions": {
    title: "Voice Over IP (VoIP)",
    keypoints: ["IP Phones", "PBX Systems", "Call Center", "Unified Comms"],
    description: "Reliable voice communication systems with advanced features for modern business requirements.",
    image: "/images/solutions/voip-solutions.jpg",
    benefits: [
      "Cost effective",
      "Scalable systems",
      "Unified communications",
      "High quality audio"
    ],
    useCases: [
      "Corporate Telephony",
      "Call Centers",
      "Remote Workforce",
      "Multi-site Business"
    ],
    technologies: ["Cisco", "Avaya", "3CX", "Grandstream"],
    icon: Phone,
    industries: ["Call Centers", "Healthcare", "Education", "Corporate"],
    features: [
      {
        title: "Crystal Clear Audio",
        description: "HD voice quality for clear conversations",
        icon: Phone
      },
      {
        title: "Call Center Features",
        description: "IVR, ACD, and call analytics",
        icon: Headphones
      },
      {
        title: "Call Recording",
        description: "Secure call recording and storage",
        icon: FileText
      }
    ],
    stats: [
      {
        label: "Cost Saving",
        value: "Up to 50%",
        icon: BarChart3
      },
      {
        label: "Call Quality",
        value: "HD Voice",
        icon: Phone
      },
      {
        label: "Uptime",
        value: "99.999%",
        icon: Zap
      }
    ]
  }
}

export default function SolutionDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const solution = slug ? solutionContent[slug] : null

  if (!solution) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solution Not Found</h2>
          <p className="text-gray-600 mb-8">The solution you're looking for doesn't exist.</p>
          <Link 
            href="/pages/solutions" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Solutions
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = solution.icon

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px'
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-white/80 hover:text-white">Home</Link>
                </li>
                <li className="text-white/60">/</li>
                <li>
                  <Link href="/pages/solutions" className="text-white/80 hover:text-white">Solutions</Link>
                </li>
                <li className="text-white/60">/</li>
                <li className="text-white font-semibold">{solution.title}</li>
              </ol>
            </nav>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm font-medium">Enterprise Solution</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {solution.title}
                </h1>
                
                <p className="text-xl text-white/90 max-w-3xl mb-8">
                  {solution.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="px-8 py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    href="#features"
                    className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
                  >
                    View Features
                  </Link>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {solution.stats.map((stat, index) => {
                  const StatIcon = stat.icon
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <StatIcon className="h-5 w-5 text-white" />
                        <div className="text-2xl font-bold">{stat.value}</div>
                      </div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Features */}
            <div className="lg:col-span-2 space-y-8">
              {/* Key Points */}
              <div id="features" className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Zap className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {solution.keypoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{point}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Features */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Detailed Features</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {solution.features.map((feature, index) => {
                    const FeatureIcon = feature.icon
                    return (
                      <div key={index} className="p-6 border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-red-50 rounded-lg">
                            <FeatureIcon className="h-5 w-5 text-red-600" />
                          </div>
                          <h3 className="font-bold text-gray-900">{feature.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Business Benefits</h2>
                </div>
                
                <div className="space-y-4">
                  {solution.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-white border border-red-100 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="text-gray-800">{benefit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Quick Info Card */}
              <div className="bg-gradient-to-br from-red-700 to-red-800 rounded-xl shadow-lg p-6 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Quick Overview</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-white/90">Implementation Time</span>
                    <span className="font-semibold">2-4 Weeks</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-white/90">Support Level</span>
                    <span className="font-semibold">24/7 Premium</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-white/90">SLA Guarantee</span>
                    <span className="font-semibold">99.9%</span>
                  </div>
                </div>
                
                <Link
                  href="/contact-us"
                  className="block w-full text-center py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition-colors mb-3"
                >
                  Request Quote
                </Link>
                
                <Link
                  href="/solutions"
                  className="block w-full text-center py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
                >
                  Compare Solutions
                </Link>
              </div>

              {/* Use Cases */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Building className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Use Cases</h3>
                </div>
                
                <div className="space-y-3">
                  {solution.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Server className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Technologies</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {solution.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Headphones className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Support & Service</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Technical Support</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">24/7</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">On-site Support</span>
                    <span className="text-sm font-medium text-red-600">Available</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Remote Monitoring</span>
                    <span className="text-sm font-medium text-red-600">Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <div className="h-1 w-24 bg-red-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {solution.industries.map((industry, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-red-300 hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-900">{industry}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Contact our experts for a personalized solution tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="px-8 py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:+925111174747"
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Call: +92 51 111 747 747
              </a>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to All Solutions
              </Link>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Share this solution:</span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                    <span className="font-semibold">f</span>
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                    <span className="font-semibold">in</span>
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                    <span className="font-semibold">t</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}