import React from "react";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">About the Author</h2>
        <p className="p mt-2 max-w-3xl">
          I built teams the hard way—through crisis and recovery—and wrote the systems I wish we had sooner.
          Scoreboard Leadership names the disease.{" "}
          <a className="underline" href="https://archetypeoriginal.com/?utm_source=scoreboardleadership&utm_medium=referral&utm_campaign=diagnostic">
            Archetype Original
          </a>{" "}
          delivers the cure: servant-led standards that create clarity, protect culture, and compound results.
        </p>
      </div>
    </section>
  );
}
