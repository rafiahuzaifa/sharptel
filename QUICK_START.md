# ⚡ Quick Start Guide - 5 Minutes Setup

## 🎯 Follow These Steps to Get Your Email Forms Working

---

### Step 1: Configure Email (2 minutes)

Open `.env.local` file and replace with your cPanel email:

```env
EMAIL_HOST=mail.yourdomain.com          # Your domain's mail server
EMAIL_USER=info@yourdomain.com          # Your email address
EMAIL_PASS=your_password_here           # Your email password
ADMIN_EMAIL=info@yourdomain.com         # Where contact forms go
HR_EMAIL=careers@yourdomain.com         # Where job applications go
```

**How to find these:**
1. Login to your cPanel
2. Email Accounts → Configure Email Client
3. Copy the SMTP settings

---

### Step 2: Test Locally (2 minutes)

```bash
npm run dev
```

Then visit:
- Contact Form: http://localhost:3000/Contact-us
- Career Form: http://localhost:3000/career

Fill and submit → Check your email!

---

### Step 3: Deploy to Netlify (1 minute)

#### A. Add Environment Variables:
1. Go to Netlify Dashboard
2. Site Settings → Environment Variables
3. Copy all variables from `.env.local`

#### B. Deploy:
```bash
git add .
git commit -m "Add email functionality"
git push
```

Netlify will auto-deploy!

---

## ✅ Done!

Your forms are now live and working! 🎉

---

## 🆘 Need Help?

- **Email not sending?** Check `.env.local` credentials
- **Build errors?** Run `rm -rf .next && npm run build`
- **Forms not working?** Check browser console for errors

**For detailed help, see:**
- [NODEMAILER_SETUP.md](NODEMAILER_SETUP.md)
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- [README_NODEMAILER.md](README_NODEMAILER.md)
