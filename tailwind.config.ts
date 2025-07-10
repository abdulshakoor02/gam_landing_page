import type { Config } from "tailwindcss";

// Aceternity UI theme integration
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const designTokens = {
  colors: {
    primary: {
      main: "#2563eb",
      dark: "#1d4ed8",
      light: "#3b82f6"
    },
    secondary: {
      main: "#f59e0b",
      dark: "#d97706",
      light: "#fbbf24"
    },
    accent: {
      main: "#10b981",
      dark: "#059669",
      light: "#34d399"
    },
    neutral: {
      white: "#ffffff",
      gray100: "#f3f4f6",
      gray200: "#e5e7eb",
      gray300: "#d1d5db",
      gray400: "#9ca3af",
      gray500: "#6b7280",
      gray600: "#4b5563",
      gray700: "#374151",
      gray800: "#1f2937",
      gray900: "#111827",
      black: "#000000"
    }
  },
  typography: {
    fontFamily: {
      primary: "Inter, system-ui, -apple-system, sans-serif",
      secondary: "Poppins, sans-serif",
      accent: "Playfair Display, serif"
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem"
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800" // Converted to string as Tailwind expects string or array of strings
    }
  },
  layout: {
    spacing: {
      xs: "0.5rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "3rem",
      "2xl": "4rem"
    }
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1200px"
  }
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Path to aceternity-ui components
    "./node_modules/aceternity-ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      colors: {
        ...designTokens.colors.primary, // Directly spread main, dark, light
        primary: designTokens.colors.primary.main, // For usage like bg-primary
        'primary-dark': designTokens.colors.primary.dark,
        'primary-light': designTokens.colors.primary.light,
        ...designTokens.colors.secondary,
        secondary: designTokens.colors.secondary.main,
        'secondary-dark': designTokens.colors.secondary.dark,
        'secondary-light': designTokens.colors.secondary.light,
        ...designTokens.colors.accent,
        accent: designTokens.colors.accent.main,
        'accent-dark': designTokens.colors.accent.dark,
        'accent-light': designTokens.colors.accent.light,
        ...designTokens.colors.neutral,
      },
      fontFamily: {
        sans: [designTokens.typography.fontFamily.primary], // Primary font for sans
        poppins: [designTokens.typography.fontFamily.secondary],
        playfair: [designTokens.typography.fontFamily.accent],
      },
      fontSize: designTokens.typography.fontSize,
      fontWeight: designTokens.typography.fontWeight,
      spacing: designTokens.layout.spacing,
      screens: designTokens.breakpoints,
      animation: {
        "meteor-effect": "meteor 5s linear infinite", // Example from Aceternity
        fadeIn: "fadeIn 0.8s ease-out",
        slideUp: "slideUp 0.6s ease-out 0.2s", // Delay needs to be handled in component or via a utility
        bounce: "bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
         // Aceternity UI specific animations
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        // Example from Aceternity
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        bounce: { // Custom bounce if not covered by Tailwind's default
          "0%, 100%": { transform: "translateY(-5%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" },
          "50%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" },
        },
         // Aceternity UI specific keyframes
        "accordion-down": {
          from: { height: "0" }, // Adjusted to "0" from 0
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }, // Adjusted to "0" from 0
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      boxShadow: {
        ...designTokens.components?.cards?.service?.boxShadow ? { 'card-service': designTokens.components.cards.service.boxShadow } : {},
        ...designTokens.components?.cards?.service?.hover?.boxShadow ? { 'card-service-hover': designTokens.components.cards.service.hover.boxShadow } : {},
        header: designTokens.layout.header.shadow,
      },
      borderRadius: {
        ...designTokens.components?.buttons?.primary?.borderRadius ? { 'button-primary': designTokens.components.buttons.primary.borderRadius } : {},
        ...designTokens.components?.buttons?.secondary?.borderRadius ? { 'button-secondary': designTokens.components.buttons.secondary.borderRadius } : {},
        ...designTokens.components?.cards?.service?.borderRadius ? { 'card-service': designTokens.components.cards.service.borderRadius } : {},
      },
    },
  },
  plugins: [
    addVariablesForColors, // Aceternity UI plugin
    // Function to add Tailwind variable for each color for Aceternity UI
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// Aceternity UI plugin function
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
