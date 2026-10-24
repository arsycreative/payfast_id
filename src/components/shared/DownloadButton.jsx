// src/components/shared/DownloadButton.jsx
"use client";

import { AppDownloadBadges } from "./AppDownloadBadges";

/**
 * Shared Download Action Component (Android & iOS Buttons)
 * Unified for all mobile app action buttons across the application.
 */
export function DownloadButton({ size = "md", variant = "dark", className = "", ...props }) {
  return <AppDownloadBadges size={size} variant={variant} className={className} {...props} />;
}

export { AppDownloadBadges };
export default DownloadButton;
