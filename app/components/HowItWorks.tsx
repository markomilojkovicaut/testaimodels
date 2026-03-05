"use client";
import { FileText, MousePointer, BarChart3, Code, Play } from "lucide-react";
import { Container, Section, SectionLabel, SectionHeading, SectionSub } from "./ui";

const STEPS = [
  {
    num: "01", icon: <FileText size={20} />,
    title: "Paste your prompt",
    desc: "Use your actual production prompt — not a generic test. The one you'll use in your real app.",
  },
  {
    num: "02", icon: <MousePointer size={20} />,
    title: "Select models to test",
    desc: "Pick 2-4 models from ChatGPT, Claude, Gemini, Grok, Mistral, and more. We handle the API calls.",
  },
  {
    num: "03", icon: <BarChart3 size={20} />,
    title: "See results in 30 seconds",
    desc: "Quality, speed, and exact cost per query — side by side. Scale projections at 10K, 100K, 1M queries.",
  },
  {
    num: "04", icon: <Code size={20} />,
    title: "Integrate with confidence",
    desc: "Get copy-paste code in Node.js, Python, or cURL. No integration regret, no bill shock.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" bg="#0e171e">
      <Container>
        <div className="text-center mb-14">
          <SectionLabel>How It Works</SectionLabel>
          <SectionHeading>
            AI-powered testing and<br />
            <span style={{ background: "linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #2981e2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              evaluation platform
            </span>
          </SectionHeading>
          <SectionSub>
            From prompt to decision in under 30 seconds. No setup, no API keys, no minimum credit purchase.
          </SectionSub>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {STEPS.map((step, i) => (
            <div key={i}
              className="relative p-6 rounded-2xl flex flex-col gap-4 transition-all duration-200"
              style={{ background: "#111820", border: "1px solid rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(41,129,226,0.2)"; el.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.06)"; el.style.transform = "translateY(0)"; }}>
              {/* Connector */}
              {i < STEPS.length - 1 && (
                <div className="absolute top-9 -right-3 w-6 h-px hidden lg:block" style={{ background: "linear-gradient(90deg, rgba(41,129,226,0.3), transparent)" }} />
              )}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(41,129,226,0.1)", color: "#2981e2" }}>
                  {step.icon}
                </div>
                <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: "2rem", color: "rgba(41,129,226,0.12)", lineHeight: 1 }}>
                  {step.num}
                </span>
              </div>
              <h3 style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: "1rem", color: "white" }}>
                {step.title}
              </h3>
              <p style={{ color: "#6b7280", fontFamily: "Quicksand, sans-serif", fontSize: "0.875rem", lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Demo video placeholder */}
        <div className="relative rounded-2xl overflow-hidden flex items-center justify-center"
          style={{ background: "#111820", border: "1px solid rgba(255,255,255,0.06)", minHeight: 280 }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "linear-gradient(rgba(41,129,226,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(41,129,226,0.025) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer transition-all duration-200"
              style={{ background: "rgba(41,129,226,0.12)", border: "2px solid rgba(41,129,226,0.25)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(41,129,226,0.22)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(41,129,226,0.12)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
              <Play size={22} fill="#2981e2" color="#2981e2" />
            </div>
            <p style={{ color: "#9CA3AF", fontFamily: "Commissioner, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>
              Watch 30-second demo
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
