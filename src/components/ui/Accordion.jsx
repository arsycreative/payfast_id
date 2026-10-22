"use client";

// src/components/ui/Accordion.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items = [], allowMultiple = false, className = "" }) {
  const [openIndices, setOpenIndices] = useState([0]); // first item open by default

  const toggleIndex = (index) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        const headerId = `accordion-header-${idx}`;
        const panelId = `accordion-panel-${idx}`;

        return (
          <div
            key={idx}
            className={cn(
              "rounded-2xl border transition-all duration-200 overflow-hidden",
              isOpen
                ? "border-primary-300 bg-white shadow-sm"
                : "border-neutral-200/80 bg-white hover:border-neutral-300"
            )}
          >
            <button
              type="button"
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleIndex(idx)}
              className="flex w-full items-center justify-between p-5 md:p-6 text-left transition-colors cursor-pointer"
            >
              <span className="font-heading font-bold text-secondary-800 text-base md:text-lg pr-4">
                {item.question || item.title}
              </span>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200",
                  isOpen
                    ? "bg-primary-100 text-primary-600 rotate-180"
                    : "bg-neutral-100 text-neutral-500"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="px-5 pb-6 md:px-6 md:pb-6 text-neutral-600 text-sm md:text-base leading-relaxed border-t border-neutral-100 pt-4"
              >
                {item.answer || item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
