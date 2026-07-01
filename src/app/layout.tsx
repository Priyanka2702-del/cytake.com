import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "CYTAKE Global | Enterprise Forex & Fintech Infrastructure",
    template: "",
  },
  description:
    "CYTAKE Global provides enterprise-grade forex and fintech infrastructure — broker technology, prop firm platforms, trading CRMs, payment gateways, and complete trading ecosystems worldwide.",
  keywords: [
    "forex broker infrastructure",
    "prop firm technology",
    "trading CRM",
    "white-label trading platform",
    "fintech infrastructure",
    "MT4 MT5 broker setup",
    "trading technology",
    "CYTAKE",
  ],
  authors: [{ name: "CYTAKE Global" }],
  metadataBase: new URL("https://cytake.com"),
  openGraph: {
    title: "CYTAKE Global | Enterprise Forex & Fintech Infrastructure",
    description:
      "Powering 200+ brokers and prop firms across 50+ countries with enterprise-grade trading infrastructure.",
    type: "website",
    locale: "en_US",
    siteName: "CYTAKE Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "CYTAKE Global | Enterprise Forex & Fintech Infrastructure",
    description:
      "Powering 200+ brokers and prop firms across 50+ countries with enterprise-grade trading infrastructure.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}