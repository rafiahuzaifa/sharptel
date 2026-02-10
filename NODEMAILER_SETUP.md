# NodeMailer Setup Guide for Sharptel Website

## 📧 Email Configuration Setup

This guide will help you configure NodeMailer with your cPanel email account for the Sharptel website.

---

## 🚀 Quick Setup

### Step 1: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your cPanel email credentials:

```env
# Your cPanel Email Configuration
EMAIL_HOST=mail.yourdomain.com          # Usually mail.yourdomain.com for cPanel
EMAIL_PORT=587                           # 587 for TLS, 465 for SSL
EMAIL_SECURE=false                       # false for port 587, true for port 465
EMAIL_USER=info@yourdomain.com          # Your cPanel email address
EMAIL_PASS=your_strong_password         # Your cPanel email password
EMAIL_FROM=info@yourdomain.com          # Sender email (same as EMAIL_USER)
ADMIN_EMAIL=info@yourdomain.com         # Where contact forms go
HR_EMAIL=careers@yourdomain.com         # Where career applications go
NODE_ENV=development                     # or production
```

### Step 2: Get cPanel Email Settings

**To find your cPanel email settings:**

1. Login to your cPanel account
2. Go to **Email Accounts**
3. Find your email account and click **Configure Email Client**
4. Look for **Manual Settings**:
   - **Incoming Server:** `mail.yourdomain.com`
   - **SMTP Server:** `mail.yourdomain.com`
   - **SMTP Port:** 587 (TLS) or 465 (SSL)
   - **Username:** Your full email address
   - **Password:** Your email password

**Common cPanel Settings:**
```
Host: mail.yourdomain.com
Port: 587 (recommended) or 465
Secure: false (for 587) or true (for 465)
```

### Step 3: Test Email Configuration

Run the development server:
```bash
npm run dev
```

Visit the website and test:
- Contact Form: `http://localhost:3000/Contact-us`
- Career Form: `http://localhost:3000/career`

---

## 📝 Forms Available

### 1. Contact Form (`/Contact-us`)
- **API Endpoint:** `/api/contact`
- **Features:**
  - Name, Email, Phone (required)
  - Company, Service Interest (optional)
  - Subject, Message (required)
  - Auto-reply to customer
  - Notification to admin

### 2. Career Form (`/career`)
- **API Endpoint:** `/api/careers`
- **Features:**
  - Name, Email, Phone, Position (required)
  - Cover Letter (optional)
  - Resume Upload (PDF/DOC, max 5MB)
  - Auto-reply to applicant
  - Notification to HR with resume attachment

---

## 🎯 Email Flow

### Contact Form Submission:
```
User fills form
    ↓
POST to /api/contact
    ↓
Validates data
    ↓
Sends 2 emails:
    1. To ADMIN_EMAIL (notification)
    2. To Customer (thank you)
    ↓
Shows success message
```

### Career Form Submission:
```
User fills form + uploads resume
    ↓
POST to /api/careers
    ↓
Validates data & file
    ↓
Sends 2 emails:
    1. To HR_EMAIL (application with resume)
    2. To Applicant (confirmation)
    ↓
Shows success message
```

---

## 🔧 Troubleshooting

### Issue: Emails not sending

**Solution 1: Check Environment Variables**
```bash
# Make sure .env.local exists and has correct values
cat .env.local
```

**Solution 2: Verify cPanel Email**
- Login to cPanel webmail and send a test email
- Make sure password is correct
- Check if email account has no restrictions

**Solution 3: Check Firewall**
- Port 587 or 465 should be open
- Some hosting providers block outgoing SMTP

**Solution 4: Enable Less Secure Apps**
- Some cPanel configurations require enabling SMTP authentication
- Contact your hosting provider if issues persist

### Issue: SSL/TLS Errors

If you get certificate errors:
```env
# In .env.local, the tls.rejectUnauthorized is already set to false
# This handles most SSL issues
```

### Issue: Connection Timeout

Try different ports:
```env
# Option 1: TLS (Recommended)
EMAIL_PORT=587
EMAIL_SECURE=false

# Option 2: SSL
EMAIL_PORT=465
EMAIL_SECURE=true

# Option 3: Non-secure (not recommended for production)
EMAIL_PORT=25
EMAIL_SECURE=false
```

---

## 📧 Email Templates

Both forms send beautiful HTML emails with:
- **Professional design** with your brand colors
- **Responsive layout** for mobile devices
- **Action buttons** and important highlights
- **Plain text fallback** for email clients that don't support HTML

---

## 🌐 Production Deployment

### Before Deploying to Netlify:

1. **Set Environment Variables in Netlify:**
   - Go to Netlify Dashboard
   - Site Settings → Environment Variables
   - Add all variables from `.env.local`

2. **Build the Project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   # Netlify will auto-deploy from Git
   # Or use Netlify CLI:
   netlify deploy --prod
   ```

---

## ✅ Success Indicators

**You'll know it's working when:**

1. ✓ Form submission shows "Message sent successfully!"
2. ✓ Admin receives email notification
3. ✓ User receives thank you/confirmation email
4. ✓ Console shows:
   ```
   ✓ Email server connection verified
   ✓ Admin notification sent
   ✓ Auto-reply sent to customer
   ```

---

## 🔒 Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use strong email passwords**
3. **Regularly rotate credentials**
4. **Monitor email sending limits** (cPanel usually has daily limits)
5. **Enable 2FA** on your cPanel account

---

## 📞 Support

If you encounter issues:

1. Check the console for error messages
2. Verify cPanel email settings
3. Test with webmail first
4. Contact your hosting provider for SMTP issues

---

## 🎉 Features Implemented

✅ Contact Form with NodeMailer
✅ Career Form with Resume Upload
✅ Beautiful HTML Email Templates
✅ Auto-reply emails to users
✅ Admin/HR notifications
✅ File validation (size, type)
✅ Success/Error messages
✅ cPanel email integration
✅ Production-ready configuration

---

**Made with ❤️ for Sharptel**
