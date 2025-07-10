"use client";

import { motion } from "framer-motion"; // Adapted to framer-motion
import { cn } from "@/lib/utils";
import Image from "next/image"; // Using Next.js Image component

// Note: The original component uses <img>. Replaced with Next/Image.
// This might require providing width/height for non-SVG images or using fill with appropriate parent styling.

export const ThreeDMarquee = ({
  items, // Changed from 'images' to 'items' to allow for more complex objects if needed
  className,
  itemClassName,
}: {
  items: { src: string; alt: string; id: string | number }[]; // Expecting objects with src, alt, id
  className?: string;
  itemClassName?: string;
}) => {
  // Split the items array into 4 equal parts
  const chunkSize = Math.ceil(items.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return items.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block h-[450px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-2xl", // Adjusted height slightly
        className
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1500px] sm:size-[1720px] shrink-0 scale-[0.4] sm:scale-50 md:scale-75 lg:scale-100"> {/* Adjusted scale for smaller screens */}
          <div
            style={{
              transform: "rotateX(50deg) rotateY(0deg) rotateZ(-45deg)", // Slightly less rotation
            }}
            className="relative top-80 sm:top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-6 sm:gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 80 : -80 }} // Reduced y animation distance
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                key={colIndex + "marquee-column"}
                className="flex flex-col items-start gap-6 sm:gap-8"
              >
                <GridLineVertical className="-left-3 sm:-left-4" offset="60px sm:80px" />
                {subarray.map((item) => (
                  <div className="relative" key={item.id}>
                    <GridLineHorizontal className="-top-3 sm:-top-4" offset="15px sm:20px" />
                    <motion.div
                      whileHover={{
                        translateY: -8, // Adjusted hover effect
                        scale: 1.05,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                      className={cn(
                        "aspect-[3/2] sm:aspect-[970/700] rounded-lg object-contain p-2 bg-white/10 backdrop-blur-sm", // Added padding and slight bg for logos
                        "ring-1 ring-warm-gold-accent/30 hover:ring-warm-gold-accent", // Golden accent highlight
                        itemClassName
                      )}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        layout="fill" // Use fill to respect aspect ratio of parent
                        objectFit="contain" // Ensure logos are contained
                        className="rounded-md" // Apply rounding to image itself if needed
                        unoptimized={item.src.startsWith("http")} // For external placeholder URLs
                      />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// GridLine components are complex and highly stylized.
// For now, I will simplify them or use the provided ones carefully.
// The key is to ensure they fit the "Dark navy with golden accent highlights" theme.

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "var(--color-deep-navy-blue)", // Use theme color
          "--color": "var(--color-warm-gold-accent)", // Use theme color
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "20px",
          "--color-dark": "var(--color-warm-gold-accent)", // For dark mode, lines are gold
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(var(--color-deep-navy-blue),var(--color-deep-navy-blue))]", // Ensure mask uses theme bg
        "[mask-composite:exclude]",
        "z-0", // Behind items
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "var(--color-deep-navy-blue)", // Use theme color
          "--color": "var(--color-warm-gold-accent)", // Use theme color
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "80px",
          "--color-dark": "var(--color-warm-gold-accent)", // For dark mode, lines are gold
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(var(--color-deep-navy-blue),var(--color-deep-navy-blue))]", // Ensure mask uses theme bg
        "[mask-composite:exclude]",
        "z-0", // Behind items
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};
