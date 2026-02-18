"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is my client data secure?",
    answer: "Absolutely. We use enterprise-grade AES-256 encryption. Your transcripts are processed in a private environment and are never used to train public AI models."
  },
  {
    question: "Does it work with Zoom and Google Meet?",
    answer: "Yes. MeetMind integrates directly with your calendar and can automatically join any meeting link from Zoom, Google Meet, or Microsoft Teams."
  },
  {
    question: "How does the 'Scope Creep' detection work?",
    answer: "Our AI compares the live transcript against your initial project brief. If a client asks for something outside the agreed scope, MeetMind flags it as a 'Billable Opportunity'."
  },
  {
    question: "Can I edit the tasks before they sync?",
    answer: "Of course. You get a 'Review Room' after every call where you can tweak, delete, or reassign tasks before pushing them to your project management tools."
  }
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-200 dark:border-white/5 rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden">
              <button
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-zinc-900 dark:text-white">{faq.question}</span>
                <span className={`text-sky-500 transition-transform duration-300 ${activeIdx === i ? "rotate-45" : ""}`}>
                  ＋
                </span>
              </button>
              
              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-white/5">
                      {faq.answer}
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