const stats = [
  { icon: "📈", label: "Live Market Data" },
  { icon: "🐋", label: "Real-time Whale Tracking" },
  { icon: "🤖", label: "AI-Powered Analysis" },
  { icon: "🔗", label: "5 Data Sources" },
  { icon: "🆓", label: "Free to Start" },
];

export default function StatsBar() {
  return (
    <section className="px-6 pb-10">
      <div className="max-w-6xl mx-auto">
        <div
          style={{
            background: "#0d0d14",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "28px 36px",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left py-2"
                style={{
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(255,255,255,0.07)"
                      : "none",
                }}
              >
                <span style={{ fontSize: 22 }}>{stat.icon}</span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
