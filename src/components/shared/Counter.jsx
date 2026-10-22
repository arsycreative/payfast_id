"use client";

// src/components/shared/Counter.jsx
import { useEffect, useRef, useState } from "react";

export function Counter({ value, className = "" }) {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef(null);

  useEffect(() => {
    // If value has non-digits like "+", "%", "/", e.g. "50.000+"
    // parse the numeric part and animate
    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const rawStr = numericMatch[0].replace(/\./g, "");
    const target = parseFloat(rawStr);
    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const startTime = performance.now();
          const duration = 1500; // 1.5s

          const update = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * easeOut);

            // Reformat with Indonesian period separator
            const formattedNumber = new Intl.NumberFormat("id-ID").format(current);
            const formatted = value.replace(numericMatch[0], formattedNumber);
            setDisplayValue(formatted);

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(update);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
}
