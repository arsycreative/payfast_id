# Content Spec — Payfast ID

Semua teks di bawah adalah **placeholder** dan harus ditinjau/diganti client sebelum launch. Semua angka, nama, alamat, dan klaim bersifat contoh.

Konten disimpan di `src/content/*.js` (bukan hard-code di komponen) agar mudah diganti. Lihat [TECH_SPEC.md](./TECH_SPEC.md).

---

## 0. Data Global (`src/content/site.js`)

```js
export const site = {
  name: "Payfast ID",
  tagline: "Isi Ulang Cepat, Aman, Terpercaya",
  description:
    "Payfast ID menyediakan pulsa, paket data, token listrik, e-wallet, dan voucher game dengan proses cepat dan harga bersaing.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://payfast.id", // placeholder
  contact: {
    whatsapp: "6281234567890",           // format internasional tanpa +
    whatsappDisplay: "+62 812-3456-7890",
    email: "support@payfast.id",
    address: "Jl. Contoh Raya No. 123, Bandung, Jawa Barat 40111, Indonesia",
    hours: "Senin – Minggu, 07.00 – 22.00 WIB",
  },
  social: {
    instagram: "https://instagram.com/payfastid",
    facebook: "https://facebook.com/payfastid",
    tiktok: "https://tiktok.com/@payfastid",
    youtube: "https://youtube.com/@payfastid",
  },
  whatsappMessage: "Halo Payfast ID, saya ingin bertanya tentang layanan.",
};
```

### Navigasi

| Label | Href |
|---|---|
| Home | `/` |
| Layanan | `/services` |
| Tentang Kami | `/about` |
| Kontak | `/contact` |
| **CTA:** Hubungi Kami | `/contact` |

### Footer
- **Kolom 1:** logo putih + deskripsi singkat + ikon sosial media.
- **Kolom 2 – Tautan:** Home, Layanan, Tentang Kami, Kontak.
- **Kolom 3 – Layanan:** Pulsa, Paket Data, Token Listrik, E-Wallet, Voucher Game.
- **Kolom 4 – Kontak:** alamat, WhatsApp, email, jam operasional.
- **Baris bawah:** "© 2026 Payfast ID. Hak cipta dilindungi." + (opsional) Kebijakan Privasi · Syarat & Ketentuan.

---

## 1. Daftar Layanan (`src/content/services.js`)

| # | slug | Judul | Ikon (lucide) | Deskripsi singkat |
|---|---|---|---|---|
| 1 | `pulsa` | Pulsa All Operator | `Smartphone` | Isi ulang pulsa semua operator dengan proses instan dan harga bersaing. |
| 2 | `paket-data` | Paket Data | `Wifi` | Pilihan paket internet harian hingga bulanan untuk semua kebutuhan. |
| 3 | `token-listrik` | Token Listrik | `Zap` | Beli token PLN prabayar kapan saja, tanpa antre. |
| 4 | `e-wallet` | Top Up E-Wallet | `Wallet` | Isi saldo dompet digital favoritmu dengan cepat dan aman. |
| 5 | `voucher-game` | Voucher Game | `Gamepad2` | Top up diamond, UC, dan voucher game populer secara instan. |
| 6 | `tagihan` | Pembayaran Tagihan | `Receipt` | Bayar listrik, air, BPJS, dan tagihan bulanan lain dalam satu tempat. |
| 7 | `kemitraan` | Kemitraan Agen & Reseller | `Handshake` | Bangun bisnis pulsa dengan harga modal kompetitif dan dukungan penuh. |
| 8 | `support` | Layanan Pelanggan 24/7 | `Headset` | Tim kami siap membantu kapan pun kamu butuh. |

### Detail per layanan (untuk halaman `/services`)

Setiap blok memakai struktur data:

```js
/**
 * @typedef {Object} Service
 * @property {string} slug
 * @property {string} title
 * @property {string} icon
 * @property {string} short                 // untuk kartu di Home
 * @property {string} description           // paragraf di halaman Services
 * @property {string[]} features            // 3–5 poin
 * @property {{ label: string, priceFrom: number }[]} [examples] // contoh produk (opsional)
 * @property {{ label: string, href: string }} cta
 */
```

