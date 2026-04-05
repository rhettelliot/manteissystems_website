'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Eye, Globe, Activity, Shield } from 'lucide-react';

const LOG_MESSAGES = [
  "INITIALIZING PROGNOSTICATION ENGINE...",
  "LOADING HISTORICAL DATASETS [LAYER 0]",
  "NEURAL INFERENCE ACTIVE [LAYER 1]",
  "PATTERN RECOGNITION SYNCED [LAYER 2]",
  "ACTIONABLE FORESIGHT GENERATED [LAYER 3]",
  "SYSTEM STATUS: OPTIMAL",
  "LATENCY: 12ms",
  "CONFIDENCE: 74%",
  "VOID CONNECTED.",
];

function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />;
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-prophetic-gold rounded-full pulse-breath" />
        <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-white/60">Manteis.Systems</span>
      </div>
      <div className="hidden md:flex gap-8">
        {['Methodology', 'HUD', 'Sectors'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="font-mono text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>
      <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
        {"// SYSTEM: ONLINE"}
      </div>
    </nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-8">
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full" />
      </motion.div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-mono text-[10px] tracking-[0.3em] text-prophetic-gold mb-8 uppercase">
            {"// VERSION 2026 //"}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            THE ARCHITECTURE <br />
            <span className="text-white/40">OF FORESIGHT.</span>
          </h1>
          <p className="font-mono text-xs md:text-sm text-white/40 max-w-xl mx-auto mb-12 leading-relaxed tracking-wide">
            Manteis Systems. Predictive modeling at the edge of the void. 
            Clinical precision for omniscient enterprise architecture.
          </p>
          <motion.div>
            <button className="group relative px-8 py-4 bg-transparent border border-white/10 hover:border-prophetic-gold transition-colors duration-500">
              <div className="absolute inset-0 bg-prophetic-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative font-mono text-[10px] font-bold tracking-[0.2em] uppercase">Initialize HUD</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12 font-mono text-[10px] text-white/20 uppercase tracking-widest leading-loose">
        [44.3148° N, 85.6024° W] <br />
        VOID_NODE_01
      </div>
    </section>
  );
}

