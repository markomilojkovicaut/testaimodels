"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Zap, DollarSign, Clock } from "lucide-react";

const MODEL_LOGOS = [
  {
    name: "ChatGPT",
    color: "#10a37f",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387 2.019-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.411-.663zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
      </svg>
    ),
  },
  {
    name: "Claude",
    color: "#c96442",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-1.308-.097L1 12.587l.061-.524.524-.328 1.393.17 2.245.218 2.509.27 1.175.11h.315l.073-.128-.087-.192L8.88 11.66l-1.563-2.718-1.478-2.46-.806-1.345-.455-.926-.106-.485.267-.486.511-.158.718.243.38.352.7 1.138 1.066 1.965 1.224 2.23.79 1.466.376.79.173.255.137-.019.098-.21-.026-.46-.2-3.185-.2-1.747-.085-1.528.04-.997.061-.267.388-.337.827.049.534.461.644 1.029.62 2.12.376 1.515.28 1.466.164 1.126.085-.017.13-.131-.06-.426-1.054-2.784-.62-1.78-.306-.7-.036-.544.304-.437.619-.073.44.128.91.852.85 1.405.936 1.926.862 1.866.68 1.49.545 1.21.425.72.316.986-.073.595-.353.28-.523.012-.62-.243-1.296-.583-2.22-.814-2.036-.741-1.466-.425-.638-.122.024-.036.137.243.51.887 1.99 1.056 2.436.814 2.07.22.595.073.583-.193.607-.525.256-.947-.256-1.05-.948-1.576-1.72-2.146-2.412-1.29-1.332-1.1-1.064-.79-.73-.485-.607z"/>
      </svg>
    ),
  },
  {
    name: "Gemini",
    color: "#4285f4",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2c1.568 0 3.043.37 4.35 1.025L4.025 16.35A9.959 9.959 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 20c-1.568 0-3.043-.37-4.35-1.025l12.325-13.325A9.959 9.959 0 0 1 22 12c0 5.523-4.477 10-10 10z"/>
      </svg>
    ),
  },
  {
    name: "Grok",
    color: "#ffffff",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "Gemini Flash",
    color: "#8ab4f8",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    name: "Mistral",
    color: "#f97316",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="4" height="4" rx="0.5"/>
        <rect x="10" y="2" width="4" height="4" rx="0.5"/>
        <rect x="18" y="2" width="4" height="4" rx="0.5"/>
        <rect x="2" y="10" width="4" height="4" rx="0.5"/>
        <rect x="10" y="10" width="4" height="4" rx="0.5"/>
        <rect x="18" y="10" width="4" height="4" rx="0.5"/>
        <rect x="2" y="18" width="4" height="4" rx="0.5"/>
        <rect x="10" y="18" width="4" height="4" rx="0.5"/>
      </svg>
    ),
  },
];

const STATS = [
  { icon: <Zap size={14} />, value: "30 sec", label: "to results" },
  { icon: <DollarSign size={14} />, value: "$0", label: "API keys needed" },
  { icon: <Clock size={14} />, value: "7+", label: "AI models" },
];

