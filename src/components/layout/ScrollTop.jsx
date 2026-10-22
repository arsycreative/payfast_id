"use client";

// src/components/layout/ScrollTop.jsx
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke atas halaman"
      className={cn(
        "fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/90 backdrop-blur-md text-secondary-800 border border-neutral-200/80 shadow-md flex items-center justify-center transition-all duration-200 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-brand active:scale-95 cursor-pointer"
      )}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
