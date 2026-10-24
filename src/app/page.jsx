// src/app/page.jsx
import { Hero } from "@/components/sections/Hero";
import { PartnerStrip } from "@/components/sections/PartnerStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PartnershipPlans } from "@/components/sections/PartnershipPlans";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = {
  title: "Payfast ID — Isi Ulang Pulsa & Produk Digital Cepat, Aman, Terpercaya",
  description:
    "Beli pulsa, paket data, token listrik PLN, top up e-wallet, dan voucher game di Payfast ID. Transaksi instan dalam hitungan detik dengan harga modal agen bersaing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Payfast ID — Isi Ulang Pulsa & Produk Digital Cepat, Aman, Terpercaya",
    description:
      "Beli pulsa, paket data, token PLN, e-wallet, dan voucher game proses otomatis 5–15 detik. Transaksi aman bergaransi, harga modal agen bersaing. Resmi CV. PAYFAST INDONESIA.",
    url: "https://payfast.id",
    siteName: "Payfast ID",
    images: [
      {
        url: "https://payfast.id/og-image.png",
        secureUrl: "https://payfast.id/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Payfast ID — Isi Ulang Pulsa & Produk Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payfast ID — Isi Ulang Pulsa & Produk Digital Cepat, Aman, Terpercaya",
    description:
      "Beli pulsa, paket data, token PLN, e-wallet, dan voucher game proses otomatis 5–15 detik. Transaksi aman bergaransi, harga modal agen bersaing. Resmi CV. PAYFAST INDONESIA.",
    images: ["https://payfast.id/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnerStrip />
      <ServicesGrid />
      <WhyUs />
      <Stats />
      <HowItWorks />
      <PartnershipPlans />
      <AboutTeaser />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
