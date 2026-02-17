"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import WaitlistForm from "../forms/WaitlistForm";
import PreviewCard from "./ui/PreviewCard";

interface HeroProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Hero({ isModalOpen, setIsModalOpen }: HeroProps) {
  // Config for Interactive Grid
  const columns = 20;
  const rows = 12;
  const totalBoxes = columns * rows;

  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden text-center transition-colors duration-500 bg-white dark:bg-zinc-950 min-h-screen">
      
      {/* 1. INTERACTIVE BACKGROUND GRID */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Radial Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/20 dark:from-sky-500/15 via-transparent to-transparent blur-3xl" />

        {/* Interactive Cells */}
        <div 
          className="grid w-full h-full opacity-60 dark:opacity-40 pointer-events-auto [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {[...Array(totalBoxes)].map((_, i) => (
            <motion.div
              key={i}
              className="border-[0.5px] border-zinc-200 dark:border-zinc-800/50"
              whileHover={{
                backgroundColor: "rgba(14, 165, 233, 0.20)",
                transition: { duration: 0 },
              }}
              initial={{ backgroundColor: "rgba(14, 165, 233, 0)" }}
              animate={{ backgroundColor: "rgba(14, 165, 233, 0)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          ))}
        </div>

        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none brightness-100 contrast-150"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />
      </div>

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest uppercase border rounded-full text-sky-600 border-sky-200 bg-sky-50 dark:text-sky-400 dark:border-sky-500/30 dark:bg-sky-500/5 mb-6">
          Private Beta for Agencies
        </span>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
          Turn every client call into <br className="hidden md:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 dark:from-sky-400 dark:to-sky-200">
            billable action items.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-base md:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 px-4">
          MeetMind automates the gap between "meeting" and "doing." Stop losing requirements in transcriptions—sync tasks directly to your workflow.
        </p>

        <div className="flex flex-col items-center justify-center w-full gap-4 mx-auto mt-10 px-4 sm:flex-row">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-10 py-4 font-black transition-all rounded-2xl shadow-xl bg-zinc-900 text-white dark:bg-sky-500 dark:text-zinc-950 active:scale-95 hover:shadow-sky-500/20"
          >
            Join Priority Access
          </button>
        </div>
      </motion.div>

      {/* REUSABLE PREVIEW CARD CONTAINER */}
      <div className="relative z-10 mt-16 md:mt-24 w-full">
        <PreviewCard />
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-zinc-950/40 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg p-6 md:p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Get Early Access</h3>
              <p className="text-sm text-zinc-500 mb-6">Join the waitlist for the private agency beta.</p>
              <WaitlistForm /> 
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}