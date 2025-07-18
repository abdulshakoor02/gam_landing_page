"use client";
import React from "react";

export function HeaderSection() {
  return (
    <header className="w-full bg-gray-800 text-white py-3 sm:py-4 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 sm:space-y-3 md:space-y-0">
        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-6 text-sm sm:text-base">
          <span className="text-center sm:text-left">📞 +91 590 088 55</span>
          <span className="text-center sm:text-left">⏰ Mon-Fri 9AM-5PM</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-6 text-sm sm:text-base">
          <span className="text-center sm:text-left">📍 Springfield, IL 62701</span>
        </div>
      </div>
    </header>
  );
}
