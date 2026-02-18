"use client";

import Link from "next/link";

export default function Footer() {
  // Same smooth scroll logic as the Navbar
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
    }
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Workflow", href: "#workflow" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="relative pt-32 pb-16 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950 transition-colors">
      
      {/* TOP GLOW SEPARATOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-sm">M</span>
              </div>
              <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                MeetMind
              </span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xs leading-relaxed font-medium">
              The <span className="text-zinc-900 dark:text-zinc-200 font-bold italic">AI meeting layer</span> for elite agencies. Turn raw client calls into structured workflows in seconds.
            </p>
          </div>

          {/* Product Links - Now synced with Navbar */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Product</h3>
            <ul className="space-y-3 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="hover:text-sky-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Connect</h3>
            <ul className="space-y-3 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              <li><Link href="https://twitter.com" className="hover:text-sky-500 transition-colors">Twitter / X</Link></li>
              <li><Link href="mailto:hello@meetmind.ai" className="hover:text-sky-500 transition-colors">Support</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-zinc-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-zinc-400 dark:text-zinc-600 font-bold uppercase tracking-widest text-center md:text-left">
            © 2026 MeetMind. Built for the <span className="text-sky-500">next generation</span> of agencies.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-xs font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}