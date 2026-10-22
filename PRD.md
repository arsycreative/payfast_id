# PRD — Website Company Profile Payfast ID

| | |
|---|---|
| **Produk** | Website company profile Payfast ID (perusahaan penjualan pulsa & produk digital) |
| **Versi dokumen** | 1.0 (Draft untuk review client) |
| **Tanggal** | 21 Oktober 2026 |
| **Tech stack** | Next.js 16.x (App Router), React 19, JavaScript (ES2024 / JSX), Tailwind CSS v4 |
| **Referensi desain** | https://shivaa.wprdx.com/demo/?color_theme=orange |
| **Warna utama** | `#ee4d2d` |
| **Status konten** | Placeholder / dummy (akan diganti client) |

> **Dokumen terkait:** [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) · [CONTENT_SPEC.md](./CONTENT_SPEC.md) · [TECH_SPEC.md](./TECH_SPEC.md) · [TASKS.md](./TASKS.md)

---

## 1. Latar Belakang

Payfast ID adalah perusahaan yang menjual pulsa dan produk digital sejenis. Client membutuhkan website resmi untuk membangun kredibilitas, menjelaskan layanan, dan mengarahkan calon pelanggan, agen, atau reseller agar menghubungi perusahaan.

Client memberi referensi template **Shivaa** (WordPress theme bergaya digital agency). Referensi ini dipakai untuk **gaya visual dan struktur section**, bukan untuk disalin 1:1. Konten agency (portfolio, blog, shop) diganti dengan konten yang relevan untuk bisnis pulsa.

## 2. Tujuan

### Tujuan bisnis
1. Membangun citra Payfast ID sebagai penyedia pulsa & produk digital yang **cepat, terpercaya, dan terjangkau**.
2. Menghasilkan **leads** (pelanggan, agen/reseller, kerja sama bisnis) lewat form kontak dan WhatsApp.
3. Menjadi aset digital yang mudah ditemukan lewat Google (SEO lokal Indonesia).

### Tujuan produk
1. Website 4 halaman: **Home, Services, About Us, Contact**.
2. Tampilan modern, responsif, dan konsisten dengan warna brand `#ee4d2d`.
3. Performa tinggi (Core Web Vitals hijau) dan mudah dikembangkan.
4. Konten mudah diganti karena dipisah dari komponen UI.

### Di luar tujuan (fase 1)
Website ini **bukan** aplikasi transaksi. Tidak ada login, top-up, atau pembayaran online (lihat bagian 5).

## 3. Target Pengguna

| Persona | Kebutuhan | Aksi yang diharapkan |
|---|---|---|
| **Pelanggan individu** — pengguna pulsa/paket data/token listrik | Tahu layanan apa saja yang tersedia dan merasa aman | Klik CTA ke WhatsApp / aplikasi |
| **Calon agen / reseller** — pemilik konter atau pebisnis kecil | Tahu keuntungan jadi mitra, skema harga, dan cara daftar | Isi form kontak topik "Kemitraan" |
| **Calon mitra bisnis / developer** — butuh integrasi (H2H/API) | Tahu perusahaan kredibel dan ada layanan integrasi | Hubungi lewat email / form |
| **Admin / pemilik** (internal) | Mengubah teks, harga, dan kontak dengan mudah | Edit file konten / CMS (fase 2) |

## 4. Prinsip Desain

- **Cepat & ringan** — pesan utama "Payfast" adalah kecepatan; website harus terasa cepat.
- **Mobile-first** — mayoritas pengunjung Indonesia datang dari ponsel.
- **Trust-first** — angka, legalitas, testimoni, dan kontak yang jelas.
- **Satu warna dominan** — oranye-merah `#ee4d2d` dipakai untuk aksi, bukan untuk semua elemen.

## 5. Ruang Lingkup

