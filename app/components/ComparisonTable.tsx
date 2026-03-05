"use client";
"use client";
import { Check, X, AlertTriangle } from "lucide-react";

const ROWS = [
  {
    feature: "Test YOUR prompts",
    testai: { val: true, note: "Real API calls" },
    reddit: { val: false, note: "Anecdotes" },
    arena: { val: "partial", note: "Fixed tests only" },
    helicone: { val: "partial", note: "After integrating" },
  },
  {
    feature: "See real costs",
    testai: { val: true, note: "With projections" },
    reddit: { val: false, note: "No data" },
    arena: { val: false, note: "No cost data" },
    helicone: { val: "partial", note: "After spending" },
  },
  {
    feature: "Pre-deployment",
    testai: { val: true, note: "Test before commit" },
    reddit: { val: false, note: "Guess" },
    arena: { val: "partial", note: "Research only" },
    helicone: { val: false, note: "Monitor after" },
  },
  {
    feature: "No API keys needed",
    testai: { val: true, note: "" },
    reddit: { val: true, note: "" },
    arena: { val: true, note: "" },
    helicone: { val: false, note: "Requires setup" },
  },
  {
    feature: "Time to results",
    testai: { val: "30 seconds", isText: true },
    reddit: { val: "Hours reading", isText: true },
    arena: { val: "Varies", isText: true },
    helicone: { val: "After deploy", isText: true },
  },
  {
    feature: "Scale cost projections",
    testai: { val: true, note: "10K–1M queries" },
    reddit: { val: false, note: "" },
    arena: { val: false, note: "" },
    helicone: { val: "partial", note: "Usage only" },
  },
];

const COLS = ["Test AI Models", "Reddit Threads", "Chatbot Arena", "Helicone"];

function Cell({ data }: { data: { val: boolean | string; note?: string; isText?: boolean } }) {
  if (data.isText) {
    return (
      <td className="px-4 py-3.5 text-center">
        <span
          style={{
            fontFamily: "Commissioner, sans-serif",
            fontWeight: 600,
            fontSize: "0.8rem",
            color: "#9CA3AF",
          }}
        >
          {data.val as string}
        </span>
      </td>
    );
  }

  if (data.val === true) {
    return (
      <td className="px-4 py-3.5 text-center">
        <div className="flex flex-col items-center gap-0.5">
          <Check size={16} color="#10b981" strokeWidth={2.5} />
          {data.note && (
            <span
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "0.7rem",
                color: "#4b5563",
              }}
            >
              {data.note}
            </span>
          )}
        </div>
      </td>
    );
  }

  if (data.val === false) {
    return (
      <td className="px-4 py-3.5 text-center">
        <X size={16} color="#ef4444" strokeWidth={2.5} className="mx-auto" />
      </td>
    );
  }

  return (
    <td className="px-4 py-3.5 text-center">
      <div className="flex flex-col items-center gap-0.5">
        <AlertTriangle size={14} color="#f59e0b" />
        {data.note && (
          <span
            style={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "0.7rem",
              color: "#4b5563",
            }}
          >
            {data.note}
          </span>
        )}
      </div>
    </td>
  );
}

export default function ComparisonTable() {
  return (
    <section
      id="comparison"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0e171e" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(41,129,226,0.12), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{
              color: "#2981e2",
              fontFamily: "Commissioner, sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Comparison
          </span>
        </div>
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "Commissioner, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "white",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Choose the right model.
          <br />
          <span style={{ color: "#9CA3AF", fontWeight: 500 }}>
            Your terms.
          </span>
        </h2>
        <p
          className="text-center max-w-md mx-auto mb-12"
          style={{
            color: "#9CA3AF",
            fontFamily: "Quicksand, sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.7,
          }}
        >
          See how Test AI Models stacks up against the alternatives developers
          currently use.
        </p>

        {/* Table */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: "#111820" }}>
                  <th
                    className="px-4 py-4 text-left"
                    style={{
                      fontFamily: "Commissioner, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    Feature
                  </th>
                  {COLS.map((col, i) => (
                    <th
                      key={col}
                      className="px-4 py-4 text-center"
                      style={{
                        fontFamily: "Commissioner, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        color: i === 0 ? "#60a5fa" : "#6b7280",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                        background:
                          i === 0
                            ? "rgba(41,129,226,0.06)"
                            : "transparent",
                        borderLeft:
                          i === 0
                            ? "1px solid rgba(41,129,226,0.15)"
                            : "none",
                        borderRight:
                          i === 0
                            ? "1px solid rgba(41,129,226,0.15)"
                            : "none",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, rowI) => (
                  <tr
                    key={rowI}
                    style={{
                      background:
                        rowI % 2 === 0
                          ? "rgba(11,15,20,0.5)"
                          : "rgba(17,24,32,0.3)",
                    }}
                  >
                    <td
                      className="px-4 py-3.5"
                      style={{
                        fontFamily: "Quicksand, sans-serif",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "#9CA3AF",
                        borderBottom: "1px solid rgba(255,255,255,0.03)",
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      className="px-4 py-3.5 text-center"
                      style={{
                        background: "rgba(41,129,226,0.04)",
                        borderLeft: "1px solid rgba(41,129,226,0.1)",
                        borderRight: "1px solid rgba(41,129,226,0.1)",
                        borderBottom: "1px solid rgba(255,255,255,0.03)",
                      }}
                    >
                      <Cell data={row.testai} />
                    </td>
                    <td
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}
                    >
                      <Cell data={row.reddit} />
                    </td>
                    <td
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}
                    >
                      <Cell data={row.arena} />
                    </td>
                    <td
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}
                    >
                      <Cell data={row.helicone} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA below table */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm"
            style={{
              background: "#2981e2",
              color: "white",
              fontFamily: "Commissioner, sans-serif",
              fontWeight: 700,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1a6fd4";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 24px rgba(41,129,226,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#2981e2";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Start Testing Free — 50 Tests Included
          </a>
        </div>
      </div>
    </section>
  );
}
