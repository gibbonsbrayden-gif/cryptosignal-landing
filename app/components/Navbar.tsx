"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const CLERK_READY =
  !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes("replace_me");

const NavbarAuth = CLERK_READY
  ? dynamic(() => import("./NavbarAuth"), { ssr: false })
  : null;

const APP_URL = "https://cryptosignal-lac.vercel.app";

function StaticButtons({ mobile, onClose }: { mobile?: boolean; onClose?: () => void }) {
  if (mobile) {
    return (
      <>
        <a href={APP_URL} onClick={onClose} className="nav-btn-login" style={{ textAlign: "center" }}>
          Log In
        </a>
        <a href={APP_URL} onClick={onClose} className="nav-btn-enter" style={{ textAlign: "center" }}>
          Enter App
        </a>
      </>
    );
  }
  return (
    <>
      <a href={APP_URL} className="nav-btn-login">Log In</a>
      <a href={APP_URL} className="nav-btn-enter">Enter App</a>
    </>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        borderBottom: "none",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Logo — CRYPTO SIGNAL style from ref 2 */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 0, textDecoration: "none" }}>
          <span
            className="font-display"
            style={{ fontSize: 22, color: "#ffffff", letterSpacing: "0.10em" }}
          >
            CRYPTO&nbsp;
          </span>
          <span
            className="font-display"
            style={{ fontSize: 22, color: "#9B5CFF", letterSpacing: "0.10em", textShadow: "0 0 20px rgba(155,92,255,0.6)" }}
          >
            SIGNAL
          </span>
        </a>

        {/* Desktop center links */}
        <div className="hidden md:flex items-center" style={{ gap: 40 }}>
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href={APP_URL} className="nav-link">About</a>
        </div>

        {/* Desktop right buttons */}
        <div className="hidden md:flex items-center" style={{ gap: 10 }}>
          {NavbarAuth ? <NavbarAuth /> : <StaticButtons />}
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
            borderTop: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "rgba(3,0,8,0.95)",
            padding: "16px 32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <a href="#features" className="nav-link" style={{ padding: "6px 0", fontSize: 15 }} onClick={() => setOpen(false)}>Features</a>
          <a href="#pricing" className="nav-link" style={{ padding: "6px 0", fontSize: 15 }} onClick={() => setOpen(false)}>Pricing</a>
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)" }} />
          {NavbarAuth ? (
            <NavbarAuth mobile onClose={() => setOpen(false)} />
          ) : (
            <StaticButtons mobile onClose={() => setOpen(false)} />
          )}
        </div>
      )}
    </nav>
  );
}
