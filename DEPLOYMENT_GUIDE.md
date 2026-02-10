# 🚀 Deployment Guide - Sharptel Website to Netlify

## Pre-Deployment Checklist

- [x] NodeMailer configured with cPanel email
- [x] Contact form working (`/Contact-us`)
- [x] Career form working with resume upload (`/career`)
- [x] Email templates tested
- [x] Environment variables configured in `.env.local`
- [ ] Build tested locally
- [ ] Environment variables added to Netlify

---

## 📋 Step-by-Step Deployment

### Step 1: Configure Environment Variables

**Before deploying, you MUST add these to Netlify:**

1. Go to: https://app.netlify.com
2. Select your site → **Site Settings** → **Environment Variables**
3. Add the following variables:

```
EMAIL_HOST=mail.yourdomain.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=info@yourdomain.com
EMAIL_PASS=your_actual_password
EMAIL_FROM=info@yourdomain.com
ADMIN_EMAIL=info@yourdomain.com
HR_EMAIL=careers@yourdomain.com
NODE_ENV=production
```

**⚠️ IMPORTANT:** Replace all values with your actual cPanel email credentials!

---

### Step 2: Test Build Locally

Before deploying, test the build:

```bash
# Install dependencies (if not already done)
npm install

# Build the project
npm run build

# Test the production build locally
npm start
```

**Check for:**
- ✓ No build errors
- ✓ All pages load correctly
- ✓ Forms work properly
- ✓ No console errors

---

### Step 3: Deploy to Netlify

#### Option A: Deploy via Git (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add NodeMailer email functionality"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to Netlify Dashboard
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - **Build settings:**
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add environment variables (from Step 1)
   - Click "Deploy site"

#### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI (if not installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify site
netlify init

# Deploy
netlify deploy --prod
```

---

### Step 4: Verify Deployment

After deployment completes:

1. **Test Contact Form:**
   - Visit: `https://your-site.netlify.app/Contact-us`
   - Fill and submit the form
   - Check if you receive email at ADMIN_EMAIL
   - Check if customer receives auto-reply

2. **Test Career Form:**
   - Visit: `https://your-site.netlify.app/career`
   - Fill form and upload resume
   - Check if HR receives email with resume attachment
   - Check if applicant receives confirmation

3. **Check Console Logs:**
   - Netlify Dashboard → Functions → Check logs
   - Look for:
     ```
     ✓ Email server connection verified
     ✓ Admin notification sent
     ✓ Auto-reply sent to customer
     ```

---

## 🔧 Netlify Configuration

The `netlify.toml` file is already configured with:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 📧 Email Testing Checklist

### Contact Form Tests:
- [ ] Form validation works (required fields)
- [ ] Email sent to ADMIN_EMAIL
- [ ] Auto-reply sent to customer email
- [ ] Both HTML and text versions work
- [ ] Success message displays
- [ ] Form resets after submission

### Career Form Tests:
- [ ] Form validation works
- [ ] Resume upload (PDF/DOC) works
- [ ] File size validation (5MB max)
- [ ] Email sent to HR_EMAIL
- [ ] Resume attached to email
- [ ] Auto-reply sent to applicant
- [ ] Success message displays
- [ ] Form resets after submission

---

## 🐛 Common Issues & Solutions

### Issue 1: Build Fails

**Error:** `Module not found: Can't resolve 'nodemailer'`

**Solution:**
```bash
npm install nodemailer @types/nodemailer --save
npm run build
```

---

### Issue 2: Emails Not Sending in Production

**Solutions:**

1. **Check Environment Variables:**
   - Netlify Dashboard → Site Settings → Environment Variables
   - Verify all email variables are set correctly
   - Redeploy site after adding variables

2. **Check Function Logs:**
   - Netlify Dashboard → Functions → View logs
   - Look for error messages

3. **Verify cPanel Email:**
   - Test sending email from cPanel webmail
   - Ensure SMTP is enabled
   - Check daily sending limits

---

### Issue 3: Form Submission Times Out

**Solution:**
Netlify functions have a 10-second timeout. If emails take longer:

```typescript
// Already handled in API routes with try-catch
// Check your email server response time
```

---

### Issue 4: Resume Upload Fails

**Possible causes:**
- File too large (max 5MB)
- Wrong file type (only PDF, DOC, DOCX)
- Netlify function size limit

**Solution:**
Already handled with validation in `/api/careers/route.ts`

---

## 📊 Monitoring

### Check Email Delivery:

1. **Netlify Functions:**
   ```
   Dashboard → Functions → contact & careers
   ```

2. **Email Logs:**
   - Check cPanel email logs
   - Monitor sent emails folder

3. **Error Tracking:**
   - Add Sentry or similar (optional)
   - Check Netlify function logs

---

## 🔒 Security Checklist

- [x] `.env.local` in `.gitignore`
- [x] Environment variables in Netlify (not in code)
- [x] Email validation implemented
- [x] File upload validation (type, size)
- [x] XSS protection in email templates
- [x] CORS headers configured
- [x] HTTPS enforced by Netlify

---

## 🎯 Performance Optimization

Already implemented:
- Minimal dependencies
- Efficient email sending
- File size validation
- Error handling
- Connection pooling in NodeMailer

---

## 📱 Post-Deployment

### Update DNS (if using custom domain):

1. **In Netlify:**
   - Site Settings → Domain Management
   - Add custom domain

2. **In your DNS provider:**
   - Add A record or CNAME
   - Point to Netlify

### Enable HTTPS:
- Automatic with Netlify
- Free SSL certificate
- Force HTTPS redirect

---

## ✅ Final Verification

After deployment, verify:

1. ✓ Website loads: `https://your-site.netlify.app`
2. ✓ All pages accessible
3. ✓ Contact form sends emails
4. ✓ Career form uploads resume
5. ✓ Auto-replies working
6. ✓ No console errors
7. ✓ Mobile responsive
8. ✓ Fast loading times

---

## 📞 Support

### Netlify Support:
- Docs: https://docs.netlify.com
- Support: https://www.netlify.com/support/

### Email Issues:
- Check cPanel documentation
- Contact hosting provider

---

## 🎉 Success!

Your Sharptel website is now live with:
- ✅ Fully functional contact form
- ✅ Career application form with resume upload
- ✅ Professional email notifications
- ✅ Auto-reply emails to users
- ✅ Beautiful HTML email templates
- ✅ Production-ready deployment

---

**Need help? Check the console logs or contact support!**

Made with ❤️ for Sharptel
