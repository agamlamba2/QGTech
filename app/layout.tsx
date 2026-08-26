import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  title: "QuietGrowth — Software that compounds",
  description:
    "QuietGrowth builds calm, considered software for teams who want durable outcomes over noisy launches.",
  openGraph: {
    title: "QuietGrowth",
    description: "Software that compounds. Built with care, shipped with intent.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-ink-950 font-sans text-cream antialiased">{children}</body>
    </html>
  );
}
