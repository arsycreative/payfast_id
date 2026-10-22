// src/app/about/page.jsx
import { PageHeader } from "@/components/sections/PageHeader";
import { CompanyStory } from "@/components/sections/CompanyStory";
import { VisionMission } from "@/components/sections/VisionMission";
import { CoreValues } from "@/components/sections/CoreValues";
import { Timeline } from "@/components/sections/Timeline";
import { LegalityBadge } from "@/components/sections/LegalityBadge";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = {
  title: "Tentang Kami — Mengenal Payfast ID",
  description:
    "Kenali Payfast ID: platform distribusi pulsa dan produk digital yang berkomitmen pada kecepatan transaksi, sistem 99.9% uptime, dan pemberdayaan ribuan konter agen di Indonesia.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="PROFIL PERUSAHAAN"
        title="Tentang Payfast ID"
        subtitle="Membangun ekosistem distribusi pulsa dan produk digital yang cepat, transparan, dan terpercaya bagi seluruh masyarakat Indonesia."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tentang Kami", href: "/about" },
        ]}
      />

      <CompanyStory />
      <VisionMission />
      <CoreValues />
      <Timeline />
      <LegalityBadge />
      <CtaBanner
        title="Ingin Tahu Lebih Banyak atau Ingin Bermitra?"
        description="Pintu kami selalu terbuka untuk diskusi kemitraan agen, integrasi sistem teknologi, maupun pertanyaan umum."
      />
    </>
  );
}
