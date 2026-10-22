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
