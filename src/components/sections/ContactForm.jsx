"use client";

// src/components/sections/ContactForm.jsx
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema } from "@/lib/validations";
import { waLink } from "@/lib/utils";
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
    state: "idle", // 'idle' | 'success' | 'error'
    message: "",
    waUrl: "",
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: defaultTopic,
      message: "",
      consent: false,
      website: "", // honeypot
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const top = params.get("topik");
      if (top && ["pelanggan", "kemitraan", "integrasi", "lainnya"].includes(top)) {
        setValue("topic", top);
      }
    }
  }, [setValue]);

  const onSubmit = (data) => {
    try {
      // Honeypot spam field check
      if (data.website && data.website.length > 0) {
        return;
      }

      const topicLabel =
        topicOptions.find((t) => t.value === data.topic)?.label || data.topic;

      const waText = [
        `*Halo Tim Payfast ID, saya ingin mengirim pesan dari website:*`,
        ``,
        `👤 *Nama:* ${data.name.trim()}`,
        `✉️ *Email:* ${data.email.trim()}`,
        data.phone?.trim() ? `📱 *No. WhatsApp/HP:* ${data.phone.trim()}` : null,
        `📌 *Topik:* ${topicLabel}`,
        ``,
        `💬 *Isi Pesan:*`,
        `${data.message.trim()}`,
      ]
        .filter((line) => line !== null)
        .join("\n");

      const link = waLink(waText);

      // Buka WhatsApp di tab/jendela baru
      if (typeof window !== "undefined") {
        window.open(link, "_blank", "noopener,noreferrer");
      }

      setServerStatus({
        state: "success",
        message: "Pesanmu telah disiapkan dan diarahkan ke WhatsApp resmi Payfast ID.",
        waUrl: link,
      });
    } catch (err) {
      console.error("[Contact Form Error]", err);
      setServerStatus({
        state: "error",
        message: "Terjadi kesalahan saat menyiapkan pesan. Silakan hubungi langsung via WhatsApp.",
        waUrl: waLink("Halo Payfast ID, saya ingin bertanya tentang layanan."),
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-neutral-200/80 shadow-lg">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 text-[#128C7E] text-xs font-bold mb-3">
          <MessageCircle className="w-4 h-4" />
          Terhubung Langsung ke WhatsApp Customer Support
        </div>
        <h3 className="text-2xl font-bold font-heading text-secondary-800 mb-2">
          Kirimkan Pesan atau Pertanyaan
        </h3>
        <p className="text-sm text-neutral-600">
          Silakan isi formulir di bawah ini. Pesan akan langsung diarahkan ke WhatsApp resmi Payfast ID untuk respons tercepat.
        </p>
      </div>

      {/* Success banner */}
      {serverStatus.state === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3.5 text-emerald-900"
        >
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-2 flex-grow">
            <p className="font-bold text-sm">Membuka WhatsApp Resmi Payfast ID...</p>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              {serverStatus.message} Jika aplikasi WhatsApp tidak terbuka secara otomatis, silakan klik tombol di bawah untuk melanjutkan chat:
            </p>
            {serverStatus.waUrl && (
              <div className="pt-1">
                <a
                  href={serverStatus.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Buka Chat WhatsApp Sekarang
                </a>
              </div>
            )}
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
            placeholder="08126666115"
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
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
          <Button
            type="submit"
            variant="whatsapp"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto shadow-md hover:shadow-lg"
          >
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5 fill-white" />
              Kirim Pesan via WhatsApp
            </span>
          </Button>
          <span className="text-xs text-neutral-500">
            Format pesan otomatis terisi & diteruskan ke WhatsApp CS
          </span>
        </div>
      </form>
    </div>
  );
}
