'use client'

import { Battery, Thermometer, ShieldCheck, Cloud, Lock, Cpu } from 'lucide-react'
import ServiceDetail from '@/app/components/premium/ServiceDetail'

export default function ClientInternetDataCenterPage() {
  return (
    <ServiceDetail
      name="Internet Data Center"
      eyebrow="Tier III Infrastructure"
      title="Internet Data Center"
      accent="(IDC) Services"
      subtitle="Secure, reliable, and scalable data center solutions with 99.99% uptime guarantee for your critical business applications and infrastructure."
      image="/background/datacenter-bg.webp"
      stats={[
        { number: "99.99%", label: "Uptime SLA" },
        { number: "N+1", label: "Redundancy" },
        { number: "Tier III", label: "Design" },
        { number: "24/7", label: "Security" },
      ]}
      overview={[
        "Sharptel Internet Data Center (IDC) provides enterprise-grade data center services with maximum reliability, security, and scalability. Our Tier III designed facilities ensure your critical business applications run seamlessly with 99.99% uptime guarantee.",
        "Our data centers feature redundant power systems, advanced cooling, multi-layer security, and carrier-neutral connectivity. Whether you need colocation, dedicated servers, or managed hosting, we provide the infrastructure and expertise to support your business growth.",
      ]}
      featuresTitle="Infrastructure Features"
      features={[
        { icon: Battery, title: "Redundant Power", description: "N+1 UPS systems with generator backup" },
        { icon: Thermometer, title: "Climate Control", description: "Precision cooling with N+1 redundancy" },
        { icon: ShieldCheck, title: "Physical Security", description: "Biometric access, CCTV, 24/7 guards" },
        { icon: Cloud, title: "Network Redundancy", description: "Multiple ISPs with BGP routing" },
        { icon: Lock, title: "Fire Protection", description: "VESDA fire detection and suppression" },
        { icon: Cpu, title: "Monitoring", description: "24/7 infrastructure monitoring" },
      ]}
      optionsTitle="Service Options"
      options={[
        { title: "Colocation Services", features: ["Rack space rental (1U to full rack)", "Power and cooling included", "Remote hands support", "Bandwidth options"] },
        { title: "Dedicated Servers", features: ["Enterprise-grade hardware", "Custom configurations", "Managed and unmanaged options", "24/7 hardware support"] },
        { title: "Managed Hosting", features: ["Full server management", "Security updates and patches", "Backup and recovery", "Performance monitoring"] },
        { title: "Cloud Services", features: ["Virtual private servers", "Storage solutions", "Disaster recovery", "Hybrid cloud options"] },
      ]}
      quickInfo={[
        { label: "Design Standard", value: "Tier III" },
        { label: "Uptime SLA", value: "99.99%" },
        { label: "Power Density", value: "Up to 10kW/rack" },
        { label: "Support Level", value: "24/7 Premium" },
      ]}
      checklist={{
        title: "Compliance",
        items: [
          "ISO 27001:2013 Certified",
          "PCI DSS Compliant",
          "Uptime Institute Tier III",
          "Local Regulatory Compliance",
          "GDPR Ready Infrastructure",
          "Business Continuity Certified",
        ],
      }}
      idealFor={[
        "Web Hosting Companies",
        "E-commerce Platforms",
        "Financial Institutions",
        "Healthcare Providers",
        "Government Agencies",
        "Enterprise Applications",
        "Disaster Recovery",
        "Cloud Service Providers",
      ]}
      resources={["Data Center Specifications", "Pricing Calculator", "Compliance Documents"]}
      cta={{
        title: "Secure your digital",
        accent: "infrastructure",
        text: "Trust your critical business applications with our enterprise-grade data center solutions. Get a free consultation and data center tour.",
      }}
    />
  )
}
