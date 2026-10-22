// src/components/ui/Badge.jsx
import { cn } from "@/lib/utils";

export function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
}) {
  const variants = {
    primary: "bg-primary-100 text-primary-700 border border-primary-200",
    secondary: "bg-secondary-800 text-white",
    accent: "bg-amber-100 text-amber-800 border border-amber-300",
    neutral: "bg-neutral-100 text-neutral-700 border border-neutral-200",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  const sizes = {
    sm: "text-xs px-2.5 py-0.5 rounded-full gap-1 font-medium",
    md: "text-xs uppercase tracking-wider px-3 py-1 rounded-full gap-1.5 font-bold",
    lg: "text-sm px-3.5 py-1 rounded-full gap-2 font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
