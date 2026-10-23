"use client";

// src/components/layout/MobileNav.jsx
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, MessageCircle, Phone, Clock, ChevronRight, User } from "lucide-react";
import { site } from "@/content/site";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";
import { waLink } from "@/lib/utils";

export function MobileNav({ isOpen, onClose }) {
  const pathname = usePathname();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu Navigasi Mobile"
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 z-10 transition-transform duration-300"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
            <Logo />
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup menu"
              className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="mt-6 space-y-1.5" aria-label="Navigasi Mobile">
            {site.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-heading font-semibold text-base transition-colors ${
                    isActive
                      ? "bg-primary-50 text-primary-600"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-primary-600"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer info & quick contact */}
        <div className="pt-6 border-t border-neutral-100 space-y-4">
          <div className="space-y-2 text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-primary-500 shrink-0" />
              <span>{site.contact.whatsappDisplay}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary-500 shrink-0" />
              <span>{site.contact.hours}</span>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <Button
              href="/member"
              variant="outline"
              size="md"
              icon={User}
              onClick={onClose}
              className="w-full font-semibold"
            >
              Member Area
            </Button>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              onClick={onClose}
              className="w-full"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
