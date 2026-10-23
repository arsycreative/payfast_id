// src/components/sections/CtaBanner.jsx
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { homeContent } from "@/content/home";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { AppDownloadBadges } from "@/components/shared/AppDownloadBadges";
import { Reveal } from "@/components/shared/Reveal";

export function CtaBanner({
  title = homeContent.ctaBanner.title,
  description = homeContent.ctaBanner.description,
}) {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <Reveal>
          <div className="relative rounded-3xl brand-gradient text-white p-6 sm:p-12 md:p-16 text-center shadow-xl shadow-primary-500/25 overflow-hidden">
            {/* Background geometric accents */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-black/10 rounded-full blur-2xl" />

            <div className="relative max-w-3xl mx-auto space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-sm">
                MULAI SEKARANG
              </span>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white leading-tight">
                {title}
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4">
                <Button
                  href={homeContent.ctaBanner.primaryCta.href}
                  variant="white"
                  size="lg"
                  icon={MessageCircle}
                  className="w-full sm:w-auto text-primary-600 hover:text-primary-700"
                >
                  {homeContent.ctaBanner.primaryCta.label}
                </Button>
                <Button
                  href={homeContent.ctaBanner.secondaryCta.href}
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full sm:w-auto bg-transparent border-white/40 text-white hover:bg-white/15 hover:border-white"
                >
                  {homeContent.ctaBanner.secondaryCta.label}
                </Button>
              </div>

              {/* Mobile App Download Teaser */}
              <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-3">
                <span className="text-xs font-semibold text-white/90">
                  Aplikasi Mobile Segera Hadir:
                </span>
                <AppDownloadBadges size="sm" variant="dark" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
