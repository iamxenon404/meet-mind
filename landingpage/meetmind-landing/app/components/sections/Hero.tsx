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
    <section className="relative flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden text-center transition-colors duration-500 bg-white dark:bg-zinc-950 min-h-screen">
      
      {/* 1. ANIMATED BACKGROUND EFFECT */}
      <div className="absolute inset-0 z-0">
        {/* The Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/20 dark:from-sky-500/10 via-transparent to-transparent" />
        
        {/* The Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

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
            className="w-full sm:w-auto px-10 py-4 font-black transition-all rounded-2xl shadow-xl bg-zinc-900 text-white dark:bg-sky-500 dark:text-zinc-950 active:scale-95"
          >
            Join Priority Access
          </button>
        </div>
      </motion.div>

      {/* 2. THE RESPONSIVE VIDEO CONTAINER */}
     <div className="relative w-full max-w-5xl mx-auto p-4 md:p-8">
  <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
    
    {/* 1. THE INPUT: Messy Transcript (Left) */}
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="w-full md:w-72 shrink-0 space-y-3"
    >
      <div className="flex items-center gap-2 mb-4 px-2">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Live Transcript</span>
      </div>
      
      {[
        "We need to update the branding...",
        "Can we get the SEO audit by Tuesday?",
        "Let's sync with the dev team."
      ].map((text, i) => (
        <div 
          key={i} 
          className={`p-4 rounded-2xl border text-left transition-all duration-500
            ${i === 1 ? 'bg-white dark:bg-zinc-800 border-sky-500/50 shadow-lg scale-105 z-10' : 'bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-white/5 opacity-40 blur-[0.5px]'}`}
        >
          <p className="text-xs font-medium text-zinc-600 dark:text-zinc-300 line-clamp-2">{text}</p>
        </div>
      ))}
    </motion.div>

    {/* 2. THE ENGINE: AI Processing (Center) */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex-1 w-full min-h-[350px] bg-white dark:bg-zinc-900 rounded-[32px] border border-zinc-200 dark:border-white/10 shadow-2xl p-6 relative overflow-hidden group"
    >
      {/* Animated Background Beam */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50" />
      
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white">MeetMind AI</h4>
              <p className="text-[10px] text-sky-500 font-semibold uppercase tracking-wider">Extracting Tasks...</p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 text-[10px] font-bold text-zinc-500">
            99.2% ACCURACY
          </div>
        </div>

        {/* The "Result" Card */}
        <div className="mt-auto space-y-4">
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="p-6 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-white/10 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 w-5 h-5 rounded border-2 border-sky-500 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="w-2.5 h-2.5 bg-sky-500 rounded-sm" 
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-zinc-900 dark:text-white">Finalize SEO Audit</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Due: Tuesday, EOD • Assigned to: @Sarah</p>
              </div>
            </div>
          </motion.div>

          <div className="flex gap-3">
            <button className="flex-1 py-3 rounded-xl bg-sky-500 text-zinc-950 text-xs font-black shadow-lg shadow-sky-500/20">
              Push to Linear
            </button>
            <button className="px-4 py-3 rounded-xl bg-zinc-900 dark:bg-white/5 border border-zinc-800 dark:border-white/10 text-white text-xs font-bold">
              Edit
            </button>
          </div>
        </div>
      </div>
    </motion.div>

    {/* 3. THE OUTPUT: Integrations (Right) */}
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="w-full md:w-64 shrink-0 grid grid-cols-2 md:grid-cols-1 gap-4"
    >
      {[
        { label: "Notion", icon: "N", color: "bg-zinc-900" },
        { label: "Slack", icon: "S", color: "bg-purple-600" },
        { label: "Linear", icon: "L", color: "bg-blue-600" }
      ].map((platform, i) => (
        <div key={i} className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl flex items-center gap-3 shadow-sm">
          <div className={`w-8 h-8 ${platform.color} rounded-lg flex items-center justify-center text-white font-bold text-xs`}>
            {platform.icon}
          </div>
          <div className="space-y-1">
            <div className="w-12 h-2 bg-zinc-200 dark:bg-zinc-800 rounded" />
            <div className="w-8 h-1 bg-zinc-100 dark:bg-zinc-700 rounded" />
          </div>
        </div>
      ))}
    </motion.div>

  </div>
</div>

      {/* Modal - Unchanged but ensure high z-index */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-zinc-950/40 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg p-6 md:p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl shadow-2xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-zinc-400">✕</button>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Get Early Access</h3>
              <WaitlistForm /> 
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}