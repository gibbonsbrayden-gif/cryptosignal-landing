"use client";

const APP_URL = "https://app.getcryptosignal.com/dashboard";

const trustPills = [
  { icon: "📊", label: "AI Driven Analysis" },
  { icon: "📡", label: "Real-Time Signals" },
  { icon: "🐋", label: "Whale Intelligence" },
  { icon: "🛡️", label: "Risk Managed" },
];

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        width: "100%",
        maxWidth: "100vw",
        backgroundColor: "#030008",
      }}
    >
      {/* ── Bottom fade into page ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 180,
          background: "linear-gradient(to bottom, transparent, #030008)",
          zIndex: 2,
        }}
      />

      {/* ── Content — left-aligned text, right side shows the artwork ── */}
      <div className="hero-grid">
        {/* Left column — text only, stays in left 45% */}
        <div>
        {/* Eyebrow */}
        <p
          className="font-mono-tech"
          style={{
            fontSize: 12,
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "#22c55e",
            margin: "0 0 18px",
          }}
        >
          &gt; AI-Powered Crypto Intelligence
        </p>

        {/* Big stacked headline */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(64px, 7vw, 110px)",
            lineHeight: 0.93,
            margin: "0 0 28px",
          }}
        >
          <span style={{ color: "#ffffff", display: "block" }}>INTELLIGENCE.</span>
          <span style={{ color: "#ffffff", display: "block" }}>PRECISION.</span>
          <span
            style={{
              color: "#9B5CFF",
              display: "block",
              textShadow: "0 0 40px rgba(155,92,255,0.7), 0 0 80px rgba(155,92,255,0.35)",
            }}
          >
            PROFITABILITY.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.60)",
            lineHeight: 1.65,
            maxWidth: 400,
            margin: "0 0 36px",
            fontFamily: "var(--font-inter, sans-serif)",
          }}
        >
          Real-time signals. AI-powered insights.
          <br />
          Built for traders who demand results.
        </p>

        {/* CTA row — matches reference image 1 button style */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 40 }}>
          {/* Primary — VoidWatch style: dark bg, purple border, circle icon */}
          <a
            href={APP_URL}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              background: "rgba(0,0,0,0.55)",
              color: "#ffffff",
              fontFamily: "var(--font-mono-tech, monospace)",
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              borderRadius: 100,
              padding: "13px 16px 13px 26px",
              textDecoration: "none",
              border: "1.5px solid #9B5CFF",
              boxShadow: "0 0 18px rgba(155,92,255,0.25)",
              transition: "box-shadow 0.15s, border-color 0.15s",
              whiteSpace: "nowrap",
              backdropFilter: "blur(8px)",
            }}
          >
            Start Trading Smarter
            {/* Circle badge on right — VoidWatch signature */}
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#9B5CFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 0 12px rgba(155,92,255,0.7)",
              }}
            >
              <span style={{ fontSize: 13, lineHeight: 1 }}>◎</span>
            </span>
          </a>

          {/* Secondary — text + arrow, VoidWatch style */}
          <a
            href="#features"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "rgba(255,255,255,0.80)",
              fontFamily: "var(--font-mono-tech, monospace)",
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "13px 4px",
              transition: "color 0.15s",
              whiteSpace: "nowrap",
            }}
          >
            Explore Features
            <span style={{ fontSize: 16 }}>›</span>
          </a>
        </div>

        {/* Trust pills — matching the reference */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {trustPills.map((pill) => (
            <span
              key={pill.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(0,0,0,0.50)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 100,
                padding: "7px 16px",
                fontSize: 13,
                fontFamily: "var(--font-inter, sans-serif)",
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                whiteSpace: "nowrap",
                backdropFilter: "blur(8px)",
              }}
            >
              <span style={{ fontSize: 14 }}>{pill.icon}</span>
              {pill.label}
            </span>
          ))}
        </div>
        </div>{/* end left column */}

        {/* Right column — empty, artwork fills this from the bg image */}
        <div className="hero-right-col" />
      </div>
    </section>
  );
}
