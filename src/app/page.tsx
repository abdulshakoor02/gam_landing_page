'use client'; // HeroParallax often requires client components

import React from "react";
import ThreeScene from "@/components/ThreeScene";
import { HeroParallax } from "@/components/ui/hero-parallax"; // Updated import path

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/next.svg", // Placeholder, replace with actual image path
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/vercel.svg", // Placeholder
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/globe.svg", // Placeholder
  },
  {
    title: "Editorially",
    link: "https://editorially.com",
    thumbnail: "/file.svg", // Placeholder
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/window.svg", // Placeholder
  },
  {
    title: "Pixel Perfect",
    link: "https://pixelperfect.com",
    thumbnail: "/next.svg", // Placeholder
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/vercel.svg", // Placeholder
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 antialiased"> {/* Adjusted background for HeroParallax */}
      <ThreeScene />
      <HeroParallax products={products} />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center my-10">More Features Below</h2>
        <p className="text-center text-lg max-w-2xl mx-auto">
          This section can be filled with more Aceternity UI components or custom content
          to showcase other aspects of your product or service.
        </p>
        {/* Example: Add a BentoGrid or other Aceternity components here */}
      </div>
    </main>
  );
}
