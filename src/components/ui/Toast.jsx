"use client";

// src/components/ui/Toast.jsx
import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { X, Smartphone, Sparkles, CheckCircle2, AlertCircle, Info } from "lucide-react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ title, message, type = "info", duration = 4000 }) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type, duration }]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {/* Toast Floating Viewport */}
      <div
        aria-live="polite"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 max-w-sm sm:max-w-md w-[calc(100vw-2.5rem)] pointer-events-none"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className="pointer-events-auto w-full bg-secondary-900/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl border border-neutral-700/80 flex items-start gap-3.5 animate-in fade-in slide-in-from-bottom-4 duration-300 transition-all select-none ring-1 ring-white/10"
          >
            {/* Leading Icon */}
            <div className="shrink-0 w-9 h-9 rounded-xl bg-primary-500/20 text-primary-400 border border-primary-500/30 flex items-center justify-center mt-0.5">
              {toast.type === "app" ? (
                <Smartphone className="w-5 h-5" />
              ) : toast.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              ) : toast.type === "alert" ? (
                <AlertCircle className="w-5 h-5 text-amber-400" />
              ) : (
                <Sparkles className="w-5 h-5" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-400 font-heading">
                  {toast.title}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-neutral-100 leading-relaxed font-sans">
                {toast.message}
              </p>
            </div>

            {/* Dismiss Button */}
            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              className="shrink-0 p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Tutup notifikasi"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      addToast: ({ title, message }) => {
        if (typeof window !== "undefined") {
          alert(`${title}: ${message}`);
        }
      },
      removeToast: () => {},
    };
  }
  return context;
}
