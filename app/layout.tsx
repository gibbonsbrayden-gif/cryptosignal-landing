import type { Metadata } from "next";
import { Barlow_Condensed, Share_Tech_Mono, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800"],
  variable: "--font-bebas",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  variable: "--font-mono-tech",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CryptoSignal — AI-Powered Crypto Intelligence",
  description:
    "Real-time signals. AI-powered insights. Built for traders who demand results.",
};

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const clerkReady =
  clerkKey && clerkKey.startsWith("pk_") && !clerkKey.includes("replace_me");

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const inner = (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${shareTechMono.variable} ${inter.variable}`}
      style={{ overflowX: "hidden", maxWidth: "100vw" }}
    >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1Y1XHWF2HF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1Y1XHWF2HF');
        `}
      </Script>
      <body style={{ backgroundColor: "#030008", margin: 0, overflowX: "hidden", maxWidth: "100vw", width: "100%" }}>{children}</body>
    </html>
  );

  return clerkReady ? <ClerkProvider>{inner}</ClerkProvider> : inner;
}
