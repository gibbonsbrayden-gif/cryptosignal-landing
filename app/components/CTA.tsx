"use client";
import { useState } from "react";

const APP_URL = "https://app.getcryptosignal.com/dashboard";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      try {
        const existing: string[] = JSON.parse(
          localStorage.getItem("waitlist_emails") || "[]"
        );
        if (!existing.includes(email)) {
          existing.push(email);
          localStorage.setItem("waitlist_emails", JSON.stringify(existing));
        }
      } catch {
        // localStorage unavailable — submission still succeeds visually
      }
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" style={{ padding: "40px 24px 80px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div
          style={{
            background: "#0d0d14",
            border: "1px solid rgba(155,92,255,0.38)",
            borderRadius: 24,
            padding: "56px 40px",
            textAlign: "center",
            boxShadow:
              "0 0 70px rgba(155,92,255,0.1), 0 0 140px rgba(155,92,255,0.05)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle background glow inside card */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 500,
              height: 300,
              background:
                "radial-gradient(ellipse, rgba(155,92,255,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                margin: "0 0 14px",
              }}
            >
              Ready to Trade Smarter?
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.52)",
                margin: "0 0 32px",
                lineHeight: 1.6,
              }}
            >
              Join traders already using AI to find the signal in the noise.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: "16px 24px",
                  background: "rgba(34,197,94,0.12)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  borderRadius: 12,
                  color: "#22c55e",
                  fontWeight: 600,
                  fontSize: 15,
                  marginBottom: 20,
                }}
              >
                You&apos;re on the list! We&apos;ll notify you at launch.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  gap: 10,
                  maxWidth: 460,
                  margin: "0 auto 20px",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="email"
                  className="email-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ flex: 1, minWidth: 200 }}
                  required
                />
                <button
                  type="submit"
                  style={{
                    padding: "12px 22px",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    backgroundColor: "#9B5CFF",
                    border: "none",
                    borderRadius: 10,
                    cursor: "pointer",
                    transition: "background-color 0.15s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "#8445f7")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "#9B5CFF")
                  }
                >
                  Get Early Access
                </button>
              </form>
            )}

            <p
              style={{ fontSize: 12, color: "rgba(255,255,255,0.32)", margin: 0 }}
            >
              No credit card required · Free to start
            </p>

            {!submitted && (
              <p style={{ marginTop: 16, margin: "16px 0 0" }}>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
                  or{" "}
                </span>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 13,
                    color: "#9B5CFF",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  go straight to the app →
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
