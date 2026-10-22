// src/components/ui/Select.jsx
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Select = forwardRef(function Select(
  {
    label,
    options = [],
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
  const selectId = id || props.name;

  return (
    <div className={cn("w-full space-y-1.5", containerClassName)}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-semibold text-secondary-800"
        >
          {label} {required && <span className="text-primary-500">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${selectId}-error` : undefined}
          className={cn(
            "w-full appearance-none px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 text-sm transition-colors cursor-pointer",
            "focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {error && (
        <p id={`${selectId}-error`} className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p className="text-xs text-neutral-500">{helperText}</p>
      )}
    </div>
  );
});
