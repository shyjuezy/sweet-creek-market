"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedMobileNavbar } from "@/components/animated-mobile-navbar";
import { NavLink, navLinks } from "@/data/navLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function Header() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // useEffect(() => {
  //   if (isMobileMenuOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [isMobileMenuOpen]);
  // // Close the mobile menu when navigating to a new page
  // useEffect(() => {
  //   setIsMobileMenuOpen(false);
  // }, [pathname]);

  // Memoize the scroll handler to prevent unnecessary re-renders
  const scrollToElement = useCallback((elementId: string, duration = 200) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const start = window.scrollY;
    const end = element.offsetTop;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo({
        top: start + (end - start) * progress,
        behavior: 'smooth'
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, []);

  // Memoize click handler
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // setIsMobileMenuOpen(false); // Close the mobile menu
    // Only handle href with hashtags
    if (href.includes('#')) {
      e.preventDefault();
      const elementId = href.split('#')[1];

      if (pathname !== '/' && href.startsWith('/#')) {
        // If we're not on home page and it's a hash link, navigate to home first
        window.location.href = href;
        return;
      }

      // If we're on the same page or it's just a hash link
      scrollToElement(elementId);
    }
  }, [pathname, scrollToElement]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 [--animation-delay:600ms] backdrop-blur-[12px]">
      <div className="flex h-[4.5rem] items-center justify-between px-8 md:px-16 2xl:px-24">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Sweet Creek Farm Logo with wind"
            width={80}
            height={80}
            priority
          />
        </Link>
        <div className="ml-auto flex gap-6 h-full items-center ">
          {/* Desktop Navbar */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-md font-semibold text-gray-800 transition-transform duration-200 hover:text-gray-700 hover:scale-105 will-change-transform"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <AnimatedMobileNavbar>
            <motion.nav
              exit={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              initial={{ scale: 1, opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              className="mobile-menu fixed left-0 top-[4.5rem] z-50 h-[calc(100vh-4.5rem)] w-full overflow-auto bg-background backdrop-blur-[12px]"
            >
              <ul className="flex flex-col md:hidden uppercase ease-in">
                {navLinks.map((link: NavLink) => (
                  <motion.li
                    key={link.href}
                    exit={{ y: "-20px", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    initial={{ y: "-20px", opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                    className="pl-6 py-0.5 border-b"
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex h-[2.5rem] items-center text-xl"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </AnimatedMobileNavbar>
        </div>
      </div>
    </header>
  );
}
