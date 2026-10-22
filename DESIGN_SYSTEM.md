# Design System — Payfast ID

Warna utama dari client: **`#ee4d2d`**. Warna lain dipilih agar serasi: navy tua untuk kesan tepercaya (fintech), amber sebagai aksen hangat, dan netral sedikit hangat.

---

## 1. Warna

### 1.1 Primary — Orange/Red (brand)

| Token | Hex | Penggunaan |
|---|---|---|
| `primary-50` | `#FFF4F1` | Latar section lembut |
| `primary-100` | `#FFE5DE` | Latar ikon, badge, hover ringan |
| `primary-200` | `#FFCBBD` | Border lembut |
| `primary-300` | `#FFA48C` | Dekorasi |
| `primary-400` | `#F97A58` | Hover gradien |
| **`primary-500`** | **`#EE4D2D`** | **Warna brand: tombol utama, ikon, highlight** |
| `primary-600` | `#D43A1B` | Hover tombol, **teks kecil berwarna brand** |
| `primary-700` | `#B02C14` | Active / pressed |
| `primary-800` | `#8A2412` | Dekorasi gelap |
| `primary-900` | `#5C190D` | Dekorasi sangat gelap |

### 1.2 Secondary & Aksen

| Token | Hex | Penggunaan |
|---|---|---|
| `secondary-900` | `#12162B` | Footer, section gelap |
| **`secondary-800`** | **`#1B1F3B`** | **Heading, latar gelap utama (navy)** |
| `secondary-700` | `#2A3055` | Kartu pada latar gelap |
| `accent-400` | `#FFC24B` | Aksen (bintang rating, badge "Populer") |
| `accent-500` | `#FFB020` | Aksen utama |

### 1.3 Netral

| Token | Hex | Penggunaan |
|---|---|---|
| `neutral-0` | `#FFFFFF` | Latar kartu |
| `neutral-50` | `#FFF9F6` | Latar halaman alternatif (sedikit hangat) |
| `neutral-100` | `#F4F5F7` | Latar section abu |
| `neutral-200` | `#E5E7EB` | Border |
| `neutral-400` | `#9CA3AF` | Placeholder |
| `neutral-600` | `#4B5563` | Teks isi |
| `neutral-800` | `#1F2937` | Teks kuat |
| `neutral-900` | `#111827` | Teks paling gelap |

### 1.4 Semantik

| Token | Hex | Penggunaan |
|---|---|---|
| `success` | `#16A34A` | Form sukses, indikator uptime |
| `warning` | `#D97706` | Peringatan |
| `danger` | `#DC2626` | Error form |
| `info` | `#2563EB` | Informasi |

### 1.5 Aturan Kontras (penting)

| Kombinasi | Rasio | Boleh dipakai untuk |
|---|---|---|
| Putih di atas `#ee4d2d` | ≈ 3,7 : 1 | **Hanya teks besar/tebal** (tombol ≥ 16px `font-semibold` dianggap batas; disarankan ≥ 18px bold) |
| Putih di atas `#d43a1b` | ≈ 4,8 : 1 | Teks kecil/normal ✅ |
| `#d43a1b` di atas putih | ≈ 4,8 : 1 | Tautan & teks berwarna brand ✅ |
| `#ee4d2d` di atas putih | ≈ 3,7 : 1 | Ikon, border, elemen dekoratif; **bukan** teks kecil |
| Putih di atas `#1B1F3B` | > 14 : 1 | Semua teks ✅ |

**Aturan praktis:** tombol primer memakai latar `primary-500` dengan teks putih `font-semibold` ukuran ≥ 16px dan hover ke `primary-600`; teks tautan berwarna brand memakai `primary-600`.

### 1.6 Gradien

```css
--gradient-brand: linear-gradient(135deg, #F97A58 0%, #EE4D2D 50%, #D43A1B 100%);
--gradient-hero:  linear-gradient(180deg, #FFF4F1 0%, #FFFFFF 100%);
--gradient-dark:  linear-gradient(135deg, #1B1F3B 0%, #12162B 100%);
```

---

## 2. Implementasi Token (Tailwind CSS v4)

Tailwind v4 memakai konfigurasi **CSS-first**. Letakkan di `src/app/globals.css`:

