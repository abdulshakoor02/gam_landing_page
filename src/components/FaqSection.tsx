"use client";
import React from "react";
import { Accordion, AccordionItemProps } from "./ui/accordion"; // Ensure path is correct
import { motion } from "framer-motion";

const faqItems: AccordionItemProps[] = [
  {
    id: "faq1",
    question: "What types of visas do you specialize in?",
    answer:
      "We specialize in a wide range of visas including skilled worker programs, family reunification, business immigration, student visas, and refugee or asylum cases. We also assist with citizenship applications.",
  },
  {
    id: "faq2",
    question: "How long does the immigration process typically take?",
    answer:
      "The duration of the immigration process varies significantly based on the visa type, country of application, and individual case complexity. During your consultation, we can provide a more specific estimate based on your situation and current processing times.",
  },
  {
    id: "faq3",
    question: "What are your consultation fees?",
    answer: (
      <div>
        <p>Our initial consultation fee is [Specify Fee, e.g., $150 CAD]. This comprehensive session allows us to understand your profile and provide preliminary advice.</p>
        <p className="mt-2">Should you choose to proceed with our services, this initial fee is often credited towards your total service package. We offer transparent pricing with no hidden costs, detailed in our retainer agreement.</p>
      </div>
    ),
  },
  {
    id: "faq4",
    question: "Can you guarantee visa approval?",
    answer:
      "No reputable immigration consultant can guarantee visa approval, as the final decision rests with the respective government authorities. However, we guarantee our utmost professionalism, expertise, and diligence in preparing and submitting your application to maximize your chances of success.",
  },
  {
    id: "faq5",
    question: "What kind of support do you offer after application submission?",
    answer:
      "Our support continues even after your application is submitted. We monitor your application status, communicate with immigration authorities on your behalf, respond to any requests for additional information, and guide you through subsequent steps like interview preparation or pre-arrival planning.",
  },
];

export function FaqSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 md:py-20 bg-light-gray dark:bg-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"> {/* Constrained width for FAQ list */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-navy-blue dark:text-clean-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-medium-gray dark:text-light-gray-text mb-10 md:mb-16">
          Find quick answers to common queries about our immigration services and processes.
        </p>
        <Accordion items={faqItems} allowMultipleOpen={true} />
      </div>
    </motion.section>
  );
}
