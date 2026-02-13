import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    await sendQuoteEmails(formData);

    return NextResponse.json(
      { success: true, message: 'Quote request submitted successfully! We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing quote request:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again later or contact us at info@sharptel.pk' },
      { status: 500 }
    );
  }
}

async function sendQuoteEmails(formData: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  await transporter.verify();

  // Admin notification
  await transporter.sendMail({
    from: `"Sharptel Quote Request" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
    replyTo: formData.email,
    subject: `New Quote Request: ${escapeHTML(formData.service)} - ${escapeHTML(formData.name)}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 30px; color: white; text-align: center; border-radius: 10px 10px 0 0;">
          <h2 style="margin: 0;">New Quote Request</h2>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">From Sharptel Website</p>
        </div>
        <div style="padding: 30px; border: 1px solid #e5e7eb; background: white; border-radius: 0 0 10px 10px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 12px; font-weight: bold; background: #f9fafb; width: 35%; border-bottom: 1px solid #e5e7eb;">Name:</td><td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${escapeHTML(formData.name)}</td></tr>
            <tr><td style="padding: 12px; font-weight: bold; background: #f9fafb; border-bottom: 1px solid #e5e7eb;">Email:</td><td style="padding: 12px; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${escapeHTML(formData.email)}">${escapeHTML(formData.email)}</a></td></tr>
            <tr><td style="padding: 12px; font-weight: bold; background: #f9fafb; border-bottom: 1px solid #e5e7eb;">Phone:</td><td style="padding: 12px; border-bottom: 1px solid #e5e7eb;"><a href="tel:${escapeHTML(formData.phone)}">${escapeHTML(formData.phone)}</a></td></tr>
            ${formData.company ? `<tr><td style="padding: 12px; font-weight: bold; background: #f9fafb; border-bottom: 1px solid #e5e7eb;">Company:</td><td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${escapeHTML(formData.company)}</td></tr>` : ''}
            <tr><td style="padding: 12px; font-weight: bold; background: #f9fafb; border-bottom: 1px solid #e5e7eb;">Service:</td><td style="padding: 12px; border-bottom: 1px solid #e5e7eb;"><strong>${escapeHTML(formData.service)}</strong></td></tr>
          </table>
          <div style="margin: 20px 0;">
            <div style="padding: 12px; font-weight: bold; background: #f9fafb; border-radius: 5px;">Requirements:</div>
            <div style="padding: 15px; background: #f9fafb; margin-top: 10px; border-radius: 5px; white-space: pre-line;">${escapeHTML(formData.message)}</div>
          </div>
          <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626;">
            <p style="margin: 0; color: #991b1b;"><strong>Action Required:</strong> Respond within 24 hours.</p>
          </div>
          <p style="text-align: center; color: #6b7280; font-size: 12px; margin-top: 20px;">Submitted on ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}</p>
        </div>
      </body>
      </html>
    `,
  });

  // Auto-reply to customer
  await transporter.sendMail({
    from: `"Sharptel" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: formData.email,
    subject: 'Your Quote Request Has Been Received - Sharptel',
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #059669, #047857); padding: 30px; color: white; text-align: center; border-radius: 10px 10px 0 0;">
          <h2 style="margin: 0;">Quote Request Received!</h2>
        </div>
        <div style="padding: 30px; border: 1px solid #e5e7eb; background: white; border-radius: 0 0 10px 10px;">
          <p style="font-size: 16px;">Dear <strong>${escapeHTML(formData.name)}</strong>,</p>
          <p>Thank you for your interest in <strong>${escapeHTML(formData.service)}</strong>. Our team will review your requirements and get back to you within 24 hours with a customized quote.</p>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin-top: 0;">Need Immediate Assistance?</h4>
            <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:+923111284373">+92-311-128-4373</a></p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:info@sharptel.pk">info@sharptel.pk</a></p>
          </div>
          <p style="text-align: center; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 20px;">Best regards,<br>The Sharptel Team</p>
        </div>
      </body>
      </html>
    `,
  });
}

function escapeHTML(text: string) {
  if (!text) return '';
  return text.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
