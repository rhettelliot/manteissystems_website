'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Cpu, Music, Heart, Terminal, Shield, Zap, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { ScrollProgress, CursorGlow, Counter } from '../components/ui/animations';

// ─── Boot log ──────────────────────────────────────────────────────────────────
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

// ─── Grain ────────────────────────────────────────────────────────────────────

// ─── Nav ──────────────────────────────────────────────────────────────────────
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

// ─── Hero: animated orbs ──────────────────────────────────────────────────────
function AnimatedOrbs() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Blue orb — top left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700, height: 700,
          top: '-200px', left: '-150px',
          background: 'radial-gradient(circle, rgba(0,87,255,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 60, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />
      {/* Pink orb — right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500,
          top: '10%', right: '-100px',
          background: 'radial-gradient(circle, rgba(255,110,199,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ x: [0, -50, 30, 0], y: [0, 70, -40, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 4 }}
      />
      {/* Teal orb — bottom center */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600, height: 600,
          bottom: '-100px', left: '30%',
          background: 'radial-gradient(circle, rgba(0,212,168,0.10) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ x: [0, -80, 40, 0], y: [0, -50, 30, 0], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear', delay: 8 }}
      />
    </div>
  );
}

// ─── Hero: dot grid ───────────────────────────────────────────────────────────

// ─── Hero: floating particles ─────────────────────────────────────────────────
function FloatingParticles({ count = 24 }: { count?: number }) {
  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      left: Math.random() * 100,
      size: Math.random() * 2.5 + 0.8,
      duration: Math.random() * 14 + 10,
      delay: Math.random() * 16,
      drift: (Math.random() - 0.5) * 120,
      color: i % 3 === 0 ? 'rgba(0,87,255,0.6)' : i % 3 === 1 ? 'rgba(255,110,199,0.5)' : 'rgba(0,212,168,0.5)',
    })), [count]
  );
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: 0,
            width: p.size,
            height: p.size,
            background: p.color,
          }}
          animate={{
            y: [0, -900],
            x: [0, p.drift],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.08, 0.85, 1],
          }}
        />
      ))}
    </div>
  );
}

