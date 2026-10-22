// src/components/sections/Timeline.jsx
import { aboutContent } from "@/content/about";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Timeline() {
  const { timeline } = aboutContent;

  return (
    <section className="py-20 md:py-28 bg-neutral-50/60 border-b border-neutral-200/80">
      <Container size="sm">
        <SectionHeading
          eyebrow={timeline.eyebrow}
          title={timeline.title}
          subtitle="Setiap tahun merupakan langkah nyata dalam membangun ekosistem transaksi digital yang lebih baik."
          centered
        />

        <div className="relative border-l-2 border-primary-200 ml-2 sm:ml-4 md:ml-32 space-y-12">
          {timeline.items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="relative pl-6 sm:pl-8 md:pl-10">
                {/* Year tag placed on the left on desktop */}
                <div className="md:absolute md:-left-32 md:top-0 md:w-24 md:text-right font-heading font-extrabold text-2xl text-primary-600 mb-1 md:mb-0">
                  {item.year}
                </div>

                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-primary-500 shadow-sm" />

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200/80 shadow-sm">
                  <h3 className="text-lg font-bold font-heading text-secondary-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
