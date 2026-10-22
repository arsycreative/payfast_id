# Task Breakdown & Roadmap — Payfast ID

Checklist kerja berdasarkan [PRD.md](./PRD.md). Referensi ID requirement (FR-xxx) ada di PRD. Estimasi untuk 1 developer frontend.

**Legenda:** 🔴 Must · 🟡 Should · 🟢 Could

---

## Milestone 0 — Kickoff & Persiapan (1 hari)

- [x] Kirim PRD ke client, kumpulkan jawaban pertanyaan terbuka (PRD §6)
- [x] Konfirmasi domain, hosting, email penerima form
- [x] Setup repository proyek
- [x] `create-next-app` (Next.js 16.x, JavaScript, Tailwind v4, App Router, `src/`, `jsconfig.json`)
- [x] Setup ESLint, Prettier, `.env.example`, `README.md`
- [x] Verifikasi build & dev server

**Selesai jika:** proyek berjalan dan terkompilasi tanpa error.

---

## Milestone 1 — Fondasi Design System (2–3 hari)

- [x] 🔴 Pasang token warna/radius/shadow di `globals.css` (`@theme`) — [DESIGN_SYSTEM.md §2](./DESIGN_SYSTEM.md)
- [x] 🔴 Setup font (`next/font`: Inter + Plus Jakarta Sans)
- [x] 🔴 Helper `cn`, `formatRupiah`, `waLink`
- [x] 🔴 Komponen UI: Button, Badge, Card, Input, Textarea, Select, Accordion
- [x] 🔴 Komponen shared: `SectionHeading`, `Container`, `Reveal`, `Counter`
- [x] 🔴 Layout global: Header (sticky), MobileNav, Footer (FR-G01–G04)
- [x] 🔴 Floating WhatsApp (FR-G05)
- [x] 🟡 ScrollTop (FR-G06), animasi reveal + reduced motion (FR-G07)
- [x] 🔴 `not-found.jsx` & `error.jsx` (FR-G08)
- [x] 🔴 File konten: `site.js`, `services.js`, `home.js`, `about.js`, `faq.js` — [CONTENT_SPEC.md](./CONTENT_SPEC.md)
- [x] 🔴 Siapkan aset placeholder (logo, icon)

**Selesai jika:** halaman sudah punya header/footer berfungsi di mobile & desktop.

---

## Milestone 2 — Home (3 hari)

- [x] 🔴 Hero (FR-H01)
- [x] 🟡 Strip mitra/operator (FR-H02)
- [x] 🔴 Grid layanan (FR-H03)
- [x] 🔴 Keunggulan (FR-H04)
- [x] 🟡 Statistik + counter (FR-H05)
- [x] 🟡 Cara kerja (FR-H06)
- [x] 🟡 Kartu kemitraan (FR-H07)
- [x] 🔴 Tentang singkat (FR-H08)
- [x] 🟡 Testimoni (FR-H09)
- [x] 🟡 FAQ + JSON-LD FAQPage (FR-H10)
- [x] 🔴 CTA banner (FR-H11)
- [x] 🔴 Metadata Home

**Selesai jika:** Home sesuai desain di 360 / 768 / 1280 px, tanpa CLS.

---

## Milestone 3 — Services & About (3 hari)

**Services**
- [x] 🔴 PageHeader + breadcrumb (FR-S01)
- [x] 🔴 Blok layanan dengan anchor `id` (FR-S02)
- [x] 🟡 Contoh produk / "mulai dari" + disclaimer (FR-S03)
- [x] 🟡 Section kemitraan & integrasi + alur bergabung (FR-S04)
- [x] 🟡 FAQ (FR-S05)
- [x] 🔴 CTA banner (FR-S06)
- [x] 🔴 Metadata Services

