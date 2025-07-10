"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { cn } from "@/lib/utils"; // Assuming you'll create this utility

// Design tokens from JSON (for reference, Tailwind classes will be used)
const headerLayout = {
  height: "80px",
  background: "rgba(255, 255, 255, 0.95)", // Will be bg-white/95 in Tailwind
  backdropFilter: "blur(10px)", // backdrop-blur-md
  position: "fixed", // fixed
  zIndex: 1000, // z-[1000]
  shadow: "0 2px 20px rgba(0, 0, 0, 0.1)", // shadow-header
};

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full transition-all duration-300 ease-in-out",
        "bg-white/95 dark:bg-neutral-gray800/95 backdrop-blur-md shadow-header",
        `h-[${headerLayout.height}] z-[1000]`
      )}
    >
      <div className="container mx-auto px-sm md:px-md lg:px-lg flex items-center justify-between h-full max-w-desktop">
        <Link href="/" className="text-2xl font-bold text-primary dark:text-primary-light font-poppins">
          Baosh Creative
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-md">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "text-base font-medium text-neutral-gray700 dark:text-neutral-gray300 hover:text-primary dark:hover:text-primary-light transition-colors",
                pathname === item.href && "text-primary dark:text-primary-light"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-neutral-gray700 dark:text-neutral-gray300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className={cn(
            "md:hidden absolute top-full left-0 right-0 w-full shadow-lg md:shadow-none transition-transform duration-300 ease-in-out",
            "bg-white dark:bg-neutral-gray800",
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
          style={{ top: headerLayout.height }}
        >
          <nav className="flex flex-col items-center py-md space-y-sm">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "text-lg font-medium text-neutral-gray700 dark:text-neutral-gray300 hover:text-primary dark:hover:text-primary-light py-xs w-full text-center",
                  pathname === item.href && "text-primary dark:text-primary-light"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
