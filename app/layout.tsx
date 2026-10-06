import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Read — A Minimalist Long-Form Essay & Article Reader",
  description: "A minimal, distraction-free reading app for long-form ideas, essays, and curated thinkers. Emulating paperback reading with Screen Time focus lock and cloud sync.",
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
