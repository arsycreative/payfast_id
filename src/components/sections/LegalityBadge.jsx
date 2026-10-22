// src/components/sections/LegalityBadge.jsx
import { ShieldCheck, FileCheck } from "lucide-react";
import { aboutContent } from "@/content/about";
import { Container } from "@/components/shared/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/shared/Reveal";

export function LegalityBadge() {
  const { legality } = aboutContent;

  return (
    <section className="py-16 md:py-20 bg-neutral-50/70 border-b border-neutral-200/80">
      <Container size="sm">
        <Reveal>
          <Card className="p-8 md:p-10 border-neutral-200/80 bg-white text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold font-heading text-secondary-800 mb-3">
              {legality.title}
            </h3>

            <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto mb-8">
              {legality.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {legality.badges.map((b, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-3"
                >
                  <FileCheck className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      {b.label}
                    </p>
                    <p className="text-sm font-semibold text-secondary-800">
                      {b.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
