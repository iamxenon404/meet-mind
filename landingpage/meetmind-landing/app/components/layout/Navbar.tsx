"use client";

import Link from "next/link";

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
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

        {/* Mobile Menu Toggle (Simplified) */}
        <button className="md:hidden text-zinc-400 p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </nav>
    </header>
  );
}