"use client"; // Aceternity UI components often require client components

import React from "react";
// Ensure this import path is correct based on your Aceternity UI setup.
// It might be directly 'aceternity-ui' or a subpath if you've structured it differently.
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "aceternity-ui/dist/components/ui/text-reveal-card";
import { Button } from "aceternity-ui/dist/components/ui/moving-border"; // For CTA button with moving border effect

const HeroSection = () => {
  return (
    // Wireframe: HERO SECTION
    // Wireframe annotation: bg-gradient-to-br from-slate-900 to-slate-800 (Tailwind classes)
    // Using slightly darker shades for more contrast based on typical dark themes.
    <section className="relative py-20 md:py-32 lg:py-40 min-h-[80vh] flex flex-col justify-center items-center text-white bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
      {/* Section Label from wireframe - useful for dev, can be commented out for prod */}
      {/* <div className="absolute top-5 left-5 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded z-20">HERO SECTION</div> */}

      {/* Annotations from wireframe */}
      {/* <div className="absolute top-5 right-5 bg-sky-500/50 text-white p-2 text-xs rounded z-20">bg-gradient-to-br from-slate-900 to-slate-800</div> */}
      {/* <div className="absolute top-16 right-5 bg-sky-500/50 text-white p-2 text-xs rounded z-20">Use Aceternity TextRevealCard</div> */}

      {/* Stats Row */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16 lg:mb-20 max-w-4xl mx-auto">
          {/* Stat 1 */}
          <div className="text-center p-4 border-2 border-dashed border-slate-700 rounded-lg bg-slate-800/50 relative">
            {/* <div className="absolute -top-8 left-0 bg-cyan-500 text-white p-1 text-[10px] rounded">text-5xl font-bold</div> */}
            <div className="text-4xl lg:text-5xl font-bold text-slate-100">240+</div>
            <div className="text-sm text-slate-400 mt-2">Partners Served</div>
          </div>
          {/* Stat 2 */}
          <div className="text-center p-4 border-2 border-dashed border-slate-700 rounded-lg bg-slate-800/50">
            <div className="text-4xl lg:text-5xl font-bold text-slate-100">68%</div>
            <div className="text-sm text-slate-400 mt-2">Improvement per Campaign</div>
          </div>
          {/* Stat 3 */}
          <div className="text-center p-4 border-2 border-dashed border-slate-700 rounded-lg bg-slate-800/50">
            <div className="text-4xl lg:text-5xl font-bold text-slate-100">$12m</div>
            <div className="text-sm text-slate-400 mt-2">Average Client Revenue</div>
          </div>
          {/* Stat 4 */}
          <div className="text-center p-4 border-2 border-dashed border-slate-700 rounded-lg bg-slate-800/50">
            <div className="text-4xl lg:text-5xl font-bold text-slate-100">+98%</div>
            <div className="text-sm text-slate-400 mt-2">Client Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      {/* Wireframe annotation: Center-aligned, max-width 800px */}
      <div className="container mx-auto px-4 text-center max-w-3xl xl:max-w-4xl mb-10 md:mb-12">
        <div className="flex items-center justify-center my-10"> {/* Added margin for spacing */}
          <TextRevealCard
            text="Impactful Marketing Campaigns" // Main part of the title for TextRevealCard
            revealText="Results-Driven Strategies" // Text to reveal on hover for TextRevealCard
            className="w-full items-center justify-center flex flex-col" // Ensure card itself centers its content
          >
            {/* This title is part of TextRevealCard and will be styled by it, but we can guide its initial appearance */}
            <TextRevealCardTitle className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-sky-400">
              We Create Impactful Marketing Campaigns that deliver results
            </TextRevealCardTitle>
            {/* Subtitle from wireframe */}
            <TextRevealCardDescription className="text-base md:text-lg text-slate-300 leading-relaxed mt-4">
              MarTech isn't your average marketing agency – we're trailblazers in the blockchain and Web3 arena. Every client receives a full tracking dashboard and guaranteed performance improvement.
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>

        {/* CTA Button from wireframe */}
        <div className="mt-10">
            <Button
                borderRadius="0.5rem" // Corresponds to border-radius: 8px in wireframe
                className="bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-colors duration-300 text-base md:text-lg font-semibold px-8 py-3 md:px-10 md:py-4" // Adjusted padding to match wireframe: p: 16px 32px;
                duration={3000} // Speed of the moving border animation
                borderClassName="bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]" // Example of customizing border color/effect
            >
                Get a Free Audit
            </Button>
        </div>
      </div>

      {/* Wireframe annotation: Center-aligned, max-width 800px (covered by max-w- on parent) */}
      {/* <div className="absolute bottom-5 left-5 text-xs text-slate-600">Center-aligned, max-width 800px (guide)</div> */}
    </section>
  );
};

export default HeroSection;
