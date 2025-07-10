"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"; // Reusing the enhanced component
import { motion } from "framer-motion";
  {
    quote:
      "The team made my complex visa process incredibly smooth and stress-free. Their expertise is unmatched!",
    name: "Elena Rodriguez",
    country: "Canada (Originally from Colombia)",
    photoUrl: "https://randomuser.me/api/portraits/women/68.jpg", // Placeholder
    rating: 5,
  },
  {
    quote:
      "Thanks to their professional guidance, my family and I are now happily settled in our new home. Highly recommended!",
    name: "Johnathan Chen",
    country: "Australia (Originally from China)",
    photoUrl: "https://randomuser.me/api/portraits/men/75.jpg", // Placeholder
    rating: 5,
  },
  {
    quote:
      "Their attention to detail and constant support were crucial for my business immigration success. True professionals.",
    name: "Aisha Al-Farsi",
    country: "United Kingdom (Originally from UAE)",
    photoUrl: "https://randomuser.me/api/portraits/women/44.jpg", // Placeholder
    rating: 5,
  },
  {
    quote:
      "As a student, navigating the visa application was daunting, but they made it clear and straightforward. So grateful!",
    name: "Kenji Tanaka",
    country: "USA (Originally from Japan)",
    photoUrl: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder
    rating: 4,
  },
  {
    quote:
      "I was impressed by their knowledge of various immigration programs and their personalized approach to my case.",
    name: "Maria Silva",
    country: "Germany (Originally from Brazil)",
    photoUrl: "https://randomuser.me/api/portraits/women/12.jpg", // Placeholder
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 md:py-20 bg-light-gray dark:bg-dark-charcoal"
    > {/* Clean white with subtle shadows (achieved by card bg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-navy-blue dark:text-clean-white mb-4">
          Words From Our Valued Clients
        </h2>
        <p className="text-center text-medium-gray dark:text-light-gray-text mb-10 md:mb-16 max-w-2xl mx-auto">
          Discover how we've helped individuals, families, and businesses achieve their immigration dreams.
        </p>
        <div className="h-auto rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow" // As requested for testimonials
            pauseOnHover={true}
            isTestimonial={true} // Crucial flag
            className="w-full max-w-6xl" // Max width for the carousel container
            // itemClassName can be used if further specific styling is needed for testimonial items
          />
        </div>
      </div>
    </motion.section>
  );
}
