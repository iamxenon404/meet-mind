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

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-4">
      {/* Main Navbar Container */}
      <nav className="relative z-[110] max-w-7xl mx-auto border border-white/10 bg-zinc-950/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">MeetMind</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors font-medium">Features</Link>
            <Link href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors font-medium">Pricing</Link>
            <button 
              onClick={onJoinClick}
              className="bg-white text-black px-5 py-2 rounded-xl text-sm font-bold hover:bg-zinc-200 transition active:scale-95 shadow-md"
            >
              Join Waitlist
            </button>
          </div>

          {/* Hamburger Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 bg-white/5 rounded-lg border border-white/5"
          >
            <motion.span 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
              className="w-5 h-0.5 bg-white rounded-full origin-center"
            />
            <motion.span 
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-5 h-0.5 bg-white rounded-full"
            />
            <motion.span 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
              className="w-5 h-0.5 bg-white rounded-full origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Floating Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[85px] left-4 right-4 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl z-[105] overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {["Features", "How it Works", "Pricing", "About"].map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={item}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left text-zinc-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              
              <div className="h-[1px] bg-white/5 my-2 mx-2" />
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  onJoinClick();
                }}
                className="w-full bg-indigo-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg shadow-indigo-600/20 active:scale-[0.98] transition-transform"
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