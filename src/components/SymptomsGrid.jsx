import React from "react";

const items = [
  { symptom: "KPI theater", solution: "Score service: NPS by team, on-time handoffs, first-time quality." },
  { symptom: "Top-down pressure cycles", solution: "Servant standards with owner-operators + weekly inspect-and-improve." },
  { symptom: "Prestige over people", solution: "Reward maintenance wins, cross-team assists, and clean handoffs." },
  { symptom: "Churn masked by hype", solution: "Track role tenure, cross-training depth, and regretted attrition." },
  { symptom: "Hero dependency", solution: "One-page plays with backups and rituals that survive PTO and turnover." },
  { symptom: "Busy over outcomes", solution: "One page, one owner, one outcome per initiative—inspect weekly." },
  { symptom: "Vanity pipeline", solution: "Qualify for fit; publish kill-criteria; celebrate strategic ‘no’ calls." },
  { symptom: "Meeting fog", solution: "Agenda → output → owner. Daily 10-minute huddles that ship decisions." }
];

export default function SymptomsGrid() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Symptoms → Solutions</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {items.map((row, i) => (
            <div key={i} className="card p-6">
              <p className="text-xs uppercase tracking-wide text-slate-500">Symptom</p>
              <h3 className="font-semibold text-lg mt-1">{row.symptom}</h3>
              <p className="p mt-3"><span className="font-semibold">Solution: </span>{row.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
