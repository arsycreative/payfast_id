// src/components/sections/Testimonials.jsx
import { Star, Quote } from "lucide-react";
import { homeContent } from "@/content/home";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/shared/Reveal";

export function Testimonials() {
  const { testimonials } = homeContent;

  return (
    <section className="py-20 md:py-28 bg-neutral-50/60 border-b border-neutral-200/80">
      <Container>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          subtitle={testimonials.subtitle}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <Card
                hover
                className="h-full flex flex-col justify-between p-8 bg-white border-neutral-200/80 shadow-sm"
              >
                <div>
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-6">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-primary-200 mb-3" />

                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center font-heading text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-sm text-secondary-800">
                      {item.name}
                    </h4>
                    <p className="text-xs text-neutral-500">{item.role}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
