"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/About-us" },
  { label: "Contact", href: "/Contact-us" },
  { label: "Career", href: "/career" },
];

const services = [
  "Enterprise Internet",
  "Cyber Security",
  "Data Center & Colocation",
  "Wi-Fi & Hotspot",
  "Voice Over IP (VoIP)",
  "Managed Services",
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/SharpTel.pk", icon: Facebook },
  { label: "LinkedIn", href: "https://pk.linkedin.com/company/sharp-telecom-private-limited", icon: Linkedin },
];

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-gray-950 text-gray-400">
      <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <div className="container mx-auto px-6 pb-10 pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="mb-6 inline-flex items-baseline font-heading text-3xl font-semibold text-white" style={{ letterSpacing: "-0.04em" }}>
              Sharptel<span className="text-red-600">.</span>
            </Link>
            <p className="mb-8 max-w-sm leading-relaxed">
              Innovative ICT &amp; Connectivity Solutions — empowering enterprises with reliable, secure, and future-ready telecom services across Pakistan.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-white">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-flex items-center gap-1 transition-colors hover:text-white">
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-white">Key Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5 lg:col-span-3">
            <h4 className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-white">Contact</h4>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
              <div className="space-y-1 text-sm">
                <p>Customer Care: <a href="mailto:info@sharptel.pk" className="text-gray-300 hover:text-white">info@sharptel.pk</a></p>
                <p>Support: <a href="mailto:servicedesk@sharptel.pk" className="text-gray-300 hover:text-white">servicedesk@sharptel.pk</a></p>
                <p>Careers: <a href="mailto:careers@sharptel.pk" className="text-gray-300 hover:text-white">careers@sharptel.pk</a></p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
              <div className="space-y-1 text-sm">
                <p>Sales: +92-311-1123104 / +92-311-1123105</p>
                <p>Support: +92-311-128-4373</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
              <div className="text-sm">
                <p className="font-medium text-gray-300">Head Office (Karachi)</p>
                <p>Office 104 &amp; 105, 1st Floor, Plot #54-C, Al-Murtaza Commercial Lane-2, DHA Phase VIII, Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div
          aria-hidden
          className="pointer-events-none mt-20 select-none bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text text-center font-heading text-[18vw] font-semibold leading-[0.8] text-transparent lg:text-[14rem]"
          style={{ letterSpacing: "-0.06em" }}
        >
          SHARPTEL
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© {currentYear} Sharp Communications (Pvt.) Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/Contact-us" className="transition-colors hover:text-white">
              Contact
            </Link>
            <Link href="/career" className="transition-colors hover:text-white">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
