import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: "Cornerstone Builder Software — Construction Scheduling, Simplified.",
  description:
    "Built by builders, for builders. Smart scheduling, vendor portals, AI support, and more — starting at $60/month.",
  keywords: [
    "construction scheduling",
    "builder software",
    "project management",
    "vendor portal",
    "construction management",
  ],
  openGraph: {
    title: "Cornerstone Builder Software",
    description: "Construction Scheduling, Simplified. Starting at $60/month.",
    url: "https://cornerstonepm.ai",
    siteName: "Cornerstone Builder Software",
    type: "website",
    images: [
      {
        url: "https://www.cornerstonepm.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cornerstone Builder Software - Construction Scheduling, Simplified",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornerstone Builder Software",
    description: "Construction Scheduling, Simplified. Starting at $60/month.",
    images: ["https://www.cornerstonepm.ai/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
