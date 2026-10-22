// src/components/sections/Stats.jsx
import { homeContent } from "@/content/home";
import { Container } from "@/components/shared/Container";
import { Counter } from "@/components/shared/Counter";
import { Reveal } from "@/components/shared/Reveal";

export function Stats() {
  const { stats } = homeContent;

  return (
    <section className="py-16 md:py-20 bg-secondary-800 text-white relative overflow-hidden">
      {/* Decorative background ambient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500/15 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full" />

      <Container className="relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase font-bold tracking-widest text-primary-400 mb-2">
            PENCAPAIAN LAYANAN
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {stats.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {stats.items.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-secondary-700/50 border border-neutral-700/60 text-center hover:bg-secondary-700/80 transition-colors">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-400 font-heading mb-2">
                  <Counter value={stat.value} />
                </p>
                <p className="text-xs sm:text-sm font-semibold text-neutral-300">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
