"use client";

import React from "react";
import { Button } from "./ui/moving-border"; // Aceternity UI Moving Border Button
import { TextGenerateEffect } from "./ui/text-generate-effect"; // Aceternity UI Text Generate Effect
import { cn } from "@/lib/utils";

// Design tokens from JSON (for reference)
const heroConfig = {
  title: "We creative best high services & bold solutions for your business growth",
  subtitle: "Design Creatively Beauty",
  description: "We deliver exceptional marketing research and business-level processes through expert consultations and innovative solutions.",
  background: {
    type: "gradient",
    colors: ["#667eea", "#764ba2"], // from-[#667eea] to-[#764ba2]
  },
  textColor: "#ffffff", // text-neutral-white
  buttons: [
    {
      text: "Get Started",
      style: "primary", // Corresponds to components.buttons.primary
      action: "cta",
    },
    {
      text: "Learn More",
      style: "secondary", // Corresponds to components.buttons.secondary
      action: "learn",
    },
  ],
};

// Button styles from JSON (for reference)
const buttonStyles = {
  primary: {
    background: "#2563eb", // bg-primary
    color: "#ffffff", // text-neutral-white
    padding: "12px 24px", // p-3 (approx) or custom padding
    borderRadius: "8px", // rounded-button-primary
    fontSize: "1rem", // text-base
    fontWeight: 600, // font-semibold
    hover: {
      background: "#1d4ed8", // hover:bg-primary-dark
      transform: "translateY(-2px)", // hover:-translate-y-0.5
    },
  },
  secondary: {
    background: "transparent", // bg-transparent
    color: "#2563eb", // text-primary
    border: "2px solid #2563eb", // border-2 border-primary
    hover: {
      background: "#2563eb", // hover:bg-primary
      color: "#ffffff", // hover:text-neutral-white
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-2xl px-sm md:px-md lg:px-lg overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2]"
    >
      {/* Optional: Add background elements here if needed, e.g. Aceternity Grid */}
      {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-50" /> */}

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="font-accent text-xl md:text-2xl text-secondary-light mb-sm animate-fadeIn">
          {heroConfig.subtitle}
        </p>

        <div className="mb-md animate-slideUp" style={{ animationDelay: heroConfig.animations?.slideUp?.delay || "0.2s" }}>
          <TextGenerateEffect
            words={heroConfig.title}
            className="text-neutral-white font-bold text-4xl md:text-5xl lg:text-6xl !leading-tight"
            duration={parseFloat(heroConfig.animations?.fadeIn?.duration) || 0.8}
          />
        </div>

        <p className="text-lg md:text-xl text-neutral-gray200 mb-lg max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          {heroConfig.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-sm animate-fadeIn" style={{ animationDelay: "0.6s" }}>
          {heroConfig.buttons.map((button) => {
            if (button.style === "primary") {
              return (
                <Button
                  key={button.text}
                  borderRadius={buttonStyles.primary.borderRadius} // "8px"
                  className={cn(
                    "bg-primary text-neutral-white text-base font-semibold border-none",
                    "hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300"
                  )}
                  style={{ padding: buttonStyles.primary.padding }}
                  // duration for moving border animation
                >
                  {button.text}
                </Button>
              );
            }
            if (button.style === "secondary") {
              return (
                <button
                  key={button.text}
                  className={cn(
                    "bg-transparent text-primary text-base font-semibold border-2 border-primary rounded-button-secondary",
                    "hover:bg-primary hover:text-neutral-white transition-all duration-300 hover:-translate-y-0.5",
                    "px-6 py-3" // Tailwind equivalent of 12px 24px padding
                  )}
                >
                  {button.text}
                </button>
              );
            }
            return null;
          })}
        </div>
      </div>
      {/* You can add more Aceternity UI background effects here if desired */}
      {/* e.g. <BackgroundBeams /> */}
    </section>
  );
};

export default HeroSection;
