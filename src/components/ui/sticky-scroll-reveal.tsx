"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion"; // Adapted
import { motion } from "framer-motion"; // Adapted
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  sectionWrapperClassName, // Added for overall section styling
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
  sectionWrapperClassName?: string; // Added
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Customized background gradients based on project palette
  // Using soft blue gradients primarily, can alternate with light gray or others
  const backgroundGradients = [
    "linear-gradient(to bottom right, var(--tw-color-soft-blue-gradient-from), var(--tw-color-soft-blue-gradient-to))",
    "linear-gradient(to bottom right, var(--tw-color-light-gray), var(--tw-color-soft-blue-gradient-from))",
    "linear-gradient(to bottom right, var(--tw-color-soft-blue-gradient-to), var(--tw-color-professional-teal))",
    "linear-gradient(to bottom right, var(--tw-color-professional-teal), var(--tw-color-deep-navy-blue))",
  ];

  // Text colors that work well on the above gradients
  const textColors = [
    "text-deep-navy-blue", // For lighter backgrounds
    "text-dark-charcoal",   // For light-grayish backgrounds
    "text-clean-white",     // For darker/teal backgrounds
    "text-clean-white",     // For navy backgrounds
  ];


  return (
    <motion.div
      // The main container's background will be set by the specific section, not this component directly
      // This component's motion.div is for the scrollable area
      className={cn("h-[30rem] md:h-[40rem] w-full overflow-y-auto flex justify-center relative rounded-md", sectionWrapperClassName)}
      ref={ref}
    >
      <div className="div relative flex items-start px-4 md:px-10 w-full max-w-5xl mx-auto"> {/* Ensure content is not too wide */}
        <div className="w-full md:w-1/2"> {/* Text content takes half width */}
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 md:my-20"> {/* Increased vertical spacing */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.5,
                  y: activeCard === index ? 0 : 10,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn("text-2xl md:text-3xl font-semibold", textColors[activeCard % textColors.length])}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.5,
                  y: activeCard === index ? 0 : 10,
                }}
                transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                className={cn("text-base md:text-lg mt-4 md:mt-6", textColors[activeCard % textColors.length], "opacity-90")}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40 md:h-60" /> {/* Spacer at the bottom */}
        </div>
      </div>
      <motion.div
        // The sticky element's background changes
        animate={{
            background: backgroundGradients[activeCard % backgroundGradients.length],
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={cn(
          "hidden lg:block sticky top-10 h-60 md:h-80 w-full md:w-1/2 rounded-xl shadow-xl overflow-hidden", // Adjusted size & shadow
          contentClassName
        )}
      >
        {content[activeCard] && content[activeCard].content ? content[activeCard].content : (
          <div className="w-full h-full flex items-center justify-center text-white/70 text-2xl font-semibold">
            {/* Placeholder if no specific content */}
            {content[activeCard]?.title}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
