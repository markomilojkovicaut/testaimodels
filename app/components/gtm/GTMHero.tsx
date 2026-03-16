"use client";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import { Container, BtnPrimary, BtnSecondary } from "../ui";

const SKILLS = [
  { name: "ICP Architect", color: "#2981e2" },
  { name: "Signal Scanner", color: "#10b981" },
  { name: "Account Research", color: "#a78bfa" },
  { name: "Qualification Scorer", color: "#f59e0b" },
  { name: "Outreach Builder", color: "#ec4899" },
  { name: "Meeting Prep", color: "#06b6d4" },
  { name: "Battlecard Generator", color: "#ef4444" },
];

function SkillBadge({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
      style={{ background: "rgba(17,24,32,0.85)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <span className="w-2 h-2 rounded-full inline-block" style={{ background: color }} />
      <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 600, fontSize: 12, color: "#9CA3AF" }}>
        {name}
      </span>
    </div>
  );
}

export default function GTMHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-16 pb-12 overflow-hidden"
      style={{ background: "#0b0f14" }}
    >
      {/* Glow orbs */}
      <div className="absolute pointer-events-none" style={{ top: "-5%", left: "50%", transform: "translateX(-50%)", width: 900, height: 500, background: "radial-gradient(ellipse at center, rgba(16,185,129,0.12) 0%, transparent 65%)", borderRadius: "50%" }} />
      <div className="absolute pointer-events-none" style={{ top: "25%", left: "8%", width: 350, height: 350, background: "radial-gradient(ellipse at center, rgba(41,129,226,0.05) 0%, transparent 70%)", borderRadius: "50%" }} />
      <div className="absolute pointer-events-none" style={{ top: "30%", right: "8%", width: 280, height: 280, background: "radial-gradient(ellipse at center, rgba(167,139,250,0.05) 0%, transparent 70%)", borderRadius: "50%" }} />
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.02) 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 100%)" }} />

      <Container className="relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-7">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#10b981", fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#10b981" }} />
            10 CLAUDE CODE SKILLS FOR GTM TEAMS
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-center mb-6"
          style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: "clamp(2.4rem, 5vw, 4.25rem)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "white" }}
        >
          The{" "}
          <span style={{ background: "linear-gradient(135deg, #ffffff 0%, #6ee7b7 45%, #10b981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            GTM Engineer&apos;s
          </span>
          <br />
          Playbook for Claude
        </h1>

        {/* Sub */}
        <p
          className="text-center mx-auto mb-8"
          style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 500, fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#9CA3AF", lineHeight: 1.75, maxWidth: 600 }}
        >
          10 chained Claude Code skills that automate every stage of your GTM motion —
          from ICP definition to outreach to pipeline review.{" "}
          <span style={{ color: "white", fontWeight: 600 }}>Built for revenue teams.</span>
        </p>

        {/* Skill badges */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {SKILLS.map((s) => <SkillBadge key={s.name} name={s.name} color={s.color} />)}
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mb-10 flex-wrap">
          <BtnPrimary href="#skills">
            Explore All 10 Skills <ArrowRight size={15} />
          </BtnPrimary>
          <BtnSecondary href="#pipeline">See the Pipeline</BtnSecondary>
        </div>

        {/* Trust stats */}
        <div className="flex items-center justify-center gap-8 mb-16 flex-wrap">
          {[
            { icon: <Target size={13} />, val: "7 Core", label: "skills" },
            { icon: <Zap size={13} />, val: "3 Bonus", label: "utilities" },
            { icon: <TrendingUp size={13} />, val: "Chained", label: "workflow" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-1.5">
              <span style={{ color: "#9CA3AF" }}>{s.icon}</span>
              <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 13, color: "white" }}>{s.val}</span>
              <span style={{ fontFamily: "Quicksand, sans-serif", fontSize: 13, color: "#6b7280" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Mockup — skill chain preview */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center 80%, rgba(16,185,129,0.08) 0%, transparent 70%)" }} />
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "#0e171e", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 40px 100px rgba(0,0,0,0.7)" }}
          >
            {/* Browser bar */}
            <div className="flex items-center gap-3 px-5 py-3.5" style={{ background: "#0b0f14", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex gap-1.5">
                {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded text-xs" style={{ background: "rgba(255,255,255,0.04)", color: "#4b5563", fontFamily: "Quicksand, sans-serif", minWidth: 240, textAlign: "center" }}>
                  claude code — ~/my-gtm-project
                </div>
              </div>
            </div>

            {/* Terminal content */}
            <div className="p-5 font-mono text-sm space-y-3">
              <div>
                <span style={{ color: "#10b981" }}>❯ </span>
                <span style={{ color: "#e5e7eb" }}>/build-my-icp</span>
              </div>
              <div style={{ color: "#6b7280", paddingLeft: "1rem" }}>
                Running ICP Architect... conducting discovery interview
              </div>
              <div style={{ paddingLeft: "1rem" }}>
                <span style={{ color: "#f59e0b" }}>✓ </span>
                <span style={{ color: "#d1d5db" }}>ICP defined → docs/icp.md saved</span>
              </div>
              <div className="mt-2">
                <span style={{ color: "#10b981" }}>❯ </span>
                <span style={{ color: "#e5e7eb" }}>/scan-signals Acme Corp</span>
              </div>
              <div style={{ color: "#6b7280", paddingLeft: "1rem" }}>
                Scanning 12 signal types via WebSearch...
              </div>
              <div style={{ paddingLeft: "1rem" }}>
                <span style={{ color: "#f59e0b" }}>✓ </span>
                <span style={{ color: "#d1d5db" }}>Score: <strong style={{ color: "#10b981" }}>18/20</strong> — HOT 🔥 → docs/signals/acme-corp.md</span>
              </div>
              <div className="mt-2">
                <span style={{ color: "#10b981" }}>❯ </span>
                <span style={{ color: "#e5e7eb" }}>/score-leads leads.csv</span>
              </div>
              <div style={{ color: "#6b7280", paddingLeft: "1rem" }}>
                Scoring 24 leads... HOT: 4 | WARM: 9 | COLD: 8 | PARK: 3
              </div>
              <div style={{ paddingLeft: "1rem" }}>
                <span style={{ color: "#f59e0b" }}>✓ </span>
                <span style={{ color: "#d1d5db" }}>Pipeline scored → docs/pipeline/scored-leads.md</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
