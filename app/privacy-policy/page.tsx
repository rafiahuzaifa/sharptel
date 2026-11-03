import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/app/components/premium/LegalPage";
import { Field } from "@/app/components/cms";

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
          <Field name="text.1">This website, <strong>sharptel.pk</strong>, is operated by <strong>Sharp Communications (Pvt.) Ltd.</strong> (&ldquo;Sharptel&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;), Office 104 &amp; 105, 1st Floor, Plot #54-C, Al-Murtaza Commercial Lane-2, DHA Phase VIII,
          Karachi, Pakistan.</Field>
        </p>
        <p>
          <Field name="text.2">This Privacy Policy explains what personal information we collect when you use this website, why we collect it, and how
          we handle it. It applies to this website only, not to the services we deliver under separate client contracts, which are
          governed by the terms of those contracts.</Field>
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p><Field name="text.3">We only collect information that you choose to send us through the website:</Field></p>
        <ul>
          <li>
            <strong><Field name="label.1">Contact form:</Field></strong> your name, email address, phone number, company, the service you are interested in, the
            subject and your message.
          </li>
          <li>
            <strong><Field name="label.2">Quote requests:</Field></strong> your name, email address, phone number, the service you need and your message.
          </li>
          <li>
            <strong><Field name="label.3">Job applications:</Field></strong> your name, email address, phone number, the position you are applying for, an
            optional cover message and your CV/resume file.
          </li>
          <li>
            <strong><Field name="label.4">Website chat assistant:</Field></strong> the questions you type into the chat window.
          </li>
        </ul>
        <p>
          <Field name="text.4">Like most websites, our hosting provider automatically processes basic technical data such as your IP address, browser
          type and the pages requested, in order to deliver the site and keep it secure.</Field>
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <>
        <p><Field name="text.5">We use the information you provide to:</Field></p>
        <ul>
          <li><Field name="label.5">respond to your enquiry, prepare a quotation or arrange a consultation;</Field></li>
          <li><Field name="label.6">assess your job application and contact you about it;</Field></li>
          <li><Field name="label.7">send you a confirmation that we received your message or application;</Field></li>
          <li><Field name="label.8">answer your questions through the chat assistant; and</Field></li>
          <li><Field name="label.9">operate, secure and improve this website.</Field></li>
        </ul>
        <p><Field name="text.6">We do not sell your personal information, and we do not use it for unrelated marketing without your consent.</Field></p>
      </>
    ),
  },
  {
    id: "how-its-handled",
    title: "How your information is handled",
    body: (
      <>
        <p>
          <Field name="text.7">Form submissions are delivered by email to the relevant Sharptel team (for example sales, support or human resources).
          Job applications, including the CV you upload, are sent as an email attachment to our HR team. The website itself does
          not keep a database of form submissions.</Field>
        </p>
        <p>
          <Field name="text.8">Messages typed into the chat assistant are sent to <strong>Google&apos;s Gemini API</strong> to generate a reply. Please do
          not share sensitive personal, financial or confidential business information in the chat.</Field>
        </p>
      </>
    ),
  },
  {
    id: "service-providers",
    title: "Service providers",
    body: (
      <>
        <p><Field name="text.9">We rely on a small number of providers to run this website:</Field></p>
        <ul>
          <li><strong><Field name="label.10">Vercel</Field></strong>, which hosts the website;</li>
          <li>our <strong><Field name="label.11">email provider</Field></strong>, which delivers form submissions and confirmation emails; and</li>
          <li><strong><Field name="label.12">Google</Field></strong>, which processes chat assistant messages through the Gemini API.</li>
        </ul>
        <p>
          <Field name="text.10">These providers process information on our behalf and may store or process it outside Pakistan. We share only what is
          needed for them to provide their service.</Field>
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        <Field name="text.11">This website does not use advertising or analytics cookies. A single session cookie is used only when authorised Sharptel
        staff sign in to the website&apos;s administration area; it is not set for ordinary visitors.</Field>
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep information",
    body: (
      <p>
        <Field name="text.12">We keep enquiry and application emails for as long as needed to respond to you and for our legitimate business and legal
        record-keeping purposes, after which they are deleted. If you would like us to delete your information sooner, contact us
        using the details below.</Field>
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        <Field name="text.13">The website is served over an encrypted HTTPS connection, and access to submitted information is limited to the staff who
        need it. No method of transmission or storage is completely secure, but we take reasonable measures to protect the
        information you send us.</Field>
      </p>
    ),
  },
  {
    id: "your-choices",
    title: "Your choices and rights",
    body: (
      <>
        <p><Field name="text.14">You can contact us at any time to:</Field></p>
        <ul>
          <li><Field name="label.13">ask what personal information we hold about you;</Field></li>
          <li><Field name="label.14">ask us to correct or delete it; or</Field></li>
          <li><Field name="label.15">withdraw a job application or enquiry.</Field></li>
        </ul>
        <p>
          Email <a href="mailto:info@sharptel.pk"><Field name="label.16">info@sharptel.pk</Field></a> (or <a href="mailto:careers@sharptel.pk"><Field name="label.17">careers@sharptel.pk</Field></a>{" "}
          for job applications) and we will respond within a reasonable time.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: <p><Field name="text.15">This website is intended for businesses and job seekers. It is not directed at children, and we do not knowingly collect information from them.</Field></p>,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p><Field name="text.16">We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date on this page shows when it was last changed.</Field></p>,
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        <Field name="text.17">Sharp Communications (Pvt.) Ltd., Office 104 &amp; 105, 1st Floor, Plot #54-C, Al-Murtaza Commercial Lane-2, DHA Phase VIII,
        Karachi, Pakistan · <a href="mailto:info@sharptel.pk">info@sharptel.pk</a> · <a href="tel:+92-311-128-4373">+92-311-128-4373</a></Field>
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
