"use client";
import {
  Target,
  Radio,
  FileSearch,
  BarChart3,
  Mail,
  Calendar,
  Swords,
  Database,
  TrendingUp,
  Bot,
} from "lucide-react";
import { Container, Section, SectionLabel, SectionHeading, SectionSub } from "../ui";

const CORE_SKILLS = [
  {
    icon: <Target size={20} />,
    name: "ICP Architect",
    cmd: "/build-my-icp",
    tag: "Core",
    color: "#2981e2",
    desc: "Interactive 7-step discovery that defines your ideal customer segments, buyer personas, buying signals, and disqualification criteria.",
    outputs: ["2–3 ICP segments", "1–2 personas per segment", "8–12 buying signals", "docs/icp.md"],
    triggers: ["build my ICP", "define target customer", "create ideal customer profile"],
  },
  {
    icon: <Radio size={20} />,
    name: "Signal Scanner",
    cmd: "/scan-signals",
    tag: "Core",
    color: "#10b981",
    desc: "Scans target companies for 20 buying signal types and scores each on Fit × Timing × Access × Intent (1–5 each, max 20).",
    outputs: ["HOT (17–20)", "WARM (13–16)", "COLD (9–12)", "docs/signals/"],
    triggers: ["scan signals", "find buying signals", "who should I call"],
  },
  {
    icon: <FileSearch size={20} />,
    name: "Account Research Brief",
    cmd: "/research-account",
    tag: "Core",
    color: "#a78bfa",
    desc: "One-page company intelligence brief generated in 2–3 minutes with recent news, tech stack, pain points, and engagement angles.",
    outputs: ["Company overview", "Key stakeholders", "Engagement angles", "docs/accounts/"],
    triggers: ["research this company", "account brief", "company intel"],
  },
  {
    icon: <BarChart3 size={20} />,
    name: "Qualification Scorer",
    cmd: "/score-leads",
    tag: "Core",
    color: "#f59e0b",
    desc: "Score any lead list using the same Fit/Timing/Access/Intent framework. Accepts pasted lists, Q&A input, or CSV. CRM-ready output.",
    outputs: ["HOT / WARM / COLD / PARK", "Tier distribution dashboard", "docs/pipeline/scored-leads.md"],
    triggers: ["score these leads", "qualify my pipeline", "score leads"],
  },
  {
    icon: <Mail size={20} />,
    name: "Outreach Sequence Builder",
    cmd: "/build-sequence",
    tag: "Core",
    color: "#ec4899",
    desc: "Builds signal-triggered multi-channel cold sequences. Every message is ready-to-send — no brackets except {{first_name}}. Zero buzzwords.",
    outputs: ["4–6 touchpoints", "Email + LinkedIn + Phone", "Objection playbook", "docs/sequences/"],
    triggers: ["build outreach sequence", "write cold emails", "create sequence"],
  },
  {
    icon: <Calendar size={20} />,
    name: "Meeting Prep Brief",
    cmd: "/prep-meeting",
    tag: "Core",
    color: "#06b6d4",
    desc: "Pre-call intelligence brief with company context, stakeholder background, competitive positioning, talking points, and proposed agenda.",
    outputs: ["Stakeholder intel", "Talking points", "Objection prep", "docs/meeting-prep/"],
    triggers: ["prep for my meeting", "meeting brief", "call prep"],
  },
  {
    icon: <Swords size={20} />,
    name: "Competitive Battlecard Generator",
    cmd: "/build-battlecard",
    tag: "Core",
    color: "#ef4444",
    desc: "Research-backed battlecards with strengths, documented weaknesses, win/loss patterns, trap questions, and objection handling scripts.",
    outputs: ["Up to 5 competitors per run", "Win/loss patterns", "Trap questions", "docs/battlecards/"],
    triggers: ["build battlecard", "competitive intel", "how do I beat"],
  },
];

