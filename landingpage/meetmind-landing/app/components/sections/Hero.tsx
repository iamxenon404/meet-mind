"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import WaitlistForm from "../forms/WaitlistForm";
// import WaitlistForm from "./WaitlistForm"; // Adjust this path to your file

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden text-center bg-zinc-950 min-h-[80vh]">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase border rounded-full text-indigo-400 border-indigo-500/30 bg-indigo-500/5">
          Private Beta for Agencies
        </span>
        
        <h1 className="max-w-4xl mt-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Turn every client call into <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-r from-indigo-400 to-cyan-400">
            billable action items.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-zinc-400">
          MeetMind automates the gap between "meeting" and "doing." Stop losing requirements in transcriptions—start syncing tasks directly to your agency's workflow.
        </p>

        {/* Action Button */}
        <div className="flex flex-col items-center justify-center w-full gap-3 mx-auto mt-10 sm:flex-row">
          <button 
            onClick={() => setIsOpen(true)}
            className="w-full px-8 py-4 font-bold text-black transition-all bg-white rounded-xl sm:w-auto hover:bg-zinc-200 active:scale-95 shadow-lg shadow-white/10"
          >
            Join Priority Access
          </button>
        </div>
        
        <p className="mt-4 text-sm text-zinc-500">
          Join 40+ agencies already optimizing their workflow.
        </p>
      </motion.div>

      {/* Modal Overlay for the Waitlist Form */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg p-8 border bg-zinc-900 border-zinc-800 rounded-2xl shadow-2xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
              >
                ✕
              </button>
              
              <h3 className="mb-2 text-2xl font-bold text-white">Get Early Access</h3>
              <p className="mb-6 text-zinc-400 text-sm">Be the first to know when we launch the private beta.</p>
              
              {/* Your separate component is called here */}
              <WaitlistForm /> 
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Image/Demo Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="mt-16 w-full max-w-5xl aspect-video bg-zinc-900 rounded-xl border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center"
      >
        <span className="text-zinc-700 italic font-mono">Agency Dashboard Preview (GIF/Video)</span>
      </motion.div>
    </section>
  );
}