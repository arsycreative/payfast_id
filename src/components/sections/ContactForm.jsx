"use client";

// src/components/sections/ContactForm.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactSchema } from "@/lib/validations";
import { submitContact } from "@/app/contact/actions";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

const topicOptions = [
  { value: "pelanggan", label: "Pelanggan — Tanya Produk & Transaksi" },
  { value: "kemitraan", label: "Kemitraan — Pendaftaran Agen Konter" },
  { value: "integrasi", label: "B2B — Integrasi H2H & REST API" },
  { value: "lainnya", label: "Lainnya — Pertanyaan Umum" },
];

export function ContactForm({ defaultTopic = "pelanggan" }) {
  const [serverStatus, setServerStatus] = useState({
    state: "idle", // 'idle' | 'loading' | 'success' | 'error'
    message: "",
  });

  const validTopic = ["pelanggan", "kemitraan", "integrasi", "lainnya"].includes(
    defaultTopic
  )
    ? defaultTopic
    : "pelanggan";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: validTopic,
      message: "",
      consent: false,
      website: "", // honeypot
    },
  });

  const onSubmit = async (data) => {
    setServerStatus({ state: "loading", message: "" });
    try {
      const res = await submitContact(data);
      if (res.ok) {
        setServerStatus({
          state: "success",
          message:
            res.message ||
            "Terima kasih! Pesanmu sudah kami terima. Tim Payfast ID akan membalas dalam 1×24 jam.",
        });
        reset({
          name: "",
          email: "",
          phone: "",
          topic: validTopic,
          message: "",
          consent: false,
          website: "",
        });
      } else {
        setServerStatus({
          state: "error",
          message:
            res.error ||
            "Maaf, pesan belum berhasil terkirim. Silakan coba lagi atau hubungi via WhatsApp.",
        });
      }
    } catch (err) {
      setServerStatus({
        state: "error",
        message: "Terjadi gangguan koneksi. Silakan hubungi kami langsung via WhatsApp.",
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-neutral-200/80 shadow-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-bold font-heading text-secondary-800 mb-2">
          Kirimkan Pesan atau Pertanyaan
        </h3>
        <p className="text-sm text-neutral-600">
          Silakan isi formulir di bawah ini dengan lengkap. Tim kami siap merespons kebutuhanmu.
        </p>
      </div>

      {/* Success banner */}
      {serverStatus.state === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3.5 text-emerald-800"
        >
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-sm">Pesan Berhasil Terkirim!</p>
            <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
              {serverStatus.message}
            </p>
          </div>
        </div>
      )}

      {/* Error banner */}
      {serverStatus.state === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-8 p-5 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3.5 text-red-800"
        >
          <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-sm">Gagal Mengirim Pesan</p>
            <p className="text-xs sm:text-sm text-red-700 leading-relaxed">
              {serverStatus.message}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Honeypot field (hidden off-screen for spam bots) */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="form-website">Website (Leave empty)</label>
          <input
            id="form-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Nama Lengkap"
            placeholder="Contoh: Budi Santoso"
            required
            error={errors.name?.message}
            {...register("name")}
          />

          <Input
            label="Email Aktif"
            type="email"
            placeholder="budi@contoh.com"
            required
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        {/* WhatsApp & Topic Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Nomor WhatsApp (Opsional)"
            type="tel"
            placeholder="081234567890"
            helperText="Diutamakan untuk respon cepat via chat"
            error={errors.phone?.message}
            {...register("phone")}
          />

          <Select
            label="Topik Pertanyaan / Keperluan"
            required
            options={topicOptions}
            error={errors.topic?.message}
            {...register("topic")}
          />
        </div>

        {/* Message */}
        <Textarea
          label="Isi Pesan"
          rows={5}
          placeholder="Tuliskan pertanyaan, rencana kemitraan, atau detail kendala yang kamu alami..."
          required
          error={errors.message?.message}
          {...register("message")}
        />

        {/* Consent Checkbox */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-start gap-3 select-none">
            <input
              id="consent-checkbox"
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-500 cursor-pointer"
              {...register("consent")}
            />
            <label
              htmlFor="consent-checkbox"
              className="text-xs text-neutral-600 leading-relaxed cursor-pointer"
            >
              Saya setuju data saya digunakan oleh tim Payfast ID untuk menanggapi pesan dan penawaran layanan ini.
            </label>
          </div>
          {errors.consent && (
            <p className="text-xs font-medium text-red-600">
              {errors.consent.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting || serverStatus.state === "loading"}
            className="w-full sm:w-auto"
          >
            {isSubmitting || serverStatus.state === "loading" ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Mengirim Pesan...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Send className="w-5 h-5" />
                Kirim Pesan Sekarang
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
