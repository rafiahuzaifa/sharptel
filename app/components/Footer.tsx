"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Linkedin, Instagram, Twitter, Youtube, Globe, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Field, useCmsList } from "./cms";
import { GLOBAL_SCOPE } from "@/lib/cms-shared";

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
  { label: "Facebook", href: "https://www.facebook.com/SharpTel.pk" },
  { label: "LinkedIn", href: "https://pk.linkedin.com/company/sharp-telecom-private-limited" },
];

const emails = [
  { label: "Customer Care", value: "info@sharptel.pk" },
  { label: "Support", value: "servicedesk@sharptel.pk" },
  { label: "Careers", value: "careers@sharptel.pk" },
];

const phones = [
  { label: "Sales", value: "+92-311-1123104 / +92-311-1123105" },
  { label: "Support", value: "+92-311-128-4373" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

/** Social icons are picked from the network name so admin-added links get the right icon. */
function socialIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("facebook")) return Facebook;
  if (l.includes("linkedin")) return Linkedin;
  if (l.includes("instagram")) return Instagram;
  if (l.includes("twitter") || l === "x") return Twitter;
  if (l.includes("youtube")) return Youtube;
  return Globe;
}

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const cmsQuickLinks = useCmsList("footer", "links", "Company links", quickLinks, GLOBAL_SCOPE);
  const cmsServices = useCmsList("footer", "services", "Key services", services, GLOBAL_SCOPE);
  const cmsSocials = useCmsList("footer", "socials", "Social links", socials, GLOBAL_SCOPE);
  const cmsEmails = useCmsList("footer", "emails", "Emails", emails, GLOBAL_SCOPE);
  const cmsPhones = useCmsList("footer", "phones", "Phone numbers", phones, GLOBAL_SCOPE);
  const cmsLegal = useCmsList("footer", "legal", "Bottom links", legalLinks, GLOBAL_SCOPE);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-gray-950 text-gray-400">
      <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <div className="container mx-auto px-6 pb-10 pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="mb-6 inline-flex items-baseline font-heading text-3xl font-semibold text-white" style={{ letterSpacing: "-0.04em" }}>
              <Field name="brand">Sharptel</Field>
              <span className="text-red-600">.</span>
            </Link>
            <p className="mb-8 max-w-sm leading-relaxed">
              <Field name="about">
                Innovative ICT &amp; Connectivity Solutions — empowering enterprises with reliable, secure, and future-ready telecom services across Pakistan.
              </Field>
            </p>
            <div className="flex gap-3">
              {cmsSocials.map(({ label, href }, i) => {
                const Icon = socialIcon(label);
                return (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all hover:border-red-600 hover:bg-red-600 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-white">
              <Field name="linksTitle">Company</Field>
            </h4>
            <ul className="space-y-3">
              {cmsQuickLinks.map((item, i) => (
                <li key={i}>
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
            <h4 className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-white">
              <Field name="servicesTitle">Key Services</Field>
            </h4>
            <ul className="space-y-3">
              {cmsServices.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5 lg:col-span-3">
            <h4 className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-white">
              <Field name="contactTitle">Contact</Field>
            </h4>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
              <div className="space-y-1 text-sm">
                {cmsEmails.map((e, i) => (
                  <p key={i}>
                    {e.label}:{" "}
                    <a href={`mailto:${e.value}`} className="text-gray-300 hover:text-white">
                      {e.value}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
              <div className="space-y-1 text-sm">
                {cmsPhones.map((p, i) => (
                  <p key={i}>
                    {p.label}: {p.value}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
              <div className="text-sm">
                <p className="font-medium text-gray-300">
                  <Field name="officeTitle">Head Office (Karachi)</Field>
                </p>
                <p>
                  <Field name="officeAddress">
                    Office 104 &amp; 105, 1st Floor, Plot #54-C, Al-Murtaza Commercial Lane-2, DHA Phase VIII, Karachi, Pakistan
                  </Field>
                </p>
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
          <Field name="wordmark">SHARPTEL</Field>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>
            © {currentYear} <Field name="copyright">Sharp Communications (Pvt.) Ltd. All rights reserved.</Field>
          </p>
          <div className="flex gap-6">
            {cmsLegal.map((l, i) => (
              <Link key={i} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
