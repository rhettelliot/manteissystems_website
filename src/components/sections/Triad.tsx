"use client";

import Link from "next/link";
import { TextReveal, SlideIn } from "../ui/animations";

const services = [
  {
    id: "ai",
    title: "AI CONSULTANCY",
    headline: "Sovereign Intelligence",
    description: "Local LLM deployment, AI agent automation, training & fine-tuning for your data. Zero cloud dependency.",
    differentiator: "We don't rent AI. We build yours.",
    href: "/services#ai",
    from: "left" as const,
  },
  {
    id: "security",
    title: "CYBERSECURITY",
    headline: "Security-First Heritage",
    description: "Zero Trust architecture, compliance (SOC 2, HIPAA, PCI-DSS), penetration testing. 20+ years enterprise experience.",
    differentiator: "Security isn't an add-on. It's the foundation.",
    href: "/services#security",
    from: "bottom" as const,
  },
  {
    id: "engineering",
    title: "SYSTEMS ENGINEERING",
    headline: "Autonomous Architecture",
    description: "Microsoft 365, Intune, Jamf Pro, Docker containerization, n8n automation. Multi-platform MDM.",
    differentiator: "We build systems that run themselves.",
    href: "/services#engineering",
    from: "right" as const,
  },
];

export default function Triad() {
  return (
    <section className="relative min-h-screen py-2xl px-lg">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-2xl">
          <div className="label text-muted mb-sm">CAPABILITIES</div>
          <h2 className="font-display text-display-lg text-primary">
            <TextReveal>WHAT WE BUILD</TextReveal>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {services.map((service, i) => (
            <SlideIn key={service.id} from={service.from} delay={i * 0.12}>
              <Link
                href={service.href}
                className="group glass-panel p-lg transition-all duration-300 hover:signal-glow block h-full"
              >
                {/* Icon */}
                <div className="signal-text mb-md">
                  <div className="w-12 h-12 border border-signal flex items-center justify-center">
                    <span className="font-display text-display-sm">
                      {service.id === "ai" ? "AI" : service.id === "security" ? "🔒" : "⚙"}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="label text-muted mb-sm">{service.title}</div>
                <h3 className="font-display text-display-md text-primary mb-md group-hover:text-signal transition-colors">
                  {service.headline}
                </h3>

                {/* Description */}
                <p className="text-secondary text-body-sm mb-md">
                  {service.description}
                </p>

                {/* Differentiator */}
                <p className="mono-data signal-text">
                  {service.differentiator}
                </p>
              </Link>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
