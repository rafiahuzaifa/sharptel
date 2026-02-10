"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-extrabold gradient-text block">
              Sharptel
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Innovative ICT & Connectivity Solutions – Empowering enterprises with reliable, secure, and future-ready telecom services across Pakistan.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5">
              <a
                href="https://www.facebook.com/SharpTel.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://pk.linkedin.com/company/sharp-telecom-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              {/* Add Instagram/Twitter/X if available */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "events", href: "/events" },
                { label: "About", href: "/About-us" },
                { label: "Contact", href: "/Contact-us" },
                { label: "Career", href: "/career" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Highlights */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Key Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Enterprise Internet</li>
              <li className="text-gray-400">Cyber Security</li>
              <li className="text-gray-400">Data Center & Colocation</li>
              <li className="text-gray-400">Wi-Fi & Hotspot</li>
              <li className="text-gray-400">Voice Over IP (VoIP)</li>
              <li className="text-gray-400">Managed Services</li>
            </ul>
          </div>

          {/* Contact & Offices */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>

            {/* Emails */}
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-400">Customer Care: info@sharptel.pk</p>
                <p className="text-gray-400">Support: servicedesk@sharptel.pk</p>
                <p className="text-gray-400">Careers: careers@sharptel.pk</p>
              </div>
            </div>

            {/* Phones */}
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-400">Sales: +92-311-1123104 / +92-311-1123105</p>
                <p className="text-gray-400">Support: +92-311-128-4373</p>
              </div>
            </div>

            {/* Head Office (Karachi focus) */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-400 font-medium">Head Office (Karachi)</p>
                <p className="text-gray-400 text-sm">
                  Office 104 & 105, 1st Floor, Plot #54-C, Al-Murtaza Commercial Lane-2, DHA Phase VIII, Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          <p>© {currentYear} Sharp Communications (Pvt.) Ltd. | All Rights Reserved.</p>
          <div className="mt-2 flex justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-primary-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-primary-500 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}