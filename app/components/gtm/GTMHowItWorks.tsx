"use client";
import { Download, Terminal, FileOutput } from "lucide-react";
import { Container, Section, SectionLabel, SectionHeading, SectionSub } from "../ui";

const STEPS = [
  {
    icon: <Download size={22} />,
    step: "01",
    title: "Install the skills",
    color: "#2981e2",
    desc: "Clone the playbook repo and run the install script. All 10 skills copy into your project's .claude/skills/ directory in seconds.",
    code: "git clone github.com/Othmane-Khadri/gtm-engineer-playbook\ncd your-project && bash install.sh",
  },
  {
    icon: <Terminal size={22} />,
    step: "02",
    title: "Run skills in Claude Code",
    color: "#10b981",
    desc: "Type natural language or use the slash command. Skills read from your docs/ directory and chain output automatically.",
    code: "/build-my-icp\n/scan-signals \"Acme Corp, Notion, Linear\"\n/score-leads leads.csv",
  },
  {
    icon: <FileOutput size={22} />,
    step: "03",
    title: "Get structured output",
    color: "#a78bfa",
    desc: "Every skill writes a markdown file to your docs/ directory. CRM-ready tables, outreach sequences, battlecards — all there.",
    code: "docs/\n├── icp.md\n├── signals/acme-corp.md\n├── pipeline/scored-leads.md\n└── sequences/funding-trigger.md",
  },
];

export default function GTMHowItWorks() {
  return (
    <Section id="how-it-works" bg="#080c10">
      <Container>
        <div className="text-center mb-14">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <SectionHeading>Up and running in 3 steps</SectionHeading>
          <SectionSub maxWidth={500}>
            Install once. Run anytime. Every skill writes its output to your
            project&apos;s docs/ directory for full traceability.
          </SectionSub>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s) => {
            const rgb = hexToRgb(s.color);
            return (
              <div key={s.step} className="flex flex-col gap-4">
                {/* Icon + step */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `rgba(${rgb},0.1)`, color: s.color }}
                  >
                    {s.icon}
                  </div>
                  <span
                    style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: 13, color: s.color, letterSpacing: "0.1em" }}
                  >
                    STEP {s.step}
                  </span>
                </div>

                <h3 style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 18, color: "white" }}>
                  {s.title}
                </h3>

                <p style={{ fontFamily: "Quicksand, sans-serif", fontSize: 14, color: "#9CA3AF", lineHeight: 1.7 }}>
                  {s.desc}
                </p>

                {/* Code block */}
                <div
                  className="rounded-xl p-4 mt-auto"
                  style={{ background: "#0b0f14", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <pre
                    style={{
                      fontFamily: "monospace",
                      fontSize: 12,
                      color: "#d1d5db",
                      lineHeight: 1.7,
                      margin: 0,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                    }}
                  >
                    {s.code.split("\n").map((line, i) => (
                      <div key={i}>
                        {line.startsWith("/") || line.startsWith("git") || line.startsWith("cd") || line.startsWith("bash") ? (
                          <>
                            <span style={{ color: s.color }}>❯ </span>
                            <span style={{ color: "#e5e7eb" }}>{line}</span>
                          </>
                        ) : line.startsWith("docs/") || line.startsWith("├") || line.startsWith("└") || line.startsWith("│") ? (
                          <span style={{ color: "#6b7280" }}>{line}</span>
                        ) : (
                          <span style={{ color: "#9CA3AF" }}>{line}</span>
                        )}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prerequisites note */}
        <div
          className="mt-12 mx-auto max-w-xl rounded-xl px-6 py-4 text-center"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p style={{ fontFamily: "Quicksand, sans-serif", fontSize: 13, color: "#6b7280", lineHeight: 1.7 }}>
            <strong style={{ color: "#9CA3AF" }}>Prerequisites:</strong>{" "}
            Claude Code with WebSearch access. Optional: HubSpot or Notion MCP server for deeper CRM + docs integration.
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
