"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
        background: scrolled
          ? "rgba(11,15,20,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{ background: "#2981e2" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="white" opacity="0.9"/>
                <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
                <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.6"/>
                <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <span
              className="font-heading font-700 text-white text-sm tracking-tight"
              style={{ fontFamily: "Commissioner, sans-serif", fontWeight: 700 }}
            >
              Test AI Models
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "How it Works", href: "#how-it-works" },
              { label: "Models", href: "#models" },
              { label: "Pricing", href: "#pricing" },
              { label: "Blog", href: "/blog" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm transition-colors duration-200 hover:text-white"
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  fontWeight: 600,
                  color: "#9CA3AF",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm transition-colors duration-200 hover:text-white"
              style={{
                fontFamily: "Commissioner, sans-serif",
                fontWeight: 600,
                color: "#9CA3AF",
              }}
            >
              Sign in
            </a>
            <a
              href="#"
              className="btn-primary text-sm px-4 py-2"
              style={{
                background: "#2981e2",
                color: "white",
                fontFamily: "Commissioner, sans-serif",
                fontWeight: 600,
                borderRadius: 8,
                padding: "8px 18px",
                transition: "all 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#1a6fd4";
                (e.target as HTMLElement).style.boxShadow = "0 0 20px rgba(41,129,226,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "#2981e2";
                (e.target as HTMLElement).style.boxShadow = "none";
              }}
            >
              Start Testing Free
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(11,15,20,0.98)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {[
              { label: "How it Works", href: "#how-it-works" },
              { label: "Models", href: "#models" },
              { label: "Pricing", href: "#pricing" },
              { label: "Blog", href: "/blog" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm py-2"
                style={{
                  fontFamily: "Quicksand, sans-serif",
                  fontWeight: 600,
                  color: "#9CA3AF",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="text-center py-3 rounded-lg text-sm"
              style={{
                background: "#2981e2",
                color: "white",
                fontFamily: "Commissioner, sans-serif",
                fontWeight: 600,
                borderRadius: 8,
              }}
            >
              Start Testing Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
