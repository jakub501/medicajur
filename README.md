# MEDICA JUR — MUDr. Pavol Trnovec, PhD.

Bilingual (Slovak / English) marketing website for the general practice **MEDICA JUR, s.r.o.** in Svätý Jur.

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4**. Fully static (SSG), SEO-ready, GDPR-compliant.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (static export of all pages)
npm run start      # serve the production build
npm run lint       # ESLint
```

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx                 # root pass-through
│  ├─ not-found.tsx              # 404
│  ├─ robots.ts / sitemap.ts     # SEO endpoints
│  └─ [locale]/
│     ├─ layout.tsx              # <html>, fonts, header/footer, JSON-LD, cookie banner
│     ├─ page.tsx                # Home
│     └─ [slug]/page.tsx         # All inner pages (localized slugs)
├─ components/
│  ├─ sections/                  # Home sections (Hero, Services, …)
│  └─ pages/                     # Inner page bodies + legal content
├─ i18n/
│  ├─ config.ts                  # locales, route slugs, helpers
│  └─ dictionaries.ts            # ALL site copy (SK + EN)
├─ lib/
│  ├─ site.ts                    # contact details, hours, links, image paths
│  └─ structuredData.ts          # schema.org JSON-LD
└─ proxy.ts                      # locale detection & redirect
```

---

## Editing content

- **All texts** live in `src/i18n/dictionaries.ts` (`sk` and `en` objects — keep them in sync).
- **Contact details, phone, e-mails, address, opening hours, insurers, booking link** live in `src/lib/site.ts`. Update once, applied everywhere (including the live "open now" badge, footer and structured data).

### Opening hours

Edit the `SCHEDULE` array in `src/lib/site.ts`. Times are entered with the `hm(hour, minute)` helper. The table, the live open/closed indicator and the JSON-LD `openingHoursSpecification` all derive from it automatically.

---

## Adding real photos

1. Drop image files into `public/images/` (e.g. `doctor.jpg`, `ambulancia.jpg`).
2. Set the paths in `src/lib/site.ts`:

```ts
images: {
  doctor: "/images/doctor.jpg",
  facility: "/images/ambulancia.jpg",
},
```

Until a path is set, a tasteful placeholder with the intended caption is shown.

To replace the **logo**, edit `src/components/Logo.tsx`. To replace the **favicon**, swap `src/app/favicon.ico`.

---

## Languages & routing

- Default locale: **Slovak** (`/sk`). English at `/en`. The visitor's browser language is detected on first visit.
- Each page has localized URL slugs (e.g. `/sk/ambulancia` ↔ `/en/about`), mapped in `src/i18n/config.ts` (`routes`).
- The language switcher keeps the visitor on the equivalent page.

---

## Legal / GDPR

- Privacy policy and cookie policy content: `src/components/pages/legal-content.ts` (SK + EN).
- Cookie consent banner: `src/components/CookieBanner.tsx` (stores choice in `localStorage`).
- ⚠️ Before launch, fill in the operator's **IČO** and confirm the contracted insurers in `src/lib/site.ts` / legal content.

---

## SEO

- Per-page, per-locale metadata, canonical + `hreflang` alternates.
- `schema.org` `MedicalClinic`/`Physician` structured data with address, geo and opening hours.
- `sitemap.xml` and `robots.txt` generated automatically.
- Set the production domain via the `NEXT_PUBLIC_SITE_URL` environment variable (defaults to `https://www.medicajur.sk`).

---

## Deployment

Optimised for **Vercel** (zero config) or any Node host:

```bash
npm run build && npm run start
```

Set `NEXT_PUBLIC_SITE_URL=https://www.medicajur.sk` in the hosting environment so canonical URLs, Open Graph and the sitemap use the live domain.
```
