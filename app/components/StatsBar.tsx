const stats = [
  { icon: "📈", label: "Live Market Data" },
  { icon: "🐋", label: "Real-time Whale Tracking" },
  { icon: "🤖", label: "AI-Powered Analysis" },
  { icon: "🔗", label: "5 Data Sources" },
  { icon: "⚡", label: "Free to Start" },
];

export default function StatsBar() {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.75)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "22px 28px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
          >
            <span style={{ fontSize: 28, flexShrink: 0 }}>{stat.icon}</span>
            <span
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: 13,
                fontWeight: 500,
                color: "rgba(255,255,255,0.70)",
                lineHeight: 1.3,
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
