"use client";
import { Clock, CreditCard, AlertTriangle } from "lucide-react";
import { Container, Section, SectionLabel, SectionHeading, SectionSub } from "./ui";

const PROBLEMS = [
  {
    icon: <Clock size={20} />,
    iconColor: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.15)",
    tag: "Decision Paralysis",
    tagColor: "#f59e0b",
    title: "Hours lost on Reddit threads",
    desc: "Developers spend 5-10 hours/week reading ChatGPT vs Claude debates. Still not sure which model works for their use case. 25-30% of work time lost switching tools.",
    stat: "5-10 hrs/week",
    statLabel: "wasted comparing",
  },
  {
    icon: <CreditCard size={20} />,
    iconColor: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.15)",
    tag: "Bill Shock",
    tagColor: "#ef4444",
    title: "$2,000+ unexpected API bills",
    desc: "Student leaked API key: $55,444 overnight. Hidden reasoning tokens in o1-pro: $600 actual vs $3 visible. Average unexpected bill: $2,000. Some incidents hit $120K.",
    stat: "$2,000+",
    statLabel: "avg surprise bill",
  },
  {
    icon: <AlertTriangle size={20} />,
    iconColor: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.15)",
    tag: "Integration Regret",
    tagColor: "#8b5cf6",
    title: "2-7 days wasted on wrong model",
    desc: "Integrate Model A. Discover Model B is 40% cheaper. Rebuild from scratch. Each model has different APIs, error handling, and rate limits. Some devs abandon projects entirely.",
    stat: "2-7 days",
    statLabel: "avg rework time",
  },
];

export default function ProblemSection() {
  return (
    <Section id="problems" bg="#0b0f14">
      <Container>
        <div className="text-center mb-14">
          <SectionLabel>The Problem</SectionLabel>
          <SectionHeading>
            Stop{" "}
            <span style={{ background: "linear-gradient(135deg, #ef4444, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              expensive
            </span>{" "}
            mistakes<br />choosing LLMs
          </SectionHeading>
          <SectionSub>
            Benchmarks test "write a poem." You need to test YOUR production
            prompts — before you commit thousands of dollars and days of dev time.
          </SectionSub>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROBLEMS.map((p, i) => (
            <div key={i}
              className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 cursor-default"
              style={{ background: "#0e171e", border: `1px solid ${p.border}`, position: "relative", overflow: "hidden" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.4)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${p.iconColor}50, transparent)` }} />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: p.bg, color: p.iconColor }}>
                {p.icon}
              </div>
              <span className="self-start text-xs px-2.5 py-1 rounded-full" style={{ background: `${p.iconColor}15`, color: p.tagColor, fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 11 }}>
                {p.tag}
              </span>
              <h3 style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "white", lineHeight: 1.3 }}>
                {p.title}
              </h3>
              <p style={{ color: "#6b7280", fontFamily: "Quicksand, sans-serif", fontWeight: 500, fontSize: "0.875rem", lineHeight: 1.75, flexGrow: 1 }}>
                {p.desc}
              </p>
              <div className="pt-4 flex items-baseline gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: p.iconColor }}>{p.stat}</span>
                <span style={{ color: "#6b7280", fontFamily: "Quicksand, sans-serif", fontSize: "0.8rem" }}>{p.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-sm italic" style={{ color: "#4b5563", fontFamily: "Quicksand, sans-serif" }}>
          "Benchmarks show almost no correlation with genuine intelligence for real tasks."
          <span style={{ color: "#6b7280" }}> — ML engineers, r/LLMDevs</span>
        </p>
      </Container>
    </Section>
  );
}
