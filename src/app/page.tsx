"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import Triad from "@/components/sections/Triad";
import TrustSignals from "@/components/sections/TrustSignals";
import CTA from "@/components/sections/CTA";

// Dynamic import for 3D canvas (no SSR)
const Canvas3D = dynamic(() => import("@/components/3d/Canvas3D"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-void flex items-center justify-center">
      <div className="font-display text-label signal-text animate-pulse">
        INITIALIZING
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void">
      {/* 3D Background */}
      <Canvas3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Triad */}
      <Triad />
      
      {/* Trust Signals */}
      <TrustSignals />
      
      {/* CTA */}
      <CTA />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}