import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const APP_URL = "https://cryptosignal-lac.vercel.app";

const missionCards = [
  {
    icon: "🎯",
    title: "democratize intelligence",
    body: "Institutional-grade tools should not cost institutional prices. Every serious trader deserves access to the same data.",
  },
  {
    icon: "⚡",
    title: "signal before the noise",
    body: "By the time something trends on social media the move is done. We surface signals before the crowd reacts.",
  },
  {
    icon: "🛸",
    title: "built different",
    body: "We are not a data company that built a dashboard. We are traders who built the tool we always wanted.",
  },
];

const differentiators = [
  {
    title: "AI that speaks trader",
    body: "Our analysis does not give you raw data and leave you to figure it out. It tells you what it means and what to watch.",
  },
  {
    title: "Whale intelligence for retail",
    body: "We track large on-chain moves across ETH, BNB, and Solana and surface them in plain English — not hex addresses and block numbers.",
  },
  {
    title: "New token discovery with safety scoring",
    body: "Find newly launched tokens before they trend with AI-powered safety scoring that flags red flags automatically.",
  },
  {
    title: "One platform, every edge",
    body: "Scanner, whale tracker, narrative intelligence, portfolio analysis, price alerts — everything in one place so you stop switching between 6 different tabs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#030008", minHeight: "100vh", color: "#ffffff" }}>

        {/* ── HERO ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "160px 24px 100px",
            textAlign: "center",
          }}
        >
          {/* Nebula glow background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(155,92,255,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 70% 60%, rgba(155,92,255,0.07) 0%, transparent 60%)",
              zIndex: 0,
            }}
          />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto" }}>
            <p
              className="font-mono-tech"
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#22c55e",
                margin: "0 0 20px",
              }}
            >
              &gt; Our Story
            </p>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(48px, 7vw, 96px)",
                lineHeight: 0.95,
                margin: "0 0 24px",
                color: "#ffffff",
              }}
            >
              Built By A Trader.
              <br />
              <span style={{ color: "#9B5CFF", textShadow: "0 0 40px rgba(155,92,255,0.5)" }}>
                For Traders.
              </span>
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.6,
                margin: 0,
                fontFamily: "var(--font-inter, sans-serif)",
              }}
            >
              CryptoSignal exists because the tools we needed didn&apos;t.
            </p>
          </div>
        </section>

        {/* ── THE STORY ── */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px" }}>
          <p
            className="font-mono-tech"
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#22c55e",
              margin: "0 0 16px",
            }}
          >
            &gt; Why We Built This
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              color: "#ffffff",
              margin: "0 0 40px",
              lineHeight: 1,
            }}
          >
            Why We Built This
          </h2>

          <div
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.70)",
              lineHeight: 1.85,
              fontFamily: "var(--font-inter, sans-serif)",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <p style={{ margin: 0 }}>
              After years of trading crypto, we kept running into the same walls. The tools that actually worked were built for institutions — complex, expensive, and designed for people with teams of analysts. The affordable tools were too basic to act on. And by the time most signals reached retail traders, the move was already over.
            </p>
            <p style={{ margin: 0 }}>
              We lost money on trades we should have seen coming. We paid for platforms we could barely understand. We watched whales move markets while we were still reading yesterday&apos;s news.
            </p>
            <p style={{ margin: 0 }}>
              So we built CryptoSignal. Not for hedge funds. Not for quant teams. For traders like us — people who are serious about the market but tired of being the last to know.
            </p>
          </div>
        </section>

        {/* ── MISSION CARDS ── */}
        <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.015)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p
              className="font-mono-tech"
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#22c55e",
                margin: "0 0 16px",
                textAlign: "center",
              }}
            >
              &gt; Our Mission
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                color: "#ffffff",
                margin: "0 0 48px",
                lineHeight: 1,
                textAlign: "center",
              }}
            >
              What Drives Us
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {missionCards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: "#0d0d14",
                    border: "1px solid rgba(155,92,255,0.18)",
                    borderRadius: 16,
                    padding: "32px 28px",
                    transition: "border-color 0.2s",
                  }}
                  className="feature-card"
                >
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{card.icon}</div>
                  <h3
                    className="font-mono-tech"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#9B5CFF",
                      margin: "0 0 12px",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.62)",
                      lineHeight: 1.7,
                      margin: 0,
                      fontFamily: "var(--font-inter, sans-serif)",
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT MAKES US DIFFERENT ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <p
            className="font-mono-tech"
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#22c55e",
              margin: "0 0 16px",
            }}
          >
            &gt; What Makes Us Different
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              color: "#ffffff",
              margin: "0 0 48px",
              lineHeight: 1,
            }}
          >
            Not Another Crypto Dashboard
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {differentiators.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#0d0d14",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "28px 24px",
                }}
                className="feature-card"
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#9B5CFF",
                    boxShadow: "0 0 8px rgba(155,92,255,0.8)",
                    marginBottom: 16,
                  }}
                />
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#ffffff",
                    margin: "0 0 10px",
                    fontFamily: "var(--font-inter, sans-serif)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                    margin: 0,
                    fontFamily: "var(--font-inter, sans-serif)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MISSION STATEMENT CARD ── */}
        <section style={{ padding: "60px 24px" }}>
          <div
            style={{
              maxWidth: 860,
              margin: "0 auto",
              background: "#0d0d14",
              border: "1px solid rgba(155,92,255,0.35)",
              borderRadius: 20,
              padding: "64px 40px",
              textAlign: "center",
              boxShadow: "0 0 60px rgba(155,92,255,0.08), 0 0 120px rgba(155,92,255,0.04)",
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "#ffffff",
                margin: "0 0 20px",
                lineHeight: 1.1,
              }}
            >
              Scan the market for signals{" "}
              <span style={{ color: "#9B5CFF", textShadow: "0 0 30px rgba(155,92,255,0.5)" }}>
                before the crowd reacts.
              </span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.45)",
                margin: 0,
                fontFamily: "var(--font-inter, sans-serif)",
              }}
            >
              That is not just our tagline. It is the only reason CryptoSignal exists.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "80px 24px 120px", textAlign: "center" }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#ffffff",
              margin: "0 0 20px",
              lineHeight: 1,
            }}
          >
            Ready to Trade Smarter?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.45)",
              margin: "0 0 36px",
              fontFamily: "var(--font-inter, sans-serif)",
            }}
          >
            Free to start. No credit card required.
          </p>
          <a
            href={APP_URL}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              background: "rgba(0,0,0,0.55)",
              color: "#ffffff",
              fontFamily: "var(--font-mono-tech, monospace)",
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              borderRadius: 100,
              padding: "13px 16px 13px 26px",
              textDecoration: "none",
              border: "1.5px solid #9B5CFF",
              boxShadow: "0 0 18px rgba(155,92,255,0.25)",
            }}
          >
            Enter CryptoSignal
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#9B5CFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 0 12px rgba(155,92,255,0.7)",
              }}
            >
              <span style={{ fontSize: 13, lineHeight: 1 }}>◎</span>
            </span>
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
