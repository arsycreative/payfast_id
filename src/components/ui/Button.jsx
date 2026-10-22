// src/components/ui/Button.jsx
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  icon: Icon,
  iconPosition = "left",
  disabled = false,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const variants = {
    primary:
      "bg-primary-500 hover:bg-primary-600 text-white shadow-sm hover:shadow-brand shadow-primary-500/25",
    secondary:
      "bg-secondary-800 hover:bg-secondary-900 text-white shadow-sm hover:shadow-md",
    outline:
      "border-2 border-neutral-200 hover:border-primary-500 text-neutral-800 hover:text-primary-600 hover:bg-primary-50/50 bg-white",
    ghost:
      "text-neutral-700 hover:text-primary-600 hover:bg-primary-50/70",
    white:
      "bg-white hover:bg-neutral-50 text-secondary-800 shadow-sm hover:shadow-md font-bold",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md hover:shadow-lg shadow-[#25D366]/20",
  };

  const sizes = {
    sm: "text-sm px-3.5 py-1.5 rounded-lg gap-1.5",
    md: "text-base px-5 py-2.5 rounded-xl gap-2",
    lg: "text-lg px-7 py-3.5 rounded-2xl gap-2.5",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className={cn(size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5")} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={cn(size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5")} />
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("https") || href.startsWith("mailto:") || href.startsWith("https://wa.me");
    if (isExternal) {
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={combinedClasses}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
