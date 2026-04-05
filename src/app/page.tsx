'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Cpu, Music, Heart, Terminal, Shield, Zap, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const LOG_MESSAGES = [
  "INITIALIZING SOVEREIGN NODE...",
  "LOADING OLLAMA INFERENCE ENGINE [OK]",
  "CHROMADB VECTOR STORE MOUNTED [OK]",
  "XEN AGENT FRAMEWORK ACTIVE [OK]",
  "LOCAL AI: RUNNING — NO CLOUD DEPENDENCY",
  "DATA SOVEREIGNTY: ENFORCED",
  "LATENCY: 8ms LOCAL",
  "CORPORATE MACHINE: DEPHASED.",
  "MANTEIS.SYSTEMS ONLINE.",
];

const HIGHLIGHT_WORDS = ["ONLINE", "ENFORCED", "DEPHASED", "[OK]"];

function isHighlighted(line: string) {
  return HIGHLIGHT_WORDS.some((w) => line.includes(w));
}

function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />;
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 bg-black/85 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-5 bg-signal-blue" />
        <span className="font-mono text-xs font-bold tracking-[0.22em] uppercase text-white/80">
          Manteis.Systems
        </span>
      </div>
      <div className="hidden md:flex gap-10">
        {['Systems', 'Sounds', 'Self', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-white/35 hover:text-white transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest hidden sm:block">
        // SUBVERT. CREATE. SOVEREIGNTY.
      </div>
    </nav>
  );
}