**Contoh (Pulsa):**
- Deskripsi: "Isi ulang pulsa untuk seluruh operator di Indonesia. Transaksi diproses otomatis sehingga pulsa langsung masuk dalam hitungan detik."
- Fitur: Proses instan · Semua operator · Nominal lengkap · Harga transparan · Bantuan jika gagal
- Contoh produk: Pulsa 5.000 (mulai dari Rp 6.000) · 10.000 (Rp 11.000) · 25.000 (Rp 25.500) · 50.000 (Rp 50.500) · 100.000 (Rp 99.800)
- CTA: "Beli Sekarang" → WhatsApp dengan pesan awal "Halo Payfast ID, saya ingin beli pulsa."

**Catatan tampilan harga:** tulis selalu "mulai dari" dan disclaimer "*Harga contoh dan dapat berubah sewaktu-waktu."

**Teks fitur untuk layanan lain (singkat):**
- *Paket Data*: Semua operator · Kuota harian/bulanan · Aktivasi cepat · Cek kuota mudah
- *Token Listrik*: Nominal 20rb–1jt · Token dikirim instan · Struk digital · Tersedia 24 jam
- *E-Wallet*: Berbagai dompet digital · Nominal fleksibel · Saldo langsung masuk · Aman
- *Voucher Game*: Game populer · Kode instan · Harga hemat · Promo berkala
- *Tagihan*: Listrik · Air · BPJS · Internet & TV · Bukti pembayaran
- *Kemitraan*: Harga modal khusus · Dashboard/panduan agen · Dukungan teknis · Tanpa biaya tersembunyi
- *Support*: WhatsApp & email · Respon cepat · Penanganan transaksi gagal · Jam layanan jelas (isi sesuai kenyataan)

---

## 2. HOME (`/`)

**Metadata**
- Title: `Payfast ID — Isi Ulang Pulsa & Produk Digital Cepat, Aman, Terpercaya`
- Description: `Beli pulsa, paket data, token listrik, e-wallet, dan voucher game di Payfast ID. Proses cepat, harga bersaing, layanan pelanggan siap membantu.`

### 2.1 Hero
- Eyebrow: `PULSA & PRODUK DIGITAL`
- H1: **Isi Ulang Apa Saja, Cepat Sekali.**
- Subteks: Payfast ID membantu kamu membeli pulsa, paket data, token listrik, dan top up e-wallet dalam hitungan detik, dengan harga bersaing dan layanan yang selalu siap.
- CTA utama: `Hubungi Kami` → `/contact`
- CTA sekunder: `Lihat Layanan` → `/services`
- Mini trust (3 poin kecil di bawah CTA): ⚡ Proses instan · 🔒 Transaksi aman · 💬 Support responsif *(pakai ikon lucide, bukan emoji)*
- Visual: `hero-illustration.svg` (ponsel dengan notifikasi sukses + koin + kilat)

### 2.2 Strip Mitra
- Label kecil: `Mendukung semua operator & layanan populer`
- 6–8 logo placeholder (grayscale, jadi berwarna saat hover).

### 2.3 Layanan
- Eyebrow: `LAYANAN KAMI`
- H2: Semua Kebutuhan Digitalmu, Satu Tempat
- Subteks: Dari pulsa sampai tagihan bulanan, Payfast ID siap membantu.
- Grid 8 kartu dari tabel layanan (4 kolom desktop, 2 tablet, 1 mobile).
- Tombol di bawah: `Lihat Semua Layanan` → `/services`

### 2.4 Keunggulan
- Eyebrow: `KENAPA PAYFAST`
- H2: Dibuat untuk Kecepatan dan Kepercayaan

