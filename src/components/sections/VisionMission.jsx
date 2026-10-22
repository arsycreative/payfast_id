// src/components/sections/VisionMission.jsx
import { Target, Compass, CheckCircle2 } from "lucide-react";
import { aboutContent } from "@/content/about";
import { Container } from "@/components/shared/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/shared/Reveal";

export function VisionMission() {
  const { visionMission } = aboutContent;

  return (
    <section className="py-20 md:py-28 bg-neutral-50/60 border-b border-neutral-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Vision Card */}
          <Reveal>
            <Card className="h-full p-8 sm:p-10 border-neutral-200/80 bg-white flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-secondary-800 font-heading mb-4">
                  {visionMission.vision.title}
                </h3>

                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                  {visionMission.vision.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 text-xs font-bold uppercase tracking-widest text-primary-600">
                Arah Strategis Jangka Panjang
              </div>
            </Card>
          </Reveal>

          {/* Mission Card */}
          <Reveal delay={0.15}>
            <Card className="h-full p-8 sm:p-10 border-neutral-200/80 bg-white flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-800 text-primary-400 flex items-center justify-center mb-6">
                  <Compass className="w-7 h-7" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-secondary-800 font-heading mb-4">
                  {visionMission.mission.title}
                </h3>

                <div className="space-y-3.5">
                  {visionMission.mission.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm sm:text-base text-neutral-700 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 text-xs font-bold uppercase tracking-widest text-secondary-800">
                Pilar Tindakan Sehari-Hari
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
