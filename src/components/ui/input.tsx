"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-professional-teal dark:focus-visible:ring-warm-gold-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900",
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Custom theme adjustments for our project
          "dark:text-clean-white text-dark-charcoal",
          "bg-white/80 dark:bg-dark-charcoal/50 backdrop-blur-sm", // Subtle glassmorphism
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
