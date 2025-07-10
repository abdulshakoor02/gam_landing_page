import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/aceternity-ui/dist/index.js", // Added Aceternity UI
  ],
  theme: {
    extend: {
      colors: {
        "deep-navy-blue": "#1E3A8A",
        "professional-teal": "#0F766E",
        "warm-gold-accent": "#F59E0B",
        "clean-white": "#FFFFFF",
        "light-gray": "#F8FAFC",
        "soft-blue-gradient-from": "#EFF6FF",
        "soft-blue-gradient-to": "#DBEAFE",
        "dark-charcoal": "#1F2937",
        "medium-gray": "#6B7280",
        "light-gray-text": "#9CA3AF", // Renamed to avoid conflict with background light-gray
        "emerald-green": "#10B981",
        "forest-green": "#047857",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // Primary font
        serif: ["var(--font-montserrat)", "serif"], // Secondary font
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite", // Example for Aceternity
        "aurora": "aurora 60s linear infinite", // Example for Aceternity
        "shimmer": "shimmer 2s linear infinite", // For ShimmerButton
      },
      keyframes: {
        meteor: { // Example for Aceternity
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        aurora: { // Example for Aceternity
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        shimmer: { // For ShimmerButton
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        // For Shadcn Select
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite", // Example for Aceternity
        "aurora": "aurora 60s linear infinite", // Example for Aceternity
        "shimmer": "shimmer 2s linear infinite", // For ShimmerButton
        // For Shadcn Select
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Shadcn UI often uses this
};
export default config;
