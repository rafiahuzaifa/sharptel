"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Target, Award, Shield, Clock, Globe, Building, Phone, Mail, Rocket, Handshake, Star, Zap, UsersRound } from "lucide-react"
import { Accent, CTASection, FeatureGrid, PageHero, Section, SectionHeader } from "@/app/components/premium"

export default function ClientAboutPage() {
  const leaders = [
    {
      name: "Wasim Ullah Khan",
      title: "HoD Technical Operations",
      desc: "Responsible for managing network operations and service delivery with focus on excellence.",
      experience: "15+ Years",
      department: "Technical"
    },
    {
      name: "Farrukh Hussain",
      title: "HoD Commercial",
      desc: "Drives commercial strategy, partnerships and business growth across all verticals.",
      experience: "12+ Years",
      department: "Business"
    },
    {
      name: "Ashraf Khan",
      title: "HoD Finance",
      desc: "Guides financial planning and operational budgets ensuring sustainability.",
      experience: "18+ Years",
      department: "Finance"
    },
    {
      name: "Shamim Sharafat",
      title: "HoD Credit & Collection",
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
      icon: <Rocket />, 
      desc: "Adopting cutting-edge technologies for next-gen solutions.",
      color: "from-red-500 to-red-500"
    },
    { 
      title: "Integrity", 
      icon: <Handshake />, 
      desc: "Operating with transparency and ethical principles.",
      color: "from-red-500 to-red-500"
    },
    { 
      title: "Excellence", 
      icon: <Star />, 
      desc: "Delivering superior quality in every engagement.",
      color: "from-red-500 to-red-500"
    },
    { 
      title: "Customer Focus", 
      icon: <Users />, 
      desc: "Prioritizing client goals in every solution.",
      color: "from-red-500 to-red-500"
    },
    { 
      title: "Reliability", 
      icon: <Zap />, 
      desc: "High uptime, stable networks, trusted services.",
      color: "from-red-500 to-red-500"
    },
    { 
      title: "Teamwork", 
      icon: <UsersRound />, 
      desc: "Collaborating to drive success together.",
      color: "from-red-500 to-red-500"
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

      <PageHero
        eyebrow="Trusted Since 2005"
        title="Shaping The"
        accent="Digital Future"
        subtitle="Leading Pakistan's ICT revolution with innovative solutions, enterprise-grade services, and trusted partnerships since 2005."
        image="/background/connectivity.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/About-us" }]}
        actions={{
          primary: { label: "Get In Touch", href: "/Contact-us" },
          secondary: { label: "Explore Services", href: "/pages/services" },
        }}
        stats={[
          { number: "19+", label: "Years Experience" },
          { number: "5000+", label: "Clients Served" },
          { number: "50+", label: "Cities Coverage" },
          { number: "99.9%", label: "Uptime SLA" },
        ]}
      />

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
              <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-red-600"></span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-red-600">Our Journey</span>
              </div>
              
              <h2 className="section-title mb-8">
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
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-red-600"></span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-red-600">Leadership Team</span>
            </div>
            
            <h2 className="section-title mb-6">
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
                <div className="premium-card h-full overflow-hidden">
                  {/* Monogram panel (no leadership photos are published yet) */}
                  <div className="grain relative isolate flex h-56 items-center justify-center overflow-hidden bg-gray-950">
                    <div className="absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-red-600/30 blur-[70px] transition-all duration-700 group-hover:bg-red-600/50" />
                    <span className="text-6xl font-semibold text-white" style={{ letterSpacing: "-0.04em" }}>
                      {leader.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                    <div className="absolute right-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                      {leader.experience}
                    </div>
                    <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-md">
                      {leader.department}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-semibold text-gray-900">{leader.name}</h3>
                    <p className="mb-4 text-sm font-semibold text-red-600">{leader.title}</p>
                    <p className="text-sm leading-relaxed text-gray-600">{leader.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <Section tone="dark">
        <SectionHeader
          dark
          eyebrow="Our Principles"
          title={<>Core values that <Accent>define us</Accent></>}
          lead="The foundation of our success and the guiding principles for everything we do."
        />
        <FeatureGrid dark columns={3} items={values.map((v) => ({ icon: v.icon, title: v.title, desc: v.desc }))} />
      </Section>

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
              <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-red-600"></span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-red-600">Quality Commitment</span>
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
              <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-red-600"></span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-red-600">Strategic Partnerships</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-8">
                Global <span className="text-red-600">Technology Partners</span>
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
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-red-600"></span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-red-600">Find Us</span>
            </div>
            
            <h2 className="section-title mb-6">
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

      <CTASection
        eyebrow="Partner With Us"
        title={<>Ready to partner with <Accent>Pakistan&apos;s ICT leader?</Accent></>}
        text="Join 5000+ satisfied clients who trust Sharptel for their technology needs. Let's build your digital future together. 19+ years experience · 24/7 technical support · Nationwide coverage."
        primary={{ label: "Get In Touch", href: "/Contact-us" }}
        secondary={{ label: "Explore Services", href: "/pages/services" }}
      />
    </div>
  )
}