function TerminalLog() {
  const [logs, setLogs] = useState<string[]>([LOG_MESSAGES[0]]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => {
        const next = (prev + 1) % LOG_MESSAGES.length;
        setLogs((cur) => [...cur, LOG_MESSAGES[next]].slice(-6));
        return next;
      });
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-white/[0.08] bg-void-raised p-4 font-mono text-[11px] leading-6 w-full max-w-md">
      <div className="text-white/25 mb-2 tracking-widest text-[9px] uppercase border-b border-white/[0.06] pb-2">
        // SOVEREIGN_NODE_01 · BOOT_LOG
      </div>
      {logs.map((line, i) => (
        <motion.div
          key={`${i}-${line}`}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className={isHighlighted(line) ? 'text-signal-blue' : 'text-white/50'}
        >
          <span className="text-white/20 mr-2">&gt;</span>
          {line}
        </motion.div>
      ))}
      <span className="terminal-cursor text-signal-blue">█</span>
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 220]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-8 pt-16">
      {/* Parallax background rings */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[700px] h-[700px] border border-[rgba(0,87,255,0.06)]" />
        <div className="absolute w-[500px] h-[500px] border border-[rgba(0,87,255,0.05)]" />
        <div className="absolute w-[300px] h-[300px] border border-[rgba(0,87,255,0.04)]" />
      </motion.div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-start gap-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[10px] tracking-[0.35em] uppercase text-signal-blue"
        >
          // SOVEREIGN INTELLIGENCE INFRASTRUCTURE //
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-[clamp(48px,9vw,110px)] leading-[0.88] tracking-tight"
        >
          DEPHASING THE<br />
          <span className="text-white/30">CORPORATE</span><br />
          <span className="text-white/30">MACHINE.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/35"
        >
          UNIFIED INTELLIGENCE INFRASTRUCTURE
        </motion.div>

        {/* Body + Terminal side by side */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row gap-10 w-full"
        >
          <div className="flex flex-col gap-6 max-w-lg">
            <p className="text-white/55 text-base leading-relaxed">
              Big Tech wants your intelligence on their servers, rented by the month,
              extracted by the quarter. Manteis Systems builds private local AI
              infrastructure that belongs to you — your data, your hardware, your future.
            </p>
            <p className="font-mono text-[11px] text-white/30 tracking-wide">
              Pacific Northwest · Est. 1998 · No cloud. No compromise.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="mailto:rhett@manteissystems.com">
                <Button variant="primary" size="lg">
                  INITIATE SOVEREIGNTY AUDIT
                </Button>
              </a>
              <a
                href="#systems"
                className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-white/40 hover:text-white transition-colors self-center"
              >
                VIEW SERVICES <ArrowRight size={12} />
              </a>
            </div>
          </div>
          <TerminalLog />
        </motion.div>

        {/* Coordinate badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/15"
        >
          [47.6062° N, 122.3321° W] · PACIFIC_NODE_01
        </motion.div>
      </div>
    </section>
  );
}

function ThreePillars() {
  const pillars = [
    {
      id: 'systems-pillar',
      label: '01 — SYSTEMS',
      title: 'THE SOVEREIGN NODE',
      tagline: 'Your data. Your machine. Your intelligence.',
      desc: 'A dedicated local AI server — Mac Mini, Mac Studio, or custom build — running Ollama inference, ChromaDB vector store, and the Xen Agent Framework. Private by design. Zero cloud dependency.',
      accent: '#0057FF',
      accentClass: 'text-signal-blue',
      icon: Cpu,
      detail: '$2,500–$7,500 setup · $2,000/mo managed',
    },
    {
      id: 'sounds',
      label: '02 — SOUNDS',
      title: 'MANTEIS RECORDINGS',
      tagline: 'Intelligence is vibration.',
      desc: 'A Dolby Atmos-capable independent label and radio station rooted in the 1998 ESI-32 sampler decision. Synthwave, avant-garde, and electronic — released on every DSP with no algorithmic playlist dependency.',
      accent: '#FF6EC7',
      accentClass: 'text-signal-pink',
      icon: Music,
      detail: 'Betta Beats Radio · manteisrecordings.com',
    },
    {
      id: 'self',
      label: '03 — SELF',
      title: 'SOVEREIGNTY WITHIN',
      tagline: 'Sovereignty begins in the body.',
      desc: 'Breathwork protocols and relationship sovereignty manuals that de-colonize attention before the infrastructure work begins. Technology should support biology — not replace it.',
      accent: '#00D4A8',
      accentClass: 'text-signal-teal',
      icon: Heart,
      detail: 'Breathwork Sessions · Sewa Singh Manuals',
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="px-8 py-32 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/25 mb-16"
      >
        // THE ECOSYSTEM
      </motion.div>
      <div className="grid lg:grid-cols-3 gap-px border border-white/[0.06]">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.id}
              id={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-void-raised p-8 flex flex-col gap-5"
              style={{ borderTop: `1px solid ${p.accent}` }}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[9px] tracking-[0.3em] uppercase ${p.accentClass}`}>
                  {p.label}
                </span>
                <Icon size={18} style={{ color: p.accent }} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl tracking-tight text-white mb-1">
                  {p.title}
                </h3>
                <p className={`font-mono text-[10px] tracking-widest uppercase ${p.accentClass} opacity-70`}>
                  {p.tagline}
                </p>
              </div>
              <p className="text-sm text-white/55 leading-relaxed flex-1">
                {p.desc}
              </p>
              <div className={`font-mono text-[10px] tracking-widest uppercase ${p.accentClass} pt-4 border-t border-white/[0.06]`}>
                {p.detail}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const credentials = ['Mozilla', 'Apple', 'F5 Networks', 'REI', '98point6', 'UW', 'Aon'];
  const stats = [
    { value: '25+', label: 'Years Enterprise Experience' },
    { value: '7', label: 'Major Organizations' },
    { value: '1998', label: 'The Origin Year' },
  ];

  return (
    <section ref={ref} className="px-8 py-32 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        {/* Left: copy */}
        <div className="flex-1 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/25"
          >
            // THE ARCHITECT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[clamp(28px,4vw,52px)] leading-tight tracking-tight"
          >
            FROM MIDI STUDIO<br />
            <span className="text-white/35">TO GLOBAL SYSTEMS.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/55 text-base leading-relaxed max-w-xl"
          >
            In 1998, Rhett Elliot Johnson faced a choice: repair a broken Geo Metro,
            or buy an EMU ESI-32 sampler. He chose the sampler. That decision —
            tools of creation over traps of convenience — became the foundational
            DNA of Manteis Systems. 25+ years later, the same philosophy runs
            enterprise AI infrastructure for businesses across the Pacific Northwest.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="text-white/55 text-base leading-relaxed max-w-xl"
          >
            As Principal Systems Architect and fractional CTO, Rhett has designed
            infrastructure for some of the most demanding technical environments
            in the world — from Mozilla&apos;s open-web mission to F5 Networks&apos; global
            edge security fabric to 98point6&apos;s HIPAA-compliant digital health platform.
          </motion.p>

          {/* Credential strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="flex flex-wrap gap-x-5 gap-y-3 pt-4 border-t border-white/[0.08]"
          >
            {credentials.map((c, i) => (
              <span
                key={c}
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/25 hover:text-white/60 transition-colors cursor-default"
              >
                {c}{i < credentials.length - 1 && <span className="ml-5 text-white/10">·</span>}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: stats */}
        <div className="flex flex-col gap-0 lg:min-w-[220px] border border-white/[0.08] h-fit">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 border-b border-white/[0.08] last:border-b-0"
            >
              <div className="font-display font-bold text-4xl text-signal-blue tracking-tight">
                {s.value}
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemsDeepDive() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const specs = [
    { key: 'HARDWARE', val: 'Mac Mini M4 Pro · Mac Studio M4 Max · Custom PC' },
    { key: 'INFERENCE', val: 'Ollama (Llama 3.3, Mistral, Phi-4, Command R)' },
    { key: 'VECTOR DB', val: 'ChromaDB — local, persistent, zero egress' },
    { key: 'AGENTS', val: 'Xen Framework — custom workflow automation' },
    { key: 'SECURITY', val: 'Sophos ZTNA · Microsoft Defender · FileVault' },
    { key: 'NETWORK', val: 'LAN-only by default — no cloud egress required' },
  ];

  const tiers = [
    { name: 'STARTER NODE', price: '$2,500', hardware: 'Mac Mini M4 · 4 agents · 1 model', monthly: '$2,000/mo managed', accent: '#0057FF' },
    { name: 'PROFESSIONAL NODE', price: '$5,000', hardware: 'Mac Studio M4 Max · 10 agents · 3 models', monthly: '$2,000/mo managed', accent: '#0057FF' },
    { name: 'ENTERPRISE NODE', price: '$7,500', hardware: 'Mac Studio Ultra · Unlimited agents', monthly: '$2,000/mo managed', accent: '#0057FF' },
    { name: 'NON-PROFIT SUBSIDY', price: '$1,500–$3,000', hardware: 'Qualifying mission-driven organizations', monthly: 'Reduced managed rate', accent: '#00D4A8' },
  ];

  return (
    <section id="systems" ref={ref} className="px-8 py-32 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[9px] tracking-[0.35em] uppercase text-signal-blue mb-4"
        >
          01 — SYSTEMS
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-[clamp(32px,5vw,64px)] tracking-tight leading-tight mb-16"
        >
          THE SOVEREIGN NODE
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: spec table */}
          <div className="flex-1 flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-white/55 text-base leading-relaxed max-w-lg border-l-2 border-signal-blue pl-5"
            >
              &ldquo;George at Mt. Baker Remodeling doesn&apos;t need another subscription.
              He needs intelligence that runs on his hardware, understands his business,
              and costs less than one enterprise cloud API bill.&rdquo;
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="border border-white/[0.08]"
            >
              {specs.map((s, i) => (
                <div
                  key={s.key}
                  className={`flex gap-6 p-4 font-mono text-[11px] ${i < specs.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
                >
                  <span className="text-white/25 tracking-widest uppercase w-28 shrink-0">{s.key}</span>
                  <span className="text-white/65">{s.val}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: pricing tiers */}
          <div className="flex flex-col gap-3 lg:min-w-[320px]">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border border-white/[0.08] p-6 bg-void-raised"
                style={{ borderTopColor: t.accent, borderTopWidth: '1px' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/30">
                    {t.name}
                  </span>
                  <span className="font-display font-bold text-xl" style={{ color: t.accent }}>
                    {t.price}
                  </span>
                </div>
                <p className="font-mono text-[10px] text-white/45 mb-1">{t.hardware}</p>
                <p className="font-mono text-[10px]" style={{ color: t.accent, opacity: 0.7 }}>{t.monthly}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const metrics = [
    { value: '3 hrs', label: 'Per week recovered from Digital Drag' },
    { value: '0', label: 'Cloud subscriptions added' },
    { value: '1', label: 'Sovereign Node provisioned' },
    { value: 'ACTIVE', label: 'Since Q1 2026' },
  ];

  return (
    <section ref={ref} className="px-8 py-32 border-t border-white/[0.06] bg-void-raised">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[9px] tracking-[0.35em] uppercase text-signal-blue mb-4"
        >
          // ACTIVE DEPLOYMENT
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/25 mb-12"
        >
          MT. BAKER REMODELING — PACIFIC NORTHWEST
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-[clamp(26px,4vw,48px)] leading-tight tracking-tight mb-12 max-w-3xl"
        >
          &ldquo;George doesn&apos;t need a website.<br />
          <span className="text-white/30">George needs an Agent.&rdquo;</span>
        </motion.blockquote>

        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex flex-col gap-5"
          >
            <p className="text-white/55 text-base leading-relaxed">
              Digital Drag: the invisible overhead bleeding time from every job.
              George was spending 3+ hours a week copy-pasting estimates, chasing
              email threads, and manually updating job status across disconnected tools.
            </p>
            <p className="text-white/55 text-base leading-relaxed">
              The Manteis Sovereign Node now handles client intake, quote follow-ups,
              project status updates, and communication coordination — locally, privately,
              without a single new cloud subscription. George&apos;s data stays on George&apos;s hardware.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-2 h-2 bg-signal-teal" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-signal-teal">
                DEPLOYMENT: PHASE 1/2 COMPLETE
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-px border border-white/[0.08] lg:min-w-[320px] h-fit">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                className="p-6 bg-void-elevated"
              >
                <div className="font-display font-bold text-2xl text-signal-blue tracking-tight mb-1">
                  {m.value}
                </div>
                <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-white/30 leading-relaxed">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeOffer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const services = [
    {
      icon: Cpu,
      label: 'AI INFRASTRUCTURE',
      title: 'Managed Sovereign Node',
      desc: 'Full provisioning, hardening, and ongoing management of your private local AI stack. Ollama + Xen agents + ChromaDB, delivered and maintained.',
      price: '$350/hr consultation · $2k/mo managed',
    },
    {
      icon: Shield,
      label: 'CYBERSECURITY',
      title: 'Zero Trust Rollout',
      desc: '20+ years of enterprise security. Sophos ZTNA, Microsoft Defender for Endpoint, MDM governance (Kandji/Jamf). SANS-standard audits for every environment.',
      price: '$350/hr · Fixed-project from $10k',
    },
    {
      icon: Zap,
      label: 'AGENT AUTOMATION',
      title: 'Custom MCP Development',
      desc: 'Bespoke autonomous agents built on the Model Context Protocol. Helpdesk triage, sales automation, communication orchestration — your workflow, automated.',
      price: '$350/hr · Fixed-project from $10k',
    },
  ];

  return (
    <section ref={ref} className="px-8 py-32 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/25 mb-16"
        >
          // CONSULTANCY SERVICES
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-px border border-white/[0.06]">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-void-raised p-8 flex flex-col gap-5"
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} className="text-signal-blue" />
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-signal-blue">
                    {s.label}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg tracking-tight">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed flex-1">{s.desc}</p>
                <div className="font-mono text-[10px] text-white/25 tracking-wide pt-4 border-t border-white/[0.06]">
                  {s.price}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const blocks = [
    {
      label: 'THE ORIGIN',
      heading: 'THE GEO METRO DECISION.',
      body: 'In 1998, Rhett Elliot Johnson faced a choice: repair a battered Geo Metro or buy an EMU ESI-32 Sampler. He chose the sampler. This radical decision — prioritizing the tools of agency over practical convenience — became the foundational DNA of Manteis Systems.',
    },
    {
      label: 'THE HYPNOSIS OF CONTROL',
      heading: 'DESIGNED FOR EXTRACTION.',
      body: 'Modern existence is being flattened by Big Tech, Big Corporate, and Big Pharma. We are being hypnotized by algorithmic dopamine loops designed not for our flourishing, but for our extraction. We have exchanged our agency for quarterly metrics. Convenience is the delivery mechanism. Dependency is the product.',
    },
    {
      label: 'THE SUBVERSION',
      heading: 'BREAK THE MACHINE.',
      body: 'Technology — when held by the individual — is the ultimate tool of subversion. Just as the printing press broke the monopoly of the scribe, and the early internet broke the monopoly of the broadcast, Autonomous AI is here to break the monopoly of the Corporate Machine. Every client we serve gets the same choice Rhett made in 1998. We make sure they choose right.',
    },
    {
      label: 'THE ENTER(PRISE)-PRENEUR',
      heading: 'A MULTIGENERATIONAL BUILD.',
      body: 'Manteis Systems is not just a consultancy — it is a legacy. We are building a business that can be handed to our sons and brothers. Whether automating communications for a PNW contractor or defending a family through AI-assisted legal strategy, our mission is singular: use technology to pull people up.',
    },
    {
      label: 'THE MOBILE ELITE RESPONSE',
      heading: 'THE MANTEIS MOBILE UNIT.',
      body: 'Remote-first but present on the ground. Our vision is a mobile, 24/7 elite response laboratory driving across the Pacific Northwest — deploying on-site sovereignty for the most innovative teams and families. The Sovereign Node goes where you go.',
    },
  ];

  return (
    <section ref={ref} className="px-8 py-32 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-20"
        >
          <div className="w-16 h-16 border-2 border-signal-blue flex items-center justify-center pulse-breath signal-glow shrink-0">
            <Terminal size={24} className="text-signal-blue" />
          </div>
          <div>
            <div className="font-mono text-[9px] tracking-[0.35em] uppercase text-signal-blue mb-1">
              // THE SOVEREIGNTY MANIFESTO
            </div>
            <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/20">
              1998 — ESI-32 SAMPLER OVER TRANSPORT
            </div>
          </div>
        </motion.div>

        {/* Manifesto blocks */}
        <div className="flex flex-col divide-y divide-white/[0.06]">
          {blocks.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-10 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16"
            >
              <div className="lg:w-52 shrink-0">
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/25">
                  {b.label}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-[clamp(22px,3vw,36px)] tracking-tight leading-tight mb-4 text-white">
                  {b.heading}
                </h3>
                <p className="text-white/55 text-base leading-relaxed max-w-2xl">
                  {b.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 pt-10 border-t border-white/[0.06] text-center font-mono text-[11px] tracking-[0.45em] uppercase text-white/20"
        >
          SUBVERT. CREATE. SOVEREIGNTY.
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="contact" className="px-8 py-40 border-t border-white/[0.06] flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-mono text-[9px] tracking-[0.35em] uppercase text-signal-blue mb-6"
      >
        // FREE DISCOVERY CALL
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-bold text-[clamp(36px,6vw,72px)] tracking-tight leading-tight mb-8"
      >
        INITIATE<br />
        <span className="text-white/30">SOVEREIGNTY AUDIT.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-white/50 text-base leading-relaxed max-w-xl mb-4"
      >
        60 minutes. No pitch deck. We audit your current infrastructure, identify
        where Digital Drag is bleeding your time, and propose the right Sovereign
        Node configuration for your operation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.28 }}
        className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-12 flex flex-wrap gap-6 justify-center"
      >
        <span>STANDARD: $2,500–$7,500 SETUP</span>
        <span className="text-white/10">·</span>
        <span className="text-signal-teal">NON-PROFIT: $1,500–$3,000</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.34 }}
        className="flex flex-col items-center gap-5"
      >
        <a href="mailto:rhett@manteissystems.com">
          <Button variant="primary" size="lg">
            INITIATE SOVEREIGNTY AUDIT
          </Button>
        </a>
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/15">
          NO COMMITMENT · RESPONSE WITHIN 24 HOURS · PACIFIC TIME
        </span>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-body selection:bg-signal-blue/20 selection:text-signal-blue">
      <GrainOverlay />
      <Nav />
      <Hero />
      <ThreePillars />
      <Founder />
      <SystemsDeepDive />
      <CaseStudy />
      <WhatWeOffer />
      <Manifesto />
      <FinalCTA />
      <footer className="border-t border-white/[0.06] px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/20">
            MANTEIS.SYSTEMS · SOVEREIGN INTELLIGENCE INFRASTRUCTURE
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/15">
            © 2026 // ALL_RIGHTS_RESERVED
          </span>
        </div>
      </footer>
    </main>
  );
}
