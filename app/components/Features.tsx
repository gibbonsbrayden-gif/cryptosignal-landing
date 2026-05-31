const features = [
  {
    icon: "📡",
    title: "AI Signal Scanner",
    description:
      "Continuously scans markets for high-probability setups powered by machine learning models trained on millions of data points.",
  },
  {
    icon: "🐋",
    title: "Whale Radar",
    description:
      "Track large wallet movements and identify smart money flows before they register on price charts.",
  },
  {
    icon: "🧠",
    title: "Narrative Intelligence",
    description:
      "Detect emerging sector narratives and rotation patterns before they reach mainstream awareness.",
  },
  {
    icon: "⚖️",
    title: "Holdings Risk Evaluator",
    description:
      "Assess portfolio concentration, correlation, and downside exposure across your entire crypto book.",
  },
  {
    icon: "🔮",
    title: "Token Discovery",
    description:
      "Surface early-stage tokens with strong on-chain fundamentals before they hit major exchange listings.",
  },
  {
    icon: "📊",
    title: "Market Sentiment",
    description:
      "Real-time sentiment analysis aggregated from social channels, news feeds, and on-chain activity.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="eyebrow">Features</span>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            margin: "0 0 14px",
          }}
        >
          Why Traders Choose CryptoSignal
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.52)",
            maxWidth: 460,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Every tool you need to gain a real edge in crypto markets.
        </p>
      </div>

      {/* 3×2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="feature-card"
            style={{
              background: "#0d0d14",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: "28px 26px",
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
            <h3
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 8px",
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
