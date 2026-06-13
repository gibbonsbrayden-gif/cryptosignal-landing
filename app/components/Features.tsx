const features = [
  {
    icon: "⚡",
    title: "Pre-Move Radar",
    description:
      "Multi-agent AI scans 200+ coins simultaneously — detecting volume anomalies, news catalysts, and narrative heat BEFORE price reacts. Find setups before the crowd notices.",
  },
  {
    icon: "📊",
    title: "AI Chart Reader",
    description:
      "Upload any chart screenshot and get instant professional TA. Bull case, bear case, key levels, pattern detection — powered by Claude AI. 15 credits per read.",
  },
  {
    icon: "🎯",
    title: "Today's Signals",
    description:
      "5 AI-scored coins with converging signals every day. Volume spikes, narrative momentum, price action quality — all scored against evidence-backed research. Always free.",
  },
  {
    icon: "🧠",
    title: "Narrative Intelligence",
    description:
      "See which crypto narratives are heating up right now — AI tokens, RWA, DePIN, DeFi and more. Ranked by momentum with the top performers in each sector.",
  },
  {
    icon: "🔬",
    title: "AI Coin Analysis",
    description:
      "Every coin gets a full AI breakdown: bull case, bear case, tactical thesis, risk score, entry zone, stop loss, and price targets. 10 credits. Powered by Claude AI.",
  },
  {
    icon: "🌅",
    title: "Morning Briefing",
    description:
      "AI market summary powered by live news. Key catalysts, what moved overnight, what to watch today. Updated every 8 hours. 5 credits.",
  },
  {
    icon: "🐋",
    title: "Whale Tracker",
    description:
      "Track large on-chain ETH moves in real time. See what smart money is doing before the crowd reacts. Available on Pro and Elite.",
  },
  {
    icon: "🔥",
    title: "DEX Trending",
    description:
      "See what tokens are getting the most DEX volume right now across Solana, Ethereum, Base and BSC. Real signals, not noise. Updated every 5 minutes.",
  },
  {
    icon: "📈",
    title: "Signal Track Record",
    description:
      "We track our own performance. Every signal batch recorded and checked 7 days later. Full transparent track record — no hiding bad calls.",
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
          Every tool you need to catch moves before the crowd reacts.
        </p>
      </div>

      {/* 3×3 grid */}
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
