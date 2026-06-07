"use client";

const APP_URL = "https://app.getcryptosignal.com/dashboard";

interface Plan {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  featured?: boolean;
  inheritLabel?: string;
  features: string[];
  cta: string;
  ctaStyle: "purple" | "outline" | "dark";
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    tagline: "Everything you need to get started.",
    features: [
      "Top Gainers",
      "Market Sentiment",
      "Trending Tokens",
      "Basic Whale Radar",
    ],
    cta: "Start Free",
    ctaStyle: "outline",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    tagline: "For active traders who want the edge.",
    featured: true,
    inheritLabel: "Everything in Free, plus:",
    features: [
      "Early Signal Scanner",
      "Narrative Intelligence",
      "Full Whale Tracker",
      "Holdings Evaluator",
      "Token Discovery",
    ],
    cta: "Get Pro",
    ctaStyle: "purple",
  },
  {
    name: "Elite",
    price: "$49",
    period: "/month",
    tagline: "Maximum advantage for serious traders.",
    inheritLabel: "Everything in Pro, plus:",
    features: [
      "Hindsight Machine",
      "Advanced AI Analysis",
      "Priority Refresh",
      "Early Access to New Features",
    ],
    cta: "Get Elite",
    ctaStyle: "dark",
  },
];

function CheckIcon() {
  return <span className="plan-check">✓</span>;
}

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="eyebrow">Pricing</span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              margin: "0 0 12px",
            }}
          >
            Simple Pricing
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.52)", margin: 0 }}>
            Start free. Upgrade when ready.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="pricing-card"
              style={{
                background: plan.featured ? "#0f0b1e" : "#0d0d14",
                border: plan.featured
                  ? "1px solid rgba(155,92,255,0.55)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 18,
                padding: "32px 28px",
                position: "relative",
                boxShadow: plan.featured
                  ? "0 0 50px rgba(155,92,255,0.14), 0 0 100px rgba(155,92,255,0.07)"
                  : "none",
              }}
            >
              {/* Most Popular badge */}
              {plan.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#9B5CFF",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    padding: "4px 14px",
                    borderRadius: 100,
                    whiteSpace: "nowrap",
                    textTransform: "uppercase",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: plan.featured ? "#c49fff" : "rgba(255,255,255,0.5)",
                  margin: "0 0 8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span
                  style={{
                    fontSize: 46,
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: "#fff",
                  }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.45)",
                      marginBottom: 8,
                    }}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Tagline */}
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  margin: "0 0 22px",
                  lineHeight: 1.5,
                }}
              >
                {plan.tagline}
              </p>

              <div
                style={{
                  height: 1,
                  background: "rgba(255,255,255,0.07)",
                  marginBottom: 20,
                }}
              />

              {/* Feature list */}
              <div style={{ marginBottom: 28 }}>
                {plan.inheritLabel && (
                  <p
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.38)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 12,
                    }}
                  >
                    {plan.inheritLabel}
                  </p>
                )}
                {plan.features.map((feat) => (
                  <div key={feat} className="plan-feature">
                    <CheckIcon />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "12px 20px",
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "background-color 0.15s, border-color 0.15s",
                  ...(plan.ctaStyle === "purple"
                    ? { backgroundColor: "#9B5CFF", color: "#fff" }
                    : plan.ctaStyle === "outline"
                    ? {
                        border: "1px solid rgba(255,255,255,0.22)",
                        color: "#fff",
                        backgroundColor: "transparent",
                      }
                    : {
                        backgroundColor: "rgba(155,92,255,0.12)",
                        border: "1px solid rgba(155,92,255,0.25)",
                        color: "#c49fff",
                      }),
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.ctaStyle === "purple") el.style.backgroundColor = "#8445f7";
                  else if (plan.ctaStyle === "outline")
                    el.style.backgroundColor = "rgba(255,255,255,0.06)";
                  else el.style.backgroundColor = "rgba(155,92,255,0.22)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  if (plan.ctaStyle === "purple") el.style.backgroundColor = "#9B5CFF";
                  else if (plan.ctaStyle === "outline")
                    el.style.backgroundColor = "transparent";
                  else el.style.backgroundColor = "rgba(155,92,255,0.12)";
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            textAlign: "center",
            marginTop: 32,
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Not financial advice. For informational purposes only.
        </p>
      </div>
    </section>
  );
}
