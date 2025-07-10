"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal"; // Ensure path is correct
import Image from "next/image"; // For placeholder images
import { motion } from "framer-motion";

const detailedServicesContent = [
  {
    title: "Personalized Consultation Process",
    description:
      "Our journey together begins with an in-depth consultation to understand your unique aspirations and circumstances. We craft a tailored immigration strategy, identifying the best pathways and programs for your success. This personalized approach ensures that every aspect of your application is optimized for a positive outcome.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--tw-color-soft-blue-gradient-from),var(--tw-color-professional-teal))] flex items-center justify-center text-white">
        <Image
          src="/consultation.jpg" // Replace with actual relevant image
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Personalized Consultation"
          unoptimized // if using external URLs for placeholders
        />
      </div>
    ),
  },
  {
    title: "Document Preparation Expertise",
    description:
      "We provide meticulous guidance and support in gathering, preparing, and reviewing all necessary documentation. Our experts ensure accuracy and completeness, minimizing delays and maximizing your chances of approval. We understand the critical importance of perfectly compiled documents in the immigration process.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/documents.jpg" // Replace with actual relevant image
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Document Preparation"
          unoptimized
        />
      </div>
    ),
  },
  {
    title: "High Success Rate & Transparency",
    description:
      "Our proven track record and high success rates speak for themselves. We believe in transparent communication, keeping you informed at every stage of your application. We are committed to ethical practices and providing realistic assessments of your case, building trust through honesty and results.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--tw-color-emerald-green),var(--tw-color-forest-green))] flex items-center justify-center text-white">
         <Image
          src="/success.jpg" // Replace with actual relevant image
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Success Rate Chart"
          unoptimized
        />
      </div>
    ),
  },
  {
    title: "Ongoing Support Throughout",
    description:
      "Our commitment to you extends beyond the application submission. We provide ongoing support, addressing any queries or concerns that may arise during processing times. We are your dedicated partners until you achieve your immigration goals, offering peace of mind and continuous assistance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--tw-color-warm-gold-accent),var(--tw-color-professional-teal))] flex items-center justify-center text-white">
        <Image
          src="/support.jpg" // Replace with actual relevant image
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Ongoing Support"
          unoptimized
        />
      </div>
    ),
  },
];

export function DetailedServicesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 md:py-20 bg-gradient-to-b from-light-gray to-soft-blue-gradient-from dark:from-dark-charcoal dark:to-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-navy-blue dark:text-clean-white mb-4">
          Why Choose Our Immigration Services?
        </h2>
        <p className="text-center text-medium-gray dark:text-light-gray-text mb-10 md:mb-16 max-w-3xl mx-auto">
          We are dedicated to providing exceptional, client-focused immigration services. Our expertise, personalized approach, and commitment to your success set us apart. Discover the advantages of partnering with us.
        </p>
      </div>
      {/* The StickyScroll component itself doesn't need a separate background if the section provides it */}
      <StickyScroll content={detailedServicesContent} />
    </motion.section>
  );
}