// ─── Terminal log ─────────────────────────────────────────────────────────────
function TerminalLog() {
  const [logs, setLogs] = useState<string[]>([LOG_MESSAGES[0]]);
  const [, setIdx] = useState(0);

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

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { scrollY } = useScroll();
  const contentY  = useTransform(scrollY, [0, 600], [0, -100]);
  const contentOp = useTransform(scrollY, [0, 360], [1, 0]);
  const bgY       = useTransform(scrollY, [0, 600], [0, 200]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-8 pt-16">


      {/* Parallax rings */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none"
      >
        <div className="w-[720px] h-[720px] border border-[rgba(0,87,255,0.07)]" />
        <div className="absolute w-[520px] h-[520px] border border-[rgba(0,87,255,0.05)]" />
        <div className="absolute w-[320px] h-[320px] border border-[rgba(0,87,255,0.04)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="relative z-[10] max-w-5xl w-full flex flex-col items-start gap-8"
      >
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
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-[clamp(48px,9vw,110px)] leading-[0.88] tracking-tight"
        >
          DEPHASING THE<br />
          <span className="text-white/30">CORPORATE</span><br />
          <span className="text-white/30">MACHINE.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/35"
        >
          UNIFIED INTELLIGENCE INFRASTRUCTURE
        </motion.div>

        {/* Body + Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
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
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/15"
        >
          [47.6062° N, 122.3321° W] · PACIFIC_NODE_01
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-white/20">SCROLL</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
          animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}

// ─── Marquee ticker ───────────────────────────────────────────────────────────
const MARQUEE_ITEMS = [
  { text: 'OLLAMA', color: 'text-signal-blue' },
  { text: 'CHROMADB', color: 'text-white/25' },
  { text: 'XEN AGENTS', color: 'text-signal-teal' },
  { text: 'ZERO TRUST', color: 'text-white/25' },
  { text: 'SOPHOS ZTNA', color: 'text-signal-blue' },
  { text: 'MICROSOFT DEFENDER', color: 'text-white/25' },
  { text: 'DOCKER', color: 'text-signal-pink' },
  { text: 'N8N AUTOMATION', color: 'text-white/25' },
  { text: 'LLAMA 3.3', color: 'text-signal-teal' },
  { text: 'JAMF PRO', color: 'text-white/25' },
  { text: 'INTUNE MDM', color: 'text-signal-blue' },
  { text: 'HIPAA COMPLIANT', color: 'text-white/25' },
  { text: 'SOC 2', color: 'text-signal-pink' },
  { text: 'PHI-4', color: 'text-white/25' },
  { text: 'LOCAL LLM', color: 'text-signal-teal' },
  { text: 'DOLBY ATMOS', color: 'text-white/25' },
];

// ─── Video section ────────────────────────────────────────────────────────────
const FRAME_COUNT = 48;
const FRAMES = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/frames/${String(i + 1).padStart(4, '0')}.jpg`
);

function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const images       = useRef<HTMLImageElement[]>([]);
  const sizeSet      = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  function drawFrame(index: number) {
    const canvas = canvasRef.current;
    const img = images.current[index];
    if (!canvas || !img?.complete) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Only resize canvas when dimensions change
    if (!sizeSet.current || canvas.width !== canvas.offsetWidth) {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      sizeSet.current = true;
    }
    const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const w = img.naturalWidth  * scale;
    const h = img.naturalHeight * scale;
    ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
  }

  // Preload all frames; fade canvas in the moment frame 0 is ready
  useEffect(() => {
    images.current = FRAMES.map((src, i) => {
      const img = new Image();
      img.src = src;
      if (i === 0) {
        img.onload = () => {
          drawFrame(0);
          if (canvasRef.current) canvasRef.current.style.opacity = '1';
        };
      }
      return img;
    });
  }, []);

  // Scrub frames on scroll — opacity stays at 1 the whole time
  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const index = Math.min(Math.floor(v * FRAME_COUNT), FRAME_COUNT - 1);
      drawFrame(index);
    });
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} style={{ height: '250vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0, transition: 'opacity 1.2s ease' }}
        />
        {/* Top gradient blends from the marquee above */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        {/* Bottom gradient blends into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-y border-white/[0.06] py-3 bg-void-raised">
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className={`font-mono text-[10px] tracking-[0.3em] uppercase ${item.color} px-6`}>
              {item.text}
            </span>
            <span className="text-white/10 text-[10px]">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Three Pillars ────────────────────────────────────────────────────────────
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
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-void-raised p-8 flex flex-col gap-5 group cursor-default"
              style={{ borderTop: `1px solid ${p.accent}` }}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[9px] tracking-[0.3em] uppercase ${p.accentClass}`}>
                  {p.label}
                </span>
                <motion.div
                  animate={{ rotate: [0, 10, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: i * 1.5, ease: 'easeInOut' }}
                >
                  <Icon size={18} style={{ color: p.accent }} />
                </motion.div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl tracking-tight text-white mb-1 group-hover:opacity-90 transition-opacity">
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

// ─── Founder ──────────────────────────────────────────────────────────────────
function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const credentials = ['Mozilla', 'Apple', 'F5 Networks', 'REI', '98point6', 'UW', 'Aon'];
  const stats = [
    { to: 25, suffix: '+', label: 'Years Enterprise Experience' },
    { to: 7,  suffix: '',  label: 'Major Organizations' },
    { to: 1998, suffix: '', label: 'The Origin Year', static: true },
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
              <motion.span
                key={c}
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/25 hover:text-signal-blue transition-colors cursor-default"
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
              >
                {c}{i < credentials.length - 1 && <span className="ml-5 text-white/10">·</span>}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right: stats with counter animations */}
        <div className="flex flex-col gap-0 lg:min-w-[220px] border border-white/[0.08] h-fit">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 border-b border-white/[0.08] last:border-b-0"
            >
              <div className="font-display font-bold text-4xl text-signal-blue tracking-tight">
                {s.static
                  ? <Counter to={s.to} suffix={s.suffix} duration={2200} delay={0.2 + i * 0.1} />
                  : <Counter to={s.to} suffix={s.suffix} delay={0.2 + i * 0.1} />
                }
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

// ─── Systems Deep Dive ────────────────────────────────────────────────────────
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
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                  className={`flex gap-6 p-4 font-mono text-[11px] hover:bg-white/[0.02] transition-colors ${i < specs.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
                >
                  <span className="text-signal-blue/60 tracking-widest uppercase w-28 shrink-0">{s.key}</span>
                  <span className="text-white/65">{s.val}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: pricing tiers */}
          <div className="flex flex-col gap-3 lg:min-w-[320px]">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="border border-white/[0.08] p-6 bg-void-raised cursor-default"
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

// ─── Case Study ───────────────────────────────────────────────────────────────
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
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
              <motion.div
                className="w-2 h-2 bg-signal-teal"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <span className="font-mono text-[10px] tracking-widest uppercase text-signal-teal">
                DEPLOYMENT: PHASE 1/2 COMPLETE
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-px border border-white/[0.08] lg:min-w-[320px] h-fit">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
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

// ─── What We Offer ────────────────────────────────────────────────────────────
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
      accent: '#0057FF',
    },
    {
      icon: Shield,
      label: 'CYBERSECURITY',
      title: 'Zero Trust Rollout',
      desc: '20+ years of enterprise security. Sophos ZTNA, Microsoft Defender for Endpoint, MDM governance (Kandji/Jamf). SANS-standard audits for every environment.',
      price: '$350/hr · Fixed-project from $10k',
      accent: '#FF6EC7',
    },
    {
      icon: Zap,
      label: 'AGENT AUTOMATION',
      title: 'Custom MCP Development',
      desc: 'Bespoke autonomous agents built on the Model Context Protocol. Helpdesk triage, sales automation, communication orchestration — your workflow, automated.',
      price: '$350/hr · Fixed-project from $10k',
      accent: '#00D4A8',
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
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className="bg-void-raised p-8 flex flex-col gap-5 group cursor-default"
                style={{ borderTop: `1px solid ${s.accent}` }}
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} style={{ color: s.accent }} />
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: s.accent }}>
                    {s.label}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg tracking-tight group-hover:text-white transition-colors">{s.title}</h3>
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

// ─── Manifesto ────────────────────────────────────────────────────────────────
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-20"
        >
          <motion.div
            className="w-16 h-16 border-2 border-signal-blue flex items-center justify-center shrink-0"
            animate={{ borderColor: ['#0057FF', '#00D4A8', '#FF6EC7', '#0057FF'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            <Terminal size={24} className="text-signal-blue" />
          </motion.div>
          <div>
            <div className="font-mono text-[9px] tracking-[0.35em] uppercase text-signal-blue mb-1">
              // THE SOVEREIGNTY MANIFESTO
            </div>
            <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/20">
              1998 — ESI-32 SAMPLER OVER TRANSPORT
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col divide-y divide-white/[0.06]">
          {blocks.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.08 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="py-10 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16 group"
            >
              <div className="lg:w-52 shrink-0">
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/25">
                  {b.label}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-[clamp(22px,3vw,36px)] tracking-tight leading-tight mb-4 text-white group-hover:text-signal-blue transition-colors duration-500">
                  {b.heading}
                </h3>
                <p className="text-white/55 text-base leading-relaxed max-w-2xl">
                  {b.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 pt-10 border-t border-white/[0.06] text-center font-mono text-[11px] tracking-[0.45em] uppercase text-white/20"
        >
          SUBVERT. CREATE. SOVEREIGNTY.
        </motion.div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="contact" className="relative px-8 py-40 border-t border-white/[0.06] flex flex-col items-center text-center overflow-hidden">
      {/* Aurora orbs + particles */}
      <AnimatedOrbs />
      <FloatingParticles />
      {/* Pulsing glow behind CTA */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(0,87,255,0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(0,212,168,0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(255,110,199,0.06) 0%, transparent 70%)',
            'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(0,87,255,0.08) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative font-mono text-[9px] tracking-[0.35em] uppercase text-signal-blue mb-6"
      >
        // FREE DISCOVERY CALL
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative font-display font-bold text-[clamp(36px,6vw,72px)] tracking-tight leading-tight mb-8"
      >
        INITIATE<br />
        <span className="text-white/30">SOVEREIGNTY AUDIT.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative text-white/50 text-base leading-relaxed max-w-xl mb-4"
      >
        60 minutes. No pitch deck. We audit your current infrastructure, identify
        where Digital Drag is bleeding your time, and propose the right Sovereign
        Node configuration for your operation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.28 }}
        className="relative font-mono text-[10px] tracking-widest uppercase text-white/25 mb-12 flex flex-wrap gap-6 justify-center"
      >
        <span>STANDARD: $2,500–$7,500 SETUP</span>
        <span className="text-white/10">·</span>
        <span className="text-signal-teal">NON-PROFIT: $1,500–$3,000</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.34 }}
        className="relative flex flex-col items-center gap-5"
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-body selection:bg-signal-blue/20 selection:text-signal-blue">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <Hero />
      <Marquee />
      <VideoSection />
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
