'use client'

import { useState, useRef } from 'react'
import { Briefcase, Clock, DollarSign, MapPin, Send, X, Users, Award, TrendingUp, Building, Mail, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Accent, CTASection, PageHero } from "@/app/components/premium"

const jobOpenings = [
  { 
    id: 1,
    title: 'Network Engineer', 
    dept: 'Technical Operations', 
    location: 'Karachi / Islamabad', 
    type: 'Full-time', 
    exp: '3-5 Years', 
    salary: 'Market Competitive',
    desc: 'Design, implement, and maintain enterprise network infrastructure including routing, switching, and security solutions.',
    requirements: ['CCNA/CCNP Certified', 'Experience with Cisco/Juniper', 'Network Security Knowledge', 'Troubleshooting Skills']
  },
  { 
    id: 2,
    title: 'Sales Executive', 
    dept: 'Sales & Business Development', 
    location: 'Lahore / Karachi', 
    type: 'Full-time', 
    exp: '2-4 Years', 
    salary: 'Base + Commission',
    desc: 'Generate leads, build client relationships, and drive sales for ICT solutions across enterprise and government sectors.',
    requirements: ['Proven Sales Record', 'ICT Industry Knowledge', 'Communication Skills', 'Client Management']
  },
  { 
    id: 3,
    title: 'Technical Support Specialist', 
    dept: 'Customer Support', 
    location: 'Karachi HQ', 
    type: 'Full-time', 
    exp: '1-3 Years', 
    salary: 'Market Competitive',
    desc: 'Provide L2/L3 technical support, troubleshoot network issues, and ensure client satisfaction for enterprise customers.',
    requirements: ['Networking Fundamentals', 'Troubleshooting Skills', 'Customer Service', 'Technical Documentation']
  },
  { 
    id: 4,
    title: 'Project Manager', 
    dept: 'Project Management Office', 
    location: 'Islamabad / Karachi', 
    type: 'Full-time', 
    exp: '5-7 Years', 
    salary: 'Market Competitive',
    desc: 'Manage end-to-end ICT projects, coordinate with cross-functional teams, and ensure timely delivery within budget.',
    requirements: ['PMP/Prince2 Certified', 'ICT Project Experience', 'Stakeholder Management', 'Budget Control']
  },
  { 
    id: 5,
    title: 'Software Developer', 
    dept: 'Software Solutions', 
    location: 'Karachi / Lahore', 
    type: 'Full-time', 
    exp: '2-4 Years', 
    salary: 'Market Competitive',
    desc: 'Develop custom software solutions, web applications, and mobile apps using modern technologies and frameworks.',
    requirements: ['React/Node.js Experience', 'Full-Stack Development', 'Database Management', 'Agile Methodology']
  },
  { 
    id: 6,
    title: 'Cyber Security Analyst', 
    dept: 'Security Operations', 
    location: 'Karachi HQ', 
    type: 'Full-time', 
    exp: '3-5 Years', 
    salary: 'Market Competitive',
    desc: 'Monitor security systems, conduct vulnerability assessments, and implement security measures for enterprise networks.',
    requirements: ['Security Certifications', 'SIEM Experience', 'Incident Response', 'Security Auditing']
  }
]

