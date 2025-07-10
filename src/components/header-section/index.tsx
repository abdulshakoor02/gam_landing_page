"use client";
import React from "react";

export function HeaderSection() {
  return (
    <header className="w-full bg-gray-800 text-white py-4 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <span>📞 +91 590 088 55</span>
          <span>⏰ Monday - Friday 09:00 am - 05:00 Pm</span>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <span>📍 456 Elm Avenue Springfield, IL 62701</span>
        </div>

      </div>

    </header>
  );
}
