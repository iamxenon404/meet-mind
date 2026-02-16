"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import WaitlistForm from "../forms/WaitlistForm";

interface HeroProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Hero({ isModalOpen, setIsModalOpen }: HeroProps) {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden text-center transition-colors duration-500 bg-zinc-50 dark:bg-zinc-950 min-h-[90vh]">
      
      {/* Background Glow - Adaptive */}
      <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 dark:from-sky-500/5 via-transparent to-transparent -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10"
      >
        <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase border rounded-full text-sky-600 border-sky-500/30 bg-sky-500/5 dark:text-sky-400">
          Private Beta for Agencies
        </span>
        
        <h1 className="max-w-4xl mt-8 text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white md:text-7xl">
          Turn every client call into <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 dark:from-sky-400 dark:to-sky-200">
            billable action items.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          MeetMind automates the gap between "meeting" and "doing." Stop losing requirements in transcriptions—sync tasks directly to your agency's workflow.
        </p>

        {/* Action Button - High Contrast */}
        <div className="flex flex-col items-center justify-center w-full gap-4 mx-auto mt-10 sm:flex-row">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full px-10 py-4 font-black text-white transition-all bg-zinc-900 dark:bg-sky-500 dark:text-zinc-950 rounded-2xl sm:w-auto hover:scale-[1.02] active:scale-95 shadow-xl shadow-sky-500/20"
          >
            Join Priority Access
          </button>
        </div>
        
        <p className="mt-6 text-sm font-medium text-zinc-500 dark:text-zinc-600">
          Join 40+ agencies already optimizing their workflow.
        </p>
      </motion.div>

      {/* Agency Dashboard Preview - Upgraded Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 w-full max-w-5xl aspect-[16/9] bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50/50 dark:to-black/20 pointer-events-none" />
        <span className="text-zinc-400 dark:text-zinc-700 italic font-mono text-sm tracking-widest uppercase">
          Agency Dashboard Preview
        </span>
      </motion.div>

      {/* Modal - The Command Palette Style */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-zinc-950/40 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg p-8 border bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-white/10 rounded-3xl shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white font-black">M</div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Get Early Access</h3>
              </div>
              <p className="mb-8 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Be the first to know when we launch the private beta. We're onboarding agencies in batches to ensure quality.
              </p>
              
              <WaitlistForm /> 
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}