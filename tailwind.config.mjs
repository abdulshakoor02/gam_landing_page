/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/aceternity-ui/dist/**/*.{js,ts,jsx,tsx}',
    // Add other paths here if needed
  ],
  theme: {
    extend: {
      // Aceternity UI might have theme extensions, will add them if docs specify
    },
  },
  plugins: [
    // require('aceternity-ui/tailwind-plugin') // This is a guess, will verify
    // addVariablesForColors plugin is commonly recommended for Aceternity UI
    addVariablesForColors,
  ],
};

// This function adds CSS variables for colors
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

// Helper function to flatten color palette (often used with the above plugin)
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";


export default config;
