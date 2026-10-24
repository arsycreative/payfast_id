// src/app/terms/page.jsx
import Link from "next/link";
import { ShieldCheck, FileText, CheckCircle2, AlertTriangle, ArrowRight, Clock } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/utils";

export const metadata = {
  title: "Syarat & Ketentuan — Payfast ID",
  description:
    "Syarat dan ketentuan resmi penggunaan layanan Payfast ID: mekanisme transaksi produk digital, garansi saldo, ketentuan agen, dan kebijakan pengembalian dana.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        badge="LEGAL & KETENTUAN"
        title="Syarat & Ketentuan Layanan"
        subtitle="Harap membaca syarat dan ketentuan ini secara saksama sebelum menggunakan layanan transaksi digital dan kemitraan Payfast ID."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Syarat & Ketentuan", href: "/terms" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white border-b border-neutral-200/80">
        <Container size="sm">
          {/* Document Meta Banner */}
          <div className="mb-12 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary-500 shrink-0" />
              <span>Terakhir Diperbarui: <strong>Oktober 2026</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Berlaku untuk seluruh pengguna & mitra Payfast ID</span>
            </div>
          </div>

          {/* Legal Content Article */}
          <article className="prose prose-neutral max-w-none space-y-10 text-neutral-700 leading-relaxed text-sm sm:text-base">
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                1. Ketentuan Umum & Definisi
              </h2>
              <p>
                Selamat datang di <strong>Payfast ID</strong> (dikelola oleh <strong>CV. PAYFAST INDONESIA</strong>, NIB: <strong>1611230092272</strong>). Syarat dan Ketentuan ini merupakan perjanjian yang mengikat secara hukum antara Anda (sebagai pengguna atau mitra) dengan pengelola Payfast ID.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                <li>
                  <strong>Payfast ID</strong> merujuk pada platform penyedia distribusi produk digital, meliputi pulsa isi ulang, paket kuota data internet, token listrik PLN prabayar, top-up saldo dompet digital (e-wallet), voucher game, dan tagihan PPOB.
                </li>
                <li>
                  <strong>Pengguna</strong> adalah individu, pemilik konter, atau badan usaha yang mengakses situs atau melakukan transaksi digital melalui Payfast ID.
                </li>
                <li>
                  <strong>Mitra / Agen</strong> adalah pengguna terdaftar yang memanfaatkan fasilitas harga distributor atau integrasi H2H/API Payfast ID untuk keperluan usaha.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                2. Mekanisme Transaksi & Pemrosesan Produk
              </h2>
              <p>
                Semua transaksi produk digital diproses secara otomatis melalui server gateway terintegrasi dengan standar operasional:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
                <div className="p-4 rounded-xl bg-primary-50/50 border border-primary-200/60">
                  <h4 className="font-bold text-sm text-secondary-800 mb-1">Kecepatan Transaksi</h4>
                  <p className="text-xs text-neutral-600">Estimasi pengiriman produk rata-rata berkisar 5–15 detik sejak pembayaran terverifikasi.</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/60">
                  <h4 className="font-bold text-sm text-secondary-800 mb-1">Status Serial Number (SN)</h4>
                  <p className="text-xs text-neutral-600">Transaksi sukses selalu disertai Serial Number (SN) atau 20 digit nomor token resmi dari biller.</p>
                </div>
              </div>
              <p>
                Pengguna bertanggung jawab penuh atas kebenaran nomor handphone, nomor meter/ID pelanggan, atau ID akun game yang diinputkan. Payfast ID tidak bertanggung jawab atas pengisian ke nomor yang salah akibat kekeliruan pengguna.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                3. Kebijakan Garansi & Pengembalian Dana (Refund)
              </h2>
              <p>
                Kami menjunjung tinggi keamanan dana konsumen dengan kebijakan garansi yang transparan:
              </p>
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 not-prose space-y-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-secondary-800">Ketentuan Pengembalian Dana 100%:</p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Apabila transaksi berstatus <strong>GAGAL</strong> atau mengalami kendala sistem dari sisi provider pusat yang tidak dapat diselesaikan dalam 1×24 jam, dana atau saldo akun akan dikembalikan 100% penuh tanpa potongan biaya administrasi.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-500 italic">
                *Catatan: Transaksi yang telah berstatus SUKSES dari operator (SN valid) tidak dapat dibatalkan atau dikembalikan karena pulsa/kuota telah sah masuk ke nomor tujuan.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                4. Ketentuan Kemitraan Konter & Integrasi API
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                <li>
                  Mitra agen berhak mendapatkan harga modal distributor dan bantuan penanganan kendala transaksi prioritas dari tim Customer Service.
                </li>
                <li>
                  Untuk mitra integrasi API H2H, penggunaan endpoint dan API Key wajib dijaga kerahasiaannya oleh developer/pemilik platform.
                </li>
                <li>
                  Dilarang keras menggunakan layanan Payfast ID untuk aktivitas ilegal, penipuan, pencucian uang, atau tindakan yang melanggar hukum di wilayah Negara Kesatuan Republik Indonesia.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                5. Batasan Tanggung Jawab & Force Majeure
              </h2>
              <p>
                Payfast ID berkomitmen menjaga ketersediaan layanan 24 jam nonstop. Namun demikian, Payfast ID dibebaskan dari tanggung jawab atas keterlambatan yang disebabkan oleh:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                <li>Gangguan massal atau *maintenance* berkala dari operator telekomunikasi nasional atau server pusat PT PLN.</li>
                <li>Bencana alam, kebakaran, huru-hara, atau gangguan jaringan tulang punggung (*backbone*) internet nasional (*Force Majeure*).</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-secondary-800 border-b border-neutral-200 pb-3">
                6. Bantuan & Layanan Konsultasi
              </h2>
              <p>
                Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini atau membutuhkan investigasi transaksi, tim Customer Service kami siap melayani Anda setiap hari:
              </p>
              <div className="not-prose pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  href={waLink("Halo Payfast ID, saya ingin bertanya mengenai syarat dan ketentuan layanan.")}
                  variant="whatsapp"
                  size="md"
                >
                  Hubungi CS via WhatsApp
                </Button>
                <Button href="/contact" variant="outline" size="md">
                  Kirim Pesan Bantuan
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
