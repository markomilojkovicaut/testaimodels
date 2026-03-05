"use client";
import { ArrowRight, Zap, DollarSign, BarChart2 } from "lucide-react";
import { Container, BtnPrimary, BtnSecondary } from "./ui";

const MODELS = [
  { name: "ChatGPT", color: "#10a37f" },
  { name: "Claude", color: "#c96442" },
  { name: "Gemini", color: "#4285f4" },
  { name: "Grok", color: "#e5e7eb" },
  { name: "Gemini Flash", color: "#8ab4f8" },
  { name: "Mistral", color: "#f97316" },
  { name: "Kimi", color: "#a78bfa" },
];

function ModelDot({ color }: { color: string }) {
  return <span className="w-2 h-2 rounded-full inline-block" style={{ background: color }} />;
}

function CompCard({ model, color, cost, speed, text, winner = false }: {
  model: string; color: string; cost: string; speed: string; text: string; winner?: boolean;
}) {
  return (
    <div className="rounded-xl p-3.5 flex flex-col gap-2.5 relative"
      style={{
        background: winner ? "rgba(41,129,226,0.09)" : "rgba(11,15,20,0.9)",
        border: winner ? "1px solid rgba(41,129,226,0.28)" : "1px solid rgba(255,255,255,0.06)",
        minWidth: 0,
      }}>
      {winner && (
        <span className="absolute top-2.5 right-2.5 text-xs px-2 py-0.5 rounded-full"
          style={{ background: "rgba(41,129,226,0.18)", color: "#60a5fa", fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 10 }}>
          WINNER
        </span>
      )}
      <div className="flex items-center gap-2">
        <ModelDot color={color} />
        <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 13, color: "white" }}>{model}</span>
      </div>
      <p style={{ fontFamily: "Quicksand, sans-serif", fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>{text}</p>
      <div className="flex items-center gap-3 pt-1 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 12, color: "#10b981" }}>{cost}</span>
        <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 12, color: "#60a5fa" }}>{speed}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 pb-12 overflow-hidden" style={{ background: "#0b0f14" }}>
      {/* Glow orbs */}
      <div className="absolute pointer-events-none" style={{ top: "-5%", left: "50%", transform: "translateX(-50%)", width: 900, height: 500, background: "radial-gradient(ellipse at center, rgba(41,129,226,0.16) 0%, transparent 65%)", borderRadius: "50%" }} />
      <div className="absolute pointer-events-none" style={{ top: "25%", left: "8%", width: 350, height: 350, background: "radial-gradient(ellipse at center, rgba(41,129,226,0.05) 0%, transparent 70%)", borderRadius: "50%" }} />
      <div className="absolute pointer-events-none" style={{ top: "30%", right: "8%", width: 280, height: 280, background: "radial-gradient(ellipse at center, rgba(96,165,250,0.05) 0%, transparent 70%)", borderRadius: "50%" }} />
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(41,129,226,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(41,129,226,0.025) 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 100%)" }} />

      <Container className="relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(41,129,226,0.08)", border: "1px solid rgba(41,129,226,0.2)", color: "#60a5fa", fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#2981e2" }} />
            PRE-DEPLOYMENT AI MODEL TESTING
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center mb-6 animate-fade-up delay-100"
          style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: "clamp(2.4rem, 5vw, 4.25rem)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "white" }}>
          Choose{" "}
          <span style={{ background: "linear-gradient(135deg, #ffffff 0%, #93c5fd 45%, #2981e2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            best AI model
          </span>
          {" "}for<br />
          your app in{" "}
          <span style={{ color: "#2981e2" }}>30 seconds</span>
        </h1>

        {/* Sub */}
        <p className="text-center mx-auto mb-8 animate-fade-up delay-200"
          style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 500, fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#9CA3AF", lineHeight: 1.75, maxWidth: 580 }}>
          Test ChatGPT, Claude, Gemini, and Grok with YOUR actual prompts.
          See quality, speed, and exact costs side-by-side — before you integrate.{" "}
          <span style={{ color: "white", fontWeight: 600 }}>No API keys required.</span>
        </p>

        {/* Model badges row */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap animate-fade-up delay-300">
          {MODELS.map((m) => (
            <div key={m.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200"
              style={{ background: "rgba(17,24,32,0.85)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <ModelDot color={m.color} />
              <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 600, fontSize: 12, color: "#9CA3AF" }}>{m.name}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 mb-5 animate-fade-up delay-400 flex-wrap">
          <BtnPrimary>
            Test Your Prompt Free <ArrowRight size={15} />
          </BtnPrimary>
          <BtnSecondary href="#how-it-works">Watch Demo</BtnSecondary>
        </div>

        {/* Trust */}
        <div className="flex items-center justify-center gap-6 mb-16 flex-wrap animate-fade-up delay-500">
          {[
            { icon: <Zap size={13} />, val: "30 sec", label: "to results" },
            { icon: <DollarSign size={13} />, val: "No API keys", label: "required" },
            { icon: <BarChart2 size={13} />, val: "7+", label: "AI models" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-1.5">
              <span style={{ color: "#9CA3AF" }}>{s.icon}</span>
              <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 13, color: "white" }}>{s.val}</span>
              <span style={{ fontFamily: "Quicksand, sans-serif", fontSize: 13, color: "#6b7280" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* App mockup */}
        <div className="relative animate-fade-up delay-600" style={{ animationDelay: "0.6s" }}>
          {/* Glow behind mockup */}
          <div className="absolute -inset-4 rounded-2xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center 80%, rgba(41,129,226,0.1) 0%, transparent 70%)" }} />

          <div className="rounded-2xl overflow-hidden relative"
            style={{ background: "#0e171e", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(41,129,226,0.08)" }}>
            {/* Browser bar */}
            <div className="flex items-center gap-3 px-5 py-3.5" style={{ background: "#0b0f14", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex gap-1.5">
                {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />)}
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded text-xs" style={{ background: "rgba(255,255,255,0.04)", color: "#4b5563", fontFamily: "Quicksand, sans-serif", minWidth: 160, textAlign: "center" }}>
                  testaimodels.com
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Prompt box */}
              <div className="rounded-xl p-4 mb-4" style={{ background: "#111820", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-xs mb-1.5 uppercase tracking-wider" style={{ color: "#6b7280", fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 10 }}>Your Prompt</p>
                    <p style={{ fontFamily: "Quicksand, sans-serif", fontSize: 13, color: "#d1d5db", lineHeight: 1.6 }}>
                      Write a refund policy email for a frustrated customer who received the wrong item...
                    </p>
                  </div>
                  <button className="px-4 py-2 rounded-lg text-xs font-bold shrink-0 mt-0.5" style={{ background: "#2981e2", color: "white", fontFamily: "Commissioner, sans-serif", fontWeight: 700 }}>
                    Test All
                  </button>
                </div>
                <div className="flex gap-2 mt-3">
                  {["GPT-4o","Claude","Gemini","Grok"].map((m,i) => (
                    <span key={m} className="px-2.5 py-1 rounded-md text-xs" style={{
                      background: i < 3 ? "rgba(41,129,226,0.1)" : "rgba(255,255,255,0.04)",
                      border: i < 3 ? "1px solid rgba(41,129,226,0.22)" : "1px solid rgba(255,255,255,0.06)",
                      color: i < 3 ? "#60a5fa" : "#6b7280",
                      fontFamily: "Commissioner, sans-serif", fontWeight: 700,
                    }}>{m}</span>
                  ))}
                </div>
              </div>

              {/* Results grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <CompCard model="ChatGPT GPT-4o" color="#10a37f" cost="$0.0045" speed="2.3s"
                  text="I sincerely apologize for this inconvenience. We shipped the correct item..." />
                <CompCard model="Claude Sonnet" color="#c96442" cost="$0.0038" speed="1.8s"
                  text="Thank you for reaching out. I completely understand your frustration..." winner />
                <CompCard model="Gemini 2.5 Pro" color="#4285f4" cost="$0.0011" speed="2.1s"
                  text="We apologize for this error. Your replacement is being expedited..." />
              </div>

              {/* Cost projection bar */}
              <div className="mt-3.5 px-4 py-3 rounded-xl flex items-center justify-between gap-4 flex-wrap"
                style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.12)" }}>
                <span style={{ fontFamily: "Quicksand, sans-serif", fontSize: 12, color: "#9CA3AF" }}>At 10,000 emails/month:</span>
                <div className="flex items-center gap-4">
                  <span style={{ fontFamily: "Commissioner, sans-serif", fontSize: 12, color: "#9CA3AF" }}>GPT-4o <strong style={{ color: "#ef4444" }}>$45</strong></span>
                  <span style={{ fontFamily: "Commissioner, sans-serif", fontSize: 12, color: "#9CA3AF" }}>Gemini <strong style={{ color: "#10b981" }}>$11</strong></span>
                  <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: "rgba(16,185,129,0.12)", color: "#10b981", fontFamily: "Commissioner, sans-serif", fontWeight: 700 }}>
                    Save $34/mo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="absolute -left-5 top-1/3 hidden xl:block" style={{ animation: "float 4s ease-in-out infinite", animationDelay: "1s" }}>
            <div className="px-4 py-3 rounded-xl" style={{ background: "rgba(14,23,30,0.96)", border: "1px solid rgba(41,129,226,0.2)", backdropFilter: "blur(8px)", boxShadow: "0 8px 28px rgba(0,0,0,0.5)" }}>
              <div style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: 22, color: "#10b981" }}>75%</div>
              <div style={{ fontFamily: "Quicksand, sans-serif", fontSize: 12, color: "#9CA3AF" }}>cheaper on Gemini</div>
            </div>
          </div>
          <div className="absolute -right-5 top-1/4 hidden xl:block" style={{ animation: "float 4s ease-in-out infinite", animationDelay: "2s" }}>
            <div className="px-4 py-3 rounded-xl" style={{ background: "rgba(14,23,30,0.96)", border: "1px solid rgba(41,129,226,0.2)", backdropFilter: "blur(8px)", boxShadow: "0 8px 28px rgba(0,0,0,0.5)" }}>
              <div style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: 22, color: "#60a5fa" }}>30s</div>
              <div style={{ fontFamily: "Quicksand, sans-serif", fontSize: 12, color: "#9CA3AF" }}>vs 5 hours manual</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
