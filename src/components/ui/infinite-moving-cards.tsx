"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  itemClassName, // Added for custom styling of list items
  isTestimonial = false, // Flag to differentiate testimonial styling
}: {
  items: {
    quote?: string; // Optional for hero
    name?: string;
    title?: string;
    text?: string; // For hero slides
    country?: string; // For testimonials
    photoUrl?: string; // For testimonials
    rating?: number; // For testimonials
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
  isTestimonial?: boolean;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Added items to dependency array if they can change, or added eslint-disable

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s"); // Or user defined
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll", // Ensure 'animate-scroll' class is defined in globals.css
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => {
          if (isTestimonial) {
            return (
              <li
                className={cn(
                  "relative w-[300px] sm:w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-gray-200 dark:border-gray-700 px-6 py-5 md:px-8 md:py-6",
                  "bg-clean-white dark:bg-dark-charcoal shadow-lg", // Clean white with subtle shadows
                  itemClassName
                )}
                key={item.name || idx}
              >
                <blockquote>
                  <div
                    aria-hidden="true"
                    className="user-select-none pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] -z-1"
                  ></div>
                  {item.photoUrl && (
                    <img
                      src={item.photoUrl}
                      alt={item.name || 'testimonial author'}
                      className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-professional-teal"
                    />
                  )}
                  <span className="relative z-20 text-sm leading-relaxed text-medium-gray dark:text-light-gray-text">
                    "{item.quote}"
                  </span>
                  <div className="relative z-20 mt-4 flex flex-col items-center text-center">
                    <span className="flex flex-col gap-0.5">
                      <span className="text-base font-semibold text-dark-charcoal dark:text-clean-white">
                        {item.name}
                      </span>
                      <span className="text-xs text-medium-gray dark:text-light-gray-text">
                        {item.country}
                      </span>
                    </span>
                    {item.rating && (
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < item.rating! ? "text-warm-gold-accent" : "text-gray-300 dark:text-gray-600"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.387 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.54 1.118l-3.387-2.46a1 1 0 00-1.175 0l-3.387 2.46c-.785.57-1.84-.197-1.54-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.04 9.399c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.049 2.927z" />
                          </svg>
                        ))}
                      </div>
                    )}
                  </div>
                </blockquote>
              </li>
            );
          } else { // For Hero Section simple text slides
            return (
              <li
                className={cn(
                  "w-full flex-shrink-0 px-8 py-6 md:w-auto text-center bg-transparent border-none",
                  itemClassName
                )}
                key={idx}
              >
                <span className="relative z-20 text-3xl md:text-4xl lg:text-5xl leading-[1.2] sm:leading-[1.6] text-clean-white font-serif font-bold">
                  {item.text}
                </span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
