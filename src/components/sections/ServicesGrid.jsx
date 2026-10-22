// src/components/sections/ServicesGrid.jsx
import Link from "next/link";
import {
  Smartphone,
  Wifi,
  Zap,
  Wallet,
  Gamepad2,
  Receipt,
  Handshake,
  Headset,
  ArrowRight,
} from "lucide-react";
import { services } from "@/content/services";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
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

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-neutral-50/60 border-b border-neutral-200/80">
      <Container>
        <SectionHeading
          eyebrow="LAYANAN KAMI"
          title="Semua Kebutuhan Digitalmu, Satu Tempat"
          subtitle="Dari pengisian pulsa harian hingga pelunasan tagihan bulanan dan peluang bisnis agen konter, Payfast ID siap membantu kelancaran transaksimu."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Zap;

            return (
              <Reveal key={service.slug} delay={index * 0.05}>
                <Card
                  hover
                  className="h-full flex flex-col justify-between group p-6 sm:p-7 border-neutral-200/80 hover:border-primary-400 bg-white"
                >
                  <div className="space-y-4">
                    {/* Icon container */}
                    <div className="w-13 h-13 rounded-2xl bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold font-heading text-secondary-800 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {service.short}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <Link
                      href={`/services#${service.slug}`}
                      className="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      <span>Lihat Rincian</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <span className="text-[11px] font-mono text-neutral-400">
                      0{index + 1}
                    </span>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/services"
            variant="outline"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
          >
            Lihat Semua Layanan
          </Button>
        </div>
      </Container>
    </section>
  );
}
