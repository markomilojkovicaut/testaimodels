"use client";
import { Container, BtnPrimary } from "./ui";
import { ArrowRight } from "lucide-react";

const LINKS = {
  Product:   ["How it Works","Models","Pricing","Changelog"],
  Resources: ["Blog","Docs","Help Center","API"],
  Company:   ["About","Privacy","Terms","Contact"],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0b0f14" }}>
      <div className="relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 80% at 50% 50%, rgba(41,129,226,0.08) 0%, transparent 70%)" }} />
        <Container className="relative py-20 text-center">
          <span className="block mb-3" style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2981e2" }}>
            Get Started
          </span>
          <h2 className="mb-4" style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "white", lineHeight: 1.12, letterSpacing: "-0.025em" }}>
            Test AI models for <span style={{ color: "#2981e2" }}>free</span>.<br />No API keys needed.
          </h2>
          <p className="mx-auto mb-8" style={{ color: "#9CA3AF", fontFamily: "Quicksand, sans-serif", fontSize: "1rem", lineHeight: 1.75, maxWidth: 440 }}>
            50 free tests included. Results in 30 seconds. No credit card, no setup, no API keys.
          </p>
          <BtnPrimary>Start Testing Free <ArrowRight size={15} /></BtnPrimary>
          <p className="mt-4" style={{ color: "#374151", fontFamily: "Quicksand, sans-serif", fontSize: 12 }}>
            "Because guessing costs $2,000+"
          </p>
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#2981e2" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" rx="1" fill="white" opacity="0.9"/>
                  <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
                  <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
                  <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem" }}>Test AI Models</span>
            </div>
            <p style={{ color: "#374151", fontFamily: "Quicksand, sans-serif", fontSize: "0.8rem", lineHeight: 1.7, maxWidth: 200 }}>
              Pre-deployment AI model testing. Compare quality, speed, and costs before you integrate.
            </p>
          </div>
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h4 className="mb-4" style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, fontSize: 11, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em" }}>{group}</h4>
              <div className="flex flex-col gap-2.5">
                {items.map(item => (
                  <a key={item} href="#"
                    style={{ color: "#374151", fontFamily: "Quicksand, sans-serif", fontSize: "0.85rem", fontWeight: 500, transition: "color 0.2s", display: "block", textDecoration: "none" }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#9CA3AF"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#374151"; }}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p style={{ color: "#1f2937", fontFamily: "Quicksand, sans-serif", fontSize: "0.8rem" }}>
            © 2025 Test AI Models. All rights reserved.
          </p>
          <a href="https://eternacreative.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity duration-200"
            style={{ opacity: 0.5, textDecoration: "none" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.5"; }}>
            <span style={{ color: "#374151", fontFamily: "Quicksand, sans-serif", fontSize: "0.75rem" }}>Built by</span>
            <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 800, fontSize: "0.8rem", color: "#6b7280", letterSpacing: "0.1em", textTransform: "uppercase" }}>ETERNA</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
