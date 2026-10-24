// src/app/privacy/page.jsx
import Link from "next/link";
import { Shield, Lock, Eye, Database, Clock, FileCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/utils";

export const metadata = {
  title: "Kebijakan Privasi — Payfast ID",
  description:
    "Kebijakan privasi resmi Payfast ID: komitmen perlindungan data pribadi pengguna, enkripsi transaksi, dan transparansi pemrosesan produk digital.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        badge="PRIVASI & KEAMANAN"
        title="Kebijakan Privasi"
        subtitle="Komitmen Payfast ID dalam menjaga kerahasiaan, keamanan, dan integritas data pribadi seluruh pengguna dan mitra kami."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Kebijakan Privasi", href: "/privacy" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white border-b border-neutral-200/80">
        <Container size="sm">
          {/* Metadata Banner */}
          <div className="mb-12 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary-500 shrink-0" />
              <span>Terakhir Diperbarui: <strong>Oktober 2026</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Sesuai Regulasi Pelindungan Data Pribadi (UU PDP)</span>
            </div>
          </div>

          {/* Privacy Content Article */}
          <article className="prose prose-neutral max-w-none space-y-10 text-neutral-700 leading-relaxed text-sm sm:text-base">
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                1. Komitmen Perlindungan Data Anda
              </h2>
              <p>
                Di <strong>Payfast ID</strong> (<strong>CV. PAYFAST INDONESIA</strong>), privasi dan keamanan informasi pengguna adalah prioritas tertinggi kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat menggunakan platform transaksi pulsa dan produk digital kami.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                2. Informasi yang Kami Kumpulkan
              </h2>
              <p>
                Kami hanya mengumpulkan informasi yang esensial untuk memproses transaksi produk digital dan memberikan layanan terbaik:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose my-4">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <div className="w-8 h-8 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-3">
                    <Database className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-secondary-800 mb-1">Data Transaksi</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Nomor ponsel tujuan isi ulang, ID Pelanggan PLN, nomor e-wallet, atau ID akun game.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-secondary-800 mb-1">Data Kontak</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Nama lengkap dan nomor WhatsApp aktif untuk pengiriman bukti struk dan notifikasi pesanan.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-secondary-800 mb-1">Data Keamanan</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Alamat IP dan data perangkat teknis untuk mencegah percobaan penipuan (*fraud prevention*).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                3. Tujuan Penggunaan Informasi
              </h2>
              <p>Informasi yang kami kumpulkan dipergunakan secara bertanggung jawab untuk tujuan:</p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                <li>Meneruskan transaksi ke operator seluler nasional (Telkomsel, Indosat, XL, Tri, Smartfren) atau PT PLN.</li>
                <li>Menghubungi Anda via WhatsApp untuk memberikan konfirmasi status transaksi berhasil atau solusi kendala pending.</li>
                <li>Memverifikasi pendaftaran kemitraan agen konter dan integrasi endpoint REST API/H2H.</li>
                <li>Memelihara kehandalan sistem dan kepatuhan terhadap regulasi perundang-undangan di Indonesia.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                4. Kami Tidak Menjual Data Pribadi Anda
              </h2>
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 not-prose flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-emerald-900">Jaminan Keamanan Mutlak:</p>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Payfast ID <strong>tidak pernah dan tidak akan pernah menjual, menyewakan, atau memperdagangkan</strong> data pribadi Anda kepada pihak ketiga pengiklan manapun untuk keperluan pemasaran spam.
                  </p>
                </div>
              </div>
              <p>
                Data hanya dibagikan kepada pihak pemroses resmi yang secara mutlak diperlukan untuk menyelesaikan transaksi Anda (misal: gerbang pembayaran resmi dan operator telekomunikasi terkait).
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                5. Standar Keamanan & Enkripsi
              </h2>
              <p>
                Situs dan platform Payfast ID dilindungi oleh enkripsi modern **Transport Layer Security (TLSv1.3)** dengan sertifikat SSL resmi bertaraf industri. Seluruh data yang mengalir antara browser Anda dan server kami dienkripsi secara penuh sehingga aman dari penyadapan pihak luar.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                6. Hak Pengguna atas Data Pribadi
              </h2>
              <p>
                Sesuai dengan Undang-Undang Pelindungan Data Pribadi (UU PDP), Anda memiliki hak penuh untuk:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                <li>Meminta konfirmasi mengenai data apa saja yang tercatat dalam sistem kami.</li>
                <li>Meminta perbaikan jika terdapat kesalahan nomor atau profil kemitraan.</li>
                <li>Meminta penghapusan data kontak apabila Anda tidak lagi menggunakan layanan Payfast ID.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                7. Pertanyaan & Kontak Petugas Privasi
              </h2>
              <p>
                Untuk permohonan terkait data pribadi atau pertanyaan seputar Kebijakan Privasi ini, silakan hubungi tim kami:
              </p>
              <div className="not-prose pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  href={waLink("Halo Payfast ID, saya ingin mengajukan pertanyaan terkait privasi data saya.")}
                  variant="whatsapp"
                  size="md"
                >
                  Hubungi Tim Privasi via WhatsApp
                </Button>
                <Button href="/contact" variant="outline" size="md">
                  Kirim Pesan Resmi
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
