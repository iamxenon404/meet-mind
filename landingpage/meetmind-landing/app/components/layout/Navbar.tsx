"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu and trigger join click
  const handleMobileJoinClick = () => {
    setIsMobileMenuOpen(false);
    onJoinClick();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-[70]">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            MeetMind
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-zinc-400 hover:text-white transition">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition">
            How it Works
          </Link>
          <button 
            onClick={onJoinClick}
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition active:scale-95"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-zinc-400 p-2 relative z-[70]"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <motion.span 
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
              className="w-full h-0.5 bg-current block"
            />
            <motion.span 
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-full h-0.5 bg-current block"
            />
            <motion.span 
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
              className="w-full h-0.5 bg-current block"
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-zinc-950 px-6 pt-24 pb-10 flex flex-col gap-8 z-[60]"
            >
              <div className="flex flex-col gap-6 text-2xl font-semibold text-white">
                <Link onClick={() => setIsMobileMenuOpen(false)} href="#features">Features</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} href="#how-it-works">How it Works</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} href="#pricing">Pricing</Link>
              </div>
              
              <button 
                onClick={handleMobileJoinClick}
                className="w-full bg-indigo-500 text-white py-4 rounded-xl text-lg font-bold mt-auto"
              >
                Join Waitlist
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}