### 5.1 In Scope (Fase 1)
- 4 halaman utama: Home, Services, About Us, Contact.
- Header, footer, navigasi mobile, tombol WhatsApp melayang.
- Form kontak fungsional (validasi, anti-spam, kirim email).
- Halaman 404 dan halaman error.
- SEO dasar: metadata, Open Graph, sitemap, robots, structured data.
- Animasi ringan (scroll reveal, counter angka).
- Konten dummy: teks, gambar, ilustrasi, logo placeholder.
- Bahasa Indonesia sebagai bahasa utama.

### 5.2 Out of Scope (Fase 1)
- Login, registrasi, dashboard pelanggan.
- Transaksi / payment gateway / cek harga real-time.
- Blog / berita, halaman detail layanan per produk.
- Multi-bahasa (struktur disiapkan, tetapi belum diaktifkan).
- CMS (konten dikelola lewat file di repo).
- Dark mode.

### 5.3 Rekomendasi Fase 2 (opsional)
Blog/artikel untuk SEO, halaman detail layanan (`/services/[slug]`), halaman Privacy Policy & Terms, multi-bahasa (ID/EN), headless CMS, cek harga/produk dari API, portal agen.

## 6. Asumsi & Pertanyaan Terbuka

**Asumsi yang dipakai di dokumen ini** (perlu dikonfirmasi client):

| # | Asumsi |
|---|---|
| A1 | Website hanya **company profile**; semua konversi lewat WhatsApp, form, dan email. |
| A2 | Bahasa utama **Indonesia**. |
| A3 | Konten, gambar, dan logo masih placeholder. Logo final menyusul. |
| A4 | Font menggunakan Google Fonts (gratis) kecuali client punya brand guideline. |
| A5 | Hosting di Vercel atau VPS, tergantung preferensi client. |
| A6 | Tidak ada tombol/halaman bertuliskan harga final; harga hanya contoh "mulai dari". |

**Pertanyaan untuk client:**
1. Apakah ada logo, nama domain, dan brand guideline yang sudah ada?
2. Nomor WhatsApp, email, dan alamat resmi untuk ditampilkan?
3. Apakah ada aplikasi/web transaksi yang perlu ditautkan dari tombol "Beli Sekarang"?
4. Apakah ada data legalitas perusahaan (nama PT, NIB, izin terkait) yang boleh ditampilkan?
5. Apakah perlu program agen/reseller dan skema harganya ditampilkan?
6. Apakah perlu halaman Privacy Policy & Terms (sangat disarankan karena ada form yang mengumpulkan data pribadi)?
7. Preferensi hosting dan domain?

## 7. Analisis Referensi → Adaptasi untuk Payfast ID

| Section di referensi (Shivaa) | Dipakai? | Adaptasi untuk Payfast ID |
|---|---|---|
| Hero: headline + CTA + ilustrasi kanan | ✅ | Headline soal pulsa cepat; ilustrasi ponsel/transaksi |
| Grid 8 kartu layanan (ikon + judul + deskripsi) | ✅ | 8 produk: Pulsa, Paket Data, Token PLN, E-Wallet, Voucher Game, Tagihan, Kemitraan, Support 24/7 |
| About: ilustrasi + teks + CTA | ✅ | Cerita singkat perusahaan |
| Newsletter "Subscribe Now" | ➖ | Dijadikan CTA banner (tanpa newsletter di fase 1) |
| Experience: progress bar 0% | ✅ (diubah) | Counter statistik (jumlah transaksi, mitra, uptime) |
| Pricing: 3 paket | ✅ (diubah) | 3 tipe pengguna: Pelanggan, Agen, Reseller/Enterprise |
| Portfolio filter | ❌ | Tidak relevan; diganti daftar operator & mitra |
| Team members | ✅ (di About) | Tim manajemen (dummy) |
| Testimoni | ✅ | Testimoni pelanggan & agen (dummy) |
| Blog "Latest News" | ❌ | Fase 2 |
| Contact + logo partner | ✅ | Halaman Contact + strip logo operator |
| Footer 3 kolom | ✅ | Kontak, tautan, layanan, sosial media |
| Cart / Shop / My Account | ❌ | Tidak dipakai |

## 8. Sitemap

```
/                 → Home
/services         → Layanan
/about            → About Us
/contact          → Contact
/not-found        → 404
(/sitemap.xml, /robots.txt otomatis)
```

