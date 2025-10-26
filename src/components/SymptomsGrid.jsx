import React from "react";

const items = [
  {
    symptom: "KPI theater",
    solution: "Score with service metrics (NPS by team, on-time handoffs, first-time quality)."
  },
  {
    symptom: "Top-down pressure cycles",
    solution: "Servant standards with owner-operators and weekly inspect-and-improve."
  },
  {
    symptom: "Prestige over people",
    solution: "Reward the hidden work: maintenance wins, cross-team assists, clean handoffs."
  },
  {
    symptom: "Churn masked by hype",
    solution: "Track retention, role tenure, and cross-training depth as headline numbers."
  },
  {
    symptom: "One-hero dependency",
    solution: "Single-page plays with backups and rituals that survive PTO and turnover."
  }
];

export default function SymptomsGrid() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Symptoms → Solutions</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {items.map((row, i) => (
            <div key={i} className="card p-6">
              <p className="text-sm uppercase tracking-wide text-slate-500">Symptom</p>
              <h3 className="font-semibold text-lg mt-1">{row.symptom}</h3>
              <p className="p mt-3"><span className="font-semibold">Solution: </span>{row.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
