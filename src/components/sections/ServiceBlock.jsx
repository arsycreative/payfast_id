// src/components/sections/ServiceBlock.jsx
import {
  Smartphone,
  Wifi,
  Zap,
  Wallet,
  Gamepad2,
  Receipt,
  Handshake,
  Headset,
  Check,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DownloadButton } from "@/components/shared/DownloadButton";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/shared/Reveal";

const iconMap = {
  Smartphone,
  Wifi,
  Zap,
  Wallet,
  Gamepad2,
  Receipt,
  Handshake,
  Headset,
};

export function ServiceBlock({ service, index }) {
  const Icon = iconMap[service.icon] || Zap;
  const isEven = index % 2 === 0;

  return (
    <div
      id={service.slug}
      className="scroll-mt-28 py-16 md:py-20 border-b border-neutral-200/80 last:border-b-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Visual / Highlights Card (5 cols) */}
        <div
          className={cn(
            "lg:col-span-5",
            isEven ? "lg:order-1" : "lg:order-2"
          )}
        >
          <Reveal direction={isEven ? "right" : "left"}>
            <div className="relative rounded-3xl bg-neutral-900 text-white p-5 sm:p-8 md:p-10 shadow-xl overflow-hidden border border-neutral-800">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/20 blur-3xl rounded-full" />

              <div className="w-14 h-14 rounded-2xl bg-primary-500 text-white flex items-center justify-center mb-6 shadow-md shadow-primary-500/30">
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                {service.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-primary-400 font-semibold mb-6">
                Layanan Prioritas Payfast ID
              </p>

              {/* Product Examples / Denominations (Tanpa Harga) */}
              {service.examples && service.examples.length > 0 && (
                <div className="space-y-2.5 pt-4 border-t border-neutral-800">
                  <p className="text-xs uppercase font-bold text-neutral-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-primary-400" />
                    Pilihan Produk & Denominasi
                  </p>
                  <div className="space-y-2">
                    {service.examples.map((item, exIdx) => (
                      <div
                        key={exIdx}
                        className="px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-between text-xs sm:text-sm"
                      >
                        <span className="text-neutral-300 font-medium">
                          {item.label}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Tersedia
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* Text Details (7 cols) */}
        <div
          className={cn(
            "lg:col-span-7 space-y-6",
            isEven ? "lg:order-2" : "lg:order-1"
          )}
        >
          <Reveal>
            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-primary-100 text-primary-600 border border-primary-200">
              Kategori 0{index + 1}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-800 font-heading">
              {service.title}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              {service.description}
            </p>
          </Reveal>

          {/* Features list */}
          <Reveal delay={0.3}>
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Keunggulan Layanan:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium text-neutral-700 leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Action button */}
          <Reveal delay={0.4}>
            <div className="pt-4 flex items-center">
              <DownloadButton size="md" className="justify-start" />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
