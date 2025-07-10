// Using array syntax for plugins, which can sometimes be more compatible.
export default {
  plugins: [
    "tailwindcss/nesting", // Optional, but often useful
    ["tailwindcss", { config: "./tailwind.config.mjs" }],
    "autoprefixer",
  ],
};
