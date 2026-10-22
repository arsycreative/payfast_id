// src/components/sections/PartnershipDetail.jsx
import { Store, Code2, Check, ArrowRight, UserCheck, Key, Rocket } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/shared/Reveal";

export function PartnershipDetail() {
  const steps = [
    {
      step: "1",
      title: "Hubungi Kami",
      desc: "Isi form kontak kemitraan atau chat tim sales via WhatsApp.",
      icon: Store,
    },
    {
      step: "2",
      title: "Verifikasi Data",
      desc: "Tim kami mengonfirmasi nomor konter atau profil teknis bisnismu.",
      icon: UserCheck,
    },
    {
      step: "3",
      title: "Aktivasi Akun",
      desc: "Dapatkan akses harga modal agen atau API Key & webhook.",
      icon: Key,
    },
    {
      step: "4",
      title: "Mulai Bertransaksi",
      desc: "Langsung lakukan transaksi dan nikmati margin keuntungan optimal.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-neutral-50/60 border-b border-neutral-200/80">
      <Container>
        <SectionHeading
          eyebrow="PELUANG KERJA SAMA"
          title="Tumbuh Bersama Payfast ID"
          subtitle="Baik kamu pengusaha konter pulsa fisik, pemilik toko online, maupun developer platform fintech, kami menyediakan jalur kerja sama yang tepat."
          centered
        />

        {/* 2 Big Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {/* Column 1: Agen & Reseller */}
          <Reveal>
            <Card className="h-full p-6 sm:p-8 md:p-10 border-neutral-200/80 bg-white">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                <Store className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-secondary-800 mb-2">
                Mitra Agen & Konter Pulsa
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Pilihan utama untuk pemilik toko konter, UMKM warung kelontong, maupun perorangan yang ingin menambah pemasukan harian.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Harga modal distributor langsung bersaing",
                  "Format struk transaksi siap cetak via printer bluetooth",
                  "Panduan operasional dan materi banner promosi gratis",
                  "Jaminan bantuan penanganan transaksi pending",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-neutral-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                href="/contact?topik=kemitraan"
                variant="primary"
                size="md"
                className="w-full"
              >
                Daftar Jadi Agen
              </Button>
            </Card>
          </Reveal>

          {/* Column 2: Integrasi H2H/API */}
          <Reveal delay={0.15}>
            <Card className="h-full p-6 sm:p-8 md:p-10 border-neutral-200/80 bg-secondary-900 text-white">
              <div className="w-14 h-14 rounded-2xl bg-secondary-800 text-primary-400 flex items-center justify-center mb-6 border border-neutral-700">
                <Code2 className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                Integrasi H2H & REST API
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Solusi bagi startup, aplikasi mobile, dan platform pembayaran digital yang membutuhkan endpoint transaksi cepat dan teruji.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Dokumentasi API RESTful yang rapi dan mudah diintegrasikan",
                  "Webhook callback status transaksi otomatis secara real-time",
                  "Endpoint stabil dengan server cloud 99.9% uptime",
                  "Dukungan teknis dedicated via grup developer WhatsApp",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-neutral-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                href="/contact?topik=integrasi"
                variant="white"
                size="md"
                className="w-full text-secondary-900 hover:text-primary-600"
              >
                Hubungi Tim Sales API
              </Button>
            </Card>
          </Reveal>
        </div>

        {/* 4 Steps Alur Bergabung */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-primary-600 mb-1 block">
              LANGKAH BERGABUNG
            </span>
            <h3 className="text-2xl font-bold text-secondary-800 font-heading">
              Alur Mudah Menjadi Mitra Payfast ID
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, sIdx) => {
              const StepIcon = st.icon;
              return (
                <div
                  key={sIdx}
                  className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm text-center relative"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-4">
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-primary-500 block mb-1">
                    LANGKAH 0{st.step}
                  </span>
                  <h4 className="text-base font-bold text-secondary-800 mb-1 font-heading">
                    {st.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
