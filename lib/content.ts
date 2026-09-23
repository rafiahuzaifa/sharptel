import { put, list } from "@vercel/blob";

const CONTENT_KEY = "site-content.json";

export interface HeroStat {
  number: number;
  suffix: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
  image: string;
  href: string;
}

export interface CapabilityItem {
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

export interface IndustryItem {
  title: string;
  desc: string;
  image: string;
}

export interface ContactLine {
  label: string;
  value: string;
  href?: string;
}

export interface SiteContent {
  hero: {
    badge: string;
    words: string[];
    subtitle: string;
    backgrounds: string[];
    stats: HeroStat[];
  };
  services: ServiceItem[];
  capabilities: CapabilityItem[];
  about: {
    paragraph: string;
    highlights: string[];
    visionText: string;
    missionText: string;
    teamImage: string;
    yearsExperience: string;
    happyClients: string;
  };
  testimonials: TestimonialItem[];
  industries: IndustryItem[];
  contact: {
    emails: ContactLine[];
    phones: ContactLine[];
    offices: ContactLine[];
    businessHours: string;
    supportAvailability: string;
  };
}

export interface PageEntry {
  path: string;
  label: string;
  group: string;
}

export const ALL_PAGES: PageEntry[] = [
  { path: "/", label: "Home", group: "Main" },
  { path: "/About-us", label: "About Us", group: "Main" },
  { path: "/Contact-us", label: "Contact Us", group: "Main" },
  { path: "/career", label: "Career", group: "Main" },
  { path: "/events", label: "Events", group: "Main" },
  { path: "/connectivity-solutions", label: "Connectivity Solutions (Hub)", group: "Connectivity Solutions" },
  { path: "/connectivity-solutions/banking-enterprise", label: "Banking Enterprise", group: "Connectivity Solutions" },
  { path: "/connectivity-solutions/call-service", label: "Call Center Services", group: "Connectivity Solutions" },
  { path: "/connectivity-solutions/coverage-area", label: "Coverage Areas", group: "Connectivity Solutions" },
  { path: "/connectivity-solutions/data-solutions", label: "Data Solutions", group: "Connectivity Solutions" },
  { path: "/connectivity-solutions/enterprise-solutions", label: "Enterprise Internet", group: "Connectivity Solutions" },
  { path: "/connectivity-solutions/satellite-service", label: "Satellite Service", group: "Connectivity Solutions" },
  { path: "/connectivity-solutions/wireless-connectivity", label: "Wireless Connectivity", group: "Connectivity Solutions" },
  { path: "/software-solutions", label: "Software Solutions (Hub)", group: "Software Solutions" },
  { path: "/software-solutions/crm-erp-solution", label: "CRM/ERP Customization", group: "Software Solutions" },
  { path: "/software-solutions/digital-marketing", label: "Digital Marketing", group: "Software Solutions" },
  { path: "/software-solutions/graphic-designing", label: "Graphic Designing", group: "Software Solutions" },
  { path: "/software-solutions/mobile-app-devlopment", label: "Mobile App Development", group: "Software Solutions" },
  { path: "/software-solutions/prototype-devlopment", label: "Prototype Development", group: "Software Solutions" },
  { path: "/software-solutions/webdevlopment", label: "Web Development", group: "Software Solutions" },
  { path: "/technology-solutions", label: "Technology Solutions (Hub)", group: "Technology Solutions" },
  { path: "/technology-solutions/cyber-security", label: "Cyber Security", group: "Technology Solutions" },
  { path: "/technology-solutions/data-center", label: "Data Center", group: "Technology Solutions" },
  { path: "/technology-solutions/energy-conversation", label: "Energy Conservation", group: "Technology Solutions" },
  { path: "/technology-solutions/hotspot-wifi", label: "Hotspot Wi-Fi", group: "Technology Solutions" },
  { path: "/technology-solutions/iot-automation", label: "IoT & Automation", group: "Technology Solutions" },
  { path: "/technology-solutions/network-assesment", label: "Network Assessment", group: "Technology Solutions" },
  { path: "/technology-solutions/survellience-soluition", label: "Surveillance & Security", group: "Technology Solutions" },
  { path: "/technology-solutions/virtual-solution", label: "Virtual Private Server", group: "Technology Solutions" },
  { path: "/technology-solutions/voice-over", label: "Voice Over IP", group: "Technology Solutions" },
  { path: "/manage-technology", label: "Managed Services (Hub)", group: "Managed Services" },
  { path: "/manage-technology/cloud-solutions", label: "Cloud & Communications", group: "Managed Services" },
  { path: "/manage-technology/it-bpo-solutions", label: "IT & BPO Services", group: "Managed Services" },
  { path: "/manage-technology/manage-it-service", label: "Managed IT Services", group: "Managed Services" },
  { path: "/manage-technology/manage-network-solutions", label: "Managed Network Services", group: "Managed Services" },
  { path: "/manage-technology/manage-security-service", label: "Managed Security Services", group: "Managed Services" },
  { path: "/pages/products", label: "Products", group: "Other" },
  { path: "/pages/services", label: "Services Overview", group: "Other" },
  { path: "/pages/services/audio-video-conferencing", label: "Audio Video Conferencing", group: "Other" },
  { path: "/pages/services/call-center-solution", label: "Call Center Solution", group: "Other" },
  { path: "/pages/services/data-services", label: "Data Security & Business Continuity", group: "Other" },
  { path: "/pages/services/enterprise-internet", label: "Enterprise Internet (Services)", group: "Other" },
  { path: "/pages/services/internet-data-center", label: "Internet Data Center", group: "Other" },
  { path: "/pages/services/leased-line", label: "Leased Line", group: "Other" },
  { path: "/pages/solutions", label: "Solutions Overview", group: "Other" },
];

export type PageVisibility = Record<string, boolean>;

export interface AdminData {
  content: SiteContent;
  pageVisibility: PageVisibility;
}

export const defaultContent: SiteContent = {
  hero: {
    badge: "Enterprise Solutions",
    words: ["Digital Connectivity", "Business Growth", "Smart Solutions", "Future Networks"],
    subtitle:
      "Next-generation telecom & ICT solutions built with innovation, reliability, and uncompromising integrity.",
    backgrounds: [
      "/background/OIP.webp",
      "/background/fiber-trails.webp",
      "/background/data-flow.webp",
      "/background/connectivity.webp",
    ],
    stats: [
      { number: 500, suffix: "+", label: "Clients Served" },
      { number: 50, suffix: "+", label: "Tech Partners" },
      { number: 99.9, suffix: "%", label: "Uptime SLA" },
      { number: 24, suffix: "/7", label: "Support" },
    ],
  },
  services: [
    { title: "Enterprise Internet", desc: "High-speed, reliable dedicated internet with CIR over fiber & microwave for mission-critical operations.", image: "/background/enterprise-internet-bg.webp", href: "/connectivity-solutions/enterprise-solutions" },
    { title: "Data Solutions", desc: "MPLS, Layer-2 transport, dark fiber, and advanced data connectivity tailored to your bandwidth needs.", image: "/background/data-solutions.webp", href: "/connectivity-solutions/data-solutions" },
    { title: "Wireless Services", desc: "Robust LTE/4G/5G private networks, wireless broadband, and hotspot solutions for mobility.", image: "/background/wireless-services.jpg", href: "/connectivity-solutions/wireless-connectivity" },
    { title: "Banking Enterprise", desc: "Secure, compliant connectivity designed specifically for financial institutions and banking operations.", image: "/background/banking-enterprise.jpeg", href: "/connectivity-solutions/banking-enterprise" },
    { title: "Call Center Services", desc: "Scalable VoIP-based call center infrastructure with high uptime and quality voice solutions.", image: "/background/call-center.webp", href: "/connectivity-solutions/call-service" },
    { title: "Cyber Security", desc: "Advanced threat protection, firewalls, endpoint security, and proactive cyber defense for enterprises.", image: "/background/cyber-security.webp", href: "/technology-solutions/cyber-security" },
    { title: "Data Center & Colocation", desc: "Tier-3 certified data centers with colocation, power redundancy, and 24/7 monitoring.", image: "/background/data-center.webp", href: "/technology-solutions/data-center" },
    { title: "Wi-Fi & Hotspot", desc: "Enterprise-grade managed Wi-Fi, event hotspots, offloading, and cloud-controlled access points.", image: "/background/wifi-hotspot.webp", href: "/technology-solutions/hotspot-wifi" },
    { title: "IoT & Automation", desc: "IoT connectivity, smart automation, sensors, and integration for industrial & smart city applications.", image: "/background/iot-automation.webp", href: "/technology-solutions/iot-automation" },
    { title: "Voice Over IP (VoIP)", desc: "Hosted PBX, unified communications, scalable VoIP solutions to reduce costs and improve collaboration.", image: "/background/voip.webp", href: "/technology-solutions/voice-over" },
    { title: "Managed Services", desc: "End-to-end IT/network/security management, NOC, backup, and disaster recovery for peace of mind.", image: "/background/managed-services.webp", href: "/manage-technology" },
    { title: "Satellite Service", desc: "High-speed satellite internet for remote/rural areas with low latency and reliable coverage.", image: "/background/satellite-service.webp", href: "/connectivity-solutions/satellite-service" },
  ],
  capabilities: [
    { title: "Global Presence", desc: "International clients, satisfied global clientele, swift reply & well-trained professionals.", stat: "15+", statLabel: "Countries" },
    { title: "Skilled Resources", desc: "Qualified project managers, certified engineers & industry-specific knowledge.", stat: "200+", statLabel: "Engineers" },
    { title: "Technology Partners", desc: "Multiple technology partners, training & certification by manufacturers, implementation support.", stat: "50+", statLabel: "Partners" },
    { title: "Local Presence", desc: "Presence across Pakistan, fully staffed project office at site.", stat: "4+", statLabel: "Cities" },
    { title: "Security First", desc: "Enterprise-grade security solutions with ISO-compliant infrastructure and 24/7 monitoring.", stat: "99.9%", statLabel: "Uptime" },
    { title: "Fast Deployment", desc: "Rapid project execution with agile methodologies and dedicated project management teams.", stat: "48hr", statLabel: "Response" },
  ],
  about: {
    paragraph:
      "SharpTel services are vital to the successful implementation and integration of technology-related projects. SharpTel has a vision of indulging our customers with a diversified portfolio of Software Services, Connectivity, Data Center and Colocation, Information Security, IT Security, automation services through state-of-the-art technology solutions.",
    highlights: ["ISO Certified Operations", "24/7 Network Operations Center", "Tier-3 Data Center Infrastructure", "Pan-Pakistan Coverage"],
    visionText: "To provide quality services that exceeds the expectations of our esteemed customers.",
    missionText: "To empower businesses by providing next generation ICT solutions and services to be used as a competitive advantage.",
    teamImage: "/background/team.webp",
    yearsExperience: "10+",
    happyClients: "500+",
  },
  testimonials: [
    {
      quote:
        "SharpTel provides professional & accommodating service as a best source for all of the information you are looking for. Technician are skilled, knowledgeable & friendly. We find SharpTel as the best deal for the service received.",
      author: "Mr. Naghman Ahsan",
      position: "Technical Manager",
      company: "ETIHAD LUBE OIL COMPANY (PVT) LTD.",
      rating: 5,
    },
    {
      quote:
        "Dear SharpTel Team, I wanted to let you know how much I appreciated your help and support with the different projects. I know how much time and effort the team invested... You are a valued member of our company team.",
      author: "Mr. Kashif Rehman",
      position: "Manager Admin",
      company: "Rozee.pk",
      rating: 5,
    },
    {
      quote:
        "I am pleased to recommend the internet services provided by Sharp Telecom (Pvt) Ltd. The speed service is excellent and the best in the market. We have had no complaints in the last one year.",
      author: "Mr. Syed Faraz Ali",
      position: "AVP",
      company: "Al-Baraka Bank Pakistan",
      rating: 5,
    },
  ],
  industries: [
    { title: "Government Sector", desc: "Secure infrastructure & digital transformation for public institutions.", image: "/background/gov.webp" },
    { title: "Enterprise Sector", desc: "Scalable connectivity & IT solutions for large corporations.", image: "/background/enterprise.webp" },
    { title: "Financial Sector", desc: "Compliant, high-security networks for banks & financial services.", image: "/background/financial.webp" },
    { title: "Small & Medium Enterprise", desc: "Affordable, reliable tech solutions tailored for growing businesses.", image: "/background/sme.webp" },
    { title: "Defense Sector", desc: "Mission-critical communications & encrypted secure networks.", image: "/background/defence.webp" },
  ],
  contact: {
    emails: [
      { label: "Customer Care", value: "info@sharptel.pk", href: "mailto:info@sharptel.pk" },
      { label: "Support", value: "servicedesk@sharptel.pk", href: "mailto:servicedesk@sharptel.pk" },
      { label: "Careers", value: "careers@sharptel.pk", href: "mailto:careers@sharptel.pk" },
    ],
    phones: [
      { label: "Sales", value: "+92-311-1123104", href: "tel:+923111123104" },
      { label: "Sales", value: "+92-311-1123105", href: "tel:+923111123105" },
      { label: "Support", value: "+92-311-128-4373", href: "tel:+923111284373" },
    ],
    offices: [
      { label: "Head Office (Karachi)", value: "DHA Phase VIII" },
      { label: "Islamabad", value: "F-8 Markaz" },
      { label: "Lahore", value: "Main Boulevard" },
      { label: "AJK", value: "Mirpur" },
    ],
    businessHours: "Monday - Saturday: 9:00 AM - 6:00 PM",
    supportAvailability: "Support: 24/7 Available",
  },
};

export const defaultPageVisibility: PageVisibility = Object.fromEntries(
  ALL_PAGES.map((p) => [p.path, true])
);

function mergeContent(partial: Partial<SiteContent> | null | undefined): SiteContent {
  if (!partial) return defaultContent;
  return {
    hero: { ...defaultContent.hero, ...partial.hero },
    services: partial.services?.length ? partial.services : defaultContent.services,
    capabilities: partial.capabilities?.length ? partial.capabilities : defaultContent.capabilities,
    about: { ...defaultContent.about, ...partial.about },
    testimonials: partial.testimonials?.length ? partial.testimonials : defaultContent.testimonials,
    industries: partial.industries?.length ? partial.industries : defaultContent.industries,
    contact: { ...defaultContent.contact, ...partial.contact },
  };
}

export async function getAdminData(): Promise<AdminData> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return { content: defaultContent, pageVisibility: defaultPageVisibility };
  }
  try {
    const { blobs } = await list({ prefix: CONTENT_KEY, limit: 1 });
    const match = blobs.find((b) => b.pathname === CONTENT_KEY);
    if (!match) {
      return { content: defaultContent, pageVisibility: defaultPageVisibility };
    }
    const res = await fetch(match.url, { cache: "no-store" });
    if (!res.ok) return { content: defaultContent, pageVisibility: defaultPageVisibility };
    const data = await res.json();
    return {
      content: mergeContent(data.content),
      pageVisibility: { ...defaultPageVisibility, ...(data.pageVisibility || {}) },
    };
  } catch (err) {
    console.error("getAdminData error:", err);
    return { content: defaultContent, pageVisibility: defaultPageVisibility };
  }
}

export async function saveAdminData(data: AdminData): Promise<void> {
  await put(CONTENT_KEY, JSON.stringify(data, null, 2), {
    access: "public",
    contentType: "application/json",
    allowOverwrite: true,
  });
}

export async function getSiteContent(): Promise<SiteContent> {
  const { content } = await getAdminData();
  return content;
}

export async function getPageVisibility(): Promise<PageVisibility> {
  const { pageVisibility } = await getAdminData();
  return pageVisibility;
}
