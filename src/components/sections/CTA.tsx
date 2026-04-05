"use client";

import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="relative py-2xl px-lg">
      <div className="max-w-4xl mx-auto text-center">
        {/* Glassmorphic Panel */}
        <div className="glass-panel p-2xl">
          <div className="label text-muted mb-md">
            READY TO BUILD?
          </div>
          
          <h2 className="font-display text-display-lg text-primary mb-lg">
            START YOUR <span className="signal-text">TRANSFORMATION</span>
          </h2>
          
          <p className="text-secondary text-body-lg mb-xl max-w-2xl mx-auto">
            Schedule a free discovery call. We'll analyze your infrastructure, 
            identify opportunities, and propose a custom solution.
          </p>
          
          <Button variant="primary" size="lg">
            SCHEDULE FREE DISCOVERY CALL
          </Button>
          
          <p className="mono-data text-muted mt-lg">
            NO COMMITMENT • RESPONSE WITHIN 24 HOURS
          </p>
        </div>
      </div>
    </section>
  );
}