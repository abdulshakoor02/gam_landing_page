"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ContactFormContent } from "./ContactFormContent";

export function ContactForm() {
  return (
    <div>
      <BackgroundGradient containerClassName="backdrop-blur-sm bg-opacity-50 group-hover:backdrop-blur-none group-hover:bg-opacity-100" className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <ContactFormContent />
      </BackgroundGradient>
    </div>
  );
}