// Mock comparison UI card
function ComparisonCard({
  model,
  color,
  cost,
  time,
  preview,
  winner = false,
}: {
  model: string;
  color: string;
  cost: string;
  time: string;
  preview: string;
  winner?: boolean;
}) {
  return (
    <div
      className="rounded-xl p-3 flex flex-col gap-2 relative overflow-hidden"
      style={{
        background: winner
          ? "linear-gradient(135deg, rgba(41,129,226,0.12), rgba(41,129,226,0.04))"
          : "rgba(17,24,32,0.9)",
        border: winner
          ? "1px solid rgba(41,129,226,0.3)"
          : "1px solid rgba(255,255,255,0.06)",
        minWidth: 180,
      }}
    >
      {winner && (
        <div
          className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(41,129,226,0.2)",
            border: "1px solid rgba(41,129,226,0.4)",
            color: "#60a5fa",
            fontFamily: "Commissioner, sans-serif",
            fontWeight: 700,
            fontSize: 10,
          }}
        >
          WINNER
        </div>
      )}
      <div className="flex items-center gap-2">
        <div
          className="w-5 h-5 rounded flex items-center justify-center text-xs"
          style={{ background: `${color}20`, color }}
        >
          ●
        </div>
        <span
          className="text-xs font-semibold text-white"
          style={{ fontFamily: "Commissioner, sans-serif" }}
        >
          {model}
        </span>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
        {preview}
      </p>
      <div className="flex items-center gap-3 pt-1">
        <span className="text-xs" style={{ color: "#9CA3AF" }}>
          <span style={{ color: "#10b981", fontWeight: 700 }}>{cost}</span>
        </span>
        <span className="text-xs" style={{ color: "#9CA3AF" }}>
          <span style={{ color: "#60a5fa", fontWeight: 700 }}>{time}</span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden"
      style={{ background: "#0b0f14" }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute animate-pulse-glow pointer-events-none"
        style={{
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 500,
          background:
            "radial-gradient(ellipse at center, rgba(41,129,226,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "10%",
          width: 300,
          height: 300,
          background:
            "radial-gradient(ellipse at center, rgba(41,129,226,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          right: "10%",
          width: 250,
          height: 250,
          background:
            "radial-gradient(ellipse at center, rgba(96,165,250,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(41,129,226,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(41,129,226,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center top, black 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top label */}
        <div className="flex justify-center mb-6 animate-fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs"
            style={{
              background: "rgba(41,129,226,0.08)",
              border: "1px solid rgba(41,129,226,0.2)",
              color: "#60a5fa",
              fontFamily: "Commissioner, sans-serif",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#2981e2" }}
            />
            PRE-DEPLOYMENT AI MODEL TESTING
          </div>
        </div>

        {/* Main headline */}
        <h1
          className="text-center mb-6 animate-fade-up delay-100"
          style={{
            fontFamily: "Commissioner, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "white",
          }}
        >
          Choose the{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #93c5fd 40%, #2981e2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            best AI model
          </span>
          <br />
          for your app in{" "}
          <span style={{ color: "#2981e2" }}>30 seconds</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-center max-w-2xl mx-auto mb-8 animate-fade-up delay-200"
          style={{
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
            color: "#9CA3AF",
            lineHeight: 1.7,
          }}
        >
          Test ChatGPT, Claude, Gemini, and Grok with YOUR actual prompts.
          See quality, speed, and exact costs side-by-side — before you
          integrate. Before you commit.{" "}
          <span style={{ color: "white", fontWeight: 600 }}>
            No API keys required.
          </span>
        </p>

        {/* Model logos row */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap animate-fade-up delay-300">
          {MODEL_LOGOS.map((model) => (
            <div
              key={model.name}
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
              style={{
                background: "rgba(17,24,32,0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
                cursor: "default",
              }}
              title={model.name}
            >
              <span style={{ color: model.color }}>{model.icon}</span>
              <span
                className="text-xs hidden sm:block"
                style={{
                  color: "#9CA3AF",
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 600,
                }}
              >
                {model.name}
              </span>
            </div>
          ))}
          <div
            className="px-3 py-2 rounded-lg"
            style={{
              background: "rgba(17,24,32,0.8)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span
              className="text-xs"
              style={{
                color: "#6b7280",
                fontFamily: "Commissioner, sans-serif",
                fontWeight: 600,
              }}
            >
              +more
            </span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up delay-400">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 group"
            style={{
              background: "#2981e2",
              color: "white",
              fontFamily: "Commissioner, sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#1a6fd4";
              el.style.boxShadow = "0 0 32px rgba(41,129,226,0.5)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "#2981e2";
              el.style.boxShadow = "none";
              el.style.transform = "translateY(0)";
            }}
          >
            Test Your Prompt Free
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200"
            style={{
              background: "transparent",
              color: "#9CA3AF",
              fontFamily: "Commissioner, sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.color = "white";
              el.style.borderColor = "rgba(41,129,226,0.3)";
              el.style.background = "rgba(41,129,226,0.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.color = "#9CA3AF";
              el.style.borderColor = "rgba(255,255,255,0.08)";
              el.style.background = "transparent";
            }}
          >
            Watch Demo
          </a>
        </div>

        {/* Trust line */}
        <div className="flex items-center justify-center gap-6 mb-16 animate-fade-up delay-500">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-1.5"
              style={{ color: "#6b7280" }}
            >
              <span style={{ color: "#9CA3AF" }}>{stat.icon}</span>
              <span
                className="text-xs"
                style={{
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs"
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  color: "#6b7280",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* App UI Mockup */}
        <div className="relative animate-fade-up delay-600 animate-float">
          {/* Outer glow */}
          <div
            className="absolute -inset-4 rounded-2xl pointer-events-none animate-pulse-glow"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(41,129,226,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Browser chrome */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#0e171e",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(41,129,226,0.1)",
            }}
          >
            {/* Browser bar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{
                background: "#0b0f14",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex gap-1.5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#ff5f57" }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#febc2e" }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "#28c840" }}
                />
              </div>
              <div
                className="flex-1 mx-4 px-3 py-1 rounded text-xs text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "#6b7280",
                  fontFamily: "Quicksand, sans-serif",
                  maxWidth: 200,
                  margin: "0 auto",
                }}
              >
                testaimodels.com
              </div>
            </div>

            {/* App content */}
            <div className="p-5">
              {/* Prompt input area */}
              <div
                className="rounded-xl p-4 mb-4"
                style={{
                  background: "#111820",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div
                      className="text-xs mb-2"
                      style={{
                        color: "#9CA3AF",
                        fontFamily: "Commissioner, sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontSize: 10,
                      }}
                    >
                      Your Prompt
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        color: "#d1d5db",
                        fontFamily: "Quicksand, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      Write a refund policy email for a frustrated customer
                      who received the wrong item...
                    </p>
                  </div>
                  <button
                    className="px-4 py-2 rounded-lg text-xs font-bold shrink-0"
                    style={{
                      background: "#2981e2",
                      color: "white",
                      fontFamily: "Commissioner, sans-serif",
                    }}
                  >
                    Test All
                  </button>
                </div>
                {/* Model selector */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {["GPT-4o", "Claude", "Gemini", "Grok"].map(
                    (m, i) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 rounded-md text-xs"
                        style={{
                          background:
                            i < 3
                              ? "rgba(41,129,226,0.12)"
                              : "rgba(255,255,255,0.04)",
                          border:
                            i < 3
                              ? "1px solid rgba(41,129,226,0.25)"
                              : "1px solid rgba(255,255,255,0.06)",
                          color: i < 3 ? "#60a5fa" : "#6b7280",
                          fontFamily: "Commissioner, sans-serif",
                          fontWeight: 700,
                        }}
                      >
                        {m}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Comparison results */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <ComparisonCard
                  model="ChatGPT GPT-4o"
                  color="#10a37f"
                  cost="$0.0045"
                  time="2.3s"
                  preview="I sincerely apologize for the inconvenience. We've shipped the correct item with priority..."
                />
                <ComparisonCard
                  model="Claude Sonnet"
                  color="#c96442"
                  cost="$0.0038"
                  time="1.8s"
                  preview="Thank you for reaching out. I completely understand your frustration and want to make this right..."
                  winner
                />
                <ComparisonCard
                  model="Gemini 2.5 Pro"
                  color="#4285f4"
                  cost="$0.0011"
                  time="2.1s"
                  preview="We apologize for this error. Your replacement is being expedited at no cost to you..."
                />
              </div>

              {/* Cost projection bar */}
              <div
                className="mt-4 p-3 rounded-lg flex items-center justify-between"
                style={{
                  background: "rgba(16,185,129,0.06)",
                  border: "1px solid rgba(16,185,129,0.12)",
                }}
              >
                <span
                  className="text-xs"
                  style={{ color: "#9CA3AF", fontFamily: "Quicksand, sans-serif" }}
                >
                  At 10,000 emails/month:
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-xs" style={{ color: "#9CA3AF" }}>
                    GPT-4o{" "}
                    <span style={{ color: "#ef4444", fontWeight: 700 }}>
                      $45
                    </span>
                  </span>
                  <span className="text-xs" style={{ color: "#9CA3AF" }}>
                    Gemini{" "}
                    <span style={{ color: "#10b981", fontWeight: 700 }}>
                      $11
                    </span>
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(16,185,129,0.12)",
                      color: "#10b981",
                      fontFamily: "Commissioner, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Save $34/mo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div
            className="absolute -left-6 top-1/3 hidden lg:block animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div
              className="px-3 py-2 rounded-lg text-xs whitespace-nowrap"
              style={{
                background: "rgba(14,23,30,0.95)",
                border: "1px solid rgba(41,129,226,0.2)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  color: "#10b981",
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 800,
                  fontSize: 16,
                }}
              >
                75%
              </div>
              <div style={{ color: "#9CA3AF", fontFamily: "Quicksand, sans-serif" }}>
                cheaper on Gemini
              </div>
            </div>
          </div>

          <div
            className="absolute -right-6 top-1/4 hidden lg:block animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div
              className="px-3 py-2 rounded-lg text-xs whitespace-nowrap"
              style={{
                background: "rgba(14,23,30,0.95)",
                border: "1px solid rgba(41,129,226,0.2)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  color: "#60a5fa",
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 800,
                  fontSize: 16,
                }}
              >
                30s
              </div>
              <div style={{ color: "#9CA3AF", fontFamily: "Quicksand, sans-serif" }}>
                vs 5 hours manual
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
