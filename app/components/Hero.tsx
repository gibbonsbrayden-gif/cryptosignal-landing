"use client";

const APP_URL = "https://cryptosignal-lac.vercel.app";

const trustPills = [
  { icon: "◈", label: "AI Driven Analysis" },
  { icon: "◉", label: "Real-Time Signals" },
  { icon: "⬡", label: "Whale Intelligence" },
  { icon: "◆", label: "Risk Managed" },
];

// Floating data panel cards — mimic real-time crypto UI
const floatingCards = [
  {
    id: "btc",
    title: "BTC / USDT",
    value: "$67,420.88",
    change: "+4.2%",
    positive: true,
    sub: "24h Volume: $38.4B",
    top: "8%",
    right: "4%",
    width: 210,
  },
  {
    id: "signal",
    title: "AI Signal Score",
    value: "87 / 100",
    change: "STRONG BUY",
    positive: true,
    sub: "Confidence: 94.1%",
    top: "30%",
    right: "1%",
    width: 220,
  },
  {
    id: "sentiment",
    title: "Market Sentiment",
    value: "BULLISH",
    change: "Fear & Greed: 72",
    positive: true,
    sub: "Social score: 8.4/10",
    top: "54%",
    right: "5%",
    width: 210,
  },
  {
    id: "whale",
    title: "Whale Activity",
    value: "↑ 14 Large Txns",
    change: "+$420M moved",
    positive: true,
    sub: "Past 2 hours",
    top: "75%",
    right: "2%",
    width: 215,
  },
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

      {/* ── Dark left overlay for text legibility ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(3,0,8,0.92) 0%, rgba(3,0,8,0.80) 35%, rgba(3,0,8,0.30) 58%, rgba(3,0,8,0.0) 75%)",
          zIndex: 1,
        }}
      />

      {/* ── Top dark vignette ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(to bottom, rgba(3,0,8,0.6), transparent)",
          zIndex: 2,
        }}
      />

      {/* ── Bottom fade ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(to bottom, transparent, #030008)",
          zIndex: 2,
        }}
      />

      {/* ── Floating data cards (right side) ── */}
      {floatingCards.map((card) => (
        <div
          key={card.id}
          className="floating-card"
          style={{
            position: "absolute",
            top: card.top,
            right: card.right,
            width: card.width,
            zIndex: 4,
          }}
        >
          {/* Card header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <span
              className="font-mono-tech"
              style={{ fontSize: 10, letterSpacing: "0.14em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}
            >
              {card.title}
            </span>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 6px rgba(34,197,94,0.9)",
                display: "inline-block",
              }}
            />
          </div>
          {/* Main value */}
          <div
            className="font-display"
            style={{
              fontSize: 22,
              color: "#ffffff",
              letterSpacing: "0.03em",
              lineHeight: 1,
              marginBottom: 5,
            }}
          >
            {card.value}
          </div>
          {/* Change badge */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span
              className="font-mono-tech"
              style={{
                fontSize: 11,
                color: card.positive ? "#22c55e" : "#ef4444",
                letterSpacing: "0.08em",
              }}
            >
              {card.change}
            </span>
            <span
              className="font-mono-tech"
              style={{ fontSize: 9, color: "rgba(255,255,255,0.30)", letterSpacing: "0.06em" }}
            >
              {card.sub}
            </span>
          </div>
          {/* Sparkline-style bottom bar */}
          <div
            style={{
              marginTop: 10,
              height: 2,
              borderRadius: 2,
              background: `linear-gradient(90deg, rgba(155,92,255,0.15) 0%, ${card.positive ? "rgba(34,197,94,0.6)" : "rgba(239,68,68,0.6)"} 100%)`,
            }}
          />
        </div>
      ))}

      {/* ── Left content ── */}
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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
        }}
      >
        <div>
          {/* Green eyebrow label */}
          <p
            className="font-mono-tech"
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#22c55e",
              margin: "0 0 22px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ color: "rgba(34,197,94,0.5)" }}>&gt;</span>
            AI-Powered Crypto Intelligence
          </p>

          {/* Massive display headline — Bebas Neue */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(80px, 9.5vw, 138px)",
              lineHeight: 0.92,
              margin: "0 0 30px",
            }}
          >
            <span style={{ color: "#ffffff", display: "block" }}>INTELLIGENCE.</span>
            <span style={{ color: "#ffffff", display: "block" }}>PRECISION.</span>
            <span
              style={{
                color: "#9B5CFF",
                display: "block",
                textShadow: "0 0 50px rgba(155,92,255,0.6), 0 0 100px rgba(155,92,255,0.3)",
              }}
            >
              PROFITABILITY.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.52)",
              lineHeight: 1.7,
              maxWidth: 400,
              margin: "0 0 36px",
              fontFamily: "var(--font-inter, sans-serif)",
            }}
          >
            Real-time signals. AI-powered insights.
            <br />
            Built for traders who demand results.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", marginBottom: 44 }}>
            <a href={APP_URL} className="btn-primary">
              Start Trading Smarter
              <span className="btn-primary-dot" />
            </a>
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

        {/* Right column — intentionally empty; bg image + floating cards fill it */}
        <div />
      </div>
    </section>
  );
}
