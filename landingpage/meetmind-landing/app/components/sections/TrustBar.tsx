"use client";
import { motion } from "framer-motion";

const integrations = [
  { name: "Notion", logo: "N" }, // Replace with SVGs or PNGs later
  { name: "Slack", logo: "S" },
  { name: "Linear", logo: "L" },
  { name: "Jira", logo: "J" },
  { name: "Asana", logo: "A" },
  { name: "Trello", logo: "T" },
];

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 mb-10">
          Seamlessly syncs with your agency stack
        </p>
        
        <div className="relative flex overflow-x-hidden group">
          {/* Marquee effect using two identical lists */}
          <motion.div 
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 md:gap-24 items-center whitespace-nowrap px-12"
          >
            {[...integrations, ...integrations].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 cursor-default"
              >
                {/* Logo Placeholder - You'll replace these with <img> tags */}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-600 dark:text-zinc-400">
                  {item.logo}
                </div>
                <span className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white lowercase tracking-tighter">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}