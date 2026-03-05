import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

// Max-width 1280px container with consistent horizontal padding
export function Container({ children, className = "" }: WrapperProps) {
  return (
    <div
      className={`w-full mx-auto px-5 sm:px-6 lg:px-8 ${className}`}
      style={{ maxWidth: 1280 }}
    >
      {children}
    </div>
  );
}

// Section wrapper with consistent vertical padding
export function Section({
  children,
  id,
  className = "",
  bg = "#0b0f14",
  style = {},
}: WrapperProps & {
  id?: string;
  bg?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 lg:py-28 ${className}`}
      style={{ background: bg, ...style }}
    >
      {/* Top separator line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(41,129,226,0.1), transparent)",
        }}
      />
      {children}
    </section>
  );
}

// Section label (the small uppercase text above headings)
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="mb-3"
      style={{
        fontFamily: "Commissioner, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "#2981e2",
      }}
    >
      {children}
    </p>
  );
}

// Section heading
export function SectionHeading({
  children,
  centered = true,
}: {
  children: ReactNode;
  centered?: boolean;
}) {
  return (
    <h2
      className={centered ? "text-center" : ""}
      style={{
        fontFamily: "Commissioner, sans-serif",
        fontWeight: 800,
        fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
        color: "white",
        lineHeight: 1.12,
        letterSpacing: "-0.025em",
      }}
    >
      {children}
    </h2>
  );
}

// Section subtext
export function SectionSub({
  children,
  centered = true,
  maxWidth = 520,
}: {
  children: ReactNode;
  centered?: boolean;
  maxWidth?: number;
}) {
  return (
    <p
      className={`mt-4 ${centered ? "mx-auto text-center" : ""}`}
      style={{
        fontFamily: "Quicksand, sans-serif",
        fontWeight: 500,
        fontSize: "0.975rem",
        color: "#9CA3AF",
        lineHeight: 1.75,
        maxWidth,
      }}
    >
      {children}
    </p>
  );
}

// Blue gradient text
export function BlueText({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #93c5fd 40%, #2981e2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

// Primary CTA button
export function BtnPrimary({
  children,
  href = "#",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm transition-all duration-200"
      style={{
        background: "#2981e2",
        color: "white",
        fontFamily: "Commissioner, sans-serif",
        fontWeight: 700,
        fontSize: "0.9rem",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "#1a6fd4";
        el.style.boxShadow = "0 0 28px rgba(41,129,226,0.45)";
        el.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "#2981e2";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {children}
    </a>
  );
}

// Secondary/ghost button
export function BtnSecondary({
  children,
  href = "#",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm transition-all duration-200"
      style={{
        background: "transparent",
        color: "#9CA3AF",
        fontFamily: "Commissioner, sans-serif",
        fontWeight: 700,
        fontSize: "0.9rem",
        border: "1px solid rgba(255,255,255,0.08)",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "white";
        el.style.borderColor = "rgba(41,129,226,0.3)";
        el.style.background = "rgba(41,129,226,0.05)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "#9CA3AF";
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.background = "transparent";
      }}
    >
      {children}
    </a>
  );
}