**Navigasi utama:** Home · Layanan · Tentang Kami · Kontak  +  tombol CTA **"Hubungi Kami"**

## 9. Functional Requirements

Prioritas memakai **MoSCoW**: **M**ust, **S**hould, **C**ould, **W**on't (fase ini).

### 9.1 Global (semua halaman)

| ID | Requirement | Prioritas |
|---|---|---|
| FR-G01 | Header sticky dengan logo, 4 menu, dan tombol CTA. Mengecil / bergaya solid saat di-scroll. | M |
| FR-G02 | Navigasi mobile berupa drawer/hamburger yang bisa diakses keyboard dan menutup saat link diklik. | M |
| FR-G03 | Menu aktif ditandai sesuai halaman. | M |
| FR-G04 | Footer: logo, deskripsi singkat, tautan cepat, daftar layanan, kontak, sosial media, copyright. | M |
| FR-G05 | Tombol WhatsApp melayang (floating) dengan pesan awal otomatis. | M |
| FR-G06 | Tombol "kembali ke atas" muncul setelah scroll. | S |
| FR-G07 | Animasi scroll-reveal halus; menghormati `prefers-reduced-motion`. | S |
| FR-G08 | Halaman 404 kustom dengan tautan ke Home. | M |
| FR-G09 | Banner info/pengumuman di atas header (opsional, bisa dimatikan lewat config). | C |

### 9.2 Home (`/`)

| ID | Requirement | Prioritas |
|---|---|---|
| FR-H01 | **Hero**: eyebrow, headline, subteks, 2 CTA (utama: "Hubungi Kami", sekunder: "Lihat Layanan"), ilustrasi. | M |
| FR-H02 | **Strip operator/mitra**: deretan logo placeholder (marquee atau grid). | S |
| FR-H03 | **Layanan**: grid 8 kartu (ikon, judul, deskripsi singkat, tautan ke `/services#slug`). | M |
| FR-H04 | **Keunggulan** ("Kenapa Payfast"): 4–6 poin dengan ikon. | M |
| FR-H05 | **Statistik**: 3–4 angka dengan animasi counter saat terlihat di viewport. | S |
| FR-H06 | **Cara Kerja**: 3 langkah bernomor. | S |
| FR-H07 | **Tipe Pengguna / Kemitraan**: 3 kartu (Pelanggan, Agen, Reseller), satu ditandai "Populer". | S |
| FR-H08 | **Tentang singkat**: ilustrasi + teks + tautan ke `/about`. | M |
| FR-H09 | **Testimoni**: carousel/grid 3 testimoni (nama, peran, kutipan). | S |
| FR-H10 | **FAQ**: accordion 5–6 pertanyaan. | S |
| FR-H11 | **CTA banner** penutup dengan latar warna brand. | M |

### 9.3 Services (`/services`)

| ID | Requirement | Prioritas |
|---|---|---|
| FR-S01 | **Page header** (breadcrumb + judul + subteks). | M |
| FR-S02 | **Daftar layanan lengkap**: 8 blok, masing-masing punya `id` anchor (mis. `#pulsa`) berisi deskripsi, fitur, dan CTA. | M |
| FR-S03 | **Tabel/kartu pilihan produk & denominasi** per kategori (daftar produk/denominasi tanpa menampilkan nominal harga). | S |
| FR-S04 | **Section Kemitraan & Integrasi (H2H/API)**: keuntungan, alur bergabung. | S |
| FR-S05 | **FAQ** khusus layanan. | S |
| FR-S06 | **CTA banner**. | M |
| FR-S07 | Halaman detail per layanan `/services/[slug]`. | W (fase 2) |

### 9.4 About Us (`/about`)

