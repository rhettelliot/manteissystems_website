"use client";

const metrics = [
  { value: "20+", label: "YEARS EXPERIENCE" },
  { value: "99%", label: "UPTIME ARCHITECTED" },
  { value: "0", label: "CLOUD DEPENDENCIES" },
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
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="font-display text-display-xl signal-text mb-sm">
                {metric.value}
              </div>
              <div className="label text-muted">{metric.label}</div>
            </div>
          ))}
        </div>
        
        {/* Divider */}
        <div className="border-t border-layer-3 mb-2xl" />
        
        {/* Client Logos */}
        <div className="text-center">
          <div className="label text-muted mb-lg">TRUSTED BY</div>
          <div className="flex justify-center gap-2xl">
            {clients.map((client) => (
              <div
                key={client}
                className="font-display text-body-lg text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}