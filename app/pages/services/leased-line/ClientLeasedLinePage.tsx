'use client'

import { Clock, Lock, LineChart, Headphones, ShieldCheck, Server } from 'lucide-react'
import ServiceDetail from '@/app/components/premium/ServiceDetail'

export default function ClientLeasedLinePage() {
  return (
    <ServiceDetail
      name="Leased Line"
      eyebrow="Dedicated Connectivity"
      title="Leased Line"
      accent="Services"
      subtitle="Point-to-point dedicated connectivity solutions with guaranteed bandwidth, low latency, and high security for mission-critical business applications."
      image="/background/fiber-trails.webp"
      stats={[
        { number: "2Mbps - 10Gbps", label: "Bandwidth Range" },
        { number: "< 5ms", label: "Latency" },
        { number: "99.95%", label: "Uptime SLA" },
        { number: "24/7", label: "Monitoring" },
      ]}
      overview={[
        "Sharptel Leased Line services provide dedicated, point-to-point connectivity between your business locations with guaranteed bandwidth and superior performance. Our leased lines are ideal for businesses requiring reliable, secure, and high-performance connectivity for critical applications.",
        "Unlike shared internet connections, leased lines provide exclusive bandwidth for your organization, ensuring consistent performance regardless of network traffic. With our 99.95% uptime SLA and 24/7 monitoring, you can trust your critical business operations to our reliable connectivity solutions.",
      ]}
      features={[
        { icon: ShieldCheck, title: "Guaranteed Bandwidth", description: "Dedicated bandwidth not shared with other users" },
        { icon: LineChart, title: "Low Latency", description: "Consistent low latency for real-time applications" },
        { icon: Lock, title: "High Security", description: "Private connection with enhanced security" },
        { icon: Clock, title: "99.95% Uptime SLA", description: "Service Level Agreement for maximum reliability" },
        { icon: Server, title: "Symmetric Speed", description: "Equal upload and download speeds" },
        { icon: Headphones, title: "Dedicated Support", description: "24/7 monitoring and technical support" },
      ]}
      optionsTitle="Business Applications"
      options={[
        { title: "Headquarter-Branch Connectivity", features: ["Secure data transfer between offices", "Unified communications", "Shared resources access", "Centralized management"] },
        { title: "Data Center Connectivity", features: ["High-speed data replication", "Disaster recovery connectivity", "Cloud access optimization", "Backup connectivity"] },
        { title: "Voice & Video Applications", features: ["High-quality VoIP services", "Video conferencing", "Unified communications", "Real-time collaboration"] },
        { title: "Mission-Critical Applications", features: ["ERP and CRM systems", "Financial transactions", "Healthcare applications", "Manufacturing systems"] },
      ]}
      quickInfo={[
        { label: "Bandwidth Range", value: "2Mbps - 10Gbps" },
        { label: "Technology", value: "Fiber Optic" },
        { label: "Installation Time", value: "15-30 Days" },
        { label: "Support Level", value: "24/7 Premium" },
      ]}
      idealFor={[
        "Banks & Financial Institutions",
        "Corporate Headquarters",
        "Call Centers & BPOs",
        "Manufacturing Plants",
        "Healthcare Facilities",
        "Educational Campuses",
        "Government Offices",
        "Data Centers",
      ]}
      specsTitle="Technical Specifications"
      specs={[
        { label: "Latency", value: "< 5ms" },
        { label: "Jitter", value: "< 1ms" },
        { label: "Packet Loss", value: "< 0.01%" },
        { label: "Availability", value: "99.95%" },
      ]}
      resources={["Service Level Agreement", "Pricing Calculator", "Technical Specifications"]}
      cta={{
        title: "Need dedicated",
        accent: "connectivity?",
        text: "Get reliable, high-performance leased line connectivity for your mission-critical applications. Contact us for a free consultation.",
      }}
    />
  )
}
