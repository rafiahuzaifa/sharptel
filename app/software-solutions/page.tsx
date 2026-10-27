import { Smartphone, Code2, Database, PenTool, Palette, Megaphone } from "lucide-react"
import {
  Accent,
  CTASection,
  FeatureGrid,
  PageHero,
  Section,
  SectionHeader,
  Steps,
  TagCloud,
} from "@/app/components/premium"

const services = [
  {
    icon: <Smartphone />,
    title: "Mobile Apps Development",
    desc: "Native and cross-platform mobile applications for iOS and Android with cutting-edge features.",
    features: ["React Native", "Flutter", "Swift", "Kotlin"],
    href: "/software-solutions/mobile-app-devlopment"
  },
  {
    icon: <Code2 />,
    title: "Custom Web Development",
    desc: "Bespoke web applications and portals tailored to your specific business requirements.",
    features: ["React.js", "Next.js", "Node.js", "Python/Django"],
    href: "/software-solutions/webdevlopment"
  },
  {
    icon: <Database />,
    title: "CRM/ERP Customization",
    desc: "Customize and integrate enterprise resource planning and customer relationship management systems.",
    features: ["Salesforce", "Odoo", "SAP", "Microsoft Dynamics"],
    href: "/software-solutions/crm-erp-solution"
  },
  {
    icon: <PenTool />,
    title: "Prototype Development",
    desc: "Rapid prototyping to validate ideas and concepts before full-scale development.",
    features: ["Figma", "Adobe XD", "Wireframing", "MVP Development"],
    href: "/software-solutions/prototype-devlopment"
  },
  {
    icon: <Palette />,
    title: "Graphic Design",
    desc: "Professional graphic design services for branding, marketing, and user interface design.",
    features: ["Adobe Creative Suite", "UI/UX Design", "Brand Identity", "Marketing Collateral"],
    href: "/software-solutions/graphic-designing"
  },
  {
    icon: <Megaphone />,
    title: "Digital Marketing",
    desc: "Comprehensive digital marketing strategies including SEO, social media, and PPC campaigns.",
    features: ["SEO", "Social Media", "Google Ads", "Content Marketing"],
    href: "/software-solutions/digital-marketing"
  }
]

const portfolio = [
  { title: "Banking Mobile App", desc: "Complete banking solution with biometric authentication", features: ["Mobile Development"] },
  { title: "E-commerce Platform", desc: "Scalable online shopping platform with inventory management", features: ["Web Development"] },
  { title: "Healthcare CRM", desc: "Custom CRM for hospital management system", features: ["CRM Customization"] }
]

const process = [
  { title: "Discovery", desc: "Requirement analysis and planning" },
  { title: "Design", desc: "UI/UX design and prototyping" },
  { title: "Development", desc: "Agile development sprints" },
  { title: "Testing", desc: "Quality assurance and testing" },
  { title: "Deployment", desc: "Launch and deployment" },
  { title: "Support", desc: "Maintenance and support" }
]

const stack = ["React", "Next.js", "Node.js", "Python", "Flutter", "AWS", "Docker", "MongoDB", "Firebase", "GraphQL", "TypeScript", "Tailwind"]

export default function SoftwareSolutions() {
  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Innovative Software Solutions"
        title="Transform Your Vision Into"
        accent="Digital Reality"
        subtitle="From concept to deployment, we craft cutting-edge software solutions that drive business growth, enhance efficiency, and deliver exceptional user experiences."
        image="/background/b6.jpg"
        actions={{
          primary: { label: "Start Your Project", href: "/Contact-us" },
          secondary: { label: "View Our Work", href: "#portfolio" },
        }}
      />

      <Section>
        <SectionHeader
          eyebrow="Expertise"
          title={<>Our <Accent>software</Accent> expertise</>}
          lead="Comprehensive software development services using latest technologies and agile methodologies."
        />
        <FeatureGrid columns={3} items={services} />
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="How We Work"
          title={<>Our <Accent>development</Accent> process</>}
          lead="Transparent, agile, and collaborative approach to software development."
        />
        <Steps items={process} />
      </Section>

      <Section tone="dark" id="portfolio">
        <SectionHeader
          dark
          eyebrow="Portfolio"
          title={<>Featured <Accent>projects</Accent></>}
          lead="Showcasing our expertise through successful software implementations."
        />
        <FeatureGrid dark columns={3} items={portfolio} />
      </Section>

      <Section>
        <SectionHeader
          align="center"
          eyebrow="Stack"
          title={<>Technology <Accent>stack</Accent></>}
          lead="We work with cutting-edge technologies to deliver robust and scalable solutions."
        />
        <div className="mx-auto flex max-w-4xl justify-center">
          <TagCloud items={stack} />
        </div>
      </Section>

      <CTASection
        title={<>Let&apos;s build something <Accent>amazing together</Accent></>}
        text="Share your project requirements and get a detailed proposal within 24 hours. Free initial consultation · Detailed project proposal · Transparent pricing."
        primary={{ label: "Start Project Discussion", href: "/Contact-us" }}
        secondary={{ label: "solutions@sharptel.pk", href: "mailto:solutions@sharptel.pk" }}
      />
    </div>
  )
}