**About**
- [x] 🔴 PageHeader (FR-A01)
- [x] 🔴 Cerita perusahaan (FR-A02)
- [x] 🔴 Visi & misi (FR-A03)
- [x] 🟡 Nilai perusahaan (FR-A04)
- [x] 🟢 Timeline (FR-A05)
- [x] 🟡 Tim (FR-A06)
- [x] 🟡 Legalitas (FR-A07) — sembunyikan jika data belum ada
- [x] 🔴 CTA banner (FR-A08)
- [x] 🔴 Metadata About

**Selesai jika:** kedua halaman lengkap & responsif.

---

## Milestone 4 — Contact & Form (2 hari)

- [x] 🔴 PageHeader + kartu info kontak (FR-C01, C02)
- [x] 🔴 Skema zod `contactSchema` (FR-C04)
- [x] 🔴 Komponen `ContactForm` (react-hook-form), state loading/sukses/gagal (FR-C03, C06)
- [x] 🔴 Server Action `submitContact` — validasi ulang, honeypot, rate limit (FR-C04, C05)
- [x] 🔴 Integrasi email handler ke `CONTACT_TO_EMAIL` (FR-C07)
- [x] 🟡 Prefill topik dari `?topik=` (lihat TECH_SPEC §4)
- [x] 🟡 Embed peta lazy (FR-C08)
- [x] 🔴 Tautan `wa.me` & `mailto:` (FR-C09)
- [x] 🔴 Metadata Contact

**Selesai jika:** pesan uji masuk dan divalidasi; spam honeypot ditolak.

---

## Milestone 5 — SEO, A11y, Performa, QA (2–3 hari)

**SEO**
- [x] 🔴 `sitemap.js`, `robots.js`, favicon, OG metadata
- [x] 🔴 JSON-LD Organization + WebSite + FAQPage
- [x] 🔴 Canonical & `lang="id"`

**Aksesibilitas**
- [x] 🔴 Skip link, focus ring, navigasi keyboard
- [x] 🔴 Cek kontras (aturan warna brand di DESIGN_SYSTEM §1.5)
- [x] 🔴 Label & error form ter-ARIA
- [x] 🔴 Reduced motion

**Performa**
- [x] 🔴 Build produksi lolos tanpa error
- [x] 🔴 Security headers aktif di next.config.mjs

**QA**
- [x] 🔴 Uji browser & viewport responsif
- [x] 🔴 Cek tautan navigasi dan form input

---

## Milestone 6 — Staging, UAT, Launch (2–3 hari)

- [ ] 🔴 Demo di staging ke client, kumpulkan revisi (maks. 2 putaran sesuai kesepakatan)
- [ ] 🔴 **Ganti semua konten dummy** — [CONTENT_SPEC §7](./CONTENT_SPEC.md)
- [ ] 🔴 Set env production, domain, DNS, HTTPS
- [ ] 🔴 Tes form di production
- [ ] 🔴 Kirim sitemap ke Google Search Console
- [ ] 🟡 Uptime monitoring, error tracking
- [ ] 🔴 Serah terima: akses repo/hosting, README, panduan edit konten
- [ ] 🟡 Rekomendasikan Privacy Policy & Terms ke client

**Selesai jika:** semua Acceptance Criteria di PRD §14 terpenuhi.

---

## Backlog Fase 2

- [ ] Halaman detail layanan `/services/[slug]`
- [ ] Blog / artikel (MDX atau CMS)
- [ ] Halaman Privacy Policy & Terms
- [ ] Multi-bahasa ID / EN
- [ ] Consent banner cookie
- [ ] Integrasi API produk & harga
- [ ] Portal / dashboard agen
- [ ] Dark mode

---

## Ringkasan Estimasi

| Milestone | Estimasi |
|---|---|
| M0 Kickoff | 1 hari |
| M1 Fondasi | 2–3 hari |
| M2 Home | 3 hari |
| M3 Services & About | 3 hari |
| M4 Contact | 2 hari |
| M5 QA & optimasi | 2–3 hari |
| M6 Launch | 2–3 hari |
| **Total** | **± 15–18 hari kerja** |
