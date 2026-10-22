// src/components/sections/HowItWorks.jsx
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { homeContent } from "@/content/home";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/shared/Reveal";

export function HowItWorks() {
  const { howItWorks } = homeContent;

  return (
    <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
      <Container>
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          subtitle={howItWorks.subtitle}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {howItWorks.steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <Card className="h-full relative p-8 border-neutral-200/80 bg-neutral-50/50 hover:bg-white hover:border-primary-300 transition-all">
                {/* Step badge */}
                <div className="w-12 h-12 rounded-2xl bg-primary-500 text-white font-heading font-black text-lg flex items-center justify-center mb-6 shadow-md shadow-primary-500/25">
                  {step.step}
                </div>

                <h3 className="text-xl font-bold font-heading text-secondary-800 mb-3">
                  {step.title}
                </h3>

                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector on desktop */}
                {idx < 2 && (
                  <div className="hidden lg:block absolute top-14 -right-4 translate-x-1/2 z-10 text-primary-400">
                    <ArrowRight className="w-6 h-6 opacity-40" />
                  </div>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
