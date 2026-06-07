const stats = [
  { icon: "📈", label: "Live Market Data" },
  { icon: "🐋", label: "Real-time Whale Tracking" },
  { icon: "🤖", label: "AI-Powered Analysis" },
  { icon: "🔗", label: "5 Data Sources" },
  { icon: "🆓", label: "Free to Start" },
];

export default function StatsBar() {
  return (
    <section style={{ padding: "0 0 12px" }}>
      {/* ── Status ticker bar — VoidWatch inspired ── */}
      <div
        style={{
          borderTop: "1px solid rgba(34,197,94,0.15)",
          borderBottom: "1px solid rgba(34,197,94,0.15)",
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(8px)",
          padding: "10px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span
          className="status-ticker"
          style={{ color: "rgba(34,197,94,0.75)" }}
        >
          &gt; Monitoring ETH · BNB · SOL · BTC
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 8px rgba(34,197,94,0.8)",
              display: "inline-block",
            }}
          />
          <span
            className="status-ticker"
            style={{ color: "rgba(34,197,94,0.75)" }}
          >
            System Status: Online
          </span>
        </div>
      </div>

      {/* ── Stat badges row ── */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "32px 32px 8px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 24,
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-badge">
              <div className="stat-badge-icon">{stat.icon}</div>
              <span className="stat-badge-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
