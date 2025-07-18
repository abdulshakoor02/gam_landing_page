"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function CardWithText({ cardText }: { cardText: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Static background image container */}
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        {/* Full-size background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)"
          }}
        />
      </div>
      
      {/* Animated text overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="max-w-3xl px-6 md:px-12 lg:px-16">
          <TextGenerateEffect 
            words={cardText} 
            className="font-normal text-lg md:text-xl lg:text-2xl text-white leading-relaxed text-center"
            shouldAnimate={isHovered}
          />
        </div>
      </div>
    </div>
  );
}
