"use client";

import { PopIn, SlideIn, Counter } from "../ui/animations";

const metrics = [
  { to: 20, suffix: "+", label: "YEARS EXPERIENCE" },
  { to: 99, suffix: "%", label: "UPTIME ARCHITECTED" },
  { to: 0,  suffix: "",  label: "CLOUD DEPENDENCIES" },
];

const clients = [
  "MOZILLA",
  "F5 NETWORKS",
  "REI",
  "DREAMBOX LEARNING",
];

export default function TrustSignals() {
  return (
    <section className="relative py-2xl px-lg bg-layer-1">
      <div className="max-w-7xl mx-auto">
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-lg mb-2xl">
          {metrics.map((metric, i) => (
            <PopIn key={metric.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display text-display-xl signal-text mb-sm">
                  <Counter to={metric.to} suffix={metric.suffix} delay={i * 0.1} />
                </div>
                <div className="label text-muted">{metric.label}</div>
              </div>
            </PopIn>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-layer-3 mb-2xl" />

        {/* Client Logos */}
        <div className="text-center">
          <div className="label text-muted mb-lg">TRUSTED BY</div>
          <div className="flex justify-center gap-2xl">
            {clients.map((client, i) => (
              <SlideIn key={client} from="bottom" delay={i * 0.08}>
                <div className="font-display text-body-lg text-secondary hover:text-primary transition-colors cursor-pointer">
                  {client}
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
