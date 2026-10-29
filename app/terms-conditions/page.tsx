import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/app/components/premium/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern use of the sharptel.pk website operated by Sharp Communications (Pvt.) Ltd.",
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    body: (
      <>
        <p>
          These Terms &amp; Conditions govern your use of <strong>sharptel.pk</strong> (the &ldquo;website&rdquo;), operated by{" "}
          <strong>Sharp Communications (Pvt.) Ltd.</strong> (&ldquo;Sharptel&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the
          website you agree to these terms. If you do not agree, please do not use the website.
        </p>
      </>
    ),
  },
  {
    id: "website-information",
    title: "Information on the website",
    body: (
      <>
        <p>
          The website provides general information about Sharptel and our connectivity, technology, software and managed services.
          We work to keep it accurate and current, but descriptions, specifications, figures and prices shown are for general
          guidance only and may change without notice.
        </p>
        <p>
          Nothing on the website is a binding offer. Any service, price, service level or delivery commitment applies only once it
          is confirmed in a written quotation or contract signed by Sharptel.
        </p>
      </>
    ),
  },
  {
    id: "services-contracts",
    title: "Services and contracts",
    body: (
      <p>
        The supply of any Sharptel service or product is governed by the separate agreement, quotation or service order between you
        and Sharptel. If those documents conflict with these terms, the signed agreement prevails.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>When using the website, you agree not to:</p>
        <ul>
          <li>submit false, misleading or someone else&apos;s information through our forms;</li>
          <li>upload files containing malware or any harmful code;</li>
          <li>attempt to gain unauthorised access to the website, its administration area or our systems;</li>
          <li>disrupt the website, or send automated or bulk requests to it; or</li>
          <li>use the website for any unlawful purpose.</li>
        </ul>
      </>
    ),
  },
  {
    id: "chat-assistant",
    title: "Chat assistant",
    body: (
      <p>
        The website chat assistant gives automated, AI-generated answers to general questions. Its replies may be incomplete or
        inaccurate and do not form a quotation, commitment or professional advice. Please confirm anything important with our team
        directly.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <p>
        The Sharptel name, logo, website design and content are owned by or licensed to Sharp Communications (Pvt.) Ltd. You may
        view and share pages for personal or internal business reference, but you may not copy, modify or republish them for
        commercial purposes without our written permission. Third-party names and logos shown, such as those of our technology
        partners, belong to their respective owners.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    body: (
      <p>
        The website may link to third-party websites such as our social media pages. We are not responsible for the content or
        privacy practices of those websites.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        The website is provided &ldquo;as is&rdquo;. To the extent permitted by law, Sharptel is not liable for any loss arising from
        your use of, or reliance on, the website or its content, or from the website being temporarily unavailable. This does not
        limit any liability that cannot be excluded under applicable law, nor any obligations under a signed service contract.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <p>
        How we handle information you submit through the website is explained in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the Islamic Republic of Pakistan. Any dispute relating to the website is subject to
        the jurisdiction of the courts at Karachi.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. The &ldquo;Last updated&rdquo; date on this page shows when they were last
        changed, and continued use of the website means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        Sharp Communications (Pvt.) Ltd., Office 104 &amp; 105, 1st Floor, Plot #54-C, Al-Murtaza Commercial Lane-2, DHA Phase VIII,
        Karachi, Pakistan · <a href="mailto:info@sharptel.pk">info@sharptel.pk</a> · <a href="tel:+92-311-128-4373">+92-311-128-4373</a>
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms &"
      accent="Conditions"
      intro="The terms that apply when you use the Sharptel website."
      updated="30 October 2026"
      path="/terms-conditions"
      sections={sections}
    />
  );
}
