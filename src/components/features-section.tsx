"use client";

import React from "react";
import { BackgroundGradient } from "aceternity-ui/dist/components/ui/background-gradient";
import { CardContainer, CardBody, CardItem } from "aceternity-ui/dist/components/ui/3d-card";
import { IconLock, IconTargetArrow, IconChartBar as TablerIconChartBar } from "@tabler/icons-react"; // Renamed to avoid conflict

// Helper component for icons to match wireframe style
const FeatureIcon = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl ${className}`}>
    {children}
  </div>
);

// Fallback IconChartBar is no longer needed as TablerIconChartBar is used.

const FeaturesSection = () => {
  const features = [
    {
      icon: <IconLock size={40} />,
      iconBgClass: "bg-gradient-to-br from-blue-500/30 to-blue-600/20 border-2 border-blue-500/70 text-blue-400",
      title: "Specialized Expertise",
      description: "Harness the power of our deep understanding of blockchain technology and the Web3 ecosystem. We live and breathe crypto, and we know how to make your brand stand out in this dynamic landscape.",
    },
    {
      icon: <IconTargetArrow size={40} />,
      iconBgClass: "bg-gradient-to-br from-teal-500/30 to-teal-600/20 border-2 border-teal-500/70 text-teal-400",
      title: "Tailored Solutions",
      description: "Say goodbye to cookie-cutter marketing approaches. At MarTech, we craft customized strategies that align perfectly with your brand's goals, ensuring maximum impact and ROI.",
    },
    {
      icon: <TablerIconChartBar size={40} />, // Using renamed Tabler icon
      iconBgClass: "bg-gradient-to-br from-blue-500/30 to-blue-600/20 border-2 border-blue-500/70 text-blue-400",
      title: "Proven Results",
      description: "Don't just take our word for it – our track record speaks for itself. From skyrocketing brand awareness to driving conversions, we deliver measurable results that propel your business forward.",
    },
  ];

  return (
    <section className="bg-slate-800 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <CardContainer key={index} className="inter-var w-full h-full">
              <CardBody className="relative group/card w-full h-full">
                <BackgroundGradient
                  className="rounded-[22px] p-6 sm:p-8 bg-slate-850 w-full h-full"
                  containerClassName="w-full h-full" // Ensure BackgroundGradient's container takes full space
                  animate={true}
                >
                  <div className="text-center text-white h-full flex flex-col items-center"> {/* Ensure content is centered if card body is larger */}
                    <CardItem
                      translateZ="70"
                      className="w-auto" // Ensure CardItem doesn't constrain icon too much
                    >
                      <FeatureIcon className={feature.iconBgClass}>
                        {feature.icon}
                      </FeatureIcon>
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="text-2xl font-semibold mb-4 text-slate-100"
                    >
                      {feature.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="30"
                      className="text-slate-300 text-sm leading-relaxed flex-grow"
                    >
                      {feature.description}
                    </CardItem>
                  </div>
                </BackgroundGradient>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
