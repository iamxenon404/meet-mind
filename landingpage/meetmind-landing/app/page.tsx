// import Hero from "/components/sections/Hero";
// import Problem from "@/components/sections/Problem";
// import Solution from "@/components/sections/Solution";
// import Demo from "@/components/sections/Demo";
// import CTA from "@/components/sections/CTA";
import CTA from "./components/sections/CTA";
import Demo from "./components/sections/Demo";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <CTA />
    </main>
  );
}