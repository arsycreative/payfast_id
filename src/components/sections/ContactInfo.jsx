// src/components/sections/ContactInfo.jsx
import { MessageCircle, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Card } from "@/components/ui/Card";
import { waLink } from "@/lib/utils";

export function ContactInfo() {
  const cards = [
    {
      title: "WhatsApp Resmi",
      value: site.contact.whatsappDisplay,
      desc: "Respon tercepat untuk pertanyaan layanan dan kendala transaksi.",
      href: waLink("Halo Payfast ID, saya ingin bertanya tentang layanan."),
      actionLabel: "Kirim Pesan WhatsApp",
      icon: MessageCircle,
      highlight: true,
    },
    {
      title: "Alamat Kantor",
      value: "Cilacap, Jawa Tengah",
      company: site.companyName || "CV. PAYFAST INDONESIA",
      desc: site.contact.address,
      href: null,
      actionLabel: "Lihat di Google Maps",
      disabled: true,
      icon: MapPin,
      highlight: false,
    },
    {
      title: "Jam Operasional",
      value: "07.00 – 22.00 WIB",
      desc: "Layanan Customer Support aktif setiap hari. Server otomatis 24 Jam.",
      href: null,
      actionLabel: null,
      icon: Clock,
      highlight: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <Card
            key={idx}
            className={`p-6 sm:p-7 flex flex-col justify-between border-neutral-200/80 ${
              card.highlight
                ? "bg-primary-50/50 border-primary-200 ring-2 ring-primary-500/10"
                : "bg-white"
            }`}
          >
            <div>
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                  card.highlight
                    ? "bg-primary-500 text-white shadow-md shadow-primary-500/25"
                    : "bg-neutral-100 text-secondary-800"
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                {card.title}
              </p>
              <h3 className="text-lg font-bold font-heading text-secondary-800 mb-2">
                {card.value}
              </h3>
              {card.company && (
                <p className="text-xs font-bold text-primary-600 mb-1">
                  {card.company}
                </p>
              )}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                {card.desc}
              </p>
            </div>

            {card.disabled ? (
              <div
                className="text-xs font-semibold text-neutral-400 inline-flex items-center gap-1.5 mt-2 pt-3 border-t border-neutral-100 cursor-not-allowed select-none"
                title="Tautan Google Maps sedang disiapkan"
              >
                <span>{card.actionLabel}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500 font-medium">
                  Segera Hadir
                </span>
              </div>
            ) : card.href ? (
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1 group mt-2 pt-3 border-t border-neutral-100"
              >
                <span>{card.actionLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}
