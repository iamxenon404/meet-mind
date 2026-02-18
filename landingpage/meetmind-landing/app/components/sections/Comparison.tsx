"use client";
import { motion } from "framer-motion";

export default function Comparison() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Stop losing <span className="text-red-500">billable hours</span> to admin.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* The "Old Way" */}
          <div className="p-8 rounded-[2rem] bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 opacity-80">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-red-500">✕</span> The Manual Mess
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex gap-3">
                <span className="shrink-0">•</span>
                Rewatching 1-hour recordings to find one specific requirement.
              </li>
              <li className="flex gap-3">
                <span className="shrink-0">•</span>
                Manual data entry into Notion/Jira (approx. 30 mins per call).
              </li>
              <li className="flex gap-3">
                <span className="shrink-0">•</span>
                "Scope creep" happens because tasks were discussed but never logged.
              </li>
              <li className="flex gap-3">
                <span className="shrink-0">•</span>
                Clients asking "Where is that update?" because a task was missed.
              </li>
            </ul>
          </div>

          {/* The "MeetMind Way" */}
          <div className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border-2 border-sky-500 shadow-[0_0_40px_rgba(14,165,233,0.1)] relative overflow-hidden">
            {/* Subtle Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/10 blur-3xl" />
            
            <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-sky-500">✓</span> The MeetMind Flow
            </h4>
            <ul className="space-y-4 text-sm text-zinc-900 dark:text-zinc-200 font-medium">
              <li className="flex gap-3">
                <span className="text-sky-500 shrink-0">→</span>
                AI extracts requirements instantly. No rewatching needed.
              </li>
              <li className="flex gap-3">
                <span className="text-sky-500 shrink-0">→</span>
                Auto-syncs to your stack. 0 minutes of manual entry.
              </li>
              <li className="flex gap-3">
                <span className="text-sky-500 shrink-0">→</span>
                Every billable request is captured and turned into a ticket.
              </li>
              <li className="flex gap-3">
                <span className="text-sky-500 shrink-0">→</span>
                Proactive updates: Clients see progress before they have to ask.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-zinc-500 text-sm italic">
                Average agency saving: <span className="text-sky-500 font-bold">12+ hours / month</span> per project manager.
            </p>
        </div>
      </div>
    </section>
  );
}