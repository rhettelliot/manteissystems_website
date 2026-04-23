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
  title: "Manteis Systems — Sovereign Intelligence Infrastructure",
  description: "Private local AI infrastructure, spatial-audio music production, and breathwork sovereignty. Dephasing the corporate machine since 1998. Pacific Northwest.",
  authors: [{ name: "Rhett Elliot Johnson" }],
  keywords: [
    "local AI infrastructure", "on-prem LLM", "sovereign AI", "private LLM",
    "AI agent automation", "Sovereign Node", "local inference",
    "data sovereignty", "zero trust", "cybersecurity", "Manteis Systems",
    "Rhett Johnson", "spatial audio", "synthwave label", "breathwork",
    "Pacific Northwest tech", "fractional CTO", "AI consultancy",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Manteis Systems — Sovereign Intelligence Infrastructure",
    description: "Private local AI. Sovereign audio. Embodied intelligence. Subvert. Create. Sovereignty.",
    siteName: "Manteis.Systems",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manteis Systems — Sovereign Intelligence Infrastructure",
    description: "Private local AI. Sovereign audio. Embodied intelligence. Subvert. Create. Sovereignty.",
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