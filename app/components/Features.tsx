"use client";
import { CheckCircle, TrendingUp, Shield, Layers } from "lucide-react";

const FEATURES = [
  {
    icon: <CheckCircle size={18} />,
    title: "Real API calls",
    description:
      "Not benchmarks. Not synthetic tests. We run your actual prompt through each model's real API.",
    color: "#10b981",
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Scale cost projections",
    description:
      "See exactly what you'll spend at 10K, 100K, and 1M queries per month. No more surprise bills.",
    color: "#2981e2",
  },
  {
    icon: <Shield size={18} />,
    title: "Cost transparency",
    description:
      "Exact $ per query with token breakdown. Input tokens, output tokens, hidden costs — all visible.",
    color: "#f59e0b",
  },
  {
    icon: <Layers size={18} />,
    title: "Zero setup friction",
    description:
      "No API keys. No $70+ minimum credit purchases. No CLI setup. Results in 30 seconds flat.",
    color: "#8b5cf6",
  },
];

const USE_CASES = [
  { label: "Code Generation", winner: "Claude", pct: 57, second: "GPT-4o", pct2: 32, tests: 247 },
  { label: "Customer Support", winner: "ChatGPT", pct: 50, second: "Claude", pct2: 35, tests: 189 },
  { label: "Content Writing", winner: "ChatGPT", pct: 70, second: "Claude", pct2: 22, tests: 156 },
  { label: "Data Analysis", winner: "ChatGPT", pct: 80, second: "Gemini", pct2: 15, tests: 134 },
  { label: "Creative Writing", winner: "Claude", pct: 65, second: "ChatGPT", pct2: 25, tests: 98 },
  { label: "API Integration", winner: "GPT-4o", pct: 45, second: "Claude", pct2: 40, tests: 87 },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0b0f14" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(41,129,226,0.12), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: copy */}
          <div>
            <span
              className="text-xs font-bold tracking-widest uppercase mb-4 block"
              style={{
                color: "#2981e2",
                fontFamily: "Commissioner, sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              Why It Works
            </span>
            <h2
              className="mb-6"
              style={{
                fontFamily: "Commissioner, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                color: "white",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Pick the right AI model.
              <br />
              <span style={{ color: "#9CA3AF", fontWeight: 500 }}>
                First. Every time.
              </span>
            </h2>
            <p
              className="mb-8"
              style={{
                color: "#9CA3AF",
                fontFamily: "Quicksand, sans-serif",
                fontWeight: 500,
                fontSize: "0.95rem",
                lineHeight: 1.8,
              }}
            >
              Stop guessing. Stop reading Reddit threads for hours. Stop
              discovering problems after you've already integrated and billed
              your first $2,000 API invoice.
            </p>

            <div className="flex flex-col gap-4">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: `${f.color}15`,
                      color: f.color,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4
                      className="mb-0.5"
                      style={{
                        fontFamily: "Commissioner, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "white",
                      }}
                    >
                      {f.title}
                    </h4>
                    <p
                      style={{
                        color: "#6b7280",
                        fontFamily: "Quicksand, sans-serif",
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: mock feature UI */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#0e171e",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              <span
                style={{
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 700,
                  color: "white",
                  fontSize: "0.9rem",
                }}
              >
                Scale Cost Projection
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{
                  background: "rgba(41,129,226,0.1)",
                  color: "#60a5fa",
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 700,
                }}
              >
                Pro
              </span>
            </div>

            {/* Cost table */}
            <div className="p-5">
              <div
                className="grid grid-cols-4 gap-2 mb-2"
                style={{ fontFamily: "Commissioner, sans-serif" }}
              >
                {["Model", "10K/mo", "100K/mo", "1M/mo"].map((h) => (
                  <div
                    key={h}
                    className="text-xs"
                    style={{
                      color: "#6b7280",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontSize: 10,
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>
              {[
                { model: "GPT-4o", costs: ["$45", "$450", "$4,500"], color: "#10a37f" },
                { model: "Claude", costs: ["$38", "$380", "$3,800"], color: "#c96442" },
                {
                  model: "Gemini Pro",
                  costs: ["$11", "$110", "$1,100"],
                  color: "#4285f4",
                  best: true,
                },
                { model: "Grok", costs: ["$29", "$290", "$2,900"], color: "#9CA3AF" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-4 gap-2 py-3 rounded-lg px-2 -mx-2"
                  style={{
                    borderBottom:
                      i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    background: row.best
                      ? "rgba(41,129,226,0.05)"
                      : "transparent",
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: row.color }}
                    />
                    <span
                      className="text-xs"
                      style={{
                        color: row.best ? "white" : "#9CA3AF",
                        fontFamily: "Commissioner, sans-serif",
                        fontWeight: row.best ? 700 : 500,
                      }}
                    >
                      {row.model}
                    </span>
                    {row.best && (
                      <span
                        className="text-xs px-1.5 py-0.5 rounded"
                        style={{
                          background: "rgba(16,185,129,0.15)",
                          color: "#10b981",
                          fontFamily: "Commissioner, sans-serif",
                          fontWeight: 700,
                          fontSize: 9,
                        }}
                      >
                        BEST
                      </span>
                    )}
                  </div>
                  {row.costs.map((cost, j) => (
                    <span
                      key={j}
                      className="text-xs"
                      style={{
                        color:
                          row.best
                            ? "#10b981"
                            : i === 0 && j === 2
                            ? "#ef4444"
                            : "#6b7280",
                        fontFamily: "Commissioner, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {cost}
                    </span>
                  ))}
                </div>
              ))}

              {/* Savings highlight */}
              <div
                className="mt-4 p-3 rounded-xl"
                style={{
                  background: "rgba(16,185,129,0.07)",
                  border: "1px solid rgba(16,185,129,0.15)",
                }}
              >
                <p
                  className="text-xs"
                  style={{
                    color: "#10b981",
                    fontFamily: "Commissioner, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  💡 Switch to Gemini Pro → Save $3,400/month at 1M queries
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Use case leaderboard */}
        <div>
          <div className="text-center mb-4">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{
                color: "#2981e2",
                fontFamily: "Commissioner, sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              Real Data
            </span>
          </div>
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "Commissioner, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              color: "white",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Which model wins for YOUR use case?
          </h2>
          <p
            className="text-center max-w-md mx-auto mb-12"
            style={{
              color: "#9CA3AF",
              fontFamily: "Quicksand, sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}
          >
            Community-driven results from real developer tests. Updated as more
            tests come in.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USE_CASES.map((uc, i) => (
              <div
                key={i}
                className="p-5 rounded-xl transition-all duration-200"
                style={{
                  background: "#0e171e",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(41,129,226,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.06)";
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4
                    style={{
                      fontFamily: "Commissioner, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "white",
                    }}
                  >
                    {uc.label}
                  </h4>
                  <span
                    className="text-xs"
                    style={{
                      color: "#6b7280",
                      fontFamily: "Quicksand, sans-serif",
                    }}
                  >
                    {uc.tests} tests
                  </span>
                </div>

                {/* Winner bar */}
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs shrink-0"
                    style={{
                      fontFamily: "Commissioner, sans-serif",
                      fontWeight: 700,
                      color: "#2981e2",
                      width: 72,
                    }}
                  >
                    {uc.winner}
                  </span>
                  <div
                    className="flex-1 h-1.5 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${uc.pct}%`,
                        background:
                          "linear-gradient(90deg, #2981e2, #60a5fa)",
                      }}
                    />
                  </div>
                  <span
                    className="text-xs shrink-0"
                    style={{
                      fontFamily: "Commissioner, sans-serif",
                      fontWeight: 700,
                      color: "#60a5fa",
                    }}
                  >
                    {uc.pct}%
                  </span>
                </div>

                {/* Runner up */}
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs shrink-0"
                    style={{
                      fontFamily: "Commissioner, sans-serif",
                      fontWeight: 600,
                      color: "#6b7280",
                      width: 72,
                    }}
                  >
                    {uc.second}
                  </span>
                  <div
                    className="flex-1 h-1.5 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${uc.pct2}%`,
                        background: "rgba(156,163,175,0.3)",
                      }}
                    />
                  </div>
                  <span
                    className="text-xs shrink-0"
                    style={{
                      fontFamily: "Commissioner, sans-serif",
                      fontWeight: 600,
                      color: "#6b7280",
                    }}
                  >
                    {uc.pct2}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center mt-6 text-xs"
            style={{
              color: "#4b5563",
              fontFamily: "Quicksand, sans-serif",
            }}
          >
            Based on community tests. Data updates in real-time as more developers test.
          </p>
        </div>
      </div>
    </section>
  );
}
