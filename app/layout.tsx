import CookieConsent from "@/components/CookieConsent";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatBot from "@/components/ChatBot";
import FeedbackWidget from "@/components/FeedbackWidget";
import { getSiteFlags } from "@/lib/flags";
import Navbar from "@/components/Navbar";
import SchemaOrg from "@/components/SchemaOrg";
import "./theme-vars.css";
import { loadSiteTheme, buildThemeStyleTag, buildGa4Snippet, isValidGa4Id } from "@/lib/theme-loader";
import { AnimatedBg } from "@/components/AnimatedBg";
import { Telemetry } from "@/components/Telemetry";

import { MotionProvider } from "@infosiva/shared-ui/modern";
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
  title: "QuickTech — AI Device Repair Management for Tech Shops",
  description:
    "AI-powered repair ticket routing, diagnostics, and customer updates for device repair shops. No spreadsheets, no missed jobs. Free trial.",
  keywords: [
    "device repair management software",
    "repair shop ticketing system",
    "AI repair ticket routing",
    "phone repair shop software",
    "repair shop management",
    "device repair SaaS",
    "QuickTech repair",
  ],
  authors: [{ name: "QuickTech" }],
  openGraph: {
    type: "website",
    url: "https://quicktechai.app",
    siteName: "QuickTech",
    title: "QuickTech — AI Device Repair Management for Tech Shops",
    description:
      "AI-powered repair ticket routing, diagnostics, and customer updates. Built for device repair shops. Free trial.",
    images: [
      {
        url: "https://quicktechai.app/og-quicktech.png",
        width: 1200,
        height: 630,
        alt: "QuickTech — AI Device Repair Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@QuickTechAIPro",
    title: "QuickTech — AI Device Repair Management for Tech Shops",
    description:
      "AI repair ticket routing, diagnostics, and customer updates. Free trial for repair shops.",
  },
  robots: "index, follow",
};

const DEFAULT_ACCENT = '#fb7185'
const DEFAULT_BG = '#0d1117'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const flags = await getSiteFlags('quicktech')
  const theme = await loadSiteTheme('quicktech')
  const accent = theme?.primary ?? DEFAULT_ACCENT
  const archetype = theme?.layout?.archetype ?? 'weekend-lifestyle'
  const ga4Id = theme?.analytics?.ga4Id
  const ga4 = buildGa4Snippet(theme)
  return (
    <html lang="en" data-layout={archetype}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-4237294630161176" />
        <style dangerouslySetInnerHTML={{ __html: buildThemeStyleTag(theme, { background: DEFAULT_BG, primary: DEFAULT_ACCENT }) }} />
        {ga4 && <script dangerouslySetInnerHTML={{ __html: ga4 }} />}
        <SchemaOrg />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'QuickTech',
            url: 'https://quicktechai.app',
            description: 'AI-powered IT repair shop management — tickets, technicians, and customer comms in one place.',
            applicationCategory: 'BusinessApplication',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free plan available' },
          })}}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatedBg theme={theme} fallback="mesh" />

        <div style={{ position: "relative", zIndex: 2 }}>
          <Navbar />
          <MotionProvider>{children}</MotionProvider>
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
        {isValidGa4Id(ga4Id) && <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />}
        <Telemetry archetype={archetype} />
        {flags.chatbot && <ChatBot />}
        <FeedbackWidget siteName="QuickTech" accentColor={accent} accentColor2={accent} position="left" />
        <CookieConsent />
      </body>
    </html>
  );
}
