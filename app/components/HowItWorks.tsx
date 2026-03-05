"use client";
import { FileText, Play, BarChart3, Code } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: <FileText size={20} />,
    title: "Paste your prompt",
    description:
      "Use your actual production prompt — not a generic test. The one you'll use in your real app.",
  },
  {
    number: "02",
    icon: <Play size={20} />,
    title: "Select models to test",
    description:
      "Pick 2–4 models from ChatGPT, Claude, Gemini, Grok, Mistral, Kimi and more. We handle the API calls.",
  },
  {
    number: "03",
    icon: <BarChart3 size={20} />,
    title: "See results in 30 seconds",
    description:
      "Quality, speed, and exact cost per query — side by side. Scale projections at 10K, 100K, 1M queries.",
  },
  {
    number: "04",
    icon: <Code size={20} />,
    title: "Integrate with confidence",
    description:
      "Get copy-paste code snippets in Node.js, Python, or cURL. No integration regret, no bill shock.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0e171e" }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(41,129,226,0.12), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="text-center mb-4">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{
              color: "#2981e2",
              fontFamily: "Commissioner, sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            How It Works
          </span>
        </div>

        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: "Commissioner, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "white",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            AI-powered testing and
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #2981e2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              evaluation platform
            </span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{
              color: "#9CA3AF",
              fontFamily: "Quicksand, sans-serif",
              fontWeight: 500,
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            From prompt to decision in under 30 seconds. No setup, no API
            keys, no minimum credit purchase.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col gap-4 p-6 rounded-2xl transition-all duration-300"
              style={{
                background: "#111820",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(41,129,226,0.2)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              {/* Connector line (desktop) */}
              {i < STEPS.length - 1 && (
                <div
                  className="absolute top-8 -right-3 w-6 h-px hidden lg:block"
                  style={{ background: "rgba(41,129,226,0.2)" }}
                />
              )}

              {/* Step number */}
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(41,129,226,0.1)",
                    color: "#2981e2",
                  }}
                >
                  {step.icon}
                </div>
                <span
                  style={{
                    fontFamily: "Commissioner, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.8rem",
                    color: "rgba(41,129,226,0.15)",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "white",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "#6b7280",
                  fontFamily: "Quicksand, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demo video placeholder */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "#111820",
            border: "1px solid rgba(255,255,255,0.06)",
            aspectRatio: "16/7",
          }}
        >
          {/* Center play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer transition-all duration-200"
                style={{
                  background: "rgba(41,129,226,0.15)",
                  border: "2px solid rgba(41,129,226,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(41,129,226,0.25)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(41,129,226,0.15)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "scale(1)";
                }}
              >
                <Play size={24} fill="#2981e2" color="#2981e2" />
              </div>
              <p
                style={{
                  color: "#9CA3AF",
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                Watch 30-second demo
              </p>
            </div>
          </div>

          {/* Decorative grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(41,129,226,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(41,129,226,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
