// src/content/home.js

export const homeContent = {
  hero: {
    eyebrow: "PULSA & PRODUK DIGITAL INDONESIA",
    title: "Isi Ulang Apa Saja, Cepat Sekali.",
    description:
      "Payfast ID membantu kamu membeli pulsa, paket data, token listrik, dan top up e-wallet dalam hitungan detik dengan sistem otomatis, harga bersaing, dan dukungan tim yang selalu siap.",
    ctaPrimary: {
      label: "Hubungi Kami",
      href: "/contact",
    },
    ctaSecondary: {
      label: "Lihat Layanan",
      href: "/services",
    },
    trustPoints: [
      { icon: "Zap", text: "Proses instan 5–15 detik" },
      { icon: "ShieldCheck", text: "Transaksi aman & bergaransi" },
      { icon: "Headset", text: "Support ramah setiap hari" },
    ],
  },
  partners: {
    title: "Mendukung Semua Operator & Layanan Populer",
    items: [
      { name: "Telkomsel", type: "Seluler" },
      { name: "Indosat Ooredoo", type: "Seluler" },
      { name: "XL Axiata", type: "Seluler" },
      { name: "Tri Indonesia", type: "Seluler" },
      { name: "Smartfren", type: "Seluler" },
      { name: "PLN Prabayar", type: "Listrik" },
      { name: "DANA", type: "E-Wallet" },
      { name: "GoPay", type: "E-Wallet" },
      { name: "OVO", type: "E-Wallet" },
      { name: "ShopeePay", type: "E-Wallet" },
    ],
  },
  whyUs: {
    eyebrow: "KENAPA MEMILIH PAYFAST",
    title: "Dibuat untuk Kecepatan dan Kepercayaan",
    subtitle:
      "Kami menggabungkan teknologi automasi modern dengan layanan pelanggan yang manusiawi demi kenyamanan transaksimu.",
    items: [
      {
        icon: "Zap",
        title: "Proses Super Cepat",
        description:
          "Transaksi otomatis langsung ke gateway operator, mayoritas sukses masuk dalam hitungan detik.",
      },
      {
        icon: "ShieldCheck",
        title: "Aman & Terpercaya",
        description:
          "Setiap data dan transaksi dijaga dengan enkripsi standar industri serta jaminan refund bila gagal.",
      },
      {
        icon: "BadgePercent",
        title: "Harga Bersaing",
        description:
          "Harga transparan tanpa markup tersembunyi, sangat cocok untuk pemakaian pribadi maupun konter agen.",
      },
      {
        icon: "Clock",
        title: "Tersedia Setiap Hari",
        description:
          "Sistem server cloud beroperasi 24 jam nonstop untuk melayani kebutuhan mendesak di waktu apa pun.",
      },
      {
        icon: "Headset",
        title: "Support Ramah & Responsif",
        description:
          "Bantuan langsung oleh tim manusia lewat WhatsApp resmi, siap mengawal kendala hingga tuntas.",
      },
      {
        icon: "Layers",
        title: "Produk Terlengkap",
        description:
          "Satu platform untuk semua produk: pulsa, data, token PLN, e-wallet, voucher game, hingga tagihan bulanan.",
      },
    ],
  },
  stats: {
    title: "Standar Keandalan & Komitmen Layanan Kami",
    items: [
      { value: "99.9%", label: "Uptime Server & Sistem" },
      { value: "24/7", label: "Transaksi Otomatis Nonstop" },
      { value: "100%", label: "Garansi Transaksi Aman" },
      { value: "500+", label: "Pilihan Produk Digital" },
    ],
  },
  howItWorks: {
    eyebrow: "CARA KERJA",
    title: "Tiga Langkah Mudah Bertransaksi",
    subtitle:
      "Tak perlu proses pendaftaran yang rumit untuk mulai bertransaksi di Payfast ID.",
    steps: [
      {
        step: "01",
        title: "Pilih Produk & Nominal",
        description:
          "Tentukan produk pulsa, paket data, token PLN, atau e-wallet serta nominal yang kamu butuhkan.",
      },
      {
        step: "02",
        title: "Lakukan Pembayaran",
        description:
          "Selesaikan pembayaran melalui QRIS, transfer bank, atau metode e-wallet yang tersedia secara praktis.",
      },
      {
        step: "03",
        title: "Selesai dalam Hitungan Detik!",
        description:
          "Produk langsung otomatis masuk ke nomor ponsel atau akun tujuanmu lengkap dengan notifikasi sukses.",
      },
    ],
  },
  partnership: {
    eyebrow: "BERGABUNG BERSAMA KAMI",
    title: "Pilih Cara Bermitra yang Paling Cocok",
    subtitle:
      "Kami membuka pintu kerja sama seluas-luasnya untuk pelanggan umum, pemilik konter, hingga developer bisnis.",
    plans: [
      {
        name: "Pelanggan Pribadi",
        forWho: "Pengguna pribadi",
        badge: null,
        description:
          "Solusi tepat untuk kebutuhan isi ulang pulsa, kuota, dan token listrik sehari-hari.",
        points: [
          "Akses seluruh produk digital lengkap",
          "Transaksi instan tanpa registrasi berbelit",
          "Customer support siap membantu lewat WhatsApp",
          "Tanpa biaya pendaftaran atau iuran bulanan",
        ],
        ctaText: "Mulai Sekarang",
        ctaHref: "/contact?topik=pelanggan",
        isPopular: false,
      },
      {
        name: "Mitra Agen Konter",
        forWho: "Pemilik konter & pebisnis UMKM",
        badge: "Paling Populer",
        description:
          "Dapatkan harga modal termurah untuk dijual kembali dengan margin keuntungan menarik.",
        points: [
          "Harga agen khusus tingkat distributor",
          "Format struk cetak dan bukti kirim digital",
          "Panduan operasional dan materi promosi gratis",
          "Prioritas antrian customer service agen",
          "Bonus reward pencapaian transaksi bulanan",
        ],
        ctaText: "Daftar Jadi Agen",
        ctaHref: "/member?tab=register",
        isPopular: true,
      },
      {
        name: "Reseller & Enterprise",
        forWho: "Startup, portal web & developer H2H",
        badge: "B2B Solution",
        description:
          "Integrasikan API transaksi produk digital langsung ke dalam aplikasi atau sistem bisnismu.",
        points: [
          "Harga modal grosir terbaik dengan volume tinggi",
          "Integrasi API / H2H stabil dengan webhook callback",
          "Dokumentasi API lengkap dan sandbox pengujian",
          "Dedicated Account Manager & SLA responsif",
        ],
        ctaText: "Hubungi Tim Sales",
        ctaHref: "/contact?topik=integrasi",
        isPopular: false,
      },
    ],
  },
  aboutTeaser: {
    eyebrow: "TENTANG PAYFAST ID",
    title: "Partner Isi Ulang Digital yang Bisa Diandalkan",
    description:
      "Payfast ID hadir dengan misi utama membuat transaksi produk digital di Indonesia menjadi transparan, tanpa antre, dan terjangkau. Berbasis teknologi server cloud yang tangguh, kami siap mendampingi ribuan transaksi setiap harinya.",
    checkPoints: [
      "Sistem transaksi otomatis beroperasi 24 jam nonstop",
      "Harga jujur, terbuka, dan tanpa biaya tersembunyi",
      "Dikelola oleh tim profesional dan berpengalaman di industri fintech",
    ],
    cta: {
      label: "Kenali Kami Lebih Jauh",
      href: "/about",
    },
  },
  testimonials: {
    eyebrow: "TESTIMONI PENGGUNA",
    title: "Kata Mereka Tentang Payfast ID",
    subtitle:
      "Kepuasan pelanggan dan mitra adalah tolok ukur kesuksesan utama bagi layanan kami.",
    items: [
      {
        name: "Rina Marlina",
        role: "Pelanggan Individu (Bandung)",
        quote:
          "Isi pulsa dan token listrik lewat Payfast ID selalu cepat banget dan nggak pernah ribet. Tengah malam token habis, 1 menit langsung terisi. Sudah langganan lebih dari setahun!",
        rating: 5,
      },
      {
        name: "Budi Santoso",
        role: "Pemilik Konter Berkah Cell (Surabaya)",
        quote:
          "Sejak gabung jadi mitra agen Payfast ID, margin keuntungan konter saya makin jelas. Servernya jarang sekali gangguan, dan CS-nya super sigap kalau ada pending operator.",
        rating: 5,
      },
      {
        name: "Dewi Anggraini",
        role: "Founder Aplikasi Komunitas (Jakarta)",
        quote:
          "Integrasi API H2H Payfast ID sangat rapi. Dokumentasinya jelas, tim teknis responsif mendampingi integrasi sampai live. Solusi terbaik untuk bisnis digital kami.",
        rating: 5,
      },
    ],
  },
  ctaBanner: {
    title: "Siap Mulai Bersama Payfast ID?",
    description:
      "Hubungi tim kami sekarang dan temukan kemudahan isi ulang produk digital maupun peluang bisnis kemitraan yang menguntungkan.",
    primaryCta: {
      label: "Chat via WhatsApp",
      href: "https://wa.me/628126666115?text=Halo%20Payfast%20ID,%20saya%20ingin%20tanya%20tentang%20layanan.",
    },
    secondaryCta: {
      label: "Kirim Formulir Pesan",
      href: "/contact",
    },
  },
};
