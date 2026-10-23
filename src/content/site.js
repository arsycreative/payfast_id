// src/content/site.js

export const site = {
  name: "Payfast ID",
  tagline: "Isi Ulang Cepat, Aman, Terpercaya",
  description:
    "Payfast ID menyediakan pulsa, paket data, token listrik, e-wallet, dan voucher game dengan proses cepat dan harga bersaing.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://payfast.id",
  contact: {
    whatsapp: "628126666115", // format internasional tanpa +
    whatsappDisplay: "+62 812-6666-115",
    email: "halo@payfast.id",
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
  nav: [
    { label: "Home", href: "/" },
    { label: "Layanan", href: "/services" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Kontak", href: "/contact" },
  ],
};
