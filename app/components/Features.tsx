const features = [
  {
    icon: "🔭",
    title: "Early Signal Scanner",
    description:
      "Detect unusual volume spikes in small cap coins before they hit mainstream radar. Ranked by signal strength.",
  },
  {
    icon: "🐋",
    title: "Whale Tracker",
    description:
      "Track large on-chain moves across ETH, BNB, and Solana in real time. Know what smart money is doing before the crowd reacts.",
  },
  {
    icon: "🧠",
    title: "Narrative Intelligence",
    description:
      "See which crypto narratives are heating up right now — DeFi, AI tokens, RWA, Memecoins and more. Ranked by momentum.",
  },
  {
    icon: "🚀",
    title: "New Token Launches",
    description:
      "Discover newly launched tokens with AI-powered safety scoring. Filter by chain, age, and liquidity to find gems early.",
  },
  {
    icon: "💼",
    title: "Holdings & PnL Tracker",
    description:
      "Track your portfolio with real-time profit and loss calculations. AI-powered risk breakdown and upside projections.",
  },
  {
    icon: "⏱",
    title: "Hindsight Machine",
    description:
      "What if you had bought SOL instead of DOGE? Compare any two coins over any time period and see the difference.",
  },
  {
    icon: "🔔",
    title: "Price Alerts",
    description:
      "Set price targets for any coin and get instant email notifications when they hit. Never miss a move again.",
  },
  {
    icon: "🌅",
    title: "AI Morning Briefing",
    description:
      "Start every day with an AI-generated market summary. What happened overnight, what to watch today, and your portfolio impact.",
  },
  {
    icon: "🔬",
    title: "Deep Coin Research",
    description:
      "Every coin page includes AI analysis, developer activity score, social buzz, price levels, news, and exchange links.",
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
