"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone, Mail, Clock, MapPin, XCircle } from "lucide-react";

const menuItems = [
  {
    label: "Connectivity Solutions",
    href: "/connectivity-solutions",
    sub: [
      { label: "Enterprise Internet Services", href: "/connectivity-solutions/enterprise-solutions" },
      { label: "Data Solutions", href: "/connectivity-solutions/data-solutions" },
      { label: "Wireless Services", href: "/connectivity-solutions/wireless-connectivity" },
      { label: "Banking Enterprise Services", href: "/connectivity-solutions/banking-enterprise" },
      { label: "Call Center Services", href: "/connectivity-solutions/call-service" },
      { label: "Coverage Areas & Cities", href: "/connectivity-solutions/coverage-area" },
      { label: "Satellite Service", href: "/connectivity-solutions/satellite-service" },
    ],
  },
  {
    label: "Software Solutions",
    href: "/software-solutions",
    sub: [
      { label: "Mobile Apps Development", href: "/software-solutions/mobile-app-devlopment" },
      { label: "Custom Web Development", href: "/software-solutions/webdevlopment" },
      { label: "CRM/ERP Customization", href: "/software-solutions/crm-erp-solution" },
      { label: "Prototype Development", href: "/software-solutions/prototype-devlopment" },
      { label: "Graphic Design Services", href: "/software-solutions/graphic-designing" },
      { label: "Digital Marketing Solutions", href: "/software-solutions/digital-marketing" },
    ],
  },
  {
    label: "Technology Solutions",
    href: "/technology-solutions",
    sub: [
      { label: "Cyber Security Solutions", href: "/technology-solutions/cyber-security" },
      { label: "Data Center Services", href: "/technology-solutions/data-center" },
      { label: "Network Assessment", href: "/technology-solutions/network-assesment" },
      { label: "Hotspot/Wi-Fi Solutions", href: "/technology-solutions/hotspot-wifi" },
      { label: "IOT & Automation", href: "/technology-solutions/iot-automation" },
      { label: "Energy Conservation Solutions", href: "/technology-solutions/energy-conversation" },
      { label: "Surveillance & Security", href: "/technology-solutions/survellience-soluition" },
      { label: "Virtual Private Server", href: "/technology-solutions/virtual-solution" },
      { label: "Voice Over IP Solutions", href: "/technology-solutions/voice-over" },
    ],
  },
  {
    label: "Managed Services",
    href: "/manage-technology",
    sub: [
      { label: "Managed IT Services", href: "/manage-technology/manage-it-service" },
      { label: "Managed Network Services", href: "/manage-technology/manage-network-solutions" },
      { label: "Managed Security Services", href: "/manage-technology/manage-security-service" },
      { label: "Cloud & Communications", href: "/manage-technology/cloud-solutions" },
      { label: "IT & BPO Services", href: "/manage-technology/it-bpo-solutions" },
    ],
  },
  { label: "About Us", href: "/About-us", sub: [] },
  { label: "Contact Us", href: "/Contact-us", sub: [] },
];

