"use client";

import React from "react";
import { Button } from "aceternity-ui/dist/components/ui/moving-border"; // Reusing from Hero
import { GridPattern } from "aceternity-ui/dist/components/ui/grid-pattern"; // For decorative element
import { cn } from "@/lib/utils"; // Assuming you have this utility for classnames

const FAQSection = () => {
  const faqItems = [
    {
      question: "What makes MarTech different from other marketing agencies?",
      answer:
        "Unlike traditional agencies, MarTech specializes in blockchain and Web3 marketing, giving you a competitive edge in this rapidly evolving industry.",
    },
    {
      question: "What kind of results can I expect from working with MarTech?",
      answer:
        "With MarTech on your side, you can expect to see increased brand visibility, higher engagement, and ultimately, greater ROI for your marketing efforts.",
    },
    {
      question: "How can I sign up for a free audit?",
      answer:
        "It's simple! Just click the button below to schedule your complimentary consultation with one of our experts.",
    },
  ];

  return (
    // Wireframe: FAQ SECTION
    // Wireframe annotation: bg-slate-800, grid-cols-1 lg:grid-cols-2
    <section className="bg-slate-800 py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-28"> {/* Sticky for taller content on the right */}
            {/* Wireframe annotation: text-5xl font-bold (for title) */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-8 md:mb-10 leading-tight">
              We've got A's for your Q's
            </h2>
            <div className="mb-10">
              <Button
                  borderRadius="0.5rem" // Matches hero button
                  className="bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-colors duration-300 text-base md:text-lg font-semibold px-8 py-3 md:px-10 md:py-4"
                  duration={3000}
              >
                  Get a Free Audit
              </Button>
            </div>

            {/* Decorative Element: Dotted Grid Pattern */}
            {/* Wireframe: 200px x 150px, border: 2px dashed rgba(255,255,255,0.3), bg: rgba(255,255,255,0.05) */}
            <div className="relative w-[200px] h-[150px] border-2 border-dashed border-slate-600/70 bg-slate-700/30 rounded-lg flex items-center justify-center text-slate-400 text-xs p-4 overflow-hidden">
              {/* Using Aceternity GridPattern - might need to adjust props for "dotted" effect if possible */}
              <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"} // Creates a dashed line, attempt for "dotted"
                className={cn(
                  "[mask-image:radial-gradient(300px_at_center,white,transparent)]", // Fades out
                  "stroke-slate-500/50"
                )}
              />
              <span className="relative z-10">Dotted Grid Pattern Area</span>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Wireframe annotation: FAQ accordion or static list */}
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="mb-6 md:mb-8 p-6 border-2 border-dashed border-slate-700 rounded-lg bg-slate-700/30"
              >
                <h3 className="text-xl font-semibold text-slate-100 mb-3">
                  {item.question}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
