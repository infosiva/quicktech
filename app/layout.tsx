import CookieConsent from "@/components/CookieConsent";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatBot from "@/components/ChatBot";
import { getSiteFlags } from "@/lib/flags";
import Navbar from "@/components/Navbar";
import SchemaOrg from "@/components/SchemaOrg";
import { ThemeLoader } from "@/lib/theme-loader-client";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const flags = await getSiteFlags('quicktech')
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-4237294630161176" />
        <SchemaOrg />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'QuickTech',
            url: 'https://quicktech.app',
            description: 'AI-powered IT repair shop management — tickets, technicians, and customer comms in one place.',
            applicationCategory: 'BusinessApplication',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free plan available' },
          })}}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "#f9fafb", color: "#111827" }}
      >
        <ThemeLoader />
        <div className="aurora aurora-primary" aria-hidden />
        <div className="aurora aurora-secondary" aria-hidden />
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
