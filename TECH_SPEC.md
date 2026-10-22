# Technical Spec — Payfast ID

Dokumen teknis untuk implementasi website Payfast ID dengan **Next.js 16.x** (rilis stabil terbaru; selalu pakai patch terakhir karena Next.js punya rilis keamanan berkala).

> Cek versi terbaru sebelum mulai: `npm view next version` dan https://nextjs.org/blog

---

## 1. Tech Stack

| Kebutuhan | Pilihan | Catatan |
|---|---|---|
| Framework | **Next.js 16.x** (App Router) | Turbopack menjadi bundler default |
| UI library | **React 19.x** | Server Components by default |
| Bahasa | **JavaScript** (ES2024 / JSX) | `jsconfig.json` untuk alias path |
| Styling | **Tailwind CSS v4** | Konfigurasi CSS-first (`@theme`) |
| Komponen dasar | **shadcn/ui** (opsional) atau komponen buatan sendiri | Berbasis Radix UI; kode disalin ke repo |
| Ikon | `lucide-react` | |
| Animasi | `motion` atau CSS + IntersectionObserver | Lazy; hormati reduced motion |
| Form | `react-hook-form` + `zod` + **Server Action** | Validasi dipakai ulang di client & server |
| Email | **Resend** (atau SMTP/Nodemailer) | Pilih salah satu |
| Anti-spam | Honeypot + rate limit; opsional Cloudflare Turnstile | |
| Font | `next/font/google` (Inter, Plus Jakarta Sans) | |
| Analytics | GA4 / Plausible / Umami | Pilih bersama client |
| Lint & format | ESLint + Prettier (atau Biome) | `next lint` sudah dihapus di Next 16, jalankan `eslint` langsung |
| Test | Vitest + Testing Library (unit), Playwright (E2E, opsional) | |
| Package manager | `npm` (atau pnpm) | |
| Node.js | **≥ 20.9 LTS** (disarankan 22 LTS) | Syarat minimum Next.js 16 |
| Deploy | Vercel **atau** VPS (Docker + Nginx) | |

---

## 2. Setup Awal

```bash
npx create-next-app@latest payfast-id \
  --javascript --tailwind --eslint --app --src-dir \
  --turbopack --import-alias "@/*"

cd payfast-id
npm install lucide-react zod react-hook-form @hookform/resolvers motion clsx tailwind-merge resend
npm install -D prettier prettier-plugin-tailwindcss vitest @testing-library/react
```

> Prompt interaktif `create-next-app` bisa berbeda antarversi; pastikan hasilnya App Router + `src/` + JavaScript + Tailwind.

---

## 3. Struktur Folder

```
payfast-id/
├─ public/
│  ├─ images/            # ilustrasi, foto placeholder, logo operator
│  ├─ logo.svg
│  └─ ...
├─ src/
│  ├─ app/
│  │  ├─ layout.jsx          # root layout: font, metadata, Header, Footer, WhatsAppFab
│  │  ├─ page.jsx            # Home
│  │  ├─ services/page.jsx
│  │  ├─ about/page.jsx
│  │  ├─ contact/
│  │  │  ├─ page.jsx
│  │  │  └─ actions.js       # Server Action kirim form
│  │  ├─ not-found.jsx
│  │  ├─ error.jsx
│  │  ├─ sitemap.js
│  │  ├─ robots.js
│  │  ├─ opengraph-image.jsx # (opsional) OG dinamis
│  │  ├─ icon.svg / apple-icon.png
│  │  └─ globals.css         # Tailwind + @theme token
│  ├─ components/
│  │  ├─ layout/    (Header, MobileNav, Footer, WhatsAppFab, ScrollTop)
│  │  ├─ ui/        (Button, Card, Badge, Accordion, Input, Textarea, Select)
│  │  ├─ sections/  (Hero, PartnerStrip, ServicesGrid, WhyUs, Stats, HowItWorks,
│  │  │             PartnershipPlans, AboutTeaser, Testimonials, Faq, CtaBanner,
│  │  │             PageHeader, ServiceBlock, Timeline, TeamGrid, ContactInfo, ContactForm, MapEmbed)
│  │  └─ shared/    (Reveal, Counter, SectionHeading, JsonLd)
│  ├─ content/       # semua teks & data (lihat CONTENT_SPEC.md)
│  │  ├─ site.js
│  │  ├─ services.js
│  │  ├─ home.js
│  │  ├─ about.js
│  │  └─ faq.js
│  ├─ lib/
│  │  ├─ utils.js            # cn(), formatRupiah(), waLink()
│  │  ├─ validations.js      # skema zod (contact)
│  │  ├─ rate-limit.js
│  │  └─ seo.js              # helper metadata & JSON-LD
├─ .env.example
├─ next.config.mjs
├─ eslint.config.mjs
├─ jsconfig.json
└─ README.md
```

