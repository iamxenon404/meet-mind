"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. Change appearance on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Prevent mobile menu ghosting on desktop resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3. Custom Smooth Scroll Logic
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const handleMobileJoinClick = () => {
    setIsOpen(false);
    onJoinClick();
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Workflow", href: "#workflow" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] w-full border-b transition-all duration-300
        ${scrolled 
          ? "border-zinc-200 bg-white/80 dark:border-white/10 dark:bg-zinc-950/80 backdrop-blur-xl py-3" 
          : "border-transparent bg-transparent py-5"}`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-[110]">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:rotate-6 transition-transform">
            <span className="text-white font-black text-sm">M</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
            MeetMind
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-zinc-100/50 dark:bg-white/5 border border-zinc-200/50 dark:border-white/10 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-5 py-1.5 text-sm font-bold transition-all text-zinc-600 hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400 rounded-full hover:bg-white dark:hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Action */}
        <div className="hidden md:block">
          <button 
            onClick={onJoinClick}
            className="px-6 py-2.5 rounded-full text-sm font-black transition-all active:scale-95 bg-zinc-900 text-white dark:bg-sky-500 dark:text-zinc-950 hover:opacity-90 shadow-lg shadow-sky-500/10"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[110] p-2 text-zinc-900 dark:text-white"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-1.5 w-6 items-end">
            <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="w-full h-0.5 bg-current rounded-full" />
            <motion.span animate={{ opacity: isOpen ? 0 : 1, width: "70%" }} className="h-0.5 bg-current rounded-full" />
            <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="w-full h-0.5 bg-current rounded-full" />
          </div>
        </button>

        {/* Mobile Dropdown - Floating Card View */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[84px] left-4 right-4 md:hidden z-[105]"
            >
              <div className="mx-auto w-full max-w-[480px] p-4 rounded-[2.5rem] border shadow-2xl 
                              bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl
                              border-zinc-200 dark:border-white/10 shadow-sky-500/5">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="flex items-center gap-4 p-4 text-lg font-bold rounded-2xl transition-all
                                   text-zinc-600 hover:bg-zinc-100 hover:text-sky-600
                                   dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-sky-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        {link.name}
                      </a>
                    </motion.div>
                  ))}
                  
                  <div className="h-px my-3 mx-4 bg-zinc-200 dark:bg-white/5" />
                  
                  <button 
                    onClick={handleMobileJoinClick}
                    className="w-full py-4 rounded-2xl text-base font-black transition-all shadow-xl
                               bg-sky-500 text-white hover:bg-sky-400 shadow-sky-500/20 active:scale-[0.98]"
                  >
                    Join Priority Access
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}