| ID | Requirement | Prioritas |
|---|---|---|
| FR-A01 | **Page header** (breadcrumb + judul). | M |
| FR-A02 | **Cerita perusahaan**: teks + gambar. | M |
| FR-A03 | **Visi & Misi**. | M |
| FR-A04 | **Nilai perusahaan**: 4 kartu (Cepat, Aman, Transparan, Ramah). | S |
| FR-A05 | **Timeline / milestone** perjalanan perusahaan. | C |
| FR-A06 | ~~**Tim**~~ (Dihapus dari scope tampilan publik). | W |
| FR-A07 | **Legalitas**: area untuk nama badan hukum, NIB/izin (diisi client). | S |
| FR-A08 | **CTA banner**. | M |

### 9.5 Contact (`/contact`)

| ID | Requirement | Prioritas |
|---|---|---|
| FR-C01 | **Page header**. | M |
| FR-C02 | **Kartu info kontak**: WhatsApp resmi, alamat kantor, jam operasional (Email Dukungan dihapus). | M |
| FR-C03 | **Form kontak**: Nama*, Email*, No. WhatsApp, Topik (dropdown: Pelanggan / Kemitraan / Integrasi / Lainnya), Pesan*, checkbox persetujuan. | M |
| FR-C04 | Validasi sisi client **dan** server (Zod); pesan error berbahasa Indonesia. | M |
| FR-C05 | Anti-spam: honeypot + rate limit; Cloudflare Turnstile opsional. | M |
| FR-C06 | Status submit: loading, sukses, gagal; form tidak hilang jika gagal. | M |
| FR-C07 | Pesan terkirim sebagai email ke alamat admin (Resend/SMTP). | M |
| FR-C08 | ~~**Peta embed Google Maps / Lokasi Kantor Operasional**~~ (Dihapus, diganti kartu komitmen layanan). | W |
| FR-C09 | Tautan cepat WhatsApp (`wa.me`). | M |

## 10. Non-Functional Requirements

### 10.1 Performa
| Metrik | Target (mobile, 4G) |
|---|---|
| Lighthouse Performance | ≥ 90 |
| LCP | < 2,5 detik |
| INP | < 200 ms |
| CLS | < 0,1 |
| JS awal per halaman | seminimal mungkin (Server Components default, `"use client"` hanya untuk komponen interaktif) |

Gambar memakai `next/image` (format modern, lazy loading, ukuran responsif). Font memakai `next/font` (self-hosted, tanpa layout shift).

### 10.2 SEO
- Metadata (title, description, canonical) unik per halaman; `lang="id"`.
- Open Graph & Twitter card dengan gambar sosial.
- `sitemap.xml` dan `robots.txt` dibuat otomatis lewat Next.js Metadata Routes.
- Structured data JSON-LD: `Organization`, `WebSite`, `FAQPage` (pada section FAQ).
- Satu `<h1>` per halaman, hierarki heading rapi, URL bersih.

### 10.3 Aksesibilitas (target WCAG 2.2 AA)
- Navigasi keyboard penuh, fokus terlihat jelas.
- Alt text pada gambar bermakna; ilustrasi dekoratif memakai `alt=""`.
- **Kontras warna:** teks putih di atas `#ee4d2d` hanya sekitar **3,7:1**, tidak memenuhi AA untuk teks kecil. Gunakan teks besar/tebal (≥ 18,66px bold atau ≥ 24px) pada tombol, atau pakai varian lebih gelap `#d43a1b` (≈ 4,8:1) untuk teks kecil. Detail di [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).
- Form punya label, pesan error terhubung via `aria-describedby`.
- Hormati `prefers-reduced-motion`.

### 10.4 Responsif
Breakpoint: 360 · 640 · 768 · 1024 · 1280 · 1536 px. Diuji pada ponsel (Android & iOS), tablet, dan desktop.

### 10.5 Keamanan & Privasi
- HTTPS wajib; security headers (CSP, X-Content-Type-Options, Referrer-Policy, dll.).
- Form: validasi server, sanitasi, rate limiting, tidak menyimpan data sensitif.
- Kredensial hanya di environment variable.
- Cantumkan persetujuan pengumpulan data di form; sediakan halaman Privacy Policy (disarankan).
- Dependensi dipantau (Dependabot/`npm audit`); Next.js selalu dijaga di patch terbaru karena ada rilis keamanan berkala.

