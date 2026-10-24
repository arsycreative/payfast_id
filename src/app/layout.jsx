// src/app/layout.jsx
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { ScrollRestoration } from "@/components/layout/ScrollRestoration";
import { ToastProvider } from "@/components/ui/Toast";
import { JsonLd } from "@/components/shared/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.ico?v=20261024", type: "image/x-icon" },
      { url: "/favicon-32x32.png?v=20261024", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=20261024", sizes: "16x16", type: "image/png" },
      { url: "/favicon-192x192.png?v=20261024", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon.ico?v=20261024"],
    apple: [
      { url: "/apple-touch-icon.png?v=20261024", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "pulsa murah",
    "agen pulsa",
    "paket data all operator",
    "token listrik pln",
    "top up dana",
    "top up gopay",
    "voucher game",
    "ppob indonesia",
    "payfast id",
  ],
  authors: [{ name: "Payfast ID" }],
  creator: "Payfast ID",
  publisher: "Payfast ID",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: `${site.url}/og-image.png`,
        secureUrl: `${site.url}/og-image.png`,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [`${site.url}/og-image.png`],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const orgSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=20261024" />
        <link rel="shortcut icon" href="/favicon.ico?v=20261024" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=20261024" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=20261024" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png?v=20261024" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=20261024" />
        {/* Open Graph & Social Share Preview tags for WhatsApp & Social Media */}
        <meta property="og:image" content={`${site.url}/og-image.png`} />
        <meta property="og:image:secure_url" content={`${site.url}/og-image.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Payfast ID — Isi Ulang Pulsa & Produk Digital" />
        <meta name="twitter:image" content={`${site.url}/og-image.png`} />
        <meta name="twitter:image:alt" content="Payfast ID — Isi Ulang Pulsa & Produk Digital" />
        <JsonLd data={orgSchema} />
        <JsonLd data={webSiteSchema} />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-neutral-800 antialiased selection:bg-primary-100 selection:text-primary-700">
        <ToastProvider>
          <ScrollRestoration />
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppFab />
          <ScrollTop />
        </ToastProvider>
      </body>
    </html>
  );
}
