"use client";
import React from "react";
import { HoverEffect, ServiceCardItem } from "./ui/card-hover-effect";
import { Briefcase, Users, Building, GraduationCap, Shield, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";

const services: ServiceCardItem[] = [
  {
    title: "Skilled Worker Programs",
    description: "Navigate complex skilled worker visa applications with our expert assistance for global talent.",
    link: "/services/skilled-worker",
    icon: <Briefcase size={40} />,
  },
  {
    title: "Family Reunification",
    description: "Reunite with your loved ones through our dedicated family sponsorship and visa services.",
    link: "/services/family-reunification",
    icon: <Users size={40} />,
  },
  {
    title: "Business Immigration",
    description: "Explore opportunities for entrepreneurs and investors with our business immigration solutions.",
    link: "/services/business-immigration",
    icon: <Building size={40} />,
  },
  {
    title: "Student Visas",
    description: "Pursue your educational dreams abroad with our comprehensive student visa guidance.",
    link: "/services/student-visas",
    icon: <GraduationCap size={40} />,
  },
  {
    title: "Refugee & Asylum Cases",
    description: "Providing compassionate and expert legal support for refugee and asylum seekers.",
    link: "/services/refugee-asylum",
    icon: <Shield size={40} />,
  },
  {
    title: "Citizenship Applications",
    description: "Achieve your goal of citizenship with our meticulous application preparation and support.",
    link: "/services/citizenship",
    icon: <CheckSquare size={40} />,
  },
];

export function ServicesGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12 md:py-20 bg-gradient-to-b from-soft-blue-gradient-from to-soft-blue-gradient-to"
    > {/* Background: Subtle gradient */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-deep-navy-blue mb-4">
          Comprehensive Immigration Solutions
        </h2>
        <p className="text-center text-medium-gray mb-10 md:mb-16 max-w-2xl mx-auto">
          We offer a wide range of personalized immigration services to help you achieve your goals. Explore our key areas of expertise.
        </p>
        <HoverEffect items={services} />
      </div>
    </motion.section>
  );
}
