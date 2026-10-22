// src/components/shared/Logo.jsx
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false, className = "" }) {
  return (
    <Link
      href="/"
      aria-label="Payfast ID Home"
      className={cn("inline-flex items-center gap-2.5 group select-none", className)}
    >
      {/* Brand Icon Image (Bulat / Round) */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md shadow-primary-500/20 ring-2 ring-primary-500/30 shrink-0 group-hover:scale-105 transition-transform bg-primary-500">
        <Image
          src="/logo.png"
          alt="Payfast ID Logo"
          width={40}
          height={40}
          className="w-full h-full object-cover rounded-full"
          priority
        />
      </div>

      {/* Brand Name Text */}
      <div className="flex flex-col">
        <span
          className={cn(
            "font-heading font-extrabold text-xl tracking-tight leading-none",
            inverted ? "text-white" : "text-secondary-800"
          )}
        >
          PAYFAST<span className="text-primary-500">.ID</span>
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold tracking-wider uppercase leading-tight mt-0.5",
            inverted ? "text-neutral-400" : "text-neutral-500"
          )}
        >
          Pulsa & Digital
        </span>
      </div>
    </Link>
  );
}