export default function PremiumNavbar() {
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowQuoteForm(false);
      }
    };
    if (showQuoteForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showQuoteForm]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would integrate with your NodeMailer API
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Quote request submitted successfully! We will contact you soon.');
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setShowQuoteForm(false);
      } else {
        alert('Failed to submit quote request. Please try again.');
      }
    } catch (error) {
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Top Bar - Red Theme */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-2">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-red-100">Call us 24/7</div>
                  <div className="text-sm font-bold tracking-wide">+92-311-128-4373

</div>
                </div>
              </div>
              
              <div className="hidden md:flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-red-100">Email Support</div>
                  <div className="text-sm font-bold tracking-wide">info@sharptel.pk</div>
                </div>
              </div>
              
              <div className="hidden lg:flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-red-100">Business Hours</div>
                  <div className="text-sm font-bold tracking-wide">Mon - Sat: 9AM - 6PM</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Link 
                href="/career" 
                className="text-sm font-semibold hover:text-red-200 transition px-3 py-1 rounded-lg hover:bg-white/10"
              >
                🚀 We're Hiring
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Black & White Theme */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? "bg-white shadow-2xl border-b border-gray-200" 
          : "bg-white"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo with Image */}
            <Link href="/" className="z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3"
              >
                <div className="relative">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl flex items-center justify-center overflow-hidden">
                    {/* Logo Image Only */}
                    <Image
                      src="/background/Sharp-logo-2.webp"
                      alt="Sharptel Logo"
                      width={120}
                      height={40}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="text-xl font-black text-red-700 tracking-tight">
                    SharpTel
                  </div>
                  <div className="text-[10px] font-medium text-gray-600 uppercase tracking-wider">
                    Technology Solutions
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Larger Fonts */}
            <nav className="hidden lg:flex items-center gap-1 relative z-10">
              {menuItems.map(({ label, href, sub }) => {
                const isHovered = hoverMenu === label;
                const hasSubmenu = sub.length > 0;

                return (
                  <div
                    key={label}
                    className="relative"
                    onMouseEnter={() => setHoverMenu(label)}
                    onMouseLeave={() => setHoverMenu(null)}
                  >
                    <Link
                      href={href}
                      className={`group flex items-center gap-2 px-5 py-3 text-[15px] font-bold transition-all duration-300 ${
                        isHovered 
                          ? "text-red-600" 
                          : "text-gray-800 hover:text-red-500"
                      }`}
                    >
                      <span className="relative">
                        {label}
                        <span className={`absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-red-600 to-red-500 transition-all duration-500 ${
                          isHovered ? "w-full" : "w-0"
                        }`} />
                      </span>
                      {hasSubmenu && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isHovered ? "rotate-180 text-red-600" : "text-gray-500 group-hover:text-red-500"
                          }`}
                        />
                      )}
                    </Link>

                    {/* Premium Dropdown with Red Theme */}
                    <AnimatePresence>
                      {hasSubmenu && isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.25, type: "spring", stiffness: 400 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 min-w-[320px]"
                        >
                          <div className="relative">
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                              <div className="w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45 shadow-sm" />
                            </div>
                            
                            <div className="bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
                              <div className="bg-gradient-to-r from-red-700 to-red-600 text-white px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="h-2 w-2 bg-white/90 rounded-full" />
                                  <span className="text-[15px] font-bold tracking-wide">{label}</span>
                                </div>
                              </div>
                              <div className="py-2 px-3">
                                {sub.map((item, i) => (
                                  <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.02 }}
                                  >
                                    <Link
                                      href={item.href}
                                      className="group/item flex items-center gap-3 px-4 py-3.5 text-[14px] text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300 mx-1 my-1"
                                      onMouseEnter={() => setHoverMenu(label)}
                                    >
                                      <div className="h-2 w-2 rounded-full bg-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                      <span className="font-semibold flex-1">{item.label}</span>
                                      <ChevronDown className="h-3.5 w-3.5 text-gray-400 -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Get Quote Button - Opens Form */}
            <div className="hidden lg:flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="group relative px-8 py-3.5 bg-gradient-to-r from-red-700 to-red-600 text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-center gap-3 text-[15px] tracking-wide">
                    <span>Get Free Quote</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                className="relative p-3 rounded-xl hover:bg-red-50 transition-all duration-300 group"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <div className="relative z-10">
                  {mobileOpen ? (
                    <X className="h-7 w-7 text-gray-800 group-hover:scale-110 transition-transform" />
                  ) : (
                    <Menu className="h-7 w-7 text-gray-800 group-hover:scale-110 transition-transform" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Quote Request Form Modal */}
        <AnimatePresence>
          {showQuoteForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            >
              <motion.div
                ref={formRef}
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="sticky top-0 bg-gradient-to-r from-red-700 to-red-600 text-white p-6 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">Request Free Quote</h2>
                      <p className="text-red-100 mt-1">Get customized pricing for your requirements</p>
                    </div>
                    <button
                      onClick={() => setShowQuoteForm(false)}
                      className="p-2 rounded-full hover:bg-white/20 transition"
                    >
                      <XCircle className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                      >
                        <option value="">Select a service</option>
                        <option value="Connectivity Solutions">Connectivity Solutions</option>
                        <option value="Software Solutions">Software Solutions</option>
                        <option value="Technology Solutions">Technology Solutions</option>
                        <option value="Managed Services">Managed Services</option>
                        <option value="Multiple Services">Multiple Services</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Requirements *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                        placeholder="Describe your project requirements, timeline, and budget..."
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      We'll respond within 24 hours
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white font-bold rounded-lg hover:from-red-800 hover:to-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        'Submit Quote Request'
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="lg:hidden fixed inset-0 top-24 bg-white z-40 overflow-y-auto"
            >
              <div className="container mx-auto px-4 sm:px-6 py-8">
                {/* Mobile Menu Items */}
                <div className="space-y-2">
                  {menuItems.map(({ label, href, sub }) => {
                    const isActive = activeMobileMenu === label;
                    const hasSubmenu = sub.length > 0;

                    return (
                      <div key={label} className="mb-3">
                        <div className="flex flex-col">
                          <Link
                            href={href}
                            className="group relative flex justify-between items-center px-5 py-4 text-gray-800 font-bold text-[16px] rounded-2xl hover:bg-red-50 transition-all duration-300"
                            onClick={(e) => {
                              if (hasSubmenu) {
                                e.preventDefault();
                                setActiveMobileMenu(isActive ? null : label);
                              } else {
                                setMobileOpen(false);
                              }
                            }}
                          >
                            <div className="relative flex items-center gap-4">
                              <div className={`h-3 w-3 rounded-full transition-all ${
                                isActive 
                                  ? "bg-red-600 scale-125" 
                                  : "bg-gray-300 group-hover:bg-red-400"
                              }`} />
                              <span className="text-[16px] font-semibold">{label}</span>
                            </div>
                            {hasSubmenu && (
                              <ChevronDown
                                className={`relative h-5 w-5 transition-all duration-500 ${
                                  isActive 
                                    ? "rotate-180 text-red-600" 
                                    : "text-gray-400 group-hover:text-red-500"
                                }`}
                              />
                            )}
                          </Link>

                          {/* Mobile Submenu */}
                          <AnimatePresence>
                            {hasSubmenu && isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, type: "spring" }}
                                className="overflow-hidden"
                              >
                                <div className="pl-12 ml-3 mt-3 border-l-2 border-red-200 space-y-2 py-3">
                                  {sub.map((item) => (
                                    <motion.div
                                      key={item.label}
                                      initial={{ x: -20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ type: "spring", stiffness: 400 }}
                                    >
                                      <Link
                                        href={item.href}
                                        className="group/item flex items-center gap-4 px-5 py-3.5 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        <div className="h-2 w-2 rounded-full bg-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                        <span className="text-[15px] font-medium flex-1">{item.label}</span>
                                        <ChevronDown className="h-4 w-4 text-gray-400 -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all" />
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Quote Button */}
                <div className="mt-10 px-4">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        setShowQuoteForm(true);
                      }}
                      className="w-full py-5 bg-gradient-to-r from-red-700 to-red-600 text-white font-bold text-center rounded-2xl hover:shadow-2xl transition-all duration-500 text-lg"
                    >
                      Get Free Quote
                    </button>
                  </motion.div>
                  
                  {/* Contact Info */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">24/7 Support</div>
                          <div className="text-lg font-bold text-gray-800">+92 21 3456 7890</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Email Us</div>
                          <div className="text-lg font-bold text-gray-800">info@sharptel.pk</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Location</div>
                          <div className="text-lg font-bold text-gray-800">Karachi, Pakistan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}