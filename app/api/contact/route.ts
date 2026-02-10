// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force Node.js runtime to avoid edge runtime issues
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Send emails
    await sendContactEmails(formData);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! Your message has been sent successfully. We will get back to you within 24 hours.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while sending your message. Please try again later or contact us directly at info@sharptel.pk'
      },
      { status: 500 }
    );
  }
}

async function sendContactEmails(formData: any) {
  try {
    // Create transporter with cPanel email configuration
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Additional settings for better compatibility
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter connection
    await transporter.verify();
    console.log('✓ Email server connection verified');

    // Send email to admin
    await sendContactEmailToAdmin(transporter, formData);
    console.log('✓ Admin notification sent');

    // Send auto-reply to customer
    await sendContactAutoReply(transporter, formData);
    console.log('✓ Auto-reply sent to customer');

  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}

async function sendContactEmailToAdmin(transporter: any, formData: any) {
  const mailOptions = {
    from: `"Sharptel Contact Form" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
    replyTo: formData.email,
    subject: `🔔 New Contact: ${formData.subject}`,
    html: generateContactEmailHTML(formData),
    text: generateContactEmailText(formData),
  };

  await transporter.sendMail(mailOptions);
}

async function sendContactAutoReply(transporter: any, formData: any) {
  const mailOptions = {
    from: `"Sharptel" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: formData.email,
    subject: 'Thank you for contacting Sharptel - We received your message',
    html: generateContactAutoReplyHTML(formData),
    text: generateContactAutoReplyText(formData),
  };

  await transporter.sendMail(mailOptions);
}

// HTML Template for Admin Email
function generateContactEmailHTML(formData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 30px; color: white; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 30px; border: 1px solid #e5e7eb; background: white; border-radius: 0 0 10px 10px; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        td { padding: 12px; border-bottom: 1px solid #e5e7eb; }
        .label { font-weight: bold; color: #374151; width: 35%; background: #f9fafb; }
        .value { color: #1f2937; }
        .urgent { background: #fef2f2; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2 style="margin: 0; font-size: 24px;">📬 New Contact Form Submission</h2>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Sharptel Website</p>
      </div>

      <div class="content">
        <table>
          <tr>
            <td class="label">Full Name:</td>
            <td class="value"><strong>${escapeHTML(formData.name)}</strong></td>
          </tr>
          <tr>
            <td class="label">Email Address:</td>
            <td class="value"><a href="mailto:${escapeHTML(formData.email)}">${escapeHTML(formData.email)}</a></td>
          </tr>
          <tr>
            <td class="label">Phone Number:</td>
            <td class="value"><a href="tel:${escapeHTML(formData.phone)}">${escapeHTML(formData.phone)}</a></td>
          </tr>
          ${formData.company ? `<tr><td class="label">Company:</td><td class="value">${escapeHTML(formData.company)}</td></tr>` : ''}
          ${formData.service ? `<tr><td class="label">Service Interest:</td><td class="value"><strong>${escapeHTML(formData.service)}</strong></td></tr>` : ''}
          <tr>
            <td class="label">Subject:</td>
            <td class="value"><strong>${escapeHTML(formData.subject)}</strong></td>
          </tr>
        </table>

        <div style="margin: 20px 0;">
          <div class="label" style="display: block; padding: 12px; background: #f9fafb; border-radius: 5px;">Message:</div>
          <div style="padding: 15px; background: #f9fafb; margin-top: 10px; border-radius: 5px; white-space: pre-line;">${escapeHTML(formData.message)}</div>
        </div>

        <div class="urgent">
          <p style="margin: 0; color: #991b1b;">
            ⚡ <strong>Action Required:</strong> Please respond to this inquiry within 24 hours to ensure best customer service.
          </p>
        </div>

        <div class="footer">
          <p>Submitted on ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}</p>
          <p>This is an automated notification from Sharptel Contact Form</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateContactEmailText(formData: any) {
  return `
═══════════════════════════════════════
NEW CONTACT FORM SUBMISSION
Sharptel Website
═══════════════════════════════════════

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.company ? `Company: ${formData.company}\n` : ''}${formData.service ? `Service Interest: ${formData.service}\n` : ''}
Subject: ${formData.subject}

MESSAGE:
────────────────────────────────────────
${formData.message}
────────────────────────────────────────

⚡ ACTION REQUIRED: Respond within 24 hours

Submitted: ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}
  `;
}

// HTML Template for Customer Auto-Reply
function generateContactAutoReplyHTML(formData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 30px; color: white; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 30px; border: 1px solid #e5e7eb; background: white; border-radius: 0 0 10px 10px; }
        .highlight { background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #059669; }
        .contact-box { background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
        ul { padding-left: 20px; }
        li { margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2 style="margin: 0; font-size: 24px;">✅ Thank You for Contacting Sharptel!</h2>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">We've received your message</p>
      </div>

      <div class="content">
        <p style="font-size: 16px;">Dear <strong>${escapeHTML(formData.name)}</strong>,</p>

        <p style="font-size: 16px;">Thank you for your interest in ${formData.service ? `<strong>${escapeHTML(formData.service)}</strong>` : 'our services'}.
        We have successfully received your inquiry and our team will review it shortly.</p>

        <div class="highlight">
          <h3 style="color: #065f46; margin-top: 0; font-size: 18px;">📋 What Happens Next?</h3>
          <ul style="color: #374151;">
            <li>📞 Our specialist will contact you within <strong>24 hours</strong></li>
            <li>📊 We'll prepare a detailed proposal based on your requirements</li>
            <li>💰 You'll receive a customized quote with transparent pricing</li>
            <li>🎯 Demo or consultation call will be scheduled at your convenience</li>
          </ul>
        </div>

        <div class="contact-box">
          <h4 style="margin-top: 0; color: #374151;">Need Immediate Assistance?</h4>
          <p style="margin: 10px 0;"><strong>📞 Phone:</strong> <a href="tel:+923111284373">+92-311-128-4373</a></p>
          <p style="margin: 10px 0;"><strong>📧 Email:</strong> <a href="mailto:info@sharptel.pk">info@sharptel.pk</a></p>
          <p style="margin: 10px 0;"><strong>🕐 Support Hours:</strong> Mon-Fri: 9 AM - 6 PM (24/7 Emergency Support Available)</p>
        </div>

        <div class="footer">
          <p><strong>Best regards,</strong><br>The Sharptel Team</p>
          <p style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            This is an automated confirmation email. Please do not reply to this email.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateContactAutoReplyText(formData: any) {
  return `
═══════════════════════════════════════
Thank You for Contacting Sharptel!
═══════════════════════════════════════

Dear ${formData.name},

Thank you for your interest in ${formData.service || 'our services'}.
We have successfully received your inquiry and will contact you within 24 hours.

WHAT HAPPENS NEXT:
────────────────────────────────────────
✓ Specialist contact within 24 hours
✓ Detailed proposal based on your needs
✓ Customized quote with transparent pricing
✓ Demo/consultation call available

CONTACT US:
────────────────────────────────────────
📞 Phone: +92-311-128-4373
📧 Email: info@sharptel.pk
🕐 Hours: Mon-Fri 9 AM - 6 PM
   (24/7 Emergency Support Available)

Best regards,
The Sharptel Team

────────────────────────────────────────
This is an automated confirmation email.
  `;
}

function escapeHTML(text: string) {
  if (!text) return '';
  return text
    .toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
