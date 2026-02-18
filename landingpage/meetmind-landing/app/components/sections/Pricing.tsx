"use client";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
          Simple, transparent <br />
          <span className="text-sky-500">beta pricing.</span>
        </h2>
        
        <div className="relative p-8 md:p-12 rounded-[2.5rem] border-2 border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/30 overflow-hidden">
          {/* Tag */}
          <span className="inline-block px-4 py-1 rounded-full bg-sky-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest mb-6">
            Early Adopter Offer
          </span>

          <div className="mb-8">
            <span className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white">$0</span>
            <span className="text-zinc-500 dark:text-zinc-400 font-medium ml-2">/ during beta</span>
          </div>

          <ul className="space-y-4 mb-10 text-left max-w-xs mx-auto">
            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-sky-500 text-lg">✓</span> Unlimited AI Meeting Extractions
            </li>
            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-sky-500 text-lg">✓</span> All Premium Integrations
            </li>
            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-sky-500 text-lg">✓</span> Lifetime "Founding Member" Rate
            </li>
          </ul>

          <p className="text-xs text-zinc-500 dark:text-zinc-500 italic">
            *Beta users will receive a 50% lifetime discount when we go public.
          </p>
        </div>
      </div>
    </section>
  );
}