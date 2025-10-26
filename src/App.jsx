import React from "react";
import Hero from "./components/Hero.jsx";
import Definition from "./components/Definition.jsx";
import SymptomsGrid from "./components/SymptomsGrid.jsx";
import Principles from "./components/Principles.jsx";
import PlaybookBridge from "./components/PlaybookBridge.jsx";
import About from "./components/About.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <main>
      <Hero />
      <Definition />
      <SymptomsGrid />
      <Principles />
      <PlaybookBridge />
      <About />
      <FAQ />
      <Contact />
      <footer className="section border-t">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm text-slate-500">
            © 2025 Bart Paden · Archetype Original LLC · Scoreboard Leadership is a diagnostic under Archetype Original
          </p>
          <nav className="text-sm flex items-center gap-4">
            <a className="underline" href="https://archetypeoriginal.com" rel="noreferrer">Archetype Original (Parent)</a>
            <a className="underline" href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