| Ikon | Judul | Teks |
|---|---|---|
| `Zap` | Proses Super Cepat | Transaksi otomatis, mayoritas selesai dalam hitungan detik. |
| `ShieldCheck` | Aman & Terpercaya | Data dan transaksi dijaga dengan standar keamanan yang baik. |
| `BadgePercent` | Harga Bersaing | Harga transparan tanpa biaya tersembunyi. |
| `Clock` | Tersedia Setiap Hari | Layanan berjalan setiap hari sesuai jam operasional. |
| `Headset` | Support Ramah | Tim siap membantu lewat WhatsApp dan email. |
| `Layers` | Produk Lengkap | Pulsa, data, listrik, e-wallet, game, dan tagihan. |

### 2.5 Statistik (latar navy)
| Angka | Label |
|---|---|
| 50.000+ | Transaksi per bulan |
| 5.000+ | Mitra & agen aktif |
| 99,9% | Uptime sistem |
| 24/7 | Dukungan pelanggan |

*(Seluruh angka dummy; hanya tampilkan angka yang benar saat launch.)*

### 2.6 Cara Kerja
- Eyebrow: `CARA KERJA`
- H2: Tiga Langkah Mudah

| No | Judul | Teks |
|---|---|---|
| 01 | Pilih Produk | Tentukan produk dan nominal yang kamu butuhkan. |
| 02 | Lakukan Pembayaran | Selesaikan pembayaran lewat metode yang tersedia. |
| 03 | Selesai! | Produk langsung masuk ke nomor/akun tujuanmu. |

### 2.7 Kemitraan (pricing-style)
- Eyebrow: `BERGABUNG BERSAMA KAMI`
- H2: Pilih Cara Bermitra yang Cocok

| Kartu | Untuk | Poin | Tombol |
|---|---|---|---|
| **Pelanggan** | Pengguna pribadi | Semua produk digital · Proses instan · Support responsif · Tanpa biaya pendaftaran | Mulai Sekarang |
| **Agen** *(Populer)* | Pemilik konter / usaha kecil | Harga agen khusus · Panduan penggunaan · Prioritas bantuan · Bonus transaksi | Jadi Agen |
| **Reseller / Enterprise** | Bisnis & developer | Harga modal terbaik · Integrasi H2H/API · Account manager · SLA khusus | Hubungi Sales |

Semua tombol → `/contact?topik=kemitraan` (topik terisi otomatis di form).

### 2.8 Tentang Singkat
- Eyebrow: `TENTANG KAMI`
- H2: Partner Isi Ulang Digital yang Bisa Diandalkan
- Teks: Payfast ID hadir untuk membuat pembelian produk digital menjadi mudah, cepat, dan transparan. Dengan sistem yang andal dan tim yang peduli, kami melayani ribuan pelanggan dan mitra di seluruh Indonesia.
- Poin centang: Sistem otomatis 24 jam · Harga jujur dan transparan · Tim berpengalaman
- CTA: `Kenali Kami Lebih Jauh` → `/about`
- Visual: `about-illustration.svg`

### 2.9 Testimoni
- Eyebrow: `TESTIMONI`
- H2: Kata Mereka Tentang Payfast ID

| Nama | Peran | Kutipan |
|---|---|---|
| Rina Marlina | Pelanggan | Isi pulsa lewat Payfast ID selalu cepat dan nggak pernah ribet. Sudah langganan lebih dari setahun. |
| Budi Santoso | Pemilik Konter | Sejak jadi agen, margin saya lebih jelas dan tim supportnya sigap kalau ada kendala. |
| Dewi Anggraini | Founder Startup | Integrasi API-nya rapi dan dokumentasinya mudah dipahami. Tim teknisnya responsif. |

*(Dummy. Wajib diganti dengan testimoni nyata atau bagian ini disembunyikan.)*

### 2.10 FAQ
- H2: Pertanyaan yang Sering Diajukan

