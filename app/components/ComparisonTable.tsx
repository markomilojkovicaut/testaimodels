"use client";
import { Check, X, AlertTriangle } from "lucide-react";
import { Container, Section, SectionLabel, SectionHeading, SectionSub, BtnPrimary } from "./ui";
import { ArrowRight } from "lucide-react";

const ROWS = [
  { feature: "Test YOUR prompts",        tam: [true,"Real API calls"],   red: [false,""],         arena: ["partial","Fixed tests"],  heli: ["partial","After integrating"] },
  { feature: "See real costs",           tam: [true,"With projections"], red: [false,""],         arena: [false,""],                 heli: ["partial","After spending"]    },
  { feature: "Pre-deployment",           tam: [true,"Test before commit"],red:[false,"Guess"],    arena: ["partial","Research only"],heli: [false,"Monitor after"]         },
  { feature: "No API keys needed",       tam: [true,""],                 red: [true,""],          arena: [true,""],                  heli: [false,"Requires setup"]        },
  { feature: "Time to results",          tam: ["30 seconds",true],       red: ["Hours reading",true],arena:["Varies",true],          heli: ["After deploy",true]           },
  { feature: "Scale cost projections",   tam: [true,"10K-1M queries"],   red: [false,""],         arena: [false,""],                 heli: ["partial","Usage only"]        },
];

const COLS = ["Test AI Models","Reddit Threads","Chatbot Arena","Helicone"];

function CellVal({ val, note }: { val: boolean | string; note?: string }) {
  if (val === true) return (
    <div className="flex flex-col items-center gap-0.5">
      <Check size={15} color="#10b981" strokeWidth={2.5} />
      {note && <span style={{ fontFamily: "Quicksand, sans-serif", fontSize: 10, color: "#4b5563" }}>{note}</span>}
    </div>
  );
  if (val === false) return <X size={15} color="#ef4444" strokeWidth={2.5} className="mx-auto" />;
  if (val === "partial") return (
    <div className="flex flex-col items-center gap-0.5">
      <AlertTriangle size={13} color="#f59e0b" />
      {note && <span style={{ fontFamily: "Quicksand, sans-serif", fontSize: 10, color: "#4b5563" }}>{note}</span>}
    </div>
  );
  return <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 600, fontSize: 12, color: "#9CA3AF" }}>{val}</span>;
}

export default function ComparisonTable() {
  return (
    <Section id="comparison" bg="#0b0f14">
      <Container>
        <div className="text-center mb-14">
          <SectionLabel>Comparison</SectionLabel>
          <SectionHeading>
            Choose the right model.<br />
            <span style={{ color: "#9CA3AF", fontWeight: 500 }}>Your terms.</span>
          </SectionHeading>
          <SectionSub>See how Test AI Models stacks up against the alternatives developers currently use.</SectionSub>
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
          <div className="overflow-x-auto">
            <table className="w-full" style={{ minWidth: 600 }}>
              <thead>
                <tr style={{ background: "#111820" }}>
                  <th className="px-5 py-4 text-left" style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 11, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid rgba(255,255,255,0.05)", minWidth: 160 }}>
                    Feature
                  </th>
                  {COLS.map((col, i) => (
                    <th key={col} className="px-5 py-4 text-center" style={{
                      fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 12,
                      color: i === 0 ? "#60a5fa" : "#6b7280",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      background: i === 0 ? "rgba(41,129,226,0.07)" : "transparent",
                      borderLeft: i === 0 ? "1px solid rgba(41,129,226,0.14)" : "none",
                      borderRight: i === 0 ? "1px solid rgba(41,129,226,0.14)" : "none",
                    }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, ri) => (
                  <tr key={ri} style={{ background: ri % 2 === 0 ? "rgba(11,15,20,0.6)" : "rgba(17,24,32,0.4)" }}>
                    <td className="px-5 py-3.5" style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#9CA3AF", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                      {row.feature}
                    </td>
                    {[row.tam, row.red, row.arena, row.heli].map((cell, ci) => (
                      <td key={ci} className="px-5 py-3.5 text-center" style={{
                        borderBottom: "1px solid rgba(255,255,255,0.03)",
                        background: ci === 0 ? "rgba(41,129,226,0.04)" : "transparent",
                        borderLeft: ci === 0 ? "1px solid rgba(41,129,226,0.1)" : "none",
                        borderRight: ci === 0 ? "1px solid rgba(41,129,226,0.1)" : "none",
                      }}>
                        <CellVal val={cell[0] as boolean | string} note={cell[1] as string} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-10">
          <BtnPrimary>Start Testing Free — 50 Tests Included <ArrowRight size={15} /></BtnPrimary>
        </div>
      </Container>
    </Section>
  );
}
