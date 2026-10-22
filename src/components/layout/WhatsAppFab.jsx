// src/components/layout/WhatsAppFab.jsx
import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { waLink } from "@/lib/utils";

export function WhatsAppFab() {
  return (
    <aside aria-label="Bantuan WhatsApp Cepat">
      <a
        href={waLink("Halo Payfast ID, saya ingin bertanya tentang layanan.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp dengan tim Payfast ID"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95"
      >
        {/* Tooltip on hover (desktop) */}
        <span className="hidden sm:inline-block bg-white text-secondary-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-neutral-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Chat WhatsApp CS
        </span>

        {/* WhatsApp Round Button (48px mobile, 56px desktop) */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:bg-[#20ba5a] transition-colors cursor-pointer">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
          {/* Notification online indicator */}
          <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
        </div>
      </a>
    </aside>
  );
}
