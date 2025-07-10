"use client";
import React from "react";
import { ThreeDMarquee } from "./ui/three-d-marquee"; // Ensure path is correct
import { motion } from "framer-motion";

// Placeholder logos - replace with actual URLs and aspect ratios if known
// Using generic placeholders that are somewhat square or landscape
const recognitionLogos = [
  { id: "iccrc", src: "https://via.placeholder.com/150x100/FFFFFF/1E3A8A.png?text=ICCRC+Logo", alt: "ICCRC Member" },
  { id: "bar-assoc", src: "https://via.placeholder.com/150x100/FFFFFF/1E3A8A.png?text=Bar+Association", alt: "Bar Association Member" },
  { id: "award-1", src: "https://via.placeholder.com/150x100/FFFFFF/F59E0B.png?text=Top+Consultant+2023", alt: "Award 2023" },
  { id: "gov-rec", src: "https://via.placeholder.com/150x100/FFFFFF/1E3A8A.png?text=Gov+Recognized", alt: "Government Recognized" },
  { id: "iso-cert", src: "https://via.placeholder.com/150x100/FFFFFF/0F766E.png?text=ISO+Certified", alt: "ISO Certified" },
  { id: "client-choice", src: "https://via.placeholder.com/150x100/FFFFFF/F59E0B.png?text=Client+Choice+Award", alt: "Client Choice Award" },
  { id: "legal-excellence", src: "https://via.placeholder.com/150x100/FFFFFF/1E3A8A.png?text=Legal+Excellence", alt: "Legal Excellence Badge" },
  { id: "global-impact", src: "https://via.placeholder.com/150x100/FFFFFF/0F766E.png?text=Global+Impact+Partner", alt: "Global Impact Partner" },
  // Add more to have at least 8-12 for a good marquee effect, ideally 16 for 4x4 initial split
  { id: "iccrc-2", src: "https://via.placeholder.com/150x100/FFFFFF/1E3A8A.png?text=ICCRC+Logo+Alt", alt: "ICCRC Member Alt" },
  { id: "bar-assoc-2", src: "https://via.placeholder.com/150x100/FFFFFF/1E3A8A.png?text=Bar+Association+Alt", alt: "Bar Association Member Alt" },
  { id: "award-2", src: "https://via.placeholder.com/150x100/FFFFFF/F59E0B.png?text=Top+Consultant+2024", alt: "Award 2024" },
  { id: "gov-rec-2", src: "https://via.placeholder.com/150x100/FFFFFF/1E3A8A.png?text=Gov+Recognized+Alt", alt: "Government Recognized Alt" },
  { id: "iso-cert-2", src: "https://via.placeholder.com/150x100/FFFFFF/0F766E.png?text=ISO+Certified+Alt", alt: "ISO Certified Alt" },
  { id: "client-choice-2", src: "https://via.placeholder.com/150x100/FFFFFF/F59E0B.png?text=Client+Choice+Award+Alt", alt: "Client Choice Award Alt" },
  { id: "legal-excellence-2", src: "https://via.placeholder.com/150x100/FFFFFF/1E3A8A.png?text=Legal+Excellence+Alt", alt: "Legal Excellence Badge Alt" },
  { id: "global-impact-2", src: "https://via.placeholder.com/150x100/FFFFFF/0F766E.png?text=Global+Impact+Partner+Alt", alt: "Global Impact Partner Alt" },
];

export function RecognitionMarquee() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 md:py-20 bg-deep-navy-blue relative overflow-hidden"
    > {/* Dark navy background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-clean-white mb-4">
          Recognized & Certified Experts
        </h2>
        <p className="text-center text-light-gray-text mb-10 md:mb-16 max-w-2xl mx-auto">
          Our commitment to excellence is reflected in our accreditations and the trust placed in us by leading organizations.
        </p>
      </div>

      {/* The ThreeDMarquee component */}
      {/* The grid lines inside ThreeDMarquee are styled with warm-gold-accent */}
      <ThreeDMarquee
        items={recognitionLogos}
        className="relative z-0" // Ensure marquee itself is part of the flow but below absolute positioned text if any
        // itemClassName can be used to further style individual logo containers if needed
        // e.g., itemClassName="p-4 bg-white/5" to make logos on slight cards
      />

      {/* Optional: Subtle golden accent highlights in the background using pseudo-elements or absolutely positioned decorative elements */}
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-warm-gold-accent/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-warm-gold-accent/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2 z-0"></div>
    </motion.section>
  );
}