```css
@import "tailwindcss";

@theme {
  /* Primary */
  --color-primary-50:  #FFF4F1;
  --color-primary-100: #FFE5DE;
  --color-primary-200: #FFCBBD;
  --color-primary-300: #FFA48C;
  --color-primary-400: #F97A58;
  --color-primary-500: #EE4D2D;
  --color-primary-600: #D43A1B;
  --color-primary-700: #B02C14;
  --color-primary-800: #8A2412;
  --color-primary-900: #5C190D;

  /* Secondary (navy) */
  --color-secondary-700: #2A3055;
  --color-secondary-800: #1B1F3B;
  --color-secondary-900: #12162B;

  /* Accent */
  --color-accent-400: #FFC24B;
  --color-accent-500: #FFB020;

  /* Neutral */
  --color-neutral-50:  #FFF9F6;
  --color-neutral-100: #F4F5F7;
  --color-neutral-200: #E5E7EB;
  --color-neutral-400: #9CA3AF;
  --color-neutral-600: #4B5563;
  --color-neutral-800: #1F2937;
  --color-neutral-900: #111827;

  /* Semantic */
  --color-success: #16A34A;
  --color-warning: #D97706;
  --color-danger:  #DC2626;
  --color-info:    #2563EB;

  /* Font (diisi dari next/font lewat CSS variable) */
  --font-heading: var(--font-jakarta), ui-sans-serif, system-ui, sans-serif;
  --font-body:    var(--font-inter), ui-sans-serif, system-ui, sans-serif;

  /* Radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;

  /* Shadow */
  --shadow-card:  0 1px 2px rgb(17 24 39 / 0.04), 0 8px 24px rgb(17 24 39 / 0.06);
  --shadow-hover: 0 4px 8px rgb(17 24 39 / 0.06), 0 16px 40px rgb(238 77 45 / 0.18);
  --shadow-brand: 0 8px 24px rgb(238 77 45 / 0.35);
}

body {
  font-family: var(--font-body);
  color: var(--color-neutral-600);
  background: #fff;
}
h1, h2, h3, h4 { font-family: var(--font-heading); color: var(--color-secondary-800); }
```

Pemakaian: `bg-primary-500`, `text-secondary-800`, `rounded-lg`, `shadow-card`, dst.

---

## 3. Tipografi

| Peran | Font | Bobot |
|---|---|---|
| Heading | **Plus Jakarta Sans** | 700, 800 |
| Body & UI | **Inter** | 400, 500, 600 |

Keduanya via `next/font/google` (self-hosted otomatis, tanpa layout shift), subset `latin`.

```jsx
// src/app/layout.jsx
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"], variable: "--font-jakarta", weight: ["600", "700", "800"], display: "swap",
});
```

### Skala tipografi (responsif)

| Gaya | Mobile | Desktop | Line-height | Bobot |
|---|---|---|---|---|
| Display (H1 hero) | 36px | 56–64px | 1.1 | 800 |
| H1 (page header) | 32px | 44px | 1.15 | 800 |
| H2 (judul section) | 28px | 40px | 1.2 | 700 |
| H3 | 20px | 24px | 1.3 | 700 |
| H4 | 18px | 20px | 1.4 | 600 |
| Body L | 17px | 18px | 1.7 | 400 |
| Body | 16px | 16px | 1.7 | 400 |
| Small | 14px | 14px | 1.5 | 400 |
| Eyebrow (label atas judul) | 13px | 14px | 1.2 | 700, uppercase, letter-spacing 0.08em, warna `primary-600` |

Gunakan `clamp()` atau kelas responsif Tailwind agar skala mulus.

---

## 4. Layout & Spacing

- **Container:** `max-width: 1200px`, padding horizontal 16px (mobile) / 24px (tablet) / 32px (desktop).
- **Grid:** 12 kolom desktop, 6 tablet, 4 mobile; gap 24px.
- **Skala spacing:** kelipatan 4px (Tailwind default).
- **Jarak antar section:** 64px (mobile) → 96px (tablet) → 120px (desktop).
- **Breakpoint:** `sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536`.
- **Z-index:** header 50 · drawer 60 · floating WA 40 · modal 70.

---

## 5. Komponen UI

### 5.1 Button

| Varian | Latar | Teks | Hover |
|---|---|---|---|
| Primary | `primary-500` | putih, semibold | `primary-600` + `shadow-brand` |
| Secondary | putih | `secondary-800` | border `primary-500`, teks `primary-600` |
| Dark | `secondary-800` | putih | `secondary-700` |
| Ghost | transparan | `primary-600` | latar `primary-50` |

- Tinggi: sm 40px · md 48px · lg 56px; radius penuh (pill) atau `radius-md`.
- State: hover, focus-visible (ring 2px `primary-500` + offset 2px), disabled (opacity 50%), loading (spinner).
- Area sentuh minimal 44×44px.

### 5.2 Card Layanan
Latar putih, border `neutral-200`, radius `lg`, padding 24–32px, ikon dalam lingkaran `primary-100` (ikon `primary-500`). Hover: naik 4px + `shadow-hover` + border `primary-200`. Judul H3, deskripsi 2–3 baris, tautan "Selengkapnya →".

### 5.3 Card Kemitraan (pricing-style)
3 kartu; kartu tengah di-highlight (border `primary-500`, badge "Populer" `accent-500`, sedikit lebih besar di desktop). Berisi ikon, nama tipe, deskripsi, daftar fitur (ikon centang `success`), tombol.

### 5.4 Form
Label di atas input; input tinggi 48px, border `neutral-200`, radius `md`; fokus: border + ring `primary-500`. Error: border `danger`, pesan di bawah, ikon peringatan. Honeypot disembunyikan lewat CSS, bukan `display:none` saja (gunakan `aria-hidden` + posisi off-screen).