const BONUS_SKILLS = [
  {
    icon: <Database size={20} />,
    name: "CRM Hygiene Scanner",
    cmd: "/scan-crm",
    tag: "Bonus",
    color: "#6b7280",
    desc: "Audits CRM CSV exports for duplicates, stale records, and missing fields. Generates a 0–100 quality score with prioritized fix actions.",
    outputs: ["Data quality score", "Duplicate detection (3 tiers)", "P0–P3 fix recommendations"],
    triggers: ["clean my CRM", "scan CRM data", "fix duplicates"],
  },
  {
    icon: <TrendingUp size={20} />,
    name: "Weekly GTM Report",
    cmd: "/weekly-report",
    tag: "Bonus",
    color: "#6b7280",
    desc: "Aggregates all docs/ data into an executive-ready weekly report: pipeline health, outreach metrics, signals, and next-week priorities.",
    outputs: ["Pipeline summary", "Week-over-week deltas", "docs/reports/week-{YYYY-WNN}.md"],
    triggers: ["weekly report", "GTM report", "Friday report"],
  },
  {
    icon: <Bot size={20} />,
    name: "Agent Architecture Planner",
    cmd: "/plan-agent",
    tag: "Bonus",
    color: "#6b7280",
    desc: "Designs autonomous GTM agents using the 'Shell Orchestrates, Claude Thinks' pattern. Outputs: shell wrapper, system prompt, config, and README.",
    outputs: ["Architecture pattern", "Cost estimate", "Shell + prompt + config"],
    triggers: ["plan an agent", "automate this workflow", "build GTM agent"],
  },
];

function SkillCard({
  skill,
}: {
  skill: typeof CORE_SKILLS[number];
}) {
  const rgb = hexToRgb(skill.color);
  const isBonus = skill.tag === "Bonus";
  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200"
      style={{
        background: isBonus ? "rgba(11,15,20,0.6)" : `rgba(${rgb},0.04)`,
        border: `1px solid rgba(${rgb},${isBonus ? "0.1" : "0.18"})`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `rgba(${rgb},0.35)`;
        el.style.background = `rgba(${rgb},0.07)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `rgba(${rgb},${isBonus ? "0.1" : "0.18"})`;
        el.style.background = isBonus ? "rgba(11,15,20,0.6)" : `rgba(${rgb},0.04)`;
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `rgba(${rgb},0.1)`, color: skill.color }}
          >
            {skill.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span
                style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 14, color: "white" }}
              >
                {skill.name}
              </span>
              <span
                className="px-2 py-0.5 rounded-full"
                style={{
                  background: `rgba(${rgb},0.1)`,
                  color: skill.color,
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 700,
                  fontSize: 9,
                  letterSpacing: "0.08em",
                }}
              >
                {skill.tag.toUpperCase()}
              </span>
            </div>
            <code
              className="px-2 py-0.5 rounded"
              style={{
                fontFamily: "monospace",
                fontSize: 11,
                color: skill.color,
                background: `rgba(${rgb},0.08)`,
                border: `1px solid rgba(${rgb},0.15)`,
              }}
            >
              {skill.cmd}
            </code>
          </div>
        </div>
      </div>

      {/* Description */}
      <p style={{ fontFamily: "Quicksand, sans-serif", fontSize: 13, color: "#9CA3AF", lineHeight: 1.6 }}>
        {skill.desc}
      </p>

      {/* Outputs */}
      <div>
        <p
          className="mb-1.5"
          style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 10, color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          Outputs
        </p>
        <div className="flex flex-wrap gap-1.5">
          {skill.outputs.map((o) => (
            <span
              key={o}
              className="px-2 py-0.5 rounded"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", fontFamily: "Quicksand, sans-serif", fontSize: 11, color: "#6b7280" }}
            >
              {o}
            </span>
          ))}
        </div>
      </div>

      {/* Trigger phrases */}
      <div>
        <p
          className="mb-1.5"
          style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 10, color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase" }}
        >
          Triggered by
        </p>
        <div className="flex flex-wrap gap-1.5">
          {skill.triggers.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded"
              style={{ background: `rgba(${rgb},0.06)`, border: `1px solid rgba(${rgb},0.12)`, fontFamily: "Quicksand, sans-serif", fontSize: 11, color: skill.color }}
            >
              &ldquo;{t}&rdquo;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GTMSkillGrid() {
  return (
    <Section id="skills" bg="#0b0f14">
      <Container>
        {/* Core skills */}
        <div className="text-center mb-12">
          <SectionLabel>CORE SKILLS</SectionLabel>
          <SectionHeading>7 skills for every stage of GTM</SectionHeading>
          <SectionSub maxWidth={520}>
            From ICP to closed-won. Each skill is a reusable methodology
            that produces consistent, high-quality output every time.
          </SectionSub>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16">
          {CORE_SKILLS.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Bonus skills */}
        <div className="text-center mb-12">
          <SectionLabel>BONUS UTILITIES</SectionLabel>
          <SectionHeading>3 power tools for operators</SectionHeading>
          <SectionSub maxWidth={500}>
            Keep your data clean, your team informed, and your automation running.
          </SectionSub>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BONUS_SKILLS.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
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
