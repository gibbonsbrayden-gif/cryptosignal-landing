export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 items-start">
          {/* Left: Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span style={{ fontSize: 20 }}>🛸</span>
              <span style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>
                CryptoSignal
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.65,
                maxWidth: 220,
                margin: 0,
              }}
            >
              AI-powered crypto intelligence for traders who demand results.
            </p>
          </div>

          {/* Center: Nav links */}
          <div className="flex flex-col gap-3 md:items-center">
            <a href="#features" className="footer-link">
              Features
            </a>
            <a href="#pricing" className="footer-link">
              Pricing
            </a>
            <a
              href="https://app.getcryptosignal.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Launch App
            </a>
          </div>

          {/* Right: Disclaimer */}
          <div className="md:text-right">
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              CryptoSignal does not provide financial advice. All content is for
              informational purposes only. Always do your own research before
              investing.
            </p>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div
          className="flex justify-center py-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p
            style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", margin: 0 }}
          >
            © {year} CryptoSignal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
