// src/components/sections/PageHeader.jsx
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/shared/Reveal";

export function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs = [{ label: "Home", href: "/" }],
}) {
  return (
    <section className="relative overflow-hidden hero-pattern pt-12 pb-16 md:pt-16 md:pb-20 border-b border-neutral-200/80">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 blur-3xl rounded-full pointer-events-none" />

      <Container className="relative">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-neutral-500">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={idx} className="flex items-center gap-2">
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-secondary-800 font-bold">
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="max-w-3xl space-y-4">
          {badge && (
            <Reveal>
              <Badge variant="primary" size="md">
                {badge}
              </Badge>
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-800 tracking-tight leading-tight">
              {title}
            </h1>
          </Reveal>

          {subtitle && (
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
