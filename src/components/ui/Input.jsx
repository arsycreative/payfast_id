// src/components/ui/Input.jsx
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef(function Input(
  {
    label,
    error,
    helperText,
    id,
    required = false,
    className = "",
    containerClassName = "",
    ...props
  },
  ref
) {
  const inputId = id || props.name;

  return (
    <div className={cn("w-full space-y-1.5", containerClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-semibold text-secondary-800"
        >
          {label} {required && <span className="text-primary-500">*</span>}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(
          "w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 text-sm transition-colors",
          "focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p className="text-xs text-neutral-500">{helperText}</p>
      )}
    </div>
  );
});
