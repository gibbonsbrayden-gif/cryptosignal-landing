import Image from "next/image";

const APP_URL = "https://cryptosignal-lac.vercel.app";

const trustPills = [
  "AI Driven Analysis",
  "Real-Time Signals",
  "Whale Intelligence",
  "Risk Managed",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:py-28">
      {/* Background radial glow from top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% -5%, rgba(155,92,255,0.14) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            {/* Badge */}
            <span
              style={{
                display: "inline-block",
                background: "rgba(155, 92, 255, 0.14)",
                border: "1px solid rgba(155, 92, 255, 0.38)",
                borderRadius: 100,
                padding: "5px 14px",
                fontSize: 12,
                fontWeight: 600,
                color: "#c49fff",
                letterSpacing: "0.02em",
              }}
            >
              AI-Powered Crypto Intelligence
            </span>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(36px, 5.5vw, 60px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.028em",
                margin: 0,
              }}
            >
              Intelligence.{" "}
              <span className="inline lg:hidden">Precision. </span>
              <span className="hidden lg:inline">
                <br />
                Precision.{" "}
              </span>
              <span style={{ color: "#9B5CFF" }}>PROFITABILITY.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.58)",
                lineHeight: 1.65,
                maxWidth: 440,
                margin: 0,
              }}
            >
              Real-time signals. AI-powered insights. Built for traders who
              demand results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: "13px 26px",
                  fontSize: 15,
                  fontWeight: 600,
                  borderRadius: 10,
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Start Trading Smarter
              </a>
              <a
                href="#features"
                className="btn-secondary"
                style={{
                  padding: "13px 26px",
                  fontSize: 15,
                  fontWeight: 600,
                  borderRadius: 10,
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Explore Features
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2">
              {trustPills.map((pill) => (
                <span key={pill} className="trust-pill">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Alien hero image */}
          <div className="flex-1 flex items-center justify-center">
            <div style={{ position: "relative" }}>
              {/* Purple nebula glow behind image */}
              <div
                style={{
                  position: "absolute",
                  inset: "-15%",
                  background:
                    "radial-gradient(ellipse at center, rgba(155,92,255,0.45) 0%, rgba(155,92,255,0.18) 40%, transparent 70%)",
                  filter: "blur(48px)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <Image
                src="/hero-alien.png"
                alt="CryptoSignal AI alien trader"
                width={560}
                height={560}
                priority
                style={{
                  width: "clamp(420px, 56vw, 720px)",
                  height: "auto",
                  position: "relative",
                  zIndex: 1,
                  display: "block",
                  maskImage:
                    "radial-gradient(ellipse 80% 90% at 60% 50%, black 40%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 80% 90% at 60% 50%, black 40%, transparent 100%)",
                  filter: "drop-shadow(0 0 40px rgba(155,92,255,0.5))",
                  mixBlendMode: "screen",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
