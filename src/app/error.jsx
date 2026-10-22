"use client";

// src/app/error.jsx
import { useEffect } from "react";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error("[Payfast Error Caught]", error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 bg-neutral-50/50">
      <Container size="sm" className="text-center">
        <div className="w-20 h-20 rounded-3xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-8 shadow-sm">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <span className="text-sm font-mono font-bold uppercase tracking-widest text-red-600 block mb-2">
          SYSTEM NOTICE
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-secondary-800 mb-4">
          Terjadi Gangguan Sementara
        </h1>

        <p className="text-base text-neutral-600 max-w-md mx-auto leading-relaxed mb-8">
          Sistem sedang memulihkan halaman ini. Kamu dapat mencoba memuat ulang halaman atau kembali ke beranda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => reset()}
            variant="primary"
            size="lg"
            icon={RefreshCcw}
          >
            Muat Ulang Halaman
          </Button>
          <Button href="/" variant="outline" size="lg" icon={Home}>
            Kembali ke Beranda
          </Button>
        </div>
      </Container>
    </section>
  );
}
