"use client";
import { useState } from "react";

const APP_URL = "https://cryptosignal-lac.vercel.app";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#030008",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          <span style={{ fontSize: 22 }}>🛸</span>
          <span
            style={{ fontWeight: 700, fontSize: 16, color: "#fff", letterSpacing: "-0.01em" }}
          >
            CryptoSignal
          </span>
        </a>

        {/* Desktop center links */}
        <div
          className="hidden md:flex items-center"
          style={{ gap: 36 }}
        >
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </div>

        {/* Desktop right buttons */}
        <div className="hidden md:flex items-center" style={{ gap: 10 }}>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 18px",
              fontSize: 14,
              fontWeight: 500,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.22)",
              borderRadius: 9,
              textDecoration: "none",
              transition: "border-color 0.15s, background 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Log In
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 18px",
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              backgroundColor: "#9B5CFF",
              borderRadius: 9,
              textDecoration: "none",
              transition: "background-color 0.15s, opacity 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#8445f7")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#9B5CFF")
            }
          >
            Enter App
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 20,
            cursor: "pointer",
            padding: 4,
          }}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            backgroundColor: "#030008",
            padding: "16px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <a
            href="#features"
            className="nav-link"
            style={{ padding: "6px 0", fontSize: 15 }}
            onClick={() => setOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="nav-link"
            style={{ padding: "6px 0", fontSize: 15 }}
            onClick={() => setOpen(false)}
          >
            Pricing
          </a>
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 500,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.22)",
              borderRadius: 9,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Log In
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              backgroundColor: "#9B5CFF",
              borderRadius: 9,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Enter App
          </a>
        </div>
      )}
    </nav>
  );
}
