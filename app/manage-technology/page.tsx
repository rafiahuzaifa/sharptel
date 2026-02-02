import Link from 'next/link'

const managedServices = [
  {
    id: 1,
    title: "Managed IT Services",
    description: "Comprehensive IT management including help desk, server management, and desktop support.",
    features: [
      "24/7 Help Desk",
      "Server Management", 
      "Desktop Support",
      "IT Infrastructure"
    ],
    icon: "🖥️",
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
    link: "/pages/managed-services/managed-it-services"
  },
  {
    id: 2,
    title: "Managed Network Services",
    description: "Proactive network monitoring, management, and optimization services.",
    features: [
      "Network Monitoring",
      "Performance Optimization",
      "Configuration Management",
      "Bandwidth Management"
    ],
    icon: "🌐",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
    link: "/manage-technology/managed-network-solutions"
  },
  {
    id: 3,
    title: "Managed Security Services",
    description: "Round-the-clock security monitoring, threat detection, and incident response.",
    features: [
      "Security Monitoring",
      "Threat Detection",
      "Incident Response",
      "Compliance Management"
    ],
    icon: "🔒",
    gradient: "from-red-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-red-50 to-orange-100",
    link: "/manage-technology/manage-security-services"
  },
  {
    id: 4,
    title: "Cloud & Communications",
    description: "Cloud migration, email management, and unified communication solutions.",
    features: [
      "Cloud Migration",
      "Email Services",
      "Unified Communications",
      "Cloud Backup"
    ],
    icon: "☁️",
    gradient: "from-purple-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
    link: "/manage-technology/cloud-solutions"
  },
  {
    id: 5,
    title: "IT & BPO Services",
    description: "Comprehensive IT and business process outsourcing solutions.",
    features: [
      "IT Outsourcing",
      "BPO Solutions",
      "Process Automation",
      "Cost Optimization"
    ],
    icon: "👥",
    gradient: "from-amber-500 to-yellow-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
    link: "/manage-technology/it-bpo-solutions"
  }
]

const benefits = [
  {
    title: "Cost Predictability",
    description: "Fixed monthly pricing with no surprise costs"
  },
  {
    title: "24/7 Monitoring",
    description: "Round-the-clock system monitoring and alerting"
  },
  {
    title: "Expert Access",
    description: "Access to certified IT professionals"
  },
  {
    title: "Proactive Maintenance",
    description: "Preventive maintenance to avoid downtime"
  },
  {
    title: "Scalability",
    description: "Easy scaling as your business grows"
  },
  {
    title: "Compliance",
    description: "Ensured compliance with industry standards"
  }
]

const slaFeatures = [
  { metric: "99.9%", label: "Network Uptime" },
  { metric: "15 min", label: "Response Time" },
  { metric: "1 hour", label: "Resolution Time" },
  { metric: "24/7", label: "Support Coverage" }
]

export default function ManagedServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/network-pattern.svg')] bg-cover"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Comprehensive Managed Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Focus on Your Business
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent block">
                We Manage Your IT
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl">
              Let Sharptel handle your IT infrastructure while you focus on core business activities. 
              Our managed services ensure reliability, security, and optimal performance.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link 
                href="/contact" 
                className="px-10 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Managed Services Quote
              </Link>
              <Link 
                href="#services" 
                className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl -mb-16 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {slaFeatures.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">{stat.metric}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 pt-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary-600">Managed</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive managed services designed to keep your business running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managedServices.map((service) => (
              <div 
                key={service.id}
                className={`${service.bgColor} rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl`}>
                        {service.icon}
                      </div>
                      <div className="text-3xl font-bold text-gray-300">0{service.id}</div>
                    </div>
                    <div className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-3 text-primary-600 font-bold hover:text-primary-700 transition-colors group/link"
                  >
                    <span>Explore Service</span>
                    <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Benefits of <span className="text-primary-600">Managed</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why businesses choose our managed services for their IT operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-gray-200 mb-2">0{index + 1}</div>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Level Agreement */}
      <section className="py-24 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Service Level <span className="text-blue-300">Agreement</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Guaranteed Uptime</h3>
                    <p className="text-blue-100">99.9% uptime SLA with financial penalties for non-compliance.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
                    <p className="text-blue-100">15-minute response time for critical issues, 24/7 support.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Proactive Monitoring</h3>
                    <p className="text-blue-100">24/7 system monitoring with automated alerts and preventive maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="text-4xl font-bold mb-6">Managed Services Dashboard</div>
                <p className="text-blue-100 text-lg mb-8">
                  Real-time monitoring and reporting through our client portal
                </p>
                
                <div className="space-y-6">
                  {[
                    { label: "System Health", value: "98%" },
                    { label: "Uptime This Month", value: "99.97%" },
                    { label: "Active Tickets", value: "3" },
                    { label: "Avg Response Time", value: "8 min" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-blue-200">{item.label}</span>
                      <span className="text-2xl font-bold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Focus on Growth
                <span className="text-primary-600 block">Let Us Handle Your IT</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-12">
                Schedule a free IT assessment and discover how our managed services can 
                transform your business operations
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/contact" 
                  className="px-12 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  Request Free IT Assessment
                </Link>
                <Link 
                  href="tel:+922134567890" 
                  className="px-12 py-5 border-2 border-primary-600 text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-all duration-300 text-lg"
                >
                  Call: +92 21 3456 7890
                </Link>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-gray-500">
                  <div className="flex flex-wrap gap-8 justify-center text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      No Commitment Assessment
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      Custom Service Proposal
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      Flexible Contract Terms
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