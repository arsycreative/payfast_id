// src/components/shared/SectionHeading.jsx
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  inverted = false,
  className = "",
}) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-3 mb-12 md:mb-16",
        centered ? "mx-auto text-center" : "",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full",
            inverted
              ? "bg-white/10 text-primary-300 border border-white/15"
              : "bg-primary-100 text-primary-600 border border-primary-200"
          )}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight",
            inverted ? "text-white" : "text-secondary-800"
          )}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            inverted ? "text-neutral-300" : "text-neutral-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
