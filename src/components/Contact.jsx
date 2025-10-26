import React from "react";

export default function Contact() {
  const aoUrl =
    "https://archetypeoriginal.com/#contact?utm_source=scoreboardleadership&utm_medium=referral&utm_campaign=diagnostic";

  return (
    <section id="contact" className="section bg-slate-50">
      <div className="container">
        <h2 className="h2">Contact</h2>
        <div className="card p-6 mt-6 grid gap-4 max-w-2xl">
          <p className="p">
            Scoreboard Leadership is a diagnostic lens under Archetype Original. For coaching, playbooks,
            or workshops, continue to Archetype Original.
          </p>
          <a href={aoUrl} className="btn btn-contrast" rel="noreferrer">
            Go to Archetype Original → Contact
          </a>
          <p className="text-sm text-slate-500">
            You’ll be routed to the Archetype Original contact form where responses are fastest.
          </p>
        </div>
      </div>
    </section>
  );
}
