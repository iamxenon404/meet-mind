"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your Calendar",
    desc: "Sync Google Meet or Zoom. MeetMind automatically joins your scheduled client calls.",
  },
  {
    number: "02",
    title: "AI Processes the Call",
    desc: "Within seconds of hanging up, our AI extracts every task, deadline, and requirement discussed.",
  },
  {
    number: "03",
    title: "Sync & Ship",
    desc: "Review the action items and push them directly to Notion, Linear, or Slack with one click.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            From meeting to <span className="text-sky-500">done</span> in seconds.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 z-0" />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="w-12 h-12 rounded-full bg-sky-500 text-zinc-950 font-black flex items-center justify-center mb-6 shadow-lg shadow-sky-500/20">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}