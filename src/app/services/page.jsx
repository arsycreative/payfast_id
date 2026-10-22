// src/app/services/page.jsx
import Link from "next/link";
import { services } from "@/content/services";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceBlock } from "@/components/sections/ServiceBlock";
import { PartnershipDetail } from "@/components/sections/PartnershipDetail";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Container } from "@/components/shared/Container";

export const metadata = {
  title: "Layanan — Pulsa, Paket Data, Token Listrik & E-Wallet",
  description:
    "Lihat katalog lengkap layanan Payfast ID: pulsa all operator, kuota internet, token listrik PLN, top up e-wallet, voucher game, dan kemitraan agen konter.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="KATALOG LENGKAP"
        title="Layanan Produk Digital"
        subtitle="Solusi transaksi isi ulang cepat dan pembayaran tagihan bulanan dengan proses otomatis dan praktis."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Layanan", href: "/services" },
        ]}
      />

      {/* Quick Anchor Category Bar */}
      <section className="bg-white border-b border-neutral-200/80 sticky top-[64px] sm:top-[73px] z-30 shadow-xs">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto py-3.5 no-scrollbar">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider shrink-0 mr-2">
              Lompat Ke:
            </span>
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 hover:bg-primary-50 hover:text-primary-600 text-neutral-700 transition-colors shrink-0 whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Service Blocks */}
      <section className="py-8 bg-white">
        <Container>
          {services.map((service, index) => (
            <ServiceBlock key={service.slug} service={service} index={index} />
          ))}
        </Container>
      </section>

      {/* Partnership & API Section */}
      <PartnershipDetail />

      {/* FAQ specific for services */}
      <FaqSection
        title="Pertanyaan Seputar Layanan"
        subtitle="Ketahui lebih lanjut mengenai proses transaksi, estimasi waktu pengiriman produk, dan jaminan keamanan saldo."
      />

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
