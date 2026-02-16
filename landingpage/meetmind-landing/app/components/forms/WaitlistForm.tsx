"use client";

import { useState } from "react";
// import { supabase } from "@/lib/supabaseClient"; // Adjust path based on your folders
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabaseClient";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // 1. Insert into your specific table
    const { error } = await supabase
      .from("MMwaitlist")
      .insert([
        { 
          email: email,
          source: "MeetMind", // Your "Tag" for reuse
          status: "pending" 
        }
      ]);

    if (error) {
      // Handle the "Unique" constraint error (if they signed up already)
      if (error.code === "23505") {
        setErrorMessage("You're already on the list!");
      } else {
        setErrorMessage("Something went wrong. Try again?");
      }
      setStatus("error");
    } else {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <div className="w-full max-w-md">
      {status === "success" ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 text-center rounded-lg bg-indigo-500/10 border border-indigo-500/50"
        >
          <p className="text-indigo-400 font-medium">✨ You're on the list! We'll be in touch.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="Agency work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-all disabled:opacity-50 active:scale-95"
          >
            {status === "loading" ? "Joining..." : "Get Access"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
      )}
    </div>
  );
}