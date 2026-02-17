"use client";
import { motion } from "framer-motion";

export default function PreviewCard() {
  return (
    <div className="relative w-full max-w-5xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
        
        {/* 1. THE INPUT: Messy Transcript (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
          viewport={{ once: true }}
          className="flex-1 w-full min-h-[350px] bg-white dark:bg-zinc-900 rounded-[32px] border border-zinc-200 dark:border-white/10 shadow-2xl p-6 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50" />
          
          <div className="flex flex-col h-full">
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
                <button className="flex-1 py-3 rounded-xl bg-sky-500 text-zinc-950 text-xs font-black shadow-lg shadow-sky-500/20 active:scale-95 transition-transform">
                  Push to Linear
                </button>
                <button className="px-4 py-3 rounded-xl bg-zinc-900 dark:bg-white/5 border border-zinc-800 dark:border-white/10 text-white text-xs font-bold active:scale-95 transition-transform">
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
          viewport={{ once: true }}
          className="w-full md:w-64 shrink-0 grid grid-cols-2 md:grid-cols-1 gap-4"
        >
          {[
            { label: "Notion", icon: "N", color: "bg-zinc-900" },
            { label: "Slack", icon: "S", color: "bg-purple-600" },
            { label: "Linear", icon: "L", color: "bg-blue-600" }
          ].map((platform, i) => (
            <div key={i} className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl flex items-center gap-3 shadow-sm hover:border-sky-500/50 transition-colors">
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
  );
}