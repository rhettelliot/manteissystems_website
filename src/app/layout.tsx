import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manteis.Systems — The Architecture of Foresight",
  description: "Predictive modeling at the edge of the void. Clinical precision for omniscient enterprise architecture.",
  authors: [{ name: "Rhett Elliot" }],
  keywords: ["AI Consultancy", "Cybersecurity", "Zero Trust", "Local LLM", "Systems Engineering", "Automation", "Predictive Analytics"],
  robots: "index, follow",
  openGraph: {
    title: "Manteis.Systems — The Architecture of Foresight",
    description: "Predictive modeling at the edge of the void. Clinical precision for omniscient enterprise architecture.",
    siteName: "Manteis.Systems",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manteis.Systems — The Architecture of Foresight",
    description: "Predictive modeling at the edge of the void. Clinical precision for omniscient enterprise architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-void-base text-white antialiased">
        {children}
      </body>
    </html>
  );
}