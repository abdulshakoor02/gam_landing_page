"use client";
import React from "react";
import React from "react"; // Added React just in case, though often implicit
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";
import { ShimmerButton } from "./ui/shimmer-button";
import { Mail, Phone, Users, CalendarDays, Award, CheckCircle } from "lucide-react"; // Added CheckCircle here

export function CallToActionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      <BackgroundGradient
        containerClassName="absolute inset-0 w-full h-full -z-10"
        animate={true}
      >
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
          className="px-10 py-4 text-lg font-semibold"
          background="bg-warm-gold-accent"
          shimmerColor="#FFFFFF"
        >
          Schedule Your Consultation Today
        </ShimmerButton>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
           <div className="flex flex-col items-center p-6 bg-clean-white/10 backdrop-blur-md rounded-lg">
            <Users size={32} className="text-warm-gold-accent mb-3" />
            <h4 className="text-xl font-semibold text-clean-white mb-1">1000+ Clients</h4>
            <p className="text-soft-blue-gradient-from">Successfully Guided</p>
          </div>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
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
           {/* One more item to make the grid even if desired, or remove one from above row */}
           <div className="flex flex-col items-center p-4 bg-clean-white/5 backdrop-blur-sm rounded-lg sm:col-start-2 md:col-start-auto">
             {/* Example: Could be another award or a satisfaction rating */}
            <CheckCircle size={28} className="text-emerald-green mb-2" /> {/* Changed icon for variety */}
            <h4 className="text-lg font-semibold text-clean-white">High Satisfaction</h4>
            <p className="text-sm text-soft-blue-gradient-from">Client Focused</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
