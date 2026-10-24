// src/components/shared/DownloadButton.jsx
import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

/**
 * Reusable Download Button Component
 * Default href is "/" (home) as configured in site.downloadAppUrl.
 * Later, the URL can be updated directly in src/content/site.js or via the href prop.
 */
export function DownloadButton({
  href = site.downloadAppUrl || "/",
  children,
  label = "Download Aplikasi",
  variant = "primary",
  size = "md",
  icon = Download,
  className = "",
  ...props
}) {
  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      icon={icon}
      className={className}
      {...props}
    >
      {children || label}
    </Button>
  );
}