---

## 4. Strategi Rendering

| Route | Strategi | Alasan |
|---|---|---|
| `/`, `/services`, `/about` | **Static (prerender saat build)** | Konten statis dari file → paling cepat & murah |
| `/contact` | Static page + **Server Action** | Halaman statis, submit dinamis |
| `sitemap.xml`, `robots.txt` | Static | |

Prinsip:
- **Server Components secara default**; tambahkan `"use client"` hanya untuk: MobileNav, Accordion, Counter, Reveal, ContactForm, scroll-top.
- Hindari mengirim data konten besar ke client component; teruskan hanya props yang perlu.
- Pada Next.js 15+ `params` dan `searchParams` bersifat **async** (`await`) — penting saat membaca `?topik=` di Contact:

```jsx
// src/app/contact/page.jsx
export default async function ContactPage({ searchParams }) {
  const { topik } = (await searchParams) || {};
  return <ContactForm defaultTopic={topik} />;
}
```

> Catatan: membaca `searchParams` membuat halaman menjadi dinamis. Jika ingin Contact tetap 100% statis, baca `?topik=` di client memakai `useSearchParams()` dalam komponen form (dibungkus `<Suspense>`).

- Fitur baru Next 16 seperti **Cache Components / PPR** tidak diperlukan untuk website statis ini; gunakan hanya jika nanti ada konten dinamis.
- Konvensi file `middleware` pada Next 16 diganti nama menjadi **`proxy.js`**. Tidak dibutuhkan di fase 1; jika dipakai (mis. redirect), gunakan nama baru.

---

## 5. Metadata & SEO

**Root layout**

```jsx
// src/app/layout.jsx
import { site } from "@/content/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website", locale: "id_ID", siteName: site.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};
```

- Tiap halaman mengekspor `metadata` sendiri (title, description, `alternates.canonical`).
- `<html lang="id">`.
- **sitemap.js** mengembalikan 4 URL; **robots.js** mengizinkan semua + menunjuk ke sitemap.
- **JSON-LD:** komponen `<JsonLd />` untuk `Organization` + `WebSite` (root), `FAQPage` (Home/Services), `ContactPage` (opsional) — gunakan `<script type="application/ld+json">`.
- Validasi dengan Google Rich Results Test & Search Console setelah launch.

---

## 6. Form Kontak — Alur

```
[Client] react-hook-form + zod (validasi instan)
    │  submit
    ▼
[Server Action] submitContact(formData)
    1. Cek honeypot → jika terisi: balas "sukses" palsu (tanpa kirim)
    2. (Opsional) verifikasi token Turnstile
    3. Rate limit per IP (mis. 5 request / 10 menit)
    4. Validasi ulang dengan zod (JANGAN percaya client)
    5. Kirim email via Resend ke ADMIN_EMAIL (+ reply-to = email pengirim)
    6. Return { ok: true } | { ok: false, errors }
    ▼
[Client] tampilkan status sukses/gagal, reset form saat sukses
```

**Skema validasi (`src/lib/validations.js`)**

```js
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").max(80),
  email: z.string().email("Format email tidak valid"),
  phone: z
    .string()
    .regex(/^(\+62|62|0)[0-9]{8,13}$/, "Nomor tidak valid")
    .optional()
    .or(z.literal("")),
  topic: z.enum(["pelanggan", "kemitraan", "integrasi", "lainnya"]),
  message: z.string().min(10, "Pesan minimal 10 karakter").max(1000),
  consent: z.literal(true, { message: "Wajib disetujui" }),
  website: z.string().max(0).optional(), // honeypot
});
```

**Rate limiting:** di Vercel gunakan Upstash Redis (`@upstash/ratelimit`); di VPS tunggal cukup in-memory Map atau Nginx `limit_req`. In-memory tidak andal di lingkungan serverless — jangan dipakai di sana.

**Catatan:** escape/sanitasi isi pesan saat dimasukkan ke email HTML (atau kirim sebagai teks biasa).

---

## 7. Helper Penting

```js
// src/lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { site } from "@/content/site";

export const cn = (...inputs) => twMerge(clsx(inputs));

export const formatRupiah = (n) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

export const waLink = (msg = site.whatsappMessage) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
```

---

## 8. Gambar & Aset

- Gunakan `next/image`; berikan `sizes` pada gambar responsif; tandai gambar hero/LCP dengan `priority`.
- Ilustrasi SVG boleh di-import sebagai file statis (`<Image src="/images/hero.svg" />`) atau inline untuk animasi.
- Simpan semua aset di `public/images/` (tanpa hotlink agar cepat dan stabil).
- Gambar remote (jika ada) wajib didaftarkan di `images.remotePatterns` pada `next.config.mjs`.

