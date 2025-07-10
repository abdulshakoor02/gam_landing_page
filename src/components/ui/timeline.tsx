"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion"; // Adapted
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
// Tabler icons are used by default in the example, but we can make icons configurable or use lucide-react
// For now, let's assume we want to use lucide-react if possible, or allow generic ReactNode for icons.
// The original component doesn't explicitly use Tabler icons in its props, but the example might.
// We will make the "dot" customizable.

export interface TimelineItem {
  title: string;
  description: string; // Changed from 'content' to 'description' for clarity with our data model
  stepDetails?: React.ReactNode; // Was 'content' in original, for the main text block
  icon?: React.ReactNode; // Allow custom icons
  activeIcon?: React.ReactNode; // Icon for active state
}

export const Timeline = ({
  items,
  sectionTitle,
  sectionDescription,
  wrapperClassName,
  titleClassName,
  descriptionClassName,
  // Adding motion props
  initial,
  whileInView,
  viewport,
  transition,
}: {
  items: TimelineItem[];
  sectionTitle?: string;
  sectionDescription?: string;
  wrapperClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, items]); // Added items to dependency array as content length can change height

  const { scrollYProgress } = useScroll({
    target: containerRef, // Changed from target:ref to containerRef for whole section scroll
    offset: ["start center", "end center"], // Adjust offset for better trigger points
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [50, height]); // Start with some initial height
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]); // Fade in and out

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className={cn("w-full font-sans md:px-10 py-10 md:py-20", wrapperClassName)} // Applied wrapper for background
      ref={containerRef}
    >
      {(sectionTitle || sectionDescription) && (
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 px-4">
          {sectionTitle && <h2 className={cn("text-3xl md:text-4xl font-bold text-deep-navy-blue dark:text-clean-white mb-4", titleClassName)}>
            {sectionTitle}
          </h2>}
          {sectionDescription && <p className={cn("text-base md:text-lg text-medium-gray dark:text-light-gray-text max-w-2xl mx-auto", descriptionClassName)}>
            {sectionDescription}
          </p>}
        </div>
      )}

      <div ref={ref} className="relative max-w-3xl mx-auto"> {/* Constrained width for timeline itself */}
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-start pt-10 md:pt-20 md:gap-8" // Align items to start
          >
            {/* Sticky Date/Title Column */}
            <div className="sticky flex flex-col md:flex-row z-10 items-center top-28 md:top-32 self-start w-16 md:w-48 shrink-0">
              <div className={cn(
                "absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:relative h-10 w-10 rounded-full flex items-center justify-center border-2",
                scrollYProgress.get() > (index / items.length) - 0.05 && scrollYProgress.get() < ((index + 1) / items.length)
                  ? "border-professional-teal bg-professional-teal/20"
                  : "border-gray-300 dark:border-gray-600 bg-light-gray dark:bg-dark-charcoal"
              )}>
                {scrollYProgress.get() > (index / items.length) - 0.05 && scrollYProgress.get() < ((index + 1) / items.length) && item.activeIcon ? item.activeIcon : item.icon ? item.icon : (
                  <div className={cn(
                    "h-3 w-3 rounded-full",
                    scrollYProgress.get() > (index / items.length) - 0.05 && scrollYProgress.get() < ((index + 1) / items.length) ? "bg-professional-teal" : "bg-gray-400 dark:bg-gray-500"
                  )} />
                )}
              </div>
              <h3 className="hidden md:block text-xl md:text-2xl font-semibold text-medium-gray dark:text-light-gray-text ml-0 md:ml-16 text-left w-full">
                {item.title}
              </h3>
            </div>

            {/* Content Column */}
            <div className="relative pl-12 md:pl-0 pb-8 md:pb-16 w-full"> {/* Added padding bottom */}
              <h3 className="md:hidden block text-xl mb-3 font-semibold text-dark-charcoal dark:text-clean-white">
                {item.title}
              </h3>
              <div className="text-sm md:text-base text-medium-gray dark:text-light-gray-text space-y-3">
                <p>{item.description}</p>
                {item.stepDetails}
              </div>
            </div>
          </div>
        ))}
        {/* Vertical Line */}
        <div
          style={{
            height: height + "px", // Ensure it covers all items
          }}
          className={cn(
            "absolute left-[calc(1.25rem_+_8px)] md:left-[calc(2.5rem_+_24px)] top-0 overflow-hidden w-[2px]", // Adjusted left positioning based on icon size + padding
            "bg-[linear-gradient(to_bottom,var(--tw-color-professional-teal),var(--tw-color-deep-navy-blue))]", // Themed gradient
             "[mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]"
          )}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-warm-gold-accent via-professional-teal to-emerald-green" // Highlight color for progress
          />
        </div>
      </div>
    </motion.div>
  );
};
