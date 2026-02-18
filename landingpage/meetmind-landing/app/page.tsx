"use client";

import { useState } from "react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import CTA from "./components/sections/CTA";
import Demo from "./components/sections/Demo";
import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import Solution from "./components/sections/Solution";
import Features from "./components/sections/Features";

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

      {/* <Problem /> */}
      {/* <Solution /> */}
      {/* <Demo /> */}
      {/* <CTA /> */}
      <Footer />
    </main>
  );
}