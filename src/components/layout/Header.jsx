"use client";

// src/components/layout/Header.jsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User } from "lucide-react";
import { site } from "@/content/site";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { waLink, cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip link for a11y */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Lewati ke konten utama
      </a>

      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "glass-nav shadow-sm border-b border-neutral-200/60 py-3.5"
            : "bg-white/90 backdrop-blur-md py-4 sm:py-5 border-b border-transparent"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-neutral-100/80 border border-neutral-200/60"
          >
            {site.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "bg-white text-primary-600 shadow-sm"
                      : "text-neutral-600 hover:text-secondary-800 hover:bg-white/50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/member"
              variant="outline"
              size="sm"
              icon={User}
              className="font-semibold text-secondary-800 hover:text-primary-600 hover:border-primary-500 bg-white shadow-xs"
            >
              Member Area
            </Button>
            <Button href="/contact" variant="primary" size="md">
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Buka menu navigasi"
            className="lg:hidden p-2.5 rounded-xl text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 transition-colors cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
