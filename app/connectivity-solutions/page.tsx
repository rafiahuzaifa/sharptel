import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: "Enterprise Internet Services",
    description: "High-speed dedicated internet connections with 99.9% uptime SLA, fiber optic networks, and enterprise-grade security.",
    features: ["Dedicated Bandwidth", "24/7 Monitoring", "SLA Guarantee", "Enterprise Security"],
    icon: "/icons/enterprise-internet.svg",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
    link: "/connectivity-solutions/enterprise-solutions"
  },
  {
    id: 2,
    title: "Data Solutions",
    description: "Secure and scalable data connectivity solutions including MPLS, VPN, and SD-WAN for seamless business operations.",
    features: ["MPLS Networks", "VPN Solutions", "SD-WAN", "Data Security"],
    icon: "/icons/data-solutions.svg",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
    link: "/connectivity-solutions/data-solutions"
  },
  {
    id: 3,
    title: "Wireless Services",
    description: "Wireless broadband and point-to-point solutions for remote locations and last-mile connectivity challenges.",
    features: ["Wireless Broadband", "Point-to-Point", "5G Ready", "Rural Connectivity"],
    icon: "/icons/wireless.svg",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
    link: "/connectivity-solutions/wireless-connectivity"
  },
  {
    id: 4,
    title: "Banking Enterprise Services",
    description: "Secure and reliable connectivity solutions specifically designed for financial institutions and banking operations.",
    features: ["Secure Networks", "Banking Compliance", "Redundant Links", "Low Latency"],
    icon: "/icons/banking.svg",
    bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
    link: "/connectivity-solutions/banking-enterprise"
  },
  {
    id: 5,
    title: "Call Center Services",
    description: "Dedicated connectivity solutions with QoS for voice and data traffic optimization in call center environments.",
    features: ["QoS Enabled", "Voice Optimized", "Redundant Paths", "24/7 Support"],
    icon: "/icons/call-center.svg",
    bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
    link: "/connectivity-solutions/call-service"
  },
  {
    id: 6,
    title: "Coverage Areas & Cities",
    description: "Extensive network coverage across major cities with local support and multiple POP locations.",
    features: ["Major Cities", "Multiple POPs", "Local Support", "Growing Network"],
    icon: "/icons/coverage.svg",
    bgColor: "bg-gradient-to-br from-cyan-50 to-sky-100",
    link: "/connectivity-solutions/coverage-area"
  },
  {
    id: 7,
    title: "Satellite Service",
    description: "Satellite-based connectivity solutions for remote locations, maritime, and areas without terrestrial connectivity.",
    features: ["Remote Access", "Maritime Solutions", "Global Coverage", "VSAT Technology"],
    icon: "/icons/satellite.svg",
    bgColor: "bg-gradient-to-br from-slate-50 to-gray-100",
    link: "/connectivity-solutions/satellite-service"
  }
]

const clients = [
  { name: "HBL", logo: "/clients/hbl.png" },
  { name: "Jazz", logo: "/clients/jazz.png" },
  { name: "K-Electric", logo: "/clients/ke.png" },
  { name: "UBL", logo: "/clients/ubl.png" },
  { name: "PTCL", logo: "/clients/ptcl.png" },
  { name: "Bank Alfalah", logo: "/clients/bank-alfalah.png" }
]

const stats = [
  { number: "99.9%", label: "Network Uptime" },
  { number: "24/7", label: "Support Available" },
  { number: "50+", label: "Cities Coverage" },
  { number: "1000+", label: "Enterprise Clients" }
]

export default function ConnectivityServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-cover"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Enterprise Connectivity Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Powering Digital<br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Sharptel provides enterprise-grade connectivity solutions with unmatched reliability, 
              security, and performance for businesses across Pakistan.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Enterprise Quote
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl -mb-12 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">{stat.number}</div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary-600">Connectivity</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive connectivity services designed to meet the demands of modern enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`${service.bgColor} rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="h-16 w-16 rounded-xl bg-white p-3 shadow-lg">
                      <div className="h-10 w-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">{service.id}</span>
                      </div>
                    </div>
                    <div className="text-primary-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="h-2 w-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why <span className="text-primary-600">Choose</span> Sharptel?
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Enterprise Security</h3>
                    <p className="text-gray-600">Multi-layered security with DDoS protection, firewalls, and 24/7 threat monitoring.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">High Performance</h3>
                    <p className="text-gray-600">Low latency networks with dedicated bandwidth and optimal routing.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-gray-800">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock technical support with dedicated account managers.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 text-white">
                <div className="text-5xl font-bold mb-6">Trusted By Industry Leaders</div>
                <p className="text-blue-100 text-lg mb-8">
                  We serve leading enterprises across banking, telecom, manufacturing, and government sectors.
                </p>
                
                <div className="grid grid-cols-3 gap-6">
                  {clients.slice(0, 6).map((client, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center">
                      <div className="h-12 w-full bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-white">{client.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 shadow-2xl">
                <div className="text-2xl font-bold text-white">15+ Years</div>
                <div className="text-white/90">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business Connectivity?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Get in touch with our experts for a free network assessment and customized solution proposal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="px-10 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
            >
              Request Free Consultation
            </Link>
            <Link 
              href="tel:+92-311-128-4373" 
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 text-lg"
            >
              Call:+92-311-128-4373
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}