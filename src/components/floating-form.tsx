"use client";

import React from "react";

const FloatingForm = () => {
  return (
    // Wireframe: Floating Contact Form
    // Annotations: fixed bottom-8 right-8, backdrop-blur-md
    // Container style: width: 300px; padding: 20px; background: rgba(52, 73, 94, 0.95); border: 2px solid #3498db; border-radius: 12px; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 1000;
    <div className="fixed bottom-8 right-8 w-[300px] p-5 bg-slate-800/90 backdrop-blur-md border-2 border-sky-500 rounded-xl shadow-2xl text-white z-[1000]">
      {/* Form Title */}
      <h3 className="text-lg font-semibold text-slate-100 mb-4">
        Quick Contact
      </h3>

      <form>
        {/* Name Field */}
        <div className="mb-3">
          {/* Wireframe: form-input styling */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-700/50 text-white text-sm placeholder-slate-400 focus:ring-sky-500 focus:border-sky-500 outline-none"
          />
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-700/50 text-white text-sm placeholder-slate-400 focus:ring-sky-500 focus:border-sky-500 outline-none"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <textarea
            rows={3}
            placeholder="Your Message"
            className="w-full px-3 py-2 border border-slate-600 rounded-md bg-slate-700/50 text-white text-sm placeholder-slate-400 focus:ring-sky-500 focus:border-sky-500 outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        {/* Wireframe: form-button styling (width: 100%; padding: 12px; background: #10b981; border: none; border-radius: 6px; color: white; font-size: 14px; font-weight: 600;) */}
        <button
          type="submit"
          className="w-full py-3 bg-teal-500 hover:bg-teal-600 border-none rounded-md text-white text-sm font-semibold transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default FloatingForm;
