"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Using Lucide for icons
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  question: string;
  answer: React.ReactNode; // Can be string or more complex JSX
  id: string | number;
}

interface AccordionProps {
  items: AccordionItemProps[];
  itemClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
  iconClassName?: string;
  allowMultipleOpen?: boolean; // New prop
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  itemClassName,
  questionClassName,
  answerClassName,
  iconClassName,
  allowMultipleOpen = false, // Default to single open
}) => {
  const [openIndexes, setOpenIndexes] = useState<Array<string | number>>([]);

  const handleClick = (id: string | number) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-3 w-full">
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "border border-medium-gray/30 dark:border-light-gray-text/30 rounded-lg overflow-hidden",
            "bg-clean-white/80 dark:bg-dark-charcoal/50 backdrop-blur-sm shadow-sm", // Subtle texture/professional color scheme
            itemClassName
          )}
        >
          <button
            onClick={() => handleClick(item.id)}
            className={cn(
              "w-full flex justify-between items-center text-left p-4 md:p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-professional-teal",
              questionClassName
            )}
            aria-expanded={openIndexes.includes(item.id)}
            aria-controls={`accordion-content-${item.id}`}
          >
            <span className="text-base md:text-lg font-medium text-dark-charcoal dark:text-clean-white">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-professional-teal dark:text-warm-gold-accent transform transition-transform duration-300",
                openIndexes.includes(item.id) ? "rotate-180" : "rotate-0",
                iconClassName
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndexes.includes(item.id) && (
              <motion.section
                id={`accordion-content-${item.id}`}
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto", marginTop: "0px", paddingBottom: "16px" },
                  collapsed: { opacity: 0, height: 0, marginTop: "0px", paddingBottom: "0px"},
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div
                  className={cn(
                    "px-4 md:px-5 text-sm md:text-base text-medium-gray dark:text-light-gray-text leading-relaxed",
                    answerClassName
                  )}
                >
                  {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
