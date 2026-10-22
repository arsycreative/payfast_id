// src/components/sections/CompanyStory.jsx
import { CheckCircle2, Building2, Users2, Award } from "lucide-react";
import { aboutContent } from "@/content/about";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/shared/Reveal";

export function CompanyStory() {
  const { story } = aboutContent;

  return (
    <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Left (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <Badge variant="primary" size="md">
                {story.eyebrow}
              </Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary-800 font-heading leading-tight">
                {story.title}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
                {story.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Graphic Right (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <div className="rounded-3xl bg-secondary-900 text-white p-8 sm:p-10 shadow-xl border border-neutral-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-44 h-44 bg-primary-500/20 blur-3xl rounded-full" />

                <h3 className="text-xl font-bold font-heading mb-6 text-white">
                  Payfast ID dalam Angka
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xl font-extrabold text-white font-heading">
                        Tahun 2020
                      </p>
                      <p className="text-xs text-neutral-400">
                        Didirikan di Bandung, Jawa Barat
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Users2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xl font-extrabold text-white font-heading">
                        5.000+ Agen
                      </p>
                      <p className="text-xs text-neutral-400">
                        Mitra konter aktif bertransaksi harian
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xl font-extrabold text-white font-heading">
                        99.9% Sukses
                      </p>
                      <p className="text-xs text-neutral-400">
                        Rasio keberhasilan transaksi otomatis
                      </p>
                    </div>
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
