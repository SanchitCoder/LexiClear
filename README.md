# LexiClear

**Legal Documents, Simplified.**  

LexiClear is a SaaS-style web application that helps users **upload legal documents (contracts, policies, NDAs, etc.)** and instantly receive **plain-English explanations** powered by AI. The platform ensures **data privacy and security**, making it a safe way to demystify complex legal jargon.  

---

## 🚀 Features

- **Upload Any Legal Document** – Supports PDF files (contracts, NDAs, policies, agreements).  
- **AI Demystification** – Converts legal jargon into simple, human-readable explanations.  
- **Secure & Private** – Data is handled securely, no permanent storage.  
- **Authentication** – Email + password login/signup (with Firebase/Supabase support).  
- **Dashboard** – Clean interface to upload PDFs, process them via n8n, and view results instantly.  

---

## 🖼️ Pages & Layout

### 1. Landing Page
- Hero section with **LexiClear** tagline: *“Legal Documents, Simplified.”*  
- Subtext: *“Upload any contract, policy, or agreement. Get plain-English explanations instantly.”*  
- CTA button → **Try Now** (redirects to login/signup).  
- Features section (3 cards).  
- Testimonials (placeholder quotes).  
- Footer with links to **Contact Us**, **Privacy Policy**, **Terms of Use**.  

### 2. Authentication
- Modern UI for **Login / Signup**.  
- Email + Password authentication.  
- Password reset option.  
- Redirects to dashboard after login.  

### 3. Dashboard
- Upload component (**drag & drop + file select**) – accepts PDF files only.  
- Displays uploaded filename.  
- On submit → POST file to **n8n Webhook URL**.  
- Shows loading animation while processing.  
- Displays **demystified output** inside a scrollable card.  

---

## 🎨 Design Principles
- Minimal SaaS aesthetic.  
- Light theme with modern fonts.  
- Rounded buttons, subtle shadows, responsive layout.  
- Built with **React + TailwindCSS**.  

---

## ⚙️ Configuration

The app accepts the following input fields for deployment:

| Field             | Description                                              | Default     |
|-------------------|----------------------------------------------------------|-------------|
| `n8n_webhook_url` | Webhook endpoint where uploaded PDFs are sent             | (required)  |
| `brand_name`      | Brand name displayed in UI                               | LexiClear   |
| `logo_url`        | Optional logo for branding                               | (optional)  |

---

## 🛠️ Tech Stack
- **Frontend:** React + TailwindCSS  
- **Backend (Processing):** n8n Webhooks (integrates with AI models)  
- **Authentication:** Firebase / Supabase (Email + Password)  

---
