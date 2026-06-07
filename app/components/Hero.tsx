"use client";

const APP_URL = "https://cryptosignal-lac.vercel.app";

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
        paddingTop: 68,
      }}
    >
      {/* ── Full-viewport background image ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* ── Left text overlay — darkens only the left side ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.0) 70%)",
          zIndex: 1,
        }}
      />

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
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "60px 48px 100px",
          display: "grid",
          gridTemplateColumns: "45% 55%",
          alignItems: "center",
          minHeight: "calc(100vh - 68px)",
        }}
      >
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
          {/* Primary — solid purple */}
          <a
            href={APP_URL}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#9B5CFF",
              color: "#ffffff",
              fontFamily: "var(--font-inter, sans-serif)",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "0.01em",
              borderRadius: 10,
              padding: "14px 28px",
              textDecoration: "none",
              boxShadow: "0 0 28px rgba(155,92,255,0.50)",
              transition: "background 0.15s, box-shadow 0.15s",
              whiteSpace: "nowrap",
            }}
          >
            Start Trading Smarter
          </a>

          {/* Secondary — dark outlined */}
          <a
            href="#features"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(0,0,0,0.45)",
              color: "rgba(255,255,255,0.85)",
              fontFamily: "var(--font-inter, sans-serif)",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "0.01em",
              borderRadius: 10,
              padding: "14px 28px",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.20)",
              transition: "border-color 0.15s, background 0.15s",
              whiteSpace: "nowrap",
              backdropFilter: "blur(8px)",
            }}
          >
            Explore Features
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
        <div />
      </div>
    </section>
  );
}
