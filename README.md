# ITTIHAD PRO – Registration Software

Production-oriented Next.js landing page + registration funnel + protected admin dashboard.

## 1. Stack
- Next.js + TypeScript
- Responsive landing page
- Multi-step registration
- Supabase PostgreSQL
- Private Supabase Storage for documents
- Protected admin session
- Excel export
- Browser print / Save as PDF
- Vercel deployment

## 2. Supabase setup
1. Create a Supabase project.
2. Open SQL Editor.
3. Run `supabase/schema.sql`.
4. Copy the project URL, anon key and service-role key.

## 3. Environment variables
Create `.env.local` locally or add the same variables in Vercel Project Settings → Environment Variables.

Required:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `ADMIN_JWT_SECRET`

Never expose `SUPABASE_SERVICE_ROLE_KEY` to the browser.

## 4. Run locally
```bash
npm install
npm run dev
```

## 5. Deploy
Recommended workflow:
1. Upload this project to a private GitHub repository.
2. Import the repository in Vercel.
3. Add the environment variables.
4. Deploy.
5. Connect the client's domain if needed.

## 6. Pricing
The handwritten sheet was transcribed as:
- Pack: 6,000 DA
- Monthly: 1,500 DA
- 1,500 × 2 = 3,000 DA
- Optional line: 500 × 2 = 1,000 DA

The final optional line's Arabic label is not fully legible in the photo, so its wording is intentionally not invented. Edit `lib/constants.ts` and the pricing cards if the client gives the exact label.

## 7. Important production note
The form collects information about minors, including health information and identity documents. Keep the Supabase storage bucket private, use strong admin credentials, HTTPS, and restrict access to authorized staff only. Before launch, verify the client's legal/privacy requirements for collecting and retaining these records.

## 8. Vercel
This repository is designed for Vercel. Do not upload `.env.local` or secret keys to GitHub.
### Quick deployment
The ZIP is the source project. For Vercel, put the project in GitHub (recommended) and import the repository into Vercel. Vercel will run `npm install` and `npm run build` automatically.
