import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Path to Aceternity UI components
    './node_modules/aceternity-ui/dist/index.js',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        // From wireframe: font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        // This is a system font stack, Tailwind uses a similar one by default for sans.
        // If a specific webfont like Inter was desired, it would be configured here.
        // For now, default sans should be fine.
      },
      colors: {
        // Add custom colors from the wireframe if needed, e.g.
        // 'sky-500': '#0ea5e9', // Example, though Tailwind includes this
        // 'slate-800': '#1e293b',
        // 'slate-900': '#0f172a',
        // 'slate-950': '#020617',
        // 'teal-400': '#2dd4bf',
        // 'blue-400': '#60a5fa',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // For Aceternity UI animations, if not covered by their defaults
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // Add other animations if/when needed by Aceternity components
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0px' }, // Use '0px' instead of 0 for Tailwind v4
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' }, // Use '0px' instead of 0
        },
        // Add other keyframes if/when needed
      },
    },
  },
  plugins: [
    // require('tailwindcss-animate') // If using shadcn/ui components alongside, otherwise may not be needed
  ],
} satisfies Config
