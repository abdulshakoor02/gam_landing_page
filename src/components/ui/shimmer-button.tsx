import { cn } from "@/lib/utils";
import React from "react";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.1em", // Thinner shimmer line
      shimmerDuration = "2s", // Slightly faster shimmer
      borderRadius = "0.375rem", // Corresponds to rounded-md
      background = "bg-professional-teal", // Default to professional teal
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background, // This is not directly used by the shimmer effect but useful for base bg
          } as React.CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white",
          "transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg",
          background, // Apply the background color class
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Shimmer effect */}
        <div
          className={cn(
            "animate-shimmer",
            "absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/80 via-50% to-transparent", // Adjusted via opacity and position
            "bg-[length:200%_100%]", // Ensure gradient covers and moves
            // "group-hover:bg-[length:400%_100%]", // Optional: make shimmer wider on hover
          )}
          style={{
            backgroundColor: `hsla(0,0%,100%,0.0)`, // Ensure this doesn't obscure the button bg
            backgroundImage: `linear-gradient(to right, transparent 0%, ${shimmerColor} 30%, ${shimmerColor} 70%, transparent 100%)`,
          }}
        />
        {/* Button Text */}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };
