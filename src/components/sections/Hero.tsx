"use client";

import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Content Overlay */}
      <div className="content-overlay absolute inset-0 flex flex-col items-center justify-center px-lg">
        <div className="text-center max-w-4xl">
          {/* Label */}
          <div className="label text-muted mb-md">
            PRINCIPAL SYSTEMS ARCHITECT
          </div>
          
          {/* Headline */}
          <h1 className="font-display text-display-xl text-primary mb-lg">
            <span className="block">SOVEREIGN INTELLIGENCE.</span>
            <span className="block signal-text">SECURITY-FIRST ARCHITECTURE.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-secondary text-body-lg mb-xl max-w-2xl mx-auto">
            We build local AI systems, Zero Trust security, and autonomous infrastructure. 
            Your data stays yours. Your systems run themselves.
          </p>
          
          {/* CTAs */}
          <div className="flex gap-md justify-center">
            <Button variant="primary" size="lg">
              BEGIN CONSULTATION
            </Button>
            <Button variant="ghost" size="lg">
              VIEW CASE STUDIES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}