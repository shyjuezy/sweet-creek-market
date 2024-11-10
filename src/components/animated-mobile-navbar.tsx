"use client";

import { AnimatePresence } from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import { useEffect, useState, forwardRef } from "react";

import { cn } from "@/lib/utils";

export const AnimatedMobileNavbar = forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode; className?: string }
>(({ children, className, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const overflow = isOpen ? "hidden" : "auto";
    document.documentElement.style.overflow = overflow;
  }, [isOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent) => {
    // Check if the click target is a navigation link
    const target = e.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'a' || target.closest('a')) {
      setIsOpen(false);
    }
  };

  return (
    <div className="gap-0">
      <button
        {...props}
        className={cn("md:hidden relative w-6 h-6 flex items-center justify-center", className)}
        onClick={() => setIsOpen((open) => !open)}
        ref={ref}
      >
        <span className="sr-only block">Toggle menu</span>
        {isOpen ? (
          <XIcon className="h-8 w-8 absolute bg-secondary/50 rounded-full p-1 transition-all duration-300 hover:scale-110" />
        ) : (
          <AlignJustify className="h-8 w-8 absolute bg-secondary/50 rounded-full p-1 transition-all duration-300 hover:scale-110" />
        )}
      </button>
      <AnimatePresence>
        {isOpen ? (
          <div onClick={handleNavClick}>
            {children}
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
});

AnimatedMobileNavbar.displayName = "AnimatedMobileNavbar";
