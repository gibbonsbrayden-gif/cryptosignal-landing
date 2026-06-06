"use client";
import { useAuth, UserButton } from "@clerk/nextjs";

interface Props {
  mobile?: boolean;
  onClose?: () => void;
}

export default function NavbarAuth({ mobile, onClose }: Props) {
  const { isSignedIn, isLoaded } = useAuth();

  if (isLoaded && isSignedIn) {
    return mobile ? (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <UserButton appearance={{ elements: { avatarBox: { width: 34, height: 34 } } }} />
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>My Account</span>
      </div>
    ) : (
      <UserButton appearance={{ elements: { avatarBox: { width: 34, height: 34 } } }} />
    );
  }

  // Signed-out (or Clerk still loading)
  if (mobile) {
    return (
      <>
        <a
          href="#waitlist"
          onClick={onClose}
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
          href="#waitlist"
          onClick={onClose}
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
      </>
    );
  }

  return (
    <>
      <a
        href="#waitlist"
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
        href="#waitlist"
        style={{
          padding: "8px 18px",
          fontSize: 14,
          fontWeight: 600,
          color: "#fff",
          backgroundColor: "#9B5CFF",
          borderRadius: 9,
          textDecoration: "none",
          transition: "background-color 0.15s",
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
    </>
  );
}
