import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/app/components/premium/LegalPage";
import { Field } from "@/app/components/cms";

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
          These Terms &amp; Conditions govern your use of <strong><Field name="label.1">sharptel.pk</Field></strong> (the &ldquo;website&rdquo;), operated by{" "}
          <strong><Field name="label.2">Sharp Communications (Pvt.) Ltd.</Field></strong> (&ldquo;Sharptel&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the
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
          <Field name="text.1">The website provides general information about Sharptel and our connectivity, technology, software and managed services.
          We work to keep it accurate and current, but descriptions, specifications, figures and prices shown are for general
          guidance only and may change without notice.</Field>
        </p>
        <p>
          <Field name="text.2">Nothing on the website is a binding offer. Any service, price, service level or delivery commitment applies only once it
          is confirmed in a written quotation or contract signed by Sharptel.</Field>
        </p>
      </>
    ),
  },
  {
    id: "services-contracts",
    title: "Services and contracts",
    body: (
      <p>
        <Field name="text.3">The supply of any Sharptel service or product is governed by the separate agreement, quotation or service order between you
        and Sharptel. If those documents conflict with these terms, the signed agreement prevails.</Field>
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p><Field name="text.4">When using the website, you agree not to:</Field></p>
        <ul>
          <li><Field name="label.3">submit false, misleading or someone else&apos;s information through our forms;</Field></li>
          <li><Field name="label.4">upload files containing malware or any harmful code;</Field></li>
          <li><Field name="label.5">attempt to gain unauthorised access to the website, its administration area or our systems;</Field></li>
          <li><Field name="label.6">disrupt the website, or send automated or bulk requests to it; or</Field></li>
          <li><Field name="label.7">use the website for any unlawful purpose.</Field></li>
        </ul>
      </>
    ),
  },
  {
    id: "chat-assistant",
    title: "Chat assistant",
    body: (
      <p>
        <Field name="text.5">The website chat assistant gives automated, AI-generated answers to general questions. Its replies may be incomplete or
        inaccurate and do not form a quotation, commitment or professional advice. Please confirm anything important with our team
        directly.</Field>
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <p>
        <Field name="text.6">The Sharptel name, logo, website design and content are owned by or licensed to Sharp Communications (Pvt.) Ltd. You may
        view and share pages for personal or internal business reference, but you may not copy, modify or republish them for
        commercial purposes without our written permission. Third-party names and logos shown, such as those of our technology
        partners, belong to their respective owners.</Field>
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    body: (
      <p>
        <Field name="text.7">The website may link to third-party websites such as our social media pages. We are not responsible for the content or
        privacy practices of those websites.</Field>
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        <Field name="text.8">The website is provided &ldquo;as is&rdquo;. To the extent permitted by law, Sharptel is not liable for any loss arising from
        your use of, or reliance on, the website or its content, or from the website being temporarily unavailable. This does not
        limit any liability that cannot be excluded under applicable law, nor any obligations under a signed service contract.</Field>
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <p>
        How we handle information you submit through the website is explained in our{" "}
        <Link href="/privacy-policy"><Field name="label.8">Privacy Policy</Field></Link>.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        <Field name="text.9">These terms are governed by the laws of the Islamic Republic of Pakistan. Any dispute relating to the website is subject to
        the jurisdiction of the courts at Karachi.</Field>
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        <Field name="text.10">We may update these terms from time to time. The &ldquo;Last updated&rdquo; date on this page shows when they were last
        changed, and continued use of the website means you accept the updated terms.</Field>
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        <Field name="text.11">Sharp Communications (Pvt.) Ltd., Office 104 &amp; 105, 1st Floor, Plot #54-C, Al-Murtaza Commercial Lane-2, DHA Phase VIII,
        Karachi, Pakistan · <a href="mailto:info@sharptel.pk">info@sharptel.pk</a> · <a href="tel:+92-311-128-4373">+92-311-128-4373</a></Field>
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