| Pertanyaan | Jawaban |
|---|---|
| Berapa lama pulsa masuk? | Umumnya dalam hitungan detik. Pada kondisi tertentu, proses dapat memakan waktu lebih lama tergantung gangguan operator. |
| Produk apa saja yang tersedia? | Pulsa, paket data, token listrik, top up e-wallet, voucher game, dan pembayaran tagihan. |
| Bagaimana jika transaksi gagal? | Hubungi kami lewat WhatsApp dengan bukti transaksi dan kami akan membantu proses penanganannya. |
| Bagaimana cara menjadi agen? | Isi form kemitraan di halaman Kontak dan tim kami akan menghubungimu. |
| Apakah tersedia integrasi API? | Ya, untuk kebutuhan bisnis tersedia integrasi H2H/API. Hubungi tim sales kami. |
| Jam layanan? | Sesuai jam operasional yang tercantum di halaman Kontak. |

### 2.11 CTA Banner
- H2: Siap Mulai Bersama Payfast ID?
- Teks: Hubungi kami sekarang dan temukan solusi isi ulang yang paling cocok untukmu.
- Tombol: `Chat via WhatsApp` (link `wa.me`) + `Kirim Pesan` → `/contact`

---

## 3. SERVICES (`/services`)

**Metadata**
- Title: `Layanan — Pulsa, Paket Data, Token Listrik & E-Wallet | Payfast ID`
- Description: `Lihat semua layanan Payfast ID: pulsa semua operator, paket data, token listrik, top up e-wallet, voucher game, tagihan, dan kemitraan agen.`

**Page header:** breadcrumb `Home / Layanan` · H1 `Layanan Kami` · Subteks "Solusi isi ulang dan pembayaran digital untuk semua kebutuhan."

**Section 1 – Navigasi cepat:** chip anchor ke 6 kategori utama (sticky di bawah header pada desktop).

**Section 2 – Blok layanan (berselang-seling kiri/kanan):** untuk tiap layanan: ikon, H2, deskripsi, daftar fitur (centang), pilihan produk & denominasi tanpa harga, tombol CTA. Memiliki `id` = slug.

**Section 3 – Kemitraan & Integrasi:**
- H2: Tumbuh Bersama Payfast ID
- Teks: Baik kamu pemilik konter maupun developer, kami punya skema kerja sama yang sesuai.
- Dua kolom: *Agen & Reseller* (keuntungan 4 poin) dan *Integrasi H2H/API* (fitur 4 poin: dokumentasi jelas, endpoint stabil, callback status transaksi, dukungan teknis).
- CTA: `Hubungi Tim Sales` → `/contact?topik=integrasi`

**Section 4 – Alur bergabung (4 langkah):** Hubungi kami → Verifikasi data → Aktivasi akun → Mulai bertransaksi.

**Section 5 – FAQ layanan** (3–4 pertanyaan, boleh dari FAQ Home).

**Section 6 – CTA Banner** (sama dengan Home).

---

## 4. ABOUT US (`/about`)

**Metadata**
- Title: `Tentang Kami | Payfast ID`
- Description: `Kenali Payfast ID: perusahaan penyedia pulsa dan produk digital yang berkomitmen pada kecepatan, keamanan, dan kepercayaan pelanggan.`

**Page header:** breadcrumb `Home / Tentang Kami` · H1 `Tentang Payfast ID`

**Cerita Perusahaan**
- Eyebrow `CERITA KAMI` · H2: Dimulai dari Kebutuhan Sederhana
- Teks (dummy): Payfast ID berdiri dengan satu tujuan: membuat isi ulang pulsa dan produk digital menjadi semudah mungkin. Berawal dari tim kecil yang melihat banyaknya antrean dan proses yang berbelit, kami membangun sistem yang otomatis, cepat, dan transparan. Kini Payfast ID melayani pelanggan, agen, dan mitra bisnis di berbagai kota.
- Visual: foto/ilustrasi tim.

**Visi & Misi**
- Visi: Menjadi platform produk digital pilihan masyarakat Indonesia yang cepat, aman, dan terpercaya.
- Misi (4 poin): 1) Menyediakan layanan yang cepat dan stabil. 2) Menjaga transparansi proses. 3) Memberdayakan agen dan mitra usaha. 4) Terus berinovasi demi kemudahan pelanggan.

