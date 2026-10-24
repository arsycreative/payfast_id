// src/content/site.js

export const site = {
  name: "Payfast ID",
  companyName: "CV. PAYFAST INDONESIA",
  tagline: "Isi Ulang Cepat, Aman, Terpercaya",
  description:
    "Beli pulsa all operator, kuota internet, token listrik PLN, top up e-wallet, dan voucher game dengan proses otomatis 5–15 detik. Transaksi aman, harga modal agen bersaing. Resmi CV. PAYFAST INDONESIA.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://payfast.id",
  contact: {
    company: "CV. PAYFAST INDONESIA",
    whatsapp: "628126666115", // format internasional tanpa +
    whatsappDisplay: "+62 812-6666-115",
    email: "halo@payfast.id",
    city: "Cilacap, Jawa Tengah",
    address:
      "Jl Srandil No.18 RT. 001 RW. 001 Karangbenda, Kec. Adipala, Kab. Cilacap, Jawa Tengah 53271",
    hours: "Senin – Minggu, 07.00 – 22.00 WIB",
  },
  social: {
    instagram: "https://instagram.com/payfastid",
    facebook: "https://facebook.com/payfastid",
    tiktok: "https://tiktok.com/@payfastid",
    youtube: "https://youtube.com/@payfastid",
  },
  whatsappMessage: "Halo Payfast ID, saya ingin bertanya tentang layanan.",
  downloadAppUrl: "/", // URL aplikasi (sementara diarahkan ke home "/")
  nav: [
    { label: "Home", href: "/" },
    { label: "Layanan", href: "/services" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Kontak", href: "/contact" },
  ],
};
