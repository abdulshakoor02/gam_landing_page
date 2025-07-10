"use client";
import React from "react";
import { Timeline, TimelineItem } from "./ui/timeline"; // Ensure path is correct
import { CheckCircle, FileText, MessageSquare, Send, Users } from "lucide-react";
import { motion } from "framer-motion";

const processSteps: TimelineItem[] = [
  {
    title: "Step 1: Initial Consultation",
    description: "We begin with a thorough discussion to understand your immigration goals, background, and specific needs. This helps us tailor the best strategy for you.",
    stepDetails: (
      <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
        <li>Eligibility assessment.</li>
        <li>Overview of suitable programs.</li>
        <li>Q&A session to address your initial concerns.</li>
      </ul>
    ),
    icon: <MessageSquare size={20} className="text-gray-500 dark:text-gray-400" />,
    activeIcon: <MessageSquare size={20} className="text-clean-white" />,
  },
  {
    title: "Step 2: Document Collection & Review",
    description: "Our team guides you in gathering all necessary documents. We meticulously review each one to ensure accuracy and completeness, preventing potential delays.",
    stepDetails: (
       <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
        <li>Personalized document checklist.</li>
        <li>Guidance on obtaining official records.</li>
        <li>Verification of all submitted materials.</li>
      </ul>
    ),
    icon: <FileText size={20} className="text-gray-500 dark:text-gray-400" />,
    activeIcon: <FileText size={20} className="text-clean-white" />,
  },
  {
    title: "Step 3: Application Preparation & Submission",
    description: "We expertly prepare your application, ensuring all forms are correctly filled and all requirements are met before submitting to the relevant authorities.",
     stepDetails: (
       <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
        <li>Accurate completion of all application forms.</li>
        <li>Crafting compelling submission letters if required.</li>
        <li>Final review before official submission.</li>
      </ul>
    ),
    icon: <Send size={20} className="text-gray-500 dark:text-gray-400" />,
    activeIcon: <Send size={20} className="text-clean-white" />,
  },
  {
    title: "Step 4: Ongoing Support & Updates",
    description: "Throughout the processing period, we provide continuous support, track your application status, and respond to any governmental queries promptly.",
    stepDetails: (
       <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
        <li>Regular updates on your application status.</li>
        <li>Liaison with immigration authorities on your behalf.</li>
        <li>Preparation for interviews, if applicable.</li>
      </ul>
    ),
    icon: <Users size={20} className="text-gray-500 dark:text-gray-400" />,
    activeIcon: <Users size={20} className="text-clean-white" />,
  },
   {
    title: "Step 5: Success & Pre-Arrival Guidance",
    description: "Upon successful application, we guide you on the next steps, including pre-arrival preparations and any post-landing requirements.",
    stepDetails: (
       <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
        <li>Notification of visa approval.</li>
        <li>Information on visa stamping and collection.</li>
        <li>Basic guidance for settling in your new country.</li>
      </ul>
    ),
    icon: <CheckCircle size={20} className="text-gray-500 dark:text-gray-400" />,
    activeIcon: <CheckCircle size={20} className="text-clean-white" />,
  },
];

export function ProcessTimeline() {
  return (
    <Timeline
      items={processSteps}
      sectionTitle="Our Step-by-Step Immigration Process"
      sectionDescription="We provide a clear, structured, and supportive pathway to your new life. Understand how we help you succeed at each stage of your immigration journey."
      // Background: Gradient from light blue to white
      wrapperClassName="bg-gradient-to-b from-soft-blue-gradient-from to-clean-white dark:from-slate-800 dark:to-dark-charcoal"
      // titleClassName can be used if specific styling is needed for this section's title
      // descriptionClassName for the description
      // Motion props for fade-in animation
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is in view due to section height
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
}
