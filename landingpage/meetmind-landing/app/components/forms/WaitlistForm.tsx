"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabaseClient";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase
      .from("MMwaitlist")
      .insert([
        { 
          email,
          agency_name: agencyName,
          status: "pending" 
        }
      ]);

    if (error) {
      if (error.code === "23505") {
        setErrorMessage("You're already on the list!");
      } else {
        setErrorMessage("Something went wrong. Try again?");
      }
      setStatus("error");
    } else {
      setStatus("success");
      setEmail("");
      setAgencyName("");
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            required
            placeholder="Agency name"
            value={agencyName}
            onChange={(e) => setAgencyName(e.target.value)}
            disabled={status === "loading"}
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          />
          <div className="flex flex-col gap-3 sm:flex-row">
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
          </div>
        </form>
      )}

      {status === "error" && (
        <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
      )}
    </div>  
  );
}