"use client";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try it before you commit",
    cta: "Start Free",
    ctaStyle: "secondary",
    features: [
      "50 tests included",
      "All 7+ models",
      "Cost projections",
      "Results saved 3 days",
      "Side-by-side comparison",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For serious developers",
    cta: "Start Pro",
    ctaStyle: "primary",
    badge: "Most Popular",
    features: [
      "500 tests per month",
      "All 7+ models",
      "Cost projections",
      "Results saved forever",
      "Integration code snippets",
      "Priority support",
      "Export results",
    ],
    highlight: true,
  },
  {
    name: "Professional",
    price: "$19",
    period: "per month",
    description: "For teams and consultants",
    cta: "Start Professional",
    ctaStyle: "secondary",
    features: [
      "1,000 tests per month",
      "All 7+ models",
      "Advanced projections",
      "Results saved forever",
      "Integration code snippets",
      "Priority support",
      "Export results",
      "Team collaboration",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
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

      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 400,
          background:
            "radial-gradient(ellipse at center, rgba(41,129,226,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-4">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{
              color: "#2981e2",
              fontFamily: "Commissioner, sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Pricing
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
          Why use Test AI Models?
        </h2>
        <p
          className="text-center max-w-lg mx-auto mb-4"
          style={{
            color: "#9CA3AF",
            fontFamily: "Quicksand, sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.7,
          }}
        >
          One prevented $800 integration mistake pays for itself{" "}
          <strong style={{ color: "white" }}>53× over</strong> on the Free
          plan. On Pro, it pays for itself{" "}
          <strong style={{ color: "white" }}>88× over</strong>.
        </p>

        {/* Value comparison */}
        <div
          className="max-w-2xl mx-auto mb-12 p-4 rounded-xl"
          style={{
            background: "rgba(41,129,226,0.06)",
            border: "1px solid rgba(41,129,226,0.15)",
          }}
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              {
                label: "API credits you'd need",
                value: "$70+",
                sub: "just to access all 7 providers",
                color: "#ef4444",
              },
              {
                label: "Developer time to setup",
                value: "24 hrs",
                sub: "$1,800+ at $75/hr",
                color: "#f59e0b",
              },
              {
                label: "Test AI Models Pro",
                value: "$9",
                sub: "per month, all models",
                color: "#10b981",
              },
            ].map((item, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "Commissioner, sans-serif",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    color: item.color,
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontFamily: "Commissioner, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: "white",
                    marginTop: 4,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "0.7rem",
                    color: "#6b7280",
                    marginTop: 2,
                  }}
                >
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300"
              style={{
                background: plan.highlight
                  ? "linear-gradient(135deg, rgba(41,129,226,0.15) 0%, rgba(41,129,226,0.05) 100%)"
                  : "#0e171e",
                border: plan.highlight
                  ? "1px solid rgba(41,129,226,0.35)"
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: plan.highlight
                  ? "0 0 40px rgba(41,129,226,0.15)"
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (!plan.highlight) {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(41,129,226,0.2)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-4px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.highlight) {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs"
                  style={{
                    background: "#2981e2",
                    color: "white",
                    fontFamily: "Commissioner, sans-serif",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                <div
                  className="mb-1"
                  style={{
                    fontFamily: "Commissioner, sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: plan.highlight ? "#60a5fa" : "#9CA3AF",
                  }}
                >
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span
                    style={{
                      fontFamily: "Commissioner, sans-serif",
                      fontWeight: 800,
                      fontSize: "2.4rem",
                      color: "white",
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      color: "#6b7280",
                      fontFamily: "Quicksand, sans-serif",
                      fontSize: "0.85rem",
                    }}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className="mt-2"
                  style={{
                    color: "#6b7280",
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "0.85rem",
                  }}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-3 flex-grow">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <Check
                      size={14}
                      color={plan.highlight ? "#2981e2" : "#10b981"}
                      strokeWidth={2.5}
                      className="shrink-0"
                    />
                    <span
                      style={{
                        fontFamily: "Quicksand, sans-serif",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "#9CA3AF",
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#"
                className="block text-center py-3 rounded-xl text-sm transition-all duration-200"
                style={{
                  background:
                    plan.ctaStyle === "primary" ? "#2981e2" : "transparent",
                  color:
                    plan.ctaStyle === "primary" ? "white" : "#9CA3AF",
                  border:
                    plan.ctaStyle === "primary"
                      ? "none"
                      : "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 700,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.ctaStyle === "primary") {
                    el.style.background = "#1a6fd4";
                    el.style.boxShadow = "0 0 20px rgba(41,129,226,0.4)";
                  } else {
                    el.style.color = "white";
                    el.style.borderColor = "rgba(41,129,226,0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.ctaStyle === "primary") {
                    el.style.background = "#2981e2";
                    el.style.boxShadow = "none";
                  } else {
                    el.style.color = "#9CA3AF";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                  }
                }}
              >
                {plan.cta}
              </a>
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
          All prices in USD. Excl. applicable taxes. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
