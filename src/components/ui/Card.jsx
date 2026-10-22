// src/components/ui/Card.jsx
import { cn } from "@/lib/utils";

export function Card({
  children,
  className = "",
  hover = false,
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={cn(
        "bg-white rounded-2xl border border-neutral-200/80 p-6 md:p-8 transition-all duration-300",
        hover &&
          "hover:border-primary-300 hover:shadow-hover hover:-translate-y-1 cursor-default",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
