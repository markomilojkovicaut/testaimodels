"use client";
import { CheckCircle, TrendingUp, Shield, Zap } from "lucide-react";
import { Container, Section, SectionLabel, SectionHeading, SectionSub } from "./ui";

const FEATURES = [
  { icon: <CheckCircle size={17} />, color: "#10b981", title: "Real API calls", desc: "Not benchmarks. Not synthetic tests. We run your actual prompt through each model's real API." },
  { icon: <TrendingUp size={17} />, color: "#2981e2", title: "Scale cost projections", desc: "See exactly what you'll spend at 10K, 100K, and 1M queries per month. No more surprise bills." },
  { icon: <Shield size={17} />, color: "#f59e0b", title: "Cost transparency", desc: "Exact $ per query with token breakdown. Input tokens, output tokens, hidden costs — all visible." },
  { icon: <Zap size={17} />, color: "#8b5cf6", title: "Zero setup friction", desc: "No API keys. No $70+ minimum credit purchases. No CLI setup. Results in 30 seconds flat." },
];

const USE_CASES = [
  { label: "Code Generation",  w: "Claude",   wp: 57, r: "GPT-4o",   rp: 32, n: 247 },
  { label: "Customer Support", w: "ChatGPT",  wp: 50, r: "Claude",   rp: 35, n: 189 },
  { label: "Content Writing",  w: "ChatGPT",  wp: 70, r: "Claude",   rp: 22, n: 156 },
  { label: "Data Analysis",    w: "ChatGPT",  wp: 80, r: "Gemini",   rp: 15, n: 134 },
  { label: "Creative Writing", w: "Claude",   wp: 65, r: "ChatGPT",  rp: 25, n: 98  },
  { label: "API Integration",  w: "GPT-4o",   wp: 45, r: "Claude",   rp: 40, n: 87  },
];

export default function Features() {
  return (
    <>
      {/* Features + cost table */}
      <Section id="features" bg="#0b0f14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <SectionLabel>Why It Works</SectionLabel>
              <h2 className="mb-5" style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "white", lineHeight: 1.12, letterSpacing: "-0.025em" }}>
                Pick the right AI model.
                <br /><span style={{ color: "#9CA3AF", fontWeight: 500 }}>First. Every time.</span>
              </h2>
              <p className="mb-8" style={{ color: "#9CA3AF", fontFamily: "Quicksand, sans-serif", fontWeight: 500, fontSize: "0.975rem", lineHeight: 1.8 }}>
                Stop guessing. Stop reading Reddit for hours. Stop discovering problems after you've already integrated and received your first $2,000 API invoice.
              </p>
              <div className="flex flex-col gap-5">
                {FEATURES.map((f, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${f.color}15`, color: f.color }}>
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="mb-0.5" style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white" }}>{f.title}</h4>
                      <p style={{ color: "#6b7280", fontFamily: "Quicksand, sans-serif", fontSize: "0.875rem", lineHeight: 1.65 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: cost table */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "#0e171e", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}>
              <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem" }}>Scale Cost Projection</span>
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(41,129,226,0.1)", color: "#60a5fa", fontFamily: "Commissioner, sans-serif", fontWeight: 700 }}>Pro</span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-4 gap-2 mb-3 px-2">
                  {["Model","10K/mo","100K/mo","1M/mo"].map(h => (
                    <div key={h} style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 10, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</div>
                  ))}
                </div>
                {[
                  { m: "GPT-4o",      c: ["$45","$450","$4,500"], color: "#10a37f", best: false },
                  { m: "Claude",      c: ["$38","$380","$3,800"], color: "#c96442", best: false },
                  { m: "Gemini Pro",  c: ["$11","$110","$1,100"], color: "#4285f4", best: true  },
                  { m: "Grok",        c: ["$29","$290","$2,900"], color: "#9CA3AF", best: false },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 py-3 px-2 rounded-lg"
                    style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none", background: row.best ? "rgba(41,129,226,0.05)" : "transparent" }}>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: row.color }} />
                      <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: row.best ? 700 : 500, fontSize: 12, color: row.best ? "white" : "#9CA3AF", whiteSpace: "nowrap" }}>{row.m}</span>
                      {row.best && <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 9, color: "#10b981", background: "rgba(16,185,129,0.12)", padding: "1px 5px", borderRadius: 4 }}>BEST</span>}
                    </div>
                    {row.c.map((v, j) => (
                      <span key={j} style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 600, fontSize: 12, color: row.best ? "#10b981" : (i === 0 && j === 2 ? "#ef4444" : "#6b7280") }}>{v}</span>
                    ))}
                  </div>
                ))}
                <div className="mt-4 p-3 rounded-xl" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.14)" }}>
                  <p style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 12, color: "#10b981" }}>
                    Switch to Gemini Pro — Save $3,400/month at 1M queries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Use case leaderboard */}
      <Section bg="#0e171e">
        <Container>
          <div className="text-center mb-14">
            <SectionLabel>Real Data</SectionLabel>
            <SectionHeading>Which model wins for YOUR use case?</SectionHeading>
            <SectionSub>Community-driven results from real developer tests. Updated as more tests come in.</SectionSub>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USE_CASES.map((uc, i) => (
              <div key={i} className="p-5 rounded-xl transition-all duration-200 cursor-default"
                style={{ background: "#111820", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(41,129,226,0.2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}>
                <div className="flex items-center justify-between mb-4">
                  <h4 style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "white" }}>{uc.label}</h4>
                  <span style={{ color: "#4b5563", fontFamily: "Quicksand, sans-serif", fontSize: 12 }}>{uc.n} tests</span>
                </div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="shrink-0" style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 12, color: "#2981e2", width: 70 }}>{uc.w}</span>
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="h-full rounded-full" style={{ width: `${uc.wp}%`, background: "linear-gradient(90deg, #2981e2, #60a5fa)" }} />
                  </div>
                  <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 12, color: "#60a5fa" }}>{uc.wp}%</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="shrink-0" style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 600, fontSize: 12, color: "#6b7280", width: 70 }}>{uc.r}</span>
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="h-full rounded-full" style={{ width: `${uc.rp}%`, background: "rgba(156,163,175,0.25)" }} />
                  </div>
                  <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 600, fontSize: 12, color: "#6b7280" }}>{uc.rp}%</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-6" style={{ color: "#374151", fontFamily: "Quicksand, sans-serif", fontSize: 12 }}>
            Based on community tests. Data updates in real-time as more developers test.
          </p>
        </Container>
      </Section>
    </>
  );
}
