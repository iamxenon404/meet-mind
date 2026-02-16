"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Main Navbar Container */}
      <nav className="relative z-[110] border-b border-white/5 bg-zinc-950 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">MeetMind</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</Link>
            <Link href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</Link>
            <button 
              onClick={onJoinClick}
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition active:scale-95"
            >
              Join Waitlist
            </button>
          </div>

          {/* Hamburger Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
              className="w-6 h-0.5 bg-white rounded-full origin-center"
            />
            <motion.span 
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
              className="w-6 h-0.5 bg-white rounded-full origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-[100%] left-0 right-0 bg-zinc-900 border-b border-white/10 shadow-2xl z-[105]"
          >
            <div className="flex flex-col p-6 gap-4">
              {["Features", "How it Works", "Pricing", "About"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-white py-2 transition-colors"
                >
                  {item}
                </Link>
              ))}
              
              <hr className="border-white/5 my-2" />
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  onJoinClick();
                }}
                className="w-full bg-indigo-600 text-white py-4 rounded-xl text-lg font-bold active:scale-[0.98] transition-transform"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}