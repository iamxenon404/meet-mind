"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your Stack",
    desc: (
      <>
        Link your <span className="font-bold text-zinc-900 dark:text-zinc-100">Calendar</span> and <span className="font-bold text-zinc-900 dark:text-zinc-100">Meeting Tools</span>. MeetMind joins your calls as a silent observer to capture every detail.
      </>
    ),
  },
  {
    number: "02",
    title: "AI Analysis",
    desc: (
      <>
        Our engine extracts <span className="text-sky-500 font-bold uppercase tracking-tighter">requirements</span> and <span className="text-sky-500 font-bold uppercase tracking-tighter">deadlines</span> within seconds of the call ending.
      </>
    ),
  },
  {
    number: "03",
    title: "Direct Pipeline",
    desc: (
      <>
        Review your summary and <span className="font-extrabold text-zinc-900 dark:text-zinc-100 italic underline decoration-sky-500/30">instantly push</span> tasks into your agency's actual production workflow.
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="workflow" className="py-24 bg-zinc-50 dark:bg-zinc-900/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            From meeting to <span className="text-sky-500">delivered</span> in seconds.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium max-w-lg mx-auto">
            Three steps to eliminate the gap between <span className="text-zinc-900 dark:text-zinc-200 font-bold">talking</span> and <span className="text-zinc-900 dark:text-zinc-200 font-bold">billing</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connecting Line (Desktop Only) - Styled to be more subtle */}
          <div className="hidden md:block absolute top-[24px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent z-0" />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group"
            >
              {/* Step Number Circle */}
              <div className="w-12 h-12 rounded-full bg-sky-500 text-zinc-950 font-black flex items-center justify-center mb-8 shadow-xl shadow-sky-500/20 group-hover:scale-110 transition-transform duration-500">
                {step.number}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                {step.title}
              </h3>
              
              <div className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                {step.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}