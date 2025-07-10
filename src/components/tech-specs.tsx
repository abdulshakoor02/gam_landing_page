"use client";

import React from "react";

const TechSpecs = () => {
  return (
    // Wireframe: Tech Specs
    // Position: fixed, top: 20px, left: 20px
    // Styling: background: #9b59b6 (purple-600), color: white, padding: 15px, border-radius: 8px, font-size: 12px, max-width: 250px, z-index: 1000
    <div
      className="fixed top-5 left-5 bg-purple-600 text-white p-4 rounded-lg text-xs shadow-lg max-w-[250px] z-[1000]"
      style={{ backgroundColor: "#9b59b6" }} // Explicit color from wireframe
    >
      <strong className="block mb-1">Tech Stack:</strong>
      <ul className="list-disc list-inside pl-1 space-y-0.5">
        <li>Next.js 15 + App Router</li>
        <li>Tailwind CSS</li>
        <li>Aceternity UI</li>
        <li>Responsive Design</li>
        <li>Dark Theme Focus</li>
      </ul>
    </div>
  );
};

export default TechSpecs;
