// src/components/sections/CoreValues.jsx
import { Zap, ShieldCheck, Eye, Heart } from "lucide-react";
import { aboutContent } from "@/content/about";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/shared/Reveal";

const iconMap = {
  Zap,
  ShieldCheck,
  Eye,
  Heart,
};

export function CoreValues() {
  const { values } = aboutContent;

  return (
    <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
      <Container>
        <SectionHeading
          eyebrow={values.eyebrow}
          title={values.title}
          subtitle={values.subtitle}
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.items.map((val, idx) => {
            const Icon = iconMap[val.icon] || Zap;

            return (
              <Reveal key={idx} delay={idx * 0.1}>
                <Card
                  hover
                  className="h-full p-8 border-neutral-200/80 bg-neutral-50/50 hover:bg-white hover:border-primary-300"
                >
                  <div className="w-13 h-13 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-secondary-800 mb-3">
                    {val.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {val.description}
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
