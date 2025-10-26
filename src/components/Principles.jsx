import React from "react";

const principles = [
  { title: "People over optics", text: "We measure what improves service, not what flatters leadership." },
  { title: "Owner standard", text: "Single-point ownership with freedom in method and clarity in outcomes." },
  { title: "Honest rhythms", text: "Short, frequent inspect-and-improve cycles replace performative meetings." },
  { title: "One-page plays", text: "Every effort fits on one page: purpose, owner, steps, risks, next review." },
  { title: "Service prestige", text: "We celebrate assists, clean handoffs, and maintenance wins as headline achievements." },
  { title: "Compounding culture", text: "Decisions favor long-term trust and repeatability over short-term theatrics." }
];

export default function Principles() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <h2 className="h2">Servant Standards — Principles</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {principles.map((p, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="p mt-2">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
