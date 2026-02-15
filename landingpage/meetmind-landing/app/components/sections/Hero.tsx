"use client";

export default function Hero() {
  return (
    <section className="py-32 text-center px-6">
      <div className="max-w-4xl mx-auto">

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Stop Losing Clients to Messy Meetings.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          MeetMind turns your client calls into clean summaries and actionable tasks —
          so you never forget what gets you paid.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-8 py-4 rounded-lg text-sm font-medium hover:opacity-90 transition">
            Join Early Access
          </button>

          <button className="border px-8 py-4 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
            See How It Works
          </button>
        </div>

      </div>
    </section>
  );
}