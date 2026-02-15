"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          MeetMind
        </Link>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-gray-600 hover:text-black transition">
            Features
          </Link>
          <Link href="#pricing" className="text-sm text-gray-600 hover:text-black transition">
            Pricing
          </Link>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition">
            Join Waitlist
          </button>
        </div>

        {/* Mobile Button Placeholder */}
        <button className="md:hidden text-sm font-medium">
          Menu
        </button>

      </nav>
    </header>
  );
}