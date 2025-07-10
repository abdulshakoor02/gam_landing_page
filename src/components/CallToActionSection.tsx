"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient"; // Reusing
import { ShimmerButton } from "./ui/shimmer-button";
import { Mail, Phone, Users, CalendarDays, Award } from "lucide-react"; // Icons for contact and social proof
import { motion } from "framer-motion";

export function CallToActionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-16 md:py-24 overflow-hidden" // Added overflow-hidden for safety with blurs
    >
      {/* Background: Bold gradient with animated elements */}
      {/* Using BackgroundGradient component for the animated gradient part */}
      <BackgroundGradient
        containerClassName="absolute inset-0 w-full h-full -z-10"
        animate={true}
        // Customizing the gradient colors for a "bold gradient"
        // This will override the default gradient in the BackgroundGradient component if its CSS is structured to allow it.
        // However, BackgroundGradient has its own complex radial gradients.
        // For a simpler bold linear gradient, we might need to apply it directly or adjust BackgroundGradient.
        // For now, let's assume the default animation of BackgroundGradient is acceptable.
        // To achieve a specific "bold gradient", direct styling might be better:
      >
         {/* This div creates the actual bold gradient background, BackgroundGradient component above adds animated accents */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-deep-navy-blue via-professional-teal to-emerald-green opacity-90"></div>
      </BackgroundGradient>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-clean-white mb-6">
          Ready to Start Your Immigration Journey?
        </h2>
        <p className="text-lg md:text-xl text-soft-blue-gradient-from mb-10 md:mb-12 max-w-2xl mx-auto">
          Don't wait any longer to achieve your global aspirations. Schedule your
          personalized consultation with our experts today and take the first
          step towards your new future.
        </p>

        <ShimmerButton
          className="px-10 py-4 text-lg font-semibold" // Larger button
          background="bg-warm-gold-accent" // Prominent gold color
          shimmerColor="#FFFFFF"
        >
          Schedule Your Consultation Today
        </ShimmerButton>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Contact Information Display */}
          <div className="flex flex-col items-center p-6 bg-clean-white/10 backdrop-blur-md rounded-lg">
            <Mail size={32} className="text-warm-gold-accent mb-3" />
            <h4 className="text-xl font-semibold text-clean-white mb-1">Email Us</h4>
            <a href="mailto:consult@example.com" className="text-soft-blue-gradient-from hover:text-warm-gold-accent transition-colors">
              consult@example.com
            </a>
          </div>
          <div className="flex flex-col items-center p-6 bg-clean-white/10 backdrop-blur-md rounded-lg">
            <Phone size={32} className="text-warm-gold-accent mb-3" />
            <h4 className="text-xl font-semibold text-clean-white mb-1">Call Us</h4>
            <a href="tel:+1234567890" className="text-soft-blue-gradient-from hover:text-warm-gold-accent transition-colors">
              +1 (234) 567-890
            </a>
          </div>
        </div>

        {/* Social Proof Elements */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center p-4 bg-clean-white/5 backdrop-blur-sm rounded-lg">
            <Users size={28} className="text-warm-gold-accent mb-2" />
            <h4 className="text-lg font-semibold text-clean-white">1000+ Clients</h4>
            <p className="text-sm text-soft-blue-gradient-from">Successfully Guided</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-clean-white/5 backdrop-blur-sm rounded-lg">
            <CalendarDays size={28} className="text-warm-gold-accent mb-2" />
            <h4 className="text-lg font-semibold text-clean-white">10+ Years</h4>
            <p className="text-sm text-soft-blue-gradient-from">of Experience</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-clean-white/5 backdrop-blur-sm rounded-lg">
            <Award size={28} className="text-warm-gold-accent mb-2" />
            <h4 className="text-lg font-semibold text-clean-white">5000+ Cases</h4>
            <p className="text-sm text-soft-blue-gradient-from">Handled Successfully</p>
          </div>
        </div>
      </div>
    </section>
  );
}
