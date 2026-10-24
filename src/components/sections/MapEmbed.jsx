// src/components/sections/MapEmbed.jsx
import { MapPin } from "lucide-react";
import { site } from "@/content/site";
import { Card } from "@/components/ui/Card";

export function MapEmbed() {
  return (
    <div className="rounded-3xl overflow-hidden border border-neutral-200/80 shadow-md relative bg-neutral-100 h-96">
      <iframe
        title="Lokasi Kantor CV. PAYFAST INDONESIA"
        src="https://maps.google.com/maps?q=Karangbenda%2C+Kec.+Adipala%2C+Kabupaten+Cilacap%2C+Jawa+Tengah+53271&t=&z=14&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
      />

      {/* Floating Address Overlay Card */}
      <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm pointer-events-none">
        <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-neutral-200/80 flex items-start gap-3 pointer-events-auto">
          <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <p className="font-bold text-secondary-800">{site.companyName || "CV. PAYFAST INDONESIA"}</p>
            <p className="text-neutral-600 mt-0.5 leading-relaxed">{site.contact.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
