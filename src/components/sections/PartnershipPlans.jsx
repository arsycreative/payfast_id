// src/components/sections/PartnershipPlans.jsx
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { homeContent } from "@/content/home";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export function PartnershipPlans() {
  const { partnership } = homeContent;

  return (
    <section className="py-20 md:py-28 bg-neutral-50/50 border-b border-neutral-200/80">
      <Container>
        <SectionHeading
          eyebrow={partnership.eyebrow}
          title={partnership.title}
          subtitle={partnership.subtitle}
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {partnership.plans.map((plan, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <Card
                className={cn(
                  "h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl relative transition-all duration-300",
                  plan.isPopular
                    ? "border-2 border-primary-500 shadow-xl shadow-primary-500/10 bg-white ring-4 ring-primary-500/5 lg:-translate-y-2"
                    : "border-neutral-200/90 bg-white hover:border-neutral-300"
                )}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge
                      variant={plan.isPopular ? "primary" : "secondary"}
                      size="md"
                      icon={Sparkles}
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold font-heading text-secondary-800 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary-600">
                      {plan.forWho}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div className="border-t border-neutral-100 pt-6 space-y-3.5 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Keuntungan & Fasilitas
                    </p>
                    {plan.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                            plan.isPopular
                              ? "bg-primary-100 text-primary-600"
                              : "bg-emerald-100 text-emerald-700"
                          )}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-neutral-700 leading-tight">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <Button
                    href={plan.ctaHref}
                    variant={plan.isPopular ? "primary" : "outline"}
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="w-full"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
