import React from "react";

export default function Hero() {
  return (
    <header className="section">
      <div className="container text-center">
        <div className="badge mx-auto">A diagnostic anti-project</div>
        <h1 className="h1 mt-6">Scoreboard Leadership</h1>
        <p className="p mt-4 max-w-3xl mx-auto">
          When leadership becomes a game to win instead of a mission to serve, everyone eventually loses.
        </p>
        <p className="text-sm text-slate-500 mt-3">
          By Bart Paden — creator of Archetype Original and author of <em>Accidental CEO</em>.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#definition" className="btn btn-contrast">Read the Definition</a>
          <a
            href="https://archetypeoriginal.com/?utm_source=scoreboardleadership&utm_medium=referral&utm_campaign=diagnostic#playbooks"
            className="btn"
          >
            Want the cure? → Archetype Original
          </a>
        </div>
      </div>
    </header>
  );
}
