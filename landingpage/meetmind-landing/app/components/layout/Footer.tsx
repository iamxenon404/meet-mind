"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950 transition-colors">
      {/* Subtle Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/20">
                <span className="text-white font-black text-sm">M</span>
              </div>
              <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                MeetMind
              </span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xs leading-relaxed">
              The AI meeting layer for elite agencies. Turn raw client calls into structured workflows in seconds.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">Product</h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-500">
              <li><Link href="#features" className="hover:text-sky-500 transition-colors">Features</Link></li>
              <li><Link href="#workflow" className="hover:text-sky-500 transition-colors">Workflow</Link></li>
              <li><Link href="#pricing" className="hover:text-sky-500 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal/Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100">Connect</h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-500">
              <li><Link href="https://twitter.com" className="hover:text-sky-500 transition-colors">Twitter / X</Link></li>
              <li><Link href="mailto:hello@meetmind.ai" className="hover:text-sky-500 transition-colors">Support</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500 dark:text-zinc-600 font-medium">
            © {new Date().getFullYear()} MeetMind. Built for the next generation of agencies.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-zinc-500 hover:text-sky-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-zinc-500 hover:text-sky-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}