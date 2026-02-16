"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden text-center bg-zinc-950">
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            billable action items.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-zinc-400">
          MeetMind automates the gap between "meeting" and "doing." Stop losing requirements in transcriptions—start syncing tasks directly to your agency's workflow.
        </p>

        {/* Waitlist Form */}
        <div className="flex flex-col items-center justify-center w-full max-w-md gap-3 mx-auto mt-10 sm:flex-row">
          <input
            type="email"
            placeholder="Work email address"
            className="w-full px-4 py-3 text-white transition-all border rounded-lg bg-zinc-900 border-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="w-full px-6 py-3 font-semibold text-black transition-all bg-white rounded-lg sm:w-auto hover:bg-zinc-200 active:scale-95">
            Join Priority Access
          </button>
        </div>
        
        <p className="mt-4 text-sm text-zinc-500">
          Join 40+ agencies already optimizing their workflow.
        </p>
      </motion.div>

      {/* Hero Image/Demo Placeholder with Framer Motion */}
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