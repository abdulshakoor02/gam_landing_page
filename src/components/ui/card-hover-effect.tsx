"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion"; // Adapted to framer-motion
import Link from "next/link"; // For Next.js optimized links
import { useState } from "react";
import { IconType } from "react-icons"; // For icons

export interface ServiceCardItem {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactElement; // Allow passing ReactElement for icons directly
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: ServiceCardItem[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6", // Added gap
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground" // layoutId for shared layout animation
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="bg-white/50 dark:bg-black/30 backdrop-blur-md border border-white/20"> {/* Glassmorphism style */}
            {item.icon && <div className="flex justify-center mb-4 text-professional-teal">{item.icon}</div>}
            <CardTitle className="text-dark-charcoal dark:text-clean-white">{item.title}</CardTitle>
            <CardDescription className="text-medium-gray dark:text-light-gray-text">{item.description}</CardDescription>
            <p className="text-sm text-professional-teal hover:text-deep-navy-blue dark:hover:text-warm-gold-accent mt-4 font-semibold">
              Learn More &rarr;
            </p>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border group-hover:border-professional-teal dark:group-hover:border-warm-gold-accent relative z-20 transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 text-center md:text-left">{children}</div> {/* Centered text for cards */}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-bold tracking-wide mt-2 text-xl", className)}> {/* Adjusted font size */}
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 tracking-wide leading-relaxed text-sm", // Adjusted margin
        className
      )}
    >
      {children}
    </p>
  );
};
