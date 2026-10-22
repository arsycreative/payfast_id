// src/components/sections/PartnerStrip.jsx
import { homeContent } from "@/content/home";
import { Container } from "@/components/shared/Container";

export function PartnerStrip() {
  const { partners } = homeContent;

  return (
    <section className="py-10 bg-white border-b border-neutral-200/80">
      <Container>
        <p className="text-center text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6">
          {partners.title}
        </p>

        {/* Partner badge pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {partners.items.map((partner, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-xl bg-neutral-50 hover:bg-primary-50/70 border border-neutral-200/80 hover:border-primary-300 transition-all duration-200 flex items-center gap-2 group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-primary-500 transition-colors" />
              <span className="text-xs sm:text-sm font-bold text-neutral-700 group-hover:text-primary-600 transition-colors">
                {partner.name}
              </span>
              <span className="text-[10px] text-neutral-400 group-hover:text-neutral-500 hidden sm:inline">
                ({partner.type})
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
