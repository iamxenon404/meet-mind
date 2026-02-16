"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features", icon: "🚀" },
    { name: "How it Works", href: "#how-it-works", icon: "⚙️" },
    { name: "Pricing", href: "#pricing", icon: "💎" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo with a pulse effect */}
        <Link href="/" className="flex items-center gap-2 group relative z-[110]">
          <div className="relative">
            <div className="absolute -inset-1 bg-indigo-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-9 h-9 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-cyan-400 font-black text-lg">M</span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            MeetMind
          </span>
        </Link>

        {/* Desktop - Interactive Nav Items */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-all hover:border-white/20">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop - Action Button */}
        <div className="hidden md:block">
          <button 
            onClick={onJoinClick}
            className="group relative px-6 py-2.5 font-bold text-black rounded-full overflow-hidden transition-all active:scale-95"
          >
            <span className="absolute inset-0 bg-white group-hover:bg-indigo-50 transition-colors"></span>
            <span className="relative z-10 text-sm">Join Waitlist</span>
          </button>
        </div>

        {/* Mobile - Cyberpunk Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[110] w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 active:scale-90 transition-transform"
        >
          <div className="flex flex-col gap-1 w-5">
            <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }} className="w-full h-0.5 bg-white rounded-full" />
            <motion.span animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 10 : 0 }} className="w-full h-0.5 bg-white rounded-full" />
            <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }} className="w-full h-0.5 bg-white rounded-full" />
          </div>
        </button>

        {/* Mobile - Floating "Command Center" Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-20 left-4 right-4 bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[105] overflow-hidden p-3"
            >
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                      <span className="font-semibold text-zinc-200 group-hover:text-white transition-colors">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-2 pt-2 border-t border-white/5">
                <button 
                  onClick={handleMobileJoinClick}
                  className="w-full flex items-center justify-between p-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all group active:scale-[0.98]"
                >
                  <span className="font-bold text-white uppercase tracking-wider text-sm">Join Priority Access</span>
                  <span className="text-white/70 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}