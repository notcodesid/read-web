import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "read — every essay you saved, finally read.",
  description:
    "a quiet home for long-form essays on ios. save from anywhere, read offline in calm paperback typography, and lock out distractions until you finish.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <body className="min-h-screen bg-[#f5f4ef] text-[#111b14] selection:bg-zinc-300 selection:text-[#111b14]">
        {children}
      </body>
    </html>
  );
}