const benefits = [
  { icon: '💰', title: 'Competitive Salary', desc: 'Market competitive packages with performance bonuses' },
  { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive medical coverage for employees and family' },
  { icon: '📚', title: 'Learning & Development', desc: 'Sponsored certifications and training programs' },
  { icon: '⚕️', title: 'Work-Life Balance', desc: 'Flexible hours and remote work options' },
  { icon: '🚀', title: 'Career Growth', desc: 'Clear progression paths and promotion opportunities' },
  { icon: '🎯', title: 'Annual Bonus', desc: 'Performance-based annual bonuses and incentives' },
]

export default function ClientCareerPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState(jobOpenings[0])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    message: '',
    position: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''})
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({type: 'error', message: 'File size must be less than 5MB'})
        return
      }
      setFormData({
        ...formData,
        resume: file
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.phone || !formData.resume) {
      setSubmitStatus({type: 'error', message: 'Please fill all required fields and upload CV'})
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({type: null, message: ''})

    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('phone', formData.phone)
    formDataToSend.append('position', selectedJob.title)
    formDataToSend.append('message', formData.message)
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume)
    }
    formDataToSend.append('formType', 'career')

    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await res.json()

      if (data.success) {
        setSubmitStatus({type: 'success', message: 'Application submitted successfully! We will contact you soon.'})
        setFormData({
          name: '',
          email: '',
          phone: '',
          resume: null,
          message: '',
          position: ''
        })
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      } else {
        setSubmitStatus({type: 'error', message: data.error || 'Submission failed. Please try again.'})
      }
    } catch (err) {
      setSubmitStatus({type: 'error', message: 'Network error. Please try again.'})
    } finally {
      setIsSubmitting(false)
    }
  }

  const openModal = (job: typeof jobOpenings[0]) => {
    setSelectedJob(job)
    setModalOpen(true)
    setSubmitStatus({type: null, message: ''})
    setFormData(prev => ({...prev, position: job.title}))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      <PageHero
        eyebrow="Join Our Team"
        title="Build Your"
        accent="Future With Us"
        subtitle="Join Pakistan's leading ICT solutions provider and work on cutting-edge technology projects that shape the digital future of businesses."
        image="/background/fiber-trails.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers", href: "/career" }]}
        actions={{
          primary: { label: "View Open Positions", href: "#openings" },
          secondary: { label: "careers@sharptel.pk", href: "mailto:careers@sharptel.pk" },
        }}
        stats={[
          { number: "200+", label: "Team Members" },
          { number: "3", label: "Cities" },
          { number: "15+", label: "Years Excellence" },
          { number: "50+", label: "Career Paths" },
        ]}
      />

      {/* WHY JOIN US SECTION */}
      <section className="py-24 bg-white">
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
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-red-600">Why Sharptel?</span>
            </div>
            
            <h2 className="section-title mb-6">
              Why <span className="text-red-600">Join</span> Our Team?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career with purpose, growth, and impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100">
                  <div className="text-4xl mb-6">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-red-500 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB OPENINGS SECTION */}
      <section id="openings" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-red-600">Current Openings</span>
            </div>
            
            <h2 className="section-title mb-6">
              Explore <span className="text-red-600">Career</span> Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect role in Pakistan's leading ICT company. Grow with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div 
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden cursor-pointer border border-gray-200"
                  onClick={() => openModal(job)}
                >
                  {/* Job Header */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className="inline-block px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-semibold mb-3">
                          {job.dept}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      </div>
                      <div className="text-3xl font-bold text-gray-300">0{job.id}</div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{job.desc}</p>
                    
                    {/* Job Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-700 font-medium">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-700 font-medium">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Briefcase className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-700 font-medium">{job.exp} Experience</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-700 font-medium">{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Job Footer */}
                  <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                    <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:from-red-700 hover:to-red-600 transition-all duration-300 flex items-center justify-center gap-2">
                      <span>Apply Now</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div 
              className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-red-700 to-red-600 text-white p-8 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedJob.title}</h2>
                    <p className="text-red-100">{selectedJob.dept} • {selectedJob.location}</p>
                  </div>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="p-2 rounded-full hover:bg-white/20 transition"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Status Messages */}
                {submitStatus.type === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center">
                        <X className="h-3 w-3 text-white" />
                      </div>
                      <div className="text-red-700 font-medium">{submitStatus.message}</div>
                    </div>
                  </motion.div>
                )}

                {submitStatus.type === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <div className="text-green-700 font-medium">{submitStatus.message}</div>
                    </div>
                  </motion.div>
                )}

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Job Details */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Job Description</h3>
                    <p className="text-gray-700 mb-8">{selectedJob.desc}</p>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Requirements</h4>
                    <ul className="space-y-3 mb-8">
                      {selectedJob.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Location:</span>
                          <span className="font-semibold text-gray-900">{selectedJob.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Type:</span>
                          <span className="font-semibold text-gray-900">{selectedJob.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Experience:</span>
                          <span className="font-semibold text-gray-900">{selectedJob.exp}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Salary:</span>
                          <span className="font-semibold text-gray-900">{selectedJob.salary}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application Form */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply for this Position</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition placeholder-gray-400"
                          placeholder="John Smith"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition placeholder-gray-400"
                            placeholder="john@company.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition placeholder-gray-400"
                            placeholder="+92 300 1234567"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Cover Letter / Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition placeholder-gray-400"
                          placeholder="Tell us why you're interested in this position and what makes you a good fit..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Upload CV/Resume *
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-red-400 transition cursor-pointer">
                          <input
                            type="file"
                            name="resume"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            id="resume-upload"
                          />
                          <label htmlFor="resume-upload" className="cursor-pointer">
                            <div className="text-gray-500 mb-2">
                              {formData.resume ? (
                                <div className="text-green-600 font-medium">
                                  ✓ {formData.resume.name}
                                </div>
                              ) : (
                                <>
                                  <div className="text-3xl mb-2">📄</div>
                                  <div>Click to upload your CV</div>
                                </>
                              )}
                            </div>
                            <div className="text-sm text-gray-400">
                              PDF, DOC, DOCX (Max 5MB)
                            </div>
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:from-red-700 hover:to-red-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                      >

                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-3">
                            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting Application...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-3 text-lg">
                            <Send className="h-5 w-5" />
                            Submit Application
                          </span>
                        )}
                      </button>
                      
                      <p className="text-center text-gray-500 text-sm">
                        We will review your application and contact you within 5-7 business days.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection
        eyebrow="Open Application"
        title={<>Not finding the right <Accent>role?</Accent></>}
        text="Send us your CV anyway! We're always looking for talented individuals and may have upcoming opportunities that match your skills. Equal opportunity employer · Fast-track career growth · International certifications."
        primary={{ label: "Email Your CV", href: "mailto:careers@sharptel.pk" }}
        secondary={{ label: "Contact Us", href: "/Contact-us" }}
      />
    </div>
  )
}