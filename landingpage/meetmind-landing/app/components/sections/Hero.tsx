"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import WaitlistForm from "../forms/WaitlistForm";
import PreviewCard from "../ui/PreviewCard";
// import PreviewCard from "./ui/PreviewCard";

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
     {/* 1. AMBIENT LIQUID BACKGROUND */}
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
  {/* The Main Light Anchor */}
  <div className="absolute inset-0 bg-white dark:bg-zinc-950 transition-colors duration-500" />

  {/* Large Drifting Orb 1 (Sky Blue) */}
  <motion.div
    animate={{
      x: [0, 100, 0],
      y: [0, 50, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full 
               bg-sky-400/20 dark:bg-sky-600/10 blur-[120px]"
  />

  {/* Large Drifting Orb 2 (Indigo/Purple - Adds Depth) */}
  <motion.div
    animate={{
      x: [0, -80, 0],
      y: [0, 120, 0],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute top-[20%] -right-[5%] w-[40%] h-[60%] rounded-full 
               bg-indigo-400/10 dark:bg-indigo-600/5 blur-[100px]"
  />

  {/* Substrate Grid (Very Faint) */}
  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] brightness-100 contrast-150" />
  
  {/* The "Floor" Fade */}
  <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent" />
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