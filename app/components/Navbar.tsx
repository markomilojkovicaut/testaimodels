"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./ui";

const NAV_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Models", href: "#models" },
  { label: "GTM Engine", href: "/gtm" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,15,20,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#2981e2" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="white" opacity="0.9"/>
                <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
                <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
                <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <span style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem" }}>
              Test AI Models
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <a key={item.label} href={item.href}
                className="text-sm transition-colors duration-200 hover:text-white"
                style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 600, color: "#9CA3AF" }}>
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm transition-colors duration-200 hover:text-white"
              style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 600, color: "#9CA3AF" }}>
              Sign in
            </a>
            <a href="#"
              className="text-sm px-4 py-2 rounded-lg transition-all duration-200"
              style={{ background: "#2981e2", color: "white", fontFamily: "Commissioner, sans-serif", fontWeight: 700 }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#1a6fd4"; el.style.boxShadow = "0 0 20px rgba(41,129,226,0.4)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#2981e2"; el.style.boxShadow = "none"; }}>
              Start Testing Free
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t" style={{ background: "rgba(11,15,20,0.98)", borderColor: "rgba(255,255,255,0.06)" }}>
          <Container>
            <div className="py-4 flex flex-col gap-3">
              {NAV_LINKS.map((item) => (
                <a key={item.label} href={item.href}
                  className="text-sm py-2"
                  style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 600, color: "#9CA3AF" }}
                  onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#" className="text-center py-3 rounded-lg text-sm mt-2"
                style={{ background: "#2981e2", color: "white", fontFamily: "Commissioner, sans-serif", fontWeight: 700 }}>
                Start Testing Free
              </a>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
