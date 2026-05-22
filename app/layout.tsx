import CookieConsent from "@/components/CookieConsent";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatBot from "@/components/ChatBot";
import Navbar from "@/components/Navbar";
import SchemaOrg from "@/components/SchemaOrg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quicktechai.app"),
  title: "QuickTech AI — Instant AI Answers to Tech Questions",
  description:
    "Ask any tech question and get instant AI answers with sources. Hardware, software, coding, gadgets, AI/ML — covered in seconds. Free forever.",
  keywords: [
    "tech questions AI",
    "AI tech answers",
    "hardware advice AI",
    "coding help AI",
    "best GPU",
    "tech news AI",
    "QuickTech AI",
  ],
  authors: [{ name: "QuickTech AI" }],
  openGraph: {
    type: "website",
    url: "https://quicktechai.app",
    siteName: "QuickTech AI",
    title: "QuickTech AI — Instant AI Answers to Tech Questions",
    description:
      "Ask any tech question — hardware, software, coding, gadgets. AI answers instantly with sources. Free forever.",
    images: [
      {
        url: "https://quicktechai.app/og-quicktech.png",
        width: 1200,
        height: 630,
        alt: "QuickTech AI — Instant Tech Answers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@QuickTechAIPro",
    title: "QuickTech AI — Instant AI Answers to Tech Questions",
    description:
      "Ask any tech question. AI answers instantly with sources. Free forever.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaOrg />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "#080712", color: "#f0eeff" }}
      >
        {/* Animated mesh background blobs */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <div
            className="mesh-blob1"
            style={{
              position: "absolute",
              top: "-10%",
              left: "-5%",
              width: 600,
              height: 600,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="mesh-blob2"
            style={{
              position: "absolute",
              top: "40%",
              right: "-10%",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(217,70,239,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="mesh-blob3"
            style={{
              position: "absolute",
              bottom: "-5%",
              left: "30%",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          {children}
        </div>

        {/* Adsterra — instant approval */}
        <Script
          src="https://epnzryrk.com/act/files/tag.min.js"
          strategy="lazyOnload"
          data-cfasync="false"
        />
        {/* AdSense auto-ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4237294630161176"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          src="http://31.97.56.148:3098/t.js"
          data-site="quicktechai.app"
          strategy="lazyOnload"
        />
        <Script
          async
          src="http://31.97.56.148:3100/script.js"
          data-website-id="8dbfb240-466c-4e16-bd4b-a847141be237"
          strategy="afterInteractive"
        />
        <ChatBot />
        <CookieConsent />
      </body>
    </html>
  );
}
