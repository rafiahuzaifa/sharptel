import Link from 'next/link'

const technologySolutions = [
  {
    id: 1,
    title: "Cyber Security Solutions",
    description: "Comprehensive security solutions including firewall protection, intrusion detection, and threat intelligence.",
    features: [
      "Next-Gen Firewalls",
      "SIEM Solutions", 
      "Endpoint Security",
      "Vulnerability Assessment"
    ],
    icon: "🛡️",
    gradient: "from-red-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-red-50 to-orange-100",
    link: "/technology-solutions/cyber-security"
  },
  {
    id: 2,
    title: "Data Center & Colocation",
    description: "Tier-3 data center facilities with redundant power, cooling, and network infrastructure.",
    features: [
      "Tier-3 Facilities",
      "Redundant Power",
      "24/7 Monitoring",
      "Disaster Recovery"
    ],
    icon: "🏢",
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
    link: "/technology-solutions/data-center"
  },
  {
    id: 3,
    title: "Network Assessment",
    description: "Comprehensive network analysis and optimization services for improved performance.",
    features: [
      "Network Audits",
      "Performance Optimization",
      "Security Assessment",
      "Capacity Planning"
    ],
    icon: "📊",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
    link: "/technology-solutions/network-assesment"
  },
  {
    id: 4,
    title: "Hotspot/Wi-Fi Solutions",
    description: "Enterprise-grade Wi-Fi solutions with captive portals and analytics.",
    features: [
      "Enterprise Wi-Fi",
      "Captive Portals",
      "User Analytics",
      "Mesh Networks"
    ],
    icon: "📶",
    gradient: "from-purple-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
    link: "/technology-solutions/hotspot-wifi"
  },
  {
    id: 5,
    title: "IoT & Automation",
    description: "Smart IoT solutions for industrial automation, smart cities, and building management.",
    features: [
      "Industrial IoT",
      "Smart Sensors",
      "Automation Control",
      "Real-time Monitoring"
    ],
    icon: "🤖",
    gradient: "from-cyan-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-cyan-50 to-teal-100",
    link: "/technology-solutions/iot-automation"
  },
  {
    id: 6,
    title: "Energy Conservation",
    description: "Smart energy management solutions for cost reduction and sustainability.",
    features: [
      "Energy Monitoring",
      "Smart Grid Solutions",
      "Solar Integration",
      "Energy Analytics"
    ],
    icon: "⚡",
    gradient: "from-amber-500 to-yellow-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
    link: "/technology-solutions/energy-conversation"
  },
  {
    id: 7,
    title: "Surveillance & Security",
    description: "Advanced CCTV and surveillance systems with AI-powered analytics.",
    features: [
      "IP CCTV Systems",
      "Video Analytics",
      "Access Control",
      "Central Monitoring"
    ],
    icon: "🎥",
    gradient: "from-gray-600 to-gray-800",
    bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
    link: "/technology-solutions/survellience-soluition"
  },
  {
    id: 8,
    title: "Virtual Private Server",
    description: "Secure and scalable VPS hosting with dedicated resources and full control.",
    features: [
      "SSD Storage",
      "Dedicated Resources",
      "Root Access",
      "Backup Solutions"
    ],
    icon: "☁️",
    gradient: "from-sky-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-sky-50 to-blue-100",
    link: "/technology-solutions/virtual-solution"
  },
  {
    id: 9,
    title: "VOIP Solutions",
    description: "Cost-effective Voice over IP solutions with enterprise features.",
    features: [
      "IP PBX Systems",
      "SIP Trunking",
      "Call Center Solutions",
      "Mobile Integration"
    ],
    icon: "📞",
    gradient: "from-pink-500 to-rose-600",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
    link: "/technology-solutions/voice-over"
  }
]

const caseStudies = [
  {
    title: "Banking Sector Security",
    client: "Major Pakistani Bank",
    result: "99.9% threat detection rate",
    description: "Implemented comprehensive cybersecurity framework"
  },
  {
    title: "Smart City IoT",
    client: "Government Project",
    result: "40% energy savings",
    description: "Deployed IoT sensors for smart city management"
  },
  {
    title: "Enterprise Data Center",
    client: "Telecom Company",
    result: "Tier-3 certification",
    description: "Built redundant data center infrastructure"
  }
]

export default function TechnologySolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/tech-pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Future-Ready Technology Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Advanced Technology
              <span className="bg-gradient-to-r from-blue-900 to-cyan-300 bg-clip-text text-transparent block">
                Solutions for Tomorrow
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl">
              Harness the power of cutting-edge technology with our comprehensive solutions 
              designed to drive innovation, enhance security, and optimize operations.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link 
                href="/contact" 
                className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-900 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Technology Assessment
              </Link>
              <Link 
                href="#solutions" 
                className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions Grid */}
      <section id="solutions" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-primary-600">Technology</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end technology solutions tailored to meet the evolving needs of modern enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologySolutions.map((solution) => (
              <div 
                key={solution.id}
                className={`${solution.bgColor} rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center text-2xl`}>
                        {solution.icon}
                      </div>
                      <div className="text-3xl font-bold text-gray-300">0{solution.id}</div>
                    </div>
                    <div className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{solution.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{solution.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${solution.gradient}`}></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={solution.link}
                    className="inline-flex items-center gap-3 text-primary-600 font-bold hover:text-primary-700 transition-colors"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success <span className="text-primary-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations delivering measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-gray-200 mb-2">0{index + 1}</div>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-medium">Client</span>
                    <span className="font-bold text-gray-800">{study.client}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-medium">Result</span>
                    <span className="font-bold text-primary-600">{study.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technology <span className="text-blue-300">Partnerships</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We partner with industry-leading technology providers to deliver best-in-class solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Cisco", logo: "🔷" },
              { name: "Fortinet", logo: "🛡️" },
              { name: "Microsoft", logo: "🪟" },
              { name: "Dell EMC", logo: "💻" },
              { name: "HP Enterprise", logo: "⚡" },
              { name: "VMware", logo: "☁️" },
              { name: "Palo Alto", logo: "🔶" },
              { name: "Hikvision", logo: "👁️" },
            ].map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <div className="text-xl font-bold">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/patterns/dots-pattern.svg')] opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Ready to Transform Your
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent block">
                    Technology Infrastructure?
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                  Contact our technology experts for a comprehensive assessment 
                  and customized solution proposal
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="/contact" 
                    className="px-12 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                  >
                    Schedule Technology Consultation
                  </Link>
                  <Link 
                    href="tel:+922134567890" 
                    className="px-12 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
                  >
                    Call Expert: +92 21 3456 7890
                  </Link>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/20">
                  <div className="text-gray-400">
                    <div className="flex flex-wrap gap-8 justify-center text-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Free Initial Assessment
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Custom Solution Design
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Implementation Support
                      </div>
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