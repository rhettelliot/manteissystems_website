import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manteis.Systems — Sovereign Intelligence. Security-First Architecture.",
  description: "We build local AI systems, Zero Trust security, and autonomous infrastructure. Your data stays yours. Your systems run themselves.",
  keywords: ["AI Consultancy", "Cybersecurity", "Zero Trust", "Local LLM", "Systems Engineering", "Automation", "Ollama", "n8n"],
  authors: [{ name: "Rhett Elliot" }],
  openGraph: {
    title: "Manteis.Systems — Sovereign Intelligence",
    description: "We build local AI systems, Zero Trust security, and autonomous infrastructure.",
    type: "website",
    locale: "en_US",
    siteName: "Manteis.Systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manteis.Systems — Sovereign Intelligence",
    description: "We build local AI systems, Zero Trust security, and autonomous infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-void text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}