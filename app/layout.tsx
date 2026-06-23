import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Start-up in a Box — Launch an AI Software Business in 30 Days",
  description:
    "The AI Venture Infrastructure™ platform. Choose proven AI products, plug into shared product, GTM and ops, and launch an AI software company in 30 days.",
  openGraph: {
    title: "Start-up in a Box — AI Venture Infrastructure™",
    description:
      "Launch an AI software business in 30 days using proven products and venture-grade infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-navy font-sans">{children}</body>
    </html>
  );
}
