// src/app/not-found.jsx
import Link from "next/link";
import { ArrowLeft, Home, Zap } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "404 — Halaman Tidak Ditemukan",
  description: "Halaman yang kamu cari tidak ditemukan atau telah dipindahkan.",
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 bg-neutral-50/50 hero-pattern">
      <Container size="sm" className="text-center">
        <div className="w-20 h-20 rounded-3xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-8 shadow-md">
          <Zap className="w-10 h-10" />
        </div>

        <span className="text-sm font-mono font-bold uppercase tracking-widest text-primary-600 block mb-2">
          ERROR 404
        </span>

        <h1 className="text-3xl sm:text-5xl font-black font-heading text-secondary-800 tracking-tight mb-4">
          Halaman Tidak Ditemukan
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 max-w-md mx-auto leading-relaxed mb-8">
          Sepertinya halaman yang kamu tuju sudah dipindahkan, diubah tautannya, atau belum tersedia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="lg" icon={Home}>
            Kembali ke Home
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Lihat Katalog Layanan
          </Button>
        </div>
      </Container>
    </section>
  );
}