function DepthStack() {
  const layers = [
    { id: 0, title: "Historical Data Ingestion", desc: "Layer 0 (Base)" },
    { id: 1, title: "The Prognostication Engine", desc: "Layer 1 (Raised)" },
    { id: 2, title: "Ocular Synthesis", desc: "Layer 2 (Elevated)" },
    { id: 3, title: "Actionable Foresight", desc: "Layer 3 (Surface)" },
  ];

  return (
    <section id="methodology" className="py-32 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-24">
          <div className="w-8 h-[1px] bg-prophetic-gold" />
          <h2 className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">01 — Methodology</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative h-[400px] flex items-center justify-center">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="absolute border border-white/10 bg-void-raised backdrop-blur-xl p-6 flex flex-col justify-between"
                style={{
                  width: `${400 - i * 40}px`,
                  height: `${240 - i * 20}px`,
                  zIndex: i,
                  transform: `translate(${i * 20}px, ${i * -20}px)`,
                  borderColor: layer.id === 3 ? 'rgba(253, 224, 71, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="font-mono text-[9px] text-white/20 uppercase tracking-widest">
                  {layer.desc}
                </div>
                <div className={`font-bold text-sm tracking-tight ${layer.id === 3 ? 'text-prophetic-gold' : 'text-white/60'}`}>
                  {layer.title}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-12">
            <h3 className="text-4xl font-bold tracking-tighter leading-tight">
              A multi-layered approach to <br />
              <span className="text-white/40">absolute certainty.</span>
            </h3>
            <p className="text-white/60 leading-relaxed max-w-md">
              Our stack operates in parallel, synthesizing raw historical streams into high-confidence predictive vectors. 
              No rounded edges. No cloud dependency. Just the void.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HUDShowcase() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const next = [...prev, LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)]];
        return next.slice(-8);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hud" className="py-32 px-8 border-t border-white/5 bg-void-raised/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-24">
          <div className="w-8 h-[1px] bg-prophetic-gold" />
          <h2 className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">02 — HUD Showcase</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {/* Radial Metrics */}
          <div className="bg-black border border-white/10 p-8 flex flex-col items-center justify-center gap-8">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="96" cy="96" r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <motion.circle
                  cx="96" cy="96" r="80" fill="none"
                  stroke="#FDE047" strokeWidth="2"
                  strokeDasharray="502.6"
                  initial={{ strokeDashoffset: 502.6 }}
                  whileInView={{ strokeDashoffset: 502.6 * (1 - 0.74) }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </svg>
              <div className="text-center">
                <div className="text-5xl font-bold tracking-tighter">74</div>
                <div className="font-mono text-[9px] text-white/40 uppercase tracking-widest">% CONFIDENCE</div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white/5" />
            <div className="flex justify-between w-full font-mono text-[10px] text-white/40">
              <span>LATENCY</span>
              <span className="text-prophetic-gold">12ms</span>
            </div>
          </div>

          {/* Live Log */}
          <div className="lg:col-span-2 bg-black border border-white/10 p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{"// MONO_STREAM_LIVE"}</div>
              <div className="w-2 h-2 bg-prophetic-gold rounded-full pulse-breath" />
            </div>
            <div className="font-mono text-[11px] space-y-2 h-48 overflow-hidden">
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-4"
                >
                  <span className="text-white/20">[{new Date().toLocaleTimeString()}]</span>
                  <span className={log.includes('OPTIMAL') || log.includes('CONNECTED') ? 'text-prophetic-gold' : 'text-white/60'}>
                    {log}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  const sectors = [
    { title: "Global Finance", icon: Globe, desc: "Predictive arbitrage in high-frequency environments." },
    { title: "Preventive Medicine", icon: Activity, desc: "Early-onset anomaly detection in biometric streams." },
    { title: "Crisis Management", icon: Shield, desc: "Real-time mitigation of systemic infrastructure failure." },
  ];

  return (
    <section id="sectors" className="py-32 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-24">
          <div className="w-8 h-[1px] bg-prophetic-gold" />
          <h2 className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">03 — Sectors of Sight</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/5">
          {sectors.map((sector) => (
            <div key={sector.title} className="bg-black p-12 group hover:bg-void-raised transition-colors duration-500">
              <sector.icon className="w-8 h-8 text-white/20 mb-8 group-hover:text-prophetic-gold transition-colors duration-500" />
              <h4 className="text-xl font-bold mb-4 tracking-tight">{sector.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed font-mono">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThePulse() {
  return (
    <section className="py-60 flex flex-col items-center justify-center text-center px-8 border-t border-white/5">
      <div className="relative mb-24">
        <div className="absolute inset-0 bg-prophetic-gold/20 blur-3xl pulse-breath rounded-full" />
        <div className="relative w-32 h-32 bg-prophetic-gold flex items-center justify-center pulse-breath">
          <Eye className="w-12 h-12 text-black" />
        </div>
      </div>
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
        THE VISION <br />
        <span className="text-white/40">OF THE MANTEIS.</span>
      </h2>
      <p className="font-mono text-xs text-white/20 uppercase tracking-[0.4em]">
        Omniscience is not a gift. It is an architecture.
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-prophetic-gold/30 selection:text-prophetic-gold">
      <GrainOverlay />
      <Nav />
      <Hero />
      <DepthStack />
      <HUDShowcase />
      <Sectors />
      <ThePulse />
      
      <footer className="py-12 px-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-white/20">Manteis Systems</span>
          <div className="w-1 h-1 bg-white/10 rounded-full" />
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">Oracle of Data</span>
        </div>
        <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
          © 2026 // ALL_RIGHTS_RESERVED
        </div>
      </footer>
    </main>
  );
}