import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: "Mobile Apps Development",
    description: "Native and cross-platform mobile applications for iOS and Android with cutting-edge features.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    icon: "/icons/mobile-app.svg",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
    link: "/software-solutions/mobile-app-devlopment"
  },
  {
    id: 2,
    title: "Custom Web Development",
    description: "Bespoke web applications and portals tailored to your specific business requirements.",
    technologies: ["React.js", "Next.js", "Node.js", "Python/Django"],
    icon: "/icons/web-dev.svg",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
    link: "/software-solutions/webdevlopment"
  },
  {
    id: 3,
    title: "CRM/ERP Customization",
    description: "Customize and integrate enterprise resource planning and customer relationship management systems.",
    technologies: ["Salesforce", "Odoo", "SAP", "Microsoft Dynamics"],
    icon: "/icons/crm.svg",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
    link: "/software-solutions/crm-erp-solution"
  },
  {
    id: 4,
    title: "Prototype Development",
    description: "Rapid prototyping to validate ideas and concepts before full-scale development.",
    technologies: ["Figma", "Adobe XD", "Wireframing", "MVP Development"],
    icon: "/icons/prototype.svg",
    bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
    link: "/software-solutions/prototype-devlopment"
  },
  {
    id: 5,
    title: "Graphic Design",
    description: "Professional graphic design services for branding, marketing, and user interface design.",
    technologies: ["Adobe Creative Suite", "UI/UX Design", "Brand Identity", "Marketing Collateral"],
    icon: "/icons/graphic-design.svg",
    bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
    link: "/software-solutions/graphic-designing"
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including SEO, social media, and PPC campaigns.",
    technologies: ["SEO", "Social Media", "Google Ads", "Content Marketing"],
    icon: "/icons/digital-marketing.svg",
    bgColor: "bg-gradient-to-br from-cyan-50 to-sky-100",
    link: "/software-solutions/digital-marketing"
  }
]

const portfolio = [
  {
    title: "Banking Mobile App",
    category: "Mobile Development",
    image: "/portfolio/banking-app.jpg",
    description: "Complete banking solution with biometric authentication"
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/portfolio/ecommerce.jpg",
    description: "Scalable online shopping platform with inventory management"
  },
  {
    title: "Healthcare CRM",
    category: "CRM Customization",
    image: "/portfolio/healthcare-crm.jpg",
    description: "Custom CRM for hospital management system"
  }
]

const process = [
  { step: 1, title: "Discovery", description: "Requirement analysis and planning" },
  { step: 2, title: "Design", description: "UI/UX design and prototyping" },
  { step: 3, title: "Development", description: "Agile development sprints" },
  { step: 4, title: "Testing", description: "Quality assurance and testing" },
  { step: 5, title: "Deployment", description: "Launch and deployment" },
  { step: 6, title: "Support", description: "Maintenance and support" }
]

export default function SoftwareSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/patterns/code-pattern.svg')] bg-cover"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Innovative Software Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Transform Your Vision Into
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent block">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              From concept to deployment, we craft cutting-edge software solutions that drive business growth, 
              enhance efficiency, and deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                href="/contact" 
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link 
                href="#portfolio" 
                className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary-600">Software</span> Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development services using latest technologies and agile methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`${service.bgColor} rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-8">
                    <div className="relative">
                      <div className="h-20 w-20 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                        <div className="h-14 w-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">{service.id}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-primary-700 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

      {/* Development Process */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary-600">Development</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent, agile, and collaborative approach to software development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center group">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                
                {item.step < 6 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-primary-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise through successful software implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                      <div className="text-sm font-medium mb-2">{project.category}</div>
                      <p className="text-lg font-bold">{project.description}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <div className="text-sm font-medium text-primary-600">{project.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technology <span className="text-blue-300">Stack</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver robust and scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", color: "from-cyan-500 to-blue-600" },
              { name: "Next.js", color: "from-gray-800 to-black" },
              { name: "Node.js", color: "from-green-500 to-emerald-600" },
              { name: "Python", color: "from-blue-500 to-indigo-600" },
              { name: "Flutter", color: "from-sky-500 to-blue-500" },
              { name: "AWS", color: "from-amber-500 to-orange-600" },
              { name: "Docker", color: "from-blue-400 to-cyan-500" },
              { name: "MongoDB", color: "from-green-600 to-emerald-700" },
              { name: "Firebase", color: "from-amber-400 to-orange-500" },
              { name: "GraphQL", color: "from-pink-500 to-rose-600" },
              { name: "TypeScript", color: "from-blue-600 to-indigo-700" },
              { name: "Tailwind", color: "from-sky-400 to-cyan-500" },
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className={`h-24 w-24 mx-auto rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="h-20 w-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold">{tech.name}</span>
                  </div>
                </div>
                <div className="font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Let's Build Something
                <span className="text-primary-600 block">Amazing Together</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-12">
                Share your project requirements and get a detailed proposal within 24 hours
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/Contact-us" 
                  className="px-12 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  Start Project Discussion
                </Link>
                <Link 
                  href="mailto:solutions@sharptel.pk" 
                  className="px-12 py-5 border-2 border-primary-600 text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-all duration-300 text-lg"
                >
                  Email: solutions@sharptel.pk
                </Link>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-gray-500">
                  <div className="flex flex-wrap gap-8 justify-center text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      Free Initial Consultation
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      Detailed Project Proposal
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      Transparent Pricing
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