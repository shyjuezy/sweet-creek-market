"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedMobileNavbar } from "@/components/animated-mobile-navbar";
import {NavLink, navLinks} from "@/components/navLinks";
import Image from "next/image";


export function Header() {
  return (
      <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 [--animation-delay:600ms] backdrop-blur-[12px]">
        <div className="container flex h-[4.5rem] items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Sweet Creek Farm Logo with wind" width={80} height={80} />
          </Link>
          <div className="ml-auto flex gap-6 h-full items-center ">

            {/* Desktop Navbar */}
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link: NavLink) => (
                  <Link key={link.href} href={link.href} className="text-md font-semibold text-gray-800">
                    {link.label}
                  </Link>
              ))}
            </nav>

            {/* Mobile Navbar */}
            <AnimatedMobileNavbar>
              <motion.nav
                  exit={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  initial={{ scale: 1, opacity: 0 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                  className="fixed left-0 top-[3.5rem] z-50 h-[calc(100vh-3.5rem)] w-full overflow-auto bg-background backdrop-blur-[12px]"
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
                        <Link href={link.href} className="flex h-[3.5rem] items-center text-xl">
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