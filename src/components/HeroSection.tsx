"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { ContactForm } from "./ContactForm";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const heroSlides = [
  { text: "Your Gateway to Global Opportunities" },
  { text: "Expert Immigration Consultation" },
  { text: "Trusted by 1000+ Families" },
  { text: "Success Stories Across 50+ Countries" },
];

export function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background: Gradient from deep navy to teal with subtle animated particles */}
      {/* This will be a div with a tailwind gradient and potentially another layer for particles if needed */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-deep-navy-blue to-professional-teal -z-10">
        {/* Placeholder for subtle animated particles - can use a library or custom CSS later */}
      </div>

      <BackgroundGradient
        containerClassName="w-full min-h-screen" // Ensure gradient covers screen
        className="w-full min-h-screen flex flex-col items-center justify-center relative" // Ensure content is centered
        animate={true}
      >
        {/* Slider Content */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-10 md:mt-24 md:mb-12 z-10">
          <InfiniteMovingCards
            items={heroSlides}
            direction="right"
            speed="normal" // "slow" might be too slow for hero, "normal" or "fast"
            pauseOnHover={false} // Keep it moving for hero
            className="text-clean-white" // Ensure text color is appropriate for the background
          />
        </div>

        {/* Text below slider */}
        <div className="text-center p-4 md:p-8 relative z-10 mb-10">
          <p className="text-lg md:text-xl text-light-gray-text">
            Navigate your path to a new life with our expert guidance.
          </p>
          {/* CTA can be part of the ContactForm which is positioned absolutely or a separate button here for mobile */}
           <div className="md:hidden mt-8">
             <button
               onClick={() => {
                 // Basic scroll to form, or trigger modal
                 const form = document.getElementById("contact-form-mobile");
                 if(form) form.scrollIntoView({behavior: "smooth"});
               }}
               className="px-8 py-3 bg-warm-gold-accent text-deep-navy-blue font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition duration-300"
             >
               Get Free Consultation
             </button>
           </div>
        </div>
      </BackgroundGradient>

      {/* Floating Contact Form for Desktop */}
      <div className="hidden md:block absolute top-1/2 right-10 lg:right-20 transform -translate-y-1/2 z-50">
        <ContactForm />
      </div>

      {/* Contact form for mobile, placed below the fold or revealed via button */}
      <div id="contact-form-mobile" className="md:hidden w-full flex justify-center p-4 pb-16 bg-light-gray">
        <ContactForm className="w-full max-w-md"/>
      </div>

    </div>
  );
}
