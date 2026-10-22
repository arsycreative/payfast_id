// src/app/contact/page.jsx
import { MessageCircle, Check } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/utils";

export const metadata = {
  title: "Hubungi Kami — Layanan Bantuan & Kemitraan",
  description:
    "Hubungi Customer Service Payfast ID via WhatsApp dan formulir online resmi. Bantuan kendala transaksi, pendaftaran agen, dan integrasi API.",
  alternates: {
    canonical: "/contact",
  },
};

export default async function ContactPage({ searchParams }) {
  const resolvedParams = (await searchParams) || {};
  const currentTopic = resolvedParams.topik || "pelanggan";

  return (
    <>
      <PageHeader
        badge="RESPONS CEPAT"
        title="Hubungi Tim Payfast ID"
        subtitle="Ada pertanyaan seputar layanan, kendala transaksi, atau rencana kemitraan agen? Kami selalu siap membantu."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Kontak", href: "/contact" },
        ]}
      />

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 bg-neutral-50/60 border-b border-neutral-200/80">
        <Container>
          <ContactInfo />
        </Container>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-16 md:py-24 bg-white border-b border-neutral-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm defaultTopic={currentTopic} />
            </div>

            {/* Quick Chat & Trust Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-neutral-900 text-white p-8 rounded-3xl shadow-xl border border-neutral-800 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Lebih Suka Chat Langsung?
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Untuk respons instan dalam beberapa menit, kirimkan pertanyaanmu langsung ke tim Customer Support kami melalui WhatsApp.
                </p>
                <div className="pt-2">
                  <Button
                    href={waLink("Halo Payfast ID, saya ingin bertanya tentang layanan.")}
                    variant="whatsapp"
                    size="md"
                    icon={MessageCircle}
                    className="w-full"
                  >
                    Buka WhatsApp Sekarang
                  </Button>
                </div>
              </div>

              {/* Service Commitments Card */}
              <div className="bg-neutral-50/80 rounded-3xl p-8 border border-neutral-200/80 space-y-5">
                <h4 className="text-base font-bold font-heading text-secondary-800">
                  Komitmen Layanan Payfast ID
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary-800">Respon Cepat & Tanggap</p>
                      <p className="text-xs text-neutral-600 leading-relaxed">Tim support kami merespons pertanyaan dan laporan secepatnya di jam kerja.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary-800">Bantuan Transaksi 24 Jam</p>
                      <p className="text-xs text-neutral-600 leading-relaxed">Investigasi kendala saldo atau nomor tujuan diproses tuntas hingga berhasil.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary-800">Dukungan Khusus Mitra Agen</p>
                      <p className="text-xs text-neutral-600 leading-relaxed">Panduan pendaftaran dan konsultasi langsung bagi konter & developer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
