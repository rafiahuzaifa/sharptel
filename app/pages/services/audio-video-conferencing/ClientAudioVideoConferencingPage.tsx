'use client'

import { Monitor, Mic, Share2, MessageSquare, Calendar, Shield } from 'lucide-react'
import ServiceDetail from '@/app/components/premium/ServiceDetail'

export default function ClientAudioVideoConferencingPage() {
  return (
    <ServiceDetail
      name="Audio Video Conferencing"
      eyebrow="Unified Communications"
      title="Audio Video Conferencing"
      accent="Solutions"
      subtitle="Professional conferencing solutions enabling seamless communication, collaboration, and productivity across locations with HD quality."
      image="/background/network-conference.webp"
      stats={[
        { number: "HD 1080p", label: "Video Quality" },
        { number: "500+", label: "Participants" },
        { number: "24/7", label: "Support" },
        { number: "99.9%", label: "Uptime" },
      ]}
      overview={[
        "Sharptel provides comprehensive audio-video conferencing solutions that enable businesses to connect, collaborate, and communicate effectively across multiple locations. Our solutions offer crystal-clear audio and high-definition video quality for productive virtual meetings.",
        "From small team meetings to large-scale webinars and virtual events, our conferencing solutions are scalable, secure, and easy to use. We support hybrid work environments with seamless integration across devices and platforms.",
      ]}
      features={[
        { icon: Monitor, title: "HD Video Conferencing", description: "1080p HD video quality with noise cancellation" },
        { icon: Mic, title: "Crystal Clear Audio", description: "Advanced audio processing for clear conversations" },
        { icon: Share2, title: "Screen Sharing", description: "Real-time screen and application sharing" },
        { icon: MessageSquare, title: "Chat & Collaboration", description: "Integrated chat, file sharing, and whiteboarding" },
        { icon: Calendar, title: "Meeting Scheduling", description: "Calendar integration and automated scheduling" },
        { icon: Shield, title: "Enterprise Security", description: "End-to-end encryption and secure access controls" },
      ]}
      optionsTitle="Solution Options"
      options={[
        { title: "Boardroom Solutions", features: ["Large conference room setups", "Professional audio systems", "Multiple camera angles", "Wireless presentation"] },
        { title: "Huddle Rooms", features: ["Small meeting room solutions", "All-in-one video bars", "Wireless connectivity", "Touch screen controls"] },
        { title: "Remote Work Solutions", features: ["Personal video devices", "Noise-cancelling headsets", "Webcam and microphone kits", "Home office setups"] },
        { title: "Webinar & Events", features: ["Large audience support", "Moderator controls", "Polling and Q&A", "Recording and streaming"] },
      ]}
      quickInfo={[
        { label: "Max Participants", value: "500+" },
        { label: "Video Quality", value: "HD 1080p" },
        { label: "Platform Support", value: "All Devices" },
        { label: "Setup Time", value: "1-3 Days" },
      ]}
      idealFor={[
        "Corporate Board Meetings",
        "Remote Team Collaboration",
        "Client Presentations",
        "Training & Workshops",
        "Webinars & Virtual Events",
        "Healthcare Consultations",
        "Educational Institutions",
        "Government Meetings",
      ]}
      checklist={{
        title: "Supported Platforms",
        items: ["Cisco Webex", "Microsoft Teams", "Zoom Meetings", "Google Meet", "Poly Studio", "Logitech", "Avaya Spaces", "Custom Solutions"],
      }}
      resources={["Solution Catalog", "Pricing Packages", "User Guides"]}
      cta={{
        title: "Enhance your",
        accent: "communication",
        text: "Transform your meetings with professional audio-video conferencing solutions. Get a free demo and consultation.",
      }}
    />
  )
}
