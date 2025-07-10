"use client";

import React from "react";

const MobileNote = () => {
  return (
    // Wireframe: Mobile Note
    // Position: fixed, top: 20px, right: 20px
    // Styling: background: #e74c3c (red-600), color: white, padding: 10px 15px, border-radius: 8px, font-size: 12px, font-weight: bold, z-index: 1000
    <div
      className="fixed top-5 right-5 bg-red-600 text-white px-4 py-2.5 rounded-lg text-xs font-bold shadow-lg z-[1000]"
      style={{ backgroundColor: "#e74c3c" }} // Explicit color from wireframe
    >
      📱 Resize to see responsive layout
    </div>
  );
};

export default MobileNote;
