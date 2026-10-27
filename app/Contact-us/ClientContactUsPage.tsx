"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Accent, CTASection, PageHero } from "@/app/components/premium"

export default function ClientContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    subject: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const services = [
    "Connectivity Solutions",
    "Software Development",
    "Technology Solutions",
    "Managed Services",
    "Consultation",
    "Support",
    "Other"
  ]

  const contactPoints = [
    {
      title: "Karachi Headquarters",
      address: "Plot # ABC, Street # 123, Block 4, Clifton, Karachi, Pakistan",
      phone: "+92-311-128-4373",
      email: "hq@sharptel.pk",
      icon: <MapPin className="h-6 w-6" />,
      color: "from-red-600 to-red-500"
    },
    {
      title: "Lahore Office",
      address: "Main Boulevard, Gulberg III, Lahore, Pakistan",
      phone: "+92-311-1123104 / +92-311-1123105",
      email: "lahore@sharptel.pk",
      icon: <MapPin className="h-6 w-6" />,
      color: "from-red-600 to-red-500"
    },
    {
      title: "Islamabad Office",
      address: "Blue Area, Sector F-7, Islamabad, Pakistan",
      phone: "+92-311-1123104 / +92-311-1123105",
      email: "islamabad@sharptel.pk",
      icon: <MapPin className="h-6 w-6" />,
      color: "from-red-600 to-red-500"
    }
  ]

  const contactInfo = [
    {
      title: "Sales & Inquiry",
      phone: "+92-311-128-4373",
      email: "sales@sharptel.pk",
      icon: <Phone className="h-5 w-5" />,
      hours: "Mon - Fri: 9 AM - 6 PM",
      color: "bg-gradient-to-r from-red-600 to-red-500"
    },
    {
      title: "Technical Support",
      phone: "+92-311-128-4373",
      email: "support@sharptel.pk",
      icon: <Send className="h-5 w-5" />,
      hours: "24/7 Support Available",
      color: "bg-gradient-to-r from-red-600 to-red-500"
    },
    {
      title: "General Information",
      phone: "+92-311-1123104 / +92-311-1123105",
      email: "info@sharptel.pk",
      icon: <Mail className="h-5 w-5" />,
      hours: "Mon - Sat: 8 AM - 8 PM",
      color: "bg-gradient-to-r from-red-600 to-red-500"
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        ...formData,
        formType: 'contact' // Specify form type
      }),
    })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage("Thank you! Your message has been sent successfully. We'll contact you within 24 hours.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          subject: "",
          message: ""
        })
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("There was an error sending your message. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        compact
        eyebrow="Get In Touch"
        title="Let's Build"
        accent="Together"
        subtitle="Connect with Pakistan's leading ICT solutions provider. Our team is ready to transform your business challenges into opportunities."
        image="/background/data-flow.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/Contact-us" }]}
        actions={{
          primary: { label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" },
          secondary: { label: "info@sharptel.pk", href: "mailto:info@sharptel.pk" },
        }}
        stats={[
          { number: "24/7", label: "Support" },
          { number: "< 24h", label: "Response Time" },
          { number: "50+", label: "Cities" },
          { number: "19+", label: "Years Experience" },
        ]}
      />

      {/* CONTACT FORM & INFORMATION */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-red-500/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <div className="mb-10">
                <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-red-600"></span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-red-600">Send Message</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get Your <span className="text-red-600">Free Consultation</span>
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our experts will contact you within 24 hours.
                </p>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-bold text-green-800">Message Sent Successfully!</div>
                      <div className="text-green-700 text-sm mt-1">{submitMessage}</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <div className="font-bold text-red-800">Submission Failed</div>
                      <div className="text-red-700 text-sm mt-1">{submitMessage}</div>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition placeholder-gray-400"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition placeholder-gray-400"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition placeholder-gray-400"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:from-red-700 hover:to-red-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3 text-lg">
                        <Send className="h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </button>
                  
                  <p className="text-center text-gray-500 text-sm mt-4">
                    We respect your privacy and will never share your information.
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Contact Information & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Information Cards */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Quick Contact Channels</h3>
                
                <div className="grid gap-6">
                  {contactInfo.map((info, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className={`h-12 w-12 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}>
                          <div className="text-white">
                            {info.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-gray-500" />
                              <span className="font-semibold text-gray-800">{info.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-gray-500" />
                              <span className="font-semibold text-gray-800">{info.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <span className="text-gray-600">{info.hours}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Map */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Locations</h3>
                  <div className="h-64 relative bg-gray-800 rounded-xl overflow-hidden mb-6">
                    {/* Interactive Map */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Pakistan Map Outline */}
                        <svg className="w-full h-full" viewBox="0 0 800 600">
                          <path 
                            d="M200,200 L300,250 L400,220 L500,280 L600,230 L650,300 L550,400 L450,450 L350,400 L250,350 L200,300 Z" 
                            fill="rgba(220, 38, 38, 0.1)" 
                            stroke="rgb(220, 38, 38)" 
                            strokeWidth="2"
                          />
                          
                          {/* City Markers */}
                          <circle cx="250" cy="250" r="12" fill="rgb(220, 38, 38)" className="animate-pulse">
                            <title>Karachi HQ</title>
                          </circle>
                          <circle cx="400" cy="200" r="10" fill="rgb(239, 68, 68)" className="animate-pulse">
                            <title>Lahore</title>
                          </circle>
                          <circle cx="550" cy="220" r="10" fill="rgb(239, 68, 68)" className="animate-pulse">
                            <title>Islamabad</title>
                          </circle>
                          
                          {/* Network Lines */}
                          <path 
                            d="M250,250 L400,200 L550,220" 
                            stroke="rgba(220, 38, 38, 0.5)" 
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                        
                        {/* Map Labels */}
                        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2">
                          <div className="bg-white text-gray-900 rounded-lg px-3 py-2 shadow-lg">
                            <div className="font-bold">Karachi</div>
                            <div className="text-xs">Headquarters</div>
                          </div>
                        </div>
                        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
                          <div className="bg-white text-gray-900 rounded-lg px-3 py-2 shadow-lg">
                            <div className="font-bold">Lahore</div>
                          </div>
                        </div>
                        <div className="absolute top-1/4 right-1/4 transform -translate-x-1/2">
                          <div className="bg-white text-gray-900 rounded-lg px-3 py-2 shadow-lg">
                            <div className="font-bold">Islamabad</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Office Addresses */}
                  <div className="space-y-4">
                    {contactPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition">
                        <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${point.color} flex items-center justify-center flex-shrink-0`}>
                          {point.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">{point.title}</h4>
                          <p className="text-gray-300 text-sm mb-1">{point.address}</p>
                          <p className="text-gray-300 text-sm">{point.phone} • {point.email}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Business Hours</h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", color: "text-green-600" },
                    { day: "Saturday", hours: "10:00 AM - 4:00 PM", color: "text-red-600" },
                    { day: "Sunday", hours: "Closed", color: "text-gray-400" },
                    { day: "Emergency Support", hours: "24/7 Available", color: "text-red-600" },
                  ].map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-gray-50">
                      <div className="font-medium text-gray-900">{schedule.day}</div>
                      <div className={`font-semibold ${schedule.color}`}>{schedule.hours}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-red-50 to-red-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">sales Support</div>
                      <div className="text-red-600 font-semibold"> +92-311-1123104 / +92-311-1123105</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
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
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-red-600">FAQs</span>
            </div>
            
            <h2 className="section-title mb-6">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services and support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What is your typical response time for inquiries?",
                answer: "We respond to all inquiries within 24 hours. For urgent matters, our emergency support line is available 24/7."
              },
              {
                question: "Do you offer customized solutions for specific business needs?",
                answer: "Absolutely! We specialize in tailoring solutions to meet your specific requirements, budget, and timeline."
              },
              {
                question: "What areas do you serve in Pakistan?",
                answer: "We serve clients nationwide with headquarters in Karachi and regional offices in Lahore and Islamabad."
              },
              {
                question: "How do I get a quote for your services?",
                answer: "Fill out the contact form with your requirements, and our team will provide a detailed quote within 48 hours."
              },
              {
                question: "What support services do you provide after implementation?",
                answer: "We offer 24/7 technical support, regular maintenance, and ongoing optimization services."
              },
              {
                question: "Are your solutions scalable for business growth?",
                answer: "Yes, all our solutions are designed to scale with your business needs and growth."
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={<>Ready to transform your <Accent>business?</Accent></>}
        text="Contact us today for a free consultation and discover how Sharptel can help your business achieve digital excellence. Free initial consultation · 24/7 technical support · Nationwide service coverage."
        primary={{ label: "Call +92-311-1123104", href: "tel:+92-311-1123104" }}
        secondary={{ label: "info@sharptel.pk", href: "mailto:info@sharptel.pk" }}
      />
    </div>
  )
}