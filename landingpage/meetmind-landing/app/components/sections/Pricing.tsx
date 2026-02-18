"use client";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
          Simple, transparent <br />
          <span className="text-sky-500">beta access.</span>
        </h2>
        
        <div className="relative p-8 md:p-12 rounded-[2.5rem] border-2 border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/30 overflow-hidden group hover:border-sky-500/30 transition-all duration-500">
          
          {/* Top Badge */}
          <span className="inline-block px-4 py-1 rounded-full bg-sky-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest mb-8">
            Early Adopter Privilege
          </span>

          <div className="mb-8">
            <span className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white tracking-tighter">$0</span>
            <span className="text-zinc-500 dark:text-zinc-400 font-bold ml-2 uppercase text-xs tracking-widest">
              exclusive beta
            </span>
          </div>

          <ul className="space-y-5 mb-12 text-left max-w-sm mx-auto">
            <li className="flex items-center gap-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium">
              <span className="text-sky-500 text-xl font-black">✓</span> 
              <span>Unlimited <span className="text-zinc-900 dark:text-zinc-100 font-bold">AI Meeting Extractions</span></span>
            </li>
            <li className="flex items-center gap-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium">
              <span className="text-sky-500 text-xl font-black">✓</span> 
              <span>Access to <span className="text-zinc-900 dark:text-zinc-100 font-bold uppercase tracking-tighter">all integrations</span></span>
            </li>
            <li className="flex items-center gap-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium">
              <span className="text-sky-500 text-xl font-black">✓</span> 
              <span>Guaranteed <span className="text-sky-500 font-extrabold italic underline decoration-sky-500/20 underline-offset-4">Founding Member</span> rate</span>
            </li>
          </ul>

          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
            Beta partners lock in a <span className="font-black text-zinc-900 dark:text-zinc-300">50% LIFETIME DISCOUNT</span> when we transition to public access.
          </p>

          {/* Background Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/10 blur-[80px] rounded-full pointer-events-none" />
        </div>

        <p className="mt-8 text-zinc-400 dark:text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
          No credit card required for beta entry
        </p>
      </div>
    </section>
  );
}