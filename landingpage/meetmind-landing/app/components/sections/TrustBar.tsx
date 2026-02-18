"use client";
import { motion } from "framer-motion";
// Using lucide-react for the icons
import { 
  Trello, 
  Slack, 
  Layers, 
  Workflow, 
  CheckSquare, 
  Zap 
} from "lucide-react";

const integrations = [
  { name: "Notion", icon: <Layers className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Slack", icon: <Slack className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Linear", icon: <Zap className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Jira", icon: <Workflow className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Asana", icon: <CheckSquare className="w-5 h-5 md:w-6 md:h-6" /> },
  { name: "Trello", icon: <Trello className="w-5 h-5 md:w-6 md:h-6" /> },
];

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-500 mb-10">
          Seamlessly syncs with <span className="text-zinc-900 dark:text-zinc-100">your agency stack</span>
        </p>
        
        <div className="relative flex overflow-x-hidden group">
          {/* Marquee effect */}
          <motion.div 
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 md:gap-32 items-center whitespace-nowrap px-12"
          >
            {[...integrations, ...integrations].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 cursor-default"
              >
                <div className="text-sky-500 dark:text-sky-400">
                  {item.icon}
                </div>
                <span className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white lowercase tracking-tighter">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Masking gradients to fade out edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}