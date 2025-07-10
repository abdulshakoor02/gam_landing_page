const config = {
  plugins: {
    "tailwindcss/nesting": {}, // Often recommended for Tailwind
    tailwindcss: { config: "./tailwind.config.mjs" },
    autoprefixer: {},
  },
};

export default config;
