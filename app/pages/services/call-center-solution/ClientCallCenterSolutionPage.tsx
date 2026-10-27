'use client'

import { MessageSquare, Users, BarChart3, Cloud, Database, Shield } from 'lucide-react'
import ServiceDetail from '@/app/components/premium/ServiceDetail'

export default function ClientCallCenterSolutionPage() {
  return (
    <ServiceDetail
      name="Call Center Solution"
      eyebrow="Customer Engagement"
      title="Call Center"
      accent="Solutions"
      subtitle="Complete call center setup with advanced features, analytics, and integration capabilities for superior customer service and sales operations."
      image="/background/callcenter-bg.webp"
      stats={[
        { number: "99.9%", label: "System Uptime" },
        { number: "< 10sec", label: "Answer Time" },
        { number: "24/7", label: "Operations" },
        { number: "50+", label: "Integrations" },
      ]}
      overview={[
        "Sharptel provides complete call center solutions that transform your customer service and sales operations. Our solutions are designed to improve efficiency, enhance customer experience, and provide valuable insights through advanced analytics.",
        "From inbound customer support to outbound telemarketing, our call center solutions are scalable, feature-rich, and integrate seamlessly with your existing business systems. We offer both on-premise and cloud-based solutions to meet your specific requirements.",
      ]}
      features={[
        { icon: MessageSquare, title: "Interactive Voice Response (IVR)", description: "Multi-level IVR with custom greetings and routing" },
        { icon: Users, title: "Automatic Call Distribution", description: "Intelligent call routing based on skills and availability" },
        { icon: BarChart3, title: "Real-time Analytics", description: "Live dashboards and performance metrics" },
        { icon: Cloud, title: "Call Recording", description: "Automated call recording and storage" },
        { icon: Database, title: "CRM Integration", description: "Seamless integration with popular CRM systems" },
        { icon: Shield, title: "Security & Compliance", description: "PCI-DSS compliance and data security" },
      ]}
      optionsTitle="Solution Options"
      options={[
        { title: "Inbound Call Center", features: ["Customer support and helpdesk", "Order processing", "Technical support", "Complaint management"] },
        { title: "Outbound Call Center", features: ["Telemarketing and sales", "Customer surveys", "Appointment scheduling", "Collections"] },
        { title: "Blended Operations", features: ["Mixed inbound and outbound", "Agent flexibility", "Dynamic call allocation", "Skill-based routing"] },
        { title: "Omnichannel Contact Center", features: ["Voice, email, chat, social media", "Unified agent desktop", "Customer journey tracking", "Channel integration"] },
      ]}
      quickInfo={[
        { label: "Max Agents", value: "Unlimited" },
        { label: "Answer Time", value: "< 10 seconds" },
        { label: "Deployment", value: "On-premise/Cloud" },
        { label: "Support", value: "24/7 Technical" },
      ]}
      idealFor={[
        "Customer Support Centers",
        "Sales & Telemarketing",
        "Help Desk Operations",
        "Banking & Finance",
        "Healthcare Services",
        "E-commerce Support",
        "Travel & Hospitality",
        "Utility Companies",
      ]}
      checklist={{
        title: "Integrations",
        items: ["Salesforce CRM", "Zoho CRM", "Microsoft Dynamics", "HubSpot", "Zendesk", "Freshdesk", "ERP Systems", "Custom APIs"],
      }}
      resources={["Solution Brochure", "Case Studies", "Pricing Calculator"]}
      cta={{
        title: "Transform your",
        accent: "customer service",
        text: "Enhance your customer engagement with our advanced call center solutions. Get a free consultation and demo.",
      }}
    />
  )
}
