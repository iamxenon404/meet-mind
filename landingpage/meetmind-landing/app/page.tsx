import Navbar from "./components/layout/Navbar";
import CTA from "./components/sections/CTA";
import Demo from "./components/sections/Demo";
import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import Solution from "./components/sections/Solution";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <CTA />
    </main>
  );
}