"use client";

import { useState } from "react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import CTA from "./components/sections/CTA";
// import Demo from "./components/sections/Demo";
import Hero from "./components/sections/Hero";
// import Problem from "./components/sections/Problem";
// import Solution from "./components/sections/Solution";
import Features from "./components/sections/Features";
import TrustBar from "./components/sections/TrustBar";
import HowItWorks from "./components/sections/HowItWorks";
import Comparison from "./components/sections/Comparison";
import FAQ from "./components/sections/FAQ";

export default function Home() {
  // 1. Create the global state for the waitlist modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-zinc-950">
      {/* 2. Pass the 'open' function to the Navbar */}
      <Navbar onJoinClick={() => setIsModalOpen(true)} />

      {/* 3. Pass both the state and setter to the Hero */}
      <Hero isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Features />
      <TrustBar />
      <HowItWorks />
      <Comparison />
      <FAQ />
      <CTA/>

      {/* <Problem /> */}
      {/* <Solution /> */}
      {/* <Demo /> */}
      {/* <CTA /> */}
      <Footer />
    </main>
  );
}