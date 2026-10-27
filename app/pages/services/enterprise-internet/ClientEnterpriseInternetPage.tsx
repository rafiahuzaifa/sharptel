'use client'

import { Shield, Clock, ShieldCheck, LineChart, Server, Headphones } from 'lucide-react'
import ServiceDetail from '@/app/components/premium/ServiceDetail'

export default function ClientEnterpriseInternetPage() {
  return (
    <ServiceDetail
      name="Enterprise Internet"
      eyebrow="Dedicated Connectivity"
      title="Enterprise Internet"
      accent="Solutions"
      subtitle="High-speed dedicated internet connectivity with SLA guarantees for businesses requiring reliable, secure, and high-performance internet access."
      image="/background/enterprise-internet-bg.webp"
      stats={[
        { number: "10Mbps - 1Gbps", label: "Bandwidth Options" },
        { number: "99.9%", label: "Uptime SLA" },
        { number: "< 10ms", label: "Latency" },
        { number: "24/7", label: "Support" },
      ]}
      overview={[
        "Sharptel Enterprise Internet provides dedicated, high-speed internet connectivity solutions designed specifically for businesses. Our enterprise-grade internet ensures reliable, secure, and high-performance connectivity for your critical business operations.",
        "With our dedicated fiber optic connections, you get guaranteed bandwidth that is not shared with other users, ensuring consistent performance even during peak hours. Our 99.9% uptime SLA guarantees maximum availability for your business operations.",
      ]}
      features={[
        { icon: ShieldCheck, title: "Dedicated Bandwidth", description: "Guaranteed bandwidth allocation not shared with other users" },
        { icon: Clock, title: "99.9% Uptime SLA", description: "Service Level Agreement ensuring maximum availability" },
        { icon: Shield, title: "Advanced Security", description: "Enterprise-grade security with DDoS protection" },
        { icon: LineChart, title: "Performance Monitoring", description: "24/7 network performance monitoring and optimization" },
        { icon: Server, title: "Redundant Connections", description: "Multiple fiber paths for maximum reliability" },
        { icon: Headphones, title: "Dedicated Support", description: "24/7 technical support with dedicated account manager" },
      ]}
      optionsTitle="Business Benefits"
      benefits={[
        "Increased employee productivity with reliable internet access",
        "Enhanced customer experience through faster online services",
        "Secure business operations with enterprise-grade security",
        "Cost-effective solutions with predictable monthly costs",
        "Scalable bandwidth to grow with your business needs",
        "Competitive advantage with superior connectivity",
      ]}
      quickInfo={[
        { label: "Bandwidth Range", value: "10Mbps - 1Gbps" },
        { label: "Connection Type", value: "Fiber Optic" },
        { label: "Installation Time", value: "7-14 Days" },
        { label: "Support Level", value: "24/7 Premium" },
      ]}
      idealFor={[
        "Corporate Offices & Headquarters",
        "Banking & Financial Institutions",
        "Educational Institutes & Universities",
        "Healthcare Facilities & Hospitals",
        "E-commerce & Online Businesses",
        "Call Centers & BPOs",
        "Manufacturing Units",
        "Government Offices",
      ]}
      specsTitle="Technical Specifications"
      specs={[
        { label: "Technology", value: "Fiber Optic" },
        { label: "Latency", value: "< 10ms" },
        { label: "Jitter", value: "< 5ms" },
        { label: "Packet Loss", value: "< 0.1%" },
      ]}
      resourcesTitle="Documentation"
      resources={["Service Level Agreement", "Technical Specifications", "Pricing Plans"]}
      cta={{
        title: "Ready for enterprise-grade",
        accent: "internet?",
        text: "Get reliable, high-speed internet connectivity for your business. Contact us for a free consultation and customized solution.",
      }}
    />
  )
}
