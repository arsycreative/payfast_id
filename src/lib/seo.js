// src/lib/seo.js
import { site } from "@/content/site";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address,
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.whatsappDisplay,
      contactType: "customer service",
      email: site.contact.email,
      availableLanguage: ["id", "en"],
    },
    sameAs: [
      site.social.instagram,
      site.social.facebook,
      site.social.tiktok,
      site.social.youtube,
    ].filter(Boolean),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "id-ID",
  };
}

export function getFaqSchema(faqList) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
