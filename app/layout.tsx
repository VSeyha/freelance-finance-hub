import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freelance Finance Hub Online - Financial Engineering Tools for Independent Professionals",
  description:
    "Free precision financial calculators for freelancers, consultants, and contractors. Calculate hourly rates, estimated quarterly taxes, project pricing, and late payment interest.",
  metadataBase: new URL("https://www.freelancefinancehubonline.online"),
  authors: [{ name: "SoloFinance Editorial Team" }],
  creator: "Freelance Finance Hub Online",
  publisher: "Freelance Finance Hub Online",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Verification Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-7076225867058265" />


        {/* AdSense Core Script */}
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7076225867058265"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />

      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}