const APP_URL = "https://cryptosignal-lac.vercel.app";

const trustPills = [
  { icon: "◈", label: "AI Driven Analysis" },
  { icon: "◉", label: "Real-Time Signals" },
  { icon: "⬡", label: "Whale Intelligence" },
  { icon: "◆", label: "Risk Managed" },
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
        paddingTop: 68, // navbar height
      }}
    >
      {/* ── Full-viewport background image ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* ── Dark left overlay so text is readable ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(3,0,8,0.88) 0%, rgba(3,0,8,0.72) 38%, rgba(3,0,8,0.20) 65%, rgba(3,0,8,0.0) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Bottom fade ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 160,
          background: "linear-gradient(to bottom, transparent, #030008)",
          zIndex: 2,
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          paddingTop: 40,
          paddingBottom: 80,
          width: "100%",
        }}
      >
        {/* Green eyebrow label */}
        <p
          className="font-mono-tech"
          style={{
            fontSize: 12,
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "#22c55e",
            margin: "0 0 20px",
          }}
        >
          &gt; AI-Powered Crypto Intelligence
        </p>

        {/* Massive display headline — Bebas Neue */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(72px, 10vw, 130px)",
            lineHeight: 0.95,
            margin: "0 0 28px",
            maxWidth: 680,
          }}
        >
          <span style={{ color: "#ffffff", display: "block" }}>INTELLIGENCE.</span>
          <span style={{ color: "#ffffff", display: "block" }}>PRECISION.</span>
          <span
            style={{
              color: "#9B5CFF",
              display: "block",
              textShadow: "0 0 40px rgba(155,92,255,0.55), 0 0 80px rgba(155,92,255,0.25)",
            }}
          >
            PROFITABILITY.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.58)",
            lineHeight: 1.65,
            maxWidth: 420,
            margin: "0 0 36px",
            fontFamily: "var(--font-inter, sans-serif)",
          }}
        >
          Real-time signals. AI-powered insights.
          <br />
          Built for traders who demand results.
        </p>

        {/* CTA Buttons — VoidWatch style */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", marginBottom: 44 }}>
          {/* Primary — filled purple pill with dot */}
          <a href="#waitlist" className="btn-primary">
            Start Trading Smarter
            <span className="btn-primary-dot" />
          </a>

          {/* Secondary — text + arrow */}
          <a href="#features" className="btn-secondary">
            Explore Features
            <span className="btn-secondary-arrow">›</span>
          </a>
        </div>

        {/* Trust pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {trustPills.map((pill) => (
            <span key={pill.label} className="trust-pill">
              <span style={{ color: "rgba(155,92,255,0.7)", fontSize: 10 }}>{pill.icon}</span>
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