**Nilai Perusahaan (4 kartu)**
| Ikon | Nilai | Teks |
|---|---|---|
| `Zap` | Cepat | Waktu pelanggan adalah prioritas kami. |
| `ShieldCheck` | Aman | Menjaga data dan transaksi dengan serius. |
| `Eye` | Transparan | Proses yang jelas dan terbuka. |
| `Heart` | Ramah | Melayani dengan hormat dan solutif. |

**Timeline (dummy)**
| Tahun | Peristiwa |
|---|---|
| 2020 | Payfast ID didirikan |
| 2021 | Meluncurkan layanan paket data & token listrik |
| 2023 | Program agen & reseller dibuka |
| 2025 | Integrasi H2H/API untuk mitra bisnis |
| 2026 | Memperluas layanan ke berbagai kota |

*(Catatan: Section Tim ditiadakan dari tampilan publik halaman Tentang Kami).*

**Legalitas (placeholder)**
- H2: Legalitas & Kepercayaan
- Isi: `[Nama badan hukum]`, `[NIB]`, `[Izin terkait yang berlaku]`, `[Alamat terdaftar]` — **diisi client; jika belum ada, sembunyikan section ini.**

**CTA Banner**

---

## 5. CONTACT (`/contact`)

**Metadata**
- Title: `Kontak | Payfast ID`
- Description: `Hubungi Payfast ID lewat WhatsApp atau form kontak online. Tim kami siap membantu pertanyaan, kemitraan, dan integrasi.`

**Page header:** breadcrumb `Home / Kontak` · H1 `Hubungi Kami` · Subteks "Ada pertanyaan atau ingin bermitra? Kami siap membantu."

**Kartu Info (3):** WhatsApp Resmi · Alamat Kantor · Jam Operasional. Tiap kartu punya ikon `MessageCircle`, `MapPin`, `Clock`. *(Email Dukungan ditiadakan).*

**Form Kontak**

| Field | Tipe | Wajib | Validasi |
|---|---|---|---|
| Nama Lengkap | text | ✅ | 2–80 karakter |
| Email | email | ✅ | format email valid |
| No. WhatsApp | tel | ❌ | angka, awalan 08 / +62, 9–15 digit |
| Topik | select | ✅ | `pelanggan`, `kemitraan`, `integrasi`, `lainnya` (bisa terisi dari query `?topik=`) |
| Pesan | textarea | ✅ | 10–1000 karakter |
| Persetujuan | checkbox | ✅ | "Saya setuju data saya digunakan untuk menanggapi pesan ini." |
| (tersembunyi) | honeypot | – | harus kosong |

**Teks status**
- Sukses: "Terima kasih! Pesanmu sudah kami terima. Kami akan membalas dalam 1×24 jam."
- Gagal: "Maaf, pesan belum terkirim. Silakan coba lagi atau hubungi kami lewat WhatsApp."
- Rate limit: "Terlalu banyak percobaan. Coba lagi beberapa menit lagi."

*(Catatan: Peta embed / Lokasi Kantor Operasional ditiadakan; kolom pendamping form diisi tombol WhatsApp langsung dan kartu Komitmen Layanan Payfast ID).*

---

## 6. 404 (`not-found.jsx`)
- H1: `404 — Halaman Tidak Ditemukan`
- Teks: Sepertinya halaman yang kamu cari sudah dipindahkan atau tidak ada.
- Tombol: `Kembali ke Home`.

---

## 7. Checklist Penggantian Konten (sebelum launch)

- [ ] Logo, favicon, gambar OG final
- [ ] Nomor WhatsApp, email, alamat, jam operasional asli
- [ ] Link sosial media asli
- [ ] Statistik angka asli (atau hapus section)
- [ ] Testimoni asli (atau hapus section)
- [ ] Foto & nama tim asli
- [ ] Data legalitas perusahaan
- [ ] Logo operator/mitra resmi (dengan izin)
- [ ] Harga contoh produk disesuaikan
- [ ] Kebijakan Privasi & Syarat Ketentuan
- [ ] Semua `TODO(content)` di kode sudah dibersihkan
