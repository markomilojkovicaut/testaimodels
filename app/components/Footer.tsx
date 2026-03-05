"use client";
export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ background: "#0b0f14" }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(41,129,226,0.12), transparent)",
        }}
      />

      {/* Final CTA strip */}
      <div
        className="py-20 text-center relative overflow-hidden"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
      >
        {/* Background glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 500,
            height: 300,
            background:
              "radial-gradient(ellipse at center, rgba(41,129,226,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-2xl mx-auto px-4 relative">
          <span
            className="block text-xs font-bold tracking-widest uppercase mb-4"
            style={{
              color: "#2981e2",
              fontFamily: "Commissioner, sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Get Started
          </span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "Commissioner, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "white",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Test AI models for{" "}
            <span style={{ color: "#2981e2" }}>free</span>.
            <br />
            No API keys needed.
          </h2>
          <p
            className="mb-8"
            style={{
              color: "#9CA3AF",
              fontFamily: "Quicksand, sans-serif",
              fontWeight: 500,
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            50 free tests included. Results in 30 seconds. No credit card, no
            setup, no API keys.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base transition-all duration-200"
            style={{
              background: "#2981e2",
              color: "white",
              fontFamily: "Commissioner, sans-serif",
              fontWeight: 700,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#1a6fd4";
              el.style.boxShadow = "0 0 32px rgba(41,129,226,0.5)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#2981e2";
              el.style.boxShadow = "none";
              el.style.transform = "translateY(0)";
            }}
          >
            Start Testing Free →
          </a>
          <p
            className="mt-4 text-xs"
            style={{
              color: "#4b5563",
              fontFamily: "Quicksand, sans-serif",
            }}
          >
            "Because guessing costs $2,000+"
          </p>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
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
                style={{
                  fontFamily: "Commissioner, sans-serif",
                  fontWeight: 700,
                  color: "white",
                  fontSize: "0.9rem",
                }}
              >
                Test AI Models
              </span>
            </div>
            <p
              style={{
                color: "#4b5563",
                fontFamily: "Quicksand, sans-serif",
                fontSize: "0.8rem",
                lineHeight: 1.7,
                maxWidth: 200,
              }}
            >
              Pre-deployment AI model testing. Compare quality, speed, and
              costs before you integrate.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "Commissioner, sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Product
            </h4>
            <div className="flex flex-col gap-2.5">
              {["How it Works", "Models", "Pricing", "Changelog"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: "#4b5563",
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    transition: "color 0.2s",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#9CA3AF";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "#4b5563";
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "Commissioner, sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Resources
            </h4>
            <div className="flex flex-col gap-2.5">
              {["Blog", "Docs", "Help Center", "API"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: "#4b5563",
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    transition: "color 0.2s",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#9CA3AF";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "#4b5563";
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "Commissioner, sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              {["About", "Privacy", "Terms", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: "#4b5563",
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    transition: "color 0.2s",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#9CA3AF";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "#4b5563";
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p
            style={{
              color: "#374151",
              fontFamily: "Quicksand, sans-serif",
              fontSize: "0.8rem",
            }}
          >
            © 2025 Test AI Models. All rights reserved.
          </p>

          {/* Eterna Creative badge */}
          <a
            href="https://eternacreative.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity duration-200"
            style={{ opacity: 0.6 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.6";
            }}
          >
            <span
              style={{
                color: "#4b5563",
                fontFamily: "Quicksand, sans-serif",
                fontSize: "0.75rem",
              }}
            >
              Built by
            </span>
            <span
              style={{
                fontFamily: "Commissioner, sans-serif",
                fontWeight: 800,
                fontSize: "0.8rem",
                color: "#6b7280",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              ETERNA
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
