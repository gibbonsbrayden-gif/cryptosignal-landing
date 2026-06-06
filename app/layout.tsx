import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ backgroundColor: "#030008", margin: 0 }}>{children}</body>
    </html>
  );

  return clerkReady ? <ClerkProvider>{inner}</ClerkProvider> : inner;
}
