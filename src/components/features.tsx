"use client";

import React from "react";
import { CheckCircle } from "lucide-react"; // Icon for features
import { cn } from "@/lib/utils";

// Design tokens from JSON (for reference)
const featuresConfig = {
  title: "Why Choose Us",
  items: [
    {
      title: "Creative Excellence",
      description: "Award-winning design team with proven track record",
    },
    {
      title: "Strategic Approach",
      description: "Data-driven strategies tailored to your business needs",
    },
    {
      title: "Results-Focused",
      description: "Measurable outcomes that drive real business growth",
    },
  ],
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-2xl px-sm md:px-md lg:px-lg bg-neutral-white dark:bg-neutral-gray800">
      <div className="container mx-auto max-w-desktop">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-gray800 dark:text-neutral-white mb-lg font-poppins">
          {featuresConfig.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {featuresConfig.items.map((feature, index) => (
            <div
              key={index}
              className="p-md bg-neutral-gray100 dark:bg-neutral-gray700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-sm">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent dark:text-accent-light mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-gray800 dark:text-neutral-white mb-xs font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-gray600 dark:text-neutral-gray400 text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
