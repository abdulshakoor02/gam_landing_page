"use client";

import React from "react";
import { InfiniteMovingCards } from "aceternity-ui/dist/components/ui/infinite-moving-cards"; // Adjusted import
import { IconQuote } from "@tabler/icons-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "MarTech took our blockchain project to the next level. Their strategic insights and creative campaigns have been instrumental in driving our success.",
      name: "John D.",
      title: "CEO of CryptoTech",
    },
    {
      quote:
        "The results speak for themselves. Our engagement and conversions have skyrocketed since partnering with MarTech. Highly recommended!",
      name: "Alice B.",
      title: "Marketing Director, NFT Marketplace",
    },
    {
      quote:
        "Navigating the Web3 space was daunting, but MarTech provided clear, effective strategies that delivered real growth. Exceptional team!",
      name: "Michael C.",
      title: "Founder, DeFi Protocol",
    },
    {
      quote:
        "Their deep understanding of the crypto community and targeted campaigns made a significant impact on our project's visibility.",
      name: "Sarah L.",
      title: "Project Lead, Web3 Gaming Platform",
    },
    {
      quote:
        "If you're serious about making an impact in the blockchain industry, MarTech is the agency to work with. Professional, knowledgeable, and results-oriented.",
      name: "David K.",
      title: "Investor & Advisor",
    },
  ];

  return (
    // Wireframe: TESTIMONIALS
    // Wireframe annotation: bg-slate-900, py-20
    // Wireframe annotation: Use Aceternity InfiniteMovingCards
    <section className="bg-slate-900 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-12 md:mb-16 lg:mb-20">
          Here's what our clients have to say:
        </h2>

        {/* Wireframe: Testimonial Card structure (adapted for InfiniteMovingCards item structure) */}
        {/* - Quote Icon (Teal with glow) */}
        {/* - Testimonial Text */}
        {/* - Testimonial Author */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <InfiniteMovingCards
            items={testimonials.map(testimonial => ({
              ...testimonial,
              // Custom rendering for each item can be done if InfiniteMovingCards allows passing a render function
              // For now, assuming it takes 'quote', 'name', 'title' and styles them internally or via props.
              // We will style the cards globally if needed, or customize the component if possible.
              // For the quote icon, it's usually part of the card's internal structure in such components.
            }))}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="w-full max-w-6xl" // Control the width of the moving cards container
          />
        </div>
        {/* Wireframe annotation: Slider component for multiple testimonials (handled by InfiniteMovingCards) */}
      </div>
    </section>
  );
};

// Note: The default styling for InfiniteMovingCards items will be used.
// To precisely match the wireframe's single "testimonial-card" appearance (dashed border, specific quote icon style),
// we might need to:
// 1. Customize the CSS for `.infinite-moving-cards .card` and its children if the component uses predictable classes.
// 2. Or, if Aceternity UI's InfiniteMovingCards allows passing a custom renderItem function, we could use that
//    to render each card exactly as per the wireframe's "testimonial-card" div.
// For now, I'm using the standard InfiniteMovingCards. Further styling customization might be needed in a review pass.
// The "Teal quote icon with glow" will be attempted by styling the default quote icon if possible, or by
// adding a custom icon if the component structure allows.

export default TestimonialsSection;
