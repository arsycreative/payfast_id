// src/components/sections/MapEmbed.jsx
import { MapPin } from "lucide-react";
import { site } from "@/content/site";
import { Card } from "@/components/ui/Card";

export function MapEmbed() {
  return (
    <div className="rounded-3xl overflow-hidden border border-neutral-200/80 shadow-md relative bg-neutral-100 h-96">
      <iframe
        title="Lokasi Kantor Payfast ID"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.5634786224!2d107.5731168!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e0f5f0!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
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
            <p className="font-bold text-secondary-800">Kantor Operasional Payfast ID</p>
            <p className="text-neutral-600 mt-0.5 leading-relaxed">{site.contact.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
