// Placeholder for Aceternity UI HeroParallax component
// In a real setup, you would copy the source code from https://ui.aceternity.com/components/hero-parallax

'use client';
import React from 'react';
import { cn } from '@/lib/utils'; // Assuming cn utility is in this path

// Dummy type for Product, actual component will have more specific types
export type Product = {
  title: string;
  link: string;
  thumbnail: string;
};

export interface HeroParallaxProps {
  products: Product[];
  className?: string;
}

export const HeroParallax = ({ products, className }: HeroParallaxProps) => {
  // This is a simplified placeholder. The actual component has complex animations and structure.
  return (
    <div className={cn("h-[100vh] bg-neutral-800 py-20 overflow-hidden", className)}>
      <h1 className="text-5xl font-bold text-white text-center mb-10">Hero Parallax (Placeholder)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {products.slice(0, 3).map((product, index) => (
          <div key={index} className="bg-neutral-700 p-4 rounded-lg text-white">
            <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="font-semibold">{product.title}</h3>
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">
              View Product
            </a>
          </div>
        ))}
      </div>
      <p className="text-center text-neutral-300 mt-8">
        This is a placeholder for the actual HeroParallax component.
        The real component provides a rich parallax scrolling effect with multiple product cards.
      </p>
    </div>
  );
};
