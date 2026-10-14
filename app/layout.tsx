import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://read.notcodesid.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Read — A Minimalist Long-Form Essay & Article Reader",
    template: "%s — Read",
  },
  description:
    "A minimal, distraction-free reading app for long-form ideas, essays, and curated thinkers. Emulating paperback reading with Screen Time focus lock and cloud sync.",
  applicationName: "Read",
  authors: [{ name: "Sid", url: SITE_URL }],
  creator: "Sid",
  publisher: "Read",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Read",
    title: "Read — A Minimalist Long-Form Essay & Article Reader",
    description:
      "Save anything, read it clean, and finish with Locked In mode. A quiet home for essays and articles.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Read — every essay you saved, finally read" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Read — A Minimalist Long-Form Essay & Article Reader",
    description:
      "Save anything, read it clean, and finish with Locked In mode. A quiet home for essays and articles.",
    images: [`${SITE_URL}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f4ef",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <body className="min-h-screen bg-[#f5f4ef] text-[#111b14] selection:bg-zinc-300 selection:text-[#111b14]">
        <a href="#main-content" className="skip-link">skip to content</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
