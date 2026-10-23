"use client";

// src/app/member/page.jsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Lock,
  Smartphone,
  Store,
  KeyRound,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Download,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AppDownloadBadges } from "@/components/shared/AppDownloadBadges";
import { waLink } from "@/lib/utils";

export default function MemberAreaPage() {
  const [activeTab, setActiveTab] = useState("login"); // 'login' | 'register'

  return (
    <div className="min-h-[85vh] py-12 md:py-20 hero-pattern flex items-center justify-center relative overflow-hidden">
      {/* Decorative ambient gradient blooms */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-primary-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-[300px] h-[300px] bg-amber-400/15 blur-[80px] rounded-full pointer-events-none" />

      <Container size="sm" className="relative z-10">
        <div className="max-w-xl mx-auto">
          {/* Card Container */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-200/80">
            {/* Header / Brand */}
            <div className="text-center pb-8 border-b border-neutral-100">
              <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-primary-500 ring-4 ring-primary-500/15 shadow-md">
                <Image
                  src="/logo.png"
                  alt="Payfast ID"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MEMBER & MITRA AREA</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-secondary-800">
                Portal Transaksi Payfast ID
              </h1>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-sm mx-auto">
                Kelola saldo, cek riwayat transaksi pulsa & PPOB, serta nikmati harga distributor langsung.
              </p>
            </div>

            {/* Tab Navigation: Login vs Register */}
            <div className="grid grid-cols-2 p-1.5 rounded-2xl bg-neutral-100 my-8 border border-neutral-200/60">
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activeTab === "login"
                    ? "bg-white text-secondary-800 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                Masuk (Login)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("register")}
                className={`py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activeTab === "register"
                    ? "bg-white text-secondary-800 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                Daftar Akun Baru
              </button>
            </div>

            {/* Tab 1: Form Login */}
            {activeTab === "login" && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-secondary-800 uppercase tracking-wide">
                    Nomor WhatsApp / ID Agen
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      disabled
                      placeholder="Contoh: 08126666115"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/70 text-sm text-neutral-500 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-secondary-800 uppercase tracking-wide">
                      PIN Transaksi / Password
                    </label>
                    <a
                      href={waLink("Halo Payfast ID, saya butuh bantuan terkait lupa PIN/Akun member.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      Lupa PIN?
                    </a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type="password"
                      disabled
                      placeholder="••••••"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50/70 text-sm text-neutral-500 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Disabled Submit Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="w-full py-3.5 px-6 rounded-xl font-heading font-bold text-sm bg-neutral-300 text-neutral-500 cursor-not-allowed flex items-center justify-center gap-2 shadow-none select-none opacity-80"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Masuk ke Akun (Segera di Aplikasi)</span>
                  </button>
                  <p className="text-[11px] text-center text-neutral-400 mt-2">
                    Akses login akan dialihkan langsung ke aplikasi mobile resmi Payfast ID
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Form Register */}
            {activeTab === "register" && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-secondary-800 uppercase tracking-wide">
                    Nama Lengkap Pemilik
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      disabled
                      placeholder="Contoh: Budi Santoso"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/70 text-sm text-neutral-500 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-secondary-800 uppercase tracking-wide">
                    Nomor WhatsApp Aktif
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      disabled
                      placeholder="08126666115"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/70 text-sm text-neutral-500 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-secondary-800 uppercase tracking-wide">
                    Nama Konter / Toko (Opsional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <Store className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      disabled
                      placeholder="Contoh: Berkah Celluler"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/70 text-sm text-neutral-500 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-secondary-800 uppercase tracking-wide">
                    Buat 6-Digit PIN Transaksi
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <KeyRound className="w-4 h-4" />
                    </div>
                    <input
                      type="password"
                      disabled
                      placeholder="6 angka rahasia"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/70 text-sm text-neutral-500 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Terms agreement notice */}
                <p className="text-[11px] text-neutral-500 leading-relaxed pt-1">
                  Dengan mendaftar, Anda menyetujui{" "}
                  <Link href="/terms" className="text-primary-600 underline hover:text-primary-700">
                    Syarat & Ketentuan
                  </Link>{" "}
                  serta{" "}
                  <Link href="/privacy" className="text-primary-600 underline hover:text-primary-700">
                    Kebijakan Privasi
                  </Link>{" "}
                  Payfast ID.
                </p>

                {/* Disabled Register Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="w-full py-3.5 px-6 rounded-xl font-heading font-bold text-sm bg-neutral-300 text-neutral-500 cursor-not-allowed flex items-center justify-center gap-2 shadow-none select-none opacity-80"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Daftar Akun Agen (Segera di Aplikasi)</span>
                  </button>
                  <p className="text-[11px] text-center text-neutral-400 mt-2">
                    Registrasi mandiri akan dibuka langsung melalui aplikasi Payfast ID
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Support Callout (Daftar Manual via CS) */}
            <div className="mt-8 pt-6 border-t border-neutral-100 text-center space-y-3">
              <p className="text-xs text-neutral-600">
                Ingin mendaftar jadi agen atau integrasi API <strong>sekarang juga</strong> tanpa menunggu aplikasi?
              </p>
              <Button
                href={waLink("Halo Payfast ID, saya ingin mendaftar sebagai agen konter / mitra resmi.")}
                variant="whatsapp"
                size="md"
                icon={MessageCircle}
                className="w-full sm:w-auto"
              >
                Daftar Langsung via WhatsApp CS
              </Button>
            </div>
          </div>

          {/* Mobile App Coming Soon Teaser Strip */}
          <div className="mt-8 p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-neutral-200/80 text-center shadow-xs space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-600">
              <span className="inline-flex items-center gap-1.5 font-bold text-secondary-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Payfast ID Mobile App
              </span>
              <span>—</span>
              <span>Transaksi pulsa & PPOB kini lebih praktis dari genggaman</span>
            </div>
            <div className="flex justify-center">
              <AppDownloadBadges size="md" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
