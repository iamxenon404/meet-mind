"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Extraction",
    // Emphasis on 'intent', 'deadlines', and 'owners'
    description: (
      <>
        Our proprietary model identifies <span className="font-bold text-zinc-900 dark:text-white  tracking-tighter">Intent</span>, <span className="font-bold text-zinc-900 dark:text-white  tracking-tighter">Deadlines</span>, and <span className="font-bold text-zinc-900 dark:text-white uppercase tracking-tighter">owners</span> from messy transcripts with surgical accuracy.
      </>
    ),
    className: "md:col-span-2 md:row-span-2",
    icon: (
      <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Workflow Sync",
    // Emphasis on 'Notion, Linear, or Jira'
    description: (
      <>
        Instantly push tasks to <span className="text-sky-500 font-bold">Notion</span>, <span className="text-sky-500 font-bold">Linear</span>, or <span className="text-sky-500 font-bold">Jira</span> without leaving your summary.
      </>
    ),
    className: "md:col-span-1 md:row-span-1",
    icon: (
      <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Agency Insights",
    // Emphasis on 'billable opportunities'
    description: (
      <>
        Track <span className="font-bold text-zinc-900 dark:text-zinc-100 italic underline decoration-sky-500/30">billable opportunities</span> and scope creep before they hit your margin.
      </>
    ),
    className: "md:col-span-1 md:row-span-1",
    icon: (
      <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Built for the speed of <br />
            <span className="text-sky-500">modern agencies.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl font-medium">
            MeetMind doesn't just transcribe; it captures the <span className="font-bold text-zinc-900 dark:text-zinc-100">business value</span> hidden in your conversations.
          </p>
        </div>

        {/* Bento Grid - UI Fixed: Changed auto-rows to allow content expansion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr md:auto-rows-[220px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-8 flex flex-col justify-start hover:border-sky-500/50 transition-colors duration-500 ${feature.className}`}
            >
              <div className="z-10 h-full flex flex-col">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white mb-2">{feature.title}</h3>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed overflow-hidden">
                  {feature.description}
                </div>
              </div>

              {/* Subtle Decorative Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/5 blur-[50px] group-hover:bg-sky-500/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}