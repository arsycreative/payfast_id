// src/components/sections/Hero.jsx
import Image from "next/image";
import { Zap, ShieldCheck, Headset, CheckCircle2 } from "lucide-react";
import { homeContent } from "@/content/home";
import { Container } from "@/components/shared/Container";
import { DownloadButton } from "@/components/shared/DownloadButton";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/shared/Reveal";

export function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden hero-pattern pt-8 pb-16 md:pt-16 md:pb-24 border-b border-neutral-200/60">
      {/* Decorative gradient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-[300px] h-[300px] bg-amber-400/15 blur-[80px] rounded-full pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & CTA (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <Reveal direction="down">
              <Badge variant="primary" size="md" icon={Zap}>
                {hero.eyebrow}
              </Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-secondary-800 leading-[1.15]">
                Isi Ulang Apa Saja,{" "}
                <span className="brand-gradient-text">Cepat Sekali.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {hero.description}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.3}>
              <div className="flex items-center justify-center lg:justify-start pt-2">
                <DownloadButton size="lg" className="w-full sm:w-auto" />
              </div>
            </Reveal>

            {/* Trust points */}
            <Reveal delay={0.4}>
              <div className="pt-6 border-t border-neutral-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-neutral-600">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span>Proses Instan 5–15 Detik</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Transaksi Aman & Bergaransi</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Headset className="w-3.5 h-3.5" />
                  </div>
                  <span>Support Responsif Setiap Hari</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Visual Graphic Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={0.2} direction="left" className="w-full max-w-md">
              <div className="relative">
                {/* Floating pill card top right */}
                <div className="absolute -top-4 right-1 sm:-right-4 sm:-top-5 z-20 bg-white rounded-2xl shadow-lg border border-neutral-100 p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary-800">Transaksi Sukses!</p>
                    <p className="text-[11px] text-neutral-500">Pulsa & Kuota Terkirim Cepat</p>
                  </div>
                </div>

                {/* Main Visual Showcase Card */}
                <div className="bg-secondary-800 text-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-neutral-700/80 relative overflow-hidden">
                  {/* Subtle card glow */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-primary-500/25 blur-3xl rounded-full" />

                  {/* Header inside card - Brand Identity */}
                  <div className="flex items-center pb-5 border-b border-neutral-700">
                    <div className="flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden bg-primary-500 shrink-0 ring-2 ring-primary-500/30">
                        <Image
                          src="/logo.png"
                          alt="Payfast ID"
                          width={44}
                          height={44}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-base font-bold text-white font-heading">
                          Payfast ID
                        </p>
                        <p className="text-xs text-neutral-400">
                          Distribusi Pulsa & Produk Digital
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Product Showcase */}
                  <div className="py-6 space-y-3.5">
                    <p className="text-xs text-neutral-400 uppercase font-semibold tracking-wider">
                      Katalog Produk Unggulan
                    </p>

                    <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-700/60 border border-neutral-600/50 flex items-center justify-between hover:bg-neutral-700 transition-colors">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                          PLN
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-white">Token Listrik PLN Prabayar</p>
                          <p className="text-[11px] sm:text-xs text-neutral-400">Stroom 20 digit instan</p>
                        </div>
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-emerald-400 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 shrink-0">
                        Otomatis
                      </span>
                    </div>

                    <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-700/60 border border-neutral-600/50 flex items-center justify-between hover:bg-neutral-700 transition-colors">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                          DATA
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-white">Paket Data & Kuota Internet</p>
                          <p className="text-[11px] sm:text-xs text-neutral-400">Semua operator nasional</p>
                        </div>
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-emerald-400 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 shrink-0">
                        Aktif Cepat
                      </span>
                    </div>

                    <div className="p-3 sm:p-3.5 rounded-2xl bg-neutral-700/60 border border-neutral-600/50 flex items-center justify-between hover:bg-neutral-700 transition-colors">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                          SALDO
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-white">Top Up Saldo E-Wallet</p>
                          <p className="text-[11px] sm:text-xs text-neutral-400">DANA, OVO, GoPay, ShopeePay</p>
                        </div>
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-emerald-400 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 shrink-0">
                        Praktis
                      </span>
                    </div>
                  </div>

                  {/* Card bottom footer */}
                  <div className="pt-4 border-t border-neutral-700 flex items-center justify-between text-xs text-neutral-400">
                    <span>Layanan Pengisian</span>
                    <span className="font-semibold text-primary-400 text-xs sm:text-sm">
                      Praktis, Cepat & Bergaransi
                    </span>
                  </div>
                </div>

                {/* Floating pill card bottom left */}
                <div className="absolute -bottom-4 left-1 sm:-left-4 sm:-bottom-5 z-20 bg-white rounded-2xl shadow-xl border border-neutral-100 p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center font-black shrink-0">
                    %
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary-800">Peluang Kemitraan</p>
                    <p className="text-[11px] text-primary-600 font-semibold">Tersedia untuk Konter & Agen</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
