"use client";
import { ArrowRight, Github } from "lucide-react";
import { Container, Section } from "../ui";

export default function GTMCta() {
  return (
    <Section bg="#0b0f14">
      <Container>
        <div
          className="rounded-2xl px-8 py-14 md:py-16 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(41,129,226,0.06) 100%)",
            border: "1px solid rgba(16,185,129,0.15)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 60%)" }}
          />

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#10b981", fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em" }}
            >
              MIT LICENSE — FREE & OPEN SOURCE
            </div>

            <h2
              className="mb-4"
              style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "white", lineHeight: 1.12, letterSpacing: "-0.025em" }}
            >
              Start building your GTM engine today
            </h2>

            <p
              className="mx-auto mb-8"
              style={{ fontFamily: "Quicksand, sans-serif", fontSize: "0.975rem", color: "#9CA3AF", lineHeight: 1.75, maxWidth: 480 }}
            >
              Clone the repo, run the installer, and you&apos;ll have all 10 skills running
              in your Claude Code project within minutes.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://github.com/Othmane-Khadri/gtm-engineer-playbook"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm transition-all duration-200"
                style={{ background: "#10b981", color: "white", fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#059669";
                  el.style.boxShadow = "0 0 28px rgba(16,185,129,0.4)";
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#10b981";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <Github size={16} /> View on GitHub <ArrowRight size={15} />
              </a>

              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm transition-all duration-200"
                style={{ background: "transparent", color: "#9CA3AF", fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "white";
                  el.style.borderColor = "rgba(16,185,129,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#9CA3AF";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                Browse all skills
              </a>
            </div>

            {/* Quick install */}
            <div
              className="mt-8 mx-auto max-w-lg rounded-xl px-5 py-3 text-left"
              style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="mb-1"
                style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 10, color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                Quick Install
              </p>
              <pre style={{ fontFamily: "monospace", fontSize: 12, color: "#d1d5db", margin: 0 }}>
                <span style={{ color: "#10b981" }}>❯ </span>
                <span>git clone github.com/Othmane-Khadri/gtm-engineer-playbook</span>
                {"\n"}
                <span style={{ color: "#10b981" }}>❯ </span>
                <span>cd my-project && bash path/to/install.sh</span>
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