### 5.5 Komponen lain
- **Badge/Chip** — pill, latar `primary-100`, teks `primary-700`.
- **Accordion (FAQ)** — satu item terbuka; ikon plus/minus; animasi tinggi halus.
- **Testimonial Card** — kutipan, avatar bulat, nama, peran, 5 bintang `accent-500`.
- **Stat Counter** — angka besar (Display) berwarna `primary-500`, label kecil.
- **Page Header** — latar `gradient-hero` + pola dekoratif, breadcrumb, H1.
- **CTA Banner** — latar `gradient-brand` atau `secondary-800`, teks putih, tombol putih/aksen.
- **Navbar** — transparan di atas hero → putih + shadow setelah scroll 16px.
- **Floating WhatsApp** — lingkaran 56px hijau WhatsApp `#25D366`, pojok kanan bawah, ikon putih; tampil di semua halaman.

---

## 6. Ikonografi & Ilustrasi

- **Ikon:** `lucide-react`, stroke 1.75–2px, gaya konsisten. Contoh pemetaan:
  Pulsa → `Smartphone` · Paket Data → `Wifi` · Token PLN → `Zap` · E-Wallet → `Wallet` · Voucher Game → `Gamepad2` · Tagihan → `Receipt` · Kemitraan → `Handshake` · Support → `Headset`.
- **Ilustrasi:** gaya flat/semi-flat bernuansa oranye + navy. Untuk fase placeholder gunakan SVG buatan sendiri atau sumber berlisensi bebas (mis. unDraw, Storyset, Open Peeps), yang diberi warna brand. **Jangan memakai aset dari template Shivaa.**
- **Foto:** placeholder dari sumber berlisensi bebas (Unsplash/Pexels) disimpan **lokal** di `/public/images` (bukan hotlink). Jika memakai orang, tampilkan tampilan natural dan beragam.
- **Dekorasi:** blob/lingkaran lembut `primary-100`, pola titik, bentuk gelombang di pemisah section.

### Daftar aset placeholder yang dibutuhkan

| File | Ukuran | Dipakai di |
|---|---|---|
| `logo.svg`, `logo-white.svg` | vektor | Header, footer |
| `favicon.ico`, `icon.svg`, `apple-icon.png` | 32/180px | Browser |
| `og-image.png` | 1200×630 | Open Graph |
| `hero-illustration.svg` | ~600×500 | Hero Home |
| `about-illustration.svg` | ~560×460 | About Home & About |
| `how-it-works-*.svg` (3) | ~200×200 | Cara kerja |
| `operators/*.svg` (6–8) | ~120×48 | Strip mitra (logo placeholder netral) |
| `team/*.jpg` (4–6) | 600×600 | Tim |
| `avatar/*.jpg` (3) | 160×160 | Testimoni |
| `contact-illustration.svg` | ~480×400 | Contact |

> Untuk logo operator (Telkomsel, XL, dll.) pakai **logo placeholder bergaya netral**. Logo merek asli terikat aturan penggunaan merek dagang, jadi minta izin/aset resmi ke client sebelum dipakai.

---

## 7. Motion

| Efek | Spesifikasi |
|---|---|
| Scroll reveal | fade + naik 16–24px, durasi 500ms, easing `ease-out`, sekali per elemen, stagger 80ms |
| Hover kartu | translateY(-4px), 200ms |
| Counter angka | 1,2 detik saat masuk viewport |
| Hero | ilustrasi melayang pelan (float 6s) — opsional |
| Marquee mitra | loop lambat, berhenti saat hover/`prefers-reduced-motion` |

Library: `motion` (sebelumnya Framer Motion) atau CSS murni + `IntersectionObserver`. **Wajib** menghormati `prefers-reduced-motion: reduce`.

---

## 8. Pola Halaman

- **Ritme section:** latar berselang-seling — putih → `neutral-50`/`primary-50` → putih → gelap (`secondary-800`) untuk statistik/CTA.
- **Judul section:** eyebrow (brand) + H2 + subteks maks 60 karakter/baris (lebar teks ≤ 640px), rata tengah.
- **Hero Home:** 2 kolom desktop (teks kiri, ilustrasi kanan), 1 kolom mobile (teks dulu).
- **Page header (halaman dalam):** tinggi ±240px, latar `gradient-hero`, breadcrumb "Home / Layanan".

---

## 9. Checklist Konsistensi

- [ ] Hanya warna dari token; tidak ada hex acak di komponen.
- [ ] Teks kecil berwarna brand memakai `primary-600`.
- [ ] Semua tombol punya state hover/focus/disabled.
- [ ] Semua gambar punya `width`/`height` atau `fill` + `sizes`.
- [ ] Heading berurutan (satu H1 per halaman).
- [ ] Animasi dimatikan saat `prefers-reduced-motion`.
