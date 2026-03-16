"use client";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionLabel, SectionHeading, SectionSub } from "../ui";

const PIPELINE = [
  {
    step: "01",
    name: "ICP Architect",
    cmd: "/build-my-icp",
    desc: "Define your ideal customer profile with segments, personas, buying signals & disqualifiers.",
    output: "docs/icp.md",
    color: "#2981e2",
  },
  {
    step: "02",
    name: "Signal Scanner",
    cmd: "/scan-signals",
    desc: "Detect 20 buying signal types across target accounts. Score on Fit × Timing × Access × Intent.",
    output: "docs/signals/",
    color: "#10b981",
  },
  {
    step: "03",
    name: "Account Research",
    cmd: "/research-account",
    desc: "One-page company intelligence brief with context, tech stack, pain points & engagement angles.",
    output: "docs/accounts/",
    color: "#a78bfa",
  },
  {
    step: "04",
    name: "Qualification Scorer",
    cmd: "/score-leads",
    desc: "Score any list of leads HOT / WARM / COLD / PARK using a 20-point composite framework.",
    output: "docs/pipeline/",
    color: "#f59e0b",
  },
  {
    step: "05",
    name: "Outreach Builder",
    cmd: "/build-sequence",
    desc: "Signal-triggered multi-channel sequences: email, LinkedIn, phone — 4–6 touches, 10–14 days.",
    output: "docs/sequences/",
    color: "#ec4899",
  },
  {
    step: "06",
    name: "Meeting Prep",
    cmd: "/prep-meeting",
    desc: "Pre-call brief with stakeholder intel, talking points, objection prep & a proposed agenda.",
    output: "docs/meeting-prep/",
    color: "#06b6d4",
  },
  {
    step: "07",
    name: "Battlecard",
    cmd: "/build-battlecard",
    desc: "Competitive intelligence cards with win/loss patterns, trap questions & objection scripts.",
    output: "docs/battlecards/",
    color: "#ef4444",
  },
];

export default function GTMPipeline() {
  return (
    <Section id="pipeline" bg="#080c10">
      <Container>
        <div className="text-center mb-14">
          <SectionLabel>THE CORE WORKFLOW</SectionLabel>
          <SectionHeading>7 skills that chain together</SectionHeading>
          <SectionSub maxWidth={560}>
            Each skill&apos;s output feeds the next. Run them sequentially or
            cherry-pick the stages you need.
          </SectionSub>
        </div>

        {/* Pipeline steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent 4%, rgba(255,255,255,0.06) 15%, rgba(255,255,255,0.06) 85%, transparent 96%)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {PIPELINE.map((item, i) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                {/* Step circle */}
                <div
                  className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shrink-0"
                  style={{
                    background: `rgba(${hexToRgb(item.color)},0.08)`,
                    border: `1px solid rgba(${hexToRgb(item.color)},0.25)`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Commissioner, sans-serif",
                      fontWeight: 800,
                      fontSize: 11,
                      color: item.color,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.step}
                  </span>
                </div>

                {/* Arrow between steps (desktop) */}
                {i < PIPELINE.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 -right-3 z-20 w-6 flex items-center justify-center"
                    style={{ transform: "translateY(-50%)" }}
                  >
                    <ArrowRight size={12} color="rgba(255,255,255,0.2)" />
                  </div>
                )}

                <span
                  className="mb-1"
                  style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 12, color: "white" }}
                >
                  {item.name}
                </span>
                <code
                  className="mb-2 px-2 py-0.5 rounded"
                  style={{ fontFamily: "monospace", fontSize: 10, color: item.color, background: `rgba(${hexToRgb(item.color)},0.08)`, border: `1px solid rgba(${hexToRgb(item.color)},0.15)` }}
                >
                  {item.cmd}
                </code>
                <p
                  style={{ fontFamily: "Quicksand, sans-serif", fontSize: 11, color: "#6b7280", lineHeight: 1.5 }}
                >
                  {item.desc}
                </p>
                <div className="mt-2 flex items-center gap-1">
                  <span style={{ fontFamily: "monospace", fontSize: 9, color: "#4b5563" }}>→ {item.output}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chain note */}
        <div
          className="mt-12 mx-auto max-w-2xl rounded-xl px-6 py-4 flex items-start gap-3"
          style={{ background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.1)" }}
        >
          <span style={{ color: "#10b981", fontSize: 18, lineHeight: 1 }}>→</span>
          <p style={{ fontFamily: "Quicksand, sans-serif", fontSize: 13, color: "#9CA3AF", lineHeight: 1.7 }}>
            <strong style={{ color: "white" }}>Skills chain together:</strong>{" "}
            ICP Architect feeds Signal Scanner, which feeds Qualification Scorer, which feeds
            Outreach Builder. Every output is a markdown file in <code style={{ color: "#10b981" }}>docs/</code> — ready to pipe into the next skill.
          </p>
        </div>
      </Container>
    </Section>
  );
}

function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `${r},${g},${b}`;
}
