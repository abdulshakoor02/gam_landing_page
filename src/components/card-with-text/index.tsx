"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function CardWithText({ cardText }: { cardText: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "overflow-hidden relative h-96 rounded-md shadow-xl w-full mx-auto flex flex-col justify-between p-4 bg-cover bg-center",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)]"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-0"></div>
        <div className="text content">
          {isHovered && <TextGenerateEffect words={cardText} className="font-normal text-sm text-gray-50 relative z-10 my-4" />}
        </div>
      </div>
    </div>
  );
}