```js
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Tambahkan Content-Security-Policy setelah semua pihak ketiga (maps, analytics, turnstile) diketahui.
        ],
      },
    ];
  },
};
export default nextConfig;
```

---

## 9. Environment Variables (`.env.example`)

```bash
NEXT_PUBLIC_SITE_URL=https://payfast.id        # placeholder domain
NEXT_PUBLIC_WHATSAPP=6281234567890
NEXT_PUBLIC_GA_ID=                              # opsional

# Email
RESEND_API_KEY=
CONTACT_TO_EMAIL=halo@payfast.id
CONTACT_FROM_EMAIL=noreply@payfast.id           # domain harus terverifikasi di Resend

# Anti-spam / rate limit (opsional)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

Aturan: variabel tanpa `NEXT_PUBLIC_` hanya tersedia di server. **Jangan commit `.env.local`.**

---

## 10. Aksesibilitas — Implementasi

- Elemen semantik: `<header>`, `<nav aria-label="Utama">`, `<main id="main">`, `<footer>`.
- Tautan "Lewati ke konten" (skip link) di awal halaman.
- Drawer mobile: fokus terkunci (focus trap), tutup dengan `Esc`, `aria-expanded` pada tombol.
- Accordion: `button` dengan `aria-expanded` + `aria-controls`.
- Form: `<label htmlFor>`, `aria-invalid`, `aria-describedby` ke pesan error; status hasil dengan `role="status"` / `aria-live="polite"`.
- Fokus: gunakan `focus-visible` ring jelas.
- Uji dengan axe DevTools, keyboard-only, dan pembaca layar dasar.

---

## 11. Performa — Checklist

- [ ] Hero image `priority`, ukuran tepat, tanpa CLS.
- [ ] Font hanya bobot yang dipakai, `display: swap`.
- [ ] Library animasi dimuat hanya pada komponen yang memakainya (dynamic import jika perlu).
- [ ] Google Maps & skrip pihak ketiga dimuat lazy / setelah interaksi.
- [ ] Tidak ada `"use client"` di level halaman.
- [ ] Analisis bundle (`@next/bundle-analyzer`) sebelum rilis.
- [ ] Lighthouse mobile ≥ 90 di 4 halaman.

---

## 12. Testing & QA

| Jenis | Cakupan |
|---|---|
| Unit (Vitest) | `contactSchema`, `formatRupiah`, `waLink` |
| Komponen | Form kontak (error/validasi/sukses), Accordion, MobileNav |
| E2E (Playwright, opsional) | Navigasi 4 halaman, submit form (mock email), tombol WhatsApp |
| Manual | iOS Safari, Android Chrome, desktop Chrome/Firefox/Edge, 360–1536px |
| Otomatis | Lighthouse CI, axe, cek tautan rusak |

---

## 13. CI/CD & Deployment

**Git flow:** `main` (production) ← `develop` (staging) ← `feature/*`. Pull request wajib lolos lint, typecheck, test, build.

**Skrip `package.json`**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "test": "vitest run",
    "format": "prettier --write ."
  }
}
```

**Opsi A — Vercel (paling mudah):** hubungkan repo → set env variables → domain & HTTPS otomatis → preview deployment per PR untuk review client.

**Opsi B — VPS (Docker):**
- `output: "standalone"` di `next.config.mjs`, build image multi-stage.
- Nginx sebagai reverse proxy + Let's Encrypt (HTTPS), gzip/brotli, cache header untuk `/_next/static`.
- Proses dijaga `docker compose` / systemd; backup konfigurasi & `.env`.

**Pasca-deploy:** daftarkan Google Search Console, kirim sitemap, pasang uptime monitor, pantau error (Sentry opsional).

---

## 13b. Konvensi Kode

- JavaScript ES2024 / JSX murni, struktur modular, penamaan file konsisten (`.jsx` untuk komponen, `.js` untuk logika/helper/data).
- Nama komponen PascalCase, file komponen satu komponen per file.
- Teks UI **tidak** di-hard-code di komponen section; ambil dari `src/content`.
- Import absolut `@/…` didukung via `jsconfig.json`.
- Commit message: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).
- Tandai konten sementara dengan komentar `// TODO(content): …`.

---

## 14. Rencana Fase 2 (teknis)

- Halaman detail layanan: `app/services/[slug]/page.jsx` dengan `generateStaticParams()` dari `content/services.js` (ingat `params` async).
- Blog: MDX atau headless CMS (Sanity/Strapi/Payload) + revalidasi.
- i18n: segmen `app/[lang]/…` atau library `next-intl`.
- Consent banner & analytics lanjutan.
- Integrasi data produk/harga dari API (cache dengan revalidasi).
