import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/app/components/premium/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sharp Communications (Pvt.) Ltd. (Sharptel) collects, uses and protects personal information submitted through sharptel.pk.",
};

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          This website, <strong>sharptel.pk</strong>, is operated by <strong>Sharp Communications (Pvt.) Ltd.</strong> (&ldquo;Sharptel&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;), Office 104 &amp; 105, 1st Floor, Plot #54-C, Al-Murtaza Commercial Lane-2, DHA Phase VIII,
          Karachi, Pakistan.
        </p>
        <p>
          This Privacy Policy explains what personal information we collect when you use this website, why we collect it, and how
          we handle it. It applies to this website only, not to the services we deliver under separate client contracts, which are
          governed by the terms of those contracts.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We only collect information that you choose to send us through the website:</p>
        <ul>
          <li>
            <strong>Contact form:</strong> your name, email address, phone number, company, the service you are interested in, the
            subject and your message.
          </li>
          <li>
            <strong>Quote requests:</strong> your name, email address, phone number, the service you need and your message.
          </li>
          <li>
            <strong>Job applications:</strong> your name, email address, phone number, the position you are applying for, an
            optional cover message and your CV/resume file.
          </li>
          <li>
            <strong>Website chat assistant:</strong> the questions you type into the chat window.
          </li>
        </ul>
        <p>
          Like most websites, our hosting provider automatically processes basic technical data such as your IP address, browser
          type and the pages requested, in order to deliver the site and keep it secure.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <>
        <p>We use the information you provide to:</p>
        <ul>
          <li>respond to your enquiry, prepare a quotation or arrange a consultation;</li>
          <li>assess your job application and contact you about it;</li>
          <li>send you a confirmation that we received your message or application;</li>
          <li>answer your questions through the chat assistant; and</li>
          <li>operate, secure and improve this website.</li>
        </ul>
        <p>We do not sell your personal information, and we do not use it for unrelated marketing without your consent.</p>
      </>
    ),
  },
  {
    id: "how-its-handled",
    title: "How your information is handled",
    body: (
      <>
        <p>
          Form submissions are delivered by email to the relevant Sharptel team (for example sales, support or human resources).
          Job applications, including the CV you upload, are sent as an email attachment to our HR team. The website itself does
          not keep a database of form submissions.
        </p>
        <p>
          Messages typed into the chat assistant are sent to <strong>Google&apos;s Gemini API</strong> to generate a reply. Please do
          not share sensitive personal, financial or confidential business information in the chat.
        </p>
      </>
    ),
  },
  {
    id: "service-providers",
    title: "Service providers",
    body: (
      <>
        <p>We rely on a small number of providers to run this website:</p>
        <ul>
          <li><strong>Vercel</strong>, which hosts the website;</li>
          <li>our <strong>email provider</strong>, which delivers form submissions and confirmation emails; and</li>
          <li><strong>Google</strong>, which processes chat assistant messages through the Gemini API.</li>
        </ul>
        <p>
          These providers process information on our behalf and may store or process it outside Pakistan. We share only what is
          needed for them to provide their service.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        This website does not use advertising or analytics cookies. A single session cookie is used only when authorised Sharptel
        staff sign in to the website&apos;s administration area; it is not set for ordinary visitors.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep information",
    body: (
      <p>
        We keep enquiry and application emails for as long as needed to respond to you and for our legitimate business and legal
        record-keeping purposes, after which they are deleted. If you would like us to delete your information sooner, contact us
        using the details below.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        The website is served over an encrypted HTTPS connection, and access to submitted information is limited to the staff who
        need it. No method of transmission or storage is completely secure, but we take reasonable measures to protect the
        information you send us.
      </p>
    ),
  },
  {
    id: "your-choices",
    title: "Your choices and rights",
    body: (
      <>
        <p>You can contact us at any time to:</p>
        <ul>
          <li>ask what personal information we hold about you;</li>
          <li>ask us to correct or delete it; or</li>
          <li>withdraw a job application or enquiry.</li>
        </ul>
        <p>
          Email <a href="mailto:info@sharptel.pk">info@sharptel.pk</a> (or <a href="mailto:careers@sharptel.pk">careers@sharptel.pk</a>{" "}
          for job applications) and we will respond within a reasonable time.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: <p>This website is intended for businesses and job seekers. It is not directed at children, and we do not knowingly collect information from them.</p>,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p>We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date on this page shows when it was last changed.</p>,
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

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy"
      accent="Policy"
      intro="How we collect, use and protect the information you share with us through this website."
      updated="30 October 2026"
      path="/privacy-policy"
      sections={sections}
    />
  );
}
