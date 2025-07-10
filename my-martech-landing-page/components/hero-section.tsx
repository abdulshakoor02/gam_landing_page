"use client"; // Aceternity UI components often require client components

import React from "react";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "aceternity-ui/dist/components/ui/text-reveal-card"; // Adjusted import path
import { Button } from "aceternity-ui/dist/components/ui/moving-border"; // For CTA button with moving border

const HeroSection = () => {
  return (
    // Wireframe: HERO SECTION
    // Wireframe annotation: bg-gradient-to-br from-slate-900 to-slate-800 (applied via global style or can be specific here)
    // Wireframe annotation: Use Aceternity TextRevealCard (for title)
    <section className="relative py-20 md:py-32 lg:py-40 min-h-[80vh] flex flex-col justify-center items-center text-white bg-gradient-to-br from-slate-950 to-slate-800 overflow-hidden">
      {/* Section Label (for visual reference, similar to wireframe) */}
      {/* <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded z-10">HERO SECTION (Dev Label)</div> */}

      {/* Stats Row */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-12 md:mb-16 lg:mb-20 max-w-4xl mx-auto">
          {/* Stat 1 */}
          <div className="text-center p-4 border-2 border-dashed border-slate-700 rounded-lg bg-slate-800/30">
            {/* Wireframe annotation: text-5xl font-bold */}
            <div className="text-4xl lg:text-5xl font-bold text-slate-100">240+</div>
            <div className="text-sm text-slate-400 mt-2">Partners Served</div>
          </div>
          {/* Stat 2 */}
          <div className="text-center p-4 border-2 border-dashed border-slate-700 rounded-lg bg-slate-800/30">
            <div className="text-4xl lg:text-5xl font-bold text-slate-100">68%</div>
            <div className="text-sm text-slate-400 mt-2">Improvement per Campaign</div>
          </div>
          {/* Stat 3 */}
          <div className="text-center p-4 border-2 border-dashed border-slate-700 rounded-lg bg-slate-800/30">
            <div className="text-4xl lg:text-5xl font-bold text-slate-100">$12m</div>
            <div className="text-sm text-slate-400 mt-2">Average Client Revenue</div>
          </div>
          {/* Stat 4 */}
          <div className="text-center p-4 border-2 border-dashed border-slate-700 rounded-lg bg-slate-800/30">
            <div className="text-4xl lg:text-5xl font-bold text-slate-100">+98%</div>
            <div className="text-sm text-slate-400 mt-2">Client Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      {/* Wireframe annotation: Center-aligned, max-width 800px */}
      <div className="container mx-auto px-4 text-center max-w-3xl xl:max-w-4xl mb-10 md:mb-12">
        <div className="flex items-center justify-center">
          <TextRevealCard
            text="Impactful Marketing Campaigns" // Main part of the title
            revealText="Results-Driven Strategies" // Text to reveal on hover
            className="w-full"
          >
            <TextRevealCardTitle className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-sky-500">
              {/* This will be replaced by the text prop, but we can set initial style */}
              We Create Impactful Marketing Campaigns that deliver results
            </TextRevealCardTitle>
            <TextRevealCardDescription className="text-base md:text-lg text-slate-300 leading-relaxed">
              MarTech isn't your average marketing agency – we're trailblazers in the blockchain and Web3 arena. Every client receives a full tracking dashboard and guaranteed performance improvement.
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>

        <div className="mt-10">
            <Button
                borderRadius="1.75rem"
                className="bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-colors duration-300 text-base md:text-lg font-semibold"
                duration={3000}
            >
                Get a Free Audit
            </Button>
        </div>
      </div>

      {/* Placeholder for potential bottom annotations or decorative elements if needed */}
      {/* <div className="absolute bottom-5 left-5 text-xs text-slate-500">Center-aligned, max-width 800px (guide)</div> */}
    </section>
  );
};

export default HeroSection;
