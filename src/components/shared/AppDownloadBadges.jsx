"use client";

import { useToast } from "@/components/ui/Toast";
import { site } from "@/content/site";

export function AppDownloadBadges({
  className = "",
  size = "md", // 'sm' | 'md' | 'lg'
  variant = "dark", // 'dark' | 'light'
  showBadge = false,
}) {
  const { addToast } = useToast();

  const handleStoreClick = (storeName, url) => {
    if (url && url !== "/" && url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    addToast({
      title: `Aplikasi ${storeName.includes("Android") ? "Android" : "iOS"} Segera Hadir`,
      message: `Link download resmi Payfast ID di ${storeName} sedang dalam tahap finalisasi dan review. Akses unduh akan segera dibuka saat peluncuran resmi!`,
      type: "app",
      duration: 5000,
    });
  };

  const isSmall = size === "sm";
  const isLarge = size === "lg";

  const buttonBaseClass = `
    group relative inline-flex items-center gap-3 rounded-xl transition-all duration-200 cursor-pointer select-none text-left
    active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-500/50
    ${
      variant === "light"
        ? "bg-white text-secondary-900 border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 shadow-sm hover:shadow"
        : "bg-neutral-950 text-white border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 shadow-md hover:shadow-xl shadow-black/20"
    }
    ${
      isSmall
        ? "px-3 py-1.5 min-w-[135px]"
        : isLarge
        ? "px-5 py-3 min-w-[170px]"
        : "px-4 py-2.5 min-w-[155px]"
    }
  `;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* Google Play Store Button */}
      <button
        type="button"
        onClick={() => handleStoreClick("Google Play Store (Android)", site.googlePlayUrl)}
        className={buttonBaseClass}
        aria-label="Unduh di Google Play Store (Segera Hadir)"
      >
        {/* Authentic Multi-color Google Play Vector Icon */}
        <svg
          viewBox="0 0 24 24"
          className={`shrink-0 transition-transform duration-200 group-hover:scale-110 ${
            isSmall ? "w-5 h-5" : isLarge ? "w-7 h-7" : "w-6 h-6"
          }`}
          aria-hidden="true"
        >
          {/* Yellow right triangle */}
          <path
            fill="#FFBA00"
            d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594z"
          />
          {/* Blue left base */}
          <path
            fill="#0086F4"
            d="M1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924z"
          />
          {/* Green top wing */}
          <path
            fill="#00E25B"
            d="M13.544 10.989l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973z"
          />
          {/* Red bottom wing */}
          <path
            fill="#EA4335"
            d="M13.544 13.056l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"
          />
        </svg>

        <div className="flex flex-col leading-none">
          <span
            className={`uppercase tracking-wider font-medium text-neutral-400 group-hover:text-neutral-300 transition-colors ${
              isSmall ? "text-[9px]" : "text-[10px]"
            }`}
          >
            TEMUKAN DI
          </span>
          <span
            className={`font-bold font-heading tracking-tight mt-0.5 ${
              variant === "light" ? "text-neutral-900" : "text-white"
            } ${isSmall ? "text-xs" : isLarge ? "text-base" : "text-sm"}`}
          >
            Google Play
          </span>
        </div>

        {showBadge && (
          <span className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full bg-amber-500 text-[9px] font-extrabold text-white tracking-wider uppercase shadow-xs">
            SOON
          </span>
        )}
      </button>

      {/* Apple App Store Button */}
      <button
        type="button"
        onClick={() => handleStoreClick("Apple App Store (iOS)", site.appStoreUrl)}
        className={buttonBaseClass}
        aria-label="Unduh di App Store (Segera Hadir)"
      >
        {/* Authentic Apple Vector Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`shrink-0 transition-transform duration-200 group-hover:scale-110 ${
            variant === "light" ? "text-neutral-900" : "text-white"
          } ${isSmall ? "w-5 h-5" : isLarge ? "w-7 h-7" : "w-6 h-6"}`}
          aria-hidden="true"
        >
          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
        </svg>

        <div className="flex flex-col leading-none">
          <span
            className={`uppercase tracking-wider font-medium text-neutral-400 group-hover:text-neutral-300 transition-colors ${
              isSmall ? "text-[9px]" : "text-[10px]"
            }`}
          >
            Download di
          </span>
          <span
            className={`font-bold font-heading tracking-tight mt-0.5 ${
              variant === "light" ? "text-neutral-900" : "text-white"
            } ${isSmall ? "text-xs" : isLarge ? "text-base" : "text-sm"}`}
          >
            App Store
          </span>
        </div>

        {showBadge && (
          <span className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full bg-amber-500 text-[9px] font-extrabold text-white tracking-wider uppercase shadow-xs">
            SOON
          </span>
        )}
      </button>
    </div>
  );
}

// Aliases for unified shared usage across the app
export { AppDownloadBadges as DownloadButton, AppDownloadBadges as AppDownloadButtons };
