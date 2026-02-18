"use client";
import { motion } from "framer-motion";

interface CTAProps {
  setIsModalOpen: (open: boolean) => void;
}

export default function CTA({ setIsModalOpen }: CTAProps) {
  return (
    <section className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[3rem] bg-zinc-900 dark:bg-sky-500 p-12 md:p-20 text-center shadow-2xl">
        
        {/* Ambient Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] bg-white/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] bg-sky-400/20 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white dark:text-zinc-950 tracking-tight mb-6">
            Ready to reclaim your <br className="hidden md:block" /> billable hours?
          </h2>
          
          <p className="text-zinc-400 dark:text-zinc-800 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Join the private beta for agencies and stop losing billable requirements in messy transcripts.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative px-10 py-5 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white font-black text-xl rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get Priority Access
            {/* Pulsing notification dot for urgency */}
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
            </span>
          </button>
          
          <p className="mt-8 text-[10px] md:text-xs text-zinc-500 dark:text-zinc-700 font-bold uppercase tracking-[0.3em]">
            Limited Beta Slots Available for 2026
          </p>
        </div>
      </div>
    </section>
  );
}