import "./globals.css";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import ChatWidget from "../app/components/ChatWidget";

const spaceGrotesk = Space_Grotesk({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://www.sharptel.pk";
const SITE_TITLE = "Sharptel - Technology Solutions Provider";
const SITE_DESCRIPTION =
  "Pakistan's leading ICT solutions provider offering enterprise connectivity, cyber security, data center, software development and managed IT services.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Sharptel",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Sharptel",
    "ICT solutions Pakistan",
    "enterprise internet Pakistan",
    "cyber security Pakistan",
    "data center Pakistan",
    "managed IT services",
    "telecom solutions Karachi",
    "VoIP Pakistan",
    "network solutions Pakistan",
  ],
  authors: [{ name: "Sharp Communications (Pvt.) Ltd." }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: "Sharptel",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/background/Sharp-logo-2.webp", width: 1200, height: 630, alt: "Sharptel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/background/Sharp-logo-2.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sharp Communications (Pvt.) Ltd.",
  alternateName: "Sharptel",
  url: SITE_URL,
  logo: `${SITE_URL}/background/Sharp-logo-2.webp`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 104 & 105, 1st Floor, Plot #54-C, Al-Murtaza Commercial Lane-2, DHA Phase VIII",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+92-311-128-4373",
      contactType: "customer service",
      email: "info@sharptel.pk",
      areaServed: "PK",
      availableLanguage: ["en", "ur"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/SharpTel.pk",
    "https://pk.linkedin.com/company/sharp-telecom-private-limited",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased bg-white text-text`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
