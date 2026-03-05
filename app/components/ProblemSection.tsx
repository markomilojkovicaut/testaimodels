"use client";
import { AlertCircle, Clock, CreditCard } from "lucide-react";

const PROBLEMS = [
  {
    icon: <Clock size={20} />,
    iconColor: "#f59e0b",
    iconBg: "rgba(245,158,11,0.1)",
    borderColor: "rgba(245,158,11,0.15)",
    tag: "Decision Paralysis",
    tagColor: "#f59e0b",
    title: "Hours lost on Reddit threads",
    description:
      "Developers spend 5-10 hours/week reading ChatGPT vs Claude debates. Still unsure which model works for their actual use case. 25-30% of work time lost switching tools.",
    stat: "5–10 hrs/week",
    statLabel: "wasted comparing",
  },
  {
    icon: <CreditCard size={20} />,
    iconColor: "#ef4444",
    iconBg: "rgba(239,68,68,0.1)",
    borderColor: "rgba(239,68,68,0.15)",
    tag: "Bill Shock",
    tagColor: "#ef4444",
    title: "$2,000+ unexpected API bills",
    description:
      "Student's leaked API key: $55,444 overnight. Hidden reasoning tokens in o1-pro: $600 actual vs $3 visible. Average unexpected bill: $2,000. Some incidents hit $120K.",
    stat: "$2,000+",
    statLabel: "avg surprise bill",
  },
  {
    icon: <AlertCircle size={20} />,
    iconColor: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.1)",
    borderColor: "rgba(139,92,246,0.15)",
    tag: "Integration Regret",
    tagColor: "#8b5cf6",
    title: "2–7 days wasted on wrong model",
    description:
      "Integrate Model A. Discover Model B is 40% cheaper. Rebuild from scratch. Some developers abandon projects entirely. Each model has different APIs, error handling, rate limits.",
    stat: "2–7 days",
    statLabel: "average rework time",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problems"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0b0f14" }}
    >
      {/* Subtle separator from hero */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(41,129,226,0.15), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-4">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{
              color: "#2981e2",
              fontFamily: "Commissioner, sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            The Problem
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-4">
          <h2
            className="inline-block"
            style={{
              fontFamily: "Commissioner, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "white",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Stop{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              expensive
            </span>{" "}
            mistakes
            <br />
            choosing LLMs
          </h2>
        </div>

        <p
          className="text-center max-w-xl mx-auto mb-16"
          style={{
            color: "#9CA3AF",
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: 1.7,
          }}
        >
          Benchmarks test "write a poem." You need to test YOUR production
          prompts — before you commit thousands of dollars and days of
          development time.
        </p>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-4 group transition-all duration-300"
              style={{
                background: "#0e171e",
                border: `1px solid ${problem.borderColor}`,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 20px 48px rgba(0,0,0,0.4), 0 0 0 1px ${problem.borderColor}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Subtle top glow */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${problem.iconColor}40, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: problem.iconBg,
                  color: problem.iconColor,
                }}
              >
                {problem.icon}
              </div>

              {/* Tag */}
              <span
                className="inline-block text-xs px-2.5 py-1 rounded-full self-start"
                style={{
                  background: `${problem.iconColor}15`,
                  color: problem.tagColor,
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.05em",
                }}
              >
                {problem.tag}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "white",
                  lineHeight: 1.3,
                }}
              >
                {problem.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#6b7280",
                  fontFamily: "Quicksand, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  flexGrow: 1,
                }}
              >
                {problem.description}
              </p>

              {/* Stat */}
              <div
                className="pt-4 border-t flex items-baseline gap-2"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <span
                  style={{
                    fontFamily: "Commissioner, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    color: problem.iconColor,
                  }}
                >
                  {problem.stat}
                </span>
                <span
                  style={{
                    color: "#6b7280",
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "0.8rem",
                  }}
                >
                  {problem.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <p
            className="text-sm italic"
            style={{
              color: "#6b7280",
              fontFamily: "Quicksand, sans-serif",
              fontWeight: 500,
            }}
          >
            "Benchmarks show almost no correlation with genuine intelligence
            for real tasks." —{" "}
            <span style={{ color: "#9CA3AF" }}>Multiple ML engineers, r/LLMDevs</span>
          </p>
        </div>
      </div>
    </section>
  );
}