### 10.6 Browser Support
Dua versi terakhir Chrome, Edge, Firefox, Safari (macOS & iOS), Samsung Internet.

## 11. Metrik Keberhasilan

| Metrik | Target 3 bulan pertama |
|---|---|
| Klik tombol WhatsApp | Dilacak sebagai event (baseline lalu optimasi) |
| Submit form kontak | Dilacak sebagai event konversi |
| Skor Core Web Vitals | "Good" untuk ≥ 75% kunjungan |
| Halaman terindeks Google | 4/4 halaman |
| Bounce rate Home | Ditargetkan menurun dari baseline |

Analytics: GA4 atau Plausible/Umami (pilih bersama client; jika memakai cookie, tambahkan consent banner).

## 12. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Konten dummy lupa diganti sebelum launch | Citra buruk | Checklist konten di [TASKS.md](./TASKS.md); flag `// TODO(content)` |
| Aset dari referensi (gambar/ilustrasi Shivaa) dipakai langsung | Masalah lisensi | Tidak memakai aset template; gunakan aset buatan sendiri/berlisensi bebas |
| Kontras warna brand rendah | Aksesibilitas | Aturan penggunaan warna di Design System |
| Klaim bisnis (mis. "resmi", "berizin") tanpa bukti | Risiko hukum/reputasi | Hanya tampilkan klaim yang diverifikasi client |
| Spam form | Inbox penuh | Honeypot + rate limit + Turnstile |
| Perubahan scope (muncul fitur transaksi) | Jadwal molor | Scope dikunci di dokumen ini; fitur baru → Fase 2 |

## 13. Deliverables

1. Source code di repository Git (Next.js 16, JavaScript).
2. Website ter-deploy di staging, lalu production.
3. Dokumentasi: README, panduan mengganti konten, env variables.
4. Aset: logo placeholder, favicon, gambar Open Graph, ilustrasi.
5. Laporan Lighthouse akhir.

## 14. Acceptance Criteria (Definition of Done)

- [ ] Keempat halaman tampil sesuai spesifikasi di semua breakpoint.
- [ ] Warna brand `#ee4d2d` konsisten sebagai warna utama.
- [ ] Semua requirement **Must** selesai; **Should** selesai ≥ 80%.
- [ ] Form kontak berhasil mengirim email pada environment production.
- [ ] Lighthouse mobile ≥ 90 (Performance, Accessibility, Best Practices, SEO) untuk keempat halaman.
- [ ] Tidak ada error di console, tidak ada tautan rusak.
- [ ] Metadata, sitemap, robots, dan structured data valid.
- [ ] Client menyetujui di staging (UAT).

## 15. Perkiraan Timeline

Estimasi untuk 1 developer frontend (bisa berubah sesuai ketersediaan konten client).

| Fase | Aktivitas | Estimasi |
|---|---|---|
| 0 | Kickoff, konfirmasi pertanyaan terbuka, setup repo | 1 hari |
| 1 | Design system + komponen dasar (header, footer, button, card) | 2–3 hari |
| 2 | Halaman Home | 3 hari |
| 3 | Halaman Services & About | 3 hari |
| 4 | Halaman Contact + form + email | 2 hari |
| 5 | SEO, aksesibilitas, performa, QA lintas perangkat | 2–3 hari |
| 6 | Staging, revisi client, deploy production | 2–3 hari |
| | **Total** | **± 15–18 hari kerja** |

## 16. Riwayat Dokumen

| Versi | Tanggal | Perubahan |
|---|---|---|
| 1.0 | 21 Okt 2026 | Draft awal |
| 1.1 | 21 Okt 2026 | Penyesuaian tech stack: beralih dari TypeScript ke JavaScript murni (JSX) |
| 1.2 | 22 Okt 2026 | Update penyesuaian: penghapusan harga pada layanan, penghapusan kartu 'Email Dukungan', penghapusan 'Lokasi Kantor Operasional' & map embed, penghapusan section 'Tim di balik payfast', serta penggantian logo bulat dari `public/logo.png` |
