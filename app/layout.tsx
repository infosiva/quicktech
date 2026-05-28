import CookieConsent from "@/components/CookieConsent";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatBot from "@/components/ChatBot";
import { getSiteFlags } from "@/lib/flags";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const flags = await getSiteFlags('quicktech')
  return (
    <html lang="en">
      <head>
        <SchemaOrg />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "#07080f", color: "#f0f4ff" }}
      >
        <div className="aurora aurora-primary" aria-hidden />
        <div className="aurora aurora-secondary" aria-hidden />
        <div className="aurora aurora-third" aria-hidden />
        <div className="grain" aria-hidden />

        <div style={{ position: "relative", zIndex: 2 }}>
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
        {flags.chatbot && <ChatBot />}
        <CookieConsent />
      </body>
    </html>
  );
}
