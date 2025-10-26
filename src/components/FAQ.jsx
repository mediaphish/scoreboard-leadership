import React from "react";

const faqs = [
  {
    q: "Is Scoreboard Leadership against metrics?",
    a: "No. It’s against weaponized metrics and optics-driven behavior. We keep measurement, but we point it at service and outcomes."
  },
  {
    q: "What changes first?",
    a: "Standards and rhythms: one-page plays, weekly inspect-and-improve, and redefining prestige around service and trust."
  },
  {
    q: "How fast can we see impact?",
    a: "Most teams feel relief in 2–4 weeks as meetings shrink and owners gain clarity. Measurable compounding typically follows in 1–2 quarters."
  },
  {
    q: "Does this replace our KPIs?",
    a: "It reframes them. Keep your KPIs; add counter-metrics like first-time quality, handoff reliability, and role tenure."
  },
  {
    q: "What if leadership is the bottleneck?",
    a: "We start there. Servant standards are leader-carried first. Pressure is replaced with clarity and consistency."
  },
  {
    q: "How do we engage?",
    a: "Begin with the 10 Plays and a half-day workshop. When you’re ready, contact Archetype Original to plan rollout."
  }
];

export default function FAQ() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <h2 className="h2">FAQ</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="p mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
