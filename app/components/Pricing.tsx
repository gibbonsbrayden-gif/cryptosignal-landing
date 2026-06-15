"use client";

const UPGRADE_URL = "https://app.getcryptosignal.com/upgrade";
const SIGNUP_URL = "https://app.getcryptosignal.com/sign-up";

const freeFeatures = [
  "Pre-Move Radar — always free",
  "Today's Signals — always free",
  "Dashboard, Narratives, DEX Trending",
  "AI Coin Analysis — 10 credits",
  "AI Chart Reader — 15 credits",
  "Morning Briefing — 5 credits",
  "Price Alerts — 🔒 locked",
  "Whale Tracker — 🔒 locked",
];

const proFeatures = [
  "🔥 500 credits per month",
  "Pre-Move Radar — multi-agent AI scanner 🆕",
  "AI Chart Reader — unlimited 🆕",
  "AI Coin Analysis — unlimited",
  "Full Whale Tracker — ETH chain",
  "Morning Briefing with live news catalysts",
  "Narrative Intelligence — unlimited",
  "Price Alerts — up to 10",
  "Signal Accuracy Track Record",
];

const eliteFeatures = [
  "♾ Unlimited credits — zero caps ever",
  "Priority AI — faster smarter analysis",
  "AI Chart Reader — unlimited",
  "Price Alerts — unlimited",
  "Early access to every new feature",
  "Founding Member badge",
  "Priority support — 24hr response",
  "Beta feature access before anyone else",
];

const creditPackages = [
  { credits: "100 credits", price: "$4.99", popular: false },
  { credits: "300 credits", price: "$12.99", popular: true },
  { credits: "750 credits", price: "$24.99", popular: false },
];

function FeatureRow({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
      <span style={{ color, flexShrink: 0, marginTop: 1 }}>✓</span>
      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.70)" }}>{label}</span>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 md:px-6 py-20 w-full">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.35)", borderRadius: 99, padding: "8px 24px", marginBottom: 20 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#22c55e", letterSpacing: "0.05em" }}>
              🔒 Beta Founding Member Pricing — Lock in your rate forever before we exit beta
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-0.025em", margin: "0 0 12px" }}>
            Founding Member Pricing
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.52)", margin: 0 }}>
            Beta pricing active now. Subscribe today and pay this rate forever — even after we raise prices at full launch.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">

          {/* FREE */}
          <div style={{ background: "#0d0d14", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "32px 28px" }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.5)", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>FREE</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 8 }}>
              <span style={{ fontSize: 46, fontWeight: 800, lineHeight: 1, color: "#fff" }}>$0</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>/month</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 8px" }}>⚡ 50 credits per month</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 22px" }}>Explore the platform free.</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 20 }} />
            <div style={{ marginBottom: 28 }}>
              {freeFeatures.map((f) => <FeatureRow key={f} label={f} color="#9B5CFF" />)}
            </div>
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 10, textDecoration: "none", border: "1px solid rgba(255,255,255,0.22)", color: "#fff", backgroundColor: "transparent" }}
            >
              Start Free
            </a>
          </div>

          {/* PRO */}
          <div style={{ background: "#0f0b1e", border: "1px solid rgba(155,92,255,0.55)", borderRadius: 18, padding: "32px 28px", position: "relative", boxShadow: "0 0 50px rgba(155,92,255,0.14), 0 0 100px rgba(155,92,255,0.07)" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#9B5CFF", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", padding: "4px 14px", borderRadius: 100, whiteSpace: "nowrap", textTransform: "uppercase" }}>
              MOST POPULAR
            </div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#c49fff", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>PRO</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#ef4444", textDecoration: "line-through", marginBottom: 8 }}>$34.99</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 46, fontWeight: 800, lineHeight: 1, color: "#22c55e" }}>$19.99</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>/month</span>
            </div>
            <p style={{ fontSize: 12, color: "#22c55e", marginBottom: 16 }}>You save $15/mo · Lock in forever</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 22px" }}>For CT degens who want real edge.</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 20 }} />
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>EVERYTHING IN FREE, PLUS:</p>
              {proFeatures.map((f) => <FeatureRow key={f} label={f} color="#9B5CFF" />)}
            </div>
            <a
              href={UPGRADE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 10, textDecoration: "none", backgroundColor: "#9B5CFF", color: "#fff" }}
            >
              Get Pro — $19.99/mo
            </a>
          </div>

          {/* ELITE */}
          <div style={{ background: "#0d0d14", border: "1px solid rgba(234,179,8,0.45)", borderRadius: 18, padding: "32px 28px", position: "relative", boxShadow: "0 0 50px rgba(234,179,8,0.08)" }}>
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#eab308", color: "#000", fontSize: 11, fontWeight: 700, letterSpacing: "0.07em", padding: "4px 14px", borderRadius: 100, whiteSpace: "nowrap", textTransform: "uppercase" }}>
              BEST VALUE
            </div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#fcd34d", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>ELITE</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#ef4444", textDecoration: "line-through", marginBottom: 8 }}>$89.99</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 46, fontWeight: 800, lineHeight: 1, color: "#FACC15" }}>$49.99</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>/month</span>
            </div>
            <p style={{ fontSize: 12, color: "#22c55e", marginBottom: 16 }}>You save $40/mo · Lock in forever</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", margin: "0 0 22px" }}>Maximum advantage. Zero limits.</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 20 }} />
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>EVERYTHING IN PRO, PLUS:</p>
              {eliteFeatures.map((f) => <FeatureRow key={f} label={f} color="#eab308" />)}
            </div>
            <a
              href={UPGRADE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 10, textDecoration: "none", backgroundColor: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.45)", color: "#fcd34d" }}
            >
              Get Elite — $49.99/mo
            </a>
          </div>
        </div>

        {/* Credit Packages */}
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.60)", marginBottom: 20 }}>
            💳 Just need more credits? No subscription required.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full" style={{ maxWidth: 600, margin: "0 auto" }}>
            {creditPackages.map((pkg) => (
              <div key={pkg.credits} style={{ position: "relative" }}>
                {pkg.popular && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#9B5CFF", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.07em", padding: "3px 10px", borderRadius: 100, whiteSpace: "nowrap", textTransform: "uppercase" }}>
                    MOST POPULAR
                  </div>
                )}
                <a
                  href={UPGRADE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "#0d0d14", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "16px", textDecoration: "none", textAlign: "center", display: "block" }}
                >
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#9B5CFF", margin: "0 0 4px" }}>⚡ {pkg.credits}</p>
                  <p style={{ fontSize: 18, fontWeight: 800, color: "#fff", margin: 0 }}>{pkg.price}</p>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p style={{ textAlign: "center", marginTop: 32, fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
          All paid plans include a 7-day money back guarantee. Cancel anytime. Beta founding member pricing locked in forever. Not financial advice.
        </p>
      </div>
    </section>
  );
}
