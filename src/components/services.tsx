"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Brain, Zap, Briefcase, Palette } from "lucide-react"; // Example icons

// Design tokens from JSON (for reference)
const servicesConfig = {
  title: "Our Services",
  items: [
    {
      title: "Creative Design",
      description: "Beautiful, functional designs that capture your brand essence",
      icon: "design", // Mapped to Palette icon
    },
    {
      title: "Marketing Research",
      description: "Data-driven insights to boost your business growth",
      icon: "research", // Mapped to Brain icon
    },
    {
      title: "Business Consulting",
      description: "Strategic guidance for high-level process optimization",
      icon: "consulting", // Mapped to Briefcase icon
    },
    {
      title: "Digital Solutions",
      description: "Bold digital strategies that deliver results",
      icon: "digital", // Mapped to Zap icon
    },
  ],
};

const cardStyleConfig = {
  background: "#ffffff", // bg-neutral-white dark:bg-neutral-gray800 (adjusted for dark mode)
  borderRadius: "12px", // rounded-card-service
  padding: "2rem", // p-xl
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // shadow-card-service
  transition: "all 0.3s ease", // transition-all duration-300 ease-out
  hover: {
    transform: "translateY(-5px)", // hover:-translate-y-1
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)", // hover:shadow-card-service-hover
  },
};

const iconMap: { [key: string]: React.ElementType } = {
  design: Palette,
  research: Brain,
  consulting: Briefcase,
  digital: Zap,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-2xl px-sm md:px-md lg:px-lg bg-neutral-gray100 dark:bg-neutral-gray900">
      <div className="container mx-auto max-w-desktop">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-gray800 dark:text-neutral-white mb-lg font-poppins">
          {servicesConfig.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {servicesConfig.items.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Palette; // Default icon
            return (
              <div
                key={index}
                className={cn(
                  "bg-neutral-white dark:bg-neutral-gray800 rounded-card-service p-xl shadow-card-service",
                  "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-card-service-hover"
                )}
              >
                <div className="flex items-center justify-center mb-md w-16 h-16 bg-primary/10 dark:bg-primary-light/10 rounded-full mx-auto">
                  <IconComponent className="w-8 h-8 text-primary dark:text-primary-light" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-gray800 dark:text-neutral-white text-center mb-sm font-poppins">
                  {service.title}
                </h3>
                <p className="text-neutral-gray600 dark:text-neutral-gray400 text-center text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
