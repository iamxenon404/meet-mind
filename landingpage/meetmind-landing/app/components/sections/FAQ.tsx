"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is my client data secure?",
    answer: (
      <>
        Absolutely. We use <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter">enterprise-grade AES-256 encryption</span>. Your transcripts are processed in a isolated environment and are <span className="text-sky-500 font-bold">never used</span> to train public AI models.
      </>
    )
  },
  {
    question: "Does it work with Zoom and Google Meet?",
    answer: (
      <>
        Yes. MeetMind integrates directly with your <span className="font-bold text-zinc-900 dark:text-zinc-100">Calendar</span> and can automatically join any meeting link from <span className="text-sky-500 font-bold">Zoom</span>, <span className="text-sky-500 font-bold">Google Meet</span>, or <span className="text-sky-500 font-bold">Microsoft Teams</span>.
      </>
    )
  },
  {
    question: "How does the Scope Creep detection work?",
    answer: (
      <>
        Our AI compares live transcripts against your initial project brief. If a client requests items outside the agreed scope, MeetMind flags it as a <span className="font-extrabold text-zinc-900 dark:text-zinc-100 italic underline decoration-sky-500/30 underline-offset-4">Billable Opportunity</span> instantly.
      </>
    )
  },
  {
    question: "Can I edit the tasks before they sync?",
    answer: (
      <>
        Of course. You get access to the <span className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter">Review Room</span> after every call where you can tweak, delete, or reassign tasks before they hit your production workflow.
      </>
    )
  }
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Answers for <span className="text-sky-500">agencies.</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">
            Everything you need to know about <span className="text-zinc-900 dark:text-zinc-200 font-bold">security</span> and <span className="text-zinc-900 dark:text-zinc-200 font-bold">workflow</span>.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="group border border-zinc-200 dark:border-white/5 rounded-[2rem] bg-white dark:bg-zinc-900 overflow-hidden hover:border-sky-500/30 transition-all duration-500"
            >
              <button
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full p-8 text-left flex justify-between items-center transition-colors"
              >
                <span className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIdx === i ? "bg-sky-500 text-zinc-950 rotate-45" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"}`}>
                  <span className="text-xl font-light">＋</span>
                </div>
              </button>
              
              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-white/5">
                      <div className="mt-6">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}