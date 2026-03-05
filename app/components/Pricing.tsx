"use client";
import { Check } from "lucide-react";
import { Container, Section, SectionLabel, SectionHeading, SectionSub } from "./ui";

const PLANS = [
  {
    name: "Free", price: "$0", period: "forever",
    desc: "Try it before you commit", cta: "Start Free", primary: false,
    features: ["50 tests included","All 7+ models","Cost projections","Results saved 3 days","Side-by-side comparison"],
  },
  {
    name: "Pro", price: "$9", period: "per month",
    desc: "For serious developers", cta: "Start Pro", primary: true, badge: "Most Popular",
    features: ["500 tests per month","All 7+ models","Cost projections","Results saved forever","Integration code snippets","Priority support","Export results"],
  },
  {
    name: "Professional", price: "$19", period: "per month",
    desc: "For teams and consultants", cta: "Start Professional", primary: false,
    features: ["1,000 tests per month","All 7+ models","Advanced projections","Results saved forever","Integration code snippets","Priority support","Export results","Team collaboration"],
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" bg="#0b0f14">
      {/* Subtle center glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(41,129,226,0.07) 0%, transparent 70%)" }} />

      <Container className="relative">
        <div className="text-center mb-10">
          <SectionLabel>Pricing</SectionLabel>
          <SectionHeading>Why use Test AI Models?</SectionHeading>
          <SectionSub maxWidth={560}>
            One prevented $800 integration mistake pays for itself{" "}
            <strong style={{ color: "white" }}>53× over</strong> on Free.
            On Pro, it pays for itself <strong style={{ color: "white" }}>88× over</strong>.
          </SectionSub>
        </div>

        {/* Value strip */}
        <div className="max-w-2xl mx-auto mb-12 p-5 rounded-2xl" style={{ background: "rgba(41,129,226,0.06)", border: "1px solid rgba(41,129,226,0.14)" }}>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { val: "$70+",  label: "API credits you need",     sub: "to access all 7 providers", color: "#ef4444" },
              { val: "24 hrs",label: "Developer time to setup",  sub: "$1,800+ at $75/hr",          color: "#f59e0b" },
              { val: "$9",    label: "Test AI Models Pro",       sub: "per month, all models",      color: "#10b981" },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: item.color }}>{item.val}</div>
                <div style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 12, color: "white", marginTop: 4 }}>{item.label}</div>
                <div style={{ fontFamily: "Quicksand, sans-serif", fontSize: 11, color: "#6b7280", marginTop: 2 }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <div key={i} className="relative rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300"
              style={{
                background: plan.primary ? "linear-gradient(135deg, rgba(41,129,226,0.14) 0%, rgba(41,129,226,0.05) 100%)" : "#0e171e",
                border: plan.primary ? "1px solid rgba(41,129,226,0.32)" : "1px solid rgba(255,255,255,0.06)",
                boxShadow: plan.primary ? "0 0 40px rgba(41,129,226,0.14)" : "none",
              }}
              onMouseEnter={(e) => { if (!plan.primary) { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(41,129,226,0.2)"; el.style.transform = "translateY(-4px)"; }}}
              onMouseLeave={(e) => { if (!plan.primary) { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.06)"; el.style.transform = "translateY(0)"; }}}>
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs whitespace-nowrap"
                  style={{ background: "#2981e2", color: "white", fontFamily: "Commissioner, sans-serif", fontWeight: 700 }}>
                  {plan.badge}
                </div>
              )}
              <div>
                <div style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: "0.95rem", color: plan.primary ? "#60a5fa" : "#9CA3AF", marginBottom: 6 }}>{plan.name}</div>
                <div className="flex items-baseline gap-1.5">
                  <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "white", lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ color: "#6b7280", fontFamily: "Quicksand, sans-serif", fontSize: "0.85rem" }}>/{plan.period}</span>
                </div>
                <p style={{ color: "#6b7280", fontFamily: "Quicksand, sans-serif", fontSize: "0.85rem", marginTop: 6 }}>{plan.desc}</p>
              </div>
              <div className="flex flex-col gap-3 flex-grow">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <Check size={14} color={plan.primary ? "#2981e2" : "#10b981"} strokeWidth={2.5} className="shrink-0" />
                    <span style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 600, fontSize: "0.875rem", color: "#9CA3AF" }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="block text-center py-3 rounded-xl text-sm transition-all duration-200"
                style={{
                  background: plan.primary ? "#2981e2" : "transparent",
                  color: plan.primary ? "white" : "#9CA3AF",
                  border: plan.primary ? "none" : "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "Commissioner, sans-serif", fontWeight: 700,
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; if (plan.primary) { el.style.background = "#1a6fd4"; el.style.boxShadow = "0 0 20px rgba(41,129,226,0.4)"; } else { el.style.color = "white"; el.style.borderColor = "rgba(41,129,226,0.3)"; } }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; if (plan.primary) { el.style.background = "#2981e2"; el.style.boxShadow = "none"; } else { el.style.color = "#9CA3AF"; el.style.borderColor = "rgba(255,255,255,0.08)"; } }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center mt-5" style={{ color: "#374151", fontFamily: "Quicksand, sans-serif", fontSize: 12 }}>
          All prices in USD · Excl. applicable taxes · Cancel anytime
        </p>
      </Container>
    </Section>
  );
}
