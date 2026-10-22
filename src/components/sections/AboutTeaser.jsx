// src/components/sections/AboutTeaser.jsx
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { homeContent } from "@/content/home";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/shared/Reveal";

export function AboutTeaser() {
  const { aboutTeaser } = homeContent;

  return (
    <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Left (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal direction="right">
              <div className="relative">
                {/* Decorative background box */}
                <div className="absolute -inset-4 rounded-3xl bg-primary-50 -rotate-2 -z-10" />

                <div className="rounded-3xl bg-secondary-800 text-white p-8 sm:p-10 shadow-xl border border-neutral-700/80 relative overflow-hidden">
                  <div className="w-14 h-14 rounded-2xl bg-primary-500 text-white flex items-center justify-center mb-6 shadow-md shadow-primary-500/30">
                    <Zap className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold font-heading mb-4 text-white">
                    Komitmen pada Kecepatan & Kejujuran
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    Sejak 2020, Payfast ID membangun ekosistem teknologi isi ulang pulsa dan produk digital yang memprioritaskan transparansi biaya dan efisiensi waktu.
                  </p>

                  <div className="p-4 rounded-2xl bg-secondary-700/60 border border-neutral-600/50 flex items-center gap-3.5">
                    <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold text-white">Standar Operasional Teruji</p>
                      <p className="text-neutral-400">Terdaftar dan mematuhi regulasi digital</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Text Right (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <Badge variant="primary" size="md">
                {aboutTeaser.eyebrow}
              </Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-800 leading-tight">
                {aboutTeaser.title}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                {aboutTeaser.description}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-3.5 pt-2">
                {aboutTeaser.checkPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-neutral-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-4">
                <Button
                  href={aboutTeaser.cta.href}
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  {aboutTeaser.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
