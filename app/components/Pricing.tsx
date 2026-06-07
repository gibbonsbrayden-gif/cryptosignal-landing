"use client";

const APP_URL = "https://app.getcryptosignal.com/dashboard";
const UPGRADE_URL = "https://app.getcryptosignal.com/upgrade";
const SIGNUP_URL = "https://app.getcryptosignal.com/sign-up";

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Launch Sale Banner */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.35)", borderRadius: 99, padding: "8px 24px", marginBottom: 20 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#22c55e", letterSpacing: "0.05em" }}>🚀 Launch Sale — Lock in founding member prices forever</span>
          </div>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <span className="eyebrow">Pricing</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-0.025em", margin: "0 0 12px" }}>Simple Pricing</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.52)", margin: 0 }}>Start free. Upgrade when ready. Founding member pricing locked in forever.</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">

          {/* FREE */}
          <div style={{ background: "#0d0d14", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "32px 28px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Free</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 8 }}>
              <span style={{ fontSize: 46, fontWeight: 800, lineHeight: 1, color: "#fff" }}>$0</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>/month</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 8px" }}>⚡ 100 credits per month</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 22px" }}>Everything you need to get started.</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 20 }} />
            <div style={{ marginBottom: 28 }}>
              {[
                "Homepage dashboard — always free",
                "Top Gainers, Market Sentiment, Trending Tokens",
                "1 free preview of Whale Tracker (20 credits)",
                "1 free preview of Hindsight Machine (20 credits)",
                "1 free preview of Wallet Tracker (20 credits)",
                "AI Coin Analysis — 10 credits",
                "Early Signal Scanner — 5 credits",
                "New Token Launches — 5 credits",
                "Narrative Intelligence — 3 credits",
                "Morning Briefing — 5 credits",
                "Developer Activity — 5 credits",
                "Price Alerts — 🔒 locked",
              ].map((f) => (
                <div key={f} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#9B5CFF", flexShrink: 0, marginTop: 1 }}>✓</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.70)" }}>{f}</span>
                </div>
              ))}
            </div>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 10, textDecoration: "none", border: "1px solid rgba(255,255,255,0.22)", color: "#fff", backgroundColor: "transparent" }}>
              Start Free
            </a>
          </div>

          {/* PRO */}
          <div style={{ background: "#0f0b1e", border: "1px solid rgba(155,92,255,0.55)", borderRadius: 18, padding: "32px 28px", position: "relative", boxShadow: "0 0 50px rgba(155,92,255,0.14), 0 0 100px rgba(155,92,255,0.07)" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#9B5CFF", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", padding: "4px 14px", borderRadius: 100, whiteSpace: "nowrap", textTransform: "uppercase" }}>
              Most Popular
            </div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#c49fff", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Pro</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#ef4444", textDecoration: "line-through", marginBottom: 8 }}>$34.99</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 8 }}>
              <span style={{ fontSize: 46, fontWeight: 800, lineHeight: 1, color: "#22c55e" }}>$24.99</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>/month</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 22px" }}>For active traders who want the edge.</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 20 }} />
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Everything in Free, plus:</p>
              {[
                "Unlimited credits — no monthly cap",
                "Full Whale Tracker — ETH, BNB, Solana",
                "Hindsight Machine — unlimited",
                "Wallet Tracker — up to 3 wallets",
                "Holdings & PnL tracking — unlimited",
                "Price Alerts — up to 10",
                "Morning Briefing with portfolio impact",
                "Real-time data — no delays",
                "CSV Export",
              ].map((f) => (
                <div key={f} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#9B5CFF", flexShrink: 0, marginTop: 1 }}>✓</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.70)" }}>{f}</span>
                </div>
              ))}
            </div>
            <a href={UPGRADE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 10, textDecoration: "none", backgroundColor: "#9B5CFF", color: "#fff" }}>
              Get Pro — $24.99/mo
            </a>
          </div>

          {/* ELITE */}
          <div style={{ background: "#0d0d14", border: "1px solid rgba(234,179,8,0.45)", borderRadius: 18, padding: "32px 28px", position: "relative", boxShadow: "0 0 50px rgba(234,179,8,0.08)" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#eab308", color: "#000", fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", padding: "4px 14px", borderRadius: 100, whiteSpace: "nowrap", textTransform: "uppercase" }}>
              Best Value
            </div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#fcd34d", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Elite</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#ef4444", textDecoration: "line-through", marginBottom: 8 }}>$89.99</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 8 }}>
              <span style={{ fontSize: 46, fontWeight: 800, lineHeight: 1, color: "#22c55e" }}>$59.99</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>/month</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 22px" }}>Maximum advantage. Zero limits.</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 20 }} />
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Everything in Pro, plus:</p>
              {[
                "Unlimited everything — zero caps",
                "Wallet Tracker — unlimited wallets",
                "Price Alerts — unlimited",
                "Smart Money Alerts",
                "Custom whale watchlist",
                "Narrative momentum alerts",
                "Token Unlock Calendar — coming soon",
                "Advanced AI analysis",
                "Early access to new features",
                "Priority support — 24hr response",
              ].map((f) => (
                <div key={f} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#eab308", flexShrink: 0, marginTop: 1 }}>✓</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.70)" }}>{f}</span>
                </div>
              ))}
            </div>
            <a href={UPGRADE_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 10, textDecoration: "none", backgroundColor: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.45)", color: "#fcd34d" }}>
              Get Elite — $59.99/mo
            </a>
          </div>
        </div>

        {/* Credits Section */}
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.60)", marginBottom: 20 }}>💳 Just need more credits? No subscription required.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 600, margin: "0 auto" }}>
            {[
              { credits: "100 credits", price: "$4.99" },
              { credits: "300 credits", price: "$9.99" },
              { credits: "1,000 credits", price: "$24.99" },
            ].map((pkg) => (
              <a key={pkg.credits} href={UPGRADE_URL} target="_blank" rel="noopener noreferrer" style={{ background: "#0d0d14", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "16px", textDecoration: "none", textAlign: "center", display: "block" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#9B5CFF", margin: "0 0 4px" }}>⚡ {pkg.credits}</p>
                <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: 0 }}>{pkg.price}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p style={{ textAlign: "center", marginTop: 32, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          All paid plans include a 7-day money back guarantee. Cancel anytime. Founding member pricing locked in forever. Not financial advice.
        </p>
      </div>
    </section>
  );
}
