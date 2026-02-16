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
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden text-center transition-colors duration-500 
                       bg-white dark:bg-zinc-950 min-h-[90vh]">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
                      from-sky-500/20 dark:from-sky-500/10 via-transparent to-transparent -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10"
      >
        {/* Badge - Adjusted for Light Mode Contrast */}
        <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase border rounded-full 
                         text-sky-600 border-sky-200 bg-sky-50
                         dark:text-sky-400 dark:border-sky-500/30 dark:bg-sky-500/5">
          Private Beta for Agencies
        </span>
        
        {/* Heading */}
        <h1 className="max-w-4xl mt-8 text-5xl font-extrabold tracking-tight md:text-7xl
                       text-zinc-900 dark:text-white">
          Turn every client call into <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 
                           dark:from-sky-400 dark:to-sky-200">
            billable action items.
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl leading-relaxed
                      text-zinc-600 dark:text-zinc-400">
          MeetMind automates the gap between "meeting" and "doing." Stop losing requirements in transcriptions—sync tasks directly to your agency's workflow.
        </p>

        {/* Action Button - High Contrast Action */}
        <div className="flex flex-col items-center justify-center w-full gap-4 mx-auto mt-10 sm:flex-row">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full px-10 py-4 font-black transition-all rounded-2xl sm:w-auto hover:scale-[1.02] active:scale-95 shadow-xl
                       bg-zinc-900 text-white shadow-zinc-900/10
                       dark:bg-sky-500 dark:text-zinc-950 dark:shadow-sky-500/20"
          >
            Join Priority Access
          </button>
        </div>
        
        <p className="mt-6 text-sm font-medium text-zinc-400 dark:text-zinc-600">
          Join 40+ agencies already optimizing their workflow.
        </p>
      </motion.div>

      {/* Dashboard Preview - The Adaptive Card */}
     <div className="relative w-full h-full p-6 flex gap-6 overflow-hidden">
  {/* Left Column: The Meeting Feed */}
  <div className="w-1/3 space-y-4 opacity-50 dark:opacity-30 blur-[1px]">
    {[1, 2, 3].map((i) => (
      <div key={i} className="h-20 bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
    ))}
  </div>

  {/* Center: The AI Highlight (The Focus) */}
  <div className="flex-1 bg-white dark:bg-zinc-800 rounded-2xl border-2 border-sky-500/50 shadow-[0_0_30px_rgba(14,165,233,0.1)] p-6 relative">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-sky-500 rounded-full animate-pulse" />
      <div className="space-y-2">
        <div className="w-32 h-3 bg-zinc-200 dark:bg-zinc-700 rounded" />
        <div className="w-20 h-2 bg-zinc-100 dark:bg-zinc-600 rounded" />
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="p-4 bg-sky-500/10 border border-sky-500/20 rounded-xl">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-bold text-sky-500 uppercase">AI Task Extraction</span>
          <span className="text-[10px] text-zinc-400">98% Accuracy</span>
        </div>
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 italic">
          "Finalize the SEO audit for the client by EOD Tuesday."
        </p>
      </div>
      
      <div className="flex gap-2">
         <div className="flex-1 h-10 bg-zinc-100 dark:bg-zinc-700 rounded-lg flex items-center px-3 gap-2">
            <div className="w-4 h-4 rounded bg-sky-500/50" />
            <div className="w-12 h-2 bg-zinc-300 dark:bg-zinc-500 rounded" />
         </div>
         <div className="w-10 h-10 bg-zinc-900 dark:bg-sky-500 rounded-lg" />
      </div>
    </div>
  </div>

  {/* Right Column: The Integrations */}
  <div className="w-1/4 space-y-4 pt-12">
    <div className="p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-white/5">
        <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded mb-2" />
        <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded" />
    </div>
    <div className="p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-white/5 opacity-50">
        <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded mb-2" />
        <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded" />
    </div>
  </div>
</div>

      {/* Modal - Adaptive Design */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-zinc-950/20 dark:bg-black/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg p-8 border rounded-3xl shadow-2xl
                         bg-white border-zinc-200
                         dark:bg-zinc-900 dark:border-white/10"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white dark:text-zinc-950 font-black">
                  M
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Get Early Access</h3>
              </div>
              <p className="mb-8 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Be the first to know when we launch the private beta.
              </p>
              
              <WaitlistForm /> 
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}