// src/components/sections/WhyUs.jsx
import {
  Zap,
  ShieldCheck,
  BadgePercent,
  Clock,
  Headset,
  Layers,
} from "lucide-react";
import { homeContent } from "@/content/home";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/shared/Reveal";

const iconMap = {
  Zap,
  ShieldCheck,
  BadgePercent,
  Clock,
  Headset,
  Layers,
};

export function WhyUs() {
  const { whyUs } = homeContent;

  return (
    <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
      <Container>
        <SectionHeading
          eyebrow={whyUs.eyebrow}
          title={whyUs.title}
          subtitle={whyUs.subtitle}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUs.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Zap;

            return (
              <Reveal key={index} delay={index * 0.08}>
                <Card
                  hover
                  className="h-full p-6 sm:p-8 border-neutral-200/80 hover:border-primary-300 hover:shadow-card bg-neutral-50/40"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-secondary-800 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
