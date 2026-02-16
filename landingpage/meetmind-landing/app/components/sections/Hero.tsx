"use client";

import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSuccess(true);
      setEmail("");
    }

    setLoading(false);
  }

  return (
    <section className="py-32 text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Stop Losing Clients to Messy Meetings.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Turn client calls into clean summaries and actionable tasks —
          so you never forget what gets you paid.
        </p>

        {!success ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-5 py-3 rounded-lg w-72"
            />

            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
            >
              {loading ? "Joining..." : "Join Early Access"}
            </button>
          </form>
        ) : (
          <p className="text-green-600 font-medium">
            🎉 You're on the waitlist!
          </p>
        )}
      </div>
    </section>
  );
}