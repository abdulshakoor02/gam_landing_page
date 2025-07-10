"use client";

import React from "react";

const ResponsiveBreakpoints = () => {
  return (
    // Wireframe: Responsive Breakpoints
    // Position: fixed, bottom: 20px, left: 20px
    // Styling: background: #f39c12 (amber-500 or orange-500), color: white, padding: 15px, border-radius: 8px, font-size: 12px, max-width: 250px, z-index: 1000
    <div
      className="fixed bottom-5 left-5 bg-amber-500 text-white p-4 rounded-lg text-xs shadow-lg max-w-[250px] z-[1000]"
      style={{ backgroundColor: "#f39c12" }} // Explicit color from wireframe
    >
      <strong className="block mb-1">Breakpoints:</strong>
      <ul className="list-disc list-inside pl-1 space-y-0.5">
        <li>Mobile: &lt;768px</li>
        <li>Tablet: 768px+</li>
        <li>Desktop: 1024px+</li>
        <li>Max-width: 1200px</li>
      </ul>
    </div>
  );
};

export default ResponsiveBreakpoints;
