'use client'

import { Network, Server, Cloud, Database, AlertTriangle, Users } from 'lucide-react'
import ServiceDetail from '@/app/components/premium/ServiceDetail'

export default function ClientDataServicesPage() {
  return (
    <ServiceDetail
      name="Data Security & Business Continuity"
      eyebrow="Enterprise Security"
      title="Data Security &"
      accent="Business Continuity"
      subtitle="Comprehensive security solutions protecting your critical data and ensuring uninterrupted business operations with advanced threat protection."
      image="/background/security-services-bg.webp"
      stats={[
        { number: "99.9%", label: "Threat Detection" },
        { number: "< 5min", label: "Response Time" },
        { number: "24/7", label: "SOC Monitoring" },
        { number: "RTO: < 4hr", label: "Recovery Time" },
      ]}
      overview={[
        "Sharptel provides comprehensive data security and business continuity solutions that protect your organization from cyber threats while ensuring uninterrupted operations. Our multi-layered security approach safeguards your critical assets and data.",
        "We combine advanced threat protection, network security, endpoint security, and business continuity planning to create a robust security posture. Our Security Operations Center (SOC) provides 24/7 monitoring and rapid incident response.",
      ]}
      featuresTitle="Security Solutions"
      features={[
        { icon: Network, title: "Network Security", description: "Firewalls, intrusion prevention, and VPN solutions" },
        { icon: Server, title: "Endpoint Protection", description: "Advanced threat protection for all endpoints" },
        { icon: Cloud, title: "Cloud Security", description: "Security for cloud applications and infrastructure" },
        { icon: Database, title: "Data Protection", description: "Encryption, DLP, and data classification" },
        { icon: AlertTriangle, title: "Threat Intelligence", description: "Real-time threat detection and response" },
        { icon: Users, title: "Access Management", description: "Identity and access management solutions" },
      ]}
      optionsTitle="Business Continuity"
      options={[
        { title: "Disaster Recovery", features: ["Automated backup solutions", "Recovery Time Objective (RTO) < 4 hours", "Recovery Point Objective (RPO) < 1 hour", "Regular recovery testing"] },
        { title: "Backup Solutions", features: ["On-premise and cloud backup", "Incremental and full backups", "Encrypted backup storage", "Automated backup scheduling"] },
        { title: "Incident Response", features: ["24/7 Security Operations Center", "Rapid incident response team", "Forensic investigation", "Compliance reporting"] },
        { title: "Security Assessment", features: ["Vulnerability assessment", "Penetration testing", "Security audits", "Compliance checks"] },
      ]}
      quickInfo={[
        { label: "Threat Detection", value: "99.9%" },
        { label: "Response Time", value: "< 5 minutes" },
        { label: "Recovery Time", value: "< 4 hours" },
        { label: "SOC Monitoring", value: "24/7" },
      ]}
      checklist={{
        title: "Compliance Standards",
        items: ["ISO 27001", "PCI DSS", "GDPR", "HIPAA", "SOX", "NIST Framework", "Local Regulations", "Industry Standards"],
      }}
      idealFor={[
        "Banking & Financial Services",
        "Healthcare Organizations",
        "Government Agencies",
        "E-commerce Platforms",
        "Manufacturing Companies",
        "Educational Institutions",
        "IT Service Providers",
        "Any Business with Data",
      ]}
      resources={["Security Whitepaper", "Compliance Checklist", "Threat Report"]}
      cta={{
        title: "Secure your business",
        accent: "today",
        text: "Protect your critical data and ensure business continuity with our comprehensive security solutions. Get a free security assessment.",
      }}
    />
  )